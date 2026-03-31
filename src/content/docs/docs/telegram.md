---
title: Telegram
description: Connect JARVIS to Telegram for remote control via bot messages.
---

JARVIS can be controlled through a Telegram bot. Send messages, receive responses, approve actions, and get notifications — all from your phone or Telegram desktop app.

## Setup

### 1. Create a Bot

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot`
3. Choose a name (e.g., "My JARVIS")
4. Choose a username (must end in `bot`, e.g., `my_jarvis_bot`)
5. BotFather responds with a **bot token** — copy it

### 2. Find Your User ID

JARVIS restricts access to a list of allowed Telegram user IDs. To find yours:

1. Search for [@userinfobot](https://t.me/userinfobot) on Telegram
2. Send any message — it replies with your user ID (a number like `123456789`)

### 3. Configure JARVIS

Add the bot token and your user ID to `~/.jarvis/config.yaml`:

```yaml
channels:
  telegram:
    enabled: true
    bot_token: "7123456789:AAH..."
    allowed_users: [123456789]       # Your Telegram user ID
```

Or configure during onboarding:

```bash
jarvis onboard
```

### 4. Restart the Daemon

```bash
jarvis restart
```

The Telegram adapter starts automatically when `channels.telegram.enabled` is `true`.

## Usage

Send any message to your bot — it goes through the same agent pipeline as the dashboard chat:

```
You: What's on my calendar today?
JARVIS: You have 3 events today...

You: Go to github.com/vierisid/jarvis and check the latest issues
JARVIS: I've navigated to the repo. Here are the latest issues...
```

### Voice Messages

Send a Telegram voice message and JARVIS will transcribe it via your configured STT provider, then respond as text.

### Approval Requests

When the agent needs your approval for a governed action, it sends an inline keyboard message:

```
🔐 Approval Required

JARVIS wants to send an email to team@example.com
Subject: "Weekly Report"

[✅ Approve]  [❌ Deny]
```

Tap a button to approve or deny. The agent continues based on your response.

### Notifications

JARVIS sends proactive notifications through Telegram:

- Scheduled task completions
- Goal check-ins (morning/evening)
- Awareness alerts (detected struggles)
- Workflow completion results

## Multiple Users

Add multiple user IDs to `allowed_users` to let others interact with your JARVIS instance:

```yaml
channels:
  telegram:
    enabled: true
    bot_token: "7123456789:AAH..."
    allowed_users: [123456789, 987654321]
```

Messages from users not in the list are silently ignored.

## Limitations

- **Message length**: Telegram limits messages to 4096 characters. Long responses are split across multiple messages.
- **Images**: JARVIS can send screenshots and images as Telegram photos.
- **No group chat**: The bot only responds in direct messages, not in group chats.

## Video Tutorial Placeholder

> Video tutorial placeholder: setting up Telegram and using it as a remote JARVIS channel.

Add your future video link here.
