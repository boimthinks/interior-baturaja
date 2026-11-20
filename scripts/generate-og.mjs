#!/usr/bin/env node
/**
 * Generator Open Graph 1200x630 (PNG) untuk semua halaman utama dan konten.
 * Dijalankan sebelum `astro build` agar setiap halaman punya og:image nyata.
 */
import sharp from 'sharp';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'og');
const POSTS_DIR = path.join(ROOT, 'src', 'content', 'posts');

const SERVICES = [
  ['layanan-kitchen-set-baturaja', 'Kitchen Set Custom', 'HPL Taco & PVC Anti Rayap · Baturaja'],
  ['layanan-lemari-custom-kamar-set-baturaja', 'Lemari & Kamar Set', 'Sliding · Full Plafon · Kamar Pengantin'],
  ['layanan-backdrop-tv-partisi-ruangan-baturaja', 'Backdrop TV & Partisi', 'WPC · HPL · Partisi Dua Sisi'],
  ['layanan-interior-kantor-instansi-baturaja', 'Interior Kantor & Instansi', 'Front Office · Ruang Rapat · Villa'],
  ['layanan-interior-toko-mall-booth-pameran-baturaja', 'Toko, Mall & Booth', 'Fit-Out · Island Booth · Knock-Down'],
];

const AREAS = [
  ['area-oku-selatan-muaradua-danau-ranau', 'Muaradua & Danau Ranau', 'OKU Selatan'],
  ['area-oku-timur-martapura-belitang', 'Martapura & Belitang', 'OKU Timur'],
  ['area-muara-enim-tanjung-enim', 'Muara Enim & Tanjung Enim', 'Koridor Tambang'],
  ['area-prabumulih', 'Prabumulih', 'Citimall & Ritel'],
];

const STATIC = [
  ['og-default', 'Jasa Interior Baturaja & OKU Raya', 'Kitchen Set · Lemari · Kantor · Booth', 'Workshop Banding Agung, OKU Selatan'],
  ['layanan-index', 'Layanan Interior & Fit-Out', 'Lima pilar layanan untuk rumah & usaha', 'Baturaja · OKU Raya'],
  ['portfolio-index', 'Portofolio Proyek Interior', 'Dokumentasi kitchen set, lemari, kantor & toko', 'Baturaja · OKU Raya'],
  ['blog-index', 'Blog & Panduan Interior', 'Harga, material, dan pengalaman lapangan', 'Baturaja · OKU Raya'],
  ['area-index', 'Area Layanan OKU Raya', 'Baturaja, OKU Selatan, OKU Timur, Muara Enim, Prabumulih', 'Sumatera Selatan'],
  ['tentang-kami', 'Tentang Interior Baturaja', 'Workshop sendiri di Banding Agung', 'OKU Selatan'],
  ['kontak', 'Kontak & Konsultasi', 'WhatsApp 0853-1002-4736', 'Baturaja · OKU Raya'],
];

function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrap(text, maxChars = 30, maxLines = 4) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    if ((line + ' ' + word).trim().length > maxChars && line) {
      lines.push(line.trim());
      line = word;
    } else {
      line = (line + ' ' + word).trim();
    }
    if (lines.length === maxLines) break;
  }
  if (line && lines.length < maxLines) lines.push(line.trim());
  if (lines.length === maxLines) {
    const last = lines[maxLines - 1];
    if (last.length > maxChars - 1) lines[maxLines - 1] = last.slice(0, maxChars - 1).trimEnd() + '…';
  }
  return lines;
}

function buildSvg({ eyebrow, title, subtitle }) {
  const lines = wrap(title, 28, 4);
  const titleSize = lines.length > 3 ? 62 : lines.length > 2 ? 70 : 78;
  const lineHeight = titleSize * 1.12;
  const startY = 300 - ((lines.length - 1) * lineHeight) / 2;
  const titleTspans = lines
    .map((line, i) => `<tspan x="92" y="${startY + i * lineHeight}">${esc(line)}</tspan>`)
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1630"/>
      <stop offset="0.62" stop-color="#13294f"/>
      <stop offset="1" stop-color="#3a2c1e"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#e6c78a"/>
      <stop offset="1" stop-color="#b89150"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#3b5fae" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#3b5fae" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9db6e6" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <circle cx="1050" cy="90" r="360" fill="url(#glow)"/>

  <!-- aksen kiri -->
  <rect x="0" y="0" width="12" height="630" fill="url(#gold)"/>

  <!-- logo -->
  <g transform="translate(84, 62)">
    <circle cx="34" cy="34" r="34" fill="#1e40af"/>
    <path d="M15 36 L34 20 L53 36 V52 H15 Z" fill="#ffffff"/>
    <path d="M28 44 H40 V52 H28 Z" fill="#1e40af"/>
  </g>
  <text x="166" y="86" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="700" fill="#ffffff">INTERIOR BATURAJA</text>
  <text x="166" y="112" font-family="DejaVu Sans, Arial, sans-serif" font-size="15" letter-spacing="3" fill="#d9c7a3">OKU RAYA · SUMATERA SELATAN</text>

  <!-- eyebrow -->
  <text x="92" y="200" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="4" fill="#d9c7a3">${esc(eyebrow.toUpperCase())}</text>

  <!-- judul -->
  <text font-family="DejaVu Serif, Georgia, serif" font-size="${titleSize}" font-weight="700" fill="#ffffff">${titleTspans}</text>

  <!-- subtitle -->
  <text x="94" y="520" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" fill="#cfd9ea">${esc(subtitle)}</text>

  <!-- footer -->
  <rect x="92" y="558" width="1016" height="1" fill="#ffffff" fill-opacity="0.16"/>
  <text x="92" y="596" font-family="DejaVu Sans, Arial, sans-serif" font-size="19" fill="#d9c7a3">interiorbaturaja.web.id</text>
  <text x="1108" y="596" text-anchor="end" font-family="DejaVu Sans, Arial, sans-serif" font-size="19" fill="#cfd9ea">WhatsApp 0853-1002-4736</text>
</svg>`;
}

async function render(slug, data) {
  const svg = buildSvg(data);
  const out = path.join(OUT_DIR, `${slug}.png`);
  await sharp(Buffer.from(svg)).png({ quality: 92, compressionLevel: 9 }).toFile(out);
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  const get = (key) => {
    const m = yaml.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    if (!m) return '';
    return m[1].replace(/^["']|["']$/g, '').trim();
  };
  return {
    title: get('title'),
    description: get('description'),
    category: get('category'),
  };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  for (const [slug, title, subtitle, eyebrow] of STATIC) {
    await render(slug, {
      eyebrow: eyebrow || 'Interior Baturaja',
      title,
      subtitle,
    });
  }

  for (const [slug, title, subtitle] of SERVICES) {
    await render(slug, { eyebrow: 'Layanan', title, subtitle });
  }

  for (const [slug, title, subtitle] of AREAS) {
    await render(slug, { eyebrow: 'Area Layanan', title, subtitle });
  }

  if (existsSync(POSTS_DIR)) {
    const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      const id = file.replace(/\.md$/, '');
      const raw = await readFile(path.join(POSTS_DIR, file), 'utf8');
      const fm = parseFrontmatter(raw);
      if (!fm.title) continue;
      await render(id, {
        eyebrow: fm.category === 'Portfolio' ? 'Studi Proyek' : 'Artikel',
        title: fm.title,
        subtitle: fm.description ? fm.description.slice(0, 96) + (fm.description.length > 96 ? '…' : '') : 'Interior Baturaja',
      });
    }
  }

  console.log(`OG images generated → public/og`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
