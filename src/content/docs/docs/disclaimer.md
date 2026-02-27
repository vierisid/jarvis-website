---
title: Disclaimer & Liability
description: Important legal disclaimer, security warnings, and liability information for JARVIS.
---

**Last updated:** February 2026

## No Warranty

JARVIS is provided **"as is"**, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. The entire risk arising out of the use or performance of the software remains with you.

## Security Risks

JARVIS is an autonomous agent with broad system access. By installing and running it, you acknowledge that it can:

- **Control your browser** — navigate to websites, click elements, fill forms, read page content, and execute JavaScript in open tabs.
- **Control your desktop** — interact with native applications, click UI elements, type keystrokes, move windows, and take screenshots of your screen.
- **Access your file system** — read, write, create, and delete files on your machine.
- **Execute shell commands** — run arbitrary terminal commands with your user's permissions.
- **Access external services** — send and read emails (Gmail), manage your calendar (Google Calendar), send messages via Telegram and Discord on your behalf.
- **Act proactively** — perform scheduled and triggered actions without explicit per-action confirmation, depending on your authority configuration.
- **Delegate to sub-agents** — spawn autonomous sub-agents that operate in parallel, each with the full tool set.

These capabilities are powerful by design, but they carry inherent risk. A misconfigured or misbehaving agent could send unintended emails, delete files, make purchases, leak sensitive data, or cause other damage.

## Your Responsibility

By using JARVIS, you agree that:

1. **You are solely responsible** for all actions JARVIS takes on your behalf, including those performed autonomously or by sub-agents.
2. **You have reviewed** the [Authority & Safety](/docs/authority) documentation and configured appropriate guardrails before enabling autonomous operation.
3. **You understand** that AI models can hallucinate, misinterpret instructions, and take unexpected actions — JARVIS is no exception.
4. **You will not use JARVIS** for any illegal, malicious, or unauthorized purpose, including but not limited to: unauthorized access to systems, spamming, harassment, fraud, or violation of any third-party terms of service.
5. **You are responsible** for securing your API keys, credentials, OAuth tokens, and any other secrets stored in your JARVIS configuration.
6. **You accept all risk** associated with running an autonomous agent on your machine, including data loss, security breaches, financial costs (API usage), and unintended actions.

## Third-Party Services

JARVIS integrates with third-party services including Anthropic, OpenAI, Google (Gmail, Calendar), Telegram, Discord, and others. Your use of these services through JARVIS is governed by their respective terms of service and privacy policies. The JARVIS maintainers are not responsible for:

- API costs incurred through your usage.
- Violations of third-party terms of service caused by JARVIS actions.
- Data shared with or processed by third-party APIs.

## Limitation of Liability

In no event shall the authors, maintainers, or contributors of JARVIS be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including but not limited to procurement of substitute goods or services, loss of use, data, or profits, or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.

## Experimental Software

JARVIS is experimental, actively developed software. Features may break, APIs may change, and behavior may be unpredictable between versions. Do not rely on JARVIS for critical, irreversible, or high-stakes operations without human oversight.

## Recommendations

- Start with the `supervised` authority level and only escalate after you understand the system.
- Review the [Authority & Safety](/docs/authority) configuration carefully.
- Keep JARVIS updated to benefit from security patches.
- Monitor the daemon logs and dashboard for unexpected activity.
- Never store secrets directly in configuration files that are committed to version control.
- Run JARVIS in an environment where you can afford the consequences of unexpected actions.
