import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkAutolinks } from './src/plugins/remark-autolinks.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://interiorbaturaja.web.id',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    assets: '_astro',
  },
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },
  markdown: {
    remarkPlugins: [remarkAutolinks],
    shikiConfig: {
      theme: 'github-light',
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  scopedStyleStrategy: 'class',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    parallelPrerender: true,
    redirectPage: true,
  },
});
