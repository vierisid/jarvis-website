---
title: Quick Start
description: Get JARVIS running and send your first message in under five minutes.
---

This guide assumes you have completed [installation](/docs/installation). If you haven't, start there.

## Step 1 — Run Onboarding

`jarvis onboard` is the interactive wizard for first-time setup and can be re-run any time to update your configuration:

```bash
jarvis onboard
```

The wizard walks through:

1. **About you** — your name and what you want to call your assistant
2. **LLM provider** — choose Anthropic, OpenAI, Google Gemini, or Ollama. Each offers a model selection menu (e.g. `claude-sonnet-4-6`, `gpt-5.4`, `gemini-3-flash`, `llama3`)
3. **API key** — paste the key for your chosen provider
4. **Fallback providers** — optional backup LLM providers
5. **Voice** — enable TTS (Edge TTS free, or ElevenLabs premium) and STT
6. **Channels** — Telegram and Discord bot tokens (optional)
7. **Personality** — core traits and behavior style
8. **Authority** — autonomy level (1-10)
9. **Dashboard port** — defaults to `3142`
10. **Autostart** — install a systemd user service (Linux) or launchd plist (macOS)

Your config is saved to `~/.jarvis/config.yaml`.

## Step 2 — Start the Daemon

```bash
jarvis start
```

JARVIS launches in the background. On first start it:

- Opens the SQLite knowledge vault at `~/.jarvis/jarvis.db`
- Starts the WebSocket server on your configured port (default 3142)
- Auto-detects and launches Chrome or Chromium for browser control
- Opens the dashboard in your default browser

To keep JARVIS in the foreground (useful for debugging):

```bash
jarvis start --foreground
```

## Step 3 — Open the Dashboard

The dashboard opens automatically after `jarvis start`. If it does not, navigate to:

```
http://localhost:3142
```

You should see the JARVIS dashboard with a chat interface ready to receive messages.

## Step 4 — Send Your First Message

In the chat input, try a command that exercises real capabilities:

```
Go to news.ycombinator.com and tell me the top 5 stories right now
```

JARVIS will:

1. Navigate Chrome to Hacker News
2. Extract the page content
3. Summarize the top 5 stories
4. Stream the response back to you in real time

Try another that uses memory:

```
My name is Alex and I prefer concise answers. Remember this.
```

From this point on, JARVIS knows your name and preference. Ask it to confirm:

```
What do you know about me?
```

## Step 5 — Check the Status

In another terminal, confirm the daemon is healthy:

```bash
jarvis status
```

Expected output:

```
JARVIS daemon is running
  PID: 12345
  Port: 3142
  Uptime: 2m 14s
  Memory: 87 MB
  Active agents: 1
  Messages today: 3
```

## Key CLI Commands

| Command | Description |
|---|---|
| `jarvis start` | Start the daemon in the background |
| `jarvis stop` | Stop the daemon gracefully |
| `jarvis restart` | Restart the daemon |
| `jarvis status` | Show daemon status and health |
| `jarvis logs -f` | Stream live logs |
| `jarvis onboard` | Re-run the configuration wizard |
| `jarvis doctor` | Diagnose common configuration problems |
| `jarvis update` | Update to the latest version |
| `jarvis version` | Show version information |

See the full [CLI reference](/docs/cli) for all flags and options.

## What to Explore Next

Now that JARVIS is running, explore its core features:

- **[Browser Control](/docs/browser-control)** — have JARVIS browse the web autonomously
- **[Voice Interface](/docs/voice)** — talk to JARVIS hands-free
- **[Multi-Agent System](/docs/multi-agent)** — delegate complex tasks to specialist sub-agents
- **[Memory and Knowledge](/docs/memory)** — understand how JARVIS learns about you
- **[Proactive Agent](/docs/proactive-agent)** — set up Gmail/Calendar monitoring and scheduled tasks
- **[Telegram](/docs/telegram)** and **[Discord](/docs/discord)** — connect JARVIS to messaging platforms
