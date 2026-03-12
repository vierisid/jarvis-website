---
title: Installation
description: Install JARVIS on Windows, macOS, or Linux in under two minutes.
---

:::danger[Security Warning]
JARVIS runs as a persistent daemon with broad system access — browser control, desktop automation, shell execution, and external service access. Installing it grants an AI agent significant control over your machine. Only install on machines you own, review the [Authority & Safety](/docs/authority) settings before enabling autonomous operation, and read the full [Disclaimer & Liability](/docs/disclaimer).
:::

JARVIS runs on Windows, macOS, and Linux. The recommended path is npm, which installs the daemon globally.

## Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Operating system | Windows, macOS, or Linux | — |
| Bun | 1.0 or later | Installed automatically if missing |
| LLM API key | — | At least one provider: Anthropic, OpenAI, Google Gemini, or Ollama (local, no key needed) |
| Chrome or Chromium | Any recent version | Required for browser control |

## npm (Recommended)

```bash
npm install -g @usejarvis/brain
jarvis onboard
```

The onboard wizard walks through LLM provider selection (Anthropic, OpenAI, Gemini, or Ollama), API key entry, voice setup, channel tokens (Telegram, Discord), personality, and authority level. It writes `~/.jarvis/config.yaml` and starts the daemon. You can re-run `jarvis onboard` at any time to update your configuration.

## Manual Install

If you prefer to build from source:

```bash
git clone https://github.com/vierisid/jarvis.git ~/.jarvis/daemon
cd ~/.jarvis/daemon
bun install
bun run build:ui
jarvis onboard
```

## Verify the Installation

```bash
jarvis version
```

Expected output:

```
JARVIS v1.0.0
Runtime: Bun 1.x.x
Config: ~/.jarvis/config.yaml
```

If the `jarvis` command is not found after installation, ensure your shell's PATH includes Bun's global binary directory. Add this to `~/.bashrc` or `~/.zshrc`:

```bash
export PATH="$HOME/.bun/bin:$PATH"
```

Then reload your shell:

```bash
source ~/.bashrc
# or
source ~/.zshrc
```

## What Gets Installed

The installer places these files on your system:

| Path | Description |
|---|---|
| `~/.bun/bin/jarvis` | Main CLI binary |
| `~/.jarvis/config.yaml` | Configuration file (created by onboard) |
| `~/.jarvis/jarvis.db` | SQLite knowledge vault (created on first run) |
| `~/.jarvis/logs/` | Log files directory |

Nothing is installed system-wide. Everything lives under `~/.bun/` and `~/.jarvis/`.

## Updating

```bash
jarvis update
```

This pulls the latest version from npm, replaces the binary, and confirms the new version number. Your config and database are untouched.

## Uninstalling

```bash
npm uninstall -g @usejarvis/brain
rm -rf ~/.jarvis
```

## Next Steps

- [Quick Start](/docs/quickstart) — send your first message
- [Configuration](/docs/configuration) — customize `~/.jarvis/config.yaml`
- [Troubleshooting](/docs/troubleshooting) — if something went wrong
