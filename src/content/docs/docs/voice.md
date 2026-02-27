---
title: Voice Interface
description: Speak to JARVIS with wake word detection, mic button, and streaming TTS responses.
---

JARVIS includes a full voice interface: speak your requests using a wake word, microphone button, or push-to-talk, and hear responses streamed back as speech in real time. Text-to-speech requires no API key. Speech-to-text supports cloud and local providers.

## Overview

```
You speak  →  WebM audio  →  STT (Whisper/Groq/Local)  →  text  →  Agent
Agent response  →  sentence split  →  TTS (edge-tts)  →  MP3  →  speaker
```

Audio travels over the existing WebSocket connection using a binary protocol alongside the normal JSON message stream. The dashboard handles microphone capture, audio playback, and voice state management in the browser.

## Text-to-Speech

### Default Provider: edge-tts-universal

JARVIS uses `edge-tts-universal` by default. This library proxies Microsoft Edge's TTS service and is completely free — no API key, no account, no rate limits for personal use.

Available voices include hundreds of neural voices across dozens of languages. The default voice is `en-US-GuyNeural`.

#### Selecting a Voice

```yaml
tts:
  provider: edge-tts
  voice: en-US-GuyNeural    # Male, US English
  # Other popular choices:
  # en-US-JennyNeural       # Female, US English
  # en-GB-RyanNeural        # Male, British English
  # en-AU-NatashaNeural     # Female, Australian English
  speed: 1.0                # 0.5 to 2.0
```

Browse all available voices:

```bash
bunx edge-tts --list-voices
```

### Alternative: OpenAI TTS

```yaml
tts:
  provider: openai
  apiKey: "sk-..."
  voice: onyx    # alloy | echo | fable | onyx | nova | shimmer
  model: tts-1   # tts-1 | tts-1-hd
```

### Streaming Playback

JARVIS does not wait for the full response to be synthesized before playing audio. Responses are split into sentences, and each sentence is synthesized and streamed to the browser as it is produced. This minimizes the perceived latency between the end of your speech and the start of JARVIS's reply.

## Speech-to-Text

Three STT providers are supported. All produce the same output: a transcript string passed to the agent.

### OpenAI Whisper (default)

```yaml
stt:
  provider: openai
  apiKey: "sk-..."
  model: whisper-1
  language: en    # Optional — auto-detected if omitted
```

Cost: approximately $0.006 per minute of audio.

### Groq (faster, cheaper)

Groq runs Whisper on dedicated inference hardware and is typically 5–10x faster than OpenAI's Whisper endpoint.

```yaml
stt:
  provider: groq
  apiKey: "gsk_..."
  model: whisper-large-v3
```

Get a free API key at [console.groq.com](https://console.groq.com).

### Local Whisper

Run Whisper entirely on your machine — no API key, no data leaving your network.

```yaml
stt:
  provider: local
  model: base.en    # tiny | base | small | medium | large
  device: cpu       # cpu | cuda
```

Requirements: Python 3.9+, `openai-whisper` package, and enough RAM for the chosen model (base.en is approximately 150 MB, large is approximately 3 GB).

```bash
pip install openai-whisper
```

## Wake Word Detection

JARVIS listens for "Hey JARVIS" using [openwakeword](https://github.com/dscripka/openWakeWord) compiled to WebAssembly. Detection runs entirely in the browser — no audio is sent to any server until the wake word triggers.

### How It Works

1. The browser loads ONNX wake word models from `/openwakeword/models/`
2. The microphone stream is analyzed continuously in a Web Worker
3. When confidence exceeds the threshold, the voice state machine transitions to `listening`
4. Audio is captured and sent to the STT provider
5. The transcript is forwarded to the agent

### Wake Word Sensitivity

```yaml
voice:
  wakeWord:
    enabled: true
    sensitivity: 0.5    # 0.0 (never trigger) to 1.0 (always trigger)
```

Lower sensitivity means fewer false positives but may require clearer pronunciation.

### Disabling Wake Word

If you prefer to use only the mic button or push-to-talk:

```yaml
voice:
  wakeWord:
    enabled: false
```

## Voice Input Methods

Three ways to trigger voice input:

| Method | How |
|---|---|
| Wake word | Say "Hey JARVIS" — microphone is always listening (locally) |
| Mic button | Click the microphone icon in the dashboard header |
| Push-to-talk | Hold the Space bar while the dashboard is focused |

## Voice State Machine

The dashboard manages voice state with a formal state machine:

```
idle
  ├─ wake word detected ──→ listening
  ├─ mic button pressed ──→ listening
  └─ PTT held ────────────→ listening

listening
  ├─ silence detected ────→ processing
  └─ PTT released ────────→ processing

processing
  └─ transcript ready ────→ responding

responding
  └─ TTS complete ────────→ idle
```

Visual indicators in the dashboard reflect the current state: the mic icon pulses during listening, a spinner appears during processing, and a waveform animates during TTS playback.

## Binary WebSocket Protocol

Voice audio travels over the same WebSocket connection as JSON chat messages, using the browser's binary message framing to distinguish them.

| Direction | Format | Description |
|---|---|---|
| Client to Server | Binary (WebM) | Mic audio chunks during listening state |
| Server to Client | Binary (MP3) | TTS audio chunks, streamed sentence by sentence |
| Client to Server | JSON | Text messages, commands, configuration |
| Server to Client | JSON | Agent responses, streaming tokens, tool results |

The server distinguishes binary from JSON messages using the WebSocket frame type bit — no additional header is needed.

## Configuration Reference

```yaml
tts:
  enabled: true
  provider: edge-tts       # edge-tts | openai | elevenlabs
  voice: en-US-GuyNeural
  speed: 1.0

stt:
  enabled: true
  provider: openai         # openai | groq | local
  apiKey: ""
  model: whisper-1
  language: en

voice:
  wakeWord:
    enabled: true
    sensitivity: 0.5
  pushToTalk:
    enabled: true
    key: Space
  silenceThreshold: 1500   # ms of silence before auto-submit
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

**Wake word triggers too often or not enough**

Adjust `voice.wakeWord.sensitivity`. Start at `0.5` and move toward `0.7` if it does not trigger, or `0.3` if it triggers on unrelated speech.

**High STT latency**

Switch to Groq (`stt.provider: groq`) — it is significantly faster than OpenAI's Whisper endpoint for most inputs.
