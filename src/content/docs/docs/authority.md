---
title: Authority & Safety
description: Control what JARVIS can do autonomously and what requires your approval.
---

The authority system controls how much autonomy JARVIS has. It determines which actions the agent can take on its own, which require your approval, and which are blocked entirely. Authority is enforced at every level — the primary agent, sub-agents, and workflows all respect the same rules.

## Authority Levels

Authority is set on a scale from 1 to 10:

| Level | Name | Description |
|---|---|---|
| 1 | Read-only | Can read files, browse the web, answer questions. Cannot modify anything. |
| 2 | Suggest | Can suggest actions but must get approval for all writes. |
| 3 | Conservative | Can write files, run safe shell commands. Asks for anything external. **(Default)** |
| 4 | Moderate | Can send messages on your behalf with approval. |
| 5 | Capable | Can send messages, manage calendar, interact with APIs. |
| 6 | Autonomous | Can delete files, execute arbitrary shell commands. |
| 7 | Trusted | Can make purchases under a configured limit. |
| 8 | High trust | Can manage accounts and credentials. |
| 9 | Near-full | Can take almost any action. Very few guardrails. |
| 10 | Full autonomy | No restrictions. The agent acts without asking. |

Set your level in `~/.jarvis/config.yaml`:

```yaml
authority:
  default_level: 3
```

Or via the onboarding wizard:

```bash
jarvis onboard
```

## Governed Actions

Certain action categories are always checked against the authority system, regardless of the overall level:

```yaml
authority:
  governed_categories:
    - send_email
    - send_message
    - make_payment
    - delete_files
    - execute_shell
    - modify_config
    - access_credentials
```

Each governed action has a minimum authority level. If the agent's level is below the threshold, the action is blocked or requires approval.

## Decision Order

When the agent attempts an action, the authority engine evaluates in this order:

1. **Emergency state** — if `paused` or `killed`, block everything
2. **Context rules** — time-based, tool-specific, or always-on rules
3. **Per-action overrides** — explicit allow/deny for specific actions
4. **Governed categories** — check the action category against the authority level
5. **Default level** — if nothing else matches, use the default authority level

The first rule that matches determines the outcome.

## Per-Action Overrides

Override the default behavior for specific actions:

```yaml
authority:
  overrides:
    - action: send_email
      allowed: false               # Block entirely, regardless of level

    - action: execute_shell
      requires_approval: true      # Always ask, even at high authority

    - action: delete_files
      role_id: researcher          # Only applies to the researcher sub-agent
      allowed: false
```

## Context Rules

Define rules that apply based on conditions:

```yaml
authority:
  context_rules:
    - id: no-purchases-at-night
      action: make_payment
      condition: time_range
      params:
        start: "22:00"
        end: "06:00"
      effect: deny
      description: "Block payments between 10 PM and 6 AM"

    - id: always-approve-emails
      action: send_email
      condition: always
      effect: require_approval
      description: "Always ask before sending emails"
```

### Condition Types

| Condition | Params | Description |
|---|---|---|
| `time_range` | `start`, `end` (HH:MM) | Matches during the specified time window |
| `tool_name` | `name` (string) | Matches when a specific tool is being used |
| `always` | — | Always matches |

### Effects

| Effect | Description |
|---|---|
| `allow` | Permit the action without asking |
| `deny` | Block the action entirely |
| `require_approval` | Ask the user before proceeding |

## Approval Workflow

When an action requires approval, JARVIS sends a request through your configured channels:

- **Dashboard** — a modal dialog appears with the action details and approve/deny buttons
- **Telegram** — an inline keyboard message with approve/deny buttons
- **Discord** — a reaction-based approval on the notification message

The agent waits for your response before proceeding. If no response is received within the configured timeout, the action is denied by default.

## Learning & Auto-Approve

The authority system learns from your approval patterns:

```yaml
authority:
  learning:
    enabled: true
    suggest_threshold: 5    # After 5 approvals, suggest auto-approve
```

When you approve the same type of action repeatedly, JARVIS suggests adding an auto-approve rule. You can accept or dismiss the suggestion. This gradually reduces approval fatigue for routine actions.

## Emergency Controls

Three emergency states control the agent's overall behavior:

| State | Effect |
|---|---|
| `normal` | Agent operates according to authority rules |
| `paused` | All actions are blocked. The agent can still respond to messages but cannot execute tools. |
| `killed` | Agent is fully stopped. No responses, no actions. |

Set the emergency state:

```yaml
authority:
  emergency_state: normal    # normal | paused | killed
```

Or from the dashboard's System Status panel.

## Sub-Agent Authority

Sub-agents inherit the authority level of the primary agent but can be further restricted:

- A sub-agent can never exceed the primary agent's authority level
- Per-action overrides can target specific roles using the `role_id` field
- The `researcher` role, for example, might be blocked from `delete_files` even if the primary agent has level 6

```yaml
authority:
  overrides:
    - action: delete_files
      role_id: researcher
      allowed: false
    - action: execute_shell
      role_id: coder
      requires_approval: true
```

## Audit Trail

Every authority decision is logged to the SQLite database. The audit trail records:

- What action was attempted
- Which agent/role attempted it
- What the authority decision was (allowed, denied, approval requested)
- Whether the user approved or denied (for approval requests)
- Timestamp

View recent authority decisions from the dashboard under the System Status panel, or query the database directly:

```bash
sqlite3 ~/.jarvis/jarvis.db "SELECT * FROM authority_log ORDER BY created_at DESC LIMIT 20"
```

## Configuration Reference

```yaml
authority:
  default_level: 3                           # 1-10
  governed_categories:
    - send_email
    - send_message
    - make_payment
  overrides: []                              # PerActionOverride[]
  context_rules: []                          # ContextRule[]
  learning:
    enabled: true
    suggest_threshold: 5
  emergency_state: normal                    # normal | paused | killed
```

See [Configuration](/docs/configuration) for the full config file structure.

## Video Tutorial Placeholder

> Video tutorial placeholder: authority levels, approval flow, and emergency controls.

Add your future video link here.
