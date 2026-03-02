---
title: Dashboard
description: The web-based command center for monitoring and interacting with JARVIS.
---

The JARVIS dashboard is a React-based web interface served at `http://localhost:3142` by default. It provides real-time chat, voice interaction, system monitoring, and awareness analytics — all connected via WebSocket for instant updates.

## Accessing the Dashboard

The dashboard is available as soon as the daemon starts:

```bash
jarvis start
# Dashboard: http://localhost:3142
```

Open it in any browser. The dashboard connects to the daemon's WebSocket server for real-time streaming of responses, events, and awareness data.

## Main Sections

### Chat

The primary interface for conversing with JARVIS. Messages stream in real-time via WebSocket. Supports:

- Text input with markdown rendering
- Voice input via microphone button or wake word ("Hey JARVIS")
- File and image sharing
- Tool execution feedback (browser actions, file operations, etc.)
- Agent delegation status

### System Status

Displays the health of all daemon services:

- Daemon uptime and PID
- Browser connection status (Chromium CDP)
- Desktop sidecar status (FlaUI)
- Voice interface state (listening/idle)
- Active agents and queue depth
- Memory vault statistics
- Awareness service status

### Awareness

The awareness section has three tabs for monitoring JARVIS's continuous screen analysis:

#### Live

Real-time display of the current screen context:

- Active application and window title
- Current session duration and capture count
- Recent suggestions with dismiss/act-on actions
- Service toggle (enable/disable awareness)

#### Timeline

Chronological view of screen captures and events:

- Thumbnail previews of screenshots (click to expand)
- Key moment badges marking errors, struggles, and context switches
- Event filtering by type
- OCR text preview for each capture

#### Trends

Weekly analytics and behavioral insights:

- Daily active minutes with bar chart visualization
- Focus score tracking over time
- Top applications ranked by usage
- AI-generated weekly insights
- Behavioral pattern comparisons vs. previous week

## Voice Integration

The dashboard includes full voice support:

- **Wake word**: Say "Hey JARVIS" to activate (uses openwakeword ONNX models running in-browser)
- **Push-to-talk**: Hold the microphone button
- **Click-to-talk**: Click the microphone button to toggle recording
- **Streaming TTS**: Responses are read aloud with sentence-level streaming

Voice state is displayed in the interface: idle, wake detected, listening, processing, or speaking.

## WebSocket Protocol

The dashboard communicates with the daemon over a single WebSocket connection at `ws://localhost:3142/ws`. The protocol supports:

- **JSON messages**: Chat, events, status updates, awareness data
- **Binary messages**: Audio data (WebM from microphone, MP3 from TTS)

See the [WebSocket API](/docs/websocket-api) reference for the full protocol specification.
