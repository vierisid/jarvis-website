---
title: Sidecar Enrollment
description: Enroll remote sidecars safely, choose the right brain URL, and understand how JARVIS stamps connection details into the enrollment JWT.
---

Use this page when the JARVIS daemon and the machine you want to control are not the same host.

If you want a feature overview first, read [Desktop Control](/docs/desktop-control). This page is the operator-facing guide for the enrollment flow itself.

## What Enrollment Actually Does

When you enroll a sidecar from the dashboard, JARVIS creates a JWT for that machine. That token tells the sidecar:

- which WebSocket endpoint to connect to
- which JWKS endpoint to use to verify the token signature
- which sidecar identity it is enrolling as

That makes the brain URL a trust boundary, not just a convenience field.

The URL stamped into the token **must be reachable from the sidecar machine**. If it is wrong, the sidecar may fail before it ever shows up as online.

## URL Precedence

JARVIS resolves the brain URL for enrollment in this order:

| Source | Scope | When to use it |
|---|---|---|
| `brain_url` in the dashboard enrollment form | One sidecar | Temporary exception or a special network path for one machine |
| `JARVIS_BRAIN_DOMAIN` | Operator-wide | Best for Docker, CI, systemd, or hosted deployments |
| `daemon.brain_domain` in `~/.jarvis/config.yaml` | Operator-wide | Best for stable manual configuration |
| Current request host / forwarded headers | Fallback only | Fine for local setups where the sidecar can truly reach that same origin |

The preferred long-term controls are:

- `daemon.brain_domain`
- `JARVIS_BRAIN_DOMAIN`

Use `brain_url` only when one enrollment must override the normal operator-wide address.

## Why Wrong Values Fail

The enrollment token carries two important URLs:

- a `brain` WebSocket URL such as `wss://jarvis.example.com/sidecar/connect`
- a `jwks` URL such as `https://jarvis.example.com/api/sidecars/.well-known/jwks.json`

Wrong values usually fail in one of two ways:

1. **JWT/JWKS verification failure**  
   The sidecar cannot fetch the JWKS URL, so it cannot verify the enrollment token.

2. **Connection failure after verification**  
   The token verifies, but the sidecar still cannot reach the WebSocket endpoint in the `brain` claim.

Common causes:

- `localhost` was stamped into the token for a remote machine
- a reverse proxy hostname was never configured in `brain_domain`
- the wrong port or scheme was used
- the sidecar machine cannot resolve the hostname
- TLS terminates at a proxy, but the public origin in the token does not match the real external entrypoint

## Step 1: Pick the Reachable Origin

Ask a simple question before you enroll:

> From the sidecar machine, what URL can actually reach the JARVIS daemon?

That answer should become your brain URL.

### Localhost Example

Use this only when the sidecar and daemon are on the same machine:

```yaml
daemon:
  port: 3142
```

Result: JARVIS can safely fall back to `http://localhost:3142`.

### VPS or Reverse Proxy Example

If the daemon runs on a VPS and sidecars connect from laptops or desktops:

```yaml
daemon:
  port: 3142
  brain_domain: "https://jarvis.example.com"
```

Result:

- WebSocket URL in the token becomes `wss://jarvis.example.com/sidecar/connect`
- JWKS URL becomes `https://jarvis.example.com/api/sidecars/.well-known/jwks.json`

### Docker or Container Example

If JARVIS runs inside Docker, do **not** assume `localhost` means your laptop or host network.

Set the external origin explicitly:

```bash
export JARVIS_BRAIN_DOMAIN=https://jarvis.example.com
export JARVIS_PORT=3142
jarvis start
```

Or in a compose or service environment:

```yaml
environment:
  JARVIS_BRAIN_DOMAIN: "https://jarvis.example.com"
  JARVIS_AUTH_TOKEN: "change-me"
```

### Remote Sidecar / Special Override Example

If most machines should use `https://jarvis.example.com`, but one remote sidecar needs a Tailscale or tunnel URL, enter it in the dashboard during enrollment:

```text
brain_url = https://jarvis.tailnet.example
```

That override affects only that one enrollment token.

## Step 2: Set the Operator-Wide Default

For most operators, this is the right baseline:

```yaml
daemon:
  port: 3142
  brain_domain: "https://jarvis.example.com"

auth:
  token: "set-a-real-secret-before-public-exposure"
```

Or with environment variables:

```bash
JARVIS_BRAIN_DOMAIN=https://jarvis.example.com \
JARVIS_AUTH_TOKEN=change-me \
jarvis start
```

Why this is preferred:

- every new sidecar enrollment gets the same trusted public origin
- reverse proxies and TLS termination stay consistent
- you do not depend on whatever host header happened to reach the dashboard

See [Configuration](/docs/configuration), [Config Reference](/docs/config-reference), and [Deployment Guide](/docs/deployment-guide) for broader setup patterns.

## Step 3: Enroll from the Dashboard

1. Open the dashboard.
2. Go to **Settings** → **Sidecar**.
3. Enter a machine name.
4. Leave the optional brain URL blank unless this one sidecar needs an override.
5. Click **Enroll**.
6. Copy the generated command.

If you need a tour of the UI, read [Dashboard](/docs/dashboard) and [Settings Reference](/docs/settings-reference).

## Step 4: Run the Sidecar on the Target Machine

Install the sidecar:

```bash
bun install -g @usejarvis/sidecar
```

Then run the copied token command once:

```bash
jarvis-sidecar --token <your-enrollment-token>
```

After the first successful enrollment, future launches are usually just:

```bash
jarvis-sidecar
```

The sidecar stores its local config in `~/.jarvis-sidecar/config.yaml`.

## Concrete Deployment Patterns

### 1. Everything on One Laptop

- daemon runs locally
- sidecar also runs locally
- dashboard opened at `http://localhost:3142`

Good default:

```yaml
daemon:
  port: 3142
```

### 2. Brain on a VPS, Sidecar on Your Laptop

- daemon runs on a VPS
- dashboard is exposed at `https://jarvis.example.com`
- sidecar runs on your laptop

Use:

```yaml
daemon:
  brain_domain: "https://jarvis.example.com"
```

### 3. Brain in Docker, Sidecar on the Host or Another Machine

- daemon runs in a container
- public access comes through a host port, reverse proxy, or tunnel

Use the externally reachable origin, not the container-local one:

```bash
JARVIS_BRAIN_DOMAIN=https://jarvis.example.com
```

Do **not** stamp `http://localhost:3142` into the token unless the sidecar is inside that same network namespace and can actually use it.

### 4. One-Off Remote Machine Behind a Different Route

- normal fleet uses `https://jarvis.example.com`
- one machine must connect through a different hostname or tunnel

Use the dashboard `brain_url` field for that one enrollment, then keep the global default unchanged.

## Troubleshooting

### The sidecar says the token is invalid

Check:

- the token has not expired or been replaced
- the sidecar can reach the `jwks` URL embedded in the token
- the `brain_domain` or `brain_url` value matches the network path the sidecar actually uses

### The sidecar verifies the token but never comes online

Check:

- the machine can reach the WebSocket endpoint
- reverse proxy rules forward WebSocket upgrades
- firewalls allow the public port
- DNS resolves correctly from the sidecar machine

### `localhost` works in the browser but not on the remote machine

This is expected. `localhost` always means the current machine, not the machine where the daemon lives.

For remote sidecars, switch to:

- a real hostname
- a LAN IP
- a VPN or Tailscale address
- a reverse-proxied public URL

### I am enrolling through the dashboard on one URL but need the sidecar to use another

That is exactly what the optional `brain_url` field is for. Use it only for that enrollment.

## Recommended Operator Checklist

- Set `auth.token` before public exposure
- Set `daemon.brain_domain` or `JARVIS_BRAIN_DOMAIN` for hosted setups
- Make sure the chosen hostname resolves from the sidecar machine
- Confirm your reverse proxy forwards WebSocket traffic
- Re-enroll sidecars after changing the trusted public origin

## Next Steps

- [Desktop Control](/docs/desktop-control)
- [Settings Reference](/docs/settings-reference)
- [Deployment Guide](/docs/deployment-guide)
- [Config Reference](/docs/config-reference)
- [FAQ](/docs/faq)
