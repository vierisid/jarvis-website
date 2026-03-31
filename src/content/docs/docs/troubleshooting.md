---
title: Troubleshooting
description: Common startup, networking, Docker, provider, sidecar, and dashboard issues, with concrete fixes.
---

If something feels wrong, start here:

```bash
jarvis doctor
jarvis status
jarvis logs -n 200
```

Those three commands solve a large percentage of first-line debugging.

## Daemon Does Not Start

Symptoms:

- `jarvis start` exits immediately
- `jarvis status` stays stopped
- nothing opens on port `3142`

What to check:

1. Port already in use:

```bash
lsof -i :3142
```

2. Broken config or missing provider credentials:

```bash
jarvis doctor
```

3. Read logs:

```bash
jarvis logs -f
```

## Dashboard Shows Disconnected

Symptoms:

- The UI loads but the sidebar says disconnected
- chat does not stream

Likely causes:

- The daemon is not actually running
- You opened the wrong host or port
- A reverse proxy is not forwarding WebSocket upgrades
- Auth token/cookie handling is wrong

If you use Nginx or another proxy, make sure `/ws` is upgraded correctly.

## Browser Tools Do Not Work

Symptoms:

- JARVIS says it cannot use the browser
- navigation tasks fail

Check:

- Chrome or Chromium is installed
- The daemon can launch the browser on the host where it is running
- You are not assuming the VPS can control a browser on your laptop without a sidecar

## Sidecar Does Not Connect

Symptoms:

- desktop or filesystem actions fail
- the Sidecar settings area never shows the machine online

Check:

- The sidecar token is correct
- The sidecar can reach the daemon over the network
- Firewalls are not blocking the connection
- The daemon host/port is reachable from the sidecar machine

## The "Can Your Computer Reach This URL?" Error

This is one of the most common remote-hosting mistakes and it affects Ollama, local Whisper endpoints, and any other service URL you configure.

### Why It Happens

People often host JARVIS on one machine but leave provider endpoints set to `localhost`, for example:

```yaml
llm:
  ollama:
    base_url: "http://localhost:11434"

stt:
  provider: "local"
  local:
    endpoint: "http://localhost:8000"
```

That only works if:

- JARVIS is running on the same machine as Ollama or Whisper

If JARVIS runs on a VPS and Ollama runs on your desktop, then `localhost` means:

- the VPS itself

not:

- your desktop
- your browser
- your laptop

So the daemon tries to connect to a service that does not exist on the VPS and you get reachability failures.

### How to Fix It

Use a URL the daemon can actually reach:

- a LAN IP like `http://192.168.1.50:11434`
- a Tailscale address
- a reverse-proxied hostname
- a public/private server IP if your network model allows it

Example:

```yaml
llm:
  ollama:
    base_url: "http://192.168.1.50:11434"
```

or:

```yaml
stt:
  provider: "local"
  local:
    endpoint: "https://whisper.example.com"
    server_type: "openai_compatible"
```

### Reverse Proxy Option

If the service should stay on another machine, put a reverse proxy in front of it and point JARVIS at that stable hostname instead of `localhost`.

Example pattern:

- Ollama host runs locally on `127.0.0.1:11434`
- Nginx or Caddy exposes it at `https://ollama.example.com`
- JARVIS config uses `https://ollama.example.com`

This works because the daemon can resolve and reach that hostname over the network.

### Security Warning

Do not expose Ollama or a local Whisper server publicly without authentication and network controls. If you reverse proxy them, secure the endpoint deliberately.

## Docker-Specific Problems

### "It Works on the Host but Not in Docker"

Inside Docker, `localhost` means the container, not the host machine.

That affects:

- Ollama
- local Whisper
- any side service the daemon is trying to call

### Fix Options

Option 1: run the dependency in another reachable container/network and use its container name or service hostname.

Option 2: point the daemon at the host machine's reachable IP instead of `localhost`.

Option 3: expose the dependency through a reverse proxy hostname and use that URL.

### Desktop/Browser Limitation in Docker

The containerized daemon does not magically gain full control of your host desktop/browser environment. Use sidecars on the target machines for real desktop/browser reach.

## Ollama-Specific Problems

### JARVIS Cannot Reach Ollama

Check:

- Ollama is actually running
- the configured `base_url` is reachable from the daemon machine
- the model exists locally

Useful checks:

```bash
curl http://localhost:11434/api/tags
ollama list
```

Replace `localhost` with the actual address JARVIS should use.

## Local Whisper / STT Problems

### Local STT Endpoint Fails

Check:

- endpoint is reachable from the daemon machine
- `server_type` matches the server you are using
- the endpoint path is correct for that server implementation

If the daemon is remote and Whisper is local to your laptop, do not leave the endpoint as `localhost` unless the daemon is running on that same laptop.

## Reverse Proxy Checklist

If you host the dashboard or related services behind a proxy:

- forward the daemon port correctly
- forward WebSocket upgrades for `/ws`
- verify the host the browser sees matches the host your deployment expects
- preserve cookies/auth headers where needed

## If You Still Cannot Fix It

Collect these before asking for help:

```bash
jarvis status
jarvis doctor
jarvis logs -n 200
```

And include:

- where the daemon runs
- where Ollama/Whisper runs
- whether Docker is involved
- whether a reverse proxy is involved
- the exact configured URL

## Community

If you want another set of eyes, use the Discord server:

- https://discord.gg/C8fUM33mc
