const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("globalSignal", {
  setCleanFeedMode: (mode) => ipcRenderer.send("clean-feed:set-mode", String(mode || "standard")),
  getCleanFeedState: () => ipcRenderer.invoke("clean-feed:get-state"),
  resetCleanFeedStats: () => ipcRenderer.send("clean-feed:reset-stats"),
  reportPlaybackHealth: (payload) => ipcRenderer.send("clean-feed:playback-health", payload || {}),

  onCleanFeedStats: (callback) => {
    const handler = (_event, stats) => callback(stats);
    ipcRenderer.on("clean-feed:stats", handler);
    return () => ipcRenderer.removeListener("clean-feed:stats", handler);
  },

  onCleanFeedModeChanged: (callback) => {
    const handler = (_event, info) => callback(info);
    ipcRenderer.on("clean-feed:mode-changed", handler);
    return () => ipcRenderer.removeListener("clean-feed:mode-changed", handler);
  },

  getHeadlines: (topic = "world news") => ipcRenderer.invoke("headlines:get", String(topic || "world news")),

  searchRadioStations: (query) => ipcRenderer.invoke("radio:search", String(query || "")),
  reportRadioClick: (stationUuid) => ipcRenderer.send("radio:click", String(stationUuid || "")),

  getEmergencyWatchState: () => ipcRenderer.invoke("emergency:get-state"),
  setEmergencyWatchEnabled: (enabled) => ipcRenderer.send("emergency:set-enabled", !!enabled),
  setEmergencySandbox: (enabled) => ipcRenderer.send("emergency:set-sandbox", !!enabled),
  triggerEmergencyDemo: () => ipcRenderer.send("emergency:demo"),

  onEmergencyStatus: (callback) => {
    const handler = (_event, info) => callback(info);
    ipcRenderer.on("emergency:status", handler);
    return () => ipcRenderer.removeListener("emergency:status", handler);
  },

  onEmergencyEvent: (callback) => {
    const handler = (_event, info) => callback(info);
    ipcRenderer.on("emergency:event", handler);
    return () => ipcRenderer.removeListener("emergency:event", handler);
  },

  setCinemaFullscreen: (enabled) => ipcRenderer.send("cinema:set-fullscreen", !!enabled),
  getCinemaFullscreen: () => ipcRenderer.invoke("cinema:get-fullscreen"),
  onCinemaFullscreenChanged: (callback) => {
    const handler = (_event, enabled) => callback(!!enabled);
    ipcRenderer.on("cinema:fullscreen-changed", handler);
    return () => ipcRenderer.removeListener("cinema:fullscreen-changed", handler);
  }
});
