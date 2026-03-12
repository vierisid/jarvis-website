---
title: Installation
description: Install JARVIS on Linux, macOS, or WSL2 in under two minutes.
---

:::danger[Security Warning]
JARVIS runs as a persistent daemon with broad system access — browser control, desktop automation, shell execution, and external service access. Installing it grants an AI agent significant control over your machine. Only install on machines you own, review the [Authority & Safety](/docs/authority) settings before enabling autonomous operation, and read the full [Disclaimer & Liability](/docs/disclaimer).
:::

JARVIS runs on Linux, macOS, and Windows via WSL2. The recommended path is the one-liner installer, which handles every prerequisite automatically.

## Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Operating system | Linux, macOS, or WSL2 | Native Windows not supported |
| Bun | 1.0 or later | Installed automatically if missing |
| LLM API key | — | At least one provider: Anthropic, OpenAI, Google Gemini, or Ollama (local, no key needed) |
| Chrome or Chromium | Any recent version | Required for browser control |

## One-Liner Install (Recommended)

```bash
curl -fsSL https://raw.githubusercontent.com/vierisid/jarvis/main/install.sh | bash
```

This script does the following in order:

1. Detects your operating system and shell
2. Installs [Bun](https://bun.sh) if it is not already present
3. Installs the `@usejarvis/brain` package globally via `bun add -g`
4. Adds the `jarvis` binary to your `PATH`
5. Launches the interactive onboarding wizard (`jarvis onboard`)

The onboard wizard walks through LLM provider selection (Anthropic, OpenAI, Gemini, or Ollama), API key entry, voice setup, channel tokens (Telegram, Discord), personality, and authority level. It writes `~/.jarvis/config.yaml` and starts the daemon. You can re-run `jarvis onboard` at any time to update your configuration.

## Manual Install

If you prefer to install without running a remote script:

```bash
# Install Bun first if you don't have it
curl -fsSL https://bun.sh/install | bash

# Then install JARVIS globally
bun add -g @usejarvis/brain
```

After installation, run onboarding manually:

```bash
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
bun remove -g @usejarvis/brain
rm -rf ~/.jarvis
```

## WSL2 Notes

JARVIS works in WSL2 with full feature support. A few WSL2-specific behaviors:

- **Browser control**: Linux Chromium is preferred over Windows Chrome. JARVIS auto-detects and launches the appropriate binary. When using Linux Chromium, the `--no-sandbox` flag is applied automatically.
- **Desktop control**: The Go sidecar runs on the Windows side and connects to the daemon over WebSocket. Install it with `bun add -g @usejarvis/sidecar` in a Windows terminal, then enroll with `jarvis-sidecar enroll`.
- **GUI display**: WSLg is supported — Linux GUI apps render on your Windows desktop via the `:0` display.
- **Autostart**: Systemd user services are available in WSL2 with recent Windows builds. See [Autostart](/docs/autostart) for configuration.

## Next Steps

- [Quick Start](/docs/quickstart) — send your first message
- [Configuration](/docs/configuration) — customize `~/.jarvis/config.yaml`
- [Troubleshooting](/docs/troubleshooting) — if something went wrong
