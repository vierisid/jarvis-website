---
title: LLM Providers
description: Choose a primary model, configure fallbacks, and understand the tradeoffs between Anthropic, OpenAI, Groq, Gemini, Ollama, and OpenRouter.
---

JARVIS supports multiple LLM providers and can fall back between them automatically.

The provider system is configured under `llm` in `~/.jarvis/config.yaml`.

## Supported Providers

The merged product currently exposes these provider blocks:

- Anthropic
- OpenAI
- Groq
- Gemini
- Ollama
- OpenRouter

## Recommended Starting Point

For most users:

- Primary: `anthropic`
- Fallback: `["openai", "ollama"]`

That gives you a strong default cloud model plus a cloud fallback and an optional local fallback.

## Example Configuration

```yaml
llm:
  primary: "anthropic"
  fallback: ["openai", "ollama"]

  anthropic:
    api_key: "sk-ant-..."
    model: "claude-sonnet-4-6"

  openai:
    api_key: "sk-..."
    model: "gpt-5.4"

  ollama:
    base_url: "http://localhost:11434"
    model: "llama3"
```

## Provider Notes

### Anthropic

Best default for many users.

Strengths:

- Strong instruction following
- Strong tool use
- Good balance for complex autonomous tasks

### OpenAI

A strong alternative or fallback.

Strengths:

- Broad model family
- Good tool use
- Good fallback for cloud-hosted setups

### Groq

Useful when you care about latency and compatible API access.

### Gemini

A strong additional provider if you want another cloud fallback option.

### Ollama

Best when you want local inference or reduced cloud dependence.

Strengths:

- No per-token cloud billing
- Local model hosting
- Useful as a fallback when cloud providers are unavailable

Important operational note:

- `ollama.base_url` is resolved from the daemon's network point of view, not your browser's.
- If the daemon runs on a VPS and Ollama runs on your laptop, `http://localhost:11434` will not work unless the daemon and Ollama are on the same host.

This is one of the most common setup mistakes. See [Troubleshooting](/docs/troubleshooting).

### OpenRouter

Useful if you want access to many models through one provider API key.

## Fallback Strategy

JARVIS tries:

1. The `primary` provider
2. Each provider in `fallback`, in order

That means provider order matters. Keep the list short and intentional.

## Good Provider Setups

### Cloud-first

```yaml
llm:
  primary: "anthropic"
  fallback: ["openai", "gemini"]
```

### Hybrid cloud + local

```yaml
llm:
  primary: "anthropic"
  fallback: ["openai", "ollama"]
```

### Local-first

```yaml
llm:
  primary: "ollama"
  fallback: []
```

## Video Tutorial Placeholder

> Video tutorial placeholder: choosing providers, API keys, and fallback order.

Add your future video link here.
