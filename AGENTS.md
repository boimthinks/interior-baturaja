# AGENTS.md — interiorbaturaja.web.id

## Komunikasi
- Selalu berkomunikasi dengan pengguna dalam **Bahasa Indonesia**.
- Jangan pernah `git commit` / `git push` tanpa instruksi eksplisit.

## Alur Kerja Harian (wajib, jangan improvisasi)
Project ini memakai alur 4 fase dari folder induk `/home/abah/Work/Webs`
(lihat `_workflow/situs.py` sebagai sumber kebenaran mesin):

| Fase | Perintah | Catatan |
|---|---|---|
| A. Tulis konten | riset `pakar-entity-seo` lalu tulis dengan `penulis-ahli` | satu artikel per giliran, `draft: true` |
| B. Gambar | `python3 _workflow/gambar.py siap ...` lalu `sync` | memasang `heroImage` + prompt ke `_workflow/inbox-gambar/ANTREAN.md` |
| C. Review | `python3 _workflow/dev.py buka --site interiorbaturaja.web.id` | port tetap `4329` |
| D. Kirim | `python3 _workflow/ship.py --site interiorbaturaja.web.id --deploy` | build, commit, push, deploy cPanel |

Aturan yang mengikat:
- **Draft dan terbit.** Artikel baru **wajib** `draft: true` dan `pubDate` boleh
  kosong. Jangan pernah mengubah `draft: false` secara manual. Satu-satunya cara
  menerbitkan adalah `python3 _workflow/terbit.py terbit --site interiorbaturaja.web.id`.
  Perintah itu mengisi `pubDate` dengan **tanggal hari ini** dan menyalakan
  `draft: false`. Satu hari satu artikel.
- **Jangan `git add -A`.** Stage hanya berkas yang memang berubah. `ship.py`
  sudah menangani ini dan menolak commit kosong.
- **Gambar artikel** memakai path lokal `/images/blog/<slug-artikel>.webp`
  (atau `/images/portfolio/<slug>.webp` untuk Portfolio). Nama berkas harus
  sama dengan slug artikel. Jangan memakai URL eksternal. Cara praktis
  memasangnya tanpa salah ketik:
  `python3 _workflow/gambar.py siap --site interiorbaturaja.web.id --slug <slug> --teks "<prompt>"`
  Perintah itu memilih folder yang benar menurut `category` dan mengisi
  `heroImage` otomatis.
- **Terbit tanpa gambar ditolak.** `terbit.py` menolak artikel yang
  `heroImage`-nya menunjuk berkas yang belum ada di `public/`. Selesaikan dulu
  pabrik gambar, baru terbitkan.
- **Tautan internal wajib diperiksa.** Build Astro tidak memvalidasi tautan
  manual, jadi jalankan `python3 _workflow/cek_tautan.py --site interiorbaturaja.web.id`
  sebelum commit. `ship.py` juga menjalankan pemeriksaan ini sebagai gerbang.
- **`llms.txt` dan `llms-full.txt` statis.** Jangan menambahkan slug draft ke
  sana sebelum artikelnya benar-benar terbit.
- Kalau output `ship.py` terlihat seperti `clean — nothing to commit` padahal
  ada perubahan, alihkan ke file (`> /tmp/ship.txt 2>&1`) lalu baca file itu.
  Tampilan terminal bisa palsu.

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
  content/posts/ 46 Blog + 14 Portfolio (satu koleksi, dibedakan `category`)
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
draft: true                  # WAJIB true saat dibuat; JANGAN ubah manual, pakai terbit.py
title: "..."
description: "..."            # 140–165 karakter
pubDate: 2026-11-17           # boleh kosong selama draft; terbit.py yang mengisi
tags: ["Kitchen Set", "Harga & RAB", "Baturaja"]   # enum di src/content.config.ts
targetKeywords: ["...", "..."]
relatedServiceUrl: "/layanan/kitchen-set-baturaja/"
heroImage: "/images/blog/<slug-artikel>.webp"      # wajib saat terbit, nama = slug artikel
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
  (alur 1 artikel/hari): jalankan
  `python3 _workflow/terbit.py terbit --site interiorbaturaja.web.id`.
  Perintah itu mengisi `pubDate` dengan **tanggal hari ini** dan menyalakan
  `draft: false`. Jangan mengedit dua field itu dengan tangan.
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
Alur standar setiap kali ada perubahan yang selesai dan diuji. Semua langkah ini
sudah dibungkus oleh satu perintah dari folder induk:

```bash
cd /home/abah/Work/Webs
python3 _workflow/ship.py --site interiorbaturaja.web.id --deploy
```

Yang dilakukan `ship.py`, berurutan, dan berhenti pada kegagalan pertama:

1. **Cek gambar hilang.** Referensi lokal yang tidak ada di `public/` memblokir pengiriman.
2. **Cek tautan internal** lewat `_workflow/cek_tautan.py`. Slug `/blog/...` atau
   berkas `/images/...` yang tidak ada memblokir pengiriman.
3. **Build:** `npm run build` (termasuk `scripts/generate-og.mjs`). Build gagal = tidak ada commit.
4. **Commit + push** ke `origin main`, stage hanya berkas yang berubah,
   tanpa `git add -A`.
5. **Deploy ke DomaiNesia** hanya bila `--deploy` dan setelah konfirmasi `y`.
   Flag `--target-dir interiorbaturaja` dipakai otomatis karena nama folder server
   (`interiorbaturaja`) berbeda dengan folder project lokal (`interiorbaturaja.web.id`).
6. **Verifikasi pasca-deploy:** `curl` homepage, satu halaman layanan, dan satu artikel, pastikan 200.

Selalu jalankan `--dry-run` lebih dulu untuk melihat rencananya. Langkah 4 dan 5
hanya dijalankan bila pengguna meminta commit/push/deploy secara eksplisit
(sesuai aturan di bagian Komunikasi).

Perintah manual yang setara, kalau `ship.py` sedang bermasalah:

```bash
npm run build                                              # wajib exit 0
git add <berkas satu per satu>                             # JANGAN git add -A
git commit -m "<pesan ringkas>"
git push origin main
python3 /home/abah/.config/opencode/skills/cpanel-domainesia/scripts/deploy.py --target-dir interiorbaturaja
```

Remote: `https://github.com/boimthinks/interior-baturaja.git`, branch `main`.
