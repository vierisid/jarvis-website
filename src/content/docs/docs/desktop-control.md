---
title: Desktop Control
description: How JARVIS controls Windows desktop applications via the FlaUI C# sidecar.
---

JARVIS controls native Windows desktop applications through a C# sidecar process called `desktop-bridge.exe`. The sidecar uses the [FlaUI](https://github.com/FlaUI/FlaUI) library, which wraps Microsoft's UI Automation (UIA) framework, giving JARVIS programmatic access to any application that exposes an accessibility tree — which is nearly every Windows GUI application.

## How It Works

On startup, JARVIS checks for a running instance of `desktop-bridge.exe`. If one is not found, it auto-launches the sidecar via WSL/Windows interop:

```
WSL: jarvis daemon
  → launches ~/.jarvis/bin/desktop-bridge.exe (Windows side)
  → sidecar listens on TCP 127.0.0.1:9224
  → jarvis connects via TCP
  → messages: newline-delimited JSON over TCP
```

The sidecar process runs on the Windows side and has full access to the Windows desktop. JARVIS communicates with it over a simple TCP JSON protocol, sending tool commands and receiving results including screenshots.

## Prerequisites

Desktop control requires:

- Windows (including WSL2 running under Windows)
- The `desktop-bridge.exe` sidecar binary installed at `~/.jarvis/bin/desktop-bridge.exe`

The sidecar is bundled with the JARVIS installer. If you need to build it from source, see [Building the Sidecar](#building-the-sidecar).

## Desktop Tools

The agent has access to eight desktop tools.

### `list_windows`

List all visible top-level windows with their titles and process names.

```
Returns: array of { title, processName, windowHandle }
```

Example response:

```json
[
  { "title": "Notepad", "processName": "notepad.exe", "windowHandle": "0x1A2B" },
  { "title": "Visual Studio Code", "processName": "Code.exe", "windowHandle": "0x3C4D" }
]
```

### `click`

Click on a UI element identified by its automation ID, name, or control type within a named window.

```
Input: window (string), selector (string), selectorType (automationId | name | controlType)
```

### `type`

Type text into a focused element. Uses clipboard paste for reliability — the text is written to the Windows clipboard and pasted with Ctrl+V, which handles Unicode, long strings, and special characters correctly.

```
Input: window (string), selector (string), text (string)
```

### `get_text`

Read the text content of a UI element.

```
Input: window (string), selector (string)
Returns: string
```

### `screenshot`

Take a screenshot of a window or the full desktop and return it to the agent as a base64-encoded PNG.

```
Input: window (string, optional), monitor (integer, optional)
Returns: base64 PNG image — passed to Claude Vision API
```

Multi-monitor setups are supported. Specify `monitor: 0` for the primary display, `monitor: 1` for the secondary, and so on.

### `find_element`

Search for a UI element matching a query and return its properties.

```
Input: window (string), query (string)
Returns: { automationId, name, controlType, boundingRect }
```

### `scroll`

Scroll within a window or element by a specified amount.

```
Input: window (string), selector (string, optional), direction (up | down | left | right), amount (integer)
```

### `key_press`

Send a key combination to a window.

```
Input: window (string), keys (string)
```

Key format examples: `"Ctrl+C"`, `"Alt+F4"`, `"Win+D"`, `"Ctrl+Shift+Esc"`.

## Window Identification

Windows are identified by their title string. JARVIS uses UIA's built-in window search, which:

- Matches partial titles (case-insensitive)
- Handles Windows Explorer's PID reuse correctly (uses UIA window handles, not PIDs)
- Retries for up to 5 seconds if a window is still loading

If multiple windows match a partial title, the first match by Z-order (foreground first) is used. To target a specific window, use a more precise title substring.

## Vision Integration

All screenshot tool results are passed directly to Claude via the Vision API. The agent sees the actual pixels of the screen and can:

- Read text that is not exposed via the accessibility tree
- Interpret charts, images, and visual indicators
- Verify that a previous action had the expected result
- Navigate visually complex UIs

Screenshots are capped at 5 MB before encoding. Large monitors or high-DPI displays may produce large images; JARVIS scales them down automatically to stay within the limit.

## Building the Sidecar

If the prebuilt `desktop-bridge.exe` is not available or you want to modify it, build from source.

**Requirements**: .NET SDK 8 or later

```bash
# Clone the JARVIS repo on Windows (or from WSL)
git clone https://github.com/vierisid/jarvis
cd jarvis/desktop-bridge

# Build a self-contained Windows x64 executable
dotnet publish -c Release -r win-x64 --self-contained true \
  -p:PublishSingleFile=true -o ./out

# Copy to JARVIS bin directory (adjust path for WSL vs Windows)
cp ./out/desktop-bridge.exe ~/.jarvis/bin/desktop-bridge.exe
```

## Auto-Launch Behavior

JARVIS checks TCP port `9224` on startup. If nothing is listening:

1. It resolves the Windows path to `desktop-bridge.exe` (converting from WSL path if needed)
2. Launches it via `cmd.exe /c start /b path\to\desktop-bridge.exe`
3. Waits up to 10 seconds for the TCP port to become available
4. Logs a warning and continues without desktop tools if the launch fails

You can also launch the sidecar manually before starting JARVIS:

```powershell
# In a Windows terminal (PowerShell or CMD)
~\.jarvis\bin\desktop-bridge.exe
```

## Configuration

The TCP port for the sidecar can be changed via environment variable:

```bash
JARVIS_DESKTOP_PORT=9334 jarvis start
```

Both JARVIS and the sidecar must use the same port. If you change the port, launch the sidecar manually with the matching flag:

```powershell
desktop-bridge.exe --port 9334
```

## Troubleshooting

**Sidecar connection failed**

```bash
jarvis doctor
```

The doctor command attempts to connect to the sidecar port and reports whether it succeeded. If it fails:

1. Check that `~/.jarvis/bin/desktop-bridge.exe` exists
2. Try launching the sidecar manually in a Windows terminal to see error output
3. Check Windows Defender or antivirus — self-contained `.exe` files sometimes trigger alerts
4. Verify TCP port 9224 is not blocked by a firewall

**Type command enters garbled text**

The type tool uses clipboard paste. If another application is intercepting clipboard events, type may fail. Close clipboard manager applications and retry.

**Screenshot is blank or black**

This usually occurs when the target window is minimized or off-screen. Use `list_windows` to confirm the window is visible before taking a screenshot.
