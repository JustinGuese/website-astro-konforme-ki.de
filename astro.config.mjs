// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://konforme-ki.de',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/pdf-quelle'),
      // Startseite und Ratgeber sind die Einstiegspunkte aus der Suche;
      // Rechtstexte werden indexiert, sollen aber nicht um Rang konkurrieren.
      // `changefreq` wird bewusst weggelassen — Google wertet es nicht aus.
      serialize(item) {
        const pfad = new URL(item.url).pathname;
        if (pfad === '/') item.priority = 1.0;
        else if (pfad === '/ratgeber/') item.priority = 0.9;
        else if (pfad.startsWith('/ratgeber/')) item.priority = 0.8;
        else if (/^\/(impressum|datenschutz|agb|rdg-hinweis)\/$/.test(pfad))
          item.priority = 0.2;
        else item.priority = 0.6;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
