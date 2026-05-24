
---
import { Icon } from 'astro-icon/components';

const baslik = "Yasal bilgi";
const sonKontrol = "17 Mayıs 2026";
const versiyon = "v1.1 — canlıya çıkış güncellemesi";

const lead = "Abul Rehber bir avukatlık hizmeti değildir, bir bürokrasi haritasıdır. Bu fark önemli, çünkü size doğru biçimde yardımcı olabilmemiz için ikimizin de sınırlarımızı bilmesi gerekir. Bu sayfa neyi vaat etmediğimizi, sitenin verilerle ilişkisini ve sahipliğini netleştirir.";
---

<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{baslik} — Abul Rehber</title>
  <meta name="description" content={lead} />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:wght@400;600;700&display=swap" rel="stylesheet" />
</head>
<body>

<!-- TOP NAV (KonuLayout v7 ile aynı) -->
<nav class="topnav">
  <div class="nav-inner">
    <a href="/" class="logo">
      <span class="logo-shield"><Icon name="lucide:shield" width="16" height="16" /></span>
      <span class="logo-text">Abul Rehber</span>
    </a>
    <div class="nav-links">
      <a href="/#konular">Konular</a>
      <a href="/#ulkeler">Ülkeler</a>
      <a href="/hakkimizda">Hakkımızda</a>
      <a href="/yasal-bilgi" class="aktif">Yasal bilgi</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<header class="hero">
  <div class="container">
    <div class="hero-eyebrow">
      <span class="he-dot"></span>
      <span>YASAL BİLGİ</span>
    </div>
    <h1>{baslik}</h1>
    <p class="lead">{lead}</p>
  </div>
</header>

<main class="container icerik">

  <!-- 01 — NEYİ VAAT ETMİYORUZ -->
  <section class="bolum">
    <div class="bolum-header">
      <span class="bolum-numara">01</span>
      <div class="bolum-baslik-grup">
        <h2>Neyi vaat etmiyoruz</h2>
        <p class="bolum-alt">Sitenin sınırlarının net çizilmesi</p>
      </div>
    </div>
    <p class="bolum-intro">Aşağıda sitenin yapmadığı ve vaat etmediği şeyleri tek tek sayıyoruz. Bunlar bizden bekleyemeyeceğiniz şeyler — neden bekleyemeyeceğinizi de açıklıyoruz. Bu sınırların net olması ikimiz için de güvenli zemin yaratır.</p>

    <div class="info-grid">
      <article class="info-blok">
        <h3>Bireysel hukuki tavsiye yok</h3>
        <p>Site, somut bir dosyaya bakıp "şunu yapın" demez. Hangi kurumun yetkili olduğunu, hangi kanaldan başvurulduğunu, hangi belgelerin gerekli olduğunu ve yasal süreleri gösterir. Sizin durumunuza özel hukuki strateji avukatınızla kurulur. Burada okuduklarınız bir başlangıç noktasıdır — bir hukuki görüş değildir.</p>
      </article>

      <article class="info-blok">
        <h3>Avukat-müvekkil ilişkisi yok</h3>
        <p>Burada okuduklarınız bir avukatla görüşme yerine geçmez. <strong>1136 sayılı Avukatlık Kanunu</strong> uyarınca hukuki temsil yalnızca baroya kayıtlı avukatlar tarafından sağlanır — Abul Rehber baroya kayıtlı bir hukuk bürosu değildir.</p>
      </article>

      <article class="info-blok">
        <h3>Dava sonucu garantisi yok</h3>
        <p>Süreçleri haritalandırırız, sonuçları öngöremeyiz. Aynı kurum, aynı belgelerle iki farklı dosyada farklı karar verebilir. Sürecin nasıl ilerlediğini gösteririz; nereye varacağını söylemeyiz.</p>
      </article>

      <article class="info-blok">
        <h3>Güncellik garantisi yok</h3>
        <p>Her kart bir <strong>son kontrol tarihi</strong> ile gelir ve üç ayda bir gözden geçirilir. Yine de mevzuat değişiklikleri, idari uygulama farkları veya yerel pratik kontrol tarihinden sonra değişebilir. Başvuru öncesi her kartın "Kaynaklar" bölümündeki resmi sitelerden teyit edin. Eski bilgi tehlikelidir, biz de bunu biliyoruz — bu yüzden kaynaklarımızı açıkça gösteriyoruz.</p>
      </article>

      <article class="info-blok">
        <h3>Kapsam dışındakiler</h3>
        <p>Abul Rehber <strong>bireysel</strong> hukuki ve bürokratik süreçler için tasarlandı. Şirket kurma, ticari yatırım, vergi optimizasyonu, startup göçü, ülke karşılaştırması ve "nereye gitmeli" kararları bu rehberin kapsamı dışındadır. Bu konular için ayrı uzmanlık alanlarına başvurmak gerekir.</p>
      </article>
    </div>
  </section>

  <!-- 02 — VERİ POLİTİKASI -->
  <section class="bolum">
    <div class="bolum-header">
      <span class="bolum-numara">02</span>
      <div class="bolum-baslik-grup">
        <h2>Veri politikası</h2>
        <p class="bolum-alt">Site sizinle nasıl ilişki kuruyor</p>
      </div>
    </div>
    <p class="bolum-intro">Şu an site statik çalışıyor; hiçbir kişisel veri toplamıyoruz. Bu sayfa altyapısal teknik gerçeklikleri ve gelecekte değişiklik olursa nasıl davranacağımızı açıklar. Şeffaflık tek tarafımız — ne yapıyoruz, ne yapmıyoruz, açıkça yazıyoruz.</p>

    <div class="info-grid">
      <article class="info-blok">
        <h3>Şu an hiç veri toplamıyoruz</h3>
        <p>Site <strong>statik</strong> olarak çalışıyor — siz bir sayfa okuduğunuzda ne ad, ne e-posta, ne IP-bazlı kullanıcı profili kaydı tutulur. İletişim formu, yorum sistemi, hesap sistemi veya newsletter aboneliği yok. Toplanacak hiçbir kişisel veri yok demektir.</p>
      </article>

      <article class="info-blok">
        <h3>Çerez yok</h3>
        <p>Reklam çerezi, analitik çerezi, üçüncü taraf çerezi kullanmıyoruz. Tarayıcınıza çerez izin penceresi göstermiyoruz çünkü gösterecek bir şey yok.</p>
      </article>

      <article class="info-blok">
        <h3>Hosting altyapısı</h3>
        <p>Site <strong>Cloudflare</strong> üzerinden sunuluyor. Cloudflare bir CDN ve güvenlik sağlayıcısı olarak ziyaretçi IP adreslerini geçici teknik amaçla (DDoS koruması, performans) işleyebilir. Bu işleme Cloudflare'in <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">kendi gizlilik politikasına</a> tabidir; biz bu verilere ne erişiriz ne analize sokarız.</p>
      </article>

      <article class="info-blok">
        <h3>Sunucu erişim logları</h3>
        <p>Hosting sağlayıcı, teknik gereklilik olarak (hata ayıklama, güvenlik) kısa süreli erişim logları tutabilir. Bu loglar Abul Rehber tarafından okunmaz, işlenmez veya analize sokulmaz.</p>
      </article>

      <article class="info-blok">
        <h3>Üçüncü taraf bağlantılar</h3>
        <p>Site dışı kurum sitelerine (mevzuat.gov.tr, vatandas.uyap.gov.tr, konsolosluk siteleri, AB kurum siteleri) verilen bağlantılar bilgilendirme amaçlıdır. O sitelerin içeriği ve gizlilik politikaları üzerinde Abul Rehber'in kontrolü yoktur.</p>
      </article>

      <article class="info-blok vurgulu">
        <h3>Bu durum değişirse</h3>
        <p>İleride iletişim formu, yorum sistemi veya benzeri bir özellik eklersek, bu sayfa <strong>eklemeden önce</strong> güncellenir. Hangi verinin neden alındığı, ne kadar süre tutulduğu, kimle paylaşıldığı açıkça yazılır. <strong>6698 sayılı KVKK</strong> ve <strong>AB GDPR 2016/679</strong> uyarınca veri sahibi hakları (erişim, düzeltme, silme, taşıma, itiraz) o noktada işletilir.</p>
      </article>
    </div>
  </section>

  <!-- 03 — İLETİŞİM VE SAHİPLİK -->
  <section class="bolum">
    <div class="bolum-header">
      <span class="bolum-numara">03</span>
      <div class="bolum-baslik-grup">
        <h2>İletişim ve sahiplik</h2>
        <p class="bolum-alt">Kim yayınlıyor, nasıl ulaşılır</p>
      </div>
    </div>
    <p class="bolum-intro">Kim yayınlıyor, nasıl iletişim kurulur, hata bildirimi nasıl yapılır ve içerik haklarına dair temel bilgiler. Site yaşayan bir belgedir — düzeltme, güncelleme ve geri bildirim sürecin parçasıdır.</p>

    <article class="info-blok">
      <h3>Kim yayınlıyor</h3>
      <dl class="bilgi-tablosu">
        <div class="bt-satir">
          <dt>Site sahibi</dt>
          <dd>[Henüz belirlenmedi — site canlıya çıkmadan önce eklenecek]</dd>
        </div>
        <div class="bt-satir">
          <dt>İletişim</dt>
          <dd><a href="mailto:iletisim@abulrehber.com">iletisim@abulrehber.com</a></dd>
        </div>
        <div class="bt-satir">
          <dt>Yayın türü</dt>
          <dd>Genel bilgilendirme amaçlı statik içerik</dd>
        </div>
      </dl>
    </article>

    <div class="info-grid">
      <article class="info-blok">
        <h3>Sorumluluk reddi</h3>
        <p>Bu sitedeki bilgiler genel bilgilendirme amaçlıdır. Doğruluğu ve güncelliği için çaba gösterilir, ancak hukuki veya bürokratik bir karar vermeden önce <strong>resmi kaynak ve uzman görüşü</strong> esastır. Eski, eksik veya yanlış bilgi nedeniyle uğrayabileceğiniz zarardan Abul Rehber sorumlu tutulamaz.</p>
      </article>

      <article class="info-blok">
        <h3>Hata bildirimi ve düzeltme talebi</h3>
        <p>Bir kartta hatalı, eski veya eksik bir bilgi tespit ettiyseniz <a href="mailto:iletisim@abulrehber.com">iletisim@abulrehber.com</a> adresine yazın. <strong>Resmi kaynak bağlantısıyla</strong> gönderdiğinizde değerlendirme süresi kısalır. Her düzeltme ilgili kartın "Son kontrol tarihi" güncellenerek kayda geçer.</p>
      </article>

      <article class="info-blok">
        <h3>Telif</h3>
        <p>Site içeriği özgün olarak hazırlanmıştır. Kişisel kullanım için sayfaların paylaşımı serbesttir. Ticari yeniden yayım, içeriğin kaynak gösterilmeden başka sitelere kopyalanması veya yapay zekâ eğitim verisi olarak kullanılması için önceden yazılı izin gerekir.</p>
      </article>
    </div>
  </section>

  <!-- META ALT BİLGİ -->
  <div class="meta-alt">
    <div class="meta-satir">
      <span class="meta-etiket">Son kontrol</span>
      <span class="meta-deger">{sonKontrol}</span>
    </div>
    <div class="meta-satir">
      <span class="meta-etiket">Versiyon</span>
      <span class="meta-deger">{versiyon}</span>
    </div>
  </div>

</main>

<!-- FOOTER -->
<footer class="site-footer">
  <div class="container">
    <p>© 2026 Abul Rehber — Türk diasporası için bürokrasi rehberi</p>
    <p class="footer-alt">9 ülke · 13 konu</p>
  </div>
</footer>

<!-- FAB -->
<a href="/toolbox/hukuki-yardim" class="fab-link" aria-label="Toolbox">
  <Icon name="lucide:briefcase" width="22" height="22" />
</a>

</body>
</html>

<style>
  :root {
    /* Manifest v1.1 paleti — Anadolu Terracotta */
    --bej:           #FBF7F1;
    --bej-hover:     #FAF1E6;
    --beyaz:         #FFFFFF;
    --coral:         #B85C3B;
    --coral-koyu:    #8B3E1F;
    --coral-soluk:   #D9C7A8;
    --amber-koyu:    #5C3A1F;
    --amber-derin:   #3D2817;
    --kenar-soft:    #ECE2D0;
    --kenar-orta:    #D9C7A8;
    --metin:         #3D2817;
    --metin-orta:    #5C3A1F;
    --metin-soluk:   #6B5849;
    --coral-rgb:     184, 92, 59;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bej);
    color: var(--metin);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  .container { max-width: 880px; margin: 0 auto; padding: 0 24px; }

  /* TOP NAV */
  .topnav {
    position: sticky; top: 0; z-index: 40;
    background: rgba(251, 247, 241, 0.88);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--kenar-soft);
  }
  .nav-inner {
    max-width: 1120px; margin: 0 auto; padding: 0 24px;
    height: 64px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; color: var(--amber-derin);
    font-weight: 700; font-size: 17px; letter-spacing: -0.01em;
  }
  .logo-shield {
    width: 32px; height: 32px;
    background: var(--coral); color: white;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-links {
    display: flex; align-items: center; gap: 4px;
  }
  .nav-links a {
    padding: 8px 14px;
    font-size: 14px; font-weight: 500;
    color: var(--metin-soluk); text-decoration: none;
    border-radius: 8px;
    transition: all 0.2s;
  }
  .nav-links a:hover { color: var(--amber-derin); background: var(--beyaz); }
  .nav-links a.aktif {
    color: var(--coral-koyu);
    background: var(--bej-hover);
  }
  @media (max-width: 720px) {
    .nav-links a { padding: 8px 10px; font-size: 13px; }
  }

  /* HERO */
  .hero {
    padding: 56px 0 32px;
  }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 5px 12px;
    background: var(--beyaz);
    border: 1px solid var(--kenar-soft);
    border-radius: 999px;
    font-size: 11px; font-weight: 600;
    color: var(--amber-koyu);
    letter-spacing: 0.08em;
    margin-bottom: 20px;
  }
  .he-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--coral); }
  .hero h1 {
    font-family: 'Source Serif 4', Georgia, serif;
    font-weight: 700;
    font-size: 44px; line-height: 1.1;
    color: var(--amber-derin);
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }
  .hero .lead {
    font-size: 17px;
    color: var(--metin-soluk);
    max-width: 720px;
    line-height: 1.65;
  }
  @media (max-width: 720px) {
    .hero { padding: 36px 0 24px; }
    .hero h1 { font-size: 32px; }
    .hero .lead { font-size: 15.5px; }
  }

  /* İÇERİK BÖLÜMÜ */
  .icerik {
    padding-bottom: 72px;
  }

  .bolum {
    margin-top: 48px;
  }
  .bolum-header {
    display: flex; align-items: flex-start; gap: 14px;
    margin-bottom: 16px;
  }
  .bolum-numara {
    flex-shrink: 0;
    width: 32px; height: 32px;
    background: var(--coral); color: white;
    border-radius: 8px;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700;
    letter-spacing: 0.04em;
  }
  .bolum-baslik-grup h2 {
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 26px; font-weight: 700;
    color: var(--amber-derin);
    letter-spacing: -0.015em;
    line-height: 1.2;
  }
  .bolum-alt {
    margin-top: 2px;
    font-size: 13.5px;
    color: var(--metin-soluk);
  }
  .bolum-intro {
    margin-left: 46px;
    max-width: 720px;
    font-size: 15.5px;
    color: var(--metin-orta);
    line-height: 1.7;
    margin-bottom: 28px;
  }
  @media (max-width: 720px) {
    .bolum-intro { margin-left: 0; }
  }

  /* INFO BLOK */
  .info-grid {
    display: flex; flex-direction: column; gap: 14px;
  }
  .info-blok {
    background: var(--beyaz);
    border: 1px solid var(--kenar-soft);
    border-radius: 16px;
    padding: 22px 26px;
    transition: all 0.25s ease;
  }
  .info-blok:hover {
    border-color: var(--coral-soluk);
    box-shadow: 0 4px 10px rgba(var(--coral-rgb), 0.06);
  }
  .info-blok h3 {
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 17.5px; font-weight: 600;
    color: var(--amber-derin);
    margin-bottom: 10px;
    letter-spacing: -0.005em;
  }
  .info-blok p {
    font-size: 15px;
    color: var(--metin-soluk);
    line-height: 1.72;
  }
  .info-blok p + p { margin-top: 12px; }
  .info-blok a {
    color: var(--coral-koyu);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
  .info-blok a:hover { color: var(--coral); }
  .info-blok strong { color: var(--amber-koyu); font-weight: 600; }

  /* Vurgulu blok — "Bu durum değişirse" gibi gelecek vaat alanı */
  .info-blok.vurgulu {
    background: linear-gradient(to right, var(--bej-hover), var(--beyaz));
    border-left: 3px solid var(--coral);
  }

  /* BİLGİ TABLOSU (dl) */
  .bilgi-tablosu {
    display: flex; flex-direction: column; gap: 0;
  }
  .bt-satir {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 18px;
    padding: 12px 0;
    border-bottom: 1px solid var(--kenar-soft);
  }
  .bt-satir:last-child { border-bottom: none; }
  .bt-satir dt {
    font-size: 13px; font-weight: 600;
    color: var(--metin-soluk);
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .bt-satir dd {
    font-size: 15px;
    color: var(--metin);
    line-height: 1.6;
  }
  @media (max-width: 600px) {
    .bt-satir {
      grid-template-columns: 1fr;
      gap: 4px;
    }
  }

  /* META ALT BİLGİ */
  .meta-alt {
    margin-top: 48px;
    padding: 20px 24px;
    background: var(--bej-hover);
    border: 1px solid var(--kenar-soft);
    border-radius: 12px;
    display: flex; flex-wrap: wrap; gap: 24px 40px;
  }
  .meta-satir {
    display: flex; flex-direction: column; gap: 4px;
  }
  .meta-etiket {
    font-size: 11px; font-weight: 600;
    color: var(--metin-soluk);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .meta-deger {
    font-size: 14.5px;
    color: var(--amber-koyu);
    font-weight: 500;
  }

  /* FOOTER */
  .site-footer {
    padding: 28px 0;
    border-top: 1px solid var(--kenar-soft);
    text-align: center;
    color: var(--metin-soluk);
    font-size: 13.5px;
  }
  .site-footer a {
    color: var(--metin-soluk);
    text-decoration: none;
  }
  .site-footer a:hover { color: var(--coral-koyu); }
  .footer-alt {
    margin-top: 6px;
    font-size: 12.5px;
    opacity: 0.78;
  }

  /* FAB */
  .fab-link {
    position: fixed; bottom: 24px; right: 24px;
    width: 52px; height: 52px;
    background: var(--coral); color: white;
    border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 0 0 0 rgba(var(--coral-rgb), 0.45);
    animation: fab-pulse 2.4s ease-in-out infinite;
    z-index: 30;
    transition: background 0.25s, transform 0.25s;
  }
  .fab-link:hover {
    background: var(--coral-koyu);
    transform: scale(1.05);
  }
  .fab-link [data-icon] { color: white; }

  @keyframes fab-pulse {
    0%, 100% { box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 0 0 0 rgba(var(--coral-rgb), 0.45); }
    50%      { box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 0 0 14px rgba(var(--coral-rgb), 0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .fab-link { animation: none; }
    * { transition: none !important; }
  }
</style>
</file_text>
