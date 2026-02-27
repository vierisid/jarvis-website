---
title: Configuration
description: Understanding and customizing ~/.jarvis/config.yaml.
---

JARVIS is configured through a single YAML file at `~/.jarvis/config.yaml`. The onboarding wizard creates this file with sensible defaults. You can edit it directly at any time — changes take effect on the next daemon restart.

## File Location

```
~/.jarvis/config.yaml
```

## Minimal Configuration

The smallest valid configuration that launches JARVIS with an Anthropic API key:

```yaml
llm:
  primary:
    provider: anthropic
    apiKey: "sk-ant-..."
    model: claude-opus-4-6
```

All other values fall back to their defaults.

## Full Configuration Structure

```yaml
# ─── Daemon ───────────────────────────────────────────────
daemon:
  port: 3142              # WebSocket + HTTP port for the dashboard
  logLevel: info          # trace | debug | info | warn | error
  logDir: ~/.jarvis/logs  # Directory for log files
  dbPath: ~/.jarvis/jarvis.db  # SQLite knowledge vault path

# ─── LLM Providers ────────────────────────────────────────
llm:
  primary:
    provider: anthropic   # anthropic | openai | ollama
    apiKey: "sk-ant-..."
    model: claude-opus-4-6
    maxTokens: 8192
    temperature: 0.7

  fallback:
    provider: openai
    apiKey: "sk-..."
    model: gpt-4o
    maxTokens: 4096
    temperature: 0.7

# ─── Text-to-Speech ───────────────────────────────────────
tts:
  enabled: true
  provider: edge-tts      # edge-tts (free) | openai | elevenlabs
  voice: en-US-GuyNeural  # Edge TTS voice name
  speed: 1.0              # Playback speed multiplier

# ─── Speech-to-Text ───────────────────────────────────────
stt:
  enabled: true
  provider: openai        # openai | groq | local
  apiKey: "sk-..."        # Required for openai and groq providers
  model: whisper-1        # STT model name
  language: en            # BCP-47 language code

# ─── Communication Channels ───────────────────────────────
channels:
  telegram:
    enabled: false
    botToken: ""
    allowedUsers: []      # List of Telegram user IDs (integers)

  discord:
    enabled: false
    botToken: ""
    allowedUsers: []      # List of Discord user IDs (strings)

# ─── Personality ──────────────────────────────────────────
personality:
  name: JARVIS
  role: |
    You are JARVIS — an always-on autonomous AI daemon. You are
    direct, capable, and decisive. You act on behalf of your user
    without unnecessary confirmation.
  timezone: UTC           # Used for scheduling and time references

# ─── Authority & Safety ───────────────────────────────────
authority:
  level: 5                # 1 (read-only) to 10 (full autonomy)
  governed:
    send_email: 7         # Minimum authority level to send email
    send_message: 5       # Minimum level to send external messages
    make_payment: 9       # Minimum level to initiate payments
    delete_files: 6       # Minimum level to delete files
    execute_shell: 6      # Minimum level to run shell commands

# ─── Google Integration ───────────────────────────────────
google:
  enabled: false
  credentialsPath: ~/.jarvis/google-credentials.json
  tokenPath: ~/.jarvis/google-token.json
  scopes:
    - gmail.readonly
    - calendar.readonly
```

## Section Reference

### `daemon`

Controls the daemon process itself.

| Key | Type | Default | Description |
|---|---|---|---|
| `port` | integer | `3142` | Port for the WebSocket server and dashboard |
| `logLevel` | string | `info` | Log verbosity |
| `logDir` | string | `~/.jarvis/logs` | Directory for rotated log files |
| `dbPath` | string | `~/.jarvis/jarvis.db` | SQLite database path |

### `llm`

Configures the LLM providers. See [LLM Providers](/docs/llm-providers) for full details.

### `tts`

Controls text-to-speech output. See [Voice Interface](/docs/voice) for full details.

### `stt`

Controls speech-to-text transcription. See [Voice Interface](/docs/voice) for full details.

### `channels`

Configures external communication adapters. See [Telegram](/docs/telegram) and [Discord](/docs/discord) for setup instructions.

### `personality`

| Key | Type | Default | Description |
|---|---|---|---|
| `name` | string | `JARVIS` | Name used in responses and notifications |
| `role` | string | Built-in prompt | System prompt injected at the start of every conversation |
| `timezone` | string | `UTC` | Timezone for scheduling and time-aware responses |

### `authority`

Controls the autonomy level of the daemon. See [Authority and Safety](/docs/authority) for full details.

### `google`

OAuth2 credentials for Gmail and Calendar integration. See [Proactive Agent](/docs/proactive-agent) for setup instructions.

## Environment Variable Overrides

Any configuration value can be overridden via environment variables without modifying the YAML file. This is useful in CI environments, Docker containers, or when you want to avoid storing secrets in the config file.

| Variable | Config equivalent |
|---|---|
| `JARVIS_PORT` | `daemon.port` |
| `JARVIS_LOG_LEVEL` | `daemon.logLevel` |
| `JARVIS_API_KEY` | `llm.primary.apiKey` |
| `JARVIS_MODEL` | `llm.primary.model` |
| `JARVIS_FALLBACK_API_KEY` | `llm.fallback.apiKey` |
| `JARVIS_TELEGRAM_TOKEN` | `channels.telegram.botToken` |
| `JARVIS_DISCORD_TOKEN` | `channels.discord.botToken` |
| `JARVIS_STT_API_KEY` | `stt.apiKey` |
| `JARVIS_AUTHORITY_LEVEL` | `authority.level` |

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
