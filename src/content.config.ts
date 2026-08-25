import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { legalSchema, articleSchema } from '@justinguese/astro-kit/lib/collections';

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: legalSchema(),
});

const unterlagen = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/unterlagen' }),
  schema: z.object({
    title: z.string(),
    kurz: z.string(),
    version: z.string(),
    stand: z.string(),
    reihenfolge: z.number(),
  }),
});

/**
 * Ratgeber — SEO-Artikel. Jeder Artikel zielt auf genau eine Suchintention
 * (`keyword`) und schließt mit einem Upsell auf die Angebotsleiter.
 * `metaTitle` ist keyword-first und darf vom H1 (`title`) abweichen — bewusst
 * wieder verpflichtend gemacht (im Kit-Schema optional).
 */
const ratgeber = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ratgeber' }),
  schema: articleSchema(['Berufsgruppe', 'Recht & Pflichten', 'Auswahl & Technik']).extend({
    metaTitle: z.string(),
    /** Kurzbeschreibung für Listenkarten und Upsell-Blöcke. */
    kurz: z.string(),
  }),
});

export const collections = { legal, unterlagen, ratgeber };
