---
title: CLI Commands
description: Complete reference for every jarvis command-line command.
---

The `jarvis` CLI is the primary interface for managing the JARVIS daemon. All commands are available after installation.

## Commands

### `jarvis start`

Start the JARVIS daemon.

```bash
jarvis start              # Start in background, open dashboard
jarvis start -d           # Start in background (detached, no browser)
jarvis start --foreground # Run in foreground (useful for debugging)
jarvis start --port 8080  # Override the configured port
jarvis start --no-open    # Start without opening the dashboard in your browser
```

| Flag | Description |
|---|---|
| `-d` | Detached mode — start in background without opening the browser |
| `--foreground` | Run in the foreground, logs to stdout |
| `--port <number>` | Override the port from config |
| `--no-open` | Do not auto-open the dashboard |
| `--no-local-tools` | Disable local tool execution (sidecar-only mode) |

On first start, the daemon creates the SQLite database, starts the WebSocket server, and auto-detects Chrome for browser control.

---

### `jarvis stop`

Stop the running daemon gracefully.

```bash
jarvis stop
```

Sends a shutdown signal and waits for in-progress tasks to complete.

---

### `jarvis restart`

Stop and restart the daemon. Reads the config fresh on startup.

```bash
jarvis restart
```

---

### `jarvis status`

Show the daemon's current status.

```bash
jarvis status
```

Example output:

```
JARVIS daemon is running
  PID: 12345
  Port: 3142
  Uptime: 2m 14s
  Memory: 87 MB
  Active agents: 1
  Messages today: 3
```

---

### `jarvis logs`

View daemon logs.

```bash
jarvis logs           # Show recent logs
jarvis logs -f        # Stream live logs (like tail -f)
jarvis logs -n 50     # Show last 50 lines
```

| Flag | Description |
|---|---|
| `-f` | Follow — stream new log entries as they arrive |
| `-n <number>` | Number of recent lines to display |

---

### `jarvis onboard`

Run the interactive configuration wizard. Creates or updates `~/.jarvis/config.yaml`.

```bash
jarvis onboard
```

The wizard walks through 10 steps:

1. **About you** — your name and assistant name
2. **LLM provider** — Anthropic, OpenAI, Google Gemini, or Ollama
3. **Model selection** — choose from available models for your provider
4. **API key** — paste the key for your chosen provider
5. **Fallback providers** — optional backup LLM providers
6. **Voice** — enable TTS (Edge TTS free, or ElevenLabs premium) and STT
7. **Channels** — Telegram and Discord bot tokens (optional)
8. **Personality** — core traits and behavior style
9. **Authority** — autonomy level (1-10)
10. **Dashboard port** — defaults to 3142

Can be re-run at any time to update configuration.

---

### `jarvis doctor`

Run a full environment diagnostic.

```bash
jarvis doctor
```

Checks:
- Config file exists and is valid YAML
- API keys are present and working
- LLM provider connectivity
- Browser (Chrome/Chromium) availability
- Sidecar connection status
- Database integrity
- Port availability
- Voice subsystem (TTS/STT)

---

### `jarvis update`

Update to the latest version.

```bash
jarvis update
```

Pulls the latest version, replaces the binary, and confirms the new version. Config and database are untouched.

---

### `jarvis version`

Show version information.

```bash
jarvis version
```

Example output:

```
JARVIS v0.1.0-alpha.1
Runtime: Bun 1.x.x
Config: ~/.jarvis/config.yaml
```

---

### `jarvis db:init`

Reinitialize the SQLite database. Use this if the database is corrupted.

```bash
jarvis db:init
```

:::caution
This resets stored memories and conversation history. Back up `~/.jarvis/jarvis.db` first if you want to preserve data.
:::

---

### `jarvis help`

Show help and list all available commands.

```bash
jarvis help
jarvis help <command>   # Show help for a specific command
```
