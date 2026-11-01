// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URLs com barra final (/servico/) preservam o formato já indexado pelo Google
// e funcionam no GitHub Pages sem redirecionamentos.
export default defineConfig({
  site: 'https://munizinformatica.com.br',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
