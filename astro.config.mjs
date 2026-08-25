// @ts-check
import sitemap from '@astrojs/sitemap';
import { sitemapConfig } from '@justinguese/astro-kit/lib/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://konforme-ki.de',
  integrations: [
    sitemap(
      sitemapConfig({
        priorities: { '/': 1.0, '/ratgeber/': 0.9 },
        legalPaths: ['/impressum', '/datenschutz', '/agb', '/rdg-hinweis'],
        exclude: ['/pdf-quelle'],
      }),
    ),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Required while the kit is consumed via `npm link`: Astro keys its compile
    // cache by resolved path, so a symlinked .astro component's scoped <style>
    // can never be found. Harmless once installed from the registry.
    resolve: { preserveSymlinks: true },
  },
});
