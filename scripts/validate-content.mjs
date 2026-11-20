#!/usr/bin/env node
/**
 * Validasi frontmatter & isi konten di src/content/posts.
 * Dipakai manual: `node scripts/validate-content.mjs`
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'src', 'content', 'posts');

const TAGS = new Set([
  'Kitchen Set',
  'Lemari & Kamar Set',
  'Backdrop TV & Partisi',
  'Interior Kantor & Instansi',
  'Interior Toko, Mall & Booth',
  'Edukasi & Material',
  'Harga & RAB',
  'Baturaja',
  'OKU Timur',
  'OKU Selatan',
  'Muara Enim',
  'Prabumulih',
]);

const errors = [];
const warnings = [];
const titles = new Map();

function parse(raw, file) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    errors.push(`${file}: frontmatter tidak ditemukan`);
    return null;
  }
  return { yaml: match[1], body: match[2] };
}

function stringList(yaml, key) {
  // Inline array: tags: ["A", "B"]
  const inline = yaml.match(new RegExp(`^${key}:\\s*\\[(.*)\\]`, 'm'));
  if (inline) {
    return inline[1]
      .match(/(["'])(?:(?!\1).)*\1|[^,]+/g)
      .map((l) => l.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  // Block list: tags:\n  - "A"
  const block = yaml.match(new RegExp(`^${key}:\\s*\\n((?:\\s+-\\s+.*\\n?)+)`, 'm'));
  if (!block) return [];
  return block[1]
    .split('\n')
    .map((l) => l.replace(/^\s*-\s*/, '').trim())
    .map((l) => l.replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

function scalar(yaml, key) {
  const m = yaml.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!m) return '';
  return m[1].replace(/^["']|["']$/g, '').trim();
}

const files = (await readdir(DIR)).filter((f) => f.endsWith('.md')).sort();

for (const file of files) {
  const raw = await readFile(path.join(DIR, file), 'utf8');
  const parsed = parse(raw, file);
  if (!parsed) continue;
  const { yaml, body } = parsed;

  const title = scalar(yaml, 'title');
  const description = scalar(yaml, 'description');
  const category = scalar(yaml, 'category');
  const pubDate = scalar(yaml, 'pubDate');
  const draft = scalar(yaml, 'draft');
  const related = scalar(yaml, 'relatedServiceUrl');
  const tags = stringList(yaml, 'tags');

  if (draft !== 'true' && !/^\d{4}-\d{2}-\d{2}$/.test(pubDate)) {
    errors.push(`${file}: artikel TERBIT (draft:false) wajib punya pubDate`);
  }

  if (!title) errors.push(`${file}: title kosong`);
  if (!description) errors.push(`${file}: description kosong`);
  if (description.length < 120) warnings.push(`${file}: description pendek (${description.length})`);
  if (description.length > 175) warnings.push(`${file}: description panjang (${description.length})`);
  if (!['Blog', 'Portfolio'].includes(category)) errors.push(`${file}: category tidak valid (${category})`);
  if (!related.startsWith('/')) errors.push(`${file}: relatedServiceUrl harus path absolut (${related})`);
  if (!tags.length) errors.push(`${file}: tags kosong`);
  else for (const t of tags) if (!TAGS.has(t)) errors.push(`${file}: tag tidak dikenal "${t}"`);

  const faqCount = (yaml.match(/^\s+- question:/gm) || []).length;
  if (faqCount < 3) errors.push(`${file}: FAQ kurang dari 3 (${faqCount})`);

  if (category === 'Portfolio' && !/^projectDetails:/m.test(yaml)) {
    errors.push(`${file}: Portfolio wajib punya projectDetails`);
  }

  const words = body.split(/\s+/).filter(Boolean).length;
  const min = category === 'Portfolio' ? 700 : 900;
  if (words < min) warnings.push(`${file}: ${words} kata (< ${min})`);

  if (title) {
    if (titles.has(title)) errors.push(`${file}: judul duplikat dengan ${titles.get(title)}`);
    else titles.set(title, file);
  }
}

console.log(`Total konten: ${files.length}`);
let counts = { Blog: 0, Portfolio: 0, draft: 0, terbit: 0 };
for (const file of files) {
  const raw = await readFile(path.join(DIR, file), 'utf8');
  const yaml = (raw.match(/^---\r?\n([\s\S]*?)\r?\n---/) || ['', ''])[1];
  const cat = scalar(yaml, 'category');
  if (counts[cat] !== undefined) counts[cat] += 1;
  if (scalar(yaml, 'draft') === 'true') counts.draft += 1;
  else counts.terbit += 1;
}
console.log(`  Blog      : ${counts.Blog}`);
console.log(`  Portfolio : ${counts.Portfolio}`);
console.log(`  Draft     : ${counts.draft}`);
console.log(`  Terbit    : ${counts.terbit}`);

if (warnings.length) {
  console.log(`\nPERINGATAN (${warnings.length}):`);
  for (const w of warnings) console.log(`  - ${w}`);
}
if (errors.length) {
  console.log(`\nERROR (${errors.length}):`);
  for (const e of errors) console.log(`  - ${e}`);
  process.exit(1);
}
console.log('\nSemua konten valid.');
