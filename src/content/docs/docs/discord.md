---
title: Discord
description: Connect JARVIS to Discord for remote control via a bot in your server.
---

JARVIS can be controlled through a Discord bot in your server. Send messages, receive responses, approve actions, and get notifications — all within Discord.

## Setup

### 1. Create a Bot Application

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **New Application** and give it a name (e.g., "JARVIS")
3. Navigate to the **Bot** section
4. Click **Reset Token** to generate a bot token — copy it
5. Under **Privileged Gateway Intents**, enable **Message Content Intent**

### 2. Invite the Bot

1. Navigate to the **OAuth2 > URL Generator** section
2. Select the `bot` scope
3. Select these permissions:
   - Send Messages
   - Read Message History
   - Embed Links
   - Attach Files
   - Add Reactions
   - Use External Emojis
4. Copy the generated URL and open it in your browser
5. Select your server and authorize

### 3. Find Your User ID

1. In Discord, open **Settings > Advanced** and enable **Developer Mode**
2. Right-click your username and select **Copy User ID**

### 4. Configure JARVIS

Add the bot token, your user ID, and optionally the guild (server) ID to `~/.jarvis/config.yaml`:

```yaml
channels:
  discord:
    enabled: true
    bot_token: "MTIz..."
    allowed_users: ["123456789012345678"]   # Your Discord user ID (string)
    guild_id: "987654321098765432"          # Optional: restrict to one server
```

Or configure during onboarding:

```bash
jarvis onboard
```

### 5. Restart the Daemon

```bash
jarvis restart
```

The Discord adapter starts automatically when `channels.discord.enabled` is `true`.

## Usage

Mention the bot or send a DM:

```
@JARVIS What's the status of the deployment?
JARVIS: The deployment pipeline completed successfully 5 minutes ago...

@JARVIS Summarize the top 3 stories on Hacker News
JARVIS: Here are the top 3 stories...
```

### Approval Requests

When the agent needs your approval, it sends a message with reaction options:

```
🔐 Approval Required

JARVIS wants to execute: rm -rf ./tmp/build-cache

React ✅ to approve or ❌ to deny.
```

React to approve or deny. The agent waits for your response before proceeding.

### Notifications

JARVIS sends proactive notifications in the channel:

- Scheduled task completions
- Goal check-ins
- Awareness alerts
- Workflow results

## Guild Restriction

Set `guild_id` to restrict the bot to a single Discord server. Without it, the bot responds in any server it has been invited to:

```yaml
channels:
  discord:
    guild_id: "987654321098765432"
```

## Multiple Users

Add multiple user IDs to `allowed_users`:

```yaml
channels:
  discord:
    allowed_users: ["123456789012345678", "876543210987654321"]
```

Messages from users not in the list are ignored.

## Limitations

- **Message length**: Discord limits messages to 2000 characters. Long responses are split across multiple messages.
- **Images**: JARVIS can send screenshots and images as Discord attachments.
- **Rate limits**: Discord enforces rate limits on bot messages. JARVIS respects these automatically.

## Video Tutorial Placeholder

> Video tutorial placeholder: setting up Discord and using it as a remote JARVIS channel.

Add your future video link here.
