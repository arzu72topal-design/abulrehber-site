import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Vurgu enum — V3 karar ağacı çıktısı
// birincil: ✅ ana yetkili kurum
// ikincil:  🔵 paralel/ek yetkili
// yatay:    🟡 Toolbox ana ev + dikey çapraz
const kanalKartiVurgu = z.enum(['birincil', 'ikincil', 'yatay']);

// Tek bir kanal kartı şeması — V3 alanlarıyla genişletildi
const kanalKarti = z.object({
  ikon: z.string(),
  baslik: z.string(),
  tip: z.string(),
  ulke_kodu: z.string().optional(),
  paralel: z.boolean().optional(),
  // Eski vurgu (string) ve yeni vurgu (enum) birlikte yaşar — geri uyum
  vurgu: z.union([kanalKartiVurgu, z.string()]),
  aciklama: z.string(),
  link: z.string().optional(),
  not: z.string().optional(),
  // V3 yeni alanları (hepsi opsiyonel)
  cardId: z.string().optional(),
  toolboxAtfi: z.string().optional(),
  detayliKart: z.string().optional(),
});

// Bir kanal grubu (01 Resmi yol, 02 Profesyonel, 03 STK)
const kanalGrubu = z.object({
  numara: z.string(),
  baslik: z.string(),
  alt_baslik: z.string().optional(),
  intro: z.string().optional(),
  kartlar: z.array(kanalKarti).optional(),
});

// Tek bir bilgi notu
const bilgiNotu = z.object({
  baslik: z.string(),
  metin: z.string(),
});

// Bir ülke bloğu (TR, DE, vb.)
const ulkeBlogu = z.object({
  kod: z.string(),
  bayrak: z.string(),
  ad: z.string(),
  intro: z.string(),
  // Eski format (geri uyumlu)
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
    // V3 stale kart desteği
    durum: z.enum(['yazili', 'yazilacak', 'taslak']).default('yazili'),
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

// Toolbox koleksiyonu — V3 genişletmesi
const toolbox = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/toolbox' }),
  schema: z.object({
    baslik: z.string(),
    son_kontrol: z.date(),
    bir_sonraki_kontrol: z.date(),
    versiyon: z.string(),
    // V3 yeni alanları
    eyebrow: z.string().optional(),
    lead: z.string().optional(),
    bolumler: z.array(z.object({
      id: z.string(),       // anchor target (#apostil, #vekaletname, vb.)
      baslik: z.string(),
      icerik: z.string(),   // markdown gövdesi
    })).optional(),
    son_not: z.string().optional(),
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
