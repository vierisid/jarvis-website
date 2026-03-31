---
title: Autostart
description: Run JARVIS as a background service with systemd or launchd so it starts automatically.
---

JARVIS supports autostart/background-service installation on:

- Linux via `systemd --user`
- macOS via `launchd`

The onboarding wizard can help with startup-related setup, but this page is the manual reference.

## Why Use Autostart

Autostart is useful when:

- You run JARVIS on your daily machine and want it available after reboot
- You host it on a home server and want it to come back automatically
- You do not want to manually open a shell and run `jarvis start` every time

## Linux: `systemd --user`

Create this file:

```text
~/.config/systemd/user/jarvis.service
```

Example unit:

```ini
[Unit]
Description=J.A.R.V.I.S. Daemon
After=network.target

[Service]
Type=simple
ExecStart=%h/.bun/bin/jarvis start --foreground
Restart=on-failure
RestartSec=5
Environment=HOME=%h

[Install]
WantedBy=default.target
```

Then enable it:

```bash
systemctl --user daemon-reload
systemctl --user enable jarvis.service
systemctl --user start jarvis.service
```

Useful commands:

```bash
systemctl --user status jarvis.service
journalctl --user -u jarvis.service -f
```

### Boot Before Login

If you want user services to continue even when you are not logged in:

```bash
loginctl enable-linger "$USER"
```

## macOS: `launchd`

If you installed JARVIS with the recommended global package command, prefer launching the global `jarvis` executable directly.

Create:

```text
~/Library/LaunchAgents/ai.jarvis.daemon.plist
```

Example plist:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>ai.jarvis.daemon</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/your-user/.bun/bin/jarvis</string>
    <string>start</string>
    <string>--foreground</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
</dict>
</plist>
```

Then load it:

```bash
launchctl load ~/Library/LaunchAgents/ai.jarvis.daemon.plist
launchctl start ai.jarvis.daemon
```

### Source Checkout Variant

If you installed JARVIS from a source checkout instead of the global package, the launchd command should point at your checked-out CLI entrypoint instead:

```xml
<key>ProgramArguments</key>
<array>
  <string>/Users/your-user/.bun/bin/bun</string>
  <string>/path/to/jarvis/bin/jarvis.ts</string>
  <string>start</string>
  <string>--foreground</string>
</array>
```

Use this variant only if you followed the manual repository install path from [Installation](/docs/installation).

## Operational Advice

If you use autostart:

- Make sure your config is valid before enabling it
- Verify the dashboard is reachable after reboot
- Check logs first if the service appears to start but the dashboard is unavailable

## Video Tutorial Placeholder

> Video tutorial placeholder: setting up JARVIS as a background service on Linux and macOS.

Add your future video link here.
