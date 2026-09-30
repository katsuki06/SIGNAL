@echo off
setlocal
cd /d "%~dp0"

echo =============================================
echo   SIGNAL 1.0.0 - Windows Local Build
echo =============================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js was not found.
  pause
  exit /b 1
)

call npm install --no-audit --no-fund
if errorlevel 1 goto :failed

call npm run dist:win
if errorlevel 1 goto :failed

echo.
echo Build complete:
echo   dist\SIGNAL Setup 1.0.0.exe
echo   dist\SIGNAL Portable 1.0.0.exe
echo.
explorer "%~dp0dist"
pause
exit /b 0

:failed
echo.
echo [ERROR] Build failed.
pause
exit /b 1
