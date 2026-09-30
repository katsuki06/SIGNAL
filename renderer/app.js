const SOURCE_CATALOG_BASE = {
  nhk_world:{
    id:"nhk_world",code:"JP",flag:"🇯🇵",country:"JAPAN",city:"TOKYO",tz:"Asia/Tokyo",
    station:"NHK WORLD-JAPAN",
    url:"https://www.youtube.com/channel/UCSPEjw8F2nQDtmUKPFNF7_A/live",
    official:"https://www3.nhk.or.jp/nhkworld/en/live/"
  },
  abc_us:{
    id:"abc_us",code:"US",flag:"🇺🇸",country:"UNITED STATES",city:"NEW YORK",tz:"America/New_York",
    station:"ABC NEWS LIVE",
    url:"https://www.youtube.com/channel/UCBi2mrWuNuyYy4gbM6fU18Q/live",
    official:"https://abcnews.com/Live/"
  },
  sky_news:{
    id:"sky_news",code:"GB",flag:"🇬🇧",country:"UNITED KINGDOM",city:"LONDON",tz:"Europe/London",
    station:"SKY NEWS",
    url:"https://www.youtube.com/channel/UCoMdktPbSTixAyNGwb-UYkQ/live",
    official:"https://news.sky.com/watch-live"
  },
  france24:{
    id:"france24",code:"FR",flag:"🇫🇷",country:"FRANCE",city:"PARIS",tz:"Europe/Paris",
    station:"FRANCE 24 ENGLISH",
    url:"https://www.youtube.com/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg/live",
    official:"https://www.france24.com/en/live"
  },
  dw_news:{
    id:"dw_news",code:"DE",flag:"🇩🇪",country:"GERMANY",city:"BERLIN",tz:"Europe/Berlin",
    station:"DW NEWS",
    url:"https://www.youtube.com/channel/UCknLrEdhRCp1aegoMqRaCZg/live",
    official:"https://www.dw.com/en/live-tv/channel-english"
  },
  cgtn:{
    id:"cgtn",code:"CN",flag:"🇨🇳",country:"CHINA",city:"BEIJING",tz:"Asia/Shanghai",
    station:"CGTN",
    url:"https://www.youtube.com/channel/UCgrNz-aDmcr2uuto8_DL2jg/live",
    official:"https://www.cgtn.com/tv"
  },
  arirang:{
    id:"arirang",code:"KR",flag:"🇰🇷",country:"SOUTH KOREA",city:"SEOUL",tz:"Asia/Seoul",
    station:"ARIRANG TV",
    url:"https://www.youtube.com/channel/UC-PHIZjV-oX8H7zD1cCN2NQ/live",
    official:"https://www.arirang.com/live"
  },
  dd_news:{
    id:"dd_news",code:"IN",flag:"🇮🇳",country:"INDIA",city:"NEW DELHI",tz:"Asia/Kolkata",
    station:"DD NEWS",
    url:"https://www.youtube.com/channel/UCKwucPzHZ7zCUIf7If-Wo1g/live",
    official:"https://www.youtube.com/@DDNews/live"
  },
  abc_au:{
    id:"abc_au",code:"AU",flag:"🇦🇺",country:"AUSTRALIA",city:"SYDNEY",tz:"Australia/Sydney",
    station:"ABC NEWS AUSTRALIA",
    url:"https://www.youtube.com/channel/UCVgO39Bk5sMo66-6o6Spn6Q/live",
    official:"https://www.abc.net.au/news/newschannel"
  },
  cbc_news:{
    id:"cbc_news",code:"CA",flag:"🇨🇦",country:"CANADA",city:"TORONTO",tz:"America/Toronto",
    station:"CBC NEWS",
    url:"https://www.youtube.com/channel/UCuFFtHWoLl5fauMMD5Ww2jA/live",
    official:"https://www.youtube.com/@CBCNews/live"
  },
  rtve24:{
    id:"rtve24",code:"ES",flag:"🇪🇸",country:"SPAIN",city:"MADRID",tz:"Europe/Madrid",
    station:"RTVE / CANAL 24H",
    url:"https://www.youtube.com/@rtvenoticias/live",
    official:"https://www.rtve.es/play/videos/directo/"
  },
  ann:{
    id:"ann",code:"JP-JA",flag:"🇯🇵",country:"JAPAN",city:"TOKYO",tz:"Asia/Tokyo",
    station:"テレ朝NEWS24",
    url:"https://www.youtube.com/@ANNnewsCH/live",
    official:"https://news.tv-asahi.co.jp/news-lives/"
  },
  tbs_news:{
    id:"tbs_news",code:"JP-JA",flag:"🇯🇵",country:"JAPAN",city:"TOKYO",tz:"Asia/Tokyo",
    station:"TBS NEWS DIG",
    url:"https://www.youtube.com/@tbsnewsdig/live",
    official:"https://newsdig.tbs.co.jp/list/live"
  },
  ntv_news:{
    id:"ntv_news",code:"JP-JA",flag:"🇯🇵",country:"JAPAN",city:"TOKYO",tz:"Asia/Tokyo",
    station:"日テレNEWS",
    url:"https://www.youtube.com/@ntv_news/live",
    official:"https://news.ntv.co.jp/"
  },
  fnn_news:{
    id:"fnn_news",code:"JP-JA",flag:"🇯🇵",country:"JAPAN",city:"TOKYO",tz:"Asia/Tokyo",
    station:"FNNプライムオンライン",
    url:"https://www.youtube.com/user/FNNnewsCH/live",
    official:"https://www.fnn.jp/"
  },
  cna:{
    id:"cna",code:"SG",flag:"🇸🇬",country:"SINGAPORE",city:"SINGAPORE",tz:"Asia/Singapore",
    station:"CNA",
    url:"https://www.youtube.com/@channelnewsasia/live",
    official:"https://www.channelnewsasia.com/watch"
  },
  aljazeera:{
    id:"aljazeera",code:"QA",flag:"🌍",country:"GLOBAL",city:"DOHA",tz:"Asia/Qatar",
    station:"AL JAZEERA ENGLISH",
    url:"https://www.youtube.com/@aljazeeraenglish/live",
    official:"https://www.aljazeera.com/video/live/"
  },
  bloomberg:{
    id:"bloomberg",code:"US",flag:"📈",country:"UNITED STATES",city:"NEW YORK",tz:"America/New_York",
    station:"BLOOMBERG TELEVISION",
    url:"https://www.youtube.com/@markets/live",
    official:"https://www.bloomberg.com/live"
  }
};

const PRESETS = {
  global:{
    label:"GLOBAL",
    ids:["nhk_world","abc_us","sky_news","france24","dw_news","cgtn","arirang","dd_news","abc_au","cbc_news","rtve24","ann"]
  },
  asia:{
    label:"ASIA",
    ids:["nhk_world","ann","tbs_news","ntv_news","fnn_news","cgtn","arirang","dd_news","cna","abc_au","aljazeera","bloomberg"]
  },
  europe:{
    label:"EUROPE",
    ids:["sky_news","france24","dw_news","rtve24","aljazeera","bloomberg","abc_us","cbc_news"]
  },
  americas:{
    label:"AMERICAS",
    ids:["abc_us","cbc_news","bloomberg","aljazeera","sky_news","france24"]
  },
  japan:{
    label:"JAPAN",
    ids:["ann","tbs_news","ntv_news","fnn_news","nhk_world"]
  },
  emergency:{
    label:"JAPAN EMERGENCY",
    ids:["ann","tbs_news","ntv_news","fnn_news"]
  }
};

const clockSources = [
 {flag:"🇯🇵",country:"JAPAN",city:"TOKYO",tz:"Asia/Tokyo"},
 {flag:"🇺🇸",country:"UNITED STATES",city:"NEW YORK",tz:"America/New_York"},
 {flag:"🇬🇧",country:"UNITED KINGDOM",city:"LONDON",tz:"Europe/London"},
 {flag:"🇫🇷",country:"FRANCE",city:"PARIS",tz:"Europe/Paris"},
 {flag:"🇩🇪",country:"GERMANY",city:"BERLIN",tz:"Europe/Berlin"},
 {flag:"🇨🇳",country:"CHINA",city:"BEIJING",tz:"Asia/Shanghai"},
 {flag:"🇰🇷",country:"SOUTH KOREA",city:"SEOUL",tz:"Asia/Seoul"},
 {flag:"🇮🇳",country:"INDIA",city:"NEW DELHI",tz:"Asia/Kolkata"},
 {flag:"🇦🇺",country:"AUSTRALIA",city:"SYDNEY",tz:"Australia/Sydney"},
 {flag:"🇨🇦",country:"CANADA",city:"TORONTO",tz:"America/Toronto"},
 {flag:"🇪🇸",country:"SPAIN",city:"MADRID",tz:"Europe/Madrid"},
 {flag:"🇮🇹",country:"ITALY",city:"ROME",tz:"Europe/Rome"}
];

function readJsonStorage(key,fallback){
  try{
    const raw=localStorage.getItem(key);
    return raw?JSON.parse(raw):fallback;
  }catch(e){ return fallback; }
}

function customSourceCatalog(){
  const list=readJsonStorage("gs_custom_sources_v1",[]);
  const out={};
  for(const item of Array.isArray(list)?list:[]){
    if(item && item.id && item.url) out[item.id]=item;
  }
  return out;
}

function fullSourceCatalog(){
  return {...SOURCE_CATALOG_BASE,...customSourceCatalog()};
}

const JAPAN_EMERGENCY_KEY="gs_japan_emergency_v1";

function readJapanEmergency(){
  try{
    const raw=localStorage.getItem(JAPAN_EMERGENCY_KEY);
    if(!raw) return null;
    const parsed=JSON.parse(raw);
    return parsed?.active ? parsed : null;
  }catch(e){
    return null;
  }
}

function activePresetKey(){
  if(readJapanEmergency()) return "emergency";
  const saved=localStorage.getItem("gs_active_preset_v1")||"global";
  if(saved==="custom") return "custom";
  return PRESETS[saved]?saved:"global";
}

function currentLayoutIds(){
  const preset=activePresetKey();
  if(preset==="custom"){
    const saved=readJsonStorage("gs_custom_layout_v1",PRESETS.global.ids);
    return Array.isArray(saved)?saved.slice(0,12):PRESETS.global.ids.slice();
  }
  return PRESETS[preset].ids.slice(0,12);
}

function resolveActiveSources(){
  const catalog=fullSourceCatalog();
  return currentLayoutIds()
    .filter(id=>id && id!=="__empty__" && catalog[id])
    .map(id=>({...catalog[id]}));
}

let sources=resolveActiveSources();

const $ = q => document.querySelector(q);
const views = [];
const playerMode = sources.map(()=>true);
const sourceOnline = sources.map(()=>false);
const sourceHealth = sources.map(()=>({
  state:"STARTING",
  lastTime:null,
  lastProgressAt:Date.now(),
  lastGoodAt:0,
  reconnectAttempts:0,
  recoveryTimer:null,
  checking:false,
  reason:""
}));
const WATCHDOG = {
  intervalMs:5000,
  stalledMs:18000,
  firstRetryMs:1000,
  secondRetryMs:5000,
  thirdRetryMs:15000,
  offlineRetryMs:60000
};

const state = {
  mode: "manual",
  audio: new Map(),       // index -> 0..100
  focusIndex: null,
  newsroomLead: null,
  newsroomBg: [],
  lastScanIndex: null,
  intervalSec: 30,
  followAudio: true,
  scanTimer: null,
  nextScanAt: null,
  autoRecover: true,
  cleanMode: "standard",
  cleanEngineStatus: "loading",
  cleanEngineSource: "startup",
  blockedSinceReset: 0
};

const CORE_SETTINGS_KEY="gs_core_settings_v1";
const CLEAN_PREF_KEY="gs_clean_mode_v1";

function readCoreSettings(){
  try{
    const raw=localStorage.getItem(CORE_SETTINGS_KEY);
    if(!raw) return {};
    const parsed=JSON.parse(raw);
    return parsed && typeof parsed==="object" ? parsed : {};
  }catch(e){
    return {};
  }
}

function loadCoreSettingsIntoState(){
  const saved=readCoreSettings();

  if(["manual","multi","scan","newsroom"].includes(saved.mode)){
    state.mode=saved.mode;
  }

  if([10,20,30,60].includes(Number(saved.intervalSec))){
    state.intervalSec=Number(saved.intervalSec);
  }

  if(typeof saved.followAudio==="boolean"){
    state.followAudio=saved.followAudio;
  }

  if(typeof saved.autoRecover==="boolean"){
    state.autoRecover=saved.autoRecover;
  }
}

function persistCoreSettings(){
  try{
    localStorage.setItem(CORE_SETTINGS_KEY,JSON.stringify({
      mode:state.mode,
      intervalSec:state.intervalSec,
      followAudio:state.followAudio,
      autoRecover:state.autoRecover
    }));
  }catch(e){}
}

loadCoreSettingsIntoState();

function fmtTime(tz){
  return new Intl.DateTimeFormat("en-GB",{
    timeZone:tz,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false
  }).format(new Date());
}
function zone(tz){
  return new Intl.DateTimeFormat("en-US",{
    timeZone:tz,timeZoneName:"short"
  }).formatToParts(new Date()).find(x=>x.type==="timeZoneName")?.value||"";
}
function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

function cleanFeedCss(mode="standard"){
  const standard = `
    [id*="cookie" i],[class*="cookie" i],
    [id*="consent" i],[class*="consent" i],
    [id*="newsletter" i],[class*="newsletter" i],
    [id*="subscribe" i][class*="modal" i],
    [class*="subscribe" i][class*="modal" i],
    [id*="popup" i][class*="modal" i],
    [class*="popup" i][class*="modal" i],
    [aria-label*="newsletter" i],
    [aria-label*="subscribe" i]{
      display:none!important;
      visibility:hidden!important;
      pointer-events:none!important;
    }

    [class*="recommendation" i],
    [class*="recommended" i],
    [class*="promo" i][class*="banner" i]{
      display:none!important;
    }

    ytd-merch-shelf-renderer,
    ytd-popup-container,
    ytd-mealbar-promo-renderer,
    #clarify-box,#offer-module,#related,#comments,#chat-container,#panels{
      display:none!important;
    }
  `;

  const strict = `
    #player-ads,
    .video-ads,
    .ytp-ad-module,
    ytd-ad-slot-renderer,
    ytd-display-ad-renderer,
    ytd-promoted-sparkles-web-renderer,
    ytd-promoted-video-renderer,
    ytd-in-feed-ad-layout-renderer,
    ytd-action-companion-ad-renderer,
    ytd-companion-slot-renderer{
      display:none!important;
      visibility:hidden!important;
      pointer-events:none!important;
    }
  `;

  return mode==="strict" ? standard + strict : standard;
}

async function applyCleanFeedToView(i){
  if(state.cleanMode==="off") return;
  const w=views[i];
  if(!w) return;

  try{
    await w.insertCSS(cleanFeedCss(state.cleanMode));

    await w.executeJavaScript(`
      (() => {
        const mode=${JSON.stringify(state.cleanMode)};

        const clickDismissers = () => {
          const phrases = [
            'reject all','reject','decline','decline all',
            'continue without accepting','necessary only','essential only',
            '閉じる','拒否','すべて拒否','必須のみ'
          ];

          const candidates=[...document.querySelectorAll('button,[role="button"],a')];
          for(const el of candidates){
            const txt=(el.innerText||el.textContent||'').trim().toLowerCase();
            if(!txt || txt.length>80) continue;
            if(phrases.some(p=>txt===p || txt.includes(p))){
              const rect=el.getBoundingClientRect();
              if(rect.width>0 && rect.height>0){
                try{el.click();}catch(e){}
              }
            }
          }
        };

        const removeObviousOverlays = () => {
          const selectors=[
            '[id*="cookie" i]','[class*="cookie" i]',
            '[id*="consent" i]','[class*="consent" i]',
            '[id*="newsletter" i]','[class*="newsletter" i]'
          ];

          for(const s of selectors){
            document.querySelectorAll(s).forEach(el=>{
              if(el.closest('#movie_player')) return;
              const style=getComputedStyle(el);
              const rect=el.getBoundingClientRect();
              if(style.position==='fixed' || style.position==='sticky' || rect.height>80){
                el.style.setProperty('display','none','important');
              }
            });
          }

          document.documentElement.style.removeProperty('overflow');
          document.body?.style.removeProperty('overflow');
        };

        const skipYouTubeAdsWhenPossible = () => {
          if(mode!=='strict') return;
          const selectors=[
            '.ytp-skip-ad-button',
            '.ytp-ad-skip-button',
            '.ytp-ad-skip-button-modern',
            '.ytp-skip-ad-button__text',
            '[id^="skip-button"] button'
          ];

          for(const selector of selectors){
            const btn=document.querySelector(selector);
            if(btn){
              const rect=btn.getBoundingClientRect();
              if(rect.width>0 && rect.height>0){
                try{btn.click();}catch(e){}
                break;
              }
            }
          }
        };

        clickDismissers();
        removeObviousOverlays();
        skipYouTubeAdsWhenPossible();
        return true;
      })()
    `,true);
  }catch(e){}
}

async function applyCleanFeedAll(){
  if(state.cleanMode==="off") return;
  await Promise.all(views.map((_,i)=>applyCleanFeedToView(i)));
}

/*
  Lightweight YouTube assist.
  Network filtering remains Ghostery's job. This only handles UI-level
  "Skip Ad" / close-overlay controls when YouTube serves an ad that cannot
  be removed cleanly at the request layer. It never seeks, speeds up, or
  rewrites the live video stream.
*/
async function assistYouTubeAd(i){
  if(state.cleanMode==="off") return;
  const w=views[i];
  if(!w) return;

  try{
    await w.executeJavaScript(`
      (() => {
        const player=document.querySelector('#movie_player');
        if(!player) return {youtube:false};

        const adShowing=
          player.classList.contains('ad-showing') ||
          !!document.querySelector('.ytp-ad-player-overlay,.video-ads');

        if(!adShowing) return {youtube:true,ad:false};

        const skipSelectors=[
          '.ytp-skip-ad-button',
          '.ytp-ad-skip-button',
          '.ytp-ad-skip-button-modern',
          '[id^="skip-button"] button'
        ];

        for(const selector of skipSelectors){
          const btn=document.querySelector(selector);
          if(btn){
            const r=btn.getBoundingClientRect();
            if(r.width>0 && r.height>0){
              try{btn.click();}catch(e){}
              return {youtube:true,ad:true,action:'skip'};
            }
          }
        }

        const closeSelectors=[
          '.ytp-ad-overlay-close-button',
          '.ytp-ad-overlay-close-container button'
        ];

        for(const selector of closeSelectors){
          const btn=document.querySelector(selector);
          if(btn){
            try{btn.click();}catch(e){}
            return {youtube:true,ad:true,action:'close'};
          }
        }

        return {youtube:true,ad:true,action:'wait'};
      })()
    `,true);
  }catch(e){}
}

function assistYouTubeAds(){
  if(state.cleanMode==="off") return;
  views.forEach((_,i)=>assistYouTubeAd(i));
}

function updateCleanFeedUi(){
  const select=$("#cleanFeedSelect");
  select.value=state.cleanMode;
  select.classList.toggle("strict",state.cleanMode==="strict");
  select.classList.toggle("off",state.cleanMode==="off");

  const engine=$("#cleanEngine");
  const status=state.cleanEngineStatus||"loading";
  engine.className=`clean-engine ${status}`;

  if(status==="ready"){
    engine.textContent=state.cleanEngineSource==="cache"
      ?"GHOSTERY READY / CACHE"
      :"GHOSTERY READY";
  }else if(status==="fallback") engine.textContent="SAFE FALLBACK";
  else if(status==="error") engine.textContent="ENGINE ERROR";
  else engine.textContent="GHOSTERY LOADING";
}

async function setCleanFeedMode(mode, options={}){
  if(!["standard","strict","off"].includes(mode)) mode="standard";
  const previous=state.cleanMode;
  state.cleanMode=mode;
  try{localStorage.setItem(CLEAN_PREF_KEY,mode);}catch(e){}
  updateCleanFeedUi();

  if(window.globalSignal){
    window.globalSignal.setCleanFeedMode(mode);
  }

  if(mode==="off"){
    toast("CLEAN FEED OFF — reloading sources");
    setTimeout(()=>reconnectAll(),250);
    return;
  }

  await applyCleanFeedAll();

  if(previous!==mode && options.reload!==false){
    // A reload is necessary so network filtering applies from page startup.
    toast(mode==="strict"?"STRICT CLEAN FEED enabled":"STANDARD CLEAN FEED enabled");
    setTimeout(()=>reconnectAll(),250);
  }
}

function reportHealthToBlocker(i,nextState){
  if(!window.globalSignal) return;
  if(!["STALLED","OFFLINE"].includes(nextState)) return;

  try{
    window.globalSignal.reportPlaybackHealth({
      sourceIndex:i,
      state:nextState,
      station:sources[i]?.station||""
    });
  }catch(e){}
}

function bindCleanFeedBridge(){
  if(!window.globalSignal) return;

  window.globalSignal.getCleanFeedState().then(info=>{
    state.cleanMode=String(info.mode||"standard");
    state.cleanEngineStatus=String(info.engineStatus||"loading");
    state.cleanEngineSource=String(info.engineSource||"startup");
    state.blockedSinceReset=Number(info.blockedSinceReset||0);
    $("#blockedCount").textContent=state.blockedSinceReset;

    const saved=localStorage.getItem(CLEAN_PREF_KEY);
    if(["standard","strict","off"].includes(saved) && saved!==state.cleanMode){
      setCleanFeedMode(saved,{reload:false});
    }else{
      updateCleanFeedUi();
    }
  }).catch(()=>{});

  window.globalSignal.onCleanFeedStats(info=>{
    state.cleanMode=String(info.mode||state.cleanMode);
    state.cleanEngineStatus=String(info.engineStatus||state.cleanEngineStatus);
    state.cleanEngineSource=String(info.engineSource||state.cleanEngineSource);
    state.blockedSinceReset=Number(info.blockedSinceReset||0);
    $("#blockedCount").textContent=state.blockedSinceReset;
    updateCleanFeedUi();
    if(settingsIsOpen()) syncSettingsUi();
  });

  window.globalSignal.onCleanFeedModeChanged(info=>{
    const previous=state.cleanMode;
    state.cleanMode=String(info.mode||"standard");
    state.cleanEngineStatus=String(info.engineStatus||state.cleanEngineStatus);
    state.cleanEngineSource=String(info.engineSource||state.cleanEngineSource);
    updateCleanFeedUi();

    if(info.reason==="strict-auto-fallback"){
      toast("STRICT caused multiple source failures — switched to STANDARD");
      setTimeout(()=>reconnectAll(),300);
    }else if(info.reason==="ghostery-ready"){
      toast("Ghostery filter engine ready");
      if(previous!=="off") setTimeout(()=>reconnectAll(),300);
    }else if(info.reason==="ghostery-fallback"){
      toast("Ghostery unavailable — using Safe Fallback");
    }
  });
}


function catalogSortedEntries(){
  const catalog=fullSourceCatalog();
  return Object.values(catalog).sort((a,b)=>{
    const country=(a.country||"").localeCompare(b.country||"");
    if(country!==0) return country;
    return (a.station||"").localeCompare(b.station||"");
  });
}

function presetLabel(key){
  if(key==="custom") return "CUSTOM";
  return PRESETS[key]?.label||String(key||"").toUpperCase();
}

function syncPresetUi(){
  const key=activePresetKey();
  const select=$("#presetSelect");
  if(select) select.value=key;
  const label=$("#managerPresetLabel");
  if(label) label.textContent=`ACTIVE: ${presetLabel(key)}`;
}

function sourceOptionHtml(selectedId){
  const entries=catalogSortedEntries();
  let html=`<option value="__empty__"${selectedId==="__empty__"?" selected":""}>— EMPTY SLOT —</option>`;

  let lastCountry=null;
  for(const s of entries){
    const country=s.country||"OTHER";
    if(country!==lastCountry){
      if(lastCountry!==null) html+="</optgroup>";
      html+=`<optgroup label="${escapeHtml(country)}">`;
      lastCountry=country;
    }
    html+=`<option value="${escapeHtml(s.id)}"${selectedId===s.id?" selected":""}>${escapeHtml(s.station)}</option>`;
  }
  if(lastCountry!==null) html+="</optgroup>";
  return html;
}

function renderSourceManager(){
  syncPresetUi();
  const layout=currentLayoutIds().slice(0,12);
  while(layout.length<12) layout.push("__empty__");

  const slotList=$("#slotList");
  slotList.innerHTML=layout.map((id,i)=>{
    const catalog=fullSourceCatalog();
    const s=catalog[id];
    const preview=s?`${s.flag||""} ${s.code||""}`:"EMPTY";
    return `
      <div class="slot-row">
        <div class="slot-num">SLOT ${String(i+1).padStart(2,"0")}</div>
        <select data-slot-index="${i}">${sourceOptionHtml(id)}</select>
        <div class="slot-preview" id="slotPreview-${i}">${escapeHtml(preview)}</div>
      </div>`;
  }).join("");

  slotList.querySelectorAll("[data-slot-index]").forEach(select=>{
    select.addEventListener("change",()=>{
      const i=Number(select.dataset.slotIndex);
      const s=fullSourceCatalog()[select.value];
      document.getElementById(`slotPreview-${i}`).textContent=s?`${s.flag||""} ${s.code||""}`:"EMPTY";
    });
  });

  renderCustomSourceList();
}

function renderCustomSourceList(){
  const custom=Object.values(customSourceCatalog());
  const root=$("#customSourceList");

  if(!custom.length){
    root.innerHTML=`<div class="mix-empty">NO CUSTOM SOURCES</div>`;
    return;
  }

  root.innerHTML=custom.map(s=>`
    <div class="custom-item">
      <div>
        <div class="custom-item-name">${escapeHtml(s.flag||"📡")} ${escapeHtml(s.station)}</div>
        <div class="custom-item-url">${escapeHtml(s.url)}</div>
      </div>
      <button class="manager-btn danger" data-delete-custom="${escapeHtml(s.id)}">DELETE</button>
    </div>`).join("");

  root.querySelectorAll("[data-delete-custom]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      deleteCustomSource(btn.dataset.deleteCustom);
    });
  });
}

function openSourceManager(){
  renderSourceManager();
  $("#sourceManager").classList.add("open");
}

function closeSourceManager(){
  $("#sourceManager").classList.remove("open");
}

function collectManagerLayout(){
  const rows=[...document.querySelectorAll("[data-slot-index]")];
  return rows
    .sort((a,b)=>Number(a.dataset.slotIndex)-Number(b.dataset.slotIndex))
    .map(el=>el.value||"__empty__")
    .slice(0,12);
}

function saveCustomLayout(){
  const layout=collectManagerLayout();
  localStorage.setItem("gs_custom_layout_v1",JSON.stringify(layout));
  localStorage.setItem("gs_active_preset_v1","custom");
  toast("CUSTOM preset saved");
  setTimeout(()=>location.reload(),250);
}

function resetCustomLayout(){
  localStorage.removeItem("gs_custom_layout_v1");
  localStorage.setItem("gs_active_preset_v1","global");
  toast("CUSTOM layout reset to GLOBAL");
  setTimeout(()=>location.reload(),250);
}

function normalizeYouTubeLiveUrl(url){
  let value=String(url||"").trim();
  if(!value) return "";

  // If a channel/user/@handle URL was supplied without /live,
  // append /live so SIGNAL opens the current live broadcast.
  try{
    const u=new URL(value);
    if(u.hostname.includes("youtube.com")){
      const path=u.pathname.replace(/\/+$/,"");
      if(
        (path.startsWith("/@") || path.startsWith("/channel/") || path.startsWith("/user/")) &&
        !path.endsWith("/live")
      ){
        u.pathname=path+"/live";
        value=u.toString();
      }
    }
  }catch(e){}
  return value;
}

function addCustomSource(){
  const station=$("#customName").value.trim();
  const url=normalizeYouTubeLiveUrl($("#customUrl").value);
  const official=$("#customOfficial").value.trim()||url;
  const country=$("#customCountry").value.trim().toUpperCase()||"CUSTOM";
  const city=$("#customCity").value.trim().toUpperCase()||country;
  const tz=$("#customTz").value.trim()||"UTC";
  const flag=$("#customFlag").value.trim()||"📡";

  if(!station || !url){
    toast("Station name and YouTube URL are required");
    return;
  }

  try{
    new Intl.DateTimeFormat("en-US",{timeZone:tz}).format(new Date());
  }catch(e){
    toast("Invalid timezone (example: Asia/Tokyo)");
    return;
  }

  const id=`custom_${Date.now()}`;
  const entry={
    id,code:"CUSTOM",flag,country,city,tz,station,url,official
  };

  const list=readJsonStorage("gs_custom_sources_v1",[]);
  list.push(entry);
  localStorage.setItem("gs_custom_sources_v1",JSON.stringify(list));

  $("#customName").value="";
  $("#customUrl").value="";
  $("#customOfficial").value="";
  renderSourceManager();
  toast("Custom source added");
}

function deleteCustomSource(id){
  const list=readJsonStorage("gs_custom_sources_v1",[]);
  const next=list.filter(item=>item.id!==id);
  localStorage.setItem("gs_custom_sources_v1",JSON.stringify(next));

  // Remove deleted source from custom layout too.
  const layout=readJsonStorage("gs_custom_layout_v1",[]);
  if(Array.isArray(layout)){
    localStorage.setItem(
      "gs_custom_layout_v1",
      JSON.stringify(layout.map(x=>x===id?"__empty__":x))
    );
  }

  renderSourceManager();
  toast("Custom source removed");
}

function setPreset(key){
  if(readJapanEmergency()){
    toast("JAPAN EMERGENCY is active — use RETURN first");
    syncPresetUi();
    return;
  }

  if(key==="custom"){
    const existing=localStorage.getItem("gs_custom_layout_v1");
    if(!existing){
      localStorage.setItem("gs_custom_layout_v1",JSON.stringify(PRESETS.global.ids));
    }
    localStorage.setItem("gs_active_preset_v1","custom");
  }else if(PRESETS[key]){
    localStorage.setItem("gs_active_preset_v1",key);
  }else{
    return;
  }

  if(typeof headlineState!=="undefined" && headlineState.retryTimer){
    clearTimeout(headlineState.retryTimer);
    headlineState.retryTimer=null;
  }
  toast(`${presetLabel(key)} preset loading`);
  setTimeout(()=>location.reload(),220);
}

function bindSourceManager(){
  syncPresetUi();

  $("#presetSelect").addEventListener("change",()=>{
    setPreset($("#presetSelect").value);
  });

  $("#sourceManagerBtn").addEventListener("click",openSourceManager);
  $("#sourceManagerClose").addEventListener("click",closeSourceManager);

  $("#sourceManager").addEventListener("click",e=>{
    if(e.target===$("#sourceManager")) closeSourceManager();
  });

  $("#saveCustomLayoutBtn").addEventListener("click",saveCustomLayout);
  $("#resetCustomBtn").addEventListener("click",resetCustomLayout);
  $("#addCustomSourceBtn").addEventListener("click",addCustomSource);
}

function escapeHtml(value){
  return String(value??"").replace(/[&<>"']/g,ch=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));
}




/* ==========================================================
   FULLSCREEN / CINEMA MODE — renderer
   ========================================================== */

const cinemaState={
  active:false,
  uiTimer:null
};

function closeCinemaPanels(){
  try{ closeHeadlines(); }catch(e){}
  try{ closeRadio(); }catch(e){}
  try{ closeAlertPanel(); }catch(e){}

  const sourceManager=$("#sourceManager");
  if(sourceManager) sourceManager.classList.remove("open");

  const mixer=$("#mixer");
  if(mixer) mixer.classList.remove("open");

  const mixerBtn=$("#mixerBtn");
  if(mixerBtn) mixerBtn.classList.remove("active");
}

function showCinemaControls(){
  if(!cinemaState.active) return;

  document.body.classList.add("cinema-ui-visible");

  if(cinemaState.uiTimer){
    clearTimeout(cinemaState.uiTimer);
  }

  cinemaState.uiTimer=setTimeout(()=>{
    document.body.classList.remove("cinema-ui-visible");
  },1800);
}

function applyCinemaVisualState(active){
  cinemaState.active=!!active;
  document.body.classList.toggle("cinema-mode",cinemaState.active);

  const btn=$("#cinemaBtn");
  if(btn){
    btn.textContent=cinemaState.active?"EXIT CINEMA":"CINEMA";
    btn.classList.toggle("active",cinemaState.active);
  }

  if(cinemaState.active){
    closeCinemaPanels();
    showCinemaControls();
  }else{
    document.body.classList.remove("cinema-ui-visible");
    if(cinemaState.uiTimer){
      clearTimeout(cinemaState.uiTimer);
      cinemaState.uiTimer=null;
    }
  }

  // Header/nav visibility changes the size available to 16:9 monitors.
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      applyAdaptiveGrid();
    });
  });
}

function setCinemaMode(active){
  applyCinemaVisualState(!!active);
  window.globalSignal?.setCinemaFullscreen(!!active);
}

function toggleCinemaMode(){
  setCinemaMode(!cinemaState.active);
}

async function initializeCinemaMode(){
  $("#cinemaBtn").addEventListener("click",toggleCinemaMode);
  $("#cinemaExitBtn").addEventListener("click",()=>setCinemaMode(false));

  document.addEventListener("mousemove",showCinemaControls,{passive:true});
  document.addEventListener("mousedown",showCinemaControls,{passive:true});

  if(!window.globalSignal) return;

  try{
    const fullscreen=await window.globalSignal.getCinemaFullscreen();
    applyCinemaVisualState(!!fullscreen);
  }catch(e){}

  window.globalSignal.onCinemaFullscreenChanged(enabled=>{
    // Handles OS-level exits from fullscreen as well as our own button.
    applyCinemaVisualState(!!enabled);
  });
}

/* ==========================================================
   JAPAN EMERGENCY WATCH — renderer
   ========================================================== */

const EMERGENCY_WATCH_ENABLED_KEY="gs_emergency_watch_enabled_v1";
const EMERGENCY_SANDBOX_KEY="gs_emergency_sandbox_v1";

const emergencyUiState={
  enabled:localStorage.getItem(EMERGENCY_WATCH_ENABLED_KEY)!=="0",
  sandbox:localStorage.getItem(EMERGENCY_SANDBOX_KEY)==="1",
  status:"STARTING",
  lastEvent:null
};

function formatEmergencyTime(value){
  if(!value) return new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit",second:"2-digit"});
  const s=String(value);
  return s.replace("T"," ").replace("Z","").slice(0,19);
}

function updateEmergencyConnection(info={}){
  emergencyUiState.status=String(info.status||emergencyUiState.status||"");
  if(typeof info.enabled==="boolean") emergencyUiState.enabled=info.enabled;
  if(typeof info.sandbox==="boolean") emergencyUiState.sandbox=info.sandbox;

  const btn=$("#emergencyWatchBtn");
  const conn=$("#emergencyConn");
  const select=$("#emergencySourceSelect");

  if(btn){
    btn.textContent=emergencyUiState.enabled?"WATCH ON":"WATCH OFF";
    btn.classList.toggle("emergency-watch-on",emergencyUiState.enabled);
  }

  if(select){
    select.value=emergencyUiState.sandbox?"sandbox":"live";
  }

  if(conn){
    conn.textContent=emergencyUiState.status;
    conn.className="emergency-conn";
    if(emergencyUiState.status.includes("LIVE")) conn.classList.add("live");
    else if(emergencyUiState.status.includes("ERROR")) conn.classList.add("error");
    else conn.classList.add("wait");
  }

  const top=$("#emergencyTopStatus");
  const topText=$("#emergencyTopText");
  if(top && topText){
    top.className="top-status";
    if(!emergencyUiState.enabled){
      topText.textContent="JP EMG OFF";
    }else{
      topText.textContent=`JP EMG ${emergencyUiState.status}`;
      if(emergencyUiState.status.includes("LIVE")) top.classList.add("good");
      else if(emergencyUiState.status.includes("ERROR")) top.classList.add("err");
      else top.classList.add("warn");
    }
  }
}

function renderEmergencyBanner(event){
  const stored=readJapanEmergency();
  if(!stored) {
    document.body.classList.remove("emergency-active");
    return;
  }

  const e=event||stored.event||{};
  document.body.classList.add("emergency-active");

  $("#emergencyKicker").textContent=e.demo
    ? "JAPAN EMERGENCY / DEMO"
    : e.kind==="TSUNAMI"
      ? "JAPAN TSUNAMI EMERGENCY"
      : e.kind==="EEW"
        ? "EARTHQUAKE EARLY WARNING"
        : "JAPAN EARTHQUAKE EMERGENCY";

  $("#emergencyRegion").textContent=e.region||"JAPAN";
  $("#emergencyTitle").textContent=e.title||"Emergency information received";
  $("#emergencyDetail").textContent=[
    e.detail||"",
    e.areaText?`対象: ${e.areaText}`:""
  ].filter(Boolean).join("   ");
  $("#emergencyIssued").textContent=`${e.source||"P2P地震情報"} / ${formatEmergencyTime(e.issuedAt)}`;

  const preset=$("#presetSelect");
  if(preset) preset.value="emergency";

  const readout=$("#modeReadout");
  if(readout) readout.textContent="JAPAN EMERGENCY";

  if(cinemaState.active){
    setTimeout(applyAdaptiveGrid,60);
  }
}

function enterJapanEmergency(event){
  if(!event?.trigger || !emergencyUiState.enabled) return;

  const current=readJapanEmergency();

  try{
    localStorage.setItem(JAPAN_EMERGENCY_KEY,JSON.stringify({
      active:true,
      activatedAt:current?.activatedAt||Date.now(),
      event
    }));
  }catch(e){}

  if(current){
    emergencyUiState.lastEvent=event;
    renderEmergencyBanner(event);
    return;
  }

  // Reload only once so the source grid is rebuilt as the 4-station Japan wall.
  location.reload();
}

function exitJapanEmergency(){
  try{
    localStorage.removeItem(JAPAN_EMERGENCY_KEY);
  }catch(e){}
  location.reload();
}

function handleEmergencyEvent(event){
  if(!event) return;
  emergencyUiState.lastEvent=event;

  if(event.cancelled){
    toast(event.title||"Emergency notice cancelled");
    return;
  }

  if(event.trigger){
    enterJapanEmergency(event);
  }
}

async function initializeEmergencyWatch(){
  $("#emergencyWatchBtn").addEventListener("click",()=>{
    emergencyUiState.enabled=!emergencyUiState.enabled;
    localStorage.setItem(
      EMERGENCY_WATCH_ENABLED_KEY,
      emergencyUiState.enabled?"1":"0"
    );
    window.globalSignal?.setEmergencyWatchEnabled(emergencyUiState.enabled);
    updateEmergencyConnection({
      enabled:emergencyUiState.enabled,
      sandbox:emergencyUiState.sandbox,
      status:emergencyUiState.enabled?"CONNECTING":"OFF"
    });
  });

  $("#emergencySourceSelect").addEventListener("change",()=>{
    emergencyUiState.sandbox=$("#emergencySourceSelect").value==="sandbox";
    localStorage.setItem(
      EMERGENCY_SANDBOX_KEY,
      emergencyUiState.sandbox?"1":"0"
    );
    window.globalSignal?.setEmergencySandbox(emergencyUiState.sandbox);
    toast(emergencyUiState.sandbox
      ?"Japan Emergency Watch: SANDBOX"
      :"Japan Emergency Watch: LIVE");
  });

  $("#emergencyDemoBtn").addEventListener("click",()=>{
    window.globalSignal?.triggerEmergencyDemo();
  });

  $("#emergencyReturnBtn").addEventListener("click",exitJapanEmergency);

  if(!window.globalSignal) return;

  // Apply locally persisted preferences to the main process.
  window.globalSignal.setEmergencyWatchEnabled(emergencyUiState.enabled);
  window.globalSignal.setEmergencySandbox(emergencyUiState.sandbox);

  try{
    const info=await window.globalSignal.getEmergencyWatchState();
    updateEmergencyConnection(info||{});

    // The renderer may have been reloaded after an automatic emergency switch.
    const stored=readJapanEmergency();
    if(stored) renderEmergencyBanner(stored.event);

    if(info?.lastEvent) emergencyUiState.lastEvent=info.lastEvent;
  }catch(e){
    updateEmergencyConnection({status:"ERROR"});
  }

  window.globalSignal.onEmergencyStatus(info=>{
    updateEmergencyConnection(info||{});
    if(settingsIsOpen()) syncSettingsUi();
  });

  window.globalSignal.onEmergencyEvent(event=>{
    handleEmergencyEvent(event);
  });
}

/*
  ASPECT-SAFE MONITOR WALL

  The monitor tiles are NEVER stretched.
  Every tile remains exactly 16:9. We choose the row/column arrangement that
  yields the largest possible equal-size monitors inside the available area.
  Flexbox centers incomplete rows automatically (5 feeds => 3 + 2, etc.).
*/
const MONITOR_ASPECT = 16 / 9;
const MONITOR_GAP = 7;
const MONITOR_PADDING = 7;

function chooseAspectSafeLayout(count){
  if(count <= 0) return {cols:1,rows:1,tileW:320,tileH:180};

  const grid = $("#grid");
  const rect = grid?.getBoundingClientRect?.() || {width:1600,height:800};

  const availableW = Math.max(200, rect.width - MONITOR_PADDING * 2);
  const availableH = Math.max(120, rect.height - MONITOR_PADDING * 2);

  let best = null;

  for(let cols = 1; cols <= count; cols++){
    const rows = Math.ceil(count / cols);

    const maxWByWidth =
      (availableW - MONITOR_GAP * Math.max(0, cols - 1)) / cols;

    const maxHByHeight =
      (availableH - MONITOR_GAP * Math.max(0, rows - 1)) / rows;

    const maxWByHeight = maxHByHeight * MONITOR_ASPECT;
    const tileW = Math.min(maxWByWidth, maxWByHeight);
    const tileH = tileW / MONITOR_ASPECT;

    if(tileW <= 0 || tileH <= 0) continue;

    // Primary goal: largest total visible video area.
    const videoArea = count * tileW * tileH;

    // Small preference for fewer rows on a landscape display.
    const shapePenalty =
      rect.width >= rect.height && rows > cols ? 0.985 : 1;

    const score = videoArea * shapePenalty;

    if(!best || score > best.score){
      best = {cols,rows,tileW,tileH,score};
    }
  }

  return best || {cols:1,rows:count,tileW:320,tileH:180};
}

function applyAdaptiveGrid(){
  const grid = $("#grid");
  if(!grid) return;

  const count = sources.length;
  const layout = chooseAspectSafeLayout(count);

  // Explicit pixel sizes prevent CSS from distorting the 16:9 monitors.
  grid.style.setProperty("--tile-w", `${Math.floor(layout.tileW)}px`);
  grid.style.setProperty("--tile-h", `${Math.floor(layout.tileH)}px`);
  grid.classList.toggle("compact", count >= 10);

  // Clear any v0.8 grid spanning that may survive a hot reload.
  [...grid.children].forEach(tile=>{
    tile.style.gridColumn = "";
    tile.style.gridRow = "";
    tile.style.width = "";
    tile.style.height = "";
  });

  const readout = $("#layoutReadout");
  if(readout){
    const lastRow = count % layout.cols || layout.cols;
    const distribution =
      layout.rows > 1 && lastRow !== layout.cols
        ? `${layout.cols}+${lastRow}`
        : `${layout.cols}×${layout.rows}`;

    readout.textContent = `${distribution} / 16:9`;
  }

  // Let Chromium finish layout, then resize the isolated YouTube video layer.
  setTimeout(()=>{
    sources.forEach((_,i)=>{
      if(playerMode[i]) isolateVideo(i);
    });
  },220);
}

let adaptiveResizeTimer = null;
function bindAdaptiveGrid(){
  window.addEventListener("resize",()=>{
    clearTimeout(adaptiveResizeTimer);
    adaptiveResizeTimer = setTimeout(applyAdaptiveGrid,160);
  });

  // WebView/player controls can slightly change the effective viewport after startup.
  setTimeout(applyAdaptiveGrid,500);
  setTimeout(applyAdaptiveGrid,1600);
}


const ALERT_HISTORY_PREFIX="gs_alert_history_v1_";
const ALERT_ENABLED_KEY="gs_alert_enabled_v1";

const ALERT_STOPWORDS=new Set([
  "the","a","an","and","or","for","of","to","in","on","at","by","from","with","as","is","are","was","were",
  "be","been","being","that","this","these","those","it","its","their","they","them","his","her","he","she",
  "you","your","we","our","us","after","before","over","under","amid","into","out","up","down","new","latest",
  "live","news","report","reports","says","say","said","update","updates","today","video","watch","breaking",
  "world","global","japan","asia","europe","america","americas","united","states"
]);

const alertState={
  enabled:localStorage.getItem(ALERT_ENABLED_KEY)!=="0",
  alerts:[],
  dismissedKey:"",
  lastScan:0
};

function normalizeAlertText(text){
  return String(text||"")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/https?:\/\/\S+/g," ")
    .replace(/[“”"'’`´()[\]{}<>:;,.!?/\\|+=_*~^%$#@＆・，。！？：；（）【】「」『』]/g," ")
    .replace(/\s+/g," ")
    .trim();
}

function alertTokens(title){
  const normalized=normalizeAlertText(title);

  // Keep Japanese sequences and latin/number words.
  const raw=normalized.match(/[a-z][a-z0-9-]{2,}|[一-龯ぁ-んァ-ヶー]{2,}/g)||[];
  return raw.filter(token=>{
    if(ALERT_STOPWORDS.has(token)) return false;
    if(/^\d+$/.test(token)) return false;
    return token.length>=3 || /[一-龯ぁ-んァ-ヶー]/.test(token);
  });
}

function alertNgrams(tokens){
  const grams=[...new Set(tokens)];
  for(let i=0;i<tokens.length-1;i++){
    const a=tokens[i],b=tokens[i+1];
    if(a!==b) grams.push(`${a} ${b}`);
  }
  return [...new Set(grams)];
}

function canonicalDomain(article){
  return String(article.domain||article.sourceCountry||"UNKNOWN").trim().toLowerCase()||"unknown";
}

function dedupeAlertArticles(articles){
  const seen=new Set();
  const out=[];

  for(const article of articles){
    const key=normalizeAlertText(article.title)
      .replace(/\b\d+\b/g,"#")
      .slice(0,180);

    if(!key || seen.has(key)) continue;
    seen.add(key);
    out.push(article);
  }

  return out;
}

function alertHistoryKey(){
  const region=headlineRegionForPreset();
  return ALERT_HISTORY_PREFIX+region.key;
}

function loadAlertHistory(){
  try{
    const raw=localStorage.getItem(alertHistoryKey());
    if(!raw) return null;
    const parsed=JSON.parse(raw);
    if(!parsed || typeof parsed.counts!=="object") return null;
    return parsed;
  }catch(e){
    return null;
  }
}

function saveAlertHistory(counts){
  try{
    localStorage.setItem(alertHistoryKey(),JSON.stringify({
      savedAt:Date.now(),
      counts
    }));
  }catch(e){}
}

function analyzeHeadlineAlerts(articles){
  const uniqueArticles=dedupeAlertArticles(articles);
  const topicMap=new Map();

  for(const article of uniqueArticles){
    const tokens=alertTokens(article.title);
    const grams=alertNgrams(tokens);
    const source=canonicalDomain(article);

    for(const gram of grams){
      if(!topicMap.has(gram)){
        topicMap.set(gram,{
          topic:gram,
          count:0,
          sources:new Set(),
          titles:[],
          sourceLabels:new Set()
        });
      }

      const item=topicMap.get(gram);
      if(item.sources.has(source)) continue;

      item.sources.add(source);
      item.sourceLabels.add(String(article.domain||article.sourceCountry||"SOURCE"));
      item.count++;
      item.titles.push(String(article.title||""));
    }
  }

  const previous=loadAlertHistory();
  const prevCounts=previous?.counts||{};
  const nowCounts={};

  for(const [topic,item] of topicMap.entries()){
    nowCounts[topic]=item.count;
  }

  const alerts=[];

  for(const [topic,item] of topicMap.entries()){
    if(item.count<3) continue;

    const previousCount=Number(prevCounts[topic]||0);
    const delta=item.count-previousCount;

    // BREAKING SIGNAL: at least 4 distinct publishers and either new or clearly rising.
    const breaking=item.count>=4 && (previousCount===0 || delta>=2);

    // ALERT: at least 3 distinct publishers and meaningful rise.
    const alert=breaking || (item.count>=3 && delta>=1);

    if(!alert) continue;

    // Avoid excessively generic one-word themes.
    const topicParts=topic.split(" ");
    if(topicParts.length===1 && topic.length<5) continue;

    alerts.push({
      topic,
      level:breaking?"breaking":"alert",
      count:item.count,
      previousCount,
      delta,
      sources:[...item.sourceLabels].slice(0,8),
      titles:item.titles.slice(0,4)
    });
  }

  alerts.sort((a,b)=>{
    if(a.level!==b.level) return a.level==="breaking"?-1:1;
    if(a.count!==b.count) return b.count-a.count;
    return b.delta-a.delta;
  });

  saveAlertHistory(nowCounts);
  return alerts.slice(0,12);
}

function humanizeAlertTopic(topic){
  const words=String(topic||"").split(" ");
  return words.map(word=>{
    if(/[一-龯ぁ-んァ-ヶー]/.test(word)) return word;
    return word.toUpperCase();
  }).join(" ");
}

function renderAlertPanel(){
  const region=headlineRegionForPreset();
  $("#alertRegionLabel").textContent=region.label;
  $("#alertScanTime").textContent=alertState.lastScan
    ? new Date(alertState.lastScan).toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})
    : "WAITING";

  const root=$("#alertList");

  if(!alertState.alerts.length){
    root.innerHTML=`<div class="alert-empty">NO ALERTS DETECTED<br><br>Waiting for repeated coverage across independent sources.</div>`;
    $("#alertFootState").textContent=alertState.enabled?"MONITORING":"DISABLED";
    return;
  }

  root.innerHTML=alertState.alerts.map(alert=>`
    <div class="alert-card">
      <div class="alert-card-top">
        <span class="alert-level ${alert.level==="breaking"?"breaking":""}">
          ${alert.level==="breaking"?"BREAKING SIGNAL":"ALERT"}
        </span>
        <span class="alert-card-meta">${alert.count} SOURCES / Δ${alert.delta>=0?"+":""}${alert.delta}</span>
      </div>
      <div class="alert-topic">${escapeHtml(humanizeAlertTopic(alert.topic))}</div>
      <div class="alert-card-sources">${escapeHtml(alert.sources.join(" • "))}</div>
    </div>
  `).join("");

  $("#alertFootState").textContent=`${alertState.alerts.length} SIGNALS`;
}

function showTopAlert(){
  if(!alertState.enabled) return;
  const top=alertState.alerts.find(a=>a.level==="breaking");
  if(!top) return;

  const region=headlineRegionForPreset();
  const key=`${region.key}:${top.topic}:${top.count}`;

  if(alertState.dismissedKey===key) return;

  $("#alertStripRegion").textContent=region.label;
  $("#alertStripTopic").textContent=humanizeAlertTopic(top.topic);
  $("#alertStripMeta").textContent=`${top.count} SOURCES / Δ${top.delta>=0?"+":""}${top.delta}`;
  $("#alertStrip").classList.add("show");
}

function hideTopAlert(){
  const top=alertState.alerts.find(a=>a.level==="breaking");
  const region=headlineRegionForPreset();

  if(top){
    alertState.dismissedKey=`${region.key}:${top.topic}:${top.count}`;
  }

  $("#alertStrip").classList.remove("show");
}

function runAlertAnalysis(articles){
  alertState.lastScan=Date.now();

  if(!alertState.enabled){
    alertState.alerts=[];
    renderAlertPanel();
    $("#alertStrip").classList.remove("show");
    return;
  }

  alertState.alerts=analyzeHeadlineAlerts(Array.isArray(articles)?articles:[]);
  renderAlertPanel();

  if(alertState.alerts.some(a=>a.level==="breaking")){
    showTopAlert();
  }else{
    $("#alertStrip").classList.remove("show");
  }
}

function updateAlertsToggle(){
  const btn=$("#alertsBtn");
  if(!btn) return;

  btn.textContent="ALERTS";
  btn.classList.toggle("active",alertState.enabled);
  btn.title=alertState.enabled
    ? "Alert monitoring enabled — click to view signals"
    : "Alert monitoring disabled — enable it in SETTINGS";

  $("#alertFootState").textContent=alertState.enabled?"MONITORING":"DISABLED";
}

function toggleAlerts(){
  alertState.enabled=!alertState.enabled;
  localStorage.setItem(ALERT_ENABLED_KEY,alertState.enabled?"1":"0");
  updateAlertsToggle();

  if(alertState.enabled){
    runAlertAnalysis(headlineState.articles);
    toast("Breaking / Alert monitoring enabled");
  }else{
    alertState.alerts=[];
    $("#alertStrip").classList.remove("show");
    renderAlertPanel();
    toast("Breaking / Alert monitoring disabled");
  }
}

function openAlertPanel(){
  closeHeadlines();
  closeRadio();
  $("#alertPanel").classList.add("open");
  renderAlertPanel();
}

function closeAlertPanel(){
  $("#alertPanel").classList.remove("open");
}

function bindAlerts(){
  updateAlertsToggle();

  // Top bar is navigation only. Configuration belongs in SETTINGS.
  $("#alertsBtn").addEventListener("click",()=>{
    if($("#alertPanel").classList.contains("open")) closeAlertPanel();
    else openAlertPanel();
  });

  $("#alertsBtn").addEventListener("contextmenu",e=>{
    e.preventDefault();
    if($("#alertPanel").classList.contains("open")) closeAlertPanel();
    else openAlertPanel();
  });

  $("#alertPanelClose").addEventListener("click",closeAlertPanel);
  $("#alertStripClose").addEventListener("click",hideTopAlert);

  // Clicking the breaking strip opens the detailed signal list.
  $("#alertStrip").addEventListener("click",e=>{
    if(e.target.id==="alertStripClose") return;
    openAlertPanel();
  });
}

const HEADLINE_CACHE_PREFIX="gs_headlines_cache_v3_";
const HEADLINE_REFRESH_MS=5*60*1000;
const HEADLINE_STALE_MS=30*60*1000;

function headlineRegionForPreset(){
  const preset=activePresetKey();

  const fixed={
    global:{label:"GLOBAL",query:"world news"},
    asia:{label:"ASIA",query:"Asia news"},
    europe:{label:"EUROPE",query:"Europe news"},
    americas:{label:"AMERICAS",query:"Americas news"},
    japan:{label:"JAPAN",query:"Japan news"},
    emergency:{label:"JAPAN EMERGENCY",query:"Japan earthquake tsunami news"}
  };

  if(fixed[preset]) return {...fixed[preset],key:preset};

  // CUSTOM: use the countries currently represented in the selected feeds.
  // Limit the query to a few unique regions/countries to keep GDELT queries compact.
  const countries=[...new Set(
    sources
      .map(s=>String(s.country||"").trim())
      .filter(Boolean)
      .filter(x=>x!=="GLOBAL" && x!=="CUSTOM")
  )].slice(0,5);

  if(!countries.length){
    return {label:"CUSTOM",query:"world news",key:"custom"};
  }

  const query=countries.length===1
    ? `${countries[0]} news`
    : `(${countries.map(c=>`"${c}"`).join(" OR ")}) news`;

  return {
    label:`CUSTOM / ${countries.slice(0,3).join(" + ")}`,
    query,
    key:"custom"
  };
}

function headlineCacheKey(){
  const region=headlineRegionForPreset();
  return HEADLINE_CACHE_PREFIX + region.key;
}

function syncHeadlineRegionUi(){
  const region=headlineRegionForPreset();
  const label=$("#headlineRegionLabel");
  if(label) label.textContent=region.label;
  headlineState.topic=region.query;
  return region;
}

const headlineState={
  topic:"world news",
  lastLoaded:0,
  loading:false,
  articles:[],
  source:"GDELT",
  lastError:"",
  retryTimer:null,
  retryCount:0
};

function formatHeadlineTime(value){
  const s=String(value||"");
  if(!s) return "LATEST";
  const compact=s.replace("T"," ").replace("Z","");
  return compact.slice(0,16);
}

function setHeadlineState(text,kind=""){
  const el=$("#headlinesState");
  if(!el) return;
  el.textContent=text;
  el.className=`headlines-state ${kind}`.trim();
}

function saveHeadlineCache(topic,articles,fetchedAt){
  try{
    localStorage.setItem(headlineCacheKey(),JSON.stringify({
      topic,
      articles,
      source:headlineState.source||"CACHE",
      fetchedAt:Number(fetchedAt||Date.now())
    }));
  }catch(e){}
}

function loadHeadlineCache(){
  try{
    const raw=localStorage.getItem(headlineCacheKey());
    if(!raw) return null;
    const parsed=JSON.parse(raw);
    if(!parsed || !Array.isArray(parsed.articles)) return null;
    return parsed;
  }catch(e){
    return null;
  }
}

function renderHeadlines(articles,{cached=false,error=""}={}){
  const list=$("#headlinesList");
  if(!list) return;

  if(!articles.length){
    list.innerHTML=`
      <div class="mix-empty">
        NO HEADLINES
        ${error?`<br><br>${escapeHtml(error)}`:""}
        <br><button class="headlines-retry" id="headlineInlineRetry">RETRY NOW</button>
      </div>`;

    $("#headlineInlineRetry")?.addEventListener("click",()=>loadHeadlines(true));
    return;
  }

  list.innerHTML=articles.map((article,i)=>`
    <div class="headline-item" data-headline-index="${i}">
      <div class="headline-meta">
        <span>${escapeHtml(formatHeadlineTime(article.seenDate))}</span>
        <span class="headline-domain">${escapeHtml((article.domain||article.sourceCountry||"SOURCE").toUpperCase())}</span>
      </div>
      <div class="headline-title">${escapeHtml(article.title||"Untitled")}</div>
    </div>`).join("");

  list.querySelectorAll("[data-headline-index]").forEach(el=>{
    el.addEventListener("click",()=>{
      const article=headlineState.articles[Number(el.dataset.headlineIndex)];
      if(article?.url) window.open(article.url,"_blank","noopener");
    });
  });

  const ticker=$("#ticker");
  if(ticker){
    ticker.innerHTML=articles.slice(0,12).map(article=>`
      <span><b>${escapeHtml((article.sourceCountry||"WORLD").toUpperCase())}</b> ${escapeHtml(article.title||"")}</span>
    `).join("");
  }
}

function hydrateHeadlinesFromCache(){
  const cached=loadHeadlineCache();
  if(!cached || !cached.articles?.length) return false;

  headlineState.topic=String(cached.topic||"world news");
  headlineState.articles=cached.articles;
  headlineState.source=String(cached.source||"CACHE");
  headlineState.lastLoaded=Number(cached.fetchedAt||0);

  const provider=$("#headlineProvider");
  if(provider) provider.textContent=`${headlineState.source} / CACHE`;

  syncHeadlineRegionUi();

  renderHeadlines(headlineState.articles,{cached:true});
  setTimeout(()=>runAlertAnalysis(headlineState.articles),0);

  const age=Date.now()-headlineState.lastLoaded;
  if(age<HEADLINE_STALE_MS){
    setHeadlineState(`CACHE ${headlineState.articles.length}`,"cache");
  }else{
    setHeadlineState(`STALE CACHE ${headlineState.articles.length}`,"warn");
  }
  return true;
}

function scheduleHeadlineRetry(){
  if(headlineState.retryTimer) clearTimeout(headlineState.retryTimer);

  headlineState.retryCount=Math.min(headlineState.retryCount+1,5);
  const delays=[5000,15000,30000,60000,120000];
  const delay=delays[headlineState.retryCount-1] || 120000;

  headlineState.retryTimer=setTimeout(()=>{
    headlineState.retryTimer=null;
    loadHeadlines(true);
  },delay);

  setHeadlineState(`RETRY ${Math.round(delay/1000)}s`,"warn");
}

async function loadHeadlines(force=false){
  if(!window.globalSignal || headlineState.loading) return;

  const now=Date.now();
  if(!force && headlineState.lastLoaded && now-headlineState.lastLoaded<HEADLINE_REFRESH_MS){
    return;
  }

  headlineState.loading=true;
  headlineState.lastError="";
  setHeadlineState("LOADING","warn");

  const region=syncHeadlineRegionUi();
  const topic=region.query;
  headlineState.topic=topic;

  try{
    const result=await Promise.race([
      window.globalSignal.getHeadlines(topic),
      new Promise((_,reject)=>setTimeout(()=>reject(new Error("Renderer timeout")),18000))
    ]);

    if(!result?.ok){
      throw new Error(result?.error || "Headline request failed");
    }

    const articles=Array.isArray(result.articles)?result.articles:[];

    if(!articles.length){
      throw new Error("GDELT returned no articles");
    }

    headlineState.articles=articles;
    headlineState.lastLoaded=Number(result.fetchedAt||Date.now());
    headlineState.retryCount=0;
    headlineState.source=String(result.source||"HEADLINES");

    const provider=$("#headlineProvider");
    if(provider){
      provider.textContent=result.fallback
        ? `${headlineState.source} / FALLBACK`
        : `${headlineState.source} / LIVE`;
    }

    if(headlineState.retryTimer){
      clearTimeout(headlineState.retryTimer);
      headlineState.retryTimer=null;
    }

    saveHeadlineCache(topic,articles,headlineState.lastLoaded);
    renderHeadlines(articles);
    runAlertAnalysis(articles);

    setHeadlineState(`${articles.length} ITEMS / ${headlineState.source}`,"ok");
  }catch(error){
    headlineState.lastError=String(error?.message||error);

    const cached=loadHeadlineCache();

    if(cached?.articles?.length){
      headlineState.articles=cached.articles;
      headlineState.lastLoaded=Number(cached.fetchedAt||0);
      renderHeadlines(headlineState.articles,{cached:true,error:headlineState.lastError});
      setHeadlineState(`CACHE / RETRY`,"cache");
    }else{
      headlineState.articles=[];
      renderHeadlines([], {error:headlineState.lastError});
      setHeadlineState("ERROR","err");
    }

    scheduleHeadlineRetry();
  }finally{
    headlineState.loading=false;
  }
}

function initializeHeadlines(){
  syncHeadlineRegionUi();
  hydrateHeadlinesFromCache();

  // Always refresh shortly after startup, even if the panel is closed.
  setTimeout(()=>loadHeadlines(true),1200);

  // Background refresh keeps headlines ready before the user opens the panel.
  setInterval(()=>{
    loadHeadlines(false);
  },HEADLINE_REFRESH_MS);
}

function openHeadlines(){
  closeRadio();
  closeAlertPanel();
  syncHeadlineRegionUi();
  $("#headlinesPanel").classList.add("open");
  $("#headlinesBtn").classList.add("active");
  loadHeadlines(false);
}

function closeHeadlines(){
  $("#headlinesPanel").classList.remove("open");
  $("#headlinesBtn").classList.remove("active");
}

function bindHeadlines(){
  $("#headlinesBtn").addEventListener("click",()=>{
    if($("#headlinesPanel").classList.contains("open")) closeHeadlines();
    else openHeadlines();
  });

  $("#headlinesClose").addEventListener("click",closeHeadlines);

  $("#headlinesRefresh").addEventListener("click",()=>loadHeadlines(true));

}


const RADIO_LAST_KEY="gs_radio_last_v1";
const RADIO_VOLUME_KEY="gs_radio_volume_v1";

const radioState={
  current:null,
  results:[],
  status:"stopped",
  manualStop:true,
  retryCount:0,
  retryTimer:null,
  searchLoading:false
};

function radioAudio(){
  return $("#radioAudio");
}

function setRadioStatus(status,message=""){
  radioState.status=status;
  const stateEl=$("#radioState");
  const dot=$("#radioStatusDot");

  stateEl.className="radio-state";
  dot.className="radio-status-dot";

  if(status==="live"){
    stateEl.classList.add("live");
    dot.classList.add("live");
    stateEl.textContent="LIVE";
  }else if(status==="buffering" || status==="reconnecting"){
    stateEl.classList.add("wait");
    dot.classList.add("wait");
    stateEl.textContent=status==="reconnecting"?"RECONNECT":"BUFFER";
  }else if(status==="error"){
    stateEl.classList.add("err");
    dot.classList.add("err");
    stateEl.textContent="ERROR";
  }else if(status==="paused"){
    stateEl.textContent="PAUSED";
  }else{
    stateEl.textContent="STOPPED";
  }

  if(message){
    $("#radioNowMeta").textContent=message;
  }

  if(typeof settingsIsOpen==="function" && settingsIsOpen()){
    setTimeout(syncSettingsUi,0);
  }

  $("#radioToggleBtn").textContent=
    status==="live" || status==="buffering" || status==="reconnecting"
      ? "PAUSE"
      : "PLAY";

  $("#radioBtn").classList.toggle(
    "active",
    ["live","buffering","reconnecting","paused"].includes(status)
  );
}

function saveRadioStation(station){
  try{
    localStorage.setItem(RADIO_LAST_KEY,JSON.stringify(station));
  }catch(e){}
}

function loadLastRadioStation(){
  try{
    const raw=localStorage.getItem(RADIO_LAST_KEY);
    if(!raw) return null;
    const station=JSON.parse(raw);
    if(!station?.url) return null;
    return station;
  }catch(e){
    return null;
  }
}

function renderRadioCurrent(station){
  if(!station){
    $("#radioNowName").textContent="NO RADIO SELECTED";
    $("#radioNowMeta").textContent="Independent from video audio";
    return;
  }

  $("#radioNowName").textContent=station.name||"RADIO STREAM";
  const parts=[
    station.country||"",
    station.codec||"",
    station.bitrate?`${station.bitrate} kbps`:""
  ].filter(Boolean);
  $("#radioNowMeta").textContent=parts.join(" / ") || "DIRECT STREAM";
}

function scheduleRadioReconnect(){
  if(radioState.manualStop || !radioState.current?.url) return;
  if(radioState.retryTimer) return;

  const delays=[3000,8000,20000];
  if(radioState.retryCount>=delays.length){
    setRadioStatus("error","Automatic reconnect failed");
    return;
  }

  const delay=delays[radioState.retryCount++];
  setRadioStatus("reconnecting",`Retrying in ${Math.round(delay/1000)}s`);

  radioState.retryTimer=setTimeout(async ()=>{
    radioState.retryTimer=null;
    const audio=radioAudio();

    try{
      audio.src=radioState.current.url;
      audio.load();
      await audio.play();
    }catch(e){
      scheduleRadioReconnect();
    }
  },delay);
}

async function playRadioStation(station){
  if(!station?.url) return;

  if(radioState.retryTimer){
    clearTimeout(radioState.retryTimer);
    radioState.retryTimer=null;
  }

  radioState.current={...station};
  radioState.manualStop=false;
  radioState.retryCount=0;

  renderRadioCurrent(radioState.current);
  saveRadioStation(radioState.current);

  const audio=radioAudio();
  audio.pause();
  audio.src=radioState.current.url;
  audio.load();

  setRadioStatus("buffering","Connecting…");

  try{
    await audio.play();
    if(station.stationuuid && window.globalSignal){
      window.globalSignal.reportRadioClick(station.stationuuid);
    }
  }catch(error){
    setRadioStatus("error",String(error?.message||"Playback failed"));
    scheduleRadioReconnect();
  }
}

function stopRadio(){
  radioState.manualStop=true;
  radioState.retryCount=0;

  if(radioState.retryTimer){
    clearTimeout(radioState.retryTimer);
    radioState.retryTimer=null;
  }

  const audio=radioAudio();
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  setRadioStatus("stopped");
}

async function toggleRadio(){
  const audio=radioAudio();

  if(!radioState.current?.url){
    const last=loadLastRadioStation();
    if(last){
      await playRadioStation(last);
    }else{
      openRadio();
      searchRadio("BBC World Service");
    }
    return;
  }

  if(!audio.paused){
    radioState.manualStop=true;
    audio.pause();
    setRadioStatus("paused","Paused by user");
    return;
  }

  radioState.manualStop=false;
  try{
    if(!audio.src) audio.src=radioState.current.url;
    await audio.play();
  }catch(error){
    setRadioStatus("error",String(error?.message||"Playback failed"));
    scheduleRadioReconnect();
  }
}

function radioResultMeta(station){
  return [
    station.country||station.countrycode||"",
    station.language||"",
    station.codec||"",
    station.bitrate?`${station.bitrate} kbps`:""
  ].filter(Boolean).join(" • ");
}

function renderRadioResults(stations,error=""){
  const root=$("#radioResults");

  if(error){
    root.innerHTML=`
      <div class="radio-empty">
        RADIO DIRECTORY UNAVAILABLE<br><br>${escapeHtml(error)}<br><br>
        You can still use DIRECT STREAM below.
      </div>`;
    return;
  }

  if(!stations.length){
    root.innerHTML=`<div class="radio-empty">NO COMPATIBLE STATIONS FOUND</div>`;
    return;
  }

  root.innerHTML=stations.map((s,i)=>`
    <div class="radio-result">
      <div>
        <div class="radio-name">${escapeHtml(s.name)}</div>
        <div class="radio-meta">${escapeHtml(radioResultMeta(s))}</div>
      </div>
      <button class="radio-play" data-radio-index="${i}">PLAY</button>
    </div>`).join("");

  root.querySelectorAll("[data-radio-index]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const station=radioState.results[Number(btn.dataset.radioIndex)];
      if(station) playRadioStation(station);
    });
  });
}

async function searchRadio(query){
  const q=String(query||"").trim();
  if(!q || radioState.searchLoading || !window.globalSignal) return;

  radioState.searchLoading=true;
  $("#radioSearchInput").value=q;
  $("#radioResults").innerHTML=`<div class="radio-empty">SEARCHING…</div>`;

  try{
    const result=await window.globalSignal.searchRadioStations(q);

    if(!result?.ok){
      throw new Error(result?.error||"Radio search failed");
    }

    radioState.results=Array.isArray(result.stations)?result.stations:[];
    renderRadioResults(radioState.results);
  }catch(error){
    radioState.results=[];
    renderRadioResults([],String(error?.message||error));
  }finally{
    radioState.searchLoading=false;
  }
}

function playDirectRadio(){
  const name=$("#radioDirectName").value.trim()||"DIRECT RADIO";
  const url=$("#radioDirectUrl").value.trim();

  if(!/^https?:\/\//i.test(url)){
    toast("Enter a direct http/https audio stream URL");
    return;
  }

  playRadioStation({
    name,
    url,
    country:"DIRECT",
    codec:"",
    bitrate:0,
    stationuuid:""
  });
}

function openRadio(){
  closeHeadlines();
  closeAlertPanel();
  $("#radioPanel").classList.add("open");
  $("#radioBtn").classList.add("active");

  if(!radioState.results.length){
    searchRadio($("#radioSearchInput").value||"BBC World Service");
  }
}

function closeRadio(){
  $("#radioPanel").classList.remove("open");

  if(!["live","buffering","reconnecting","paused"].includes(radioState.status)){
    $("#radioBtn").classList.remove("active");
  }
}

function bindRadio(){
  const audio=radioAudio();

  const savedVolume=Math.max(0,Math.min(100,Number(localStorage.getItem(RADIO_VOLUME_KEY)||45)));
  $("#radioVolume").value=String(savedVolume);
  $("#radioVolumeReadout").textContent=`${savedVolume}%`;
  audio.volume=savedVolume/100;

  const last=loadLastRadioStation();
  if(last){
    radioState.current=last;
    renderRadioCurrent(last);
    setRadioStatus("stopped","Last station ready");
  }

  $("#radioBtn").addEventListener("click",()=>{
    if($("#radioPanel").classList.contains("open")) closeRadio();
    else openRadio();
  });

  $("#radioClose").addEventListener("click",closeRadio);

  $("#radioSearchBtn").addEventListener("click",()=>{
    searchRadio($("#radioSearchInput").value);
  });

  $("#radioSearchInput").addEventListener("keydown",e=>{
    if(e.key==="Enter") searchRadio($("#radioSearchInput").value);
  });

  document.querySelectorAll("[data-radio-query]").forEach(btn=>{
    btn.addEventListener("click",()=>searchRadio(btn.dataset.radioQuery));
  });

  $("#radioToggleBtn").addEventListener("click",toggleRadio);
  $("#radioStopBtn").addEventListener("click",stopRadio);
  $("#radioDirectPlay").addEventListener("click",playDirectRadio);

  $("#radioVolume").addEventListener("input",()=>{
    const value=Number($("#radioVolume").value||0);
    audio.volume=Math.max(0,Math.min(1,value/100));
    $("#radioVolumeReadout").textContent=`${value}%`;
    localStorage.setItem(RADIO_VOLUME_KEY,String(value));
  });

  audio.addEventListener("playing",()=>{
    radioState.retryCount=0;
    setRadioStatus("live",radioResultMeta(radioState.current||{})||"Live radio");
  });

  audio.addEventListener("waiting",()=>{
    if(!radioState.manualStop) setRadioStatus("buffering","Buffering…");
  });

  audio.addEventListener("stalled",()=>{
    if(!radioState.manualStop){
      setRadioStatus("reconnecting","Stream stalled");
      scheduleRadioReconnect();
    }
  });

  audio.addEventListener("error",()=>{
    if(!radioState.manualStop){
      setRadioStatus("error","Stream error");
      scheduleRadioReconnect();
    }
  });

  audio.addEventListener("ended",()=>{
    if(!radioState.manualStop){
      setRadioStatus("reconnecting","Stream ended");
      scheduleRadioReconnect();
    }
  });

  audio.addEventListener("pause",()=>{
    if(!radioState.manualStop && !audio.ended){
      setRadioStatus("paused","Paused");
    }
  });
}

function buildClocks(){
  $("#clocks").innerHTML = clockSources.map((s,i)=>`
  <div class="clock">
    <div class="clock-country">${s.flag} ${s.country}</div>
    <div class="clock-city">${s.city}</div>
    <div class="clock-time" id="clock-${i}">--:--:--</div>
    <div class="clock-zone" id="zone-${i}">---</div>
  </div>`).join("");
}

function buildGrid(){
  $("#grid").innerHTML = sources.map((s,i)=>`
  <section class="tile" id="tile-${i}">
    <webview id="view-${i}"
      src="${s.url}"
      partition="persist:global-signal"
      allowpopups
      webpreferences="autoplayPolicy=no-user-gesture-required,backgroundThrottling=false">
    </webview>

    <div class="overlay-top">
      <span class="flag">${s.flag}</span><span class="code">${s.code}</span>
      <span class="station">${s.station}</span><span class="spacer"></span>
      <span class="audio-badge">AUDIO</span>
      <span class="status" id="status-${i}">LOADING</span>
    </div>

    <div class="tile-time" id="tiletime-${i}">--:--:--</div>

    <div class="controls">
      <button data-audio="${i}">AUDIO</button>
      <button data-view="${i}">PAGE</button>
      <button data-reload="${i}">RELOAD</button>
      <button data-focus="${i}">FOCUS</button>
      <a href="${s.official}" target="_blank">OFFICIAL ↗</a>
    </div>

    <div class="notice" id="notice-${i}">
      <div>
        <strong>VIDEO NOT FOUND</strong>
        <span>LIVEページは開いていますが動画要素をまだ検出できません。PAGEで元ページを確認できます。</span>
      </div>
    </div>
  </section>`).join("");

  sources.forEach((s,i)=>{
    const w = document.getElementById(`view-${i}`);
    views[i] = w;

    w.addEventListener("dom-ready", async ()=>{
      setStatus(i,"PAGE READY",true);
      hideNotice(i);
      if(state.cleanMode!=="off") await applyCleanFeedToView(i);
      await waitForVideo(i,22000);
    });

    w.addEventListener("did-navigate", ()=>{
      sourceOnline[i]=false;
      setStatus(i,"NAVIGATING",true);
      hideNotice(i);
      if(state.cleanMode!=="off") setTimeout(()=>applyCleanFeedToView(i),450);
      setTimeout(()=>waitForVideo(i,22000),700);
    });

    w.addEventListener("did-navigate-in-page", ()=>{
      if(state.cleanMode!=="off") setTimeout(()=>applyCleanFeedToView(i),250);
      setTimeout(()=>waitForVideo(i,16000),500);
    });

    w.addEventListener("did-fail-load", e=>{
      if(e.errorCode === -3) return;
      sourceOnline[i]=false;
      setStatus(i,"LOAD ERROR",false);
      showNotice(i,"PAGE LOAD ERROR","LIVEページを読み込めません。OFFICIALを開いてください。");
    });
  });

  document.querySelectorAll("[data-audio]").forEach(btn=>{
    btn.addEventListener("click",()=>handleAudioButton(Number(btn.dataset.audio)));
  });
  document.querySelectorAll("[data-view]").forEach(btn=>{
    btn.addEventListener("click",()=>togglePlayerMode(Number(btn.dataset.view)));
  });
  document.querySelectorAll("[data-reload]").forEach(btn=>{
    btn.addEventListener("click",()=>reloadView(Number(btn.dataset.reload)));
  });
  document.querySelectorAll("[data-focus]").forEach(btn=>{
    btn.addEventListener("click",()=>toggleFocus(Number(btn.dataset.focus)));
  });
}

function setStatus(i,text,kind="ok"){
  const el=document.getElementById(`status-${i}`);
  if(!el) return;
  if(typeof kind==="boolean") kind=kind?"ok":"err";
  el.textContent=text;
  el.className="status "+kind;
}

function markHealth(i,nextState,detail=""){
  const h=sourceHealth[i];
  h.state=nextState;
  h.reason=detail||"";

  const tile=document.getElementById(`tile-${i}`);
  if(tile){
    tile.classList.remove("health-stalled","health-reconnecting","health-offline");
    if(nextState==="STALLED") tile.classList.add("health-stalled");
    if(nextState==="RECONNECTING") tile.classList.add("health-reconnecting");
    if(nextState==="OFFLINE") tile.classList.add("health-offline");
  }

  if(nextState==="LIVE"){
    sourceOnline[i]=true;
    setStatus(i, detail?`LIVE ${detail}`:"LIVE","ok");
  }else if(nextState==="BUFFERING"){
    sourceOnline[i]=true;
    setStatus(i,"BUFFERING","warn");
  }else if(nextState==="STALLED"){
    sourceOnline[i]=false;
    setStatus(i,"STALLED","warn");
  }else if(nextState==="RECONNECTING"){
    sourceOnline[i]=false;
    setStatus(i,detail||"RECONNECTING","recover");
  }else if(nextState==="OFFLINE"){
    sourceOnline[i]=false;
    setStatus(i,detail||"OFFLINE","err");
  }else{
    setStatus(i,nextState,"recover");
  }
  updateHealthSummary();
  reportHealthToBlocker(i,nextState);
}

function updateHealthSummary(){
  let live=0,buffer=0,recover=0,offline=0;
  sourceHealth.forEach(h=>{
    if(h.state==="LIVE") live++;
    else if(h.state==="BUFFERING") buffer++;
    else if(h.state==="RECONNECTING" || h.state==="STARTING") recover++;
    else if(h.state==="STALLED" || h.state==="OFFLINE") offline++;
  });
  $("#healthLive").textContent=live;
  $("#healthBuffer").textContent=buffer;
  $("#healthRecover").textContent=recover;
  $("#healthOffline").textContent=offline;
  if(typeof settingsIsOpen==="function" && settingsIsOpen()) syncSettingsUi();
}

function cancelRecovery(i){
  const h=sourceHealth[i];
  if(h.recoveryTimer){
    clearTimeout(h.recoveryTimer);
    h.recoveryTimer=null;
  }
}

function recoveryDelay(attempt){
  if(attempt===1) return WATCHDOG.firstRetryMs;
  if(attempt===2) return WATCHDOG.secondRetryMs;
  if(attempt===3) return WATCHDOG.thirdRetryMs;
  return WATCHDOG.offlineRetryMs;
}

function scheduleRecovery(i,reason="STALLED"){
  const h=sourceHealth[i];
  if(!state.autoRecover || h.recoveryTimer) return;

  h.reconnectAttempts++;
  const longCooldown=h.reconnectAttempts>3;
  const delay=recoveryDelay(h.reconnectAttempts);

  if(longCooldown){
    h.reconnectAttempts=0;
    markHealth(i,"OFFLINE","OFFLINE / RETRY");
  }else{
    markHealth(i,"RECONNECTING",`RECONNECT ${h.reconnectAttempts}/3`);
  }

  h.recoveryTimer=setTimeout(async()=>{
    h.recoveryTimer=null;
    const w=views[i];
    if(!w) return;
    markHealth(i,"RECONNECTING","RELOADING");
    try{
      w.reload();
    }catch(e){
      scheduleRecovery(i,"RELOAD FAILED");
    }
  },delay);
}

async function reconnectSource(i,manual=false){
  const h=sourceHealth[i];
  cancelRecovery(i);
  if(manual) h.reconnectAttempts=0;
  sourceOnline[i]=false;
  markHealth(i,"RECONNECTING",manual?"MANUAL RECONNECT":"RECONNECTING");
  hideNotice(i);
  try{
    views[i]?.reload();
  }catch(e){
    scheduleRecovery(i,"RELOAD FAILED");
  }
}

async function reconnectAll(){
  toast("Reconnecting all sources");
  await Promise.all(sources.map((_,i)=>reconnectSource(i,true)));
}

async function watchdogCheck(i){
  const h=sourceHealth[i];
  const w=views[i];
  if(!w || h.checking || h.recoveryTimer) return;
  h.checking=true;

  try{
    const info=await w.executeJavaScript(`
      (() => {
        const v=document.querySelector('video');
        if(!v) return {found:false};
        return {
          found:true,
          readyState:v.readyState||0,
          paused:!!v.paused,
          ended:!!v.ended,
          currentTime:Number(v.currentTime||0),
          width:Number(v.videoWidth||0),
          height:Number(v.videoHeight||0)
        };
      })()
    `,true);

    const now=Date.now();

    if(!info?.found){
      if(now-h.lastProgressAt > WATCHDOG.stalledMs){
        markHealth(i,"STALLED","NO VIDEO");
        scheduleRecovery(i,"NO VIDEO");
      }else{
        markHealth(i,"BUFFERING");
      }
      return;
    }

    const current=Number(info.currentTime||0);
    const progressed=h.lastTime===null || Math.abs(current-h.lastTime)>.25;

    if(progressed){
      h.lastTime=current;
      h.lastProgressAt=now;
      h.lastGoodAt=now;
      h.reconnectAttempts=0;
      const dim=info.width&&info.height?`${info.width}×${info.height}`:"";
      markHealth(i,"LIVE",dim);
      if(playerMode[i]) isolateVideo(i);
      applyAudioForIndex(i);
      return;
    }

    if(info.readyState<2){
      if(now-h.lastProgressAt>WATCHDOG.stalledMs){
        markHealth(i,"STALLED","BUFFER TIMEOUT");
        scheduleRecovery(i,"BUFFER TIMEOUT");
      }else{
        markHealth(i,"BUFFERING");
      }
      return;
    }

    if(info.paused && !info.ended){
      try{
        await w.executeJavaScript(`
          (()=>{const v=document.querySelector('video');if(v)v.play().catch(()=>{});const p=document.getElementById('movie_player');if(p&&p.playVideo)try{p.playVideo()}catch(e){}})()
        `,true);
      }catch(e){}
    }

    if(info.ended || now-h.lastProgressAt>WATCHDOG.stalledMs){
      markHealth(i,"STALLED",info.ended?"STREAM ENDED":"NO PROGRESS");
      scheduleRecovery(i,info.ended?"STREAM ENDED":"NO PROGRESS");
    }else{
      markHealth(i,"BUFFERING");
    }
  }catch(e){
    if(Date.now()-h.lastProgressAt>WATCHDOG.stalledMs){
      markHealth(i,"OFFLINE","CHECK FAILED");
      scheduleRecovery(i,"CHECK FAILED");
    }
  }finally{
    h.checking=false;
  }
}

async function watchdogTick(){
  await Promise.all(sources.map((_,i)=>watchdogCheck(i)));
}
function showNotice(i,title,copy){
  const n=document.getElementById(`notice-${i}`);
  if(!n) return;
  n.querySelector("strong").textContent=title;
  n.querySelector("span").textContent=copy;
  n.classList.add("show");
}
function hideNotice(i){
  document.getElementById(`notice-${i}`)?.classList.remove("show");
}

async function waitForVideo(i, timeoutMs){
  const w=views[i];
  if(!w) return;
  const started=Date.now();
  setStatus(i,"FINDING VIDEO",true);

  while(Date.now()-started < timeoutMs){
    try{
      const info=await w.executeJavaScript(`
        (() => {
          const v=document.querySelector('video');
          if(!v) return {found:false};
          return {
            found:true, readyState:v.readyState, paused:v.paused,
            width:v.videoWidth||0, height:v.videoHeight||0, currentTime:v.currentTime||0
          };
        })()
      `, true);

      if(info?.found){
        sourceOnline[i]=true;
        hideNotice(i);
        const h=sourceHealth[i];
        h.lastTime=Number(info.currentTime||0);
        h.lastProgressAt=Date.now();
        h.lastGoodAt=Date.now();
        h.reconnectAttempts=0;
        cancelRecovery(i);

        if(playerMode[i]) await isolateVideo(i);
        await applyAudioForIndex(i);

        const dimensions=info.width&&info.height?`${info.width}×${info.height}`:"VIDEO";
        markHealth(i,info.readyState>=2?"LIVE":"BUFFERING",info.readyState>=2?dimensions:"");

        setTimeout(()=>playerMode[i]&&isolateVideo(i),1500);
        setTimeout(()=>playerMode[i]&&isolateVideo(i),4000);
        return;
      }
    }catch(e){}
    await sleep(700);
  }

  sourceOnline[i]=false;
  markHealth(i,"OFFLINE","NO VIDEO");
  showNotice(i,"VIDEO NOT FOUND","LIVEページは開いていますが動画を検出できません。自動再接続を試行します。");
  scheduleRecovery(i,"NO VIDEO");
}

async function isolateVideo(i){
  const w=views[i];
  if(!w) return false;

  try{
    const result=await w.executeJavaScript(`
      (() => {
        const v=document.querySelector('video');
        if(!v) return {ok:false};

        document.querySelectorAll('.gs-keep').forEach(el=>el.classList.remove('gs-keep'));
        document.documentElement.classList.add('gs-isolate');

        let el=v;
        while(el){
          el.classList?.add('gs-keep');
          if(el===document.documentElement) break;
          el=el.parentElement;
        }

        const player=v.closest('#movie_player')||v.closest('.html5-video-player')||v.parentElement;
        if(player) player.classList.add('gs-player-root');

        try{v.playsInline=true;v.play().catch(()=>{});}catch(e){}
        try{
          const p=document.getElementById('movie_player');
          if(p&&p.playVideo) p.playVideo();
        }catch(e){}

        return {ok:true,readyState:v.readyState,width:v.videoWidth||0,height:v.videoHeight||0};
      })()
    `,true);

    await w.insertCSS(`
      html.gs-isolate,html.gs-isolate body{
        margin:0!important;padding:0!important;width:100%!important;height:100%!important;
        overflow:hidden!important;background:#000!important
      }
      html.gs-isolate body *{visibility:hidden!important}
      html.gs-isolate .gs-keep,html.gs-isolate .gs-keep *{visibility:visible!important}
      html.gs-isolate .gs-player-root{
        position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;
        min-width:100vw!important;min-height:100vh!important;max-width:none!important;max-height:none!important;
        margin:0!important;padding:0!important;transform:none!important;translate:none!important;
        z-index:2147483646!important;overflow:hidden!important;background:#000!important;
        opacity:1!important;clip:auto!important;clip-path:none!important
      }
      html.gs-isolate .gs-player-root .html5-video-container{
        position:absolute!important;inset:0!important;width:100%!important;height:100%!important;
        transform:none!important;overflow:hidden!important
      }
      html.gs-isolate video{
        display:block!important;position:absolute!important;inset:0!important;left:0!important;top:0!important;
        aspect-ratio:16/9!important;
        width:100%!important;height:100%!important;min-width:100%!important;min-height:100%!important;
        max-width:none!important;max-height:none!important;margin:0!important;transform:none!important;
        object-fit:contain!important;opacity:1!important;visibility:visible!important;z-index:2147483647!important
      }
      html.gs-isolate .ytp-chrome-top,html.gs-isolate .ytp-chrome-bottom,
      html.gs-isolate .ytp-gradient-top,html.gs-isolate .ytp-gradient-bottom,
      html.gs-isolate .ytp-ce-element,html.gs-isolate .ytp-cards-teaser,
      html.gs-isolate .ytp-pause-overlay,html.gs-isolate .ytp-ad-overlay-container{display:none!important}
    `);

    if(result?.ok){
      hideNotice(i);
      if(state.cleanMode!=="off") setTimeout(()=>applyCleanFeedToView(i),100);
      return true;
    }
  }catch(e){
    console.warn("isolateVideo failed",i,e);
  }
  return false;
}

async function restorePage(i){
  const w=views[i];
  if(!w) return;
  try{
    await w.executeJavaScript(`
      (() => {
        document.documentElement.classList.remove('gs-isolate');
        document.querySelectorAll('.gs-keep').forEach(el=>el.classList.remove('gs-keep'));
        document.querySelectorAll('.gs-player-root').forEach(el=>el.classList.remove('gs-player-root'));
        window.scrollTo(0,0);return true;
      })()
    `,true);
  }catch(e){}
}

async function togglePlayerMode(i){
  playerMode[i]=!playerMode[i];
  const btn=document.querySelector(`[data-view="${i}"]`);
  if(playerMode[i]){
    if(btn) btn.textContent="PAGE";
    setStatus(i,"PLAYER MODE",true);
    await isolateVideo(i);
    await applyAudioForIndex(i);
  }else{
    if(btn) btn.textContent="PLAYER";
    setStatus(i,"PAGE MODE",true);
    hideNotice(i);
    await restorePage(i);
    await applyAudioForIndex(i);
  }
}

async function reloadView(i){
  await reconnectSource(i,true);
}

async function setViewVolume(i,volume){
  const w=views[i];
  if(!w) return;
  const normalized=Math.max(0,Math.min(100,Number(volume)||0));
  const muted=normalized<=0;
  const volume01=normalized/100;

  try{
    await w.executeJavaScript(`
      (() => {
        const volume=${volume01};
        const muted=${muted};
        const v=document.querySelector('video');
        if(v){
          v.muted=muted;
          v.volume=volume;
          if(!muted) v.play().catch(()=>{});
        }
        const p=document.getElementById('movie_player');
        if(p){
          try{
            if(muted){p.mute();}
            else{
              p.unMute();
              if(p.setVolume) p.setVolume(${normalized});
              if(p.playVideo) p.playVideo();
            }
          }catch(e){}
        }
      })()
    `,true);
  }catch(e){}
}

async function applyAudioForIndex(i){
  const volume=state.audio.get(i)||0;
  await setViewVolume(i,volume);
}
async function applyAudioMix(){
  await Promise.all(views.map((_,i)=>applyAudioForIndex(i)));
  updateAudioUI();
  renderMixer();
}

function updateAudioUI(){
  sources.forEach((_,i)=>{
    const tile=document.getElementById(`tile-${i}`);
    const btn=document.querySelector(`[data-audio="${i}"]`);
    const active=(state.audio.get(i)||0)>0;
    tile?.classList.toggle("audio-active",active);
    btn?.classList.toggle("audio-on",active);

    if(btn){
      if(state.mode==="multi") btn.textContent=active?"REMOVE":"ADD AUDIO";
      else if(state.mode==="newsroom") btn.textContent=active?"IN MIX":"AUDIO";
      else btn.textContent=active?"MUTE":"AUDIO";
    }
  });
  $("#mixCount").textContent=`${state.audio.size}/3`;
}

async function handleAudioButton(i){
  if(state.mode==="newsroom"){
    toast("NEWSROOM audio mix is automatic");
    return;
  }

  if(state.mode==="multi"){
    if(state.audio.has(i)){
      state.audio.delete(i);
    }else{
      if(state.audio.size>=3){
        toast("MULTI AUDIO supports up to 3 sources");
        return;
      }
      state.audio.set(i, state.audio.size===0?70:35);
    }
    await applyAudioMix();
    return;
  }

  // MANUAL / SCAN with FOLLOW AUDIO off: single-source audio.
  if(state.audio.has(i) && state.audio.size===1){
    state.audio.clear();
  }else{
    state.audio.clear();
    state.audio.set(i,100);
  }
  await applyAudioMix();
}

function renderMixer(){
  $("#mixerMode").textContent=state.mode.toUpperCase();
  const list=$("#mixerList");
  const entries=[...state.audio.entries()];

  if(!entries.length){
    list.innerHTML=`<div class="mix-empty">NO ACTIVE AUDIO</div>`;
    return;
  }

  list.innerHTML=entries.map(([i,vol])=>{
    let role="";
    if(state.mode==="newsroom"){
      role=i===state.newsroomLead?"LEAD":"BG";
    }
    return `
      <div class="mix-row">
        <div class="mix-top">
          <span>${sources[i].flag}</span>
          <div class="mix-name">${sources[i].station}</div>
          ${role?`<span class="mix-role">${role}</span>`:""}
          ${state.mode!=="newsroom"?`<button class="mix-remove" data-mix-remove="${i}">×</button>`:""}
        </div>
        <div class="mix-control">
          <input type="range" min="0" max="100" step="1" value="${vol}" data-mix-volume="${i}">
          <div class="mix-vol" id="mixVol-${i}">${vol}%</div>
        </div>
      </div>`;
  }).join("");

  list.querySelectorAll("[data-mix-volume]").forEach(slider=>{
    slider.addEventListener("input",async()=>{
      const i=Number(slider.dataset.mixVolume);
      const vol=Number(slider.value);
      state.audio.set(i,vol);
      document.getElementById(`mixVol-${i}`).textContent=`${vol}%`;
      await setViewVolume(i,vol);
      updateAudioUI();
    });
  });

  list.querySelectorAll("[data-mix-remove]").forEach(btn=>{
    btn.addEventListener("click",async()=>{
      const i=Number(btn.dataset.mixRemove);
      state.audio.delete(i);
      await setViewVolume(i,0);
      updateAudioUI();
      renderMixer();
    });
  });
}

function clearTileModeClasses(){
  document.querySelectorAll(".tile").forEach(el=>{
    el.classList.remove("newsroom-lead","newsroom-bg","scan-active");
  });
}

function candidatesOnline(){
  const online=sourceOnline.map((v,i)=>v?i:null).filter(v=>v!==null);
  return online.length?online:sources.map((_,i)=>i);
}
function randomChoice(arr,exclude=[]){
  const blocked=new Set(exclude.filter(v=>v!==null&&v!==undefined));
  let pool=arr.filter(x=>!blocked.has(x));
  if(!pool.length) pool=arr.slice();
  return pool[Math.floor(Math.random()*pool.length)];
}
function randomDistinct(arr,count,exclude=[]){
  const pool=arr.filter(x=>!exclude.includes(x));
  const out=[];
  while(out.length<count && pool.length){
    const pos=Math.floor(Math.random()*pool.length);
    out.push(pool.splice(pos,1)[0]);
  }
  return out;
}

function setFocus(i){
  if(state.focusIndex!==null){
    document.getElementById(`tile-${state.focusIndex}`)?.classList.remove("focused");
  }
  state.focusIndex=i;
  if(i!==null){
    document.getElementById(`tile-${i}`)?.classList.add("focused");
    if(playerMode[i]) setTimeout(()=>isolateVideo(i),150);
  }
}
function closeFocus(){
  if(state.focusIndex!==null){
    document.getElementById(`tile-${state.focusIndex}`)?.classList.remove("focused");
  }
  state.focusIndex=null;
}
function toggleFocus(i){
  if(state.mode==="newsroom"){
    toast("FOCUS is disabled in NEWSROOM mode");
    return;
  }
  if(state.focusIndex===i) closeFocus();
  else setFocus(i);
}

async function scanStep(){
  const candidates=candidatesOnline();
  const next=randomChoice(candidates,[state.lastScanIndex]);
  state.lastScanIndex=next;
  clearTileModeClasses();

  if(state.mode==="scan"){
    setFocus(next);
    document.getElementById(`tile-${next}`)?.classList.add("scan-active");
    if(state.followAudio){
      state.audio.clear();
      state.audio.set(next,100);
      await applyAudioMix();
    }
  }else if(state.mode==="newsroom"){
    closeFocus();
    const bg=randomDistinct(candidates,2,[next]);
    state.newsroomLead=next;
    state.newsroomBg=bg;
    document.getElementById(`tile-${next}`)?.classList.add("newsroom-lead");
    bg.forEach(i=>document.getElementById(`tile-${i}`)?.classList.add("newsroom-bg"));

    state.audio.clear();
    state.audio.set(next,60);
    if(bg[0]!==undefined) state.audio.set(bg[0],20);
    if(bg[1]!==undefined) state.audio.set(bg[1],20);
    await applyAudioMix();
  }

  scheduleNextScan();
}

function scheduleNextScan(){
  clearTimeout(state.scanTimer);
  if(!["scan","newsroom"].includes(state.mode)){
    state.nextScanAt=null;
    return;
  }
  state.nextScanAt=Date.now()+state.intervalSec*1000;
  state.scanTimer=setTimeout(()=>scanStep(),state.intervalSec*1000);
}

async function setMode(mode){
  if(!["manual","multi","scan","newsroom"].includes(mode)) return;

  clearTimeout(state.scanTimer);
  state.scanTimer=null;
  state.nextScanAt=null;
  clearTileModeClasses();

  if(state.mode==="scan") closeFocus();
  if(state.mode==="newsroom"){
    state.newsroomLead=null;
    state.newsroomBg=[];
  }

  state.mode=mode;
  persistCoreSettings();
  $("#modeReadout").textContent=mode.toUpperCase();
  const minimalMode=$("#minimalModeStatus");
  if(minimalMode) minimalMode.textContent=mode.toUpperCase();
  document.querySelectorAll("[data-mode]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.mode===mode);
  });

  if(mode==="manual"){
    if(state.audio.size>1){
      const first=[...state.audio.entries()][0];
      state.audio.clear();
      if(first) state.audio.set(first[0],100);
    }
    await applyAudioMix();
  }

  if(mode==="multi"){
    closeFocus();
    // Preserve the current single source if one is already active.
    await applyAudioMix();
  }

  if(mode==="scan"){
    if(state.audio.size>1){
      const first=[...state.audio.keys()][0];
      state.audio.clear();
      if(first!==undefined) state.audio.set(first,100);
    }
    await scanStep();
  }

  if(mode==="newsroom"){
    await scanStep();
  }

  updateAudioUI();
  renderMixer();
}

function updateCountdown(){
  if(!state.nextScanAt || !["scan","newsroom"].includes(state.mode)){
    $("#countdown").textContent="NEXT --:--";
    return;
  }
  const left=Math.max(0,Math.ceil((state.nextScanAt-Date.now())/1000));
  $("#countdown").textContent=`NEXT 00:${String(left).padStart(2,"0")}`;
}

async function togglePlayerMode(i){
  playerMode[i]=!playerMode[i];
  const btn=document.querySelector(`[data-view="${i}"]`);

  if(playerMode[i]){
    if(btn) btn.textContent="PAGE";
    setStatus(i,"PLAYER MODE",true);
    await isolateVideo(i);
    await applyAudioForIndex(i);
  }else{
    if(btn) btn.textContent="PLAYER";
    setStatus(i,"PAGE MODE",true);
    hideNotice(i);
    await restorePage(i);
    await applyAudioForIndex(i);
  }
}

async function reloadView(i){
  await reconnectSource(i,true);
}

function updateTimes(){
  $("#utc").textContent="UTC "+new Intl.DateTimeFormat("en-GB",{
    timeZone:"UTC",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false
  }).format(new Date());

  clockSources.forEach((s,i)=>{
    const t=fmtTime(s.tz);
    document.getElementById(`clock-${i}`).textContent=t;
    document.getElementById(`zone-${i}`).textContent=zone(s.tz);
  });

  sources.forEach((s,i)=>{
    const t=fmtTime(s.tz);
    document.getElementById(`tiletime-${i}`).textContent=t;
  });
  updateCountdown();
}

function toast(text){
  const el=$("#toast");
  el.textContent=text;
  el.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer=setTimeout(()=>el.classList.remove("show"),1800);
}


/* ==========================================================
   SETTINGS — v1.0
   ========================================================== */

function settingsIsOpen(){
  return $("#settingsOverlay")?.classList.contains("open")||false;
}

function settingsValue(id,text,kind=""){
  const el=$(id);
  if(!el) return;
  el.textContent=String(text??"—");
  el.className=`settings-value ${kind}`.trim();
}

function syncSettingsUi(){
  const overlay=$("#settingsOverlay");
  if(!overlay) return;

  const mode=$("#settingMode");
  const interval=$("#settingInterval");
  const preset=$("#settingPreset");
  const follow=$("#settingFollowAudio");
  const alerts=$("#settingAlerts");
  const radioVol=$("#settingRadioVolume");
  const emgEnabled=$("#settingEmergencyEnabled");
  const emgSource=$("#settingEmergencySource");
  const clean=$("#settingCleanMode");
  const recover=$("#settingAutoRecover");

  if(mode) mode.value=state.mode;
  if(interval) interval.value=String(state.intervalSec);

  const activePreset=activePresetKey();
  if(preset){
    preset.value=activePreset==="emergency"
      ? (localStorage.getItem("gs_active_preset_v1")||"global")
      : activePreset;
    preset.disabled=!!readJapanEmergency();
  }

  if(follow) follow.checked=!!state.followAudio;
  if(alerts) alerts.checked=!!alertState.enabled;

  const volume=Number($("#radioVolume")?.value||45);
  if(radioVol) radioVol.value=String(volume);
  const volText=$("#settingRadioVolumeValue");
  if(volText) volText.textContent=`${volume}%`;

  if(emgEnabled) emgEnabled.checked=!!emergencyUiState.enabled;
  if(emgSource) emgSource.value=emergencyUiState.sandbox?"sandbox":"live";

  if(clean) clean.value=state.cleanMode;
  if(recover) recover.checked=!!state.autoRecover;

  settingsValue("#settingGridValue",$("#layoutReadout")?.textContent||"AUTO");
  settingsValue(
    "#settingSourceCount",
    `${sources.length} FEEDS / ${presetLabel(activePresetKey())}`
  );

  const region=headlineRegionForPreset();
  settingsValue("#settingHeadlineRegion",region.label);

  const headlineProvider=$("#headlineProvider")?.textContent||headlineState.source||"—";
  const headlineStatus=$("#headlinesState")?.textContent||"—";
  settingsValue("#settingHeadlineStatus",`${headlineProvider} / ${headlineStatus}`);

  settingsValue(
    "#settingRadioStation",
    radioState.current?.name||"NO RADIO SELECTED"
  );

  settingsValue(
    "#settingEmergencyStatus",
    `${emergencyUiState.status}${emergencyUiState.sandbox?" / SANDBOX":" / LIVE"}`,
    emergencyUiState.status.includes("LIVE")
      ? "good"
      : emergencyUiState.status.includes("ERROR")
        ? "err"
        : "warn"
  );

  settingsValue(
    "#settingCleanStatus",
    `${String(state.cleanEngineStatus||"").toUpperCase()} / ${String(state.cleanEngineSource||"").toUpperCase()} / ${String(state.cleanMode||"").toUpperCase()}`,
    state.cleanEngineStatus==="ready"?"good":
      state.cleanEngineStatus==="error"?"err":"warn"
  );

  settingsValue("#settingBlockedCount",state.blockedSinceReset);

  const healthCounts={live:0,buffering:0,reconnecting:0,offline:0};
  sourceHealth.forEach(h=>{
    const s=String(h.state||"").toLowerCase();
    if(s==="live") healthCounts.live++;
    else if(s==="buffering" || s==="stalled") healthCounts.buffering++;
    else if(s==="reconnecting") healthCounts.reconnecting++;
    else if(s==="offline") healthCounts.offline++;
  });
  settingsValue(
    "#settingHealthStatus",
    `LIVE ${healthCounts.live} / BUF ${healthCounts.buffering} / REC ${healthCounts.reconnecting} / OFF ${healthCounts.offline}`,
    healthCounts.offline>0?"warn":"good"
  );

  const cinemaBtn=$("#settingCinemaBtn");
  if(cinemaBtn){
    cinemaBtn.textContent=cinemaState.active?"EXIT CINEMA":"ENTER CINEMA";
  }
}

function selectSettingsTab(name){
  document.querySelectorAll("[data-settings-tab]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.settingsTab===name);
  });
  document.querySelectorAll("[data-settings-pane]").forEach(pane=>{
    pane.classList.toggle("active",pane.dataset.settingsPane===name);
  });
}

function closeSettings(){
  $("#settingsOverlay")?.classList.remove("open");
  $("#settingsBtn")?.classList.remove("active");
}

function openSettings(tab="general"){
  if(cinemaState.active){
    setCinemaMode(false);
  }

  try{closeHeadlines();}catch(e){}
  try{closeRadio();}catch(e){}
  try{closeAlertPanel();}catch(e){}

  $("#sourceManager")?.classList.remove("open");
  $("#mixer")?.classList.remove("open");
  $("#mixerBtn")?.classList.remove("active");

  selectSettingsTab(tab);
  syncSettingsUi();
  $("#settingsOverlay")?.classList.add("open");
  $("#settingsBtn")?.classList.add("active");
}

function resetAppSettings(){
  const preservePreset=localStorage.getItem("gs_active_preset_v1");

  [
    CORE_SETTINGS_KEY,
    CLEAN_PREF_KEY,
    ALERT_ENABLED_KEY,
    RADIO_VOLUME_KEY,
    EMERGENCY_WATCH_ENABLED_KEY,
    EMERGENCY_SANDBOX_KEY
  ].forEach(key=>{
    try{localStorage.removeItem(key);}catch(e){}
  });

  // Keep custom sources/layout and chosen PRESET. "Reset settings" should not delete user data.
  if(preservePreset){
    localStorage.setItem("gs_active_preset_v1",preservePreset);
  }

  state.mode="manual";
  state.intervalSec=30;
  state.followAudio=true;
  state.autoRecover=true;

  $("#intervalSelect").value="30";
  $("#followAudio").checked=true;
  $("#autoRecover").checked=true;

  alertState.enabled=true;
  localStorage.setItem(ALERT_ENABLED_KEY,"1");
  updateAlertsToggle();

  emergencyUiState.enabled=true;
  emergencyUiState.sandbox=false;
  localStorage.setItem(EMERGENCY_WATCH_ENABLED_KEY,"1");
  localStorage.setItem(EMERGENCY_SANDBOX_KEY,"0");
  window.globalSignal?.setEmergencyWatchEnabled(true);
  window.globalSignal?.setEmergencySandbox(false);

  $("#radioVolume").value="45";
  $("#radioVolumeReadout").textContent="45%";
  radioAudio().volume=.45;
  localStorage.setItem(RADIO_VOLUME_KEY,"45");

  setCleanFeedMode("standard",{reload:false});
  setMode("manual");

  persistCoreSettings();
  syncSettingsUi();
  toast("App settings reset — sources and custom presets were kept");
}

function bindSettings(){
  $("#settingsBtn").addEventListener("click",()=>{
    if(settingsIsOpen()) closeSettings();
    else openSettings();
  });

  $("#settingsClose").addEventListener("click",closeSettings);
  $("#settingsDone").addEventListener("click",closeSettings);

  $("#settingsOverlay").addEventListener("click",e=>{
    if(e.target===$("#settingsOverlay")) closeSettings();
  });

  document.querySelectorAll("[data-settings-tab]").forEach(btn=>{
    btn.addEventListener("click",()=>selectSettingsTab(btn.dataset.settingsTab));
  });

  $("#settingMode").addEventListener("change",()=>{
    setMode($("#settingMode").value);
  });

  $("#settingInterval").addEventListener("change",()=>{
    $("#intervalSelect").value=$("#settingInterval").value;
    $("#intervalSelect").dispatchEvent(new Event("change"));
  });

  $("#settingPreset").addEventListener("change",()=>{
    const value=$("#settingPreset").value;
    closeSettings();
    setPreset(value);
  });

  $("#settingCinemaBtn").addEventListener("click",()=>{
    closeSettings();
    setCinemaMode(true);
  });

  $("#settingOpenSources").addEventListener("click",()=>{
    closeSettings();
    openSourceManager();
  });

  $("#settingFollowAudio").addEventListener("change",()=>{
    $("#followAudio").checked=$("#settingFollowAudio").checked;
    $("#followAudio").dispatchEvent(new Event("change"));
  });

  $("#settingOpenMixer").addEventListener("click",()=>{
    closeSettings();
    $("#mixer").classList.add("open");
    $("#mixerBtn").classList.add("active");
    renderMixer();
  });

  $("#settingRadioVolume").addEventListener("input",()=>{
    const value=Number($("#settingRadioVolume").value||0);
    $("#settingRadioVolumeValue").textContent=`${value}%`;
    $("#radioVolume").value=String(value);
    $("#radioVolume").dispatchEvent(new Event("input"));
  });

  $("#settingRefreshHeadlines").addEventListener("click",()=>{
    loadHeadlines(true);
    toast("HEADLINES refresh requested");
    setTimeout(syncSettingsUi,700);
  });

  $("#settingAlerts").addEventListener("change",()=>{
    const desired=$("#settingAlerts").checked;
    if(desired!==alertState.enabled) toggleAlerts();
    syncSettingsUi();
  });

  $("#settingOpenRadio").addEventListener("click",()=>{
    closeSettings();
    openRadio();
  });

  $("#settingEmergencyEnabled").addEventListener("change",()=>{
    const desired=$("#settingEmergencyEnabled").checked;
    if(desired!==emergencyUiState.enabled){
      $("#emergencyWatchBtn").click();
    }
    syncSettingsUi();
  });

  $("#settingEmergencySource").addEventListener("change",()=>{
    $("#emergencySourceSelect").value=$("#settingEmergencySource").value;
    $("#emergencySourceSelect").dispatchEvent(new Event("change"));
    setTimeout(syncSettingsUi,250);
  });

  $("#settingEmergencyDemo").addEventListener("click",()=>{
    closeSettings();
    window.globalSignal?.triggerEmergencyDemo();
  });

  $("#settingCleanMode").addEventListener("change",()=>{
    $("#cleanFeedSelect").value=$("#settingCleanMode").value;
    $("#cleanFeedSelect").dispatchEvent(new Event("change"));
    setTimeout(syncSettingsUi,200);
  });

  $("#settingAutoRecover").addEventListener("change",()=>{
    $("#autoRecover").checked=$("#settingAutoRecover").checked;
    $("#autoRecover").dispatchEvent(new Event("change"));
  });

  $("#settingReconnectAll").addEventListener("click",()=>{
    reconnectAll();
    toast("All sources reconnecting");
  });

  $("#settingsReset").addEventListener("click",resetAppSettings);
}

function applyRestoredCoreSettingsToUi(){
  $("#intervalSelect").value=String(state.intervalSec);
  $("#followAudio").checked=!!state.followAudio;
  $("#autoRecover").checked=!!state.autoRecover;

  // Use setMode so SCAN/NEWSROOM timers are restored correctly.
  setMode(state.mode);
}

function bindGlobalControls(){
  document.querySelectorAll("[data-mode]").forEach(btn=>{
    btn.addEventListener("click",()=>setMode(btn.dataset.mode));
  });

  $("#intervalSelect").addEventListener("change",()=>{
    state.intervalSec=Number($("#intervalSelect").value);
    persistCoreSettings();
    if(["scan","newsroom"].includes(state.mode)) scheduleNextScan();
    syncSettingsUi();
  });

  $("#followAudio").addEventListener("change",()=>{
    state.followAudio=$("#followAudio").checked;
    persistCoreSettings();
    syncSettingsUi();
  });

  $("#autoRecover").addEventListener("change",()=>{
    state.autoRecover=$("#autoRecover").checked;
    persistCoreSettings();
    syncSettingsUi();
    if(!state.autoRecover){
      sourceHealth.forEach((_,i)=>cancelRecovery(i));
      toast("AUTO RECOVER disabled");
    }else{
      toast("AUTO RECOVER enabled");
      watchdogTick();
    }
  });

  $("#reconnectAllBtn").addEventListener("click",()=>reconnectAll());

  $("#cleanFeedSelect").addEventListener("change",()=>{
    setCleanFeedMode($("#cleanFeedSelect").value);
  });

  $("#scanNowBtn").addEventListener("click",()=>{
    if(["scan","newsroom"].includes(state.mode)) scanStep();
    else toast("NEXT NOW is available in SCAN / NEWSROOM");
  });

  $("#mixerBtn").addEventListener("click",()=>{
    $("#mixer").classList.toggle("open");
    $("#mixerBtn").classList.toggle("active",$("#mixer").classList.contains("open"));
    renderMixer();
  });
  $("#mixerClose").addEventListener("click",()=>{
    $("#mixer").classList.remove("open");
    $("#mixerBtn").classList.remove("active");
  });

  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){
      if(settingsIsOpen()){
        closeSettings();
      }else if($("#sourceManager").classList.contains("open")){
        closeSourceManager();
      }else if($("#alertPanel").classList.contains("open")){
        closeAlertPanel();
      }else if($("#radioPanel").classList.contains("open")){
        closeRadio();
      }else if($("#headlinesPanel").classList.contains("open")){
        closeHeadlines();
      }else if($("#mixer").classList.contains("open")){
        $("#mixer").classList.remove("open");
        $("#mixerBtn").classList.remove("active");
      }else if(state.focusIndex!==null){
        closeFocus();
      }else if(cinemaState.active){
        setCinemaMode(false);
      }
    }
    if((e.ctrlKey||e.metaKey) && e.key===","){
      e.preventDefault();
      if(settingsIsOpen()) closeSettings();
      else openSettings();
    }

    // Monitoring mode is changed in SETTINGS.
    if(e.key.toLowerCase()==="m"){
      $("#mixerBtn").click();
    }
    // Source configuration is opened through SETTINGS > SOURCES.
    if(e.key.toLowerCase()==="h"){
      if($("#headlinesPanel").classList.contains("open")) closeHeadlines();
      else openHeadlines();
    }
    if(e.key.toLowerCase()==="b"){
      if($("#radioPanel").classList.contains("open")) closeRadio();
      else openRadio();
    }
    if(e.key.toLowerCase()==="a"){
      if($("#alertPanel").classList.contains("open")) closeAlertPanel();
      else openAlertPanel();
    }
    if(e.key.toLowerCase()==="r"){
      reconnectAll();
    }
    // CLEAN FEED mode is changed in SETTINGS.

    if(e.key==="F11" || e.key.toLowerCase()==="f"){
      e.preventDefault();
      toggleCinemaMode();
    }
  });
}

buildClocks();
buildGrid();
applyAdaptiveGrid();
bindAdaptiveGrid();
bindHeadlines();
initializeHeadlines();
bindRadio();
bindAlerts();
initializeEmergencyWatch();
initializeCinemaMode();
bindGlobalControls();
bindSourceManager();
bindSettings();
bindCleanFeedBridge();
applyRestoredCoreSettingsToUi();
renderMixer();
updateAudioUI();
updateHealthSummary();
updateTimes();
setInterval(updateTimes,1000);
setTimeout(()=>watchdogTick(),8000);
setInterval(()=>watchdogTick(),WATCHDOG.intervalMs);
setInterval(()=>{ if(state.cleanMode!=="off") assistYouTubeAds(); },1200);
setInterval(()=>{ if(state.cleanMode!=="off") applyCleanFeedAll(); },60000);
