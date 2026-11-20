# Catatan Progress — interiorbaturaja.web.id

> Log harian pengerjaan. Update file ini setiap kali sesi kerja berakhir.

---

## Sesi 1 — 18 November 2026

### Status akhir: ✅ Build bersih (exit 0), siap deploy staging

### Yang sudah selesai

**Infrastruktur & konfigurasi**
- Astro **7.4.12** terpasang; deps: `@astrojs/sitemap`, `@astrojs/markdown-remark`, `sharp`, `unist-util-visit`.
- `astro.config.mjs`: static, `build.format: 'directory'`, `trailingSlash: 'ignore'`, prefetch, sitemap, remark autolinks.
- `package.json` build = `node scripts/generate-og.mjs && astro build`.

**Data & konfigurasi situs**
- `src/config/site.ts` — NAP lengkap (Jl. Pantai Bidadari Jembatan 1 Sugih Waras, Banding Agung, OKU Selatan 32274; WA 0853-1002-4736), geo, jam kerja, area, helpers `waLink()`/`formatDate()`.
- `src/data/services.ts` — **5 money page lengkap** (paket, RAB, spesifikasi, venue, SOP, K3, izin, FAQ).
- `src/data/areas.ts` — **4 halaman area lengkap** (OKU Selatan, OKU Timur, Muara Enim, Prabumulih).
- `src/config/tags.ts` — TAG_META + SERVICE_TAGS/AREA_TAGS/EDU_TAGS.
- `src/config/autolinks.ts` + `src/plugins/remark-autolinks.mjs` — autolink internal kontekstual (scope `/posts/`).
- `src/content.config.ts` — schema posts; **`pubDate` opsional**, `draft` boolean.

**Komponen** (`src/components/`)
Icon, Visual (placeholder blueprint), SEO (OG 1200×630, geo meta), JsonLd, Breadcrumbs, Header (burger + nav aktif), Footer (NAP + GoogleSourcePreferences), PostCard (tanggal opsional), ServiceCard, FaqList, CtaBand, WhatsAppCTA, GoogleSourcePreferences.

**Layouts** (`src/layouts/`)
- `BaseLayout` — ClientRouter, favicon set, skip link, reveal script, mobile CTA bar.
- `ServiceLayout` — hero, paket berjenjang, tabel RAB, spesifikasi, venue, SOP, K3/izin, FAQ, artikel terkait, sticky sidebar (harga + WA + trust).
- `AreaLayout` — wilayah, keunggulan, fokus layanan, tabel logistik, catatan lapangan, FAQ, sticky sidebar.
- `ArticleLayout` — 2 kolom + TOC sticky, project facts (portfolio), penawaran bawah, artikel terkait, sidebar CTA + daftar isi + layanan.

**Pages** (16 halaman ter-render)
- `/` (hero, trust strip, 5 layanan, tabel harga, portfolio, area, alur 5 langkah, blog, FAQ, CTA)
- `/layanan/` + 5 `/layanan/[slug]`
- `/area-layanan/` + 4 `/area-layanan/[slug]`
- `/blog/` (filter chip layanan/wilayah/edukasi) + `/blog/[slug]`
- `/portfolio/` (filter) + `/portfolio/[slug]`
- `/tentang-kami`, `/kontak` (form → WhatsApp), `/404`
- Semua dengan JSON-LD `@graph` (business, org, website, service, article, breadcrumb, FAQ, ItemList).

**Publik**
- `public/og/*.png` — OG 1200×630 otomatis per halaman & per artikel (`scripts/generate-og.mjs`).
- `public/llms.txt`, `public/llms-full.txt`, `robots.txt`, `site.webmanifest`, `.htaccess` (HTTPS, www→non-www, cache, kompresi, keamanan).
- `public/images/hero-interior-baturaja.svg` (ilustrasi interior kustom).

**Konten (60 file di `src/content/posts/`)**
- 46 Blog + 14 Portfolio — semua **berisi artikel utuh** (ditulis oleh subagen sesuai klaster blueprint).
- ⚠️ Status saat ini: **semua `draft: true`, semua `pubDate` dihapus** → tidak ada yang tampil di web.
- Kualitas bervariasi (hasil batch subagen); satu file sudah dilengkapi ke ≥700 kata.
- **REVISI TERAKHIR SESI INI:** `pubDate` jadi opsional; komponen tanggal aman null; validator menuntut pubDate hanya saat terbit.

**Dokumen pendukung**
- `AGENTS.md` — aturan project, konvensi frontmatter, alur terbit.
- `SUMBER-PENGETAHUAN.md` — sumber kebenaran NAP/harga/material + daftar "jangan dikarang".
- `RENCANA-KONTEN.md` — peta 60 judul → nama file.
- `scripts/validate-content.mjs` — validator frontmatter (tags inline/block, FAQ≥3, kata≥700/900, draft↔pubDate).

### Keputusan penting hari ini
1. **Konten diterbitkan bertahap: 1 artikel/hari.** Semua 60 konten = draft.
2. Alur terbit per artikel: isi `pubDate: YYYY-MM-DD` → hapus baris `draft: true` → `npm run build`.
3. Visual memakai placeholder blueprint (tidak ada foto proyek asli, tidak ada OG foto).
4. Tidak ada akun sosmed → `sameAs` hanya WhatsApp.
5. Subagen penulis berhenti karena limit kuota — konten sudah lengkap jadi tidak ada kerja hilang.

### Yang belum / untuk sesi berikutnya
- [ ] Menerbitkan artikel pertama (pilih 1 file, isi pubDate, hapus draft).
- [ ] Meninjau manual kualitas artikel hasil subagen (min. sampel per klaster; cek gaya humanis, tidak ada klaim berlebih, tidak ada angka karangan).
- [ ] Melengkapi 1 portfolio yang masih <700 kata jika ada sisa.
- [ ] Foto proyek asli (mengganti placeholder Visual.astro) + og:image foto.
- [ ] Google Search Console + Bing Webmaster + verifikasi; submit sitemap.
- [ ] GBP (Google Business Profile) dengan NAP konsisten.
- [ ] `RISET-KEYWORD-ENTITY.md` + `src/utils/internalLinks.ts` (belum dibuat).
- [ ] Git repo + commit awal (menunggu instruksi user).
- [ ] Deploy (shared hosting; `.htaccess` sudah disiapkan).

### Cara menjalankan
```bash
npm run dev                     # dev server
node scripts/validate-content.mjs   # validasi konten
npm run build                   # generate OG + build (16 halaman)
npm run preview                 # preview dist/
```
