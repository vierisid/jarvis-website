---
title: Settings Reference
description: Understand every current dashboard settings section, what each control affects, and when to use the dashboard versus editing config.yaml directly.
---

The dashboard is the fastest way to inspect and change day-to-day JARVIS settings. The current Settings area is organized into six sections:

- General
- Know Your User
- LLM Configuration
- Communication Channels
- Integrations
- Sidecar

For a product tour, start with [Dashboard](/docs/dashboard). For raw YAML keys and environment overrides, use [Config Reference](/docs/config-reference).

## When to Use the Dashboard vs YAML

Use the dashboard when you want to:

- tune providers, channels, or voice without hand-editing YAML
- enroll or revoke sidecars
- update user context and profile information
- inspect the active role, personality, and heartbeat settings

Edit `~/.jarvis/config.yaml` directly when you want to:

- commit or template your config for a server
- manage deployment-specific values such as `auth.token` or `daemon.brain_domain`
- make changes before the UI is reachable
- keep infrastructure changes reproducible

## Settings Map

| Section | What it controls | Best follow-up docs |
|---|---|---|
| General | Personality, active role, heartbeat cadence | [Customization Guide](/docs/customization-guide), [Authority & Safety](/docs/authority) |
| Know Your User | Durable user context and preferences | [Configuration](/docs/configuration) |
| LLM Configuration | Primary model, fallback order, provider credentials | [LLM Providers](/docs/llm-providers), [Config Reference](/docs/config-reference) |
| Communication Channels | Telegram, Discord, STT, TTS | [Integrations Guide](/docs/integrations-guide) |
| Integrations | Google OAuth status and connection flow | [Integrations Guide](/docs/integrations-guide), [Deployment Guide](/docs/deployment-guide) |
| Sidecar | Enrollment, sidecar list, per-machine config | [Sidecar Enrollment](/docs/sidecar-enrollment), [Desktop Control](/docs/desktop-control) |

## General

The **General** section is the main place for operator-level behavior tuning. It currently surfaces:

- personality information
- the active role
- heartbeat timing and aggressiveness

### Personality

The personality panel shows how JARVIS currently describes its working style:

- core traits
- learned preferences such as verbosity, formality, and humor
- relationship context such as trust level and message history

Use this section to understand the current assistant posture before you change roles or authority. If you want to make deliberate, reproducible changes, update the role files or core config as described in [Customization Guide](/docs/customization-guide).

### Active Role

The role panel shows:

- the active top-level role
- its authority level
- the tools it can access
- any specialist sub-roles it can delegate to

This is the easiest way to confirm that JARVIS is running the role you expect. The actual role definitions are file-backed, so the dashboard is best used for inspection and validation, while role authoring belongs in your runtime role files.

### Heartbeat

Heartbeat controls how proactively JARVIS checks in while it is running in the background. The dashboard shows:

- interval in minutes
- active hours
- aggressiveness

Higher aggressiveness means more proactive behavior. Review this together with [Authority & Safety](/docs/authority) so the system's initiative matches your trust model.

## Know Your User

The **Know Your User** section stores durable context about:

- who you are
- what matters to you
- how you like to work
- preferences JARVIS should remember between sessions

This is especially valuable after a fresh install, a reset, or a migration to a new machine. It improves personalization without requiring you to repeat the same background in every chat.

Good times to revisit it:

- after onboarding
- when your schedule or priorities change
- when JARVIS keeps missing important context

## LLM Configuration

The **LLM Configuration** section manages the provider stack JARVIS can use for chat, tools, and fallbacks.

### What you can change

- primary provider
- ordered fallback list
- model selection per provider
- API keys or provider endpoints where supported
- provider connection tests

### Provider blocks surfaced by the current UI

The dashboard currently exposes provider configuration for:

- Anthropic
- OpenAI
- xAI
- DeepSeek
- Cerebras
- LiteLLM
- Groq
- Gemini
- Ollama
- OpenRouter
- NVIDIA NIM

### Practical guidance

- Keep the fallback list short and intentional.
- If the daemon is remote, remember that provider URLs are resolved from the daemon machine, not your browser.
- Environment variables override YAML and dashboard-saved values for the keys they control.

For example, if you set `JARVIS_BRAIN_DOMAIN` or `JARVIS_API_KEY` in the environment, those values win at runtime even if the dashboard shows something else in saved config. See [Config Reference](/docs/config-reference) for the exact override list.

### Common mistakes

- leaving Ollama or local STT endpoints on `localhost` when the daemon runs on a VPS
- assuming a saved provider key is active when an environment variable is overriding it
- adding too many fallbacks and making failures harder to reason about

See [LLM Providers](/docs/llm-providers) for provider-specific tradeoffs.

## Communication Channels

The **Communication Channels** section combines remote messaging and voice.

### Telegram

Configure:

- enable/disable
- bot token
- allowed user IDs

Use Telegram when you want direct mobile access, approval requests, or lightweight remote control.

### Discord

Configure:

- enable/disable
- bot token
- allowed user IDs
- optional guild restriction

Use guild restriction if you only want one server to be able to talk to your daemon.

### Speech-to-Text

Current STT options exposed in settings:

- OpenAI
- Groq
- local endpoint

If you choose a local endpoint, that URL must be reachable from the daemon host.

### Text-to-Speech

Current TTS options exposed in settings:

- Edge
- ElevenLabs

The TTS panel is where you enable voice output and tune the selected voice. Some channel changes explicitly ask for a daemon restart; plan for that if you are operating a hosted instance.

For setup instructions, read [Integrations Guide](/docs/integrations-guide), [Telegram](/docs/telegram), and [Discord](/docs/discord).

## Integrations

The **Integrations** section currently centers on Google connectivity.

### Google

The panel guides you through three states:

- not configured
- credentials saved
- connected

You add:

- OAuth client ID
- OAuth client secret

Then start the consent flow and connect the account. After a successful connection, the UI indicates that a restart is needed before Gmail and Calendar observers are fully active.

Use this section when you want:

- Gmail monitoring
- Calendar access
- account-linked workflow triggers

If your deployment sits behind a reverse proxy or public hostname, verify your OAuth callback setup against [Deployment Guide](/docs/deployment-guide) and [Integrations Guide](/docs/integrations-guide).

## Sidecar

The **Sidecar** section is where you manage machine enrollment.

### What it does

- enroll a new sidecar
- optionally set a one-off `brain_url` override
- copy the enrollment token command
- inspect connected machines
- revoke stale enrollments
- edit per-sidecar configuration

### The important network rule

The optional brain URL field is not just cosmetic. It determines the origin stamped into the enrollment JWT for that sidecar. If the value is wrong, the sidecar may fail JWKS verification or never connect back to the daemon.

Use:

- `daemon.brain_domain` or `JARVIS_BRAIN_DOMAIN` as your normal operator-wide default
- `brain_url` only when one sidecar needs a different route than the rest of your fleet

Read [Sidecar Enrollment](/docs/sidecar-enrollment) before enrolling machines across Docker, VPS, VPN, or reverse-proxy boundaries.

### When to re-enroll

Re-enroll a sidecar if:

- the trusted public hostname changed
- you moved from local-only to reverse-proxied access
- a machine should use a different `brain_url`
- you revoked or rotated the old enrollment token

## Settings Changes That Usually Need More Care

Double-check these after you save them:

- provider credentials
- local provider endpoints
- `auth.token`
- `daemon.brain_domain`
- sidecar enrollment URLs
- Google OAuth credentials

These settings often interact with deployment topology, not just the dashboard UI.

## Good Operator Routine

After first install:

1. Finish [Quick Start](/docs/quickstart)
2. Review this page
3. Set your provider stack
4. Lock down auth before public exposure
5. Enroll sidecars only after the public origin is correct

## Next Steps

- [Dashboard](/docs/dashboard)
- [Configuration](/docs/configuration)
- [Config Reference](/docs/config-reference)
- [Customization Guide](/docs/customization-guide)
- [Sidecar Enrollment](/docs/sidecar-enrollment)
