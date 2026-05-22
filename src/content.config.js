import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Tek bir kanal kartı şeması
const kanalKarti = z.object({
  ikon: z.string(),
  baslik: z.string(),
  tip: z.string(),
  ulke_kodu: z.string().optional(),
  paralel: z.boolean().optional(),
  vurgu: z.string(),
  aciklama: z.string(),
  link: z.string().optional(),
  not: z.string().optional(),
});

// Bir kanal grubu (01 Resmi yol, 02 Profesyonel, 03 STK)
// kartlar artık optional — "ağ dar" durumlarda sadece intro narrative ile çalışır
const kanalGrubu = z.object({
  numara: z.string(),
  baslik: z.string(),
  alt_baslik: z.string().optional(),
  intro: z.string().optional(),
  kartlar: z.array(kanalKarti).optional(),
});

// Tek bir bilgi notu (ülke bloğu içinde birden fazla olabilir)
const bilgiNotu = z.object({
  baslik: z.string(),
  metin: z.string(),
});

// Bir ülke bloğu (TR, DE, vb.)
// gruplar artık optional — Phase 2 iskelet ülkeleri için sadece intro ile çalışır
// bilgi_notlari yeni array alanı; eski tek-alan formu (bilgi_notu_baslik/metin) geri uyumluluk için korunur
const ulkeBlogu = z.object({
  kod: z.string(),
  bayrak: z.string(),
  ad: z.string(),
  intro: z.string(),
  // Eski format (pilot calisma-emeklilik.md için geri uyumlu)
  bilgi_notu_baslik: z.string().optional(),
  bilgi_notu_metin: z.string().optional(),
  // Yeni format — birden fazla bilgi notu desteği
  bilgi_notlari: z.array(bilgiNotu).optional(),
  gruplar: z.array(kanalGrubu).optional(),
});

// İlgili konu kartı
const ilgiliKonu = z.object({
  ikon: z.string(),
  baslik: z.string(),
  vurgu: z.string(),
  aciklama: z.string(),
  link: z.string(),
});

// Kurum kartı koleksiyonu (mevcut)
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

// Konu sayfası koleksiyonu — genişletilmiş schema
const konular = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/konular' }),
  schema: z.object({
    baslik: z.string(),
    konu_no: z.number(),
    son_kontrol: z.date(),
    bir_sonraki_kontrol: z.date(),
    versiyon: z.string(),
    acil_uyari: z.string().optional(),
    // Yeni alanlar — A3 formatı için, hepsi optional
    eyebrow: z.string().optional(),
    lead: z.string().optional(),
    secici_etiket: z.string().optional(),
    secici_yardim: z.string().optional(),
    ulkeler: z.array(ulkeBlogu).optional(),
    ilgili_konular: z.array(ilgiliKonu).optional(),
    birincil_kaynaklar: z.string().optional(),
    son_not: z.string().optional(),
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

// Statik sayfalar
const sayfalar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sayfalar' }),
  schema: z.object({
    baslik: z.string(),
    son_kontrol: z.date(),
    versiyon: z.string(),
  }),
});

export const collections = { kurumlar, konular, toolbox, sayfalar };
