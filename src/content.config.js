import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Kurum kartı koleksiyonu
const kurumlar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kurumlar' }),
  schema: z.object({
    baslik: z.string(),
    konu: z.string(),
    ulke: z.string(),
    ust_kurum: z.string().optional(),
    son_kontrol: z.date(),
    bir_sonraki_kontrol: z.date(),
    versiyon: z.string(),
    kaynak: z.string().optional(),
  }),
});

// Konu sayfası koleksiyonu
const konular = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/konular' }),
  schema: z.object({
    baslik: z.string(),
    konu_no: z.number(),
    son_kontrol: z.date(),
    bir_sonraki_kontrol: z.date(),
    versiyon: z.string(),
    acil_uyari: z.string().optional(),
  }),
});

// Toolbox koleksiyonu
const toolbox = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/toolbox' }),
  schema: z.object({
    baslik: z.string(),
    son_kontrol: z.date(),
    bir_sonraki_kontrol: z.date(),
    versiyon: z.string(),
  }),
});

// Statik sayfalar koleksiyonu
const sayfalar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sayfalar' }),
  schema: z.object({
    baslik: z.string(),
    son_kontrol: z.date(),
    versiyon: z.string(),
  }),
});

export const collections = { kurumlar, konular, toolbox, sayfalar };