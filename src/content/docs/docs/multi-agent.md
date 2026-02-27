---
title: Multi-Agent System
description: How JARVIS delegates tasks to specialist sub-agents for parallel and complex workflows.
---

JARVIS runs a hierarchy of AI agents. The primary agent handles your direct requests and, when a task benefits from specialization or parallelism, delegates work to one or more of eleven specialist sub-agents. Sub-agents have their own tool access, context, and iteration limits.

## Architecture

```
Primary Agent (max 25 iterations)
  │
  ├─ delegate_task ──→ Single specialist (synchronous)
  │                     └─ returns result to primary
  │
  └─ manage_agents ──→ Multiple specialists (asynchronous/parallel)
                         ├─ researcher
                         ├─ coder
                         └─ writer
                              └─ all results returned together
```

The primary agent decides when to delegate. It can proceed alone, call one specialist synchronously, or spawn multiple specialists in parallel — depending on the nature of the task.

## Delegation Tools

### `delegate_task`

Delegates a single task to one specialist and waits for the result before continuing. Use this when one agent's output is needed before the primary can proceed.

```
Input:
  role: string         (specialist role name)
  task: string         (full task description)
  context: string      (optional background information)

Returns: string        (specialist's completed output)
```

Example invocation by the primary agent:

```
delegate_task({
  role: "researcher",
  task: "Find the top 3 competitors to Notion launched after 2023",
  context: "User is evaluating productivity tools for a remote team"
})
```

The primary agent pauses until the researcher completes and returns its findings.

### `manage_agents`

Spawns multiple specialists in parallel and collects all results before continuing. Use this when several independent workstreams can run simultaneously.

```
Input:
  agents: array of { role, task, context }

Returns: array of { role, result }
```

Example:

```
manage_agents({
  agents: [
    { role: "researcher", task: "Research current best practices for TypeScript monorepos" },
    { role: "coder",      task: "Write a Bun script to list all workspace packages" },
    { role: "writer",     task: "Draft a one-page overview of monorepo tradeoffs" }
  ]
})
```

All three run concurrently. The primary receives all three results at once and synthesizes them into a final response.

## Specialist Roles

Eleven specialist roles are available. Each has a distinct system prompt and tool configuration optimized for its domain.

| Role | Specialty | Typical tasks |
|---|---|---|
| `researcher` | Web research and information gathering | Find facts, compare options, summarize articles |
| `coder` | Code writing and debugging | Write scripts, fix bugs, generate boilerplate |
| `writer` | Long-form writing and editing | Draft documents, emails, reports, blog posts |
| `analyst` | Data analysis and reasoning | Interpret data, spot trends, build comparisons |
| `planner` | Project planning and task breakdown | Create timelines, decompose goals, prioritize |
| `reviewer` | Quality review and critique | Proofread, audit code, evaluate arguments |
| `summarizer` | Condensing and distilling | Summarize meetings, papers, threads |
| `translator` | Language translation | Translate documents and messages |
| `designer` | UI/UX and visual reasoning | Suggest layouts, describe interfaces |
| `sysadmin` | System and infrastructure tasks | Shell commands, file operations, services |
| `coordinator` | Cross-agent orchestration | Plan and direct multi-step agent workflows |

## Iteration Limits

| Agent type | Max iterations |
|---|---|
| Primary agent | 25 |
| Sub-agent (any role) | 15 |

An iteration is one complete cycle of: generate response → check for tool calls → execute tools → return results → continue. When the limit is reached, the agent returns whatever it has produced so far.

Sub-agents have a lower limit to prevent runaway execution during parallel workloads. If a task requires more than 15 iterations, break it into smaller sub-tasks.

## Message Ephemerality

Tool call messages — the back-and-forth between the agent and its tools — are ephemeral within the current turn. They are used during execution but not persisted to the agent's long-term conversation history. Only the final text output of each turn is stored.

This keeps the conversation history clean and reduces token usage on subsequent turns, while still allowing complex multi-step tool use within a single response.

## Context Isolation

Sub-agents receive:

- Their specialist system prompt
- The task description passed from the primary
- Any optional context provided by the primary
- Their own tool registry

Sub-agents do not have access to the primary agent's full conversation history unless it is explicitly passed as context. This isolation prevents context pollution and keeps sub-agents focused on their specific task.

## AgentTaskManager

The `AgentTaskManager` is the internal component that manages the lifecycle of parallel sub-agent tasks spawned via `manage_agents`. It:

- Creates isolated agent instances for each parallel task
- Tracks task state (pending, running, complete, failed)
- Enforces the 15-iteration limit per sub-agent
- Collects results and errors from all tasks
- Returns aggregated results to the primary when all tasks complete

Failed sub-agents return an error message rather than a result. The primary agent can decide how to handle partial failures.

## Example: Research and Draft Workflow

A request like "Research the state of TypeScript bundlers in 2025 and write a recommendation report" might trigger this flow:

```
Primary agent:
  1. Identify: this needs research + writing
  2. Call manage_agents:
       - researcher: "Survey TypeScript bundlers released or updated in 2024-2025"
       - analyst:    "Compare esbuild, Rollup, Vite, Bun bundler, and Turbopack on speed, ecosystem, config"
  3. Both run in parallel (each up to 15 iterations)
  4. Primary receives both results
  5. Primary calls delegate_task:
       - writer: "Write a 3-page recommendation report using these findings: [research] [analysis]"
  6. Writer returns the draft
  7. Primary streams the final report to you
```

Total wall-clock time: approximately the time of the longest parallel agent, not the sum of all agents.

## Configuration

The multi-agent system is always enabled. There are no configuration keys to turn it on or off. The specialist role definitions live in the daemon source (`src/agents/roles/`) and can be customized by editing the role YAML files — changes take effect immediately on the next daemon restart without recompilation.
