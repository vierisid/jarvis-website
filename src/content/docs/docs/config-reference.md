---
title: Config Reference
description: Key-by-key reference for the main JARVIS configuration surface.
---

This page is the practical reference for the config keys users change most often. For a conceptual walkthrough, start with [Configuration](/docs/configuration).

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
