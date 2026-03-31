---
title: Installation
description: Install the JARVIS daemon, understand the main deployment options, and choose where the brain should run.
---

JARVIS can run:

- On your local machine
- On a home server
- On a VPS
- In Docker

The daemon is the brain. It does not need to live on the same machine that you want to control. If you want JARVIS to stay online 24/7, a server or always-on machine is the best fit. If you want JARVIS to control another machine's desktop, browser, or filesystem, install a sidecar there after the daemon is up.

## Recommended Install

The simplest path is the Bun package:

```bash
bun install -g @usejarvis/brain
jarvis onboard
```

Then start it:

```bash
jarvis start
```

## Requirements

Before installing, make sure you have:

- Bun
- A supported OS: Linux, macOS, or Windows/WSL2
- At least one LLM provider configured

Optional but common:

- Ollama if you want local models
- Google OAuth credentials for Gmail or Calendar features
- Telegram or Discord bot credentials for remote messaging
- ElevenLabs credentials if you want premium TTS

## Installation Options

### Option 1: Bun Package

Use this if you want the fastest local install:

```bash
bun install -g @usejarvis/brain
jarvis onboard
```

### Option 2: One-Liner Installer

Use this if you want the repository installed under `~/.jarvis/daemon` automatically:

```bash
curl -fsSL https://raw.githubusercontent.com/vierisid/jarvis/main/install.sh | bash
jarvis onboard
```

### Option 3: Manual Repository Install

Use this if you want the full source checkout:

```bash
git clone https://github.com/vierisid/jarvis.git ~/.jarvis/daemon
cd ~/.jarvis/daemon
bun install
bun run build:ui
```

Then run:

```bash
bin/jarvis.ts onboard
```

Or, if the CLI is already linked globally:

```bash
jarvis onboard
```

### Option 4: Docker

Docker is useful when you want to host the daemon in a containerized environment:

```bash
docker run -d --name jarvis \
  -p 3142:3142 \
  -v jarvis-data:/data \
  ghcr.io/vierisid/jarvis:latest
```

Important limitation:

- The daemon inside Docker does not automatically gain access to your host desktop, browser, clipboard, or native apps.
- If you want real desktop/browser automation on another machine, install a sidecar on that machine.

### Docker: Mounting a Real Config File

If you want repeatable config management, mount your own `config.yaml` into the container instead of relying only on environment variables.

Example pattern:

```bash
mkdir -p ~/.jarvis-docker
cp ~/.jarvis/config.yaml ~/.jarvis-docker/config.yaml
```

Then run:

```bash
docker run -d --name jarvis \
  -p 3142:3142 \
  -v ~/.jarvis-docker/config.yaml:/data/config.yaml \
  -v jarvis-data:/data \
  ghcr.io/vierisid/jarvis:latest
```

### Docker: Networking Advice

When JARVIS runs in Docker, `localhost` inside the container is the container itself.

That means:

- `ollama.base_url: http://localhost:11434` only works if Ollama is inside the same network context the daemon can actually reach
- the same warning applies to local Whisper endpoints and similar local services

If those services live somewhere else, point JARVIS at:

- a reachable host IP
- a service/container hostname
- a reverse-proxied hostname

See [Troubleshooting](/docs/troubleshooting) for the detailed explanation.

## Choosing Where to Run the Daemon

### Local Machine

Best when:

- You are just getting started
- You want the simplest setup
- You mainly use one machine

Tradeoffs:

- JARVIS only stays online while that machine is on
- Closing your shell is fine if you enable [Keepalive Mode](/docs/autostart)

### VPS or Home Server

Best when:

- You want JARVIS available 24/7
- You want one daemon to coordinate multiple machines
- You care about uptime more than local-only simplicity

Tradeoffs:

- You need to think about public URL, auth token, and remote access
- Desktop/browser control still happens through sidecars on the target machines

## After Installation

The next steps are:

1. Run [Quick Start](/docs/quickstart)
2. Enable [Keepalive Mode](/docs/autostart) if you want JARVIS to survive terminal closure
3. Install sidecars on any machines you want JARVIS to control directly

## Sidecar Reminder

The daemon and the sidecar are different things:

- The daemon is the brain
- The sidecar is the machine-level actuator

If you run JARVIS on a VPS and want it to see and control your laptop, install a sidecar on the laptop. See [Desktop Control](/docs/desktop-control).
