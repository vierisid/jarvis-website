---
title: Continuous Awareness
description: How JARVIS monitors your screen, detects when you're struggling, and provides proactive, context-aware help.
---

JARVIS doesn't just respond when you ask — it watches your screen, understands what you're doing, and steps in when you need help. The Continuous Awareness system captures your desktop every 7 seconds, runs OCR, tracks context, and detects behavioral patterns like struggle and stuckness. When it spots a problem, it escalates to cloud vision for app-specific analysis and delivers actionable suggestions.

## How It Works

The awareness pipeline runs continuously in the background:

```
Screen Capture (every 7s)
    │
    ▼
OCR Text Extraction (Tesseract)
    │
    ▼
Context Tracking (app, window, session)
    │
    ├─── Error Detection (OCR pattern matching)
    ├─── Stuck Detection (same screen > 2 min)
    ├─── Struggle Detection (behavioral signals)
    │
    ▼
Cloud Vision Escalation (LLM screenshot analysis)
    │
    ▼
Suggestion Engine (rate-limited, deduped)
    │
    ▼
Delivery: Dashboard + Voice + Desktop Toast + Channels
```

### Screen Capture

Every 7 seconds (configurable), JARVIS takes a screenshot of your primary display. Captures are stored with JPEG thumbnails for the timeline view and automatically cleaned up based on retention tiers:

| Retention Tier | Duration | When Applied |
|---|---|---|
| `full` | 1 hour | Default — all captures |
| `key_moment` | 24 hours | Errors, struggles, context switches |

### OCR Text Extraction

Each screenshot is processed through Tesseract OCR to extract visible text. This text is used for:

- Detecting error messages, stack traces, and warnings
- Tracking what application and document you're working in
- Computing behavioral signals for struggle detection
- Providing context to cloud vision analysis

### Context Tracking

The context tracker maintains a model of what you're doing:

- **Active application** — detected from window title and OCR content
- **Window title** — tracked for context switches
- **Session management** — groups continuous activity in the same app into sessions
- **URL and file path extraction** — parsed from OCR text when applicable

When you switch applications, JARVIS fires a `context_changed` event. When a session ends (app switch or inactivity), JARVIS uses an LLM to summarize what you were doing and stores it for analytics.

## Struggle Detection

This is the core intelligence of the awareness system. Rather than just detecting visible errors, JARVIS recognizes when you're **actively working but making no progress** — a far more common scenario.

### Behavioral Signals

The struggle detector maintains a rolling window of the last 30 OCR snapshots (~3.5 minutes) and computes four behavioral signals:

| Signal | Weight | What It Detects |
|---|---|---|
| Trial-and-error editing | 30% | Many unique OCR states without convergence — you keep changing things but nothing sticks |
| Undo/revert patterns | 25% | Text reverting to earlier states — you're undoing changes and trying again |
| Repeated output | 25% | Same terminal output or error message appearing across captures |
| Low meaningful progress | 20% | Small character differences between captures despite continuous activity |

When the weighted composite score exceeds **0.5**, the detector starts a **2-minute grace period** (you might figure it out on your own). If the struggle persists past the grace period, a `struggle_detected` event fires.

### App-Aware Analysis

JARVIS classifies your current application into categories and tailors its help accordingly:

| Category | Apps | What JARVIS Does |
|---|---|---|
| Code Editor | VS Code, IntelliJ, Sublime, vim, Cursor, Zed | Analyzes visible code for syntax/logic errors, identifies the exact line and fix |
| Terminal | Terminal, iTerm, Warp, PowerShell | Identifies the failing command, explains the error, provides the corrected command |
| Browser | Chrome, Firefox, Edge, Arc | Identifies what you're trying to do, guides you to the right button or link |
| Creative App | Photoshop, Figma, Blender, Illustrator | Names the specific tool, menu item, or keyboard shortcut you need |
| Puzzle/Game | Detected via OCR patterns | Analyzes the game state, suggests the next 1-2 optimal moves |
| General | Everything else | Identifies the obstacle and suggests the next action |

### Cloud Vision Escalation

When a struggle is detected, JARVIS escalates the screenshot to an LLM with vision capabilities along with an app-category-specific prompt. The LLM analyzes the actual screenshot content and returns targeted advice:

- **Code editor**: "Line 42 is missing a closing parenthesis after the `filter` call. Change `filter(x => x > 0` to `filter(x => x > 0)`."
- **Terminal**: "The error is `EACCES: permission denied`. Run `sudo npm install -g typescript` instead."
- **Photoshop**: "The Clone Stamp tool is in the left toolbar, 6th from the top. Press `S` to select it."
- **Puzzle**: "Move the blue piece from E3 to C5 — this creates a fork threatening both the queen and rook."

### Rate Limiting

Five layers prevent the awareness system from being annoying:

| Layer | Default | Effect |
|---|---|---|
| Struggle grace period | 2 min | Never fires within first 2 minutes of detected struggle |
| Struggle cooldown | 3 min | Minimum gap between struggle detections |
| Cloud vision cooldown | 30 sec | Minimum gap between LLM vision API calls |
| Suggestion rate limit | 60 sec | Minimum gap between any suggestions |
| Suggestion dedup | Hash-based | Same suggestion (type + title) won't repeat |

The effective minimum gap between struggle interventions is **3 minutes**.

## Other Detection Types

### Error Detection

The context tracker scans OCR text for patterns matching common error messages:

- Stack traces and exception names
- "Error:", "Warning:", "Failed:" prefixes
- Build/compile failure patterns
- HTTP error codes (404, 500, etc.)

Error detection fires immediately (no grace period) since visible errors are unambiguous.

### Stuck Detection

If the OCR text hash remains identical for 2+ minutes (configurable via `stuck_threshold_ms`), JARVIS detects you as "stuck" — staring at the same screen without making changes. This is different from struggle detection, which catches *active but unproductive* behavior.

## Suggestion Types

The suggestion engine evaluates context and events in priority order:

| Priority | Type | Trigger |
|---|---|---|
| 1 | Error | `error_detected` event — visible error on screen |
| 2 | Struggle | `struggle_detected` event — behavioral pattern analysis |
| 3 | Stuck | `stuck_detected` event — unchanged screen for 2+ min |
| 4 | Automation | Repetitive app-switching pattern (A→B 3+ times in 5 min) |
| 5 | Knowledge | Context switch to a recognized entity/project in vault |
| 6 | Schedule | Calendar event or vault commitment due within 15 min |
| 7 | Break | 90+ minutes of continuous activity |
| 8 | Cloud Insight | Actionable observation from cloud vision analysis |

## Dashboard Integration

The awareness system adds three tabs to the dashboard:

### Live View

Real-time display of the current screen context:
- Active application and window title
- Current session duration and capture count
- Active suggestions with dismiss/act actions
- Service status indicator

### Activity Timeline

Chronological view of captures and events:
- Thumbnail previews of screenshots
- Key moment badges for significant events
- Event type filtering
- Click-to-expand for full OCR text

### Trends

Weekly analytics and behavioral insights:
- Daily active minutes bar chart
- Focus score tracking
- Top applications by usage
- AI-generated weekly insights
- Behavioral trend comparisons vs. previous week

## Delivery Channels

When a suggestion is generated, JARVIS delivers it through multiple channels based on availability:

1. **WebSocket** (dashboard) — if connected, delivered in real-time
2. **Voice** (TTS) — spoken aloud if voice is active
3. **Desktop toast** — system notification
4. **Channels fallback** — if no dashboard clients are connected, broadcasts to Telegram/Discord/email

For high-confidence code or terminal struggles (score >= 0.7), JARVIS also dispatches a background agent to perform deep research (web search + vault lookup) and delivers the detailed findings as a follow-up.

## Configuration

Add to `~/.jarvis/config.yaml`:

```yaml
awareness:
  enabled: true
  capture_interval_ms: 7000        # Screenshot frequency (default: 7000)
  min_pixel_change: 0.005          # Minimum change to process (default: 0.5%)
  stuck_threshold_ms: 120000       # Unchanged screen = stuck (default: 2 min)
  struggle_grace_ms: 120000        # Grace period before struggle fires (default: 2 min)
  struggle_cooldown_ms: 180000     # Min gap between struggles (default: 3 min)
  cloud_vision_enabled: true       # Enable LLM screenshot analysis
  cloud_vision_cooldown_ms: 30000  # Min gap between vision calls (default: 30s)
  suggestion_rate_limit_ms: 60000  # Min gap between suggestions (default: 60s)
  capture_dir: ~/.jarvis/awareness # Screenshot storage location
```

### Disabling Awareness

Set `awareness.enabled: false` in your config to completely disable screen capture and monitoring. You can also toggle it at runtime through the dashboard or via the REST API:

```bash
# Disable
curl -X POST http://localhost:3142/api/awareness/toggle -d '{"enabled": false}'

# Enable
curl -X POST http://localhost:3142/api/awareness/toggle -d '{"enabled": true}'
```

## Privacy

- All captures are stored **locally** on your machine in `~/.jarvis/awareness/`
- OCR text is processed locally via Tesseract — no data leaves your machine for basic detection
- Cloud vision escalation sends screenshots to your configured LLM provider (Anthropic/OpenAI) only when triggered by errors, struggles, or significant changes
- Captures are automatically cleaned up: standard captures after 1 hour, key moments after 24 hours
- You can disable cloud vision entirely with `cloud_vision_enabled: false`
