---
title: Introduction
description: What JARVIS is, how it is structured, and why it feels different from a typical AI assistant.
---

JARVIS is an always-on AI daemon, not a tab-bound chatbot.

It is designed to keep running in the background, maintain memory over time, watch what is happening across your setup, and act through real tools and connected machines. You can run the daemon locally or on a VPS, keep it alive 24/7, and connect sidecars on other machines so one JARVIS instance can reach your laptop, desktop, and server at the same time.

> **Warning:** JARVIS can control your desktop, filesystem, applications, browsers, and online accounts. Treat it like giving a trusted human remote access to your machines.
>
> Read these first:
>
> - [Disclaimer & Liability](/docs/disclaimer)
> - [Authority & Safety](/docs/authority)

## Read This Before You Deploy It

JARVIS is not a toy chatbot. It can be given access to files, terminals, browsers, messaging channels, and remote machines.

Before you expose it over the network, connect real accounts, or raise its autonomy level, review:

- [Disclaimer & Liability](/docs/disclaimer)
- [Authority & Safety](/docs/authority)

## What Makes It Different

Most AI products are request/response systems. You open a UI, ask something, and the model disappears until the next prompt.

JARVIS is built around a different operating model:

- A persistent daemon that keeps state and stays online
- A web dashboard served directly by the daemon
- A memory vault backed by SQLite
- Tool use, browser control, workflow execution, and delegated sub-agents
- Authority rules that gate risky actions at runtime
- Optional sidecars that give JARVIS desktop, browser, terminal, filesystem, and screenshot access on additional machines

## High-Level Architecture

At a high level, JARVIS has three layers:

1. The daemon
2. The dashboard
3. Optional sidecars

### The Daemon

The daemon is the brain. It owns:

- LLM routing and fallback providers
- Conversation history and persistent memory
- The tool execution loop
- Multi-agent delegation
- The authority engine and approval system
- Workflows, goals, awareness, and background services
- The HTTP and WebSocket server that powers the dashboard

### The Dashboard

The dashboard is the control surface. It exposes the main product areas:

- Dashboard
- Chat
- Goals
- Workflows
- Sites
- Agents
- Tasks
- Authority
- Memory
- Pipeline
- Calendar
- Knowledge
- Command
- Awareness
- Settings

### Sidecars

Sidecars are how JARVIS reaches other machines. Each sidecar connects back to the daemon and exposes capabilities from that host, such as:

- Desktop automation
- Browser automation
- Terminal access
- Filesystem access
- Clipboard
- Screenshots and awareness capture

This lets you keep JARVIS running on an always-on server while still giving it hands and eyes on the machines you actually use.

## Core Product Areas

The current product centers around these capability groups:

- Conversational agent with streaming responses and tool use
- Persistent memory and knowledge extraction
- Browser and desktop control
- Voice input and streaming TTS
- Multi-agent delegation
- Continuous awareness and proactive suggestions
- Workflow automation
- Goal tracking and accountability

## Before You Start

If you are new to JARVIS, read these next:

1. [Installation](/docs/installation)
2. [Quick Start](/docs/quickstart)
3. [Configuration](/docs/configuration)
4. [Authority & Safety](/docs/authority)
5. [Disclaimer & Liability](/docs/disclaimer)

If you already have it running, the best orientation pages are:

- [Dashboard](/docs/dashboard)
- [CLI Commands](/docs/cli)
- [Authority & Safety](/docs/authority)
- [Troubleshooting](/docs/troubleshooting)
