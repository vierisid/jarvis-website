---
title: CLI Commands
description: Complete command-line reference for starting, stopping, debugging, and updating JARVIS.
---

The `jarvis` CLI is the operational entry point for the daemon.

## Command Summary

The current shipped commands are:

- `jarvis start`
- `jarvis stop`
- `jarvis restart`
- `jarvis status`
- `jarvis logs`
- `jarvis update`
- `jarvis onboard`
- `jarvis uninstall`
- `jarvis doctor`
- `jarvis version`
- `jarvis help`

## `jarvis start`

Starts the daemon.

```bash
jarvis start
jarvis start -d
jarvis start --port 8080
jarvis start --no-open
jarvis start --data-dir /srv/jarvis
jarvis start --no-local-tools
```

Flags:

- `-d`, `--detach`: run as a background daemon
- `--port <N>`: override the daemon port
- `--no-open`: do not open the dashboard automatically
- `--data-dir <path>`: override the main data directory
- `--no-local-tools`: disable local tool execution and rely on sidecars only

Notes:

- By default, `jarvis start` runs in the foreground and acquires the daemon lock directly
- `jarvis start -d` or `jarvis start --detach` spawns a background child and writes logs to the daemon log file

## `jarvis stop`

Stops the running daemon gracefully.

```bash
jarvis stop
```

If the process does not exit cleanly, the CLI escalates to a hard kill after a short wait.

## `jarvis restart`

Stops the daemon if it is running, then starts it again.

```bash
jarvis restart
jarvis restart --port 8080
```

## `jarvis status`

Shows whether the daemon is currently running.

```bash
jarvis status
```

When running, it also prints the dashboard URL.

## `jarvis logs`

Shows the daemon log file.

```bash
jarvis logs
jarvis logs -f
jarvis logs -n 200
```

Flags:

- `-f`, `--follow`: follow log output live
- `-n`, `--lines <N>`: number of lines to show

## `jarvis onboard`

Runs the interactive setup wizard.

```bash
jarvis onboard
```

Use this for first-time setup or whenever you want to reconfigure the basics interactively.

## `jarvis doctor`

Runs environment and connectivity checks.

```bash
jarvis doctor
```

Use this when:

- The daemon will not start
- A provider is misbehaving
- The dashboard cannot connect
- You are not sure whether your environment is configured correctly

## `jarvis update`

Updates JARVIS to the latest version.

```bash
jarvis update
```

Behavior depends on how JARVIS was installed. For example, Docker and developer checkouts are handled differently than a Bun global install.

## `jarvis uninstall`

Removes JARVIS from the current machine.

```bash
jarvis uninstall
```

Use this when you want to remove the local daemon install and clean up local data.

## `jarvis version`

Prints the installed version.

```bash
jarvis version
```

## `jarvis help`

Shows built-in help text.

```bash
jarvis help
```

## Common CLI Flows

### First-time setup

```bash
jarvis onboard
jarvis start
```

### Start in background and watch logs

```bash
jarvis start -d
jarvis logs -f
```

### Diagnose a broken setup

```bash
jarvis doctor
jarvis status
jarvis logs -n 200
```

### Run in sidecar-only / hosted mode

```bash
jarvis start --no-local-tools
```

This is useful when the daemon is hosted remotely and machine-level actions should go through enrolled sidecars instead of the daemon host.

## Video Tutorial Placeholder

> Video tutorial placeholder: installing JARVIS and using the CLI end to end.

Add your future video link here.
