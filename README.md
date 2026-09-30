# SIGNAL

**SIGNAL 1.0.0** is a Windows desktop console for monitoring multiple live news sources at the same time.

## Download

Use the **Releases** section of this repository.

- **SIGNAL Setup 1.0.0.exe** — recommended Windows installer
- **SIGNAL Portable 1.0.0.exe** — portable version, no installation required
- **SHA256SUMS.txt** — SHA-256 checksums

> SIGNAL 1.0.0 is currently unsigned. Windows SmartScreen may show an “Unknown publisher” warning.

## Features

- Multi-source live news monitoring
- Aspect-safe 16:9 monitor wall
- GLOBAL / ASIA / EUROPE / AMERICAS / JAPAN / CUSTOM presets
- MANUAL / MULTI AUDIO / SCAN / NEWSROOM modes
- HEADLINES with fallback providers
- Rule-based BREAKING / ALERT signals
- Radio Monitor
- Japan Emergency Watch
- Cinema Mode
- Settings
- Ghostery-based CLEAN FEED
- Source watchdog and automatic recovery

## Japan Emergency Watch

Japan Emergency Watch is a supplementary news-switching function and is **not an official emergency alert system**.

For earthquakes, tsunami, evacuation and other safety decisions, always prioritize information from the Japan Meteorological Agency, local authorities, emergency alerts and other official channels.

## CLEAN FEED

SIGNAL uses Ghostery's Electron blocker with a local filter-engine cache and a conservative fallback filter.

Playback stability is prioritized. YouTube advertising technology changes over time, so no client-side blocker can guarantee removal of every in-stream advertisement without potentially affecting playback.

## Requirements

- Windows 10 / 11
- x64
- Internet connection

People downloading a Release do **not** need Node.js, npm or Electron installed.

## Build & Release

The workflow at `.github/workflows/release-windows.yml` builds:

- `SIGNAL Setup 1.0.0.exe`
- `SIGNAL Portable 1.0.0.exe`
- `SHA256SUMS.txt`

and publishes them to the `v1.0.0` GitHub Release.

Run it from:

**Actions → Build & Publish SIGNAL 1.0.0 → Run workflow**

## Version

Public release version: **1.0.0**

## License

No open-source license is currently granted for SIGNAL itself. Third-party components retain their respective licenses. See `THIRD_PARTY_NOTICES.txt`.
