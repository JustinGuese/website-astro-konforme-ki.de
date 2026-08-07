import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    updated: z.string().optional(),
  }),
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
 * `metaTitle` ist keyword-first und darf vom H1 (`title`) abweichen.
 */
const ratgeber = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ratgeber' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    beschreibung: z.string(),
    kurz: z.string(),
    keyword: z.string(),
    kategorie: z.enum(['Berufsgruppe', 'Recht & Pflichten', 'Auswahl & Technik']),
    stand: z.string(),
    lesezeit: z.string(),
    reihenfolge: z.number(),
    /** Slugs verwandter Artikel — rendert die interne Verlinkung am Fuß. */
    verwandt: z.array(z.string()).default([]),
  }),
});

export const collections = { legal, unterlagen, ratgeber };
