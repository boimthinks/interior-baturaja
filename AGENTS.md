# AGENTS.md — interiorbaturaja.web.id

## Komunikasi
- Selalu berkomunikasi dengan pengguna dalam **Bahasa Indonesia**.
- Jangan pernah `git commit` / `git push` tanpa instruksi eksplisit.

## Akses Data Bisnis
Semua fakta brand, harga, NAP, aturan menulis, dan daftar artikel terbit ada di
**[`SUMBER-PENGETAHUAN.md`](./SUMBER-PENGETAHUAN.md)**. Baca file itu sebelum menulis atau mengubah konten.
Blueprint riset awal ada di [`master_riset_seo_geo.md`](./master_riset_seo_geo.md) (referensi saja, bukan sumber kebenaran operasional).

## Standar Penulisan Konten
- Semua artikel blog & studi proyek **wajib** memakai skill `penulis-ahli`
  (humanizer + SEO/GEO + konten non-komoditas).
- Sebelum menulis artikel baru, lakukan riset kata kunci & entitas dengan skill `pakar-entity-seo`,
  lalu sisipkan kata kunci secara natural.
- Studi proyek (Portfolio) juga memakai skill `penulis-ahli` dengan penekanan pada narasi teknis lapangan.
- Tanpa klaim berlebihan, tanpa angka karangan, tanpa "solusi terbaik nomor 1".

## Tech Stack
- **Astro 7.4.12** — static build (`output: 'static'`), `build.format: 'directory'`, `trailingSlash: 'ignore'`.
- **@astrojs/sitemap** untuk `sitemap-index.xml`.
- **@astrojs/markdown-remark** + `src/plugins/remark-autolinks.mjs` (autolink internal kontekstual).
- **sharp** untuk generator Open Graph 1200×630 (`scripts/generate-og.mjs`).
- Tanpa framework UI (no React/Vue). Interaktivitas memakai script inline ringan.
- `ClientRouter` (View Transitions) aktif di semua halaman.

## Struktur Project
```
src/
  components/   Icon, Visual, SEO, JsonLd, Header, Footer, Breadcrumbs,
                PostCard, ServiceCard, FaqList, CtaBand, WhatsAppCTA,
                GoogleSourcePreferences
  config/       site.ts (SITE, waLink, formatDate, NAP), tags.ts, autolinks.ts
  data/         services.ts (5 money page), areas.ts (4 halaman area)
  layouts/      BaseLayout, ServiceLayout, AreaLayout, ArticleLayout
  lib/          content.ts (query helper), schema.ts (JSON-LD @graph builder)
  pages/        index, layanan/[slug], area-layanan/[slug], blog/[slug],
                portfolio/[slug], tentang-kami, kontak, 404
  content/posts/ 44 Blog + 16 Portfolio (satu koleksi, dibedakan `category`)
  plugins/      remark-autolinks.mjs
  styles/       global.css
public/         logo, favicon, og/, llms.txt, llms-full.txt, robots.txt, .htaccess
scripts/        generate-og.mjs
```

## Perintah
```bash
npm run dev       # dev server
npm run build     # generate OG + astro build
npm run preview   # preview hasil build
```

## Konvensi Konten (frontmatter `src/content/posts/*.md`)
```yaml
---
draft: true                  # WAJIB true saat dibuat; ubah ke false (atau hapus) saat TERBIT
title: "..."
description: "..."            # 140–165 karakter
pubDate: 2026-11-17           # WAJIB diisi saat artikel DITERBITKAN (draft:false)
tags: ["Kitchen Set", "Harga & RAB", "Baturaja"]   # enum di src/content.config.ts
targetKeywords: ["...", "..."]
relatedServiceUrl: "/layanan/kitchen-set-baturaja/"
heroAlt: "..."                # opsional
projectDetails:               # WAJIB untuk Portfolio
  clientOrProject: "..."
  location: "..."
  material: "..."
  duration: "..."
  year: 2026
faqs:                         # minimal 3
  - question: "..."
    answer: "..."
---
```
- Isi artikel: minimal 900 kata untuk Blog, 700 kata untuk Portfolio.
- `pubDate` boleh kosong selama artikel masih `draft: true`. Saat menerbitkan
  (alur 1 artikel/hari): isi `pubDate: YYYY-MM-DD`, hapus baris `draft: true`. 
- Struktur wajib: paragraf pembuka tanpa heading → `##` beberapa subjudul → penutup.
- Tautan internal: gunakan path absolut (`/layanan/...`, `/blog/...`, `/portfolio/...`, `/kontak/`).
- Jangan menuliskan kembali autolink yang sudah otomatis (plugin menangani frasa layanan).
- Tag enum: `Kitchen Set`, `Lemari & Kamar Set`, `Backdrop TV & Partisi`,
  `Interior Kantor & Instansi`, `Interior Toko, Mall & Booth`, `Edukasi & Material`,
  `Harga & RAB`, `Baturaja`, `OKU Timur`, `OKU Selatan`, `Muara Enim`, `Prabumulih`.

## Aturan Teknis
- Gambar konten memakai rasio **4:3**; OG **1200×630**.
- Jangan menambah font eksternal; ikon memakai komponen `Icon.astro` (inline SVG).
- Semua halaman wajib punya JSON-LD `@graph` (lihat `src/lib/schema.ts`).
- `overflow-x: clip` sudah diterapkan di `html, body` — jangan diganti `hidden`.
- Setelah menambah halaman/konten, jalankan `npm run build` sampai exit code 0.

## Deployment Target
- **Platform:** DomaiNesia (cPanel)
- **Target Path:** `interiorbaturaja`
- **Metode:** Build lokal, lalu upload `dist/` via skill `cpanel-domainesia`.

## Alur Rutin Commit, Push & Deploy (WAJIB IKUT SAAT DIMINTA)
Alur standar setiap kali ada perubahan yang selesai dan diuji:

1. **Build & verifikasi:** `npm run build` sampai exit code 0 (jangan deploy build yang gagal).
2. **Commit:** `git add -A && git commit -m "<pesan commit ringkas dan spesifik>"`.
3. **Push:** `git push origin main` (remote: `https://github.com/boimthinks/interior-baturaja.git`).
4. **Deploy ke DomaiNesia:** `python3 /home/abah/.config/opencode/skills/cpanel-domainesia/scripts/deploy.py --target-dir interiorbaturaja`
   - Flag `--target-dir interiorbaturaja` WAJIB karena nama folder server (`interiorbaturaja`)
     berbeda dengan nama folder project lokal (`interiorbaturaja.web.id`). Tanpa flag itu
     script berhenti dengan aman.
   - Gunakan `--skip-build` bila `dist/` sudah terbaru dan tidak ada perubahan sejak build terakhir.
5. **Verifikasi pasca-deploy:** `curl` beberapa URL kunci (homepage, satu halaman layanan, satu artikel)
   dan pastikan status 200.

Catatan: langkah 2-3 hanya dijalankan bila pengguna meminta commit/push secara eksplisit
(sesuai aturan di bagian Komunikasi), sedangkan deploy ke DomaiNesia dieksekusi bila diminta.
