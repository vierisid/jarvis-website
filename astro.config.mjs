// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://getjarvis.dev',
  adapter: vercel(),
  integrations: [
    starlight({
      title: 'usejarvis',
      description: 'Docs for usejarvis — an operating system for AI agents: an always-on runtime that works your apps on screen while you watch.',
      favicon: '/favicon.svg',
      components: {
        // brand lockup (pebble ring + two-tone wordmark) in the docs header
        SiteTitle: './src/components/SiteTitle.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/vierisid/jarvis' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/2HgF5krXrj' },
      ],
      customCss: ['./src/styles/starlight-brand.css'],
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#FAFBFC', media: '(prefers-color-scheme: light)' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0B0D10', media: '(prefers-color-scheme: dark)' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400&family=Spline+Sans+Mono:wght@400;500;600&display=swap' } },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs/introduction' },
            { label: 'Installation', slug: 'docs/installation' },
            { label: 'Quick Start', slug: 'docs/quickstart' },
            { label: 'Configuration', slug: 'docs/configuration' },
            { label: 'Contributing', slug: 'docs/contributing' },
          ],
        },
        {
          label: 'Core Features',
          items: [
            { label: 'Browser Control', slug: 'docs/browser-control' },
            { label: 'Desktop Control', slug: 'docs/desktop-control' },
            { label: 'Sites Workspace', slug: 'docs/sites' },
            { label: 'Voice Interface', slug: 'docs/voice' },
            { label: 'Multi-Agent System', slug: 'docs/multi-agent' },
            { label: 'Memory & Knowledge', slug: 'docs/memory' },
            { label: 'Continuous Awareness', slug: 'docs/awareness' },
            { label: 'Workflow Automation', slug: 'docs/workflows' },
            { label: 'Autonomous Goals', slug: 'docs/goals' },
            { label: 'Proactive Agent', slug: 'docs/proactive-agent' },
          ],
        },
        {
          label: 'Channels',
          items: [
            { label: 'Dashboard', slug: 'docs/dashboard' },
            { label: 'Telegram', slug: 'docs/telegram' },
            { label: 'Discord', slug: 'docs/discord' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            { label: 'LLM Providers', slug: 'docs/llm-providers' },
            { label: 'Authority & Safety', slug: 'docs/authority' },
            { label: 'Autostart', slug: 'docs/autostart' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'CLI Commands', slug: 'docs/cli' },
            { label: 'Config Reference', slug: 'docs/config-reference' },
            { label: 'WebSocket API', slug: 'docs/websocket-api' },
            { label: 'Troubleshooting', slug: 'docs/troubleshooting' },
            { label: 'Disclaimer & Liability', slug: 'docs/disclaimer' },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
