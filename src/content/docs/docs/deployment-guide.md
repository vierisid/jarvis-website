---
title: Deployment Guide
description: Deploy JARVIS locally, on a VPS, or in Docker with the right auth, reverse proxy, sidecar routing, and operational safeguards.
---

This guide is for operators who want JARVIS to stay online reliably.

If you are installing for the first time, read [Installation](/docs/installation) and [Quick Start](/docs/quickstart) first. Come back here when you are choosing a long-running deployment pattern.

## Deployment Checklist

Before you expose JARVIS beyond your own machine:

- set `auth.token` or `JARVIS_AUTH_TOKEN`
- decide the public origin the daemon should advertise to sidecars
- set `daemon.brain_domain` or `JARVIS_BRAIN_DOMAIN` for hosted setups
- verify your provider URLs are reachable from the daemon host
- make sure your reverse proxy forwards WebSocket traffic
- review [Authority & Safety](/docs/authority)

## Choose a Deployment Pattern

### Local Workstation

Best when:

- you are evaluating JARVIS
- the daemon and most tools live on one machine
- you do not need 24/7 uptime

Key tradeoff:

- JARVIS is only online while that machine is awake

### Home Server or VPS

Best when:

- you want 24/7 availability
- one daemon should coordinate multiple machines
- sidecars will run on laptops or desktops elsewhere

Key tradeoffs:

- you must think about auth, TLS, reverse proxying, and the public origin used for sidecar enrollment

### Docker

Best when:

- you want repeatable packaging
- you already operate container workloads
- you want env-driven deployments

Key tradeoffs:

- container-local networking can break `localhost` assumptions
- desktop and browser control still happen on sidecars, not magically inside the container

## Baseline Hosted Configuration

For most hosted deployments, start with something like this:

```yaml
daemon:
  port: 3142
  brain_domain: "https://jarvis.example.com"

auth:
  token: "replace-this-with-a-real-secret"

llm:
  primary: "anthropic"
  fallback: ["openai", "ollama"]
```

Why these values matter:

- `auth.token` protects the dashboard and API
- `brain_domain` controls what URL gets stamped into sidecar enrollment JWTs
- provider URLs and credentials determine whether the daemon can do useful work after boot

See [Sidecar Enrollment](/docs/sidecar-enrollment) for the brain URL trust model.

## Environment Variable Deployments

These env vars are especially useful for hosted systems:

- `JARVIS_PORT`
- `JARVIS_HOME`
- `JARVIS_AUTH_TOKEN`
- `JARVIS_BRAIN_DOMAIN`
- provider env vars such as `JARVIS_API_KEY`, `JARVIS_OPENAI_KEY`, `JARVIS_GROQ_KEY`, or `JARVIS_OLLAMA_URL`

Example:

```bash
JARVIS_PORT=3142 \
JARVIS_AUTH_TOKEN=change-me \
JARVIS_BRAIN_DOMAIN=https://jarvis.example.com \
JARVIS_API_KEY=sk-ant-... \
jarvis start
```

For the full supported list, see [Config Reference](/docs/config-reference).

## Reverse Proxying

If you put JARVIS behind Nginx, Caddy, Cloudflare Tunnel, or another proxy, two things matter:

1. normal HTTP traffic must reach the daemon
2. WebSocket upgrades must survive for dashboard and sidecar traffic

### Nginx Example

```nginx
map $http_upgrade $connection_upgrade {
  default upgrade;
  ''      close;
}

server {
  listen 443 ssl http2;
  server_name jarvis.example.com;

  location / {
    proxy_pass http://127.0.0.1:3142;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
  }
}
```

### Caddy Example

```txt
jarvis.example.com {
  reverse_proxy 127.0.0.1:3142
}
```

With either proxy:

- use the same public origin in `daemon.brain_domain`
- verify the dashboard works
- then enroll remote sidecars

## Docker Pattern

A practical container deployment usually combines:

- a mounted data directory
- environment variables for auth and public origin
- a reverse proxy or exposed port

Example:

```bash
docker run -d --name jarvis \
  -p 3142:3142 \
  -v jarvis-data:/data \
  -e JARVIS_PORT=3142 \
  -e JARVIS_AUTH_TOKEN=change-me \
  -e JARVIS_BRAIN_DOMAIN=https://jarvis.example.com \
  ghcr.io/vierisid/jarvis:latest
```

Important rule:

If the daemon runs in Docker but the sidecar runs on your laptop, the token still needs the laptop-reachable public origin, not the container's internal hostname.

## Provider Reachability Rule

The daemon resolves service URLs from its own network location.

That affects:

- `llm.ollama.base_url`
- local STT endpoints
- any other self-hosted dependency you point JARVIS at

If the daemon is on a VPS and the service is on your desktop, `http://localhost:...` almost never works. Use:

- a LAN or VPN IP
- a Tailscale address
- a reverse-proxied hostname
- a reachable container hostname inside the same network

See [Troubleshooting](/docs/troubleshooting) for the most common failure mode.

## Sidecars in Hosted Deployments

Hosted deployments and sidecars are designed to work together, but only if the public origin is stable.

Recommended pattern:

1. deploy the daemon
2. verify the final hostname and TLS termination
3. set `daemon.brain_domain` or `JARVIS_BRAIN_DOMAIN`
4. only then enroll sidecars

If you change the public origin later, re-enroll affected sidecars so their tokens contain the correct URLs.

## Autostart and Service Management

For long-running systems, combine this guide with [Autostart](/docs/autostart).

Typical production routine:

- run JARVIS as a managed service
- keep config and secrets outside ad-hoc shell history
- restart deliberately after config changes
- keep logs accessible

## Monitoring and Backups

Minimum operational hygiene:

- know how to run `jarvis status`
- know where your data directory lives
- back up the SQLite database and config file
- monitor the public dashboard origin and any reverse proxy
- verify sidecars still reconnect after daemon restarts

If you changed `JARVIS_HOME`, remember the database and config will follow that path.

## Security Reminders

- never expose the dashboard publicly without auth
- keep sidecar enrollment limited to machines you trust
- treat provider keys and bot tokens as secrets
- use least privilege for authority and channel access
- do not assume a sidecar makes a remote machine safe by default; it expands JARVIS's reach

## Common Problems

### Dashboard loads but shows disconnected

Usually:

- daemon is down
- proxy is not forwarding WebSocket upgrades
- wrong host or port is in use

### Remote sidecars cannot enroll

Usually:

- `brain_domain` still points to `localhost`
- the public hostname is wrong
- DNS or firewall rules block the machine

### OAuth or channel callbacks fail after moving to a public hostname

Usually:

- callback or public origin assumptions still point at the old local address
- restart or credential re-validation is needed after the move

## Recommended Reading Order

1. [Installation](/docs/installation)
2. [Configuration](/docs/configuration)
3. [Settings Reference](/docs/settings-reference)
4. [Sidecar Enrollment](/docs/sidecar-enrollment)
5. [Troubleshooting](/docs/troubleshooting)
