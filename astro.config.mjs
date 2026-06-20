// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://camara-de-seguridad.com',
  trailingSlash: 'ignore',
  server: {
    port: 4500,
    host: true,
  },
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-MX',
        },
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  compressHTML: true,
  vite: {
    resolve: {
      // Specific aliases first so '@' does not greedily shadow '@components', etc.
      alias: [
        { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
        { find: '@layouts', replacement: fileURLToPath(new URL('./src/layouts', import.meta.url)) },
        { find: '@config', replacement: fileURLToPath(new URL('./src/config', import.meta.url)) },
        { find: '@lib', replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) },
        { find: '@styles', replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) },
        { find: '@content', replacement: fileURLToPath(new URL('./src/content', import.meta.url)) },
        { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      ],
    },
  },
});
