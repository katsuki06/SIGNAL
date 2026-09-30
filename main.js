const { app, BrowserWindow, shell, session, ipcMain } = require("electron");
const WebSocket = require("ws");
const path = require("path");
const fs = require("fs");
const fsp = fs.promises;

if (process.argv.includes("--software-rendering")) {
  app.disableHardwareAcceleration();
}

app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
app.commandLine.appendSwitch("disable-features", "MediaSessionService");

// User-facing rename: SIGNAL -> SIGNAL.
// Keep the legacy userData directory so existing settings/custom sources survive.
app.setName("SIGNAL");
app.setAppUserModelId("app.signal.monitor");
try {
  app.setPath("userData", path.join(app.getPath("appData"), "global-signal"));
} catch (_) {}

let mainWindow = null;
let newsSession = null;

let cleanMode = "standard"; // standard | strict | off
let engineStatus = "loading"; // loading | ready | fallback | error
let blockerAdsOnly = null;
let blockerAdsTracking = null;
let activeBlocker = null;
let activeBlockerMode = null;
let engineSource = "startup"; // cache | network | fallback
let cleanPreferencePath = null;

let blockedTotal = 0;
let blockedSinceReset = 0;
let strictFailureReports = new Map();
let lastEngineError = "";

/*
  Temporary conservative fallback while Ghostery is still loading,
  or if its filter engine cannot be initialized.

  It intentionally protects YouTube/GoogleVideo delivery.
*/
let fallbackFilterAttached = false;

const fallbackBlockedHosts = [
  "scorecardresearch.com","taboola.com","outbrain.com","criteo.com","criteo.net",
  "pubmatic.com","rubiconproject.com","openx.net","adsrvr.org","casalemedia.com",
  "moatads.com","adnxs.com","quantserve.com","yieldmo.com","lijit.com","media.net",
  "smartadserver.com","adform.net","adform.com","bluekai.com","demdex.net",
  "krxd.net","rlcdn.com","mathtag.com"
];

const protectedHosts = [
  "youtube.com","www.youtube.com","m.youtube.com","googlevideo.com",
  "ytimg.com","ggpht.com","googleusercontent.com"
];

function hostMatches(hostname, suffix) {
  return hostname === suffix || hostname.endsWith("." + suffix);
}

function isProtectedHost(hostname) {
  return protectedHosts.some(suffix => hostMatches(hostname, suffix));
}

function fallbackShouldBlock(urlString) {
  if (cleanMode === "off") return false;
  try {
    const u = new URL(urlString);
    const host = u.hostname.toLowerCase();
    if (isProtectedHost(host)) return false;
    return fallbackBlockedHosts.some(suffix => hostMatches(host, suffix));
  } catch (_) {
    return false;
  }
}

function sendStats() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send("clean-feed:stats", {
    mode: cleanMode,
    engineStatus,
    engineSource,
    blockedTotal,
    blockedSinceReset,
    lastEngineError
  });
}

function sendModeChanged(reason = "") {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send("clean-feed:mode-changed", {
    mode: cleanMode,
    reason,
    engineStatus,
    engineSource
  });
}

function detachFallbackFilter() {
  if (!newsSession || !fallbackFilterAttached) return;
  // Electron webRequest has a single listener per event; remove fallback
  // before Ghostery registers its own request interception.
  newsSession.webRequest.onBeforeRequest(null);
  fallbackFilterAttached = false;
}

function attachFallbackFilter() {
  if (!newsSession || fallbackFilterAttached) return;

  newsSession.webRequest.onBeforeRequest((details, callback) => {
    const block = fallbackShouldBlock(details.url);
    if (block) {
      blockedTotal++;
      blockedSinceReset++;
      if (blockedSinceReset % 5 === 0) sendStats();
    }
    callback({ cancel: block });
  });
  fallbackFilterAttached = true;
}

function attachBlockedRequestCounter() {
  if (!newsSession) return;

  newsSession.webRequest.onErrorOccurred((details) => {
    // Ghostery/EasyList cancellations normally surface as blocked-by-client.
    if (
      details.error === "net::ERR_BLOCKED_BY_CLIENT" ||
      details.error === "net::ERR_BLOCKED_BY_RESPONSE"
    ) {
      blockedTotal++;
      blockedSinceReset++;
      if (blockedSinceReset % 5 === 0) sendStats();
    }
  });
}


function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (_) {
    return false;
  }
}

function loadCleanModePreference() {
  try {
    cleanPreferencePath = path.join(app.getPath("userData"), "clean-feed.json");
    const parsed = JSON.parse(fs.readFileSync(cleanPreferencePath, "utf8"));
    if (["standard", "strict", "off"].includes(parsed?.mode)) {
      cleanMode = parsed.mode;
    }
  } catch (_) {}
}

function persistCleanModePreference() {
  if (!cleanPreferencePath) {
    try {
      cleanPreferencePath = path.join(app.getPath("userData"), "clean-feed.json");
    } catch (_) {
      return;
    }
  }

  try {
    fs.mkdirSync(path.dirname(cleanPreferencePath), { recursive: true });
    fs.writeFileSync(
      cleanPreferencePath,
      JSON.stringify({ mode: cleanMode }, null, 2),
      "utf8"
    );
  } catch (_) {}
}

async function ghosteryFetch(input, init = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);

  let signal = controller.signal;
  if (init.signal && typeof AbortSignal?.any === "function") {
    signal = AbortSignal.any([init.signal, controller.signal]);
  }

  try {
    return await fetch(input, { ...init, signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function buildCachedBlocker(factory, cachePath) {
  const options = {
    path: cachePath,
    read: fsp.readFile,
    write: fsp.writeFile
  };

  try {
    return await factory(ghosteryFetch, options);
  } catch (firstError) {
    // A stale/corrupt serialized engine should never permanently disable
    // CLEAN FEED. Remove it once and rebuild from the official prebuilt data.
    try { await fsp.unlink(cachePath); } catch (_) {}
    try {
      return await factory(ghosteryFetch, options);
    } catch (_) {
      throw firstError;
    }
  }
}

function disableActiveBlocker() {
  if (!newsSession || !activeBlocker) return;
  try {
    activeBlocker.disableBlockingInSession(newsSession);
  } catch (error) {
    console.warn("Could not disable active blocker:", error);
  }
  activeBlocker = null;
  activeBlockerMode = null;
}

async function applyCleanMode(mode, reason = "") {
  if (!["standard", "strict", "off"].includes(mode)) mode = "standard";

  // Avoid tearing down and rebuilding Ghostery when Renderer simply
  // re-sends the already-active preference during startup.
  if (
    mode === cleanMode &&
    engineStatus === "ready" &&
    activeBlocker &&
    activeBlockerMode === mode
  ) {
    persistCleanModePreference();
    sendStats();
    sendModeChanged(reason);
    return;
  }

  cleanMode = mode;
  strictFailureReports.clear();
  persistCleanModePreference();

  disableActiveBlocker();

  if (mode === "off") {
    detachFallbackFilter();
    sendStats();
    sendModeChanged(reason);
    return;
  }

  if (engineStatus === "ready") {
    detachFallbackFilter();
    const blocker = mode === "strict" ? blockerAdsTracking : blockerAdsOnly;

    if (blocker) {
      try {
        blocker.enableBlockingInSession(newsSession);
        activeBlocker = blocker;
        activeBlockerMode = mode;
      } catch (error) {
        console.error("Ghostery enable failed:", error);
        lastEngineError = String(error?.message || error);
        engineStatus = "fallback";
        engineSource = "fallback";
        attachFallbackFilter();
      }
    }
  } else {
    attachFallbackFilter();
  }

  sendStats();
  sendModeChanged(reason);
}

async function initializeGhostery() {
  try {
    engineStatus = "loading";
    engineSource = "startup";
    sendStats();

    const mod = await import("@ghostery/adblocker-electron");
    const ElectronBlocker = mod.ElectronBlocker;

    if (!ElectronBlocker) throw new Error("ElectronBlocker export not found");
    if (typeof fetch !== "function") throw new Error("Global fetch is unavailable");

    const cacheDir = path.join(app.getPath("userData"), "adblock-cache");
    await fsp.mkdir(cacheDir, { recursive: true });

    const adsCache = path.join(cacheDir, "ads-only.engine.bin");
    const strictCache = path.join(cacheDir, "ads-tracking.engine.bin");
    const hadCache = fileExists(adsCache) && fileExists(strictCache);

    blockerAdsOnly = await buildCachedBlocker(
      ElectronBlocker.fromPrebuiltAdsOnly.bind(ElectronBlocker),
      adsCache
    );

    blockerAdsTracking = await buildCachedBlocker(
      ElectronBlocker.fromPrebuiltAdsAndTracking.bind(ElectronBlocker),
      strictCache
    );

    engineStatus = "ready";
    engineSource = hadCache ? "cache" : "network";
    lastEngineError = "";

    await applyCleanMode(cleanMode, hadCache ? "ghostery-cache-ready" : "ghostery-ready");
  } catch (error) {
    console.error("Ghostery initialization failed:", error);
    lastEngineError = String(error?.message || error);
    engineStatus = "fallback";
    engineSource = "fallback";
    attachFallbackFilter();
    sendStats();
    sendModeChanged("ghostery-fallback");
  }
}

/*
  STRICT automatic safety fallback.

  All 12 WebViews intentionally share one Electron Session because the
  current Ghostery Electron integration has known limitations when the same
  blocker is enabled in multiple Electron Session instances.

  If three distinct sources report STALLED/OFFLINE inside 30 seconds while
  STRICT is active, SIGNAL automatically drops back to STANDARD.
*/
function recordPlaybackFailure(payload = {}) {
  if (cleanMode !== "strict") return;

  const state = String(payload.state || "");
  if (!["STALLED", "OFFLINE"].includes(state)) return;

  const sourceIndex = Number(payload.sourceIndex);
  if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return;

  const now = Date.now();
  strictFailureReports.set(sourceIndex, now);

  for (const [key, timestamp] of strictFailureReports.entries()) {
    if (now - timestamp > 30000) strictFailureReports.delete(key);
  }

  if (strictFailureReports.size >= 3) {
    applyCleanMode("standard", "strict-auto-fallback");
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 1280,
    minHeight: 720,
    backgroundColor: "#050608",
    autoHideMenuBar: true,
    show: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webviewTag: true,
      backgroundThrottling: false,
      preload: path.join(__dirname, "preload.js")
    }
  });

  mainWindow.loadFile(path.join(__dirname, "renderer", "index.html"));

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.webContents.on("did-finish-load", () => {
    sendStats();
    sendCinemaFullscreenState();
  });

  mainWindow.on("enter-full-screen", () => {
    sendCinemaFullscreenState();
  });

  mainWindow.on("leave-full-screen", () => {
    sendCinemaFullscreenState();
  });
}

ipcMain.on("clean-feed:set-mode", (_event, mode) => {
  applyCleanMode(String(mode || "standard"), "user");
});

ipcMain.handle("clean-feed:get-state", async () => ({
  mode: cleanMode,
  engineStatus,
  blockedTotal,
  blockedSinceReset,
  lastEngineError
}));

ipcMain.on("clean-feed:reset-stats", () => {
  blockedSinceReset = 0;
  sendStats();
});

ipcMain.on("clean-feed:playback-health", (_event, payload) => {
  recordPlaybackFailure(payload);
});




function decodeXmlEntities(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/");
}

function stripXmlTags(value = "") {
  return decodeXmlEntities(String(value).replace(/<[^>]*>/g, "")).trim();
}

function extractXmlTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? stripXmlTags(match[1]) : "";
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 6500) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchGdeltHeadlines(query) {
  const url =
    "https://api.gdeltproject.org/api/v2/doc/doc?" +
    new URLSearchParams({
      query,
      mode: "ArtList",
      maxrecords: "24",
      format: "json",
      sort: "HybridRel"
    }).toString();

  const response = await fetchWithTimeout(url, {
    headers: {
      "User-Agent": "SIGNAL/1.0.0",
      "Accept": "application/json,text/plain,*/*",
      "Cache-Control": "no-cache"
    }
  }, 6500);

  if (!response.ok) throw new Error(`GDELT HTTP ${response.status}`);

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (_) {
    throw new Error("GDELT invalid JSON");
  }

  const articles = Array.isArray(data?.articles) ? data.articles : [];
  if (!articles.length) throw new Error("GDELT returned no articles");

  return {
    provider: "GDELT",
    articles: articles.slice(0, 24).map(item => ({
      title: String(item.title || ""),
      url: String(item.url || ""),
      domain: String(item.domain || ""),
      sourceCountry: String(item.sourcecountry || ""),
      language: String(item.language || ""),
      seenDate: String(item.seendate || "")
    }))
  };
}

async function fetchGoogleNewsRss(query) {
  const url =
    "https://news.google.com/rss/search?" +
    new URLSearchParams({
      q: query,
      hl: "en-US",
      gl: "US",
      ceid: "US:en"
    }).toString();

  const response = await fetchWithTimeout(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 SIGNAL/1.0.0",
      "Accept": "application/rss+xml,application/xml,text/xml,*/*",
      "Cache-Control": "no-cache"
    }
  }, 6500);

  if (!response.ok) throw new Error(`Google News RSS HTTP ${response.status}`);

  const xml = await response.text();
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];

  const articles = itemBlocks.slice(0, 24).map(block => {
    const rawTitle = extractXmlTag(block, "title");
    const link = extractXmlTag(block, "link");
    const pubDate = extractXmlTag(block, "pubDate");
    const sourceMatch = block.match(/<source(?:\s[^>]*)?>([\s\S]*?)<\/source>/i);
    const source = sourceMatch ? stripXmlTags(sourceMatch[1]) : "Google News";
    const title = rawTitle.replace(/\s+-\s+[^-]{2,80}$/u, "").trim() || rawTitle;

    return {
      title,
      url: link,
      domain: source,
      sourceCountry: "",
      language: "English",
      seenDate: pubDate
    };
  }).filter(item => item.title && item.url);

  if (!articles.length) throw new Error("Google News RSS returned no articles");

  return {
    provider: "GOOGLE NEWS RSS",
    articles
  };
}

ipcMain.handle("headlines:get", async (_event, topic = "world news") => {
  const query = String(topic || "world news").trim().slice(0, 160) || "world news";
  const errors = [];

  try {
    const result = await fetchGdeltHeadlines(query);
    return {
      ok: true,
      source: result.provider,
      fetchedAt: Date.now(),
      articles: result.articles
    };
  } catch (error) {
    errors.push(`GDELT: ${error?.name === "AbortError" ? "timeout" : String(error?.message || error)}`);
  }

  try {
    const result = await fetchGoogleNewsRss(query);
    return {
      ok: true,
      source: result.provider,
      fetchedAt: Date.now(),
      fallback: true,
      articles: result.articles
    };
  } catch (error) {
    errors.push(`Google News RSS: ${error?.name === "AbortError" ? "timeout" : String(error?.message || error)}`);
  }

  return {
    ok: false,
    source: "NONE",
    error: errors.join(" | "),
    articles: []
  };
});




const RADIO_BROWSER_SERVERS = [
  "https://de1.api.radio-browser.info",
  "https://nl1.api.radio-browser.info"
];

async function radioBrowserRequest(pathname) {
  let lastError = null;

  for (const server of RADIO_BROWSER_SERVERS) {
    try {
      const response = await fetchWithTimeout(server + pathname, {
        headers: {
          "User-Agent": "SIGNAL/1.0.0",
          "Accept": "application/json"
        }
      }, 7000);

      if (!response.ok) {
        throw new Error(`Radio Browser HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("Radio Browser unavailable");
}

ipcMain.handle("radio:search", async (_event, query = "") => {
  const name = String(query || "").trim().slice(0, 100);
  if (!name) {
    return { ok: false, error: "Enter a station name", stations: [] };
  }

  const params = new URLSearchParams({
    name,
    hidebroken: "true",
    order: "votes",
    reverse: "true",
    limit: "30"
  });

  try {
    const rows = await radioBrowserRequest(`/json/stations/search?${params.toString()}`);
    const raw = Array.isArray(rows) ? rows : [];

    const supportedCodecs = new Set(["MP3", "AAC", "AAC+", "OGG", "OPUS"]);

    const stations = raw
      .filter(item => Number(item.lastcheckok) === 1)
      .filter(item => String(item.url_resolved || item.url || "").trim())
      .filter(item => Number(item.hls || 0) === 0)
      .filter(item => {
        const codec = String(item.codec || "").toUpperCase();
        return !codec || supportedCodecs.has(codec);
      })
      .sort((a, b) => {
        const aHttps = String(a.url_resolved || a.url || "").startsWith("https://") ? 1 : 0;
        const bHttps = String(b.url_resolved || b.url || "").startsWith("https://") ? 1 : 0;
        if (aHttps !== bHttps) return bHttps - aHttps;
        return Number(b.votes || 0) - Number(a.votes || 0);
      })
      .slice(0, 18)
      .map(item => ({
        stationuuid: String(item.stationuuid || ""),
        name: String(item.name || "Unknown station"),
        url: String(item.url_resolved || item.url || ""),
        homepage: String(item.homepage || ""),
        favicon: String(item.favicon || ""),
        country: String(item.country || ""),
        countrycode: String(item.countrycode || ""),
        language: String(item.language || ""),
        codec: String(item.codec || ""),
        bitrate: Number(item.bitrate || 0),
        votes: Number(item.votes || 0)
      }));

    return {
      ok: true,
      source: "RADIO BROWSER",
      stations
    };
  } catch (error) {
    return {
      ok: false,
      source: "RADIO BROWSER",
      error: error?.name === "AbortError"
        ? "Radio Browser request timed out"
        : String(error?.message || error),
      stations: []
    };
  }
});

ipcMain.on("radio:click", async (_event, stationUuid) => {
  const id = String(stationUuid || "").trim();
  if (!id) return;

  try {
    await radioBrowserRequest(`/json/url/${encodeURIComponent(id)}`);
  } catch (_) {
    // Click reporting is best-effort and must never affect playback.
  }
});


/* ==========================================================
   JAPAN EMERGENCY WATCH
   P2P地震情報 JSON API v2 WebSocket
   ========================================================== */

const EMERGENCY_WS_LIVE = "wss://api.p2pquake.net/v2/ws";
const EMERGENCY_WS_SANDBOX = "wss://api-realtime-sandbox.p2pquake.net/v2/ws";

let emergencyWatchEnabled = true;
let emergencySandbox = false;
let emergencySocket = null;
let emergencyReconnectTimer = null;
let emergencyReconnectAttempt = 0;
let emergencyStatus = "STARTING";
let emergencyLastMessageAt = 0;
let emergencyLastEvent = null;
const emergencySeen = new Map();

function emergencyScaleLabel(scale) {
  const labels = {
    "-1":"不明","0":"震度0","10":"震度1","20":"震度2","30":"震度3","40":"震度4",
    "45":"震度5弱","46":"震度5弱以上","50":"震度5強","55":"震度6弱",
    "60":"震度6強","70":"震度7","99":"程度以上"
  };
  return labels[String(Number(scale))] || `震度 ${scale}`;
}

function broadJapanRegion(names = []) {
  const text = names.filter(Boolean).join(" ");

  const groups = [
    ["北海道", ["北海道","宗谷","上川","留萌","網走","北見","紋別","十勝","釧路","根室","胆振","日高","渡島","檜山","後志","石狩","空知"]],
    ["東北", ["青森","岩手","宮城","秋田","山形","福島"]],
    ["関東", ["茨城","栃木","群馬","埼玉","千葉","東京","神奈川"]],
    ["中部", ["新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知"]],
    ["関西", ["三重","滋賀","京都","大阪","兵庫","奈良","和歌山"]],
    ["中国・四国", ["鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知"]],
    ["九州", ["福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島"]],
    ["沖縄", ["沖縄","宮古","八重山","大東"]]
  ];

  for (const [label, keys] of groups) {
    if (keys.some(k => text.includes(k))) return label;
  }
  return "日本";
}

function emergencyKey(raw) {
  const code = Number(raw?.code || 0);
  const eventId = raw?.issue?.eventId || raw?.id || "";
  const serial = raw?.issue?.serial || "";
  const time = raw?.issue?.time || raw?.time || "";
  return `${code}:${eventId}:${serial}:${time}`;
}

function pruneEmergencySeen() {
  const cutoff = Date.now() - 30 * 60 * 1000;
  for (const [key, time] of emergencySeen.entries()) {
    if (time < cutoff) emergencySeen.delete(key);
  }
}

function normalizeEmergencyEvent(raw, { demo = false } = {}) {
  const code = Number(raw?.code || 0);

  if (demo) {
    return {
      trigger: true,
      demo: true,
      code: 551,
      kind: "EARTHQUAKE",
      level: "EMERGENCY",
      title: "地震情報 DEMO",
      region: "関東",
      areaText: "東京都・神奈川県・埼玉県",
      detail: "最大震度6弱 / 震源: 東京湾 / M6.1",
      scale: 55,
      scaleLabel: "震度6弱",
      issuedAt: new Date().toISOString(),
      source: "LOCAL DEMO",
      id: `demo-${Date.now()}`
    };
  }

  if (code === 556) {
    if (raw?.cancelled) {
      return {
        trigger: false,
        cancelled: true,
        code,
        kind: "EEW",
        title: "緊急地震速報（警報）取消",
        region: "日本",
        detail: "緊急地震速報（警報）が取り消されました",
        issuedAt: raw?.issue?.time || raw?.time || "",
        source: "P2P地震情報 / 気象庁"
      };
    }

    const areas = Array.isArray(raw?.areas) ? raw.areas : [];
    const maxScale = areas.reduce((m, a) =>
      Math.max(m, Number(a?.scaleTo ?? a?.scaleFrom ?? -1)), -1);
    const names = areas.flatMap(a => [a?.pref, a?.name]).filter(Boolean);
    const hypo = raw?.earthquake?.hypocenter || {};
    const mag = Number(hypo?.magnitude);
    const detail = [
      hypo?.name ? `震源: ${hypo.name}` : "",
      Number.isFinite(mag) && mag >= 0 ? `M${mag.toFixed(1)}` : "",
      maxScale >= 0 ? `予測最大 ${emergencyScaleLabel(maxScale)}` : ""
    ].filter(Boolean).join(" / ");

    return {
      trigger: true,
      code,
      kind: "EEW",
      level: "EMERGENCY",
      title: "緊急地震速報（警報）",
      region: broadJapanRegion(names.length ? names : [hypo?.name]),
      areaText: names.slice(0, 8).join("・"),
      detail: detail || "緊急地震速報（警報）を受信",
      scale: maxScale,
      scaleLabel: maxScale >= 0 ? emergencyScaleLabel(maxScale) : "",
      issuedAt: raw?.issue?.time || raw?.time || "",
      source: "P2P地震情報 / 気象庁",
      id: raw?.issue?.eventId || raw?.id || emergencyKey(raw),
      sandbox: emergencySandbox
    };
  }

  if (code === 551) {
    const eq = raw?.earthquake || {};
    const maxScale = Number(eq?.maxScale ?? -1);
    const points = Array.isArray(raw?.points) ? raw.points : [];
    const strongestPrefs = points
      .filter(p => Number(p?.scale ?? -1) >= Math.max(40, maxScale))
      .map(p => p?.pref)
      .filter(Boolean);
    const allPrefs = points.map(p => p?.pref).filter(Boolean);
    const prefs = [...new Set(strongestPrefs.length ? strongestPrefs : allPrefs)];
    const hypo = eq?.hypocenter || {};
    const mag = Number(hypo?.magnitude);
    const detail = [
      maxScale >= 0 ? `最大 ${emergencyScaleLabel(maxScale)}` : "",
      hypo?.name ? `震源: ${hypo.name}` : "",
      Number.isFinite(mag) && mag >= 0 ? `M${mag.toFixed(1)}` : ""
    ].filter(Boolean).join(" / ");

    return {
      trigger: maxScale >= 45,
      code,
      kind: "EARTHQUAKE",
      level: maxScale >= 45 ? "EMERGENCY" : "INFO",
      title: maxScale >= 45 ? "強い地震を検知" : "地震情報",
      region: broadJapanRegion(prefs.length ? prefs : [hypo?.name]),
      areaText: prefs.slice(0, 8).join("・"),
      detail: detail || "地震情報を受信",
      scale: maxScale,
      scaleLabel: maxScale >= 0 ? emergencyScaleLabel(maxScale) : "",
      issuedAt: raw?.issue?.time || raw?.time || eq?.time || "",
      source: "P2P地震情報 / 気象庁",
      id: raw?.id || emergencyKey(raw),
      sandbox: emergencySandbox
    };
  }

  if (code === 552) {
    if (raw?.cancelled) {
      return {
        trigger: false,
        cancelled: true,
        code,
        kind: "TSUNAMI",
        title: "津波予報解除",
        region: "日本",
        detail: "津波予報が解除されました",
        issuedAt: raw?.issue?.time || raw?.time || "",
        source: "P2P地震情報 / 気象庁"
      };
    }

    const areas = Array.isArray(raw?.areas) ? raw.areas : [];
    const warnings = areas.filter(a =>
      ["MajorWarning", "Warning"].includes(String(a?.grade || "")));
    const major = warnings.some(a => a?.grade === "MajorWarning");
    const areaNames = warnings.map(a => a?.name).filter(Boolean);

    return {
      trigger: warnings.length > 0,
      code,
      kind: "TSUNAMI",
      level: warnings.length ? "EMERGENCY" : "INFO",
      title: major ? "大津波警報" : warnings.length ? "津波警報" : "津波情報",
      region: broadJapanRegion(areaNames),
      areaText: areaNames.slice(0, 8).join("・"),
      detail: areaNames.length
        ? `${major ? "大津波警報" : "津波警報"}: ${areaNames.slice(0, 6).join("・")}`
        : "津波情報を受信",
      issuedAt: raw?.issue?.time || raw?.time || "",
      source: "P2P地震情報 / 気象庁",
      id: raw?.id || raw?.issue?.time || emergencyKey(raw),
      sandbox: emergencySandbox
    };
  }

  return null;
}

function emitEmergencyEvent(event) {
  if (!event || !mainWindow || mainWindow.isDestroyed()) return;
  emergencyLastEvent = event;
  mainWindow.webContents.send("emergency:event", event);
}

function handleEmergencyRaw(raw) {
  emergencyLastMessageAt = Date.now();

  const code = Number(raw?.code || 0);
  if (![551, 552, 556].includes(code)) return;

  const key = emergencyKey(raw);
  pruneEmergencySeen();

  if (emergencySeen.has(key)) return;
  emergencySeen.set(key, Date.now());

  const event = normalizeEmergencyEvent(raw);
  if (event) emitEmergencyEvent(event);
}

function emergencyWsUrl() {
  return emergencySandbox ? EMERGENCY_WS_SANDBOX : EMERGENCY_WS_LIVE;
}

function clearEmergencyReconnect() {
  if (emergencyReconnectTimer) {
    clearTimeout(emergencyReconnectTimer);
    emergencyReconnectTimer = null;
  }
}

function disconnectEmergencySocket() {
  clearEmergencyReconnect();

  const socket = emergencySocket;
  if (!socket) return;

  // Clear the shared reference first so stale socket callbacks can never
  // act as the current Emergency Watch connection.
  emergencySocket = null;

  try {
    socket.removeAllListeners();

    // ws emits an asynchronous "error" when a CONNECTING socket is
    // aborted. Without a listener that becomes an uncaught exception in
    // Electron's main process. Keep a no-op listener during disposal.
    socket.on("error", () => {});

    if (socket.readyState === WebSocket.CONNECTING) {
      socket.terminate();
    } else if (socket.readyState === WebSocket.OPEN) {
      socket.close(1000, "SIGNAL reconnect");
    } else if (socket.readyState === WebSocket.CLOSING) {
      // Already closing; nothing else to do.
    } else {
      // CLOSED
    }
  } catch (_) {
    // Disposal must never terminate the Electron main process.
  }
}

function scheduleEmergencyReconnect() {
  if (!emergencyWatchEnabled || emergencyReconnectTimer) return;

  const delays = [2000, 5000, 15000, 30000, 60000];
  const delay = delays[Math.min(emergencyReconnectAttempt, delays.length - 1)];
  emergencyReconnectAttempt++;

  setEmergencyStatus(`RETRY ${Math.round(delay / 1000)}s`);

  emergencyReconnectTimer = setTimeout(() => {
    emergencyReconnectTimer = null;
    connectEmergencyWatch();
  }, delay);
}

function setEmergencyStatus(status, extra = {}) {
  emergencyStatus = status;
  if (!mainWindow || mainWindow.isDestroyed()) return;

  mainWindow.webContents.send("emergency:status", {
    enabled: emergencyWatchEnabled,
    sandbox: emergencySandbox,
    status: emergencyStatus,
    lastMessageAt: emergencyLastMessageAt,
    ...extra
  });
}

function connectEmergencyWatch() {
  disconnectEmergencySocket();

  if (!emergencyWatchEnabled) {
    setEmergencyStatus("OFF");
    return;
  }

  setEmergencyStatus(emergencySandbox ? "SANDBOX CONNECTING" : "CONNECTING");

  try {
    const socket = new WebSocket(emergencyWsUrl(), {
      handshakeTimeout: 10000,
      headers: {
        "User-Agent": "SIGNAL/1.0.0"
      }
    });
    emergencySocket = socket;

    socket.on("open", () => {
      if (emergencySocket !== socket) return;
      emergencyReconnectAttempt = 0;
      setEmergencyStatus(emergencySandbox ? "SANDBOX LIVE" : "LIVE");
    });

    socket.on("message", data => {
      if (emergencySocket !== socket) return;
      try {
        const raw = JSON.parse(String(data));
        handleEmergencyRaw(raw);
      } catch (_) {}
    });

    socket.on("error", error => {
      if (emergencySocket !== socket) return;
      setEmergencyStatus("ERROR", {
        error: String(error?.message || error)
      });
    });

    socket.on("close", () => {
      if (emergencySocket !== socket) return;
      emergencySocket = null;
      if (emergencyWatchEnabled) scheduleEmergencyReconnect();
    });
  } catch (error) {
    setEmergencyStatus("ERROR", {
      error: String(error?.message || error)
    });
    scheduleEmergencyReconnect();
  }
}

ipcMain.handle("emergency:get-state", async () => ({
  enabled: emergencyWatchEnabled,
  sandbox: emergencySandbox,
  status: emergencyStatus,
  lastMessageAt: emergencyLastMessageAt,
  lastEvent: emergencyLastEvent
}));

ipcMain.on("emergency:set-enabled", (_event, enabled) => {
  const next = !!enabled;

  // Renderer restores its local setting after startup. If Main is already
  // connecting with the same setting, do not tear down and recreate the
  // socket — that was the v1.0 startup crash.
  if (next === emergencyWatchEnabled) {
    if (
      next &&
      !emergencySocket &&
      !emergencyReconnectTimer
    ) {
      emergencyReconnectAttempt = 0;
      connectEmergencyWatch();
    } else {
      setEmergencyStatus(next ? emergencyStatus : "OFF");
    }
    return;
  }

  emergencyWatchEnabled = next;
  emergencyReconnectAttempt = 0;

  if (emergencyWatchEnabled) {
    connectEmergencyWatch();
  } else {
    disconnectEmergencySocket();
    setEmergencyStatus("OFF");
  }
});

ipcMain.on("emergency:set-sandbox", (_event, enabled) => {
  const next = !!enabled;

  if (emergencySandbox === next) {
    setEmergencyStatus(emergencyWatchEnabled ? emergencyStatus : "OFF");
    return;
  }

  emergencySandbox = next;
  emergencyReconnectAttempt = 0;

  if (emergencyWatchEnabled) {
    connectEmergencyWatch();
  } else {
    setEmergencyStatus("OFF");
  }
});

ipcMain.on("emergency:demo", () => {
  emitEmergencyEvent(normalizeEmergencyEvent({}, { demo: true }));
});


/* ==========================================================
   FULLSCREEN / CINEMA MODE
   ========================================================== */

ipcMain.on("cinema:set-fullscreen", (_event, enabled) => {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.setFullScreen(!!enabled);
});

ipcMain.handle("cinema:get-fullscreen", async () => {
  if (!mainWindow || mainWindow.isDestroyed()) return false;
  return mainWindow.isFullScreen();
});

function sendCinemaFullscreenState() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send("cinema:fullscreen-changed", mainWindow.isFullScreen());
}

app.whenReady().then(async () => {
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    if (permission === "media" || permission === "fullscreen") return callback(true);
    callback(false);
  });

  newsSession = session.fromPartition("persist:global-signal");

  newsSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    if (permission === "media" || permission === "fullscreen") return callback(true);
    callback(false);
  });

  attachBlockedRequestCounter();
  loadCleanModePreference();

  // Protect the shared news session immediately.
  attachFallbackFilter();

  // Critical stability change:
  // Wait until Ghostery is either READY or explicitly in FALLBACK before
  // creating the first news WebView. This prevents first-load ads from
  // slipping through while the filter engine is still initializing.
  await initializeGhostery();

  createWindow();

  // Japan emergency watch runs independently from the news WebViews.
  connectEmergencyWatch();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  disconnectEmergencySocket();
  if (process.platform !== "darwin") app.quit();
});
