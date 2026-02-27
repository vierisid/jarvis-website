---
title: Memory & Knowledge
description: How JARVIS builds and uses a persistent knowledge vault from your conversations.
---

JARVIS maintains a persistent knowledge vault stored in SQLite. After every response, it automatically extracts facts, preferences, events, and relationships from the conversation and stores them. Relevant knowledge is injected into the system prompt of future conversations so JARVIS always has context about you, your projects, and your preferences — without you repeating yourself.

## How Memory Works

The memory system operates in two directions: writing (extraction) and reading (retrieval).

### Writing: Automatic Extraction

After every response the primary agent generates, an extraction process runs fire-and-forget in the background:

1. The completed exchange (user message + agent response) is sent to the LLM with an extraction prompt
2. The LLM identifies entities worth remembering: facts, preferences, commitments, people, events, projects
3. Each entity is stored as a knowledge record in the SQLite vault with a type, content, and timestamp
4. The extraction does not delay or block your next message

This means JARVIS learns from every conversation automatically — you never need to explicitly tell it to remember something (though you can, and it will prioritize it).

### Reading: Retrieval and Injection

When you send a message, before generating a response:

1. JARVIS calls `extractSearchTerms()` on your message to identify the key topics, entities, and concepts
2. These terms are used to query the SQLite vault (full-text search + tag matching)
3. The most relevant knowledge records are assembled into a `knowledgeContext` block
4. This block is injected into the system prompt for the current turn

The agent therefore has relevant prior knowledge available when formulating its response, without the entire vault being included in every prompt (which would be expensive and noisy).

## Entity Types

The vault stores knowledge in typed categories:

| Type | Description | Example |
|---|---|---|
| `fact` | Objective facts about the user or world | "User is a software engineer at Acme Corp" |
| `preference` | User preferences and style choices | "User prefers concise, bullet-pointed answers" |
| `event` | Scheduled or past events | "Meeting with Sarah on March 3 at 2pm" |
| `person` | Information about people the user mentions | "Sarah is the user's manager at Acme" |
| `project` | Projects the user is working on | "Project Artemis: a TypeScript CLI tool for log analysis" |
| `commitment` | Things JARVIS promised to do | "Send daily summary of HN posts at 8am" |
| `credential` | Stored credentials or tokens (encrypted) | "Anthropic API key stored in vault" |
| `note` | Freeform notes the user asked to save | "Book recommendation: 'The Pragmatic Programmer'" |

## Knowledge Vault Schema

The SQLite database at `~/.jarvis/jarvis.db` stores knowledge in a `knowledge` table:

```sql
CREATE TABLE knowledge (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  type       TEXT NOT NULL,           -- entity type (see above)
  content    TEXT NOT NULL,           -- the knowledge content
  tags       TEXT,                    -- comma-separated tags for filtering
  source     TEXT,                    -- 'extraction' | 'manual' | 'tool'
  confidence REAL DEFAULT 1.0,        -- 0.0 to 1.0
  created_at INTEGER NOT NULL,        -- Unix timestamp
  updated_at INTEGER NOT NULL,
  expires_at INTEGER                  -- NULL = never expires
);
```

Full-text search is implemented as a separate FTS5 virtual table joined to `knowledge`.

## Explicit Memory Commands

While extraction is automatic, you can interact with memory directly:

```
Remember that I use dark mode on all my devices.
```

```
Forget what you know about my salary.
```

```
What do you know about project Artemis?
```

```
List everything you know about me.
```

These commands are processed by the primary agent, which calls the appropriate memory tools (`store_memory`, `delete_memory`, `search_memory`) directly.

## Memory Tools

The agent has access to three memory tools (in addition to automatic extraction):

### `store_memory`

Explicitly store a knowledge record.

```
Input: type (string), content (string), tags (string[])
```

### `search_memory`

Search the vault by content or tags.

```
Input: query (string), type (string, optional), limit (integer)
Returns: array of knowledge records
```

### `delete_memory`

Delete knowledge records matching a query or ID.

```
Input: id (integer) or query (string)
```

## Retrieval Tuning

The relevance of injected knowledge depends on how well `extractSearchTerms()` identifies the important concepts in your message. For short messages, this may retrieve less context than for detailed ones. If JARVIS seems to have forgotten something relevant, try mentioning it explicitly in your message to trigger retrieval.

The number of knowledge records injected per turn is capped to keep prompt sizes manageable (default: 20 records). Records are ranked by recency and semantic relevance to the current query.

## Privacy and Storage

- All knowledge is stored locally in `~/.jarvis/jarvis.db`
- No knowledge is sent to external services except as part of normal LLM prompts
- The extraction LLM call uses the same provider as your primary LLM
- You can inspect the vault directly: `sqlite3 ~/.jarvis/jarvis.db "SELECT * FROM knowledge LIMIT 20"`
- You can clear the entire vault: `jarvis doctor --clear-memory` (destructive, irreversible)

## Extraction Quality

Extraction quality depends on the LLM used. Claude models (especially Opus) tend to extract fine-grained and contextually appropriate knowledge. Smaller local models (via Ollama) may extract less accurately. If extraction quality is important to you, use the Anthropic provider for the primary LLM.
