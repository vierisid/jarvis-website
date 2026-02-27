import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Install tracking endpoint.
 *
 * POST /api/install — record an install event
 *   Body (optional): { "os": "wsl|linux|macos", "bun_version": "1.x.x" }
 *   Returns: { "ok": true }
 *
 * GET /api/install — return current stats
 *   Query: ?token=<STATS_TOKEN>
 *   Returns: { "total": N, "by_os": { ... }, "recent": [...] }
 *
 * Uses Vercel Blob storage to persist a JSON stats file.
 * Falls back gracefully if storage is unavailable.
 */

interface InstallEvent {
  timestamp: string;
  os: string;
  bun_version: string;
  ip_hash: string;
}

interface InstallStats {
  total: number;
  by_os: Record<string, number>;
  events: InstallEvent[];
}

const BLOB_URL = 'install-stats.json';

async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(ip + (import.meta.env.STATS_SALT || 'jarvis'));
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .slice(0, 8)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function loadStats(): Promise<InstallStats> {
  try {
    const { get } = await import('@vercel/blob');
    const blob = await get(BLOB_URL);
    if (blob) {
      const res = await fetch(blob.url);
      return (await res.json()) as InstallStats;
    }
  } catch {
    // Blob not available or not found
  }
  return { total: 0, by_os: {}, events: [] };
}

async function saveStats(stats: InstallStats): Promise<void> {
  try {
    const { put } = await import('@vercel/blob');
    await put(BLOB_URL, JSON.stringify(stats), {
      access: 'public',
      addRandomSuffix: false,
    });
  } catch {
    // Blob not available — stats are lost but install still succeeds
  }
}

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    let os = 'unknown';
    let bun_version = 'unknown';

    try {
      const body = await request.json();
      os = body.os || 'unknown';
      bun_version = body.bun_version || 'unknown';
    } catch {
      // No body or invalid JSON — that's fine
    }

    const clientIP =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';
    const ip_hash = await hashIP(clientIP);

    const stats = await loadStats();

    stats.total += 1;
    stats.by_os[os] = (stats.by_os[os] || 0) + 1;

    stats.events.push({
      timestamp: new Date().toISOString(),
      os,
      bun_version,
      ip_hash,
    });

    // Keep only last 1000 events
    if (stats.events.length > 1000) {
      stats.events = stats.events.slice(-1000);
    }

    await saveStats(stats);

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch {
    // Never let tracking fail the install
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }
};

export const GET: APIRoute = async ({ url }) => {
  const headers = { 'Content-Type': 'application/json' };
  const token = url.searchParams.get('token');
  const expectedToken = import.meta.env.STATS_TOKEN;

  if (!expectedToken || token !== expectedToken) {
    // Public endpoint: just return total count
    const stats = await loadStats();
    return new Response(JSON.stringify({ total: stats.total }), {
      status: 200,
      headers,
    });
  }

  // Authenticated: return full stats
  const stats = await loadStats();
  return new Response(JSON.stringify(stats), { status: 200, headers });
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
