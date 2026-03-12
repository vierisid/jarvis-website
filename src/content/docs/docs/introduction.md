---
title: Introduction
description: What is JARVIS, who it's for, and how it differs from ordinary AI assistants.
---

:::caution[Read before proceeding]
JARVIS is experimental software that can autonomously control your browser, desktop, files, and external accounts. It carries real security risks. By installing and using it, you accept full responsibility for its actions. Read the full [Disclaimer & Liability](/docs/disclaimer) page before proceeding.
:::

JARVIS is an always-on autonomous AI daemon built for power users who want an AI that acts, not one that asks permission. It runs as a persistent background service on your machine, maintaining a live model of your world and executing tasks continuously — with or without you at the keyboard.

## What Makes JARVIS Different

Most AI tools are reactive. You open them, type a question, read the answer, and close them. JARVIS is something else entirely.

| Trait | Chatbot | JARVIS |
|---|---|---|
| Lifecycle | Session-based | Always running |
| Initiative | Responds when asked | Monitors, schedules, acts proactively |
| Environment access | Sandboxed or none | Browser, desktop, files, APIs |
| Awareness | None | Continuous screen monitoring with struggle detection |
| Memory | Cleared each session | Persistent SQLite knowledge vault |
| Channels | One interface | Dashboard, Telegram, Discord, Voice |
| Execution model | Single agent | Multi-agent hierarchy with parallel tasks |

JARVIS is not a chatbot with tools bolted on. It is an autonomous daemon designed to be dangerously capable by default.

## Who JARVIS Is For

JARVIS targets power users who:

- Want an AI that works in the background while they focus on other things
- Need automation across browser, desktop, files, and external services
- Communicate through multiple channels (web, Telegram, Discord, voice)
- Want persistent memory that grows smarter over time
- Are comfortable granting an AI meaningful autonomy over their machine

If you want an AI that requires constant hand-holding and confirmation dialogs, JARVIS is not the right tool. If you want one that finishes the job, it is.

## Key Capabilities

### Autonomous Browser Control

JARVIS auto-detects and launches Chrome or Chromium, attaches via the Chrome DevTools Protocol, and can navigate, click, type, extract content, and take screenshots — all without you touching the browser.

### Native Desktop Control

JARVIS ships a Go sidecar that connects to the daemon over a JWT-authenticated WebSocket. The sidecar runs natively on each machine (Windows, macOS, Linux) and uses platform-native APIs — Win32 UI Automation on Windows, AppleScript on macOS, and X11/xdotool on Linux — to control any desktop application: find windows, click buttons, read text, type into fields, scroll, and take screenshots.

You can connect multiple sidecars to a single JARVIS daemon, giving the agent control over several machines simultaneously.

### Voice Interface

Speak to JARVIS using a wake word ("Hey JARVIS"), microphone button, or push-to-talk. Responses are streamed back as speech using edge-tts-universal — no API key required for TTS. Speech-to-text supports OpenAI Whisper, Groq, or a local model.

### Multi-Agent System

JARVIS orchestrates a hierarchy of 11 specialist sub-agents. A primary agent delegates tasks to specialists (researcher, coder, writer, analyst, and others) either synchronously for single tasks or asynchronously in parallel for complex workflows.

### Persistent Memory

Every conversation contributes to a SQLite knowledge vault. JARVIS automatically extracts facts, preferences, events, and relationships from responses and injects relevant knowledge into future conversations.

### Continuous Awareness

JARVIS captures your screen every 7 seconds, runs OCR, and tracks your context in real-time. It detects when you're struggling — stuck on a syntax error, failing a build command, or hunting for a tool in Photoshop — and escalates to cloud vision for app-specific help. The suggestion engine delivers targeted advice: the exact line with the bug, the corrected terminal command, or the keyboard shortcut you need.

### Proactive Behavior

JARVIS does not wait to be asked. It monitors Gmail and Google Calendar, executes scheduled commitments, queues research tasks, and sends you notifications through D-Bus (Linux), Telegram, or Discord.

### Communication Channels

Interact through the web dashboard, Telegram bot, Discord bot, or voice — all unified in a single conversation history.

## Architecture Overview

```
┌───────────────────────────────────────────────────────────────┐
│                       JARVIS Daemon                           │
│                                                               │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐        │
│  │  Agent       │  │  Memory      │  │  Proactive    │        │
│  │  Orchestrator│  │  Vault       │  │  Engine       │        │
│  │  (+ sub-     │  │  (SQLite)    │  │  (observers,  │        │
│  │   agents)    │  │              │  │   scheduler)  │        │
│  └──────┬───────┘  └──────────────┘  └───────────────┘        │
│         │                                                     │
│  ┌──────▼───────────────────────────────────────────────┐     │
│  │              Tool Layer                               │     │
│  │  Browser  Desktop  Files  Search  APIs  Shell        │     │
│  └──────────────────────────────────────────────────────┘     │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐     │
│  │          Awareness Engine                             │     │
│  │  Capture → OCR → Context → Struggle → Cloud Vision   │     │
│  │  → Suggestion Engine → Multi-Channel Delivery        │     │
│  └──────────────────────────────────────────────────────┘     │
└────────────────────────────┬──────────────────────────────────┘
                             │ WebSocket + REST
        ┌────────────────────┼────────────────────┐
        ▼                    ▼                    ▼
   Web Dashboard         Telegram Bot         Discord Bot
   (localhost:3142)      (@yourbot)           (#channel)
                             │
                        Voice (mic/TTS)
```

The daemon exposes a WebSocket server at `localhost:3142` by default. The web dashboard connects to this endpoint for real-time streaming. Telegram and Discord adapters connect the same agent loop to external messaging platforms. All channels share a unified conversation history.

## Technology Stack

- **Runtime**: [Bun](https://bun.sh) — fast TypeScript runtime, SQLite built in
- **Language**: TypeScript (ESM modules)
- **LLM**: Anthropic Claude (primary), OpenAI GPT (fallback), Google Gemini, Ollama (local)
- **Database**: SQLite via `bun:sqlite`
- **Browser automation**: Chrome DevTools Protocol (CDP)
- **Desktop automation**: Go sidecar over JWT-authenticated WebSocket (platform-native APIs)
- **TTS**: Edge TTS (free, no API key) or ElevenLabs (premium)
- **STT**: OpenAI Whisper / Groq / local Whisper
- **Wake word**: openwakeword-wasm-browser (ONNX models, runs in-browser)
- **Frontend**: React 19

## Next Steps

- [Installation](/docs/installation) — install JARVIS in under two minutes
- [Quick Start](/docs/quickstart) — run your first command
- [Configuration](/docs/configuration) — understand `~/.jarvis/config.yaml`
