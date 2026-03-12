---
title: Config Reference
description: Complete key-by-key reference for every option in ~/.jarvis/config.yaml.
---

This is the exhaustive reference for every configuration key in `~/.jarvis/config.yaml`. For a guided overview, see [Configuration](/docs/configuration).

## `user`

| Key | Type | Default | Description |
|---|---|---|---|
| `name` | string | `""` | Your name, used in greetings and personalization |

## `daemon`

| Key | Type | Default | Description |
|---|---|---|---|
| `port` | integer | `3142` | Port for the WebSocket server and dashboard |
| `data_dir` | string | `~/.jarvis` | Root directory for all JARVIS data |
| `db_path` | string | `~/.jarvis/jarvis.db` | SQLite knowledge vault path |
| `brain_domain` | string | — | External domain for the daemon (used in sidecar JWT tokens). Env: `JARVIS_BRAIN_DOMAIN` |

## `auth`

| Key | Type | Default | Description |
|---|---|---|---|
| `token` | string | — | Shared secret token for API authentication. If unset, auth is disabled (open access). Env: `JARVIS_AUTH_TOKEN` |

## `llm`

| Key | Type | Default | Description |
|---|---|---|---|
| `primary` | string | `anthropic` | Active provider: `anthropic`, `openai`, `gemini`, or `ollama` |
| `fallback` | string[] | `[openai, ollama]` | Providers to try if the primary fails, in order |

### `llm.anthropic`

| Key | Type | Default | Description |
|---|---|---|---|
| `api_key` | string | `""` | Anthropic API key |
| `model` | string | `claude-sonnet-4-6` | Model ID |

### `llm.openai`

| Key | Type | Default | Description |
|---|---|---|---|
| `api_key` | string | `""` | OpenAI API key |
| `model` | string | `gpt-5.4` | Model ID |

### `llm.gemini`

| Key | Type | Default | Description |
|---|---|---|---|
| `api_key` | string | `""` | Google Gemini API key |
| `model` | string | `gemini-3-flash-preview` | Model ID |

### `llm.ollama`

| Key | Type | Default | Description |
|---|---|---|---|
| `base_url` | string | `http://localhost:11434` | Ollama server address |
| `model` | string | `llama3` | Model name |

## `tts`

| Key | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | `false` | Enable text-to-speech |
| `provider` | string | `edge` | TTS provider: `edge` or `elevenlabs` |
| `voice` | string | `en-US-AriaNeural` | Voice name (Edge TTS) |
| `rate` | string | `+0%` | Speech rate adjustment (Edge TTS) |
| `volume` | string | `+0%` | Volume adjustment (Edge TTS) |

### `tts.elevenlabs`

| Key | Type | Default | Description |
|---|---|---|---|
| `api_key` | string | — | ElevenLabs API key |
| `voice_id` | string | — | ElevenLabs voice ID |
| `model` | string | `eleven_flash_v2_5` | `eleven_flash_v2_5` or `eleven_multilingual_v2` |
| `stability` | number | — | Voice stability (0.0 to 1.0) |
| `similarity_boost` | number | — | Similarity boost (0.0 to 1.0) |

## `stt`

| Key | Type | Default | Description |
|---|---|---|---|
| `provider` | string | `openai` | STT provider: `openai`, `groq`, or `local` |

### `stt.openai`

| Key | Type | Default | Description |
|---|---|---|---|
| `api_key` | string | — | OpenAI API key |
| `model` | string | `whisper-1` | Whisper model |

### `stt.groq`

| Key | Type | Default | Description |
|---|---|---|---|
| `api_key` | string | — | Groq API key |
| `model` | string | `whisper-large-v3` | Whisper model |

### `stt.local`

| Key | Type | Default | Description |
|---|---|---|---|
| `endpoint` | string | — | Local Whisper endpoint URL |
| `model` | string | `base.en` | Local model name |

## `channels`

### `channels.telegram`

| Key | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | `false` | Enable Telegram bot |
| `bot_token` | string | `""` | Bot token from @BotFather |
| `allowed_users` | integer[] | `[]` | Telegram user IDs allowed to interact |

### `channels.discord`

| Key | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | `false` | Enable Discord bot |
| `bot_token` | string | `""` | Bot token from Discord Developer Portal |
| `allowed_users` | string[] | `[]` | Discord user IDs allowed to interact |
| `guild_id` | string | — | Restrict bot to a single server |

## `personality`

| Key | Type | Default | Description |
|---|---|---|---|
| `core_traits` | string[] | `[loyal, efficient, proactive, respectful, adaptive]` | Personality traits injected into the system prompt |
| `assistant_name` | string | `Jarvis` | Name the assistant uses for itself |

## `authority`

| Key | Type | Default | Description |
|---|---|---|---|
| `default_level` | integer | `3` | Authority level (1-10) |
| `governed_categories` | string[] | `[send_email, send_message, make_payment]` | Action categories that are always checked |
| `overrides` | PerActionOverride[] | `[]` | Per-action allow/deny rules |
| `context_rules` | ContextRule[] | `[]` | Conditional rules (time-based, tool-based) |
| `emergency_state` | string | `normal` | `normal`, `paused`, or `killed` |

### `authority.learning`

| Key | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | `true` | Learn from approval patterns |
| `suggest_threshold` | integer | `5` | Approvals before suggesting auto-approve |

## `desktop`

| Key | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | `true` | Enable desktop control via sidecar |
| `sidecar_port` | integer | `9224` | WebSocket port for sidecar communication |
| `sidecar_path` | string | — | Path to sidecar binary (auto-detected) |
| `auto_launch` | boolean | `true` | Auto-launch sidecar on daemon start |
| `tree_depth` | integer | `5` | Max depth for UI element tree traversal |
| `snapshot_max_elements` | integer | `60` | Max elements in a window snapshot |

## `awareness`

| Key | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | `true` | Enable continuous screen awareness |
| `capture_interval_ms` | integer | `7000` | Milliseconds between screen captures |
| `min_change_threshold` | number | `0.02` | Minimum pixel diff (0.0-1.0) to trigger processing |
| `cloud_vision_enabled` | boolean | `true` | Use cloud vision for struggle detection |
| `cloud_vision_cooldown_ms` | integer | `30000` | Minimum gap between cloud vision calls |
| `stuck_threshold_ms` | integer | `120000` | Time before marking user as "stuck" |
| `struggle_grace_ms` | integer | `45000` | Minimum time before struggle detection fires |
| `struggle_cooldown_ms` | integer | `90000` | Minimum gap between struggle detections |
| `suggestion_rate_limit_ms` | integer | `60000` | Minimum gap between suggestions |
| `overlay_autolaunch` | boolean | `true` | Auto-open floating overlay widget |
| `capture_dir` | string | `~/.jarvis/captures` | Directory for screen captures |

### `awareness.retention`

| Key | Type | Default | Description |
|---|---|---|---|
| `full_hours` | integer | `1` | Hours to retain full-resolution captures |
| `key_moment_hours` | integer | `24` | Hours to retain key moment captures |

## `google`

| Key | Type | Default | Description |
|---|---|---|---|
| `client_id` | string | — | OAuth2 client ID for Gmail/Calendar |
| `client_secret` | string | — | OAuth2 client secret |

## `heartbeat`

| Key | Type | Default | Description |
|---|---|---|---|
| `interval_minutes` | integer | `15` | Minutes between heartbeat checks |
| `aggressiveness` | string | `aggressive` | `passive`, `moderate`, or `aggressive` |

### `heartbeat.active_hours`

| Key | Type | Default | Description |
|---|---|---|---|
| `start` | integer | `8` | Hour (0-23) to start heartbeat |
| `end` | integer | `23` | Hour (0-23) to stop heartbeat |

## `workflows`

| Key | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | — | Enable workflow engine |
| `maxConcurrentExecutions` | integer | — | Max parallel workflow executions |
| `defaultRetries` | integer | — | Default retry count for failed nodes |
| `defaultTimeoutMs` | integer | — | Default timeout per node |
| `selfHealEnabled` | boolean | — | Allow workflows to self-repair on failure |
| `autoSuggestEnabled` | boolean | — | Suggest workflows based on usage patterns |

## `goals`

| Key | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | — | Enable goal pursuit system |
| `accountability_style` | string | — | `drill_sergeant`, `supportive`, or `balanced` |
| `auto_decompose` | boolean | — | Auto-decompose goals into key results |
| `calendar_ownership` | boolean | — | Allow goals to create calendar events |

### `goals.morning_window`

| Key | Type | Default | Description |
|---|---|---|---|
| `start` | integer | — | Hour to start morning check-in |
| `end` | integer | — | Hour to end morning window |

### `goals.evening_window`

| Key | Type | Default | Description |
|---|---|---|---|
| `start` | integer | — | Hour to start evening review |
| `end` | integer | — | Hour to end evening window |

### `goals.escalation_weeks`

| Key | Type | Default | Description |
|---|---|---|---|
| `pressure` | integer | — | Weeks of no progress before increasing pressure |
| `root_cause` | integer | — | Weeks before asking for root cause analysis |
| `suggest_kill` | integer | — | Weeks before suggesting goal abandonment |

## `active_role`

| Type | Default | Description |
|---|---|---|
| string | `personal-assistant` | Active role file from `roles/` directory |
