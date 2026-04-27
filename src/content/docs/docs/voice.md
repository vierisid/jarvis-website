---
title: Voice Interface
description: Speak to JARVIS with browser-based voice capture, streaming TTS playback, and source-backed STT/TTS configuration.
---

JARVIS includes a full voice interface: speak your requests using the mic button or browser wake detection, and hear responses streamed back as speech in real time.

The important split is:

- **browser/UI behavior** handles microphone capture, wake detection, and playback
- **daemon config** controls which STT and TTS providers are used at runtime

This page focuses on the current implementation rather than an idealized future config surface.

## Overview

```
You speak  →  browser capture  →  WAV over WebSocket  →  STT provider  →  text  →  agent
Agent response  →  sentence split  →  TTS provider  →  MP3 over WebSocket  →  browser playback
```

Audio travels over the existing WebSocket connection using binary frames alongside the normal JSON message stream. The dashboard manages microphone capture, wake-state transitions, and browser playback.

## What Is Actually Configurable Today

The current daemon config schema exposes:

- `tts.enabled`
- `tts.provider`
- `tts.voice`
- `tts.rate`
- `tts.volume`
- `tts.elevenlabs.*`
- `stt.provider`
- `stt.openai.*`
- `stt.groq.*`
- `stt.local.endpoint`
- `stt.local.model`
- `stt.local.server_type`

The browser wake behavior is primarily a UI/runtime concern, not a rich YAML surface today. If you are editing `~/.jarvis/config.yaml`, focus on STT/TTS provider settings first.

## Text-to-Speech

### Default Provider: edge-tts-universal

JARVIS uses `edge-tts-universal` by default. This is the easiest TTS path because it does not require a separate API key.

Available voices include hundreds of neural voices across dozens of languages. The default voice is `en-US-AriaNeural`.

#### Selecting a Voice

```yaml
tts:
  enabled: true
  provider: edge
  voice: en-US-AriaNeural
  rate: "+0%"
  volume: "+0%"
  # Other popular choices:
  # en-US-JennyNeural
  # en-GB-RyanNeural
  # en-AU-NatashaNeural
```

Browse all available voices:

```bash
bunx edge-tts --list-voices
```

### Alternative: ElevenLabs

For higher-quality, more expressive voices, configure ElevenLabs TTS:

```yaml
tts:
  enabled: true
  provider: elevenlabs
  elevenlabs:
    api_key: "sk_..."
    voice_id: "21m00Tcm4TlvDq8ikWAM"   # Rachel (default)
    model: eleven_flash_v2_5             # eleven_flash_v2_5 | eleven_multilingual_v2
    stability: 0.5                       # 0.0 to 1.0
    similarity_boost: 0.75              # 0.0 to 1.0
```

Get an API key at [elevenlabs.io](https://elevenlabs.io). This is the higher-quality option when you want more expressive speech and do not mind relying on an external provider.

### Streaming Playback

JARVIS synthesizes audio sentence-by-sentence and streams those MP3 chunks back to the browser. That keeps perceived latency low without requiring the entire reply to be synthesized first.

## Speech-to-Text

Three STT providers are supported. All produce the same output: a transcript string passed to the agent.

### OpenAI Whisper (default)

```yaml
stt:
  provider: openai
  openai:
    api_key: "sk-..."
    model: whisper-1
```

This is the current default STT provider in the config defaults.

### Groq

Groq is a good low-latency alternative if you want fast transcription without running your own local endpoint.

```yaml
stt:
  provider: groq
  groq:
    api_key: "gsk_..."
    model: whisper-large-v3-turbo
```

Get a free API key at [console.groq.com](https://console.groq.com).

### Local Whisper

Run transcription against a local HTTP endpoint that the daemon can reach.

```yaml
stt:
  provider: local
  local:
    endpoint: "http://localhost:8080"
    model: "base"
    server_type: whisper_cpp  # whisper_cpp | openai_compatible
```

Two important details from the current implementation:

1. For `whisper_cpp`, JARVIS appends `/inference` automatically if you give it a bare host.
2. For `openai_compatible`, JARVIS uses the endpoint as-is.

If the daemon runs remotely, `localhost` means the daemon host, not your laptop or browser.

## Wake Detection

The current UI uses a browser-first wake strategy:

1. try the browser `SpeechRecognition` API for `"Jarvis"` / `"Hey Jarvis"`
2. fall back to [openwakeword](https://github.com/dscripka/openWakeWord) in the browser if speech recognition is unavailable

That means wake behavior depends partly on browser capabilities, not only on YAML config.

### How It Works

1. The dashboard stays in an idle voice state
2. It tries to detect `"Jarvis"` / `"Hey Jarvis"` in-browser
3. On detection, the UI switches through `wake_detected` into recording
4. Audio is captured and sent to the daemon
5. The daemon transcribes it with the configured STT provider

### Important limitation

The current config schema does **not** expose a large documented `voice:` block like some older docs implied. If you are looking for stable operator controls, use the STT/TTS config blocks shown above and treat wake detection as browser/runtime behavior.

## Voice Input Methods

Two current ways to trigger voice input:

| Method | How |
|---|---|
| Wake detection | Say "Jarvis" or "Hey Jarvis" when browser support is available |
| Mic button | Click the microphone icon in the dashboard header |

## Voice State Machine

The dashboard manages voice state with a formal state machine:

```
idle
  ├─ wake detected ───────→ wake_detected
  ├─ mic button pressed ──→ recording

wake_detected
  └─ short delay ─────────→ recording

recording
  ├─ silence / release ───→ processing

processing
  └─ server reply begins ─→ speaking

speaking
  └─ TTS complete ────────→ idle
```

Visual indicators in the dashboard reflect the current state: the mic icon pulses during listening, a spinner appears during processing, and a waveform animates during TTS playback.

## Binary WebSocket Protocol

Voice audio travels over the same WebSocket connection as JSON chat messages.

| Direction | Format | Description |
|---|---|---|
| Client to Server | Binary (WAV payload) | Recorded mic audio sent after `voice_start` |
| Server to Client | Binary (MP3) | TTS audio chunks, streamed sentence by sentence |
| Client to Server | JSON | Text messages, commands, configuration |
| Server to Client | JSON | Agent responses, streaming tokens, tool results |

The client also sends JSON control messages like `voice_start` and `voice_end` around the audio payload.

## Current Config Reference

```yaml
tts:
  enabled: true
  provider: edge            # edge | elevenlabs
  voice: en-US-AriaNeural
  rate: "+0%"
  volume: "+0%"
  elevenlabs:
    api_key: "sk_..."
    voice_id: "21m00Tcm4TlvDq8ikWAM"
    model: "eleven_flash_v2_5"
    stability: 0.5
    similarity_boost: 0.75

stt:
  provider: openai         # openai | groq | local
  openai:
    api_key: "sk-..."
    model: "whisper-1"
  groq:
    api_key: "gsk_..."
    model: "whisper-large-v3-turbo"
  local:
    endpoint: "http://localhost:8080"
    model: "base"
    server_type: whisper_cpp
```

## Troubleshooting

**No TTS audio plays**

- Check that your browser allows autoplay (some browsers block it until the user has interacted with the page)
- Verify TTS is enabled in config: `tts.enabled: true`
- Open the browser console and look for decode errors

**Microphone not working**

- The browser will prompt for microphone permission on first use — allow it
- Check that your OS has not blocked the browser from accessing the microphone
- Run `jarvis doctor` to check for STT configuration issues

**Wake detection does not trigger reliably**

- Browser wake support depends on the browser's speech APIs
- If speech wake is unavailable, the UI falls back to openwakeword
- If you need a guaranteed path, use the mic button instead of assuming wake detection is configurable via YAML

**High STT latency**

Switch to Groq (`stt.provider: groq`) — it is significantly faster than OpenAI's Whisper endpoint for most inputs.

## Video Tutorial Placeholder

> Video tutorial placeholder: wake word, microphone flow, STT, and streaming TTS.

Add your future video link here.
