import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection: productos
 * Catálogo de cámaras y equipos CCTV en formato Markdown.
 * Archivos en src/content/productos/*.md (los que empiezan con _ se ignoran).
 */
const productos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/productos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      sku: z.string().optional(),
      description: z.string(),
      precio: z.number().optional(),
      moneda: z.enum(['MXN', 'USD']).default('MXN'),
      marca: z.string(),
      categoria: z.enum([
        'camaras-ip',
        'camaras-analogicas',
        'ptz',
        'termicas',
        'dvr-nvr',
        'control-acceso',
        'accesorios',
      ]),
      especificaciones: z
        .object({
          resolucion: z.string().optional(),
          vision_nocturna: z.string().optional(),
          angulo: z.string().optional(),
          alimentacion: z.string().optional(),
          proteccion: z.string().optional(),
          conectividad: z.array(z.string()).optional(),
        })
        .optional(),
      destacado: z.boolean().default(false),
      enStock: z.boolean().default(true),
      imagen: image().optional(),
      galeria: z.array(image()).optional(),
      tags: z.array(z.string()).default([]),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    }),
});

/**
 * Collection: blog
 * Artículos, guías y comparativas en Markdown.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Equipo Cámara de Seguridad'),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      categoria: z
        .enum(['guias', 'comparativas', 'instalacion', 'tendencias', 'casos-de-exito'])
        .default('guias'),
      draft: z.boolean().default(false),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    }),
});

/**
 * Collection: servicios
 * Páginas detalladas de servicios (instalación, monitoreo, etc.).
 */
const servicios = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/servicios' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      orden: z.number().default(0),
      icono: z.string().optional(),
      heroImage: image().optional(),
      destacado: z.boolean().default(false),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = {
  productos,
  blog,
  servicios,
};
