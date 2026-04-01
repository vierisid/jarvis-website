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

The outer WebSocket envelope still uses the same top-level `type`, `payload`, and `timestamp` fields. The event-specific details live inside `payload`.

## Authentication

If `auth.token` is configured, the dashboard/API layer requires it.

Custom clients should send that token using the same mechanisms the daemon actually accepts:

- HTTP API requests:

```text
Authorization: Bearer your-auth-token
```

- Browser/dashboard bootstrap:

```text
http://localhost:3142/?token=your-auth-token
```

When that `?token=` query value is valid on an HTTP page request, the daemon responds by setting this cookie:

```text
token=<auth.token>; Path=/; SameSite=Lax; HttpOnly
```

That `token` cookie is what browser WebSocket upgrades use afterward.

If you are building your own client, use one of these patterns:

1. Non-browser client:
   send `Authorization: Bearer ...` on API requests and `Cookie: token=...` on the WebSocket handshake
2. Browser client:
   first load the dashboard or your bootstrap route with `?token=...`, let the daemon set the `token` cookie, then open `/ws`

Important detail:

- the daemon's WebSocket upgrade path checks the `token` cookie, not an `Authorization` header on the WebSocket request itself
- the cookie name is literally `token`
- the daemon sets it as `HttpOnly; Path=/; SameSite=Lax`

If you rely on cookies in a browser-based custom client, make sure your proxy preserves `Set-Cookie` and that the browser origin matches the daemon's configured public URL/origin handling.

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
