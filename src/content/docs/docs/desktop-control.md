---
title: Desktop Control
description: How JARVIS controls desktop applications via the Go sidecar with platform-native APIs.
---

JARVIS controls native desktop applications through a Go sidecar process that connects to the daemon over a JWT-authenticated WebSocket. The sidecar runs natively on each platform — Windows, macOS, and Linux — using platform-specific APIs for window management, UI automation, screenshots, and input simulation.

## Architecture

```
JARVIS Daemon (Bun, any machine)
  ↕ WebSocket (JWT auth)
Sidecar (Go, target machine)
  → Platform APIs (Win32 / AppleScript / X11)
  → Chrome DevTools Protocol (CDP)
  → Terminal, Filesystem, Clipboard
```

The sidecar is a standalone Go binary that enrolls with the daemon using a JWT token. Once connected, it receives RPC commands over WebSocket and executes them using native platform APIs. Multiple sidecars can connect to the same daemon, giving JARVIS control over several machines simultaneously.

## Installation

Install the sidecar on each machine you want JARVIS to control:

```bash
npm install -g @usejarvis/sidecar
```

Or download the prebuilt binary for your platform from the [releases page](https://github.com/vierisid/jarvis/releases).

## Enrollment

### 1. Install the sidecar

See [Installation](#installation) above.

### 2. Enroll in the dashboard

1. Open the JARVIS dashboard at `http://localhost:3142`
2. Go to **Settings** → **Sidecar**
3. Enter a friendly name for this machine (e.g. "work laptop") and click **Enroll**
4. Click **Copy** to copy the token command

### 3. Run the sidecar

Paste and run the copied command on the machine where you installed the sidecar:

```bash
jarvis-sidecar --token <your-token>
```

The sidecar saves the token locally, so on subsequent runs you just need:

```bash
jarvis-sidecar
```

Once connected, the sidecar appears as online in the Settings page where you can configure its capabilities.

After enrollment, the sidecar reconnects automatically with exponential backoff if the connection drops.

## Capabilities

The sidecar advertises its capabilities during the preflight check. Each capability is verified at startup — only capabilities that pass the platform check are registered.

| Capability | Description | Windows | macOS | Linux |
|---|---|---|---|---|
| `terminal` | Run shell commands | cmd.exe / PowerShell | bash/zsh | bash/zsh |
| `filesystem` | Read/write files, list directories | Yes | Yes | Yes |
| `clipboard` | Get/set clipboard content | PowerShell | pbcopy/pbpaste | xclip/xsel |
| `screenshot` | Capture screen to PNG | PowerShell | screencapture | import (ImageMagick) |
| `desktop` | Window management & UI automation | Win32 UIA | AppleScript | xdotool/wmctrl |
| `browser` | Chrome control via CDP | Yes | Yes | Yes |
| `system_info` | Hostname, platform, CPU info | Yes | Yes | Yes |

## Desktop Tools

When the `desktop` capability is available, the agent has access to these tools:

### `list_windows`

List all visible top-level windows with their titles and process names.

```json
[
  { "title": "Visual Studio Code", "processName": "Code.exe", "handle": "0x1A2B" },
  { "title": "File Explorer", "processName": "explorer.exe", "handle": "0x3C4D" }
]
```

### `get_window_tree`

Get the UI Automation element tree for a window — reveals buttons, text fields, menus, and other controls.

```
Input: window (string), depth (integer, optional)
Returns: nested element tree with automationId, name, controlType, boundingRect
```

### `click_element`

Click a UI element identified by automation ID, name, or control type.

```
Input: window (string), selector (string), selectorType (automationId | name | controlType)
```

### `type_text`

Type text into a focused element. Uses platform-native input methods.

```
Input: window (string), selector (string), text (string)
```

### `press_keys`

Send a key combination to a window.

```
Input: window (string), keys (string)
```

Key format: `"Ctrl+C"`, `"Alt+F4"`, `"Win+D"`, `"Ctrl+Shift+Esc"`.

### `launch_app`

Launch an application by name or path.

```
Input: app (string), args (string[], optional)
```

### `focus_window`

Bring a window to the foreground.

```
Input: window (string)
```

### `find_element`

Search for a UI element matching a query and return its properties.

```
Input: window (string), query (string)
Returns: { automationId, name, controlType, boundingRect }
```

## Browser Tools

When the `browser` capability is available, the sidecar launches Chrome with remote debugging and provides these tools:

| Tool | Description |
|---|---|
| `browser_navigate` | Navigate to a URL |
| `browser_snapshot` | Get the accessibility tree of the current page |
| `browser_click` | Click an element by selector |
| `browser_type` | Type into an input field |
| `browser_screenshot` | Capture the page as PNG |
| `browser_scroll` | Scroll the page or an element |
| `browser_evaluate` | Execute JavaScript in the page context |

## Terminal & Filesystem Tools

| Tool | Description |
|---|---|
| `run_command` | Execute a shell command with configurable timeout and blocked-command list |
| `read_file` | Read a file (respects blocked paths and max file size) |
| `write_file` | Write content to a file (respects blocked paths) |
| `list_directory` | List directory entries with types and sizes |
| `get_clipboard` | Read clipboard content |
| `set_clipboard` | Write to clipboard |
| `capture_screen` | Take a full-screen screenshot |
| `get_system_info` | Get hostname, platform, architecture, CPU count |

## Platform Details

### Windows

Desktop automation uses the Win32 UI Automation (UIA) COM API via PowerShell. This gives access to the accessibility tree of any Windows application, including:

- Enumerating windows (`EnumWindows`)
- Reading element trees (`IUIAutomation`)
- Clicking, typing, scrolling
- Getting the foreground window (`GetForegroundWindow`)
- Mouse and keyboard simulation (`SetCursorPos`, `mouse_event`, `SendKeys`)

Screenshots use `System.Windows.Forms.Screen` via PowerShell.

### macOS

Desktop automation uses AppleScript and Accessibility APIs:

- `osascript` for window listing, app launching, and UI scripting
- `screencapture` for screenshots
- `pbcopy`/`pbpaste` for clipboard

### Linux

Desktop automation uses X11 tools:

- `xdotool` for window management and input simulation
- `wmctrl` for window listing and focusing
- `xclip` or `xsel` for clipboard
- `import` (ImageMagick) for screenshots

## Multi-Machine Setup

Connect multiple sidecars to a single JARVIS daemon for cross-machine orchestration:

```bash
# On machine A (e.g., your workstation)
npm install -g @usejarvis/sidecar
jarvis-sidecar --token <token-from-dashboard>

# On machine B (e.g., a build server)
npm install -g @usejarvis/sidecar
jarvis-sidecar --token <token-from-dashboard>
```

The agent can then reference machines by hostname when dispatching tools. For example, it can run a build on your server while monitoring the result in your browser locally.

## Sidecar Configuration

The sidecar stores its config at `~/.jarvis/sidecar.yaml`:

```yaml
brain_url: "ws://localhost:3142/sidecar"
token: "eyJ..."                    # JWT from enrollment
capabilities:
  - terminal
  - filesystem
  - clipboard
  - screenshot
  - desktop
  - browser
  - system_info
terminal:
  blocked_commands: ["rm -rf /", "format", "shutdown"]
  default_shell: ""                # auto-detected
  timeout_ms: 30000
filesystem:
  blocked_paths: ["/etc/shadow", "/root"]
  max_file_size_kb: 10240
browser:
  cdp_port: 9222
  profile_dir: ""                  # auto-detected
awareness:
  screen_interval_ms: 7000
  window_interval_ms: 3000
  min_change_threshold: 0.02
  stuck_threshold_ms: 120000
```

## Building from Source

Requirements: Go 1.23 or later.

```bash
git clone https://github.com/vierisid/jarvis
cd jarvis/sidecar

# Build for your current platform
go build -o jarvis-sidecar .

# Cross-compile for Windows
GOOS=windows GOARCH=amd64 go build -o jarvis-sidecar.exe .

# Cross-compile for macOS
GOOS=darwin GOARCH=arm64 go build -o jarvis-sidecar-macos .
```

## Troubleshooting

**Sidecar won't connect**

1. Verify the daemon is running: `jarvis status`
2. Re-enroll from the dashboard: **Settings** → **Sidecar** → **Enroll**
3. Check firewall rules — port 3142 must be reachable from the sidecar machine
4. Run `jarvis doctor` for a connectivity check

**Desktop tools not working**

1. Verify the `desktop` capability passed preflight: check sidecar startup logs
2. On Linux, ensure `xdotool` and `wmctrl` are installed: `sudo apt install xdotool wmctrl`
3. On macOS, grant Accessibility permissions in System Settings > Privacy & Security
4. On Windows, ensure the sidecar is running with appropriate permissions

**Screenshots are blank**

- On Linux, ensure ImageMagick is installed: `sudo apt install imagemagick`
- On Windows, ensure the sidecar is not running in a headless/service context without desktop access
