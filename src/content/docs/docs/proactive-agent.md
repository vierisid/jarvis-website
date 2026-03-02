---
title: Proactive Agent
description: How JARVIS acts without being asked — monitoring, scheduling, and executing tasks autonomously.
---

JARVIS doesn't wait to be told. The proactive engine monitors your email, calendar, and commitments, then acts on your behalf — sending alerts, executing scheduled tasks, and queuing research in the background.

## Observers

Observers watch external data sources and fire events when something noteworthy happens.

### Gmail Observer

Monitors your Gmail inbox via Google API for new messages. Classifies emails by priority:

- **Important/Starred** labels trigger high-priority alerts
- **Urgent keywords** in subject lines (urgent, ASAP, deadline, etc.) are flagged
- Regular emails are batched for the next heartbeat cycle

Requires Google OAuth setup. See [Configuration](/docs/configuration) for setup instructions.

### Calendar Observer

Watches Google Calendar for upcoming events and fires alerts:

- Events within 15 minutes generate `schedule` suggestions
- Includes attendee list and location when available
- Self-throttled to check every 5 minutes

### D-Bus Notifications (Linux)

On Linux systems, JARVIS listens to the D-Bus notification bus for system-level alerts. Critical-urgency notifications are escalated immediately.

## Commitments

JARVIS maintains a commitments database in the vault. When you say "remind me to..." or "I need to...", JARVIS extracts and stores the commitment with a due date.

The heartbeat loop checks commitments every cycle:

| Status | Priority | Action |
|---|---|---|
| Overdue | Critical | Immediate alert + event classification |
| Due within 15 min | High | Proactive notification via all channels |
| Upcoming (no deadline) | Normal | Batched into heartbeat summary |

## Background Agent

For complex or time-consuming research tasks, JARVIS dispatches a background agent that works independently:

- Performs web searches and vault lookups
- Runs multi-step research chains
- Delivers results via WebSocket notification, desktop toast, and TTS
- Triggered automatically for high-confidence code/terminal struggles (awareness integration)

## Event Classification

All observer events pass through the event classifier, which assigns priority levels:

| Priority | Response | Examples |
|---|---|---|
| Critical | Immediate reaction | Overdue commitment, critical system notification |
| High | Next heartbeat cycle | URL in clipboard, important email, file deletion, struggle detected |
| Normal | Batched processing | Regular email, file modification, app launch |
| Low | Logged only | Short clipboard text, process stop, context switch |

## Heartbeat

The daemon runs a heartbeat loop (configurable interval, default 60 seconds) that:

1. Checks commitments for overdue and upcoming items
2. Processes batched normal/low priority events
3. Runs awareness capture cycle (if enabled)
4. Updates system status metrics

## Multi-Channel Delivery

Proactive notifications are delivered through all available channels:

1. **WebSocket** — real-time dashboard notification
2. **Voice** — spoken aloud via TTS
3. **Desktop toast** — system notification (D-Bus on Linux)
4. **Telegram/Discord** — if dashboard is disconnected, falls back to messaging channels

The system checks for active WebSocket clients first. If no dashboard is connected, it routes through Telegram, Discord, or email to ensure you never miss a critical alert.
