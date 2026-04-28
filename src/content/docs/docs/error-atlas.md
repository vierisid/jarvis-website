---
title: Error Atlas
description: A large symptom-first catalog of JARVIS setup, runtime, network, provider, sidecar, and integration failure modes with concrete recovery steps.
---

# Error Atlas

This catalog is intentionally exhaustive. Use it when you know the symptom but do not yet know which subsystem owns the problem.

## First-response commands

```bash
jarvis doctor
jarvis status
jarvis logs -n 200
```

## Daemon startup

### Error 001: Daemon startup — service will not start

- **Symptom**: The operator sees that the daemon startup path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 002: Daemon startup — port is already in use

- **Symptom**: The operator sees that the daemon startup path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 003: Daemon startup — permission is denied

- **Symptom**: The operator sees that the daemon startup path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 004: Daemon startup — configured value is invalid

- **Symptom**: The operator sees that the daemon startup path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 005: Daemon startup — required secret is missing

- **Symptom**: The operator sees that the daemon startup path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 006: Daemon startup — host or URL points at the wrong machine

- **Symptom**: The operator sees that the daemon startup path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 007: Daemon startup — request times out

- **Symptom**: The operator sees that the daemon startup path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 008: Daemon startup — authentication fails

- **Symptom**: The operator sees that the daemon startup path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 009: Daemon startup — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the daemon startup path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 010: Daemon startup — behavior changed after an update

- **Symptom**: The operator sees that the daemon startup path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the daemon startup layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `jarvis status && jarvis logs -n 200` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: clear the first startup blocker before retrying detached mode.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Port binding

### Error 011: Port binding — service will not start

- **Symptom**: The operator sees that the port binding path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 012: Port binding — port is already in use

- **Symptom**: The operator sees that the port binding path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 013: Port binding — permission is denied

- **Symptom**: The operator sees that the port binding path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 014: Port binding — configured value is invalid

- **Symptom**: The operator sees that the port binding path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 015: Port binding — required secret is missing

- **Symptom**: The operator sees that the port binding path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 016: Port binding — host or URL points at the wrong machine

- **Symptom**: The operator sees that the port binding path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 017: Port binding — request times out

- **Symptom**: The operator sees that the port binding path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 018: Port binding — authentication fails

- **Symptom**: The operator sees that the port binding path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 019: Port binding — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the port binding path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 020: Port binding — behavior changed after an update

- **Symptom**: The operator sees that the port binding path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the port binding layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: On Linux run `ss -ltnp | grep 3142`; on macOS run `lsof -i :3142`. Compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: free the occupied port or move the daemon intentionally.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Configuration parsing

### Error 021: Configuration parsing — service will not start

- **Symptom**: The operator sees that the configuration parsing path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 022: Configuration parsing — port is already in use

- **Symptom**: The operator sees that the configuration parsing path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 023: Configuration parsing — permission is denied

- **Symptom**: The operator sees that the configuration parsing path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 024: Configuration parsing — configured value is invalid

- **Symptom**: The operator sees that the configuration parsing path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 025: Configuration parsing — required secret is missing

- **Symptom**: The operator sees that the configuration parsing path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 026: Configuration parsing — host or URL points at the wrong machine

- **Symptom**: The operator sees that the configuration parsing path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 027: Configuration parsing — request times out

- **Symptom**: The operator sees that the configuration parsing path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 028: Configuration parsing — authentication fails

- **Symptom**: The operator sees that the configuration parsing path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 029: Configuration parsing — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the configuration parsing path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 030: Configuration parsing — behavior changed after an update

- **Symptom**: The operator sees that the configuration parsing path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the configuration parsing layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Review `~/.jarvis/config.yaml` and the daemon log, then compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: correct invalid YAML, wrong field names, or malformed values.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Dashboard connectivity

### Error 031: Dashboard connectivity — service will not start

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 032: Dashboard connectivity — port is already in use

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 033: Dashboard connectivity — permission is denied

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 034: Dashboard connectivity — configured value is invalid

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 035: Dashboard connectivity — required secret is missing

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 036: Dashboard connectivity — host or URL points at the wrong machine

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 037: Dashboard connectivity — request times out

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 038: Dashboard connectivity — authentication fails

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 039: Dashboard connectivity — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 040: Dashboard connectivity — behavior changed after an update

- **Symptom**: The operator sees that the dashboard connectivity path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the dashboard connectivity layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `open the dashboard URL and inspect browser devtools plus daemon logs` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the daemon, URL, auth, or proxy layer that breaks connectivity.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## WebSocket upgrades

### Error 041: WebSocket upgrades — service will not start

- **Symptom**: The operator sees that the websocket upgrades path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 042: WebSocket upgrades — port is already in use

- **Symptom**: The operator sees that the websocket upgrades path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 043: WebSocket upgrades — permission is denied

- **Symptom**: The operator sees that the websocket upgrades path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 044: WebSocket upgrades — configured value is invalid

- **Symptom**: The operator sees that the websocket upgrades path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 045: WebSocket upgrades — required secret is missing

- **Symptom**: The operator sees that the websocket upgrades path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 046: WebSocket upgrades — host or URL points at the wrong machine

- **Symptom**: The operator sees that the websocket upgrades path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 047: WebSocket upgrades — request times out

- **Symptom**: The operator sees that the websocket upgrades path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 048: WebSocket upgrades — authentication fails

- **Symptom**: The operator sees that the websocket upgrades path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 049: WebSocket upgrades — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the websocket upgrades path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 050: WebSocket upgrades — behavior changed after an update

- **Symptom**: The operator sees that the websocket upgrades path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the websocket upgrades layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `inspect /ws behavior through the proxy and browser console` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: forward WebSocket upgrades correctly and align auth expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Reverse proxying

### Error 051: Reverse proxying — service will not start

- **Symptom**: The operator sees that the reverse proxying path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 052: Reverse proxying — port is already in use

- **Symptom**: The operator sees that the reverse proxying path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 053: Reverse proxying — permission is denied

- **Symptom**: The operator sees that the reverse proxying path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 054: Reverse proxying — configured value is invalid

- **Symptom**: The operator sees that the reverse proxying path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 055: Reverse proxying — required secret is missing

- **Symptom**: The operator sees that the reverse proxying path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 056: Reverse proxying — host or URL points at the wrong machine

- **Symptom**: The operator sees that the reverse proxying path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 057: Reverse proxying — request times out

- **Symptom**: The operator sees that the reverse proxying path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 058: Reverse proxying — authentication fails

- **Symptom**: The operator sees that the reverse proxying path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 059: Reverse proxying — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the reverse proxying path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 060: Reverse proxying — behavior changed after an update

- **Symptom**: The operator sees that the reverse proxying path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the reverse proxying layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `check proxy config, upstream port, and TLS hostnames` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair upstream targets, headers, and upgrade handling.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Anthropic provider

### Error 061: Anthropic provider — service will not start

- **Symptom**: The operator sees that the anthropic provider path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 062: Anthropic provider — port is already in use

- **Symptom**: The operator sees that the anthropic provider path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 063: Anthropic provider — permission is denied

- **Symptom**: The operator sees that the anthropic provider path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 064: Anthropic provider — configured value is invalid

- **Symptom**: The operator sees that the anthropic provider path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 065: Anthropic provider — required secret is missing

- **Symptom**: The operator sees that the anthropic provider path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 066: Anthropic provider — host or URL points at the wrong machine

- **Symptom**: The operator sees that the anthropic provider path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 067: Anthropic provider — request times out

- **Symptom**: The operator sees that the anthropic provider path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 068: Anthropic provider — authentication fails

- **Symptom**: The operator sees that the anthropic provider path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 069: Anthropic provider — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the anthropic provider path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 070: Anthropic provider — behavior changed after an update

- **Symptom**: The operator sees that the anthropic provider path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the anthropic provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider from the daemon host with the configured model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the API key, model name, or account access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## OpenAI provider

### Error 071: OpenAI provider — service will not start

- **Symptom**: The operator sees that the openai provider path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 072: OpenAI provider — port is already in use

- **Symptom**: The operator sees that the openai provider path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 073: OpenAI provider — permission is denied

- **Symptom**: The operator sees that the openai provider path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 074: OpenAI provider — configured value is invalid

- **Symptom**: The operator sees that the openai provider path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 075: OpenAI provider — required secret is missing

- **Symptom**: The operator sees that the openai provider path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 076: OpenAI provider — host or URL points at the wrong machine

- **Symptom**: The operator sees that the openai provider path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 077: OpenAI provider — request times out

- **Symptom**: The operator sees that the openai provider path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 078: OpenAI provider — authentication fails

- **Symptom**: The operator sees that the openai provider path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 079: OpenAI provider — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the openai provider path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 080: OpenAI provider — behavior changed after an update

- **Symptom**: The operator sees that the openai provider path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the openai provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the provider with a minimal prompt and inspect request-shaping issues` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model, or build compatibility.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Groq provider

### Error 081: Groq provider — service will not start

- **Symptom**: The operator sees that the groq provider path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 082: Groq provider — port is already in use

- **Symptom**: The operator sees that the groq provider path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 083: Groq provider — permission is denied

- **Symptom**: The operator sees that the groq provider path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 084: Groq provider — configured value is invalid

- **Symptom**: The operator sees that the groq provider path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 085: Groq provider — required secret is missing

- **Symptom**: The operator sees that the groq provider path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 086: Groq provider — host or URL points at the wrong machine

- **Symptom**: The operator sees that the groq provider path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 087: Groq provider — request times out

- **Symptom**: The operator sees that the groq provider path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 088: Groq provider — authentication fails

- **Symptom**: The operator sees that the groq provider path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 089: Groq provider — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the groq provider path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 090: Groq provider — behavior changed after an update

- **Symptom**: The operator sees that the groq provider path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the groq provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test with a short prompt and inspect request size in longer failures` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair auth, model selection, or oversize prompts.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Gemini provider

### Error 091: Gemini provider — service will not start

- **Symptom**: The operator sees that the gemini provider path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 092: Gemini provider — port is already in use

- **Symptom**: The operator sees that the gemini provider path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 093: Gemini provider — permission is denied

- **Symptom**: The operator sees that the gemini provider path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 094: Gemini provider — configured value is invalid

- **Symptom**: The operator sees that the gemini provider path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 095: Gemini provider — required secret is missing

- **Symptom**: The operator sees that the gemini provider path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 096: Gemini provider — host or URL points at the wrong machine

- **Symptom**: The operator sees that the gemini provider path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 097: Gemini provider — request times out

- **Symptom**: The operator sees that the gemini provider path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 098: Gemini provider — authentication fails

- **Symptom**: The operator sees that the gemini provider path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 099: Gemini provider — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the gemini provider path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 100: Gemini provider — behavior changed after an update

- **Symptom**: The operator sees that the gemini provider path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the gemini provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the selected model and inspect provider-specific errors` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the key, model slug, or request expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## NVIDIA provider

### Error 101: NVIDIA provider — service will not start

- **Symptom**: The operator sees that the nvidia provider path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 102: NVIDIA provider — port is already in use

- **Symptom**: The operator sees that the nvidia provider path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 103: NVIDIA provider — permission is denied

- **Symptom**: The operator sees that the nvidia provider path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 104: NVIDIA provider — configured value is invalid

- **Symptom**: The operator sees that the nvidia provider path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 105: NVIDIA provider — required secret is missing

- **Symptom**: The operator sees that the nvidia provider path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 106: NVIDIA provider — host or URL points at the wrong machine

- **Symptom**: The operator sees that the nvidia provider path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 107: NVIDIA provider — request times out

- **Symptom**: The operator sees that the nvidia provider path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 108: NVIDIA provider — authentication fails

- **Symptom**: The operator sees that the nvidia provider path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 109: NVIDIA provider — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the nvidia provider path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 110: NVIDIA provider — behavior changed after an update

- **Symptom**: The operator sees that the nvidia provider path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the nvidia provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test the dashboard settings path and a minimal runtime prompt` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair provider wiring, key storage, or the selected model.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## OpenRouter provider

### Error 111: OpenRouter provider — service will not start

- **Symptom**: The operator sees that the openrouter provider path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 112: OpenRouter provider — port is already in use

- **Symptom**: The operator sees that the openrouter provider path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 113: OpenRouter provider — permission is denied

- **Symptom**: The operator sees that the openrouter provider path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 114: OpenRouter provider — configured value is invalid

- **Symptom**: The operator sees that the openrouter provider path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 115: OpenRouter provider — required secret is missing

- **Symptom**: The operator sees that the openrouter provider path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 116: OpenRouter provider — host or URL points at the wrong machine

- **Symptom**: The operator sees that the openrouter provider path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 117: OpenRouter provider — request times out

- **Symptom**: The operator sees that the openrouter provider path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 118: OpenRouter provider — authentication fails

- **Symptom**: The operator sees that the openrouter provider path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 119: OpenRouter provider — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the openrouter provider path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 120: OpenRouter provider — behavior changed after an update

- **Symptom**: The operator sees that the openrouter provider path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the openrouter provider layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `validate both the OpenRouter key and the chosen routed model` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair key scope, model routing, or provider-specific access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Ollama reachability

### Error 121: Ollama reachability — service will not start

- **Symptom**: The operator sees that the ollama reachability path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 122: Ollama reachability — port is already in use

- **Symptom**: The operator sees that the ollama reachability path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 123: Ollama reachability — permission is denied

- **Symptom**: The operator sees that the ollama reachability path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 124: Ollama reachability — configured value is invalid

- **Symptom**: The operator sees that the ollama reachability path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 125: Ollama reachability — required secret is missing

- **Symptom**: The operator sees that the ollama reachability path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 126: Ollama reachability — host or URL points at the wrong machine

- **Symptom**: The operator sees that the ollama reachability path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 127: Ollama reachability — request times out

- **Symptom**: The operator sees that the ollama reachability path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 128: Ollama reachability — authentication fails

- **Symptom**: The operator sees that the ollama reachability path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 129: Ollama reachability — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the ollama reachability path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 130: Ollama reachability — behavior changed after an update

- **Symptom**: The operator sees that the ollama reachability path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the ollama reachability layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `curl the configured base URL from the daemon host` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: replace impossible localhost URLs with daemon-reachable addresses.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Sidecar enrollment

### Error 131: Sidecar enrollment — service will not start

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 132: Sidecar enrollment — port is already in use

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 133: Sidecar enrollment — permission is denied

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 134: Sidecar enrollment — configured value is invalid

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 135: Sidecar enrollment — required secret is missing

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 136: Sidecar enrollment — host or URL points at the wrong machine

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 137: Sidecar enrollment — request times out

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 138: Sidecar enrollment — authentication fails

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 139: Sidecar enrollment — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 140: Sidecar enrollment — behavior changed after an update

- **Symptom**: The operator sees that the sidecar enrollment path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the sidecar enrollment layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the daemon URL, token, and machine reachability` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair enrollment secret, network path, or host expectations.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Desktop control

### Error 141: Desktop control — service will not start

- **Symptom**: The operator sees that the desktop control path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 142: Desktop control — port is already in use

- **Symptom**: The operator sees that the desktop control path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 143: Desktop control — permission is denied

- **Symptom**: The operator sees that the desktop control path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 144: Desktop control — configured value is invalid

- **Symptom**: The operator sees that the desktop control path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 145: Desktop control — required secret is missing

- **Symptom**: The operator sees that the desktop control path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 146: Desktop control — host or URL points at the wrong machine

- **Symptom**: The operator sees that the desktop control path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 147: Desktop control — request times out

- **Symptom**: The operator sees that the desktop control path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 148: Desktop control — authentication fails

- **Symptom**: The operator sees that the desktop control path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 149: Desktop control — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the desktop control path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 150: Desktop control — behavior changed after an update

- **Symptom**: The operator sees that the desktop control path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the desktop control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify the correct sidecar and desktop session are actually online` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair topology assumptions or host capability gaps.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Browser control

### Error 151: Browser control — service will not start

- **Symptom**: The operator sees that the browser control path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 152: Browser control — port is already in use

- **Symptom**: The operator sees that the browser control path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 153: Browser control — permission is denied

- **Symptom**: The operator sees that the browser control path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 154: Browser control — configured value is invalid

- **Symptom**: The operator sees that the browser control path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 155: Browser control — required secret is missing

- **Symptom**: The operator sees that the browser control path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 156: Browser control — host or URL points at the wrong machine

- **Symptom**: The operator sees that the browser control path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 157: Browser control — request times out

- **Symptom**: The operator sees that the browser control path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 158: Browser control — authentication fails

- **Symptom**: The operator sees that the browser control path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 159: Browser control — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the browser control path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 160: Browser control — behavior changed after an update

- **Symptom**: The operator sees that the browser control path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the browser control layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `confirm a supported browser exists on the machine that should be controlled` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair browser installation, permissions, or target-machine assumptions.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Voice and audio

### Error 161: Voice and audio — service will not start

- **Symptom**: The operator sees that the voice and audio path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 162: Voice and audio — port is already in use

- **Symptom**: The operator sees that the voice and audio path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 163: Voice and audio — permission is denied

- **Symptom**: The operator sees that the voice and audio path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 164: Voice and audio — configured value is invalid

- **Symptom**: The operator sees that the voice and audio path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 165: Voice and audio — required secret is missing

- **Symptom**: The operator sees that the voice and audio path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 166: Voice and audio — host or URL points at the wrong machine

- **Symptom**: The operator sees that the voice and audio path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 167: Voice and audio — request times out

- **Symptom**: The operator sees that the voice and audio path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 168: Voice and audio — authentication fails

- **Symptom**: The operator sees that the voice and audio path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 169: Voice and audio — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the voice and audio path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 170: Voice and audio — behavior changed after an update

- **Symptom**: The operator sees that the voice and audio path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the voice and audio layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `test TTS and STT independently before testing full voice mode` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair the failing audio sub-layer instead of treating voice as one black box.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Telegram channel

### Error 171: Telegram channel — service will not start

- **Symptom**: The operator sees that the telegram channel path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 172: Telegram channel — port is already in use

- **Symptom**: The operator sees that the telegram channel path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 173: Telegram channel — permission is denied

- **Symptom**: The operator sees that the telegram channel path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 174: Telegram channel — configured value is invalid

- **Symptom**: The operator sees that the telegram channel path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 175: Telegram channel — required secret is missing

- **Symptom**: The operator sees that the telegram channel path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 176: Telegram channel — host or URL points at the wrong machine

- **Symptom**: The operator sees that the telegram channel path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 177: Telegram channel — request times out

- **Symptom**: The operator sees that the telegram channel path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 178: Telegram channel — authentication fails

- **Symptom**: The operator sees that the telegram channel path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 179: Telegram channel — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the telegram channel path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 180: Telegram channel — behavior changed after an update

- **Symptom**: The operator sees that the telegram channel path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the telegram channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, allowed users, and bot visibility` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair token scope, allowed sender list, or runtime registration.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Discord channel

### Error 181: Discord channel — service will not start

- **Symptom**: The operator sees that the discord channel path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 182: Discord channel — port is already in use

- **Symptom**: The operator sees that the discord channel path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 183: Discord channel — permission is denied

- **Symptom**: The operator sees that the discord channel path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 184: Discord channel — configured value is invalid

- **Symptom**: The operator sees that the discord channel path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 185: Discord channel — required secret is missing

- **Symptom**: The operator sees that the discord channel path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 186: Discord channel — host or URL points at the wrong machine

- **Symptom**: The operator sees that the discord channel path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 187: Discord channel — request times out

- **Symptom**: The operator sees that the discord channel path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 188: Discord channel — authentication fails

- **Symptom**: The operator sees that the discord channel path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 189: Discord channel — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the discord channel path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 190: Discord channel — behavior changed after an update

- **Symptom**: The operator sees that the discord channel path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the discord channel layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify token, intents, and channel permissions` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair bot permissions, visibility, or message-content access.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Google integrations

### Error 191: Google integrations — service will not start

- **Symptom**: The operator sees that the google integrations path appears broken because service will not start.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 192: Google integrations — port is already in use

- **Symptom**: The operator sees that the google integrations path appears broken because port is already in use.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 193: Google integrations — permission is denied

- **Symptom**: The operator sees that the google integrations path appears broken because permission is denied.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 194: Google integrations — configured value is invalid

- **Symptom**: The operator sees that the google integrations path appears broken because configured value is invalid.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 195: Google integrations — required secret is missing

- **Symptom**: The operator sees that the google integrations path appears broken because required secret is missing.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 196: Google integrations — host or URL points at the wrong machine

- **Symptom**: The operator sees that the google integrations path appears broken because host or URL points at the wrong machine.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 197: Google integrations — request times out

- **Symptom**: The operator sees that the google integrations path appears broken because request times out.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 198: Google integrations — authentication fails

- **Symptom**: The operator sees that the google integrations path appears broken because authentication fails.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 199: Google integrations — the surface looks healthy but actions still fail

- **Symptom**: The operator sees that the google integrations path appears broken because the surface looks healthy but actions still fail.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

### Error 200: Google integrations — behavior changed after an update

- **Symptom**: The operator sees that the google integrations path appears broken because behavior changed after an update.
- **What it usually means**: A failure exists somewhere in the google integrations layer, or a neighboring layer is presenting as the primary incident.
- **Most common cause**: In real deployments this often comes from stale assumptions, mismatched hosts, missing secrets, wrong model names, or drift between config and runtime state.
- **How to confirm**: Run `verify OAuth client, redirect URI, scopes, and operator account` and compare the result to the intended topology and configuration for this deployment.
- **Primary fix**: repair OAuth configuration and re-authorize cleanly.
- **Secondary fix**: Reduce the system to one host, one URL, one provider, and one reproduction path before making more changes.
- **Operator note**: Capture the exact host, port, branch, version, and config source while the evidence is fresh.
- **Related docs**: [Complete Setup Handbook](/docs/complete-setup-handbook), [Installation](/docs/installation), and [Troubleshooting](/docs/troubleshooting).

## Closing advice

- Fix the first real error, not the tenth side effect.
- Confirm each layer from the daemon host perspective.
- Prefer topology notes and reproducible commands over memory.
- Update your runbook when you discover a new failure mode.
