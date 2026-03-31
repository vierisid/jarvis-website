---
title: Quick Start
description: Get JARVIS configured, running, and reachable in a few minutes.
---

This guide assumes you have already completed [Installation](/docs/installation).

## Step 1: Run Onboarding

JARVIS ships with an interactive setup wizard:

```bash
jarvis onboard
```

The current onboarding flow walks through:

1. About you
2. Primary LLM provider and model
3. API key setup
4. Optional fallback providers
5. Voice configuration
6. Telegram and Discord channel setup
7. Personality and assistant name
8. Authority defaults
9. Dashboard port

Your config is written to:

```text
~/.jarvis/config.yaml
```

## Step 2: Start the Daemon

Start JARVIS normally:

```bash
jarvis start
```

You can also run it detached:

```bash
jarvis start -d
```

Or on a custom port:

```bash
jarvis start --port 8080
```

## Step 3: Open the Dashboard

By default, the dashboard lives at:

```text
http://localhost:3142
```

If you changed the port during onboarding, use that value instead.

The dashboard is the main control plane for:

- Chat
- Tasks
- Memory
- Authority
- Awareness
- Workflows
- Goals
- Settings

## Step 4: Send a First Real Task

Good first prompts are tasks that exercise the system, not toy questions. For example:

- "Summarize what this project actually does."
- "Open the docs and tell me what is missing."
- "Create a workflow that posts a Telegram summary every morning."
- "Plan my day from my current goals."

## Step 5: Add More Reach With Sidecars

If the daemon is not running on the same machine you want to control, install a sidecar on the target machine. Sidecars let JARVIS access:

- Desktop automation
- Browser automation
- Terminal
- Filesystem
- Clipboard
- Screenshots

See [Desktop Control](/docs/desktop-control) for the full setup.

## Common First Tasks After Setup

Most people should do these next:

1. Set `auth.token` before exposing the dashboard publicly
2. Connect at least one sidecar if you want real desktop/browser control on another machine
3. Review [Authority & Safety](/docs/authority) before raising autonomy

## Quick Verification Checklist

You are in a good state if all of these are true:

- `jarvis status` shows the daemon as running
- The dashboard connects successfully
- Chat messages stream normally
- Your selected LLM provider responds

If any of that fails, go to [Troubleshooting](/docs/troubleshooting).
