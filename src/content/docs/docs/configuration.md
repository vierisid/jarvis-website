---
title: Configuration
description: How JARVIS is configured, where the config lives, and how to reason about the main sections.
---

JARVIS stores its runtime configuration in a single YAML file:

```text
~/.jarvis/config.yaml
```

You can create it through `jarvis onboard` or edit it directly by hand.

For the dashboard's live settings UI, see [Settings Reference](/docs/settings-reference). For every supported key and env override, see [Config Reference](/docs/config-reference).

## How to Think About the Config

The config falls into a few major areas:

- Where the daemon runs
- Which LLMs it can use
- How it speaks and listens
- Which channels and integrations are enabled
- How much autonomy it has
- Which background systems are active

Third-party integrations do not all live in the same place:

- some credentials are stored directly in `config.yaml`
- some integrations are connected through onboarding or dashboard flows
- Google OAuth is a hybrid case: client credentials can live in config, while the actual account authorization/token exchange happens through the setup flow

This page focuses on the high-level structure of `config.yaml`, not every provider-specific setup walkthrough.

## Minimal Example

This is the smallest realistic config for a cloud-hosted setup using Anthropic:

```yaml
daemon:
  port: 3142
  data_dir: "~/.jarvis"
  db_path: "~/.jarvis/jarvis.db"

llm:
  primary: "anthropic"
  fallback: ["openai", "ollama"]
  anthropic:
    api_key: "sk-ant-..."
    model: "claude-sonnet-4-6"

personality:
  core_traits:
    - "loyal"
    - "efficient"
    - "proactive"
  assistant_name: "Jarvis"

authority:
  default_level: 3
  governed_categories: ["send_email", "send_message", "make_payment"]
  overrides: []
  context_rules: []
  learning:
    enabled: true
    suggest_threshold: 5
  emergency_state: "normal"

heartbeat:
  interval_minutes: 15
  active_hours:
    start: 8
    end: 22
  aggressiveness: "moderate"

active_role: "personal-assistant"
```

## Main Sections

### `daemon`

Controls where the daemon listens and where it stores data.

Important keys:

- `port`
- `data_dir`
- `db_path`
- `brain_domain`

`brain_domain` is especially important when sidecars connect from other machines. It tells JARVIS which external origin should be stamped into enrollment JWTs. If you host the daemon on a VPS, behind Docker, or through a reverse proxy, read [Sidecar Enrollment](/docs/sidecar-enrollment) before enrolling machines.

### `auth`

Controls dashboard/API authentication.

If `auth.token` is unset, the dashboard is open access.

If you expose JARVIS outside a trusted local network, set this.

### `llm`

Controls provider selection, primary/fallback order, and provider-specific credentials.

Current provider blocks include:

- `anthropic`
- `openai`
- `groq`
- `gemini`
- `ollama`
- `openrouter`

### `tts` and `stt`

These control speaking and listening.

- `tts` handles voice output
- `stt` handles voice input transcription

### `channels`

Remote chat channels currently include:

- Telegram
- Discord

### `desktop`

Controls local desktop/sidecar-related behavior and defaults.

### `awareness`

Controls the awareness system:

- capture frequency
- change thresholds
- cloud vision escalation
- suggestion rate limits
- retention

### `sites`

Controls the built-in Sites workspace:

- whether it is enabled
- where project files live
- dev server port range
- auto-commit behavior

### `authority`

Controls autonomy, governed categories, override rules, and emergency state.

### `heartbeat`

Controls the proactive cycle that drives periodic check-ins and background activity.

### `active_role`

Sets the active top-level role/persona file JARVIS runs with.

## Editing by Hand vs Onboarding

Use onboarding when:

- You are getting started
- You want guided prompts
- You are changing major settings like providers or channels

Edit YAML directly when:

- You know exactly which key you want to change
- You are adjusting thresholds or fine-grained behavior
- You are managing a hosted instance and want reproducible config

## Config vs Dashboard vs Environment Variables

Use each layer for what it does best:

- **Dashboard:** fast operational changes, sidecar enrollment, provider and channel management
- **YAML:** stable, reviewable runtime configuration
- **Environment variables:** deployment-specific overrides for servers, containers, and secrets

If a supported environment variable is set, it overrides the YAML value at runtime. Common examples include:

- `JARVIS_PORT`
- `JARVIS_AUTH_TOKEN`
- `JARVIS_BRAIN_DOMAIN`
- provider API key variables

See [Config Reference](/docs/config-reference) for the full list.

## Recommended First Config Tweaks

After the first successful start, most users should review:

- `auth.token`
- `llm.primary` and `llm.fallback`
- `tts.enabled`
- `stt.provider`
- `authority.default_level`
- `awareness.enabled`
- `sites.enabled`

## Docker Note

If you run JARVIS in Docker, remember that the daemon config still belongs to the daemon, not to your browser session.

This matters especially for addresses like:

- `ollama.base_url`
- `stt.local.endpoint`

The same rule applies to the sidecar enrollment origin. If a remote sidecar is going to connect, the URL in its JWT must be reachable from that remote machine, not just from inside the container.

If those are set to `http://localhost:...`, that means localhost from the daemon's point of view, not from your laptop or browser. See [Troubleshooting](/docs/troubleshooting) for the common remote-host networking failure mode.

## Recommended Docs by Task

- First-time install: [Installation](/docs/installation) and [Quick Start](/docs/quickstart)
- Dashboard settings: [Settings Reference](/docs/settings-reference)
- Sidecar rollout: [Sidecar Enrollment](/docs/sidecar-enrollment)
- Hosted deployment: [Deployment Guide](/docs/deployment-guide)
- Deeper behavior tuning: [Customization Guide](/docs/customization-guide)

## Video Tutorial Placeholder

> Video tutorial placeholder: editing `config.yaml` and understanding the main sections.

Add your future video link here.
