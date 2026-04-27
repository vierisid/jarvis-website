---
title: Integrations Guide
description: Connect JARVIS to Google, Telegram, Discord, and voice services with the right credentials, restart expectations, and deployment-aware URLs.
---

JARVIS becomes much more useful when it can talk to the services you already use.

This guide brings the most important integrations into one place:

- Google
- Telegram
- Discord
- speech-to-text and text-to-speech providers

For the exact dashboard layout, see [Settings Reference](/docs/settings-reference).

## Integration Matrix

| Integration | What it enables | Main config surface |
|---|---|---|
| Google | Gmail and Calendar connectivity | Settings → Integrations |
| Telegram | Mobile chat, approvals, notifications | Settings → Channels |
| Discord | Server-based chat and approvals | Settings → Channels |
| Local STT / cloud STT | Voice transcription | Settings → Channels |
| Edge / ElevenLabs TTS | Spoken responses | Settings → Channels |

## Google

Use Google when you want JARVIS to work with Gmail and Google Calendar.

### What you need

- a Google Cloud project
- OAuth client ID
- OAuth client secret

### Typical setup flow

1. Open Google Cloud Console.
2. Enable the Gmail API and Google Calendar API.
3. Create an OAuth client for a web application.
4. Add the callback URI for the JARVIS origin you will actually use.
5. Paste the client ID and secret into **Settings** → **Integrations**.
6. Start the connection flow from the dashboard.
7. Restart JARVIS after the account is connected.

### Local default example

If you are running locally on the default port, the callback path is typically:

```text
http://localhost:3142/api/auth/google/callback
```

If you are deploying behind a public hostname, keep the callback origin aligned with the address users actually open. See [Deployment Guide](/docs/deployment-guide).

### Good to know

- saving credentials is not the same as being connected
- the dashboard distinguishes between credential storage and completed authorization
- after a successful connection, a restart is typically required before observers are fully active

## Telegram

Telegram is the fastest way to add remote control from your phone.

### What you need

- a bot token from BotFather
- your Telegram user ID

### Config example

```yaml
channels:
  telegram:
    enabled: true
    bot_token: "7123456789:AAH..."
    allowed_users: [123456789]
```

### Setup flow

1. Create a bot with BotFather.
2. Get your user ID from a helper bot such as `@userinfobot`.
3. Add the token and allowed user IDs in the dashboard or config.
4. Restart the daemon if needed.
5. Send the bot a direct message and confirm JARVIS responds.

Read [Telegram](/docs/telegram) for the detailed walkthrough.

## Discord

Discord is a good fit when you want JARVIS available in a team or project server.

### What you need

- a Discord application and bot token
- your user ID
- optionally a guild ID to restrict the bot to one server

### Config example

```yaml
channels:
  discord:
    enabled: true
    bot_token: "MTIz..."
    allowed_users: ["123456789012345678"]
    guild_id: "987654321098765432"
```

### Setup flow

1. Create the app and bot in the Discord Developer Portal.
2. Enable the permissions you need.
3. Invite the bot to your server.
4. Add the token and allowed users to JARVIS.
5. Restart if the UI indicates it is required.
6. Mention the bot or DM it to verify the pipeline works.

Read [Discord](/docs/discord) for the detailed walkthrough.

## Speech-to-Text

The current channels settings expose:

- OpenAI STT
- Groq STT
- a local STT endpoint

### The reachability rule

If you use a local endpoint, its URL must be reachable from the daemon machine.

Examples:

- local laptop daemon → `http://localhost:8080` may be fine
- VPS daemon → `http://localhost:8080` only works if STT is also on that VPS

If the daemon is remote, use a reachable hostname or VPN address instead.

## Text-to-Speech

The current channels settings expose:

- Edge TTS
- ElevenLabs

### Edge

- easiest default
- no extra premium provider setup required

### ElevenLabs

You will need:

- an ElevenLabs API key
- optionally a preferred voice ID

This is a good choice when you want higher-quality spoken responses and do not mind external provider dependence.

## Security Guidance

- keep bot tokens and OAuth secrets out of screenshots and shared notes
- restrict allowed users aggressively
- rotate credentials if you accidentally expose them
- review public deployment settings before turning on integrations for a hosted daemon

## Testing Checklist

After enabling an integration, verify all three layers:

1. **Credential layer** — token or OAuth secret saved
2. **Connection layer** — the service can actually authenticate
3. **Behavior layer** — JARVIS can send or receive a real message/event

Examples:

- Telegram bot replies to a DM
- Discord bot responds in the expected server
- Google shows connected state and data appears after restart
- STT transcribes a real voice message
- TTS speaks a test response

## When Integrations Fail

Check:

- wrong tokens or client secrets
- daemon restart still pending
- callback origin mismatch after deployment changes
- `localhost` endpoints that are not reachable from the daemon
- allowed user lists that do not include the person testing

## Next Steps

- [Settings Reference](/docs/settings-reference)
- [Deployment Guide](/docs/deployment-guide)
- [Telegram](/docs/telegram)
- [Discord](/docs/discord)
- [FAQ](/docs/faq)
