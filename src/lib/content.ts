import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Estimasi waktu baca dari body markdown */
export function readingTime(body = ''): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function sortByDate(a: Post, b: Post) {
  return (b.data.pubDate?.valueOf() ?? 0) - (a.data.pubDate?.valueOf() ?? 0);
}

/** Semua post yang boleh tampil (bukan draft) */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort(sortByDate);
}

export async function getBlogPosts(): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.category === 'Blog');
}

export async function getPortfolioPosts(): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.category === 'Portfolio');
}

/** Artikel terkait berdasarkan tag yang sama, lalu tanggal terbaru */
export function relatedPosts(current: Post, all: Post[], limit = 4): Post[] {
  const currentTags = new Set(current.data.tags);
  return all
    .filter((p) => p.id !== current.id && p.data.category === current.data.category)
    .map((p) => ({
      post: p,
      score: p.data.tags.filter((t) => currentTags.has(t)).length,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (b.post.data.pubDate?.valueOf() ?? 0) - (a.post.data.pubDate?.valueOf() ?? 0);
    })
    .slice(0, limit)
    .map((x) => x.post);
}

/** Revalidasi URL internal agar selalu diawali dan diakhiri slash */
export function normalizePath(url: string): string {
  if (!url.startsWith('/')) url = '/' + url;
  if (!url.endsWith('/')) url += '/';
  return url;
}

/** Ambil 3 post portfolio terbaru untuk homepage */
export async function latestPortfolio(limit = 6): Promise<Post[]> {
  const posts = await getPortfolioPosts();
  return posts.slice(0, limit);
}
