import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const POST_TAGS = [
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
] as const;

/**
 * Satu koleksi untuk Blog + Portfolio.
 * Dipisahkan lewat frontmatter `category`.
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Blog', 'Portfolio']),    tags: z.array(z.enum(POST_TAGS)).min(1),
    targetKeywords: z.array(z.string()).default([]),
    relatedServiceUrl: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    author: z.string().default('Tim Interior Baturaja'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    projectDetails: z
      .object({
        clientOrProject: z.string(),
        location: z.string(),
        material: z.string(),
        duration: z.string(),
        year: z.number(),
      })
      .optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .min(3),
  }),
});

export const collections = { posts };

export { POST_TAGS };
