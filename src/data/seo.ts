/**
 * Single source of truth para metadata SEO + enlazado interno.
 *
 * Cada ruta L2 declara:
 * - title / description / keywords (optimizados para CTR + intención de búsqueda)
 * - relatedLinks: array de URLs a enlazar internamente con anchors SEO-friendly
 * - eyebrow / context: para componente RelatedLinks
 *
 * El componente <RelatedLinks /> consume esto automáticamente vía currentPath.
 */

export interface RelatedLink {
  href: string;
  label: string;          // Anchor text optimizado SEO
  eyebrow: string;        // Tag corto (Servicio, Proceso, etc.)
  description: string;    // 1 línea para el card
  icon: 'home' | 'store' | 'factory' | 'lock' | 'camera' | 'shield' | 'eye' | 'map' | 'clock' | 'help' | 'phone' | 'about';
  color: 'brand' | 'accent';
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  h1?: string;
  relatedLinks: string[];   // Paths que se enlazan desde esta página
  contextHeading?: string;  // Heading personalizado para RelatedLinks
  contextLead?: string;     // Lead personalizado
}

// ─────────────────────────────────────────────────────────────
// Catálogo de TODOS los links internos disponibles
// ─────────────────────────────────────────────────────────────
export const LINK_CATALOG: Record<string, RelatedLink> = {
  '/': {
    href: '/',
    label: 'Cámaras de seguridad CDMX',
    eyebrow: 'Inicio',
    description: 'Instalación profesional CCTV con garantía 2 años, técnicos Hikvision y Dahua certificados.',
    icon: 'home',
    color: 'brand',
  },
  '/servicios/': {
    href: '/servicios/',
    label: 'Catálogo de servicios CCTV',
    eyebrow: 'Servicios',
    description: 'Cuatro líneas profesionales: residencial, comercial, industrial y control de acceso.',
    icon: 'camera',
    color: 'brand',
  },
  '/servicios/camaras-para-hogar/': {
    href: '/servicios/camaras-para-hogar/',
    label: 'Cámaras de seguridad para hogar',
    eyebrow: 'Residencial',
    description: 'Sistemas CCTV para casas y departamentos con cableado oculto y app en tu celular.',
    icon: 'home',
    color: 'brand',
  },
  '/servicios/camaras-para-comercio/': {
    href: '/servicios/camaras-para-comercio/',
    label: 'Cámaras de seguridad para comercio',
    eyebrow: 'Comercial',
    description: 'CCTV para tiendas, oficinas y bodegas sin afectar tu operación, con planos entregados.',
    icon: 'store',
    color: 'accent',
  },
  '/servicios/sistemas-cctv-industriales/': {
    href: '/servicios/sistemas-cctv-industriales/',
    label: 'Sistemas CCTV industriales',
    eyebrow: 'Industrial',
    description: 'Cámaras térmicas, PTZ, centros de monitoreo y cumplimiento NOM-001-SEDE.',
    icon: 'factory',
    color: 'brand',
  },
  '/servicios/control-de-acceso/': {
    href: '/servicios/control-de-acceso/',
    label: 'Control de acceso biométrico y LPR',
    eyebrow: 'Complementario',
    description: 'Videoporteros IP, cerraduras inteligentes, biométricos y lectura de placas.',
    icon: 'lock',
    color: 'accent',
  },
  '/sobre-nosotros/': {
    href: '/sobre-nosotros/',
    label: 'Quiénes somos · 10 años de experiencia',
    eyebrow: 'Nosotros',
    description: 'Más de 2,050 sistemas instalados en CDMX desde 2014, técnicos certificados Hikvision.',
    icon: 'about',
    color: 'brand',
  },
  '/como-trabajamos/': {
    href: '/como-trabajamos/',
    label: 'Cómo trabajamos · 6 pasos documentados',
    eyebrow: 'Proceso',
    description: 'Desde la visita técnica gratuita hasta la entrega con app configurada. Sin sorpresas.',
    icon: 'clock',
    color: 'accent',
  },
  '/cobertura-cdmx-edomex/': {
    href: '/cobertura-cdmx-edomex/',
    label: 'Cobertura CDMX y Estado de México',
    eyebrow: 'Cobertura',
    description: '16 alcaldías + 16 municipios sin cargo por desplazamiento. Visita técnica gratis.',
    icon: 'map',
    color: 'brand',
  },
  '/preguntas-frecuentes/': {
    href: '/preguntas-frecuentes/',
    label: 'Preguntas frecuentes sobre CCTV',
    eyebrow: 'FAQ',
    description: '31 respuestas reales sobre precios, garantía, marcas, instalación y app.',
    icon: 'help',
    color: 'accent',
  },
  '/contacto/': {
    href: '/contacto/',
    label: 'Contacto · Cotización gratis por WhatsApp',
    eyebrow: 'Contacto',
    description: 'Respuesta en menos de 15 minutos por WhatsApp directo con técnico certificado.',
    icon: 'phone',
    color: 'accent',
  },
};

// ─────────────────────────────────────────────────────────────
// Meta + enlazado por página L2
// ─────────────────────────────────────────────────────────────
export const PAGE_SEO: Record<string, PageSEO> = {
  '/': {
    title: 'Cámaras de Seguridad CDMX | Instalación CCTV Profesional con Garantía 2 Años',
    description:
      'Instalamos cámaras de seguridad CCTV en CDMX y Estado de México con Hikvision, Dahua y Provision-ISR. Visita técnica gratis, garantía 2 años por escrito, sin contrato. Cotiza por WhatsApp en menos de 15 minutos.',
    keywords:
      'cámaras de seguridad CDMX, instalación CCTV México, cámaras Hikvision, cámaras Dahua, sistema de videovigilancia, monitoreo 24/7, cámaras IP 4K, control de acceso',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/sobre-nosotros/', '/preguntas-frecuentes/', '/contacto/'],
  },

  '/servicios/': {
    title: 'Servicios de Cámaras de Seguridad CCTV | Hogar, Comercio e Industria',
    description:
      'Cuatro líneas de servicio profesional CCTV: cámaras residenciales, comerciales, industriales y control de acceso. Visita técnica gratuita, equipos Hikvision y Dahua, garantía 2 años en CDMX y Edomex.',
    keywords:
      'servicios cámaras seguridad, instalación CCTV CDMX, cámaras residenciales, cámaras comerciales, sistemas industriales CCTV, control de acceso, videovigilancia profesional',
    relatedLinks: ['/servicios/camaras-para-hogar/', '/servicios/camaras-para-comercio/', '/servicios/sistemas-cctv-industriales/', '/servicios/control-de-acceso/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/preguntas-frecuentes/'],
    contextHeading: 'Explora cada línea de servicio en detalle',
    contextLead: 'Cada solución tiene sub-servicios independientes con paquetes, precios y especialidades. Revisa la línea que aplica a tu caso.',
  },

  '/sobre-nosotros/': {
    title: 'Sobre Nosotros | Empresa de Cámaras de Seguridad CCTV en CDMX desde 2014',
    description:
      'Más de 10 años instalando sistemas CCTV en México. Técnicos certificados oficialmente por Hikvision y Dahua, +2,050 sistemas entregados, garantía de 2 años por escrito. Conoce nuestra historia, valores y diferenciadores.',
    keywords:
      'empresa cámaras de seguridad CDMX, instaladores certificados Hikvision, técnicos Dahua, expertos CCTV México, mejor empresa cámaras seguridad',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/preguntas-frecuentes/', '/contacto/'],
    contextHeading: 'Conoce más sobre nuestra propuesta de valor',
    contextLead: 'Lo que nos diferencia se ve en cada etapa: desde el proceso de trabajo hasta la cobertura, los servicios y el soporte post-venta.',
  },

  '/como-trabajamos/': {
    title: 'Cómo Trabajamos | Proceso de Instalación CCTV Paso a Paso · 6 Etapas',
    description:
      'Proceso documentado de 6 pasos para instalar tu sistema de cámaras de seguridad: desde la primera respuesta hasta la entrega con app configurada. Tiempos reales, garantía firmada y soporte post-venta directo.',
    keywords:
      'proceso instalación cámaras seguridad, cómo se instalan cámaras CCTV, pasos instalación videovigilancia, instalación profesional CCTV CDMX',
    relatedLinks: ['/servicios/', '/cobertura-cdmx-edomex/', '/sobre-nosotros/', '/preguntas-frecuentes/', '/contacto/'],
    contextHeading: 'Continúa explorando lo que incluye cada proyecto',
    contextLead: 'El proceso es parte de un sistema integral. Conoce los servicios, la cobertura, las preguntas más frecuentes y los canales de contacto.',
  },

  '/cobertura-cdmx-edomex/': {
    title: 'Cobertura CDMX, Estado de México y Nacional | Instalación CCTV Sin Cargo Extra',
    description:
      'Cobertura directa en 16 alcaldías de CDMX y 16+ municipios del Estado de México sin cargo por desplazamiento. También Guadalajara, Monterrey y Bajío. Visita técnica gratuita en 24-48 horas.',
    keywords:
      'instalación cámaras CDMX, cámaras seguridad Estado de México, CCTV Naucalpan, CCTV Tlalnepantla, instalación cámaras Coyoacán, cámaras Guadalajara Monterrey, cobertura nacional CCTV',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/sobre-nosotros/', '/preguntas-frecuentes/', '/contacto/'],
    contextHeading: 'Explora servicios disponibles en tu zona',
    contextLead: 'En cualquier alcaldía o municipio cubierto aplicamos el mismo proceso, garantía y catálogo de servicios. Conoce qué incluye cada solución.',
  },

  '/preguntas-frecuentes/': {
    title: 'Preguntas Frecuentes sobre Cámaras de Seguridad CCTV | 31 Respuestas',
    description:
      'Resuelve todas tus dudas sobre instalación de cámaras de seguridad: precios reales, marcas, garantías, proceso, app móvil y cobertura. 31 respuestas honestas de expertos certificados Hikvision y Dahua.',
    keywords:
      'preguntas frecuentes cámaras seguridad, cuánto cuesta CCTV, qué marca de cámara comprar, garantía cámaras seguridad, instalación cámaras dudas',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/sobre-nosotros/', '/contacto/'],
    contextHeading: 'Más recursos para tomar tu decisión',
    contextLead: 'Si las respuestas te sirvieron, complementa con el catálogo de servicios, la cobertura por zona y el proceso completo de instalación.',
  },

  '/contacto/': {
    title: 'Contacto | Cotización Gratuita de Cámaras de Seguridad CCTV en CDMX',
    description:
      'Solicita tu cotización de cámaras de seguridad CCTV en menos de 15 minutos. WhatsApp directo con técnico certificado Hikvision y Dahua, visita técnica gratuita en CDMX y zona metropolitana. Sin call center, sin bots.',
    keywords:
      'cotización cámaras seguridad CDMX, contacto instalador CCTV, presupuesto cámaras Hikvision, asesoría cámaras vigilancia, WhatsApp cámaras seguridad',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/sobre-nosotros/', '/preguntas-frecuentes/'],
    contextHeading: 'Antes de escribir, revisa también',
    contextLead: 'Estos recursos suelen resolver el 80% de las dudas iniciales — y hacen tu cotización más precisa cuando nos contactes.',
  },
};

/**
 * Helper: devuelve los RelatedLink completos para una ruta dada.
 * Ordena, filtra el currentPath y limita a maxLinks.
 */
export function getRelatedLinks(currentPath: string, maxLinks = 6): RelatedLink[] {
  const config = PAGE_SEO[currentPath];
  if (!config) {
    // Fallback: 5 links principales
    return ['/servicios/', '/sobre-nosotros/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/preguntas-frecuentes/']
      .filter((p) => p !== currentPath)
      .map((p) => LINK_CATALOG[p])
      .filter(Boolean)
      .slice(0, maxLinks);
  }
  return config.relatedLinks
    .filter((p) => p !== currentPath)
    .map((p) => LINK_CATALOG[p])
    .filter(Boolean)
    .slice(0, maxLinks);
}

export function getPageContext(currentPath: string) {
  const config = PAGE_SEO[currentPath];
  return {
    heading: config?.contextHeading ?? 'Continúa explorando',
    lead:
      config?.contextLead ??
      'Mantén la información a la mano explorando los recursos más útiles del sitio.',
  };
}
