---
title: WebSocket API
description: Protocol reference for the JARVIS WebSocket interface.
---

The JARVIS daemon exposes a WebSocket server for real-time communication. The dashboard, Telegram adapter, Discord adapter, and any custom clients all connect through this interface.

## Endpoint

```
ws://localhost:3142/ws
```

The port defaults to `3142` and can be changed via `daemon.port` in the config.

## Authentication

If `auth.token` is set in the config, clients must authenticate by including the token:

- **Query parameter**: `ws://localhost:3142/ws?token=your-token`
- **Authorization header**: `Authorization: Bearer your-token`

If `auth.token` is not set, the WebSocket accepts all connections (open access).

## Message Format

All JSON messages follow this structure:

```json
{
  "type": "message_type",
  "data": { ... },
  "id": "optional-correlation-id"
}
```

The `type` field determines how the message is processed. The `data` field carries the payload. The optional `id` field correlates requests with responses.

## Client → Server Messages

### `chat`

Send a text message to the agent.

```json
{
  "type": "chat",
  "data": {
    "content": "Go to news.ycombinator.com and summarize the top 5 stories"
  }
}
```

### `command`

Send a system command (not a chat message).

```json
{
  "type": "command",
  "data": {
    "action": "stop",
    "params": {}
  }
}
```

### `voice_start`

Signal that the client is beginning to send voice audio.

```json
{
  "type": "voice_start",
  "data": {}
}
```

After sending this message, the client streams binary WebM audio frames over the WebSocket.

### `voice_end`

Signal that the client has finished sending voice audio.

```json
{
  "type": "voice_end",
  "data": {}
}
```

The server sends the accumulated audio to the STT provider and processes the resulting transcript as a chat message.

## Server → Client Messages

### `stream`

A streaming token from the LLM response. Sent repeatedly as the response is generated.

```json
{
  "type": "stream",
  "data": {
    "token": "The top",
    "done": false
  }
}
```

When the response is complete:

```json
{
  "type": "stream",
  "data": {
    "token": "",
    "done": true
  }
}
```

### `chat`

A complete chat message (non-streaming).

```json
{
  "type": "chat",
  "data": {
    "role": "assistant",
    "content": "Here are the top 5 stories from Hacker News...",
    "tools_used": ["browser_navigate", "browser_snapshot"]
  }
}
```

### `status`

System status update.

```json
{
  "type": "status",
  "data": {
    "daemon": "running",
    "uptime": "2m 14s",
    "memory_mb": 87,
    "active_agents": 1,
    "browser": "connected",
    "sidecar": "connected"
  }
}
```

### `notification`

A notification for the user (approval request, scheduled task, etc.).

```json
{
  "type": "notification",
  "data": {
    "title": "Approval Required",
    "message": "JARVIS wants to send an email to team@example.com",
    "actions": ["approve", "deny"],
    "id": "approval-123"
  }
}
```

### `tts_start`

Signals that TTS audio is about to be streamed.

```json
{
  "type": "tts_start",
  "data": {
    "voice": "en-US-AriaNeural"
  }
}
```

After this message, the server sends binary MP3 audio frames.

### `tts_end`

Signals that TTS audio streaming is complete.

```json
{
  "type": "tts_end",
  "data": {}
}
```

### `error`

An error occurred.

```json
{
  "type": "error",
  "data": {
    "message": "LLM provider returned 429: rate limit exceeded",
    "code": "LLM_RATE_LIMIT"
  }
}
```

### `workflow_event`

A workflow execution event.

```json
{
  "type": "workflow_event",
  "data": {
    "workflow_id": "wf-123",
    "event": "node_completed",
    "node_id": "node-456",
    "result": { ... }
  }
}
```

### `goal_event`

A goal pursuit event (morning check-in, progress update, etc.).

```json
{
  "type": "goal_event",
  "data": {
    "goal_id": "goal-789",
    "event": "morning_checkin",
    "message": "Good morning! Let's review your goals for today."
  }
}
```

## Binary Protocol

Voice audio uses WebSocket binary frames alongside the JSON text frames:

| Direction | Format | Description |
|---|---|---|
| Client → Server | Binary (WebM) | Microphone audio chunks during voice input |
| Server → Client | Binary (MP3) | TTS audio chunks, streamed sentence by sentence |

The server distinguishes binary from JSON messages using the WebSocket frame type bit — no additional framing header is needed.

### Audio Flow

1. Client sends `voice_start` (JSON)
2. Client streams binary WebM frames
3. Client sends `voice_end` (JSON)
4. Server processes audio via STT
5. Server sends `stream` tokens (JSON) as the agent responds
6. Server sends `tts_start` (JSON)
7. Server streams binary MP3 frames
8. Server sends `tts_end` (JSON)

## Sidecar WebSocket

Sidecars connect to a separate endpoint:

```
ws://localhost:3142/sidecar
```

Sidecar connections require a JWT token in the `Authorization: Bearer` header. The sidecar protocol uses JSON-RPC for tool execution — see [Desktop Control](/docs/desktop-control) for details.
