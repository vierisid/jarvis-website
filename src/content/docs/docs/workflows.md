---
title: Workflow Automation
description: Build event-driven automations with JARVIS — visual node graph, natural language creation, 50+ nodes, cron/webhook/observer triggers, self-healing execution.
---

JARVIS includes a full workflow automation engine — think n8n or Zapier, but built into your AI daemon with natural language creation, agent delegation, and self-healing execution.

## Overview

Workflows are event-driven automations: **when X happens, do Y**. They're defined as directed graphs of nodes (triggers, actions, conditions) connected by edges. You can build them four ways:

1. **Chat** — tell JARVIS in the main chat: *"Create a workflow that checks my email every hour and sends a Telegram summary"*
2. **Visual builder** — drag-and-drop node graph in the dashboard
3. **AI sidebar** — describe what you want in the canvas AI chat panel
4. **API** — create programmatically via REST endpoints

## Chat-Driven Creation

The simplest way to create workflows is to ask JARVIS directly in chat. The `manage_workflow` tool is available to the primary agent and supports these actions:

| Action | Example |
|--------|---------|
| **create** | *"Create a workflow that monitors my project folder and runs tests on changes"* |
| **list** | *"List my workflows"* |
| **run** | *"Run the daily standup workflow"* |
| **describe** | *"Describe workflow X"* |
| **enable/disable** | *"Disable the email checker workflow"* |
| **delete** | *"Delete the test workflow"* |

JARVIS uses the NL builder to parse your description into a full workflow definition — picking the right triggers, actions, logic nodes, and wiring them together. The workflow appears immediately in the Workflows dashboard.

## Dashboard

Navigate to **Workflows** in the sidebar. The workflow list shows all your automations with status, execution count, and quick actions (run, pause, delete).

Click a workflow to open the **canvas editor**:

- **Left panel** — Node Palette: draggable nodes organized by category (collapsible)
- **Center** — ReactFlow canvas: visual node graph with connections
- **Right panel** — tabbed: Config (node properties), Executions (real-time monitoring), Versions (history + diff), AI (NL chat assistant) (collapsible)

Both side panels collapse to thin strips for maximum canvas space.

## Node Library (50+ nodes)

### Triggers (11)
| Node | Description |
|------|-------------|
| `trigger.cron` | Cron schedule (e.g., `0 9 * * *` for daily at 9am) |
| `trigger.webhook` | Inbound HTTP endpoint with optional HMAC validation |
| `trigger.poll` | HTTP polling with deduplication |
| `trigger.manual` | Manual execution via API or dashboard |
| `trigger.file_change` | File system changes (create/modify/delete) |
| `trigger.clipboard` | Clipboard content changes |
| `trigger.process` | Process start/stop events |
| `trigger.email` | Email received |
| `trigger.calendar` | Calendar events |
| `trigger.screen` | Screen context changes (from Awareness) |
| `trigger.git` | Git push/commit events |

### Actions (12)
| Node | Description |
|------|-------------|
| `action.send_message` | Send a chat message |
| `action.run_tool` | Execute any registered tool |
| `action.agent_task` | Spawn a sub-agent for complex reasoning |
| `action.http_request` | HTTP request with full config |
| `action.file_write` | Write content to a file |
| `action.notification` | Send desktop/channel notification |
| `action.gmail` | Send email via Gmail |
| `action.calendar_action` | Create/update calendar events |
| `action.telegram` | Send Telegram message |
| `action.discord` | Send Discord message |
| `action.shell_command` | Execute shell commands |
| `action.code_execution` | Run JavaScript code |

### Logic (9)
| Node | Description |
|------|-------------|
| `logic.if_else` | Conditional branching (true/false outputs) |
| `logic.switch` | Multi-way branching |
| `logic.loop` | Iterate over arrays |
| `logic.delay` | Wait for a duration |
| `logic.merge` | Combine multiple inputs |
| `logic.race` | First-to-complete wins (parallel race) |
| `logic.variable_set` | Set a variable |
| `logic.variable_get` | Read a variable |
| `logic.template_render` | Render a template string |

### Transform (5)
| Node | Description |
|------|-------------|
| `transform.json_parse` | Parse JSON string |
| `transform.csv_parse` | Parse CSV data |
| `transform.regex_match` | Extract with regex |
| `transform.aggregate` | Sum, average, count, min, max |
| `transform.map_filter` | Map and filter arrays |

### Error Handling (3)
| Node | Description |
|------|-------------|
| `error.error_handler` | Catch errors from upstream nodes |
| `error.retry` | Retry a node with custom policy |
| `error.fallback` | Provide fallback value on failure |

## Template Expressions

Node configs support `{{...}}` template expressions:

```
{{myVariable}}                    — Read a workflow variable
{{$trigger.field}}                — Access trigger data
{{$node["node-id"].data.field}}   — Access another node's output
{{$env.MY_VAR}}                   — Read environment variable
```

## Trigger System

The trigger manager coordinates all background trigger sources:

| Trigger Type | Backend | Description |
|--------------|---------|-------------|
| **Cron** | CronScheduler | Uses cron expressions (`0 9 * * *`). Handles timezone, next-run calculation, graceful stop. |
| **Webhook** | WebhookManager | Registers HTTP endpoints at `/api/webhooks/:id`. Supports GET/POST, optional HMAC signature validation. |
| **Poll** | PollingEngine | Polls HTTP endpoints on configurable intervals. Deduplicates via response hashing. |
| **File** | fs.watch | Watches file paths for create/modify/delete events. |
| **Screen** | ObserverBridge | Connects to the Awareness system. Evaluates screen conditions (text present, app active, LLM visual check). |
| **Clipboard** | Observer | Fires on clipboard content changes. |
| **Process** | Observer | Fires on process start/stop events. |

Triggers are registered automatically when a workflow is enabled and unregistered when disabled or deleted.

## Execution

Workflows execute as a topological sort of the node graph. The engine:

1. Loads the latest version definition
2. Builds a dependency graph via topological sort
3. Executes nodes level-by-level (parallel or sequential, per settings)
4. Each step: collects input → resolves templates → executes → routes output
5. Emits real-time WebSocket events (`step_started`, `step_completed`, `step_failed`)
6. Records execution history with per-step timings and outputs

### Error Handling

Three modes via `onError` setting:
- **stop** — halt workflow on first failure
- **continue** — skip failed node, continue execution
- **self_heal** — after retries exhaust, the AI diagnoses the failure, analyzes node config, and auto-fixes (e.g., corrects a malformed URL, fixes an auth header, adjusts a regex)

Retry policy per node: max retries, delay, backoff (fixed or exponential).

### Self-Healing

When `onError: "self_heal"` is set and a node fails after all retries:

1. The engine sends the error message + node config to the LLM
2. The LLM analyzes the failure and returns a corrected config
3. The node is re-executed with the fixed config
4. If the fix works, the corrected config is persisted for future runs

## Variables

Two scopes:
- **Execution variables** — in-memory, scoped to a single run
- **Persistent variables** — stored in vault, survive across executions

Use `logic.variable_set` / `logic.variable_get` nodes or the Variables API.

## YAML Export/Import

Export workflows as YAML for version control or sharing:

```bash
# Export
curl http://localhost:3142/api/workflows/{id}/export

# Import
curl -X POST http://localhost:3142/api/workflows/import \
  -H "Content-Type: application/json" \
  -d '{"yaml": "..."}'
```

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/workflows` | List all workflows |
| POST | `/api/workflows` | Create workflow |
| GET | `/api/workflows/:id` | Get workflow |
| PATCH | `/api/workflows/:id` | Update workflow |
| DELETE | `/api/workflows/:id` | Delete workflow |
| GET | `/api/workflows/:id/versions` | Version history |
| POST | `/api/workflows/:id/versions` | Create version |
| POST | `/api/workflows/:id/execute` | Run workflow |
| GET | `/api/workflows/:id/executions` | Execution history |
| GET/PATCH | `/api/workflows/:id/variables` | Persistent variables |
| GET | `/api/workflows/:id/export` | YAML export |
| POST | `/api/workflows/import` | YAML import |
| GET | `/api/workflows/nodes` | Node catalog |
| POST | `/api/workflows/nl-chat` | NL builder chat |
| GET | `/api/workflows/suggest` | Auto-suggestions |
| POST/GET | `/api/webhooks/:id` | Inbound webhooks |

## Auto-Suggestions

JARVIS analyzes your behavior patterns (from the Awareness system) and suggests workflows you haven't thought of:

- **Repeated app switches** — detected copy-paste patterns between apps (e.g., "You switch between Chrome and VS Code 15 times/day")
- **Recurring errors** — same app failing repeatedly (e.g., "Docker has had 7 errors today — set up auto-restart?")
- **Scheduled behavior** — actions you do at the same time daily (e.g., "You check Slack at 9am every day — automate your morning routine?")
- **Complex patterns** — AI-analyzed behavioral trends across 100+ events

Suggestions appear in the dashboard with preview definitions you can accept with one click or dismiss. The suggestion engine respects a 5-minute cooldown between analyses and maintains the last 500 events in memory.

## Examples

### Daily standup report
```
"Every morning at 9am, summarize my GitHub PRs, check for
urgent issues, and post a summary to Slack. If anything is
critical, also send me a Telegram alert."
```

### Auto-test on file change
```
"When any file in ~/projects/myapp/src changes, run the
test suite. If tests fail, send me a notification with
the error output."
```

### Email digest
```
"Every hour, check my Gmail for new emails. Summarize
them and send me a Telegram message with the digest."
```

### Screen-triggered workflow
```
"When I have VS Code open and the terminal shows a build
error, automatically research the error and suggest a fix."
```

## Video Tutorial Placeholder

> Video tutorial placeholder: creating workflows from chat and from the visual builder.

Add your future video link here.
