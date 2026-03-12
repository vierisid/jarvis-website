---
title: LLM Providers
description: Configure Anthropic, OpenAI, Google Gemini, or Ollama as your LLM provider.
---

JARVIS supports four LLM providers. You can set a primary provider and one or more fallbacks — if the primary fails or is unavailable, JARVIS automatically tries the next provider in the list.

All providers use native REST API calls (no SDKs). API keys are stored in `~/.jarvis/config.yaml`.

## Provider Overview

| Provider | Models | API Key Required | Local |
|---|---|---|---|
| Anthropic | Claude Opus 4.6, Sonnet 4.6, Haiku 4.5 | Yes | No |
| OpenAI | GPT-5.4, GPT-5.4-mini | Yes | No |
| Google Gemini | Gemini 3.1 Pro, Gemini 3 Flash | Yes | No |
| Ollama | Llama 3, Mistral, any GGUF model | No | Yes |

## Configuration

```yaml
llm:
  primary: anthropic                  # Which provider to use first
  fallback: [openai, gemini, ollama]  # Fallback order

  anthropic:
    api_key: "sk-ant-..."
    model: claude-sonnet-4-6

  openai:
    api_key: "sk-..."
    model: gpt-5.4

  gemini:
    api_key: "AIza..."
    model: gemini-3-flash-preview

  ollama:
    base_url: http://localhost:11434
    model: llama3
```

Set `primary` to the provider name (`anthropic`, `openai`, `gemini`, or `ollama`). The `fallback` array defines the order JARVIS tries if the primary is unavailable.

## Anthropic

The default and recommended provider. Anthropic's Claude models offer strong tool use, reasoning, and instruction following.

### Available Models

| Model | ID | Best For |
|---|---|---|
| Claude Opus 4.6 | `claude-opus-4-6` | Complex reasoning, long tasks |
| Claude Sonnet 4.6 | `claude-sonnet-4-6` | General use (default) |
| Claude Haiku 4.5 | `claude-haiku-4-5` | Fast, lightweight tasks |

### Configuration

```yaml
llm:
  primary: anthropic
  anthropic:
    api_key: "sk-ant-api03-..."
    model: claude-sonnet-4-6
```

### Getting an API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account and navigate to API Keys
3. Generate a new key

## OpenAI

OpenAI's GPT models are supported as a primary or fallback provider.

### Available Models

| Model | ID | Best For |
|---|---|---|
| GPT-5.4 | `gpt-5.4` | General use |
| GPT-5.4 Mini | `gpt-5.4-mini` | Fast, cost-effective |

### Configuration

```yaml
llm:
  primary: openai
  openai:
    api_key: "sk-..."
    model: gpt-5.4
```

### Getting an API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Navigate to API Keys
3. Create a new secret key

## Google Gemini

Gemini is accessed via Google's native REST API (not Vertex AI). No SDK required.

### Available Models

| Model | ID | Best For |
|---|---|---|
| Gemini 3.1 Pro | `gemini-3.1-pro` | Complex reasoning |
| Gemini 3 Flash | `gemini-3-flash-preview` | Fast, general use (default) |

### Configuration

```yaml
llm:
  primary: gemini
  gemini:
    api_key: "AIza..."
    model: gemini-3-flash-preview
```

### Getting an API Key

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Click "Get API key"
3. Create a key for your project

## Ollama (Local)

Run models locally with [Ollama](https://ollama.com). No API key needed — models run on your hardware.

### Available Models

Any model supported by Ollama works. Popular choices:

| Model | Command | Size |
|---|---|---|
| Llama 3 (8B) | `ollama pull llama3` | ~4.7 GB |
| Mistral (7B) | `ollama pull mistral` | ~4.1 GB |
| CodeLlama (13B) | `ollama pull codellama:13b` | ~7.4 GB |

### Configuration

```yaml
llm:
  primary: ollama
  ollama:
    base_url: http://localhost:11434   # Default Ollama address
    model: llama3
```

### Setup

1. Install Ollama: `curl -fsSL https://ollama.com/install.sh | sh`
2. Pull a model: `ollama pull llama3`
3. Ollama runs automatically on port 11434

## Fallback Behavior

When the primary provider fails (network error, rate limit, auth error), JARVIS tries each fallback in order:

```yaml
llm:
  primary: anthropic
  fallback: [openai, gemini, ollama]
```

In this configuration:
1. Try Anthropic first
2. If Anthropic fails, try OpenAI
3. If OpenAI fails, try Gemini
4. If Gemini fails, try Ollama (local, always available)

Fallback is automatic — no user intervention needed. The agent logs which provider was used.

## Environment Variables

Override API keys without editing the config file:

| Variable | Config Equivalent |
|---|---|
| `JARVIS_API_KEY` | `llm.anthropic.api_key` (when primary is anthropic) |
| `JARVIS_OPENAI_API_KEY` | `llm.openai.api_key` |
| `JARVIS_GEMINI_API_KEY` | `llm.gemini.api_key` |

## Hot Reload

Changing the LLM configuration in `config.yaml` takes effect on the next daemon restart:

```bash
jarvis restart
```

The onboarding wizard (`jarvis onboard`) can reconfigure your LLM provider at any time.
