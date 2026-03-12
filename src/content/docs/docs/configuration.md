---
title: Configuration
description: Understanding and customizing ~/.jarvis/config.yaml.
---

JARVIS is configured through a single YAML file at `~/.jarvis/config.yaml`. The onboarding wizard (`jarvis onboard`) creates this file with sensible defaults. You can edit it directly at any time — changes take effect on the next daemon restart.

## File Location

```
~/.jarvis/config.yaml
```

## Minimal Configuration

The smallest valid configuration that launches JARVIS with an Anthropic API key:

```yaml
llm:
  primary: anthropic
  anthropic:
    api_key: "sk-ant-..."
    model: claude-sonnet-4-6
```

All other values fall back to their defaults.

## Full Configuration Structure

```yaml
# ─── User ────────────────────────────────────────────────
user:
  name: ""                  # Your name

# ─── Daemon ──────────────────────────────────────────────
daemon:
  port: 3142                # WebSocket + HTTP port for the dashboard
  data_dir: ~/.jarvis       # Root data directory
  db_path: ~/.jarvis/jarvis.db  # SQLite knowledge vault path
  brain_domain: ""          # External domain (for sidecar JWT tokens)

# ─── Auth ────────────────────────────────────────────────
auth:
  token: ""                 # Shared secret token. Env: JARVIS_AUTH_TOKEN

# ─── LLM Providers ──────────────────────────────────────
llm:
  primary: anthropic        # anthropic | openai | gemini | ollama
  fallback: [openai, ollama]

  anthropic:
    api_key: "sk-ant-..."
    model: claude-sonnet-4-6

  openai:
    api_key: "sk-..."
    model: gpt-5.4

  gemini:
    api_key: "AIza..."
    model: gemini-3-flash-preview

  ollama:
    base_url: http://localhost:11434
    model: llama3

# ─── Text-to-Speech ─────────────────────────────────────
tts:
  enabled: false
  provider: edge            # edge (free) | elevenlabs (premium)
  voice: en-US-AriaNeural   # Edge TTS voice name
  rate: "+0%"               # Speech rate adjustment
  volume: "+0%"             # Volume adjustment
  elevenlabs:               # Only if provider is elevenlabs
    api_key: "sk_..."
    voice_id: "21m00Tcm4TlvDq8ikWAM"
    model: eleven_flash_v2_5
    stability: 0.5
    similarity_boost: 0.75

# ─── Speech-to-Text ─────────────────────────────────────
stt:
  provider: openai          # openai | groq | local
  openai:
    api_key: "sk-..."
    model: whisper-1
  groq:
    api_key: "gsk_..."
    model: whisper-large-v3
  local:
    endpoint: ""
    model: base.en

# ─── Communication Channels ─────────────────────────────
channels:
  telegram:
    enabled: false
    bot_token: ""
    allowed_users: []       # List of Telegram user IDs (integers)
  discord:
    enabled: false
    bot_token: ""
    allowed_users: []       # List of Discord user IDs (strings)
    guild_id: ""            # Restrict to single guild (optional)

# ─── Personality ─────────────────────────────────────────
personality:
  assistant_name: Jarvis
  core_traits:
    - loyal
    - efficient
    - proactive
    - respectful
    - adaptive

# ─── Authority & Safety ─────────────────────────────────
authority:
  default_level: 3          # 1 (read-only) to 10 (full autonomy)
  governed_categories:
    - send_email
    - send_message
    - make_payment
  overrides: []
  context_rules: []
  learning:
    enabled: true
    suggest_threshold: 5
  emergency_state: normal   # normal | paused | killed

# ─── Desktop Control ────────────────────────────────────
desktop:
  enabled: true
  sidecar_port: 9224
  auto_launch: true
  tree_depth: 5
  snapshot_max_elements: 60

# ─── Awareness ───────────────────────────────────────────
awareness:
  enabled: true
  capture_interval_ms: 7000
  min_change_threshold: 0.02
  cloud_vision_enabled: true
  cloud_vision_cooldown_ms: 30000
  stuck_threshold_ms: 120000
  struggle_grace_ms: 45000
  struggle_cooldown_ms: 90000
  suggestion_rate_limit_ms: 60000
  overlay_autolaunch: true
  retention:
    full_hours: 1
    key_moment_hours: 24
  capture_dir: ~/.jarvis/captures

# ─── Google Integration ─────────────────────────────────
google:
  client_id: ""
  client_secret: ""

# ─── Heartbeat ───────────────────────────────────────────
heartbeat:
  interval_minutes: 15
  active_hours:
    start: 8
    end: 23
  aggressiveness: aggressive  # passive | moderate | aggressive

# ─── Active Role ─────────────────────────────────────────
active_role: personal-assistant  # Role file from roles/ directory
```

## Section Reference

### `user`

| Key | Type | Default | Description |
|---|---|---|---|
| `name` | string | `""` | Your name, used in personalization |

### `daemon`

Controls the daemon process itself.

| Key | Type | Default | Description |
|---|---|---|---|
| `port` | integer | `3142` | Port for the WebSocket server and dashboard |
| `data_dir` | string | `~/.jarvis` | Root data directory |
| `db_path` | string | `~/.jarvis/jarvis.db` | SQLite database path |
| `brain_domain` | string | — | External domain for sidecar JWT tokens |

### `llm`

Configures the LLM providers. Four providers available: Anthropic, OpenAI, Google Gemini, and Ollama. See [LLM Providers](/docs/llm-providers) for full details.

### `tts`

Controls text-to-speech output. Two providers: Edge TTS (free, default) and ElevenLabs (premium). See [Voice Interface](/docs/voice) for full details.

### `stt`

Controls speech-to-text transcription. Three providers: OpenAI Whisper, Groq, and local. See [Voice Interface](/docs/voice) for full details.

### `channels`

Configures external communication adapters. See [Telegram](/docs/telegram) and [Discord](/docs/discord) for setup instructions.

### `personality`

| Key | Type | Default | Description |
|---|---|---|---|
| `assistant_name` | string | `Jarvis` | Name used in responses and notifications |
| `core_traits` | string[] | `[loyal, efficient, ...]` | Personality traits injected into the system prompt |

### `authority`

Controls the autonomy level of the daemon. See [Authority and Safety](/docs/authority) for full details.

### `desktop`

Controls the sidecar connection for desktop automation. See [Desktop Control](/docs/desktop-control) for full details.

### `awareness`

Controls the continuous screen monitoring system. See the dashboard's Awareness section for real-time data.

### `google`

OAuth2 credentials for Gmail and Calendar integration. See [Proactive Agent](/docs/proactive-agent) for setup instructions.

### `heartbeat`

Controls periodic check-in behavior during active hours.

## Environment Variable Overrides

Any configuration value can be overridden via environment variables without modifying the YAML file:

| Variable | Config equivalent |
|---|---|
| `JARVIS_PORT` | `daemon.port` |
| `JARVIS_BRAIN_DOMAIN` | `daemon.brain_domain` |
| `JARVIS_AUTH_TOKEN` | `auth.token` |
| `JARVIS_API_KEY` | `llm.primary` provider's `api_key` |
| `JARVIS_MODEL` | `llm.primary` provider's `model` |
| `JARVIS_TELEGRAM_TOKEN` | `channels.telegram.bot_token` |
| `JARVIS_DISCORD_TOKEN` | `channels.discord.bot_token` |
| `JARVIS_AUTHORITY_LEVEL` | `authority.default_level` |

Environment variables take precedence over `config.yaml` values.

### Example

```bash
# Start JARVIS on a non-default port without editing the config
JARVIS_PORT=8080 jarvis start

# Use a different API key for a test run
JARVIS_API_KEY="sk-ant-test..." jarvis start --foreground
```

## Editing the Config

Stop the daemon before editing if you want changes to apply cleanly:

```bash
jarvis stop
# edit ~/.jarvis/config.yaml
jarvis start
```

Alternatively, use `jarvis restart` after editing — it reads the config fresh on startup.

## Validating the Config

The `doctor` command checks your config for common mistakes:

```bash
jarvis doctor
```

This verifies that:
- The config file exists and is valid YAML
- API keys are present and non-empty
- The specified port is available
- Referenced file paths exist
- At least one LLM provider is configured

## Full Reference

For a complete key-by-key reference of every configuration option, see [Config Reference](/docs/config-reference).
