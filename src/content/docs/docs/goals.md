---
title: Autonomous Goal Pursuit
description: OKR-style goal hierarchy with drill-sergeant accountability, morning/evening rhythm, auto-detection from screen activity, and three dashboard views.
---

JARVIS includes an autonomous goal pursuit engine — an OKR-style hierarchical goal system with drill-sergeant accountability, daily rhythm, and deep integration with awareness, workflows, and memory.

## Overview

Goals in JARVIS follow the **OKR (Objectives and Key Results)** framework used by Google, with five levels of hierarchy:

| Level | Purpose | Example |
|-------|---------|---------|
| **Objective** | High-level life goal | "Get fit by summer" |
| **Key Result** | Measurable outcome | "Run 5K under 25 minutes" |
| **Milestone** | Progress checkpoint | "Complete Couch-to-5K program" |
| **Task** | Discrete action | "Sign up for local 5K race" |
| **Daily Action** | Recurring daily habit | "Morning run" |

### Google-Style Scoring

Every goal is scored **0.0 to 1.0** using Google's OKR philosophy:

- **0.0–0.3** — Failed to make real progress
- **0.4–0.6** — Made progress but fell short
- **0.7** — Successfully delivered (this is the target)
- **0.8–1.0** — Over-delivered (you may have aimed too low)

Scores propagate up the hierarchy — child scores roll up to parents automatically.

## Creating Goals

### Chat (Natural Language)

The simplest way — just tell JARVIS what you want to achieve:

```
"I want to get fit by summer"
```

JARVIS uses the NL Goal Builder to decompose your statement into a full OKR hierarchy:

```
Proposed breakdown:
  OBJECTIVE: Get fit by summer
    KEY RESULT: Run 5K under 25 minutes
      MILESTONE: Complete Couch-to-5K program
      DAILY ACTION: Morning run (30min)
    KEY RESULT: Lose 10 lbs
      TASK: Set up calorie tracking app
      DAILY ACTION: Track all meals
```

You review and confirm. JARVIS creates the full hierarchy instantly.

### Dashboard

Click **"+ New Goal"** in the Goals dashboard. Two modes:

1. **Natural Language** — paste a goal description, JARVIS proposes the OKR breakdown
2. **Quick Create** — fill in title, level, parent, description, and deadline manually

### API

```bash
# Create a goal
curl -X POST http://localhost:3142/api/goals \
  -H "Content-Type: application/json" \
  -d '{"title": "Get fit by summer", "level": "objective"}'

# Create with NL decomposition
curl -X POST http://localhost:3142/api/goals \
  -H "Content-Type: application/json" \
  -d '{"title": "I want to learn TypeScript", "decompose": true}'
```

## Daily Rhythm

JARVIS runs two daily check-ins driven by configurable time windows:

### Morning Plan (default: 7–9 AM)

- Reviews all active goals and their health
- Generates today's **focus areas** (which goals need attention)
- Creates **daily actions** from goals marked as daily habits
- Checks calendar for conflicts
- Delivers the plan via dashboard notification, voice, or Telegram

### Evening Review (default: 8–10 PM)

- Collects the day's progress (manual + auto-detected from screen awareness)
- Scores each daily action as completed or missed
- Updates goal scores based on actual progress
- Generates accountability assessment in drill-sergeant tone
- Identifies goals falling behind schedule

Configure the windows in `~/.jarvis/config.yaml`:

```yaml
goals:
  enabled: true
  morning_window:
    start: 7   # Hour (24h format)
    end: 9
  evening_window:
    start: 20
    end: 22
  accountability_style: drill_sergeant  # or: supportive
  auto_decompose: true
  calendar_ownership: false  # set true to let JARVIS manage calendar blocks
```

## Accountability & Escalation

The drill sergeant doesn't let you off easy. When a goal falls behind, JARVIS escalates through four stages:

| Stage | Trigger | Behavior |
|-------|---------|----------|
| **None** | Goal is on track | Normal tracking |
| **Pressure** | Behind for 1+ weeks | Daily blunt reminders, increased check-in frequency |
| **Root Cause** | Behind for 3+ weeks | LLM analyzes *why* you're behind, suggests specific unblocking actions |
| **Suggest Kill** | Behind for 4+ weeks | Recommends killing the goal if it's no longer achievable or relevant |

Escalation timing is configurable:

```yaml
goals:
  escalation_weeks:
    pressure: 1
    root_cause: 3
    suggest_kill: 4
```

### Health Indicators

Each goal has a health status calculated from score progress vs. time elapsed:

- **On Track** — ahead of or matching expected pace
- **At Risk** — slightly behind (within 15% gap)
- **Behind** — significantly behind (15–30% gap)
- **Critical** — way behind or past deadline with low score

## Auto-Detection from Screen Awareness

JARVIS connects the awareness engine (continuous screen capture + OCR) to your goals. When you're working on something related to an active goal, JARVIS automatically detects it:

1. **Fuzzy matching** — your screen activity (app name, window title, OCR text) is matched against goal descriptions and keywords
2. **Auto-progress logging** — matched activities are logged as `auto_detected` progress entries
3. **Deduplication** — same goal won't be re-logged within a 30-minute window
4. **Evening review** — auto-detected progress feeds into the evening review for accurate scoring

Example: If your goal is "Learn TypeScript" and JARVIS detects you in VS Code editing a `.ts` file with TypeScript documentation open, it auto-logs progress.

## Dashboard

The Goals page offers three switchable views:

### Kanban Board

Columns by status: **Draft → Active → At Risk → Completed**. Each card shows:
- Title and level badge
- Score (0.0–1.0) with color gradient
- Health indicator dot
- Deadline countdown
- Child goal count

Click a card to drill into its children. Breadcrumb navigation for hierarchy traversal.

### Timeline (Gantt)

Horizontal bars positioned by start date → deadline:
- Color-coded by health (green/amber/red)
- Nested rows for child goals
- Today marker line
- Horizontal scroll for long timelines

### Metrics

Charts powered by Recharts:
- Overall OKR score (aggregate)
- Completion rate over time
- Velocity trend
- Health distribution (pie chart)
- Score histogram
- Escalation count

## Agent Tool

The `manage_goals` tool is available to JARVIS in chat for all goal operations:

| Action | Description |
|--------|-------------|
| `create` | Create a new goal (with optional NL decomposition) |
| `list` | List goals filtered by status, level, or parent |
| `get` | Get full details of a specific goal |
| `score` | Update a goal's score with reason |
| `update_status` | Change status (active, paused, completed, failed, killed) |
| `decompose` | Break down a goal into sub-goals using LLM |
| `replan` | Generate alternative approaches for a struggling goal |
| `morning_plan` | Trigger morning planning session |
| `evening_review` | Trigger evening review session |
| `estimate` | Get time/effort estimate (hybrid LLM + historical data) |

## Estimation Engine

JARVIS uses a **hybrid estimation approach**:

1. **Historical data** — queries the vault for similar completed goals (matched by tags, level, description)
2. **LLM estimation** — asks the LLM for an estimate based on the goal description and context
3. **Blending** — 60% historical, 40% LLM (100% LLM if no historical data exists)

Each estimate includes:
- Hours estimate (with confidence interval)
- Confidence level (low/medium/high)
- Reasoning explanation
- Similar past goals used as reference

## Goal Memory

When a goal is completed, failed, or killed, JARVIS extracts it into the vault as a knowledge entity with performance facts:

- Final score
- Estimated vs. actual hours
- Time to complete
- Estimation accuracy ratio
- Tags and level

This builds a growing dataset that improves future estimations and gives JARVIS historical awareness of your track record.

## API Reference

### Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/goals` | List goals (query: status, level, parent_id) |
| `POST` | `/api/goals` | Create goal |
| `GET` | `/api/goals/:id` | Get goal by ID |
| `PATCH` | `/api/goals/:id` | Update goal fields |
| `DELETE` | `/api/goals/:id` | Delete goal |
| `GET` | `/api/goals/:id/tree` | Get full goal tree (recursive children) |
| `POST` | `/api/goals/:id/score` | Update score with reason |
| `POST` | `/api/goals/:id/decompose` | Decompose into sub-goals |
| `POST` | `/api/goals/:id/replan` | Generate replan options |
| `GET` | `/api/goals/:id/progress` | Get progress history |
| `POST` | `/api/goals/reorder` | Reorder goals |
| `GET` | `/api/goals/check-ins` | Get recent check-ins |
| `POST` | `/api/goals/morning-plan` | Trigger morning plan |
| `POST` | `/api/goals/evening-review` | Trigger evening review |
| `GET` | `/api/goals/daily-actions` | Get today's daily actions |
| `GET` | `/api/goals/metrics` | Get goal metrics |

### WebSocket Events

Goal events are broadcast via WebSocket (same connection as other JARVIS events):

```json
{
  "type": "goal_event",
  "timestamp": 1709654400000,
  "payload": {
    "type": "goal_scored",
    "goalId": "abc123",
    "data": { "score": 0.45, "reason": "Completed 3 of 5 subtasks", "source": "user" },
    "timestamp": 1709654400000
  }
}
```

Event types: `goal_created`, `goal_updated`, `goal_scored`, `goal_completed`, `goal_failed`, `goal_killed`, `goal_health_changed`, `goal_escalated`, `check_in_morning`, `check_in_evening`, `daily_actions_generated`, `replan_triggered`.

### Example: Create and Score

```bash
# Create an objective
GOAL_ID=$(curl -s -X POST http://localhost:3142/api/goals \
  -H "Content-Type: application/json" \
  -d '{"title": "Ship v1.0", "level": "milestone", "description": "Release version 1.0 to production"}' \
  | jq -r '.id')

# Score it
curl -X POST "http://localhost:3142/api/goals/$GOAL_ID/score" \
  -H "Content-Type: application/json" \
  -d '{"score": 0.4, "reason": "Core features done, testing remains"}'

# Check health
curl "http://localhost:3142/api/goals/$GOAL_ID" | jq '.health'
```

## Configuration Reference

Full goal configuration in `~/.jarvis/config.yaml`:

```yaml
goals:
  enabled: true

  # Daily rhythm windows (24h format)
  morning_window:
    start: 7
    end: 9
  evening_window:
    start: 20
    end: 22

  # Accountability tone
  accountability_style: drill_sergeant  # drill_sergeant | supportive

  # Escalation timing (weeks behind before each stage)
  escalation_weeks:
    pressure: 1
    root_cause: 3
    suggest_kill: 4

  # Auto-decompose goals into daily actions
  auto_decompose: true

  # Let JARVIS create/move calendar events for goals
  calendar_ownership: false
```

## Video Tutorial Placeholder

> Video tutorial placeholder: goal planning, accountability, and dashboard views.

Add your future video link here.
