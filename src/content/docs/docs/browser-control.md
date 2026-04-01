---
title: Browser Control
description: How JARVIS automates Chrome and Chromium via the Chrome DevTools Protocol.
---

JARVIS controls a real browser instance using the Chrome DevTools Protocol (CDP). It auto-detects Chrome or Chromium on your system, launches it with a dedicated profile, attaches remotely, and exposes five browser tools to the agent.

## How It Works

On startup, JARVIS:

1. Scans your system for Chrome and Chromium binaries (see [Detection Order](#detection-order))
2. Launches the browser with remote debugging enabled on port `9222`
3. Opens a CDP connection to the debugging endpoint
4. Injects the browser tools into the agent's tool registry

From that point on, the agent can navigate pages, interact with elements, extract content, and take screenshots — all using numbered element IDs from a live page snapshot rather than fragile CSS selectors.

## Detection Order

JARVIS tries browser binaries in this order:

1. `google-chrome` (Linux system PATH)
2. `chromium-browser` (Debian/Ubuntu)
3. `chromium` (Arch, Fedora, Alpine)
4. `/usr/bin/chromium` (absolute path)
5. `/snap/bin/chromium` (Snap package)
6. `google-chrome-stable` (some distros)
7. Windows Chrome via WSL interop path (`/mnt/c/Program Files/Google/Chrome/...`)

The first binary found is used. To override, set the `JARVIS_BROWSER_PATH` environment variable:

```bash
JARVIS_BROWSER_PATH=/usr/local/bin/my-chrome jarvis start
```

## Launch Flags

JARVIS launches the browser with these flags:

```
--remote-debugging-port=9222
--user-data-dir=~/.jarvis/browser-profile
--disable-extensions
--no-first-run
--no-default-browser-check
```

On WSL2 or any Linux environment detected as non-desktop, `--no-sandbox` is added automatically (required for Chromium in many headless-capable environments).

The dedicated `~/.jarvis/browser-profile` directory keeps JARVIS's browsing history, cookies, and cached credentials separate from your personal browser profile.

## Stealth Mode

JARVIS applies a stealth configuration to reduce bot detection:

- Removes `navigator.webdriver` from the JavaScript context
- Spoofs `navigator.plugins`, `navigator.languages`, and related properties
- Sets a realistic user agent string
- Disables the automation-controlled banner in the address bar

This is applied automatically on every new page navigation.

## Browser Tools

The agent has access to five browser tools.

### `navigate`

Navigate the browser to a URL.

```
Input: url (string)
```

Example agent usage:

```
navigate("https://news.ycombinator.com")
```

### `click`

Click on a page element by its numbered snapshot ID.

```
Input: elementId (number)
```

The agent first takes a snapshot of the page to obtain element IDs, then clicks by ID. This is more reliable than CSS selectors because IDs are derived from the live accessibility tree, not the DOM structure.

### `type`

Type text into a focused input element.

```
Input: text (string), elementId (number, optional)
```

If `elementId` is provided, the element is focused before typing. Otherwise, text is sent to the currently focused element.

### `extract`

Extract visible text content from the current page or a specific element.

```
Input: elementId (number, optional)
```

Returns the text content of the specified element, or the full page text if no ID is given. This is the primary tool for reading page content.

### `screenshot`

Take a screenshot of the current page and return it to the agent as a base64-encoded PNG image.

```
Input: elementId (number, optional)
```

If `elementId` is given, the screenshot is cropped to that element. Otherwise the full viewport is captured. The image is passed directly to the LLM via Claude's Vision API for visual analysis.

## Snapshot Approach

Rather than working with raw CSS selectors or XPaths, JARVIS uses a snapshot-based approach:

1. The page is snapshotted using the CDP Accessibility tree
2. Each interactive element receives a sequential numeric ID: `[1]`, `[2]`, `[3]`, ...
3. The agent sees these IDs in the snapshot and references them in tool calls
4. IDs are stable within a single snapshot but change after navigation or page updates

This approach handles dynamic pages, shadow DOM, and single-page applications more reliably than selector-based automation.

## Background Monitor

A second browser controller runs on CDP port `9223` for the [Proactive Agent](/docs/proactive-agent). This separate instance handles heartbeat monitoring and automated reactions without blocking your interactive chat session. The two CDP connections are fully independent.

## WSL2 Considerations

In WSL2, Linux browsers are strongly preferred over Windows Chrome:

- Linux browsers share the WSL2 network namespace, so CDP connections to `localhost:9222` work without any configuration
- Windows Chrome runs in the Windows network namespace; reaching it from WSL2 requires additional routing that JARVIS does not attempt by default
- If no Linux browser is found, JARVIS falls back to Windows Chrome via the interop path and adjusts the CDP host accordingly

## Configuration

Browser control is always enabled. There are no configuration keys to toggle it. The CDP port and profile directory can be adjusted via environment variables if you have a port conflict:

```bash
JARVIS_CDP_PORT=9333 jarvis start
JARVIS_BROWSER_PROFILE=~/.jarvis/my-profile jarvis start
```

## Troubleshooting

**Browser not found**

Run `jarvis doctor` — it reports which browser binary was detected. If none is found, install Chromium:

```bash
# Debian/Ubuntu/WSL2
sudo apt install chromium-browser

# Arch
sudo pacman -S chromium

# macOS
brew install --cask chromium
```

**Port 9222 already in use**

Another Chrome instance is already running with remote debugging enabled. Either close it or change the CDP port:

```bash
JARVIS_CDP_PORT=9333 jarvis start
```

**Pages load but interactions fail**

This usually means the page has anti-automation measures that override the stealth patches. Try setting a longer interaction delay or filing a bug report with the site URL.

## Video Tutorial Placeholder

> Video tutorial placeholder: browser control walkthrough and debugging failed page interactions.

Add your future video link here.
