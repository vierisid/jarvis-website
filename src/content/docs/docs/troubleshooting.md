---
title: Troubleshooting
description: Solutions for common JARVIS issues and diagnostic commands.
---

This guide covers the most common problems you may encounter running JARVIS and how to resolve them. For issues not listed here, run `jarvis doctor` first — it checks environment, connectivity, and configuration automatically.

## Common Issues

### Daemon Won't Start

**Symptoms:** `jarvis start` exits immediately, or nothing appears at `http://localhost:3142`.

**Steps:**
1. Check that port 3142 is not already in use:
   ```bash
   lsof -i :3142
   ```
   If something is using it, either stop that process or configure a different port in `~/.jarvis/config.yaml` under `daemon.port`.
2. Validate your config file syntax:
   ```bash
   jarvis doctor
   ```
3. Check for errors in the log:
   ```bash
   jarvis logs -f
   ```

---

### Browser Tools Not Working

**Symptoms:** Commands like "go to a website" fail, or JARVIS reports it cannot connect to the browser.

**Steps:**
1. Ensure Chrome or Chromium is installed and accessible in your `PATH`.
2. JARVIS connects to Chrome via the Chrome DevTools Protocol (CDP) on port 9222. Confirm Chrome launched with remote debugging:
   ```bash
   google-chrome --remote-debugging-port=9222
   ```
3. Run `jarvis doctor` to verify the browser connection status.

---

### Sidecar Won't Connect

**Symptoms:** Desktop control commands fail, or the System Status panel shows the sidecar as disconnected.

**Steps:**
1. Verify the sidecar binary matches your platform (Windows, macOS, or Linux).
2. Check that the sidecar can reach the daemon on port 3142 — confirm no firewall is blocking the connection.
3. The sidecar authenticates via a JWT token sent in the `Authorization: Bearer` header. If the token is expired or misconfigured, re-enroll from the dashboard under **Settings > Sidecar**.
4. Inspect sidecar output for WebSocket errors and run `jarvis doctor` for a connectivity check.

---

### LLM Not Responding

**Symptoms:** Chat messages hang, time out, or return authentication errors.

**Steps:**
1. Verify the API key for your primary LLM provider is correctly set. API keys are stored in the encrypted keychain, not in config.yaml.
2. Check the provider's status page for outages:
   - Anthropic: [status.anthropic.com](https://status.anthropic.com)
   - OpenAI: [status.openai.com](https://status.openai.com)
   - Google: [status.cloud.google.com](https://status.cloud.google.com)
3. Run `jarvis doctor` to test the LLM connection.
4. If the primary provider is down, configure a fallback in your config:
   ```yaml
   llm:
     primary: anthropic
     fallback: [openai, gemini, ollama]
   ```

---

### Voice Not Working

**Symptoms:** The microphone button does nothing, or TTS responses are silent.

**Steps:**
1. Check that your browser has microphone permission granted for `http://localhost:3142`.
2. Verify TTS is enabled in `~/.jarvis/config.yaml`:
   ```yaml
   tts:
     enabled: true
     provider: edge
   ```
3. For ElevenLabs TTS, confirm the `api_key` is set under `tts.elevenlabs`.
4. Inspect the browser console (`F12`) for WebSocket or audio errors.
5. Run `jarvis doctor` to check the voice subsystem.

---

### Desktop Control Fails on WSL

**Symptoms:** Window management or UI automation commands fail when running JARVIS inside WSL2.

**Cause:** The Go sidecar uses Win32 APIs and must run on the Windows side — it cannot operate from inside the WSL2 environment.

**Fix:** Start the sidecar from a Windows terminal (PowerShell or Command Prompt), not from within WSL:
```powershell
# Run this in a Windows terminal, not in WSL
jarvis-sidecar.exe --token <your-jwt-token>
```
Keep the daemon (`jarvis start`) running in WSL as normal. The sidecar will connect to it over the network.

---

### Memory / Vault Issues

**Symptoms:** JARVIS forgets context between sessions, or errors mention the database.

**Steps:**
1. Confirm the database file exists:
   ```bash
   ls ~/.jarvis/jarvis.db
   ```
2. If the file is missing or corrupted, reinitialize the database:
   ```bash
   jarvis db:init
   ```
   Note: this resets stored memories and conversation history.
3. Check available disk space — a full disk will prevent SQLite writes.

---

### Dashboard Not Loading

**Symptoms:** Browser shows a connection refused error or blank page at `http://localhost:3142`.

**Steps:**
1. Confirm the daemon is running:
   ```bash
   jarvis status
   ```
2. If the daemon is not running, start it:
   ```bash
   jarvis start
   ```
3. Verify you are using the correct port. If you changed `daemon.port` in your config, update the URL accordingly.
4. Open the browser developer console (`F12 > Console`) and check for JavaScript errors or failed network requests.

---

## Diagnostic Commands

| Command | Description |
|---|---|
| `jarvis doctor` | Full environment check — config, LLM, browser, sidecar, database |
| `jarvis status` | Show daemon process, PID, uptime, and memory usage |
| `jarvis logs -f` | Stream live log output to watch for errors in real time |

Run `jarvis doctor` as your first step for any problem. It covers the majority of common configuration and connectivity issues automatically.

## Getting Help

If you cannot resolve an issue with the steps above:

- **GitHub Issues**: [github.com/vierisid/jarvis/issues](https://github.com/vierisid/jarvis/issues) — search existing issues or open a new one with your `jarvis doctor` output attached.
- **Discord**: [Join the community server](https://discord.gg/nE3hcaFYZP) for real-time help from other users and contributors.
