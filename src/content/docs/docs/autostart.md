---
title: Autostart
description: Configure JARVIS to start automatically when your system boots.
---

JARVIS supports autostart on Linux (systemd), macOS (launchd), and Windows/WSL2. Choose the section for your platform below.

The onboarding wizard (`jarvis onboard`) can install the autostart configuration for you automatically. The steps below are for manual setup or customization.

## Linux — systemd

Create a user service unit file at `~/.config/systemd/user/jarvis.service`:

```ini
[Unit]
Description=JARVIS Daemon
After=network.target

[Service]
Type=simple
ExecStart=%h/.bun/bin/jarvis start
Restart=on-failure
RestartSec=5

[Install]
WantedBy=default.target
```

Enable and start the service:

```bash
systemctl --user daemon-reload
systemctl --user enable jarvis
systemctl --user start jarvis
```

Confirm it is running:

```bash
systemctl --user status jarvis
```

To view logs via journald:

```bash
journalctl --user -u jarvis -f
```

**Lingering** — by default, user services only run while you are logged in. To have JARVIS start at boot even before login, enable lingering for your user:

```bash
loginctl enable-linger $USER
```

---

## macOS — launchd

Create a plist file at `~/Library/LaunchAgents/com.jarvis.daemon.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.jarvis.daemon</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/you/.bun/bin/jarvis</string>
    <string>start</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/Users/you/.jarvis/logs/jarvis.log</string>
  <key>StandardErrorPath</key>
  <string>/Users/you/.jarvis/logs/jarvis.error.log</string>
</dict>
</plist>
```

Replace `/Users/you` with your actual home directory path.

Load the service:

```bash
launchctl load ~/Library/LaunchAgents/com.jarvis.daemon.plist
```

To unload (stop autostart):

```bash
launchctl unload ~/Library/LaunchAgents/com.jarvis.daemon.plist
```

---

## Windows / WSL2

### Starting JARVIS (daemon) on WSL boot

Add a boot command to `/etc/wsl.conf` inside your WSL distro:

```ini
# /etc/wsl.conf
[boot]
command = su - your_username -c "jarvis start -d"
```

Replace `your_username` with your WSL username.

Alternatively, use **Windows Task Scheduler** to trigger a WSL command at login:

1. Open Task Scheduler and create a new task.
2. Set the trigger to **At log on**.
3. Set the action to run `wsl.exe` with the argument `-e bash -c "jarvis start -d"`.

### Starting the Sidecar (Windows-side)

The Go sidecar must run on the Windows side (not inside WSL) because it uses Win32 APIs for desktop control. Autostart options:

**Startup folder shortcut:**
1. Press `Win+R` and type `shell:startup` to open the Startup folder.
2. Create a shortcut to `jarvis-sidecar.exe` in that folder.

**Windows service (recommended for reliability):**
Use a tool such as [NSSM](https://nssm.cc/) to register the sidecar as a Windows service:

```powershell
nssm install JarvisSidecar "C:\path\to\jarvis-sidecar.exe"
nssm start JarvisSidecar
```

---

## Logging

All JARVIS logs are written to `~/.jarvis/logs/`.

| Command | Purpose |
|---|---|
| `jarvis logs -f` | Stream live log output |
| `journalctl --user -u jarvis -f` | Stream logs via systemd (Linux) |

The log directory is created automatically on first start. If you need to rotate logs, configure logrotate or use the systemd journal's built-in retention policies.
