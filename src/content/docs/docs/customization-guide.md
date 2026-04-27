---
title: Customization Guide
description: Customize JARVIS behavior through roles, personality, authority, channels, and deployment-aware configuration.
---

JARVIS is opinionated, but it is not locked down. You can change how it sounds, what it prioritizes, how proactive it is, which tools it can use, and which role definitions drive the main agent.

This guide focuses on supported customization surfaces without changing the product code itself.

## The Main Customization Layers

Think about customization in four layers:

1. **Dashboard settings** for day-to-day tuning
2. **`~/.jarvis/config.yaml`** for reproducible runtime behavior
3. **Role files** for deep agent behavior changes
4. **Authority rules** for what JARVIS is allowed to do

Start with [Settings Reference](/docs/settings-reference) if you want a UI-first walkthrough.

## Easy Wins in `config.yaml`

Many useful changes do not require custom role files.

### Assistant name and core traits

```yaml
personality:
  assistant_name: "Jarvis"
  core_traits:
    - "loyal"
    - "efficient"
    - "proactive"
    - "calm"
```

### Active role

```yaml
active_role: "personal-assistant"
```

### Authority defaults

```yaml
authority:
  default_level: 3
  governed_categories:
    - send_email
    - send_message
    - make_payment
```

These three levers alone change a lot about how JARVIS behaves. See [Configuration](/docs/configuration) and [Authority & Safety](/docs/authority).

## What the Dashboard Is Best At

The dashboard is ideal for:

- checking the active role and tool access
- reviewing heartbeat cadence
- editing durable user context
- adjusting providers, channels, and voice
- enrolling sidecars and managing machine-specific configuration

The dashboard is not the best source of truth for:

- long-lived deployment configuration
- version-controlled infrastructure config
- custom role authoring

## Custom Roles

The deepest supported customization surface is the role system.

Current runtime behavior looks for role files under locations such as:

- `roles/<role-name>.yaml`
- `config/roles/<role-name>.yaml`

If you are running from a source checkout, the built-in examples live under the daemon's `roles/` directory.

## What a Role Controls

A role defines:

- name and description
- responsibilities
- autonomous actions
- approval-required actions
- KPIs
- communication style
- heartbeat instructions
- sub-roles
- tool access
- authority level

## Example Role File

Start by copying an existing role and editing it. A minimal custom role might look like this:

```yaml
id: operations-assistant
name: Operations Assistant
description: |
  You are an operations-focused JARVIS role. You optimize for uptime, clean runbooks,
  and safe execution on hosted systems.

responsibilities:
  - Track deployment health
  - Summarize logs and incidents
  - Draft runbooks and postmortems

autonomous_actions:
  - Read logs and status outputs
  - Summarize incidents
  - Update docs and runbooks

approval_required:
  - Install software
  - Delete data
  - Modify production credentials

kpis:
  - name: Incident Triage
    metric: time_to_summary
    target: "< 10 minutes"
    check_interval: per_task

communication_style:
  tone: calm and operational
  verbosity: concise
  formality: adaptive

heartbeat_instructions: |
  Focus on uptime, stale alerts, and actionable summaries. Avoid noisy check-ins.

sub_roles: []

tools:
  - terminal
  - file-ops

authority_level: 4
```

After saving the role file, set it active:

```yaml
active_role: "operations-assistant"
```

Then restart the daemon.

## Customization Principles That Age Well

### 1. Keep authority lower than your confidence level

If a role only needs to read and summarize, do not give it a high authority level. Keep approval boundaries explicit.

### 2. Match tools to responsibility

Tool lists should reflect the job:

- research-heavy roles need browser and reading tools
- ops-heavy roles need terminal and file access
- writing-heavy roles can stay more constrained

### 3. Make heartbeat instructions specific

Weak:

```text
Be helpful.
```

Better:

```text
Review pending tasks, recent incidents, and overdue follow-ups. Only surface changes that need action.
```

### 4. Optimize for repeatability

If the change matters in production, put it in config or role files, not only in transient UI actions.

## Personality Tuning Without a New Role

Not every customization needs a new role.

If you mostly like the current role, tune:

- `personality.assistant_name`
- `personality.core_traits`
- `authority.default_level`
- heartbeat settings
- provider mix and voice settings

This is often enough for:

- making JARVIS more concise
- making it less proactive
- changing the preferred provider stack
- changing how much it can do without asking

## Role-Specific Authority Overrides

Authority rules can target specific roles:

```yaml
authority:
  overrides:
    - action: delete_files
      role_id: researcher
      allowed: false
```

This is useful when you want one specialist to stay strictly read-only even though the main agent is more capable.

## Multi-Agent Customization

If you want different specialist behavior, look at:

- the active role's `sub_roles`
- the specialist role files the active role delegates to

The current role system is file-backed, so the cleanest path is:

1. copy an existing role
2. narrow or expand its scope
3. adjust tool access and authority
4. restart the daemon
5. test with safe prompts

See [Multi-Agent System](/docs/multi-agent) for the delegation model.

## Deployment-Aware Customization

Some customization is really deployment configuration:

- `daemon.brain_domain`
- `auth.token`
- provider URLs
- channel tokens
- sidecar enrollment routes

Keep those in config or environment variables, especially on servers and Docker deployments. See [Deployment Guide](/docs/deployment-guide).

## Testing Changes Safely

After changing roles or major settings:

1. restart the daemon
2. ask a low-risk task first
3. inspect the dashboard for role, tool, and sidecar state
4. verify authority prompts still appear where expected
5. re-enroll sidecars only if their trusted public origin changed

## Common Mistakes

- creating a role with too many tools
- raising authority just to make a task easier
- changing deployment-sensitive URLs from the dashboard without thinking about remote reachability
- assuming `localhost` means the same thing on every machine
- forgetting to restart after role file changes

## Next Steps

- [Settings Reference](/docs/settings-reference)
- [Authority & Safety](/docs/authority)
- [Configuration](/docs/configuration)
- [Deployment Guide](/docs/deployment-guide)
- [FAQ](/docs/faq)
