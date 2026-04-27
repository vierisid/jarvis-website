---
title: Config Reference
description: Key-by-key reference for the main JARVIS configuration surface.
---

This page is the practical reference for the config keys users change most often. For a conceptual walkthrough, start with [Configuration](/docs/configuration). For the dashboard UI surface, use [Settings Reference](/docs/settings-reference).

## `user`

| Key | Type | Default | Notes |
|---|---|---|---|
| `name` | string | `""` | Your name for personalization |

## `daemon`

| Key | Type | Default | Notes |
|---|---|---|---|
| `port` | number | `3142` | Dashboard + daemon port |
| `data_dir` | string | `~/.jarvis` | Root data directory |
| `db_path` | string | `~/.jarvis/jarvis.db` | SQLite vault path |
| `brain_domain` | string | unset | External brain domain used for sidecar JWT flows |

## `auth`

| Key | Type | Default | Notes |
|---|---|---|---|
| `token` | string | unset | If unset, dashboard/API auth is disabled |

## `llm`

| Key | Type | Default | Notes |
|---|---|---|---|
| `primary` | string | `anthropic` | Primary provider |
| `fallback` | string[] | `["openai", "ollama"]` | Ordered fallback chain |

### `llm.anthropic`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `claude-sonnet-4-6` |

### `llm.openai`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `gpt-5.4` |

### `llm.xai`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `grok-4-0709` |

### `llm.deepseek`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `deepseek-chat` |

### `llm.cerebras`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `gpt-oss-120b` |

### `llm.litellm`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | unset |
| `base_url` | string | `http://localhost:4000/v1` |
| `model` | string | `openai/gpt-4o-mini` |

### `llm.groq`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `llama-3.3-70b-versatile` |

### `llm.gemini`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `gemini-3-flash-preview` |

### `llm.ollama`

| Key | Type | Default |
|---|---|---|
| `base_url` | string | `http://localhost:11434` |
| `model` | string | `llama3` |

### `llm.openrouter`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `anthropic/claude-sonnet-4` |

### `llm.nvidia`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | `mistral-nemo-minitron-8b-base` |

## `channels`

### `channels.telegram`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | `false` |
| `bot_token` | string | `""` |
| `allowed_users` | number[] | `[]` |

### `channels.discord`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | `false` |
| `bot_token` | string | `""` |
| `allowed_users` | string[] | `[]` |
| `guild_id` | string | unset |

## `stt`

| Key | Type | Default | Notes |
|---|---|---|---|
| `provider` | `openai \| groq \| local` | `openai` | Speech-to-text backend |

### `stt.openai`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | provider default |

### `stt.groq`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `model` | string | provider default |

### `stt.local`

| Key | Type | Default |
|---|---|---|
| `endpoint` | string | required if used |
| `model` | string | provider default |
| `server_type` | `whisper_cpp \| openai_compatible` | provider default |

## `tts`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | `false` |
| `provider` | `edge \| elevenlabs` | `edge` |
| `voice` | string | `en-US-AriaNeural` |
| `rate` | string | `+0%` |
| `volume` | string | `+0%` |

### `tts.elevenlabs`

| Key | Type | Default |
|---|---|---|
| `api_key` | string | `""` |
| `voice_id` | string | provider default |
| `model` | string | provider default |
| `stability` | number | provider default |
| `similarity_boost` | number | provider default |

## `desktop`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | `true` |
| `sidecar_port` | number | `9224` |
| `sidecar_path` | string | unset |
| `auto_launch` | boolean | `true` |
| `tree_depth` | number | `5` |
| `snapshot_max_elements` | number | `60` |

## `awareness`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | `true` |
| `capture_interval_ms` | number | `7000` |
| `min_change_threshold` | number | `0.02` |
| `cloud_vision_enabled` | boolean | `true` |
| `cloud_vision_cooldown_ms` | number | `30000` |
| `stuck_threshold_ms` | number | `120000` |
| `struggle_grace_ms` | number | `45000` |
| `struggle_cooldown_ms` | number | `90000` |
| `suggestion_rate_limit_ms` | number | `60000` |
| `overlay_autolaunch` | boolean | `true` |
| `capture_dir` | string | `~/.jarvis/captures` |

### `awareness.retention`

| Key | Type | Default |
|---|---|---|
| `full_hours` | number | `1` |
| `key_moment_hours` | number | `24` |

## `sites`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | `true` |
| `projects_dir` | string | `~/.jarvis/projects` |
| `port_range_start` | number | `4000` |
| `port_range_end` | number | `4999` |
| `auto_commit` | boolean | `true` |
| `max_concurrent_servers` | number | `3` |

## `authority`

| Key | Type | Default |
|---|---|---|
| `default_level` | number | `3` |
| `governed_categories` | string[] | `["send_email", "send_message", "make_payment"]` |
| `overrides` | array | `[]` |
| `context_rules` | array | `[]` |
| `emergency_state` | `normal \| paused \| killed` | `normal` |

### `authority.learning`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | `true` |
| `suggest_threshold` | number | `5` |

## `heartbeat`

| Key | Type | Default |
|---|---|---|
| `interval_minutes` | number | product default |
| `active_hours.start` | number | product default |
| `active_hours.end` | number | product default |
| `aggressiveness` | `passive \| moderate \| aggressive` | product default |

## `personality`

| Key | Type | Default |
|---|---|---|
| `core_traits` | string[] | built-in trait list |
| `assistant_name` | string | `Jarvis` |

## `goals`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | product default |
| `morning_window` | object | product default |
| `evening_window` | object | product default |
| `accountability_style` | string | product default |
| `escalation_weeks` | object | product default |
| `auto_decompose` | boolean | product default |
| `calendar_ownership` | boolean | product default |

## `workflows`

| Key | Type | Default |
|---|---|---|
| `enabled` | boolean | product default |
| `maxConcurrentExecutions` | number | product default |
| `defaultRetries` | number | product default |
| `defaultTimeoutMs` | number | product default |
| `selfHealEnabled` | boolean | product default |
| `autoSuggestEnabled` | boolean | product default |

## `active_role`

| Key | Type | Default |
|---|---|---|
| `active_role` | string | `personal-assistant` or project default |

## Runtime Precedence

JARVIS runtime values come from three layers:

1. built-in defaults
2. `~/.jarvis/config.yaml`
3. supported environment variable overrides

If a supported environment variable is set, it wins over the saved YAML value.

## Sidecar Brain URL Notes

`daemon.brain_domain` is one of the most important deployment keys because it controls the external origin stamped into sidecar enrollment JWTs.

Use it when:

- the daemon runs on a VPS
- the dashboard is behind a reverse proxy
- sidecars connect from other machines
- Docker or tunnels change what `localhost` means

Preferred operator-wide controls:

- `daemon.brain_domain`
- `JARVIS_BRAIN_DOMAIN`

The dashboard can also set a per-enrollment `brain_url` override for one sidecar. See [Sidecar Enrollment](/docs/sidecar-enrollment).

## Environment Variable Overrides

These environment variables are currently loaded as runtime overrides:

| Variable | Overrides | Notes |
|---|---|---|
| `JARVIS_PORT` | `daemon.port` | Change the daemon port without editing YAML |
| `JARVIS_HOME` | `daemon.data_dir`, `daemon.db_path` | Moves the main data directory and database together |
| `JARVIS_AUTH_TOKEN` | `auth.token` | Recommended for hosted deployments |
| `JARVIS_BRAIN_DOMAIN` | `daemon.brain_domain` | Preferred env control for sidecar enrollment origin |
| `JARVIS_API_KEY` | `llm.anthropic.api_key` | Anthropic API key |
| `JARVIS_OPENAI_KEY` | `llm.openai.api_key` | OpenAI API key |
| `JARVIS_XAI_KEY` | `llm.xai.api_key` | xAI API key |
| `JARVIS_DEEPSEEK_KEY` | `llm.deepseek.api_key` | DeepSeek API key |
| `JARVIS_CEREBRAS_KEY` | `llm.cerebras.api_key` | Cerebras API key |
| `JARVIS_LITELLM_KEY` | `llm.litellm.api_key` | LiteLLM API key |
| `JARVIS_LITELLM_URL` | `llm.litellm.base_url` | LiteLLM base URL |
| `JARVIS_GROQ_KEY` | `llm.groq.api_key` | Groq API key |
| `JARVIS_GEMINI_KEY` | `llm.gemini.api_key` | Gemini API key |
| `JARVIS_OLLAMA_URL` | `llm.ollama.base_url` | Ollama endpoint reachable from the daemon |
| `JARVIS_OPENROUTER_KEY` | `llm.openrouter.api_key` | OpenRouter API key |
| `JARVIS_NVIDIA_KEY` | `llm.nvidia.api_key` | NVIDIA NIM API key |

### Example: Hosted Daemon with Env Overrides

```bash
JARVIS_PORT=3142 \
JARVIS_AUTH_TOKEN=change-me \
JARVIS_BRAIN_DOMAIN=https://jarvis.example.com \
JARVIS_API_KEY=sk-ant-... \
jarvis start
```

### Example: Relocating JARVIS Home

```bash
JARVIS_HOME=/srv/jarvis jarvis start
```

That changes both:

- `daemon.data_dir`
- `daemon.db_path`

## Example Configurations

### Local Single-Machine Setup

```yaml
daemon:
  port: 3142

llm:
  primary: "anthropic"
  fallback: ["openai"]
  anthropic:
    api_key: "sk-ant-..."
    model: "claude-sonnet-4-6"

auth:
  token: ""
```

### Hosted Brain with Remote Sidecars

```yaml
daemon:
  port: 3142
  brain_domain: "https://jarvis.example.com"

auth:
  token: "replace-this"

llm:
  primary: "anthropic"
  fallback: ["openai", "ollama"]
```

### Docker-Friendly Pattern

```yaml
daemon:
  port: 3142

llm:
  primary: "openai"
  fallback: ["ollama"]
  openai:
    model: "gpt-5.4"
  ollama:
    base_url: "http://ollama:11434"
```

Then inject deployment-specific values through the container environment:

```bash
JARVIS_AUTH_TOKEN=change-me
JARVIS_BRAIN_DOMAIN=https://jarvis.example.com
```

### Hybrid Cloud + Local Model Setup

```yaml
llm:
  primary: "anthropic"
  fallback: ["openai", "ollama"]
  anthropic:
    api_key: "sk-ant-..."
  openai:
    api_key: "sk-..."
  ollama:
    base_url: "http://192.168.1.50:11434"
    model: "llama3.1"
```

Use a daemon-reachable host for Ollama. If the daemon is remote, `localhost` usually means the wrong machine.

## Related Docs

- [Configuration](/docs/configuration)
- [Settings Reference](/docs/settings-reference)
- [Sidecar Enrollment](/docs/sidecar-enrollment)
- [Deployment Guide](/docs/deployment-guide)
- [FAQ](/docs/faq)
