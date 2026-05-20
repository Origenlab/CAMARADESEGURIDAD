# Cámara de Seguridad — Sitio oficial

Sitio web de [camara-de-seguridad.com](https://camara-de-seguridad.com), construido con **Astro + TailwindCSS + TypeScript** y contenido en **Markdown** (Content Collections).

---

## 🚀 Stack

- **Astro 5** — framework estático, SSG, súper rápido
- **TailwindCSS 3** — utility-first CSS
- **TypeScript** estricto
- **Content Collections** — productos / blog / servicios en Markdown con schema Zod
- **@astrojs/sitemap** — sitemap.xml automático
- **JSON-LD LocalBusiness** — SEO local para México
- **Open Graph + Twitter Cards** — previsualización en redes
- **Botón flotante de WhatsApp** — contacto directo

---

## 📦 Requisitos

- Node.js **≥ 18.17.1** (recomendado 20 LTS)
- npm / pnpm / yarn

---

## ⚡ Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.example .env

# 3. Editar .env con tus datos reales (WhatsApp, email, teléfono)

# 4. Levantar servidor de desarrollo
npm run dev
```

Abrir <http://localhost:4500>

> El proyecto usa el puerto **4500** (configurado en `astro.config.mjs`) para evitar colisión con otros proyectos Astro que suelen usar el 4321 por defecto. Si quieres cambiarlo, edita `server.port` en `astro.config.mjs`.

---

## 🛠️ Scripts disponibles

| Comando            | Acción                                          |
| ------------------ | ----------------------------------------------- |
| `npm run dev`      | Servidor local con HMR en `http://localhost:4500` |
| `npm run build`    | Genera el sitio estático en `./dist/`           |
| `npm run preview`  | Previsualiza el build localmente                |
| `npm run check`    | Type-check + diagnóstico de Astro               |

---

## 📁 Estructura del proyecto

```text
.
├── public/                  # Archivos estáticos servidos tal cual
│   ├── favicon.svg
│   ├── robots.txt
│   └── og-default.jpg       # (reemplazar placeholder)
│
├── src/
│   ├── assets/              # Imágenes optimizadas por Astro (importar en componentes)
│   │
│   ├── components/          # Componentes .astro reutilizables
│   │   ├── SEO.astro
│   │   ├── TopBar.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppFloat.astro
│   │   ├── Hero.astro
│   │   ├── ServiciosSection.astro
│   │   ├── BeneficiosSection.astro
│   │   ├── ProcesoSection.astro
│   │   └── CTASection.astro
│   │
│   ├── content/             # Markdown con Content Collections
│   │   ├── config.ts        # Schemas Zod para validación
│   │   ├── productos/       # Cámaras y equipos
│   │   ├── blog/            # Artículos y guías
│   │   └── servicios/       # Páginas de servicios
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout principal (Header + Footer + WhatsApp)
│   │
│   ├── pages/               # Rutas (file-based routing)
│   │   ├── index.astro      # Home
│   │   └── 404.astro
│   │
│   ├── styles/
│   │   └── global.css       # Tailwind base + componentes globales
│   │
│   └── consts.ts            # Configuración global del sitio (nombre, contacto, nav)
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✏️ Personalización rápida

### Cambiar datos de contacto

Edita **`src/consts.ts`** — toda la información de contacto, redes sociales y nombre del
negocio está centralizada ahí.

### Agregar productos

1. Crea un archivo `.md` dentro de `src/content/productos/`.
2. Sigue el formato del ejemplo `_ejemplo-camara-ip-4k.md`.
3. El schema en `src/content/config.ts` valida los campos automáticamente.

### Agregar artículos al blog

1. Crea un `.md` dentro de `src/content/blog/`.
2. Usa frontmatter con `title`, `description`, `pubDate`, etc.
3. Para activar las páginas dinámicas del blog, crea `src/pages/blog/[slug].astro` y
   `src/pages/blog/index.astro`.

### Cambiar colores de marca

Edita la sección `theme.extend.colors` en **`tailwind.config.mjs`**:

- `brand` — naranja/coral `#FF5722` (CTAs, eyebrows, acentos)
- `ink` — escala de grises tipo Bootstrap (`#212529` → `#f8f9fa`)

### Tipografía

El sitio carga **Montserrat** (display, weight 900) y **Open Sans** (body, weight 400-700)
desde Google Fonts. La carga está en `src/components/SEO.astro`. Si quieres self-hostear las
fuentes, mueve los archivos a `/public/fonts/` y reemplaza el `<link>` por `@font-face`.

---

## 🌐 Deploy

El sitio es 100% estático. Funciona en cualquier hosting:

- **Cloudflare Pages** — recomendado, gratis, CDN global
- **Netlify** — drag & drop del directorio `dist/`
- **Vercel** — autodeploy desde Git
- **GitHub Pages** — con action de build

### Build de producción

```bash
npm run build
```

El directorio `dist/` se sube al hosting. Asegúrate de configurar el dominio
`camara-de-seguridad.com` con DNS apuntando al hosting elegido.

---

## ✅ Pendientes para producción

- [ ] Reemplazar `public/og-default.jpg.README.txt` con una imagen real `og-default.jpg` (1200×630)
- [ ] Editar `src/consts.ts` con WhatsApp, teléfono, email, redes sociales reales
- [ ] Reemplazar las URLs de redes sociales (`facebook`, `instagram`, `youtube`) en `src/consts.ts`
- [ ] Crear páginas legales: `/aviso-de-privacidad` y `/terminos`
- [ ] Conectar Google Analytics o GTM si se requiere (variables ya listas en `.env.example`)
- [ ] Configurar Search Console y subir el sitemap

---

## 📝 Licencia

Propietario — Cámara de Seguridad. Todos los derechos reservados.
