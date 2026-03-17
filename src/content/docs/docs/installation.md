---
title: Installation
description: Install JARVIS on Windows, macOS, or Linux in under two minutes.
---

:::danger[Security Warning]
JARVIS runs as a persistent daemon with broad system access — browser control, desktop automation, shell execution, and external service access. Installing it grants an AI agent significant control over your machine. Only install on machines you own, review the [Authority & Safety](/docs/authority) settings before enabling autonomous operation, and read the full [Disclaimer & Liability](/docs/disclaimer).
:::

JARVIS runs on macOS, Linux, and Windows (via WSL2). It is distributed as a package on npm, so you need Bun installed first. If you are on Windows, read the platform setup sections below before installing.

## Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Operating system | macOS, Linux, or Windows via WSL2 | Windows users **must** use WSL2 — see [Windows setup](#windows-wsl2-setup) below |
| Node.js & npm | Node.js 18 or later | See [Installing Node.js & npm](#installing-nodejs--npm) below |
| Bun | 1.0 or later | Installed automatically if missing |
| LLM API key | — | At least one provider: Anthropic, OpenAI, Google Gemini, or Ollama (local, no key needed) |
| Chrome or Chromium | Any recent version | Required for browser control |

---

## Windows (WSL2) Setup

:::caution[Windows Requirement]
JARVIS is **not supported natively on Windows**. You must install and run it inside WSL2 (Windows Subsystem for Linux).
:::

### What is WSL2?

WSL2 (Windows Subsystem for Linux 2) is a feature built into Windows 10 and 11 that lets you run a full Linux environment directly on your Windows machine — no virtual machine setup or dual boot required. It runs a real Linux kernel, so Linux command-line tools, package managers, and applications work natively. JARVIS requires a Linux environment for its daemon, which is why WSL2 is required on Windows.

### Installing WSL2

1. **Open PowerShell as Administrator** — right-click the Start menu, select "Terminal (Admin)" or "PowerShell (Admin)".

2. **Install WSL** with a single command:
   ```powershell
   wsl --install
   ```
   This installs WSL2 with Ubuntu as the default Linux distribution. If you already have WSL1 installed, this will upgrade it to WSL2.

3. **Restart your computer** when prompted.

4. **Set up your Linux user** — after reboot, the Ubuntu terminal will open automatically and ask you to create a username and password. This is your Linux account inside WSL2.

5. **Verify the installation:**
   ```powershell
   wsl --version
   ```
   Confirm the output shows WSL version 2.

:::tip
If `wsl --install` does not work (e.g., on older Windows 10 builds), follow the [manual installation steps from Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install-manual).
:::

### Using JARVIS in WSL2

Once WSL2 is set up, open the Ubuntu terminal (or your chosen distribution) and follow the standard installation steps below. All `jarvis` commands should be run inside the WSL2 terminal, not in PowerShell or Command Prompt.

For desktop control on Windows, the sidecar binary must run on the Windows side — see [Desktop Control Fails on WSL](/docs/troubleshooting#desktop-control-fails-on-wsl) in the Troubleshooting guide.

---

## Installing Node.js & npm

### What is npm?

npm (Node Package Manager) is the default package manager for Node.js. It lets you install, update, and manage JavaScript packages from the command line. JARVIS is published as an npm package (`@usejarvis/brain`), so you need npm to install it. npm is bundled with Node.js — installing Node.js automatically gives you npm.

### Installing Node.js (includes npm)

#### macOS

**Option 1 — Homebrew (recommended):**
```bash
brew install node
```

**Option 2 — Official installer:**
Download the macOS installer from [nodejs.org](https://nodejs.org/) and run it.

#### Linux / WSL2

**Option 1 — NodeSource (recommended for latest LTS):**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Option 2 — System package manager (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install nodejs npm
```

**Option 3 — nvm (Node Version Manager):**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install --lts
```

**Verify the installation:**
```bash
node --version   # should print v18 or later
npm --version    # should print 9 or later
```

---

## Install JARVIS

### Bun (Recommended)

```bash
bun install -g @usejarvis/brain
jarvis onboard
```

The onboard wizard walks through LLM provider selection (Anthropic, OpenAI, Gemini, or Ollama), API key entry, voice setup, channel tokens (Telegram, Discord), personality, and authority level. It writes `~/.jarvis/config.yaml` and starts the daemon. You can re-run `jarvis onboard` at any time to update your configuration.

### Manual Install

If you prefer to build from source:

```bash
git clone https://github.com/vierisid/jarvis.git ~/.jarvis/daemon
cd ~/.jarvis/daemon
bun install
bun run build:ui
jarvis onboard
```

---

## Verify the Installation

```bash
jarvis version
```

Expected output:

```
JARVIS v1.0.0
Runtime: Bun 1.x.x
Config: ~/.jarvis/config.yaml
```

---

## What Gets Installed

The installer places these files on your system:

| Path | Description |
|---|---|
| `~/.bun/bin/jarvis` | Main CLI binary |
| `~/.jarvis/config.yaml` | Configuration file (created by onboard) |
| `~/.jarvis/jarvis.db` | SQLite knowledge vault (created on first run) |
| `~/.jarvis/logs/` | Log files directory |

Nothing is installed system-wide. Everything lives under `~/.bun/` and `~/.jarvis/`.

---

## Updating

```bash
jarvis update
```

This pulls the latest version, replaces the binary, and confirms the new version number. Your config and database are untouched.

## Uninstalling

```bash
bun remove -g @usejarvis/brain
rm -rf ~/.jarvis
```

---

## Installation Troubleshooting

### Permission Denied (EACCES) — Use `sudo`

If `bun install -g` fails with `EACCES` permission errors:

```
error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules'
```

**Quick fix** — run the install with `sudo`:
```bash
sudo bun install -g @usejarvis/brain
```

**Better long-term fix** — Bun installs global packages to `~/.bun/bin` by default, which should not require `sudo`. If you have a non-standard setup, ensure your user owns the global directory:
```bash
sudo chown -R $(whoami) ~/.bun
bun install -g @usejarvis/brain
```

### `jarvis` Command Not Found

If the `jarvis` command is not recognized after installation, your shell cannot find the binary. This usually means the global npm/Bun bin directory is not in your PATH.

**Fix:**
```bash
# Add Bun global bin directory to your PATH
export PATH="$HOME/.bun/bin:$PATH"
```

Add the line above to `~/.bashrc` or `~/.zshrc` to make it permanent, then reload:
```bash
source ~/.bashrc
# or
source ~/.zshrc
```

### `bun: command not found`

Bun is not installed. Install it with:
```bash
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

### Installation Hangs or Times Out

This is usually a network issue. Try:
```bash
# Check your registry connectivity
bun pm ping

# If behind a corporate proxy, set the environment variables
export HTTP_PROXY=http://your-proxy:port
export HTTPS_PROXY=http://your-proxy:port

# Then retry the install
bun install -g @usejarvis/brain
```

### Bun Fails to Install Automatically

If the automatic Bun installation step fails:
```bash
# Install Bun manually
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Then retry
jarvis onboard
```

### WSL2-Specific Issues

**Cannot access localhost from Windows browser:**
WSL2 and Windows share `localhost` by default on recent builds. If `http://localhost:3142` does not load in your Windows browser:
```bash
# Find your WSL2 IP address
hostname -I
```
Then use that IP instead: `http://<wsl-ip>:3142`.

**Chrome not found inside WSL2:**
If you use Chrome installed on the Windows side, point JARVIS to the Windows Chrome executable:
```yaml
# ~/.jarvis/config.yaml
browser:
  executablePath: /mnt/c/Program Files/Google/Chrome/Application/chrome.exe
```

**File permission issues in WSL2:**
If you encounter permission errors accessing files in `/mnt/c/` (your Windows drives):
```bash
# Remount with proper permissions
sudo umount /mnt/c
sudo mount -t drvfs C: /mnt/c -o metadata,uid=1000,gid=1000
```

---

## Next Steps

- [Quick Start](/docs/quickstart) — send your first message
- [Configuration](/docs/configuration) — customize `~/.jarvis/config.yaml`
- [Troubleshooting](/docs/troubleshooting) — if something went wrong
