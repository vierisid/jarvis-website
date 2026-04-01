---
title: Sites Workspace
description: Build, edit, preview, and manage web projects inside the JARVIS dashboard.
---

The Sites workspace is JARVIS's built-in environment for working on web projects.

It is not a replacement for your editor or git tooling in every case. It is a product surface that lets JARVIS operate on projects directly through the dashboard with an opinionated workflow around previews, files, git state, and project chat.

## What the Sites Workspace Includes

The merged product exposes:

- a Sites page in the main dashboard navigation
- project tabs
- dev server lifecycle management
- file tree and file editing views
- project-scoped chat
- git-aware project status
- GitHub connection support

## What a Project Tracks

Each project currently tracks data such as:

- name
- path on disk
- framework
- dev server status
- current git branch
- dirty/clean working tree state
- GitHub URL if connected

## Typical Workflow

1. Open the Sites page
2. Create or open a project
3. Let JARVIS start the dev server
4. Use the file tree and project chat together
5. Preview the running project
6. Inspect git status and project changes

## Configuration

The workspace is controlled by the `sites` config block:

```yaml
sites:
  enabled: true
  projects_dir: "~/.jarvis/projects"
  port_range_start: 4000
  port_range_end: 4999
  auto_commit: true
  max_concurrent_servers: 3
```

## Good Use Cases

Sites is especially useful when you want:

- JARVIS to work on a contained web project
- a built-in preview workflow
- project chat tied to a specific project context
- a quick way to inspect dev server and git state in one place

## Relationship to the Main Chat

The main Chat page is general-purpose.

The Sites workspace is project-centric.

Use Sites when the work should stay attached to a single web project and its files.

## Video Tutorial Placeholder

> Video tutorial placeholder: creating a project and using the Sites workspace end to end.

Add your future video link here.
