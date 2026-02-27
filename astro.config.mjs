// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    starlight({
      title: 'J.A.R.V.I.S.',
      description: 'Just A Rather Very Intelligent System — An always-on autonomous AI daemon.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/vierisid/jarvis' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/jarvis-ai' },
      ],
      customCss: ['./src/styles/global.css'],
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0a0a0a' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap' } },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs/introduction' },
            { label: 'Installation', slug: 'docs/installation' },
            { label: 'Quick Start', slug: 'docs/quickstart' },
            { label: 'Configuration', slug: 'docs/configuration' },
          ],
        },
        {
          label: 'Core Features',
          items: [
            { label: 'Browser Control', slug: 'docs/browser-control' },
            { label: 'Desktop Control', slug: 'docs/desktop-control' },
            { label: 'Voice Interface', slug: 'docs/voice' },
            { label: 'Multi-Agent System', slug: 'docs/multi-agent' },
            { label: 'Memory & Knowledge', slug: 'docs/memory' },
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
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
