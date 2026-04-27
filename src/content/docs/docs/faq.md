---
title: FAQ
description: Answers to common JARVIS questions about setup, sidecars, settings, deployment, providers, and safe operation.
---

## Setup

### What is the difference between the daemon and the sidecar?

The daemon is the brain. The sidecar is the machine-level actuator that gives JARVIS access to a specific host's desktop, browser, filesystem, terminal, and screenshots. See [Installation](/docs/installation) and [Desktop Control](/docs/desktop-control).

### Do I need a sidecar?

Not always. If the daemon runs on the same machine you want to control, you may not need a separate sidecar. You do need one when JARVIS should control another machine.

### Where does JARVIS store its config?

By default in:

```text
~/.jarvis/config.yaml
```

See [Configuration](/docs/configuration).

### Where does JARVIS store its data?

By default under `~/.jarvis`, including the SQLite database. See [Config Reference](/docs/config-reference).

### Can I run JARVIS on a VPS?

Yes. That is a common pattern for 24/7 availability. If you also want desktop or browser control on your laptop, enroll a sidecar there. See [Deployment Guide](/docs/deployment-guide).

## Sidecars and Brain URLs

### What does `daemon.brain_domain` do?

It defines the external origin JARVIS stamps into sidecar enrollment JWTs. That origin determines the JWKS URL and WebSocket URL remote sidecars will use.

### What is `JARVIS_BRAIN_DOMAIN`?

It is the environment variable override for `daemon.brain_domain`. It is ideal for Docker, systemd, and hosted deployments.

### What is `brain_url` in the dashboard enrollment form?

It is an optional per-enrollment override for one sidecar. Use it when one machine must connect through a different route than the rest of your fleet.

### Why does the sidecar fail when the token looks valid?

Usually because the URL embedded in the token is not reachable from the sidecar machine. That can break JWKS verification or the final WebSocket connection.

### Can one daemon control multiple sidecars?

Yes. One daemon can coordinate multiple connected machines. See [Desktop Control](/docs/desktop-control).

### When should I re-enroll a sidecar?

After changing the trusted public origin, switching from local to hosted access, revoking the old token, or intentionally changing the machine's `brain_url`.

## Settings and Customization

### Should I change settings in the dashboard or in YAML?

Use the dashboard for day-to-day adjustments and inspection. Use YAML or env vars for reproducible deployment configuration. See [Settings Reference](/docs/settings-reference).

### How do I change the active role?

Set `active_role` in `~/.jarvis/config.yaml`, then restart the daemon. See [Customization Guide](/docs/customization-guide).

### Can I create my own roles?

Yes. JARVIS supports file-backed role definitions. Copy an existing role, adjust its tools, authority, and instructions, then restart. See [Customization Guide](/docs/customization-guide).

### What should I customize first?

Most operators should review:

- `auth.token`
- provider selection
- authority defaults
- heartbeat behavior
- sidecar setup for remote machines

## Providers and Integrations

### Which model provider should I start with?

A common default is Anthropic primary with a small fallback chain. See [LLM Providers](/docs/llm-providers).

### Why does Ollama fail from a VPS?

Because `localhost` means the VPS itself, not your laptop. Point JARVIS at a daemon-reachable URL instead. See [Troubleshooting](/docs/troubleshooting).

### Can I use Telegram and Discord at the same time?

Yes. They are separate channel integrations.

### Do integrations need a restart?

Some do. Channel or OAuth changes often need a restart before the daemon fully activates them. The settings UI usually tells you when that is expected.

## Deployment and Security

### Should I expose the dashboard publicly without auth?

No. Set `auth.token` before exposing JARVIS outside a trusted local environment.

### Do I need a reverse proxy?

Not always, but it is strongly recommended for stable public hostnames, TLS, and cleaner hosted setups.

### What has to work through the reverse proxy?

Both normal HTTP traffic and WebSocket upgrades. This matters for the dashboard and sidecars.

### Can Docker control my host desktop directly?

No. Docker is for hosting the daemon, not replacing sidecars. Use sidecars on the actual target machines.

### What should I back up?

At minimum:

- `~/.jarvis/config.yaml`
- the JARVIS data directory
- the SQLite database

## Troubleshooting

### The dashboard says disconnected. Where do I start?

Run:

```bash
jarvis doctor
jarvis status
jarvis logs -n 200
```

Then check host, port, and reverse-proxy WebSocket forwarding.

### The sidecar never shows online. What should I check?

- token freshness
- reachable brain URL
- reachable JWKS URL
- firewall rules
- reverse-proxy WebSocket support

### A saved setting does not seem to apply. Why?

Possible causes:

- a restart is still needed
- an environment variable is overriding the saved value
- you changed the wrong machine's config in a multi-machine setup

### Where should I go next if I am still stuck?

Start with [Troubleshooting](/docs/troubleshooting), then collect your daemon location, provider location, proxy setup, and exact configured URLs before asking for help.

## See Also

- [Quick Start](/docs/quickstart)
- [Deployment Guide](/docs/deployment-guide)
- [Sidecar Enrollment](/docs/sidecar-enrollment)
- [Config Reference](/docs/config-reference)
