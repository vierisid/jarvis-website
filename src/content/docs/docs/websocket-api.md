---
title: WebSocket API
description: The actual message format used by the JARVIS dashboard and daemon for real-time communication.
---

JARVIS uses a WebSocket connection for the live dashboard experience.

Default endpoint:

```text
ws://localhost:3142/ws
```

If you serve the dashboard over HTTPS behind a proxy, the browser will use `wss://.../ws`.

## Message Shape

The daemon's current WebSocket messages use this shape:

```json
{
  "type": "chat",
  "payload": {},
  "id": "optional-id",
  "priority": "normal",
  "timestamp": 1710000000000
}
```

Important note:

- The field is `payload`, not `data`

## Supported Message Types

The shipped daemon defines these top-level message types:

- `chat`
- `command`
- `status`
- `stream`
- `error`
- `notification`
- `tts_start`
- `tts_end`
- `voice_start`
- `voice_end`
- `workflow_event`
- `goal_event`
- `site_event`

## Common Client → Server Messages

### `chat`

Send a normal user message:

```json
{
  "type": "chat",
  "payload": {
    "text": "Summarize the top issues in this repository"
  },
  "id": "client-message-id",
  "timestamp": 1710000000000
}
```

### `command`

Used for system-style requests such as health checks or ping:

```json
{
  "type": "command",
  "payload": {
    "command": "health"
  },
  "timestamp": 1710000000000
}
```

### `voice_start` / `voice_end`

Used by the dashboard voice pipeline. Binary audio chunks are sent between those markers.

## Common Server → Client Messages

### `stream`

Streaming partial response chunks and tool/sub-agent progress.

### `notification`

Used for structured events such as:

- task updates
- content updates
- approval requests
- awareness events
- assistant-side follow-up notifications

### `status`

Used for operation status and command responses.

### `error`

Used when the daemon needs to surface a request error over the socket.

### `tts_start` / `tts_end`

Used by the voice system to coordinate streamed speech playback.

### `workflow_event`, `goal_event`, `site_event`

Dedicated event streams for those product areas.

## Authentication

If `auth.token` is configured, the dashboard/API layer requires it.

In practical deployments, authentication is commonly handled via:

- query token during first load
- cookie set by the dashboard flow

If `auth.token` is unset, the dashboard is open access.

## Reverse Proxy Requirements

If you proxy the dashboard:

- forward `/ws`
- preserve `Upgrade` and `Connection` headers
- make sure the browser origin matches the daemon's expected public host setup

## Who Should Use This Page

This page is for:

- people building custom dashboard clients
- people debugging WebSocket/proxy issues
- people integrating around the live event stream

If you just want to use JARVIS normally, start with [Dashboard](/docs/dashboard) and [Troubleshooting](/docs/troubleshooting).
