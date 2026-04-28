---
title: Complete Setup Handbook
description: An exhaustive setup, deployment, onboarding, integration, operations, and validation handbook for running JARVIS in real environments.
---

# Complete Setup Handbook

This handbook is intentionally long. It is designed to be the place you read when you want to stand up JARVIS methodically, avoid common topology mistakes, and debug deployment drift without guessing.

Use it in order for first-time setup, or jump directly to the section that matches the install method or subsystem you are changing.

## How To Use This Handbook

1. Read the orientation and topology sections before you install anything.
2. Follow exactly one install path for each daemon host.
3. Bring providers, channels, sidecars, and voice online one layer at a time.
4. Use the [Error Atlas](/docs/error-atlas) when a symptom appears after setup.

## Deployment Matrix

| Scenario | Good fit | Watch out for |
| --- | --- | --- |
| Personal local daemon | Bun package | stale wrappers, port collisions |
| Always-on home server | script install or Docker | localhost confusion, reverse proxying |
| Cloud VPS brain | Docker or script install | no direct desktop access without sidecars |
| Contributor development | source checkout | branch drift, local patches |
| Multi-machine control | remote daemon plus sidecars | sidecar enrollment and network reachability |

## 1. Orientation

1. Decide where the daemon will live before you install anything. The brain can run on a laptop, NAS, homelab server, VPS, or container, but each choice changes what `localhost` means and which features are directly available.
2. Treat the daemon host as a privileged system. JARVIS can read files, open browsers, run terminals, and connect to remote channels. Installation is an authority decision, not just a package install.
3. Decide early whether you want a single-machine setup, a remote brain with one sidecar, or a remote brain with several sidecars. This choice affects URLs, firewall rules, sidecar enrollment, and troubleshooting.
4. Identify your first LLM provider before onboarding. You can change it later, but having one working provider dramatically reduces setup friction.
5. Decide whether the dashboard should stay local-only or be reachable remotely. If remote access is required, plan auth, TLS, reverse proxying, and network exposure before first boot.

### Operator notes

- Capture what “healthy” looks like for **orientation** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 2. Preflight checklist

1. Confirm the operating system matches the deployment model. Native daemon support is aimed at Linux, macOS, and WSL2; containers change the desktop/browser assumptions.
2. Check that Bun is installed when using the Bun package, one-liner installer, or a source checkout. Keep `bun --version` handy in support notes.
3. Verify that the daemon host has outbound access to the provider APIs you plan to use: OpenAI, Anthropic, Groq, Gemini, OpenRouter, NVIDIA NIM, or your local Ollama endpoint.
4. Reserve port `3142` unless you have a reason to change it. If you do change it, update docs, reverse proxy config, service files, and bookmarks together.
5. Create a note containing the intended data directory, dashboard URL, sidecar hosts, and auth expectations. This single note avoids a surprising amount of drift later.

### Operator notes

- Capture what “healthy” looks like for **preflight checklist** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 3. Install method selection

1. Use the global Bun package for the fastest local install and simplest update path.
2. Use the one-liner installer if you want a managed repository under `~/.jarvis/daemon` with a familiar filesystem layout.
3. Use a full source checkout if you expect to patch JARVIS, test branches, or submit pull requests.
4. Use Docker when you want a contained server deployment, but remember the container does not magically control your host desktop.
5. Avoid mixing install methods on the same machine unless you intentionally separate them by port, data directory, and service manager.

### Operator notes

- Capture what “healthy” looks like for **install method selection** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 4. Bun package install

1. Install with `bun install -g @usejarvis/brain` and confirm the wrapper path with `which jarvis`.
2. Run `jarvis onboard` immediately after installation instead of editing configuration blind. The onboarding flow catches missing prerequisites early.
3. If the global install path is unusual, document the output of `which jarvis` so future uninstall or update troubleshooting is easier.
4. When an older wrapper is shadowing the new one, compare `which jarvis`, `jarvis --version`, and the contents of the discovered wrapper script.
5. If the package installs but the command is still missing, refresh your shell profile or verify the Bun binary directory is on `PATH`.

### Operator notes

- Capture what “healthy” looks like for **bun package install** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 5. One-liner installer

1. The one-liner installer clones the repo under `~/.jarvis/daemon`, installs dependencies, and prepares a runnable CLI wrapper.
2. Before running the installer over SSH, decide whether you want the daemon to stay local-only or eventually sit behind a reverse proxy.
3. Save the exact install command in your ops notes. This makes future rebuilds predictable and helps answer whether the system was installed by script or by Bun package.
4. After the script runs, inspect `~/.jarvis/daemon`, `~/.jarvis/config.yaml`, and the wrapper path so you know where the moving pieces live.
5. If the install script fails midway, do not layer new install methods on top. Clean up the partial install first and rerun a single method intentionally.

### Operator notes

- Capture what “healthy” looks like for **one-liner installer** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 6. Source checkout install

1. Use a source checkout when you need branch control, local patches, or direct access to `bin/jarvis.ts` and the UI sources.
2. Clone the repository to a stable path. Moving the checkout after configuration is possible, but it complicates service files and wrapper references.
3. Run `bun install` and any required UI build step before trying to start the daemon. A half-built checkout often looks like a runtime bug when it is really an install omission.
4. When running from a source checkout, treat updates as Git operations. Do not expect the install-method-aware updater to manage arbitrary developer trees.
5. Keep a note of the active branch, local commits, and modified files before you start debugging behavior that differs from upstream.

### Operator notes

- Capture what “healthy” looks like for **source checkout install** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 7. Docker deployment

1. Docker is ideal for hosting the daemon on a server, but not for direct host desktop control. Sidecars remain the bridge to actual desktops and browsers on other machines.
2. Mount a durable data directory or named volume from day one. Throwaway containers are fine for testing, but persistent operation needs durable state.
3. Plan how you will inject `config.yaml` and secrets. Environment variables can help, but a deliberate config-management approach scales better.
4. If you expose the dashboard remotely from Docker, make sure the reverse proxy handles WebSocket upgrades for `/ws` in addition to standard HTTP routes.
5. Document the exact container image, tag, port mapping, and volume strategy. Reproducibility matters more than cleverness here.

### Operator notes

- Capture what “healthy” looks like for **docker deployment** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 8. Configuration ownership

1. Treat `config.yaml` as the baseline declaration of intent and the dashboard settings database as the live overlay for selected runtime settings.
2. Keep secrets out of screenshots, issue reports, and shared snippets. Redact API keys, tokens, cookies, enrollment secrets, and OAuth client secrets.
3. Document which values are expected to come from config, which come from environment variables, and which are saved through the dashboard or keychain flow.
4. When two values appear to disagree, confirm the final effective value as the daemon sees it rather than trusting a single source of truth blindly.
5. Use comments in your own ops notes, not inside YAML fields where structured values are expected.

### Operator notes

- Capture what “healthy” looks like for **configuration ownership** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 9. First onboarding session

1. Onboarding should establish identity, primary provider, voice defaults, and the first operational expectations for the daemon.
2. Use a working provider and conservative settings for the first boot. It is easier to expand later than to debug five broken subsystems at once.
3. Complete onboarding on the same host where the daemon runs whenever possible. Remote assumptions create avoidable confusion during first setup.
4. After onboarding, immediately run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` so you have a known-good baseline snapshot.
5. Take one screenshot of the dashboard only after redacting secrets. This helps with future docs and support without leaking credentials.

### Operator notes

- Capture what “healthy” looks like for **first onboarding session** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 10. First daemon start

1. Start in the foreground the first time when possible. Foreground output gives faster feedback than debugging a detached process that failed silently.
2. If the process exits immediately, do not just retry detached mode. Read the log or terminal output and fix the first startup error directly.
3. If port `3142` is already in use, identify whether it is another JARVIS process, a stale listener, or an unrelated service before changing the port.
4. Once the foreground start works, test detached mode and record the log path, dashboard URL, and service manager expectations.
5. Make a habit of checking both `jarvis status` and a browser load of the dashboard. A stale lock file and a stale port listener can disagree.

### Operator notes

- Capture what “healthy” looks like for **first daemon start** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 11. Dashboard access

1. The dashboard is both an operator console and a runtime control plane, so decide who should be able to reach it and from where.
2. Local-only access is the safest default. If you need remote access, add auth and transport protection before widening network exposure.
3. If the UI loads but chat is disconnected, think in layers: daemon process, HTTP path, WebSocket path, cookies/auth, and proxy rules.
4. Document the canonical dashboard URL. Users often accumulate wrong bookmarks after port changes, reverse proxy changes, or host migrations.
5. When reverse proxies are involved, treat `/ws` as a first-class route. HTTP success without WebSocket success is not a healthy dashboard deployment.

### Operator notes

- Capture what “healthy” looks like for **dashboard access** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 12. Provider strategy

1. Pick one primary provider that you trust operationally and one or two fallback providers that are actually configured and reachable.
2. Do not fill the fallback chain with providers that have no key or no reachable endpoint. A fallback list is only useful if those providers can really answer.
3. Use low-risk models during first setup. Fancy models are fine later, but the first goal is a stable message round trip.
4. Record which features depend on which provider. Some problems are not global JARVIS failures; they are specific provider constraints or auth issues.
5. Test provider connectivity from the daemon host, not from your laptop browser, when the daemon runs elsewhere.

### Operator notes

- Capture what “healthy” looks like for **provider strategy** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 13. Anthropic setup

1. Store the API key carefully and verify that the selected model actually exists for your account tier.
2. If requests fail immediately, compare the configured model name to the current provider naming scheme.
3. When the dashboard says the provider is configured but live requests fail, test a simple chat path and inspect the provider error text in the daemon logs.
4. Do not assume that success in a separate app implies success in JARVIS if the daemon host, environment variables, or account limits differ.
5. Keep one known-good Anthropic model documented for rollback when experimenting with previews.

### Operator notes

- Capture what “healthy” looks like for **anthropic setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 14. OpenAI setup

1. Use a model that is supported by your account and by the request-shaping logic in the active JARVIS build.
2. If GPT-5-family models behave oddly, confirm that the build you run is using the current token parameter expectations for OpenAI.
3. Test connection with a tiny prompt before assuming a full-agent workflow is broken.
4. If you rotate keys, update both the dashboard-managed secret store and any environment variables used by the service manager.
5. Document rate limits and project/account scope so future failures are easier to classify.

### Operator notes

- Capture what “healthy” looks like for **openai setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 15. Groq setup

1. Groq is a fast first provider for basic conversational testing, but you should still choose an explicit model and know its tool-calling behavior.
2. If large prompts fail, remember that the daemon may need request shaping or history compaction to stay within provider limits.
3. A working key is not enough by itself; the chosen model must exist and your account must have access to it.
4. When Groq works for basic chat but fails in longer workflows, inspect prompt size, attachments, and tool-call history rather than assuming the whole provider is down.
5. Keep a fallback provider configured for incidents, quotas, or model-specific failures.

### Operator notes

- Capture what “healthy” looks like for **groq setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 16. Gemini setup

1. Check the configured model string carefully because preview names change over time and some failures present like generic auth or bad request issues.
2. If Gemini is configured from environment variables, document where the key is injected so operator handoffs are not guesswork.
3. Test from the daemon host and keep the first prompt minimal.
4. If the provider reports a request-format error, compare the active build with the provider API expectations before blaming networking.
5. Keep the chosen model noted in your runbook because dashboard screenshots alone are not enough historical context.

### Operator notes

- Capture what “healthy” looks like for **gemini setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 17. OpenRouter setup

1. OpenRouter introduces one more layer of indirection, so record both the OpenRouter model slug and the upstream family you intend to use.
2. A successful key test does not guarantee the chosen routed model is available for your account or region.
3. If results differ from direct-provider behavior, remember that OpenRouter is its own surface with its own quota and policy behavior.
4. When debugging, note whether the issue is OpenRouter auth, chosen model availability, upstream provider behavior, or JARVIS request construction.
5. Use a simple known-good model for the first validation before trying a large or highly customized model route.

### Operator notes

- Capture what “healthy” looks like for **openrouter setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 18. NVIDIA NIM setup

1. Use NVIDIA when you explicitly want NIM-backed models and have a valid API key and model slug for the daemon host to use.
2. Confirm the dashboard path recognizes `nvidia` as a provider in the build you are running. Older or half-wired settings paths can reject it even when the provider class exists.
3. Keep the model name explicit and test connection from the dashboard or with a minimal runtime prompt once the daemon is up.
4. If the dashboard shows NVIDIA fields but test connection says unknown provider, inspect the settings bridge rather than the API key first.
5. Remember that selecting NVIDIA in the UI does not mean it becomes active until the primary or fallback chain is saved and hot-reloaded successfully.

### Operator notes

- Capture what “healthy” looks like for **nvidia nim setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 19. Ollama setup

1. Only use `http://localhost:11434` when Ollama runs on the same machine as the daemon. A remote daemon cannot reach your laptop through its own localhost.
2. If JARVIS runs on a server and Ollama runs on a workstation, use a reachable LAN IP, Tailscale address, or reverse-proxied hostname instead.
3. Document whether Ollama is local, LAN-reachable, or tunneled. This is one of the highest-value notes you can keep for future troubleshooting.
4. Validate the Ollama host with an HTTP request from the daemon host, not from a browser on a different machine.
5. If model pulls succeed in Ollama itself but JARVIS still fails, compare the configured base URL and model name exactly.

### Operator notes

- Capture what “healthy” looks like for **ollama setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 20. Fallback chain design

1. Order fallback providers deliberately. A fallback chain should reflect business preference, latency preference, and trust level, not random experimentation history.
2. Remove providers that are disabled, unkeyed, or unreachable. Dead fallbacks add noise and slow incident response.
3. When a provider is only for emergency use, note that in the runbook so operators know why it exists.
4. After changing primary or fallback providers, verify both a settings save and an actual prompt round trip.
5. If the UI claims the new provider is saved but runtime behavior disagrees, inspect the hot-reload path and live log output.

### Operator notes

- Capture what “healthy” looks like for **fallback chain design** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 21. Voice setup

1. Voice involves more than one subsystem: TTS provider, STT provider, browser or sidecar audio path, and sometimes wake-word behavior.
2. Bring voice up in layers: first chat, then TTS only, then STT only, then wake behavior, then full conversational flow.
3. When audio sounds wrong, confirm whether the issue is synthesis, playback, microphone capture, transcription, or wake gating.
4. Document the exact voice settings and providers used on each machine. Audio bugs are notoriously machine-specific.
5. If voice matters in production, keep a plain text fallback interaction path documented and ready.

### Operator notes

- Capture what “healthy” looks like for **voice setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 22. STT setup

1. Choose whether speech-to-text should be cloud-backed or local before you tune quality. Reliability and reachability matter first.
2. If using local Whisper-compatible endpoints, document the URL from the daemon host perspective, not from the browser perspective.
3. Test a known short phrase and inspect the exact returned transcription rather than judging only by UI feel.
4. Track whether language hints, model choices, or endpoint styles differ between environments.
5. If STT is optional in your deployment, mark it clearly as optional so outages are prioritized correctly.

### Operator notes

- Capture what “healthy” looks like for **stt setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 23. TTS setup

1. Start with a default voice and default rate/volume. Tune the human factors only after you confirm reliable synthesis and playback.
2. If TTS fails only in some surfaces, identify whether the daemon produced audio successfully and the issue is downstream playback or browser routing.
3. Write down the selected voice names because providers occasionally rename or deprecate voices.
4. If you run multiple clients, confirm whether each client is expected to hear TTS or only the dashboard session.
5. When changing TTS providers, keep the old one documented until the new path is stable.

### Operator notes

- Capture what “healthy” looks like for **tts setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 24. Desktop control

1. Desktop control assumptions depend on where the daemon and sidecar live. The daemon alone does not control a remote desktop unless the proper sidecar is connected there.
2. Define target machines explicitly: which machine hosts the brain, which machine hosts the desktop session, and which machine hosts the browser you care about.
3. If desktop control seems inconsistent, verify that the intended sidecar is the one enrolled and currently online.
4. Before escalating a desktop bug, record whether the machine is headless, Wayland, X11, macOS, Windows sidecar, or WSL-mediated.
5. Treat desktop control as a connectivity and topology problem first, not a prompt problem.

### Operator notes

- Capture what “healthy” looks like for **desktop control** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 25. Browser control

1. Browser control requires a reachable browser on the machine where control happens. A VPS cannot manipulate a laptop browser without the right remote path.
2. Clarify whether you want control on the daemon host or via a sidecar on another machine.
3. If navigation works but DOM actions fail, separate startup issues from page-specific automation constraints.
4. Confirm that the machine actually has the expected browser runtime installed and launchable under the service account.
5. When the browser seems unavailable, inspect logs for launch errors, sandbox issues, missing binaries, and permission boundaries.

### Operator notes

- Capture what “healthy” looks like for **browser control** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 26. Channels and bots

1. Bring one channel online at a time. Telegram, Discord, and future integrations are easier to debug independently than as a bundle.
2. Document bot tokens, allowed users, server/channel scope, and where those secrets are stored. Never paste live secrets into shared docs or tickets.
3. When a channel connects but nothing responds, verify both the bot side and the JARVIS-side handler registration and runtime logs.
4. If remote messaging matters for incident response, keep one backup channel or a manual shell path available.
5. Note which commands or notifications are expected in each channel so operators can distinguish broken behavior from unsupported behavior.

### Operator notes

- Capture what “healthy” looks like for **channels and bots** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 27. Telegram setup

1. Create the bot first, store the token securely, and define the allowed user list before enabling the channel in production.
2. Test with a simple, non-destructive message and watch the daemon logs for channel registration and incoming event handling.
3. If the bot exists but JARVIS never reacts, verify the token, chat scope, allowed users, and network egress from the daemon host.
4. Document which Telegram account is the operator account during setup to avoid false negatives caused by the wrong sender.
5. If you rotate tokens, update both configuration and secret storage in one controlled change.

### Operator notes

- Capture what “healthy” looks like for **telegram setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 28. Discord setup

1. Discord setup requires both a correct bot token and the right server/channel permissions. Missing permissions often look like application bugs.
2. Invite the bot with the minimum required scope first, then expand only if a real feature needs it.
3. Test a short message and monitor the daemon logs for connection events and message handling.
4. If the bot logs in but cannot respond, inspect message content intent settings, server permissions, and channel visibility.
5. Record the expected server and channel identifiers so future operators know where healthy traffic should appear.

### Operator notes

- Capture what “healthy” looks like for **discord setup** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 29. Google integrations

1. Gmail and Calendar integrations require a real OAuth setup, not just good intentions. Treat them like a mini-project with credentials, redirect URIs, and consent-screen hygiene.
2. Keep a note of the Google project, OAuth client, redirect URIs, and the exact operator account used for authorization.
3. If Google features are not essential, leave them disabled until core chat and provider functionality is stable.
4. When they are essential, test with the smallest safe action first and verify that scopes are no broader than necessary.
5. Document how to re-authorize after token expiration or project changes.

### Operator notes

- Capture what “healthy” looks like for **google integrations** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 30. Sidecar architecture

1. A sidecar is how JARVIS gets eyes and hands on another machine. It is not optional when you expect a remote brain to act on a remote desktop.
2. Plan sidecars as named machines with clear roles: workstation, home desktop, laptop, trading box, or lab machine.
3. Record the expected daemon URL, sidecar enrollment flow, and firewall expectations for each machine.
4. Before enrolling many sidecars, successfully enroll one and perform a basic action end to end.
5. If a sidecar looks healthy but actions still fail, confirm whether the target capability is actually implemented for that OS/session type.

### Operator notes

- Capture what “healthy” looks like for **sidecar architecture** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 31. Networking model

1. Every setup problem eventually becomes a networking problem if the topology is not clear. Write down which machine initiates which connection.
2. Clarify whether URLs are local-only, LAN, Tailscale, reverse-proxied, or public internet. This avoids the classic localhost misunderstanding.
3. Test reachability from the daemon host with the same URLs the daemon will use. Browser success on another device does not prove daemon reachability.
4. For WebSocket surfaces, verify upgrade behavior explicitly rather than assuming HTTP reachability is enough.
5. When in doubt, draw the topology: browser, daemon host, provider endpoint, sidecar host, reverse proxy, and secret store.

### Operator notes

- Capture what “healthy” looks like for **networking model** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 32. Reverse proxying

1. If the dashboard is exposed through Nginx, Caddy, Traefik, or another proxy, configure both HTTP and WebSocket forwarding explicitly.
2. Document hostnames, TLS termination, cookie/auth expectations, and upstream ports together in one place.
3. When the page loads but chat never connects, inspect `/ws` upgrade handling first.
4. If auth is added at the proxy layer, verify it does not break the dashboard’s own cookie or session expectations.
5. Test after every proxy change with both browser loading and live chat streaming.

### Operator notes

- Capture what “healthy” looks like for **reverse proxying** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 33. Service management

1. Autostart is part of installation quality, not an afterthought. Decide whether the daemon should run under login, under a user service, or under container orchestration.
2. Document which account owns the process and where environment variables are loaded from.
3. If the service manager starts the daemon but the shell does not, compare environment, working directory, and PATH assumptions.
4. Keep the service definition near your config-management notes so changes are reproducible.
5. When testing service units, verify both start on boot and graceful stop behavior.

### Operator notes

- Capture what “healthy” looks like for **service management** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 34. Updates and rollbacks

1. Write down the install method because update behavior depends on it. Bun package installs, script installs, source checkouts, and Docker deployments all update differently.
2. Before updating, capture version, branch, local changes, and backup expectations.
3. After updating, retest the exact features that matter to your deployment: provider chat, dashboard connectivity, sidecar reachability, and any remote channels.
4. If an update breaks operations, prefer a known-good rollback over ad hoc hotfixing on a live incident path.
5. Document the rollback trigger so people know when to stop debugging and revert.

### Operator notes

- Capture what “healthy” looks like for **updates and rollbacks** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 35. Backups and migration

1. Treat the JARVIS data directory as stateful and worth backing up before major changes, provider migrations, or host moves.
2. Record what is in the data directory, which secrets are stored separately, and which files are regenerated.
3. When migrating hosts, move one concern at a time: config, secrets, database, sidecar enrollment, then external exposure.
4. Do not assume a copied config file is enough if keys or OAuth tokens live somewhere else.
5. After migration, verify not only startup but real workflows, because stale absolute paths and unreachable localhost assumptions are common.

### Operator notes

- Capture what “healthy” looks like for **backups and migration** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## 36. Operational cadence

1. Healthy operation is a habit. Make `jarvis doctor`, `jarvis status`, `jarvis logs -n 200`, and a real prompt round trip part of your routine checks.
2. When you change providers, channels, auth, or proxying, update the runbook the same day.
3. If your setup matters to a team, keep a short operator handoff section that says what success looks like and where to start when it fails.
4. Favor reversible, documented changes over heroic one-off terminal surgery on a production box.
5. If you discover a new failure mode, document the symptom, root cause, confirming command, and fix before moving on.

### Operator notes

- Capture what “healthy” looks like for **operational cadence** in your environment.
- Record the exact host, port, URL, and credential source involved in this section.
- If this section fails, run `jarvis doctor`, `jarvis status`, and `jarvis logs -n 200` before changing more than one thing at once.
- When the daemon lives on a different machine from the browser or the desktop, rewrite every `localhost` assumption in plain English before continuing.

## Environment-by-environment setup runbooks

### Runbook 1: Local laptop install

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 2: Homelab server install

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 3: VPS install

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 4: Docker on a single host

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 5: Docker behind reverse proxy

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 6: WSL2 install

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 7: macOS desktop install

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 8: Linux workstation install

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 9: Source checkout for contributors

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

### Runbook 10: Script-managed repo install

- Goal: establish one stable JARVIS brain for this environment before adding optional features.
- Prepare: note the hostname, the intended data directory, the intended dashboard URL, and the first LLM provider.
- Install: use exactly one install path and capture the resulting wrapper or repository location.
- Onboard: complete identity, primary provider, and basic dashboard access before adding channels or voice.
- Validate: confirm `jarvis status`, dashboard load, chat round trip, and `jarvis logs -n 200` all look healthy.
- Harden: decide whether the dashboard is local-only or remotely exposed, then configure auth and proxying accordingly.
- Extend: add sidecars, channels, voice, Google integrations, and workflows one at a time.
- Document: record the exact install method, version, host, URL, and rollback plan.

## Universal validation checklist library

### Validation item 1: Verify Bun on PATH

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 2: Verify `jarvis` wrapper path

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 3: Verify data directory ownership

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 4: Verify config file path

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 5: Verify dashboard port reachability

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 6: Verify WebSocket path through proxy

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 7: Verify primary provider credentials

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 8: Verify fallback provider reachability

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 9: Verify sidecar topology note

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 10: Verify service account permissions

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 11: Verify reverse proxy headers

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 12: Verify auth/token policy

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 13: Verify local browser assumptions

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 14: Verify desktop-session assumptions

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 15: Verify STT endpoint reachability

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 16: Verify TTS output path

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 17: Verify Telegram bot scope

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 18: Verify Discord bot permissions

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 19: Verify Google OAuth redirect URI

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 20: Verify backup location

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 21: Verify update method

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 22: Verify rollback plan

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 23: Verify log path

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 24: Verify operator contact path

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

### Validation item 25: Verify timezone and locale expectations

- Why it matters: this catches a whole class of mistakes before they become “JARVIS is broken” incidents.
- Command or action: run the obvious inspection command, open the relevant setting, or confirm the real network path from the daemon host.
- Healthy result: the observed value matches the intended design note for this deployment.
- If unhealthy: stop and fix this layer before enabling the next subsystem.

## Final bring-up sequence

1. Install JARVIS with one deliberate method.
2. Complete onboarding with one known-good provider.
3. Start the daemon in the foreground if possible and resolve the first startup error.
4. Confirm dashboard connectivity and a basic message round trip.
5. Add a fallback provider if you need resilience.
6. Add sidecars only after the base brain is healthy.
7. Add channels, voice, and Google integrations individually.
8. Add autostart or service management.
9. Add reverse proxying and remote exposure only after local health is confirmed.
10. Record the final topology, secrets strategy, backup plan, and rollback plan.

## Where To Go Next

- Read [Installation](/docs/installation) for the shorter canonical install page.
- Read [Troubleshooting](/docs/troubleshooting) for the shorter incident-first guide.
- Read [Error Atlas](/docs/error-atlas) when you want symptom-by-symptom recovery guidance.

