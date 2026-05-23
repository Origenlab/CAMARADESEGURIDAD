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
    label: 'Quiénes somos · 50 años de experiencia',
    eyebrow: 'Nosotros',
    description: 'Más de 15,000 sistemas instalados en CDMX desde 1976, técnicos certificados Hikvision.',
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
    title: 'CAMSEG | Cámaras de Seguridad CCTV en México · 50+ Años · Cobertura Nacional',
    description:
      'CAMSEG · empresa mexicana líder en venta e instalación de cámaras de seguridad CCTV con más de 50 años de experiencia. +15,000 proyectos en toda la República Mexicana para hogar, comercio, industria y gobierno. Hikvision, Dahua, Axis y Provision-ISR con garantía 2 años por escrito.',
    keywords:
      'CAMSEG, cámaras de seguridad México, instalación CCTV nacional, empresa mexicana cámaras, cámaras Hikvision México, cámaras Dahua, Axis, videovigilancia profesional, monitoreo 24/7, cámaras IP 4K, control de acceso',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/sobre-nosotros/', '/preguntas-frecuentes/', '/contacto/'],
  },

  '/servicios/': {
    title: 'Servicios CCTV CAMSEG | Hogar, Comercio, Industria y Gobierno · México',
    description:
      'Catálogo completo de servicios CCTV de CAMSEG con cobertura nacional: cámaras residenciales, comerciales, industriales y control de acceso. 50+ años de experiencia, equipos Hikvision, Dahua y Axis, garantía 2 años por escrito en toda la República Mexicana.',
    keywords:
      'servicios cámaras seguridad CAMSEG, instalación CCTV México, cámaras residenciales, cámaras comerciales, sistemas industriales CCTV, control de acceso, videovigilancia gobierno, integrador CCTV nacional',
    relatedLinks: ['/servicios/camaras-para-hogar/', '/servicios/camaras-para-comercio/', '/servicios/sistemas-cctv-industriales/', '/servicios/control-de-acceso/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/preguntas-frecuentes/'],
    contextHeading: 'Explora cada línea de servicio en detalle',
    contextLead: 'Cada solución tiene sub-servicios independientes con paquetes, precios y especialidades. Revisa la línea que aplica a tu caso.',
  },

  '/sobre-nosotros/': {
    title: 'Sobre CAMSEG | Empresa Mexicana de Cámaras de Seguridad desde 1976',
    description:
      'CAMSEG · empresa familiar mexicana fundada en 1976. Más de 50 años instalando sistemas CCTV en toda la República. Técnicos certificados Hikvision, Dahua y Axis, más de 15,000 proyectos entregados en residencial, comercial, industrial y gobierno con garantía de 2 años por escrito.',
    keywords:
      'CAMSEG empresa, historia cámaras seguridad México, integrador CCTV 50 años, instaladores certificados Hikvision México, técnicos Dahua nacional, expertos CCTV gobierno, mejor empresa cámaras seguridad México',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/preguntas-frecuentes/', '/contacto/'],
    contextHeading: 'Conoce más sobre nuestra propuesta de valor',
    contextLead: 'Cinco décadas se ven en cada etapa: desde el proceso de trabajo hasta la cobertura nacional, los servicios y el soporte post-venta directo.',
  },

  '/como-trabajamos/': {
    title: 'Cómo Trabaja CAMSEG | Proceso de Instalación CCTV en 6 Etapas Documentadas',
    description:
      'Proceso CAMSEG de 6 pasos para instalar tu sistema CCTV: del primer contacto a la entrega con app configurada. 50 años de experiencia detrás de cada visita técnica gratuita, propuesta formal y garantía de 2 años. Cobertura en toda la República Mexicana.',
    keywords:
      'proceso instalación CAMSEG, cómo trabaja CAMSEG, pasos instalación CCTV México, instalación profesional cámaras nacional, metodología instalación videovigilancia',
    relatedLinks: ['/servicios/', '/cobertura-cdmx-edomex/', '/sobre-nosotros/', '/preguntas-frecuentes/', '/contacto/'],
    contextHeading: 'Continúa explorando lo que incluye cada proyecto',
    contextLead: 'El proceso es parte de un sistema integral. Conoce los servicios, la cobertura, las preguntas más frecuentes y los canales de contacto directo con CAMSEG.',
  },

  '/cobertura-cdmx-edomex/': {
    title: 'Cobertura Nacional CAMSEG | Instalación CCTV en Toda la República Mexicana',
    description:
      'CAMSEG opera en toda la República Mexicana — CDMX, Estado de México, Guadalajara, Monterrey, Querétaro, Puebla, León, Tijuana, Mérida, Cancún, Veracruz y más. Visita técnica gratuita, técnicos certificados locales y garantía unificada en todo el país.',
    keywords:
      'cobertura nacional CAMSEG, instalación cámaras México, CCTV Guadalajara, CCTV Monterrey, instalación cámaras Querétaro, CCTV Puebla, cámaras Mérida, cobertura República Mexicana, integrador CCTV nacional',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/sobre-nosotros/', '/preguntas-frecuentes/', '/contacto/'],
    contextHeading: 'Explora servicios disponibles en tu zona',
    contextLead: 'En toda la República aplicamos el mismo proceso, garantía y catálogo de servicios. Conoce qué incluye cada solución CAMSEG.',
  },

  '/preguntas-frecuentes/': {
    title: 'Preguntas Frecuentes CAMSEG | 31 Respuestas sobre Cámaras de Seguridad CCTV',
    description:
      '31 preguntas frecuentes sobre instalación de cámaras de seguridad CCTV respondidas por expertos CAMSEG con 50+ años de experiencia: precios reales, marcas Hikvision y Dahua, garantías, proceso, app móvil y cobertura nacional.',
    keywords:
      'preguntas frecuentes CAMSEG, cuánto cuesta CCTV México, qué marca de cámara comprar, garantía cámaras seguridad nacional, instalación cámaras dudas, FAQ cámaras seguridad',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/sobre-nosotros/', '/contacto/'],
    contextHeading: 'Más recursos para tomar tu decisión',
    contextLead: 'Si las respuestas te sirvieron, complementa con el catálogo de servicios CAMSEG, la cobertura nacional y el proceso completo de instalación.',
  },

  '/contacto/': {
    title: 'Contacto CAMSEG | Cotización Gratis de Cámaras de Seguridad CCTV · México',
    description:
      'Contacta a CAMSEG para tu cotización de cámaras de seguridad CCTV. Respuesta WhatsApp en menos de 15 minutos con técnico certificado Hikvision y Dahua, visita técnica gratuita en toda la República Mexicana. Sin call center, sin bots, sin contrato forzoso.',
    keywords:
      'contacto CAMSEG, cotización cámaras seguridad México, presupuesto CCTV nacional, asesoría cámaras vigilancia, WhatsApp CAMSEG, contacto instalador cámaras México',
    relatedLinks: ['/servicios/', '/como-trabajamos/', '/cobertura-cdmx-edomex/', '/sobre-nosotros/', '/preguntas-frecuentes/'],
    contextHeading: 'Antes de escribir, revisa también',
    contextLead: 'Estos recursos suelen resolver el 80% de las dudas iniciales — y hacen tu cotización más precisa cuando contactes a CAMSEG.',
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

/**
 * Quick links del Hero — sets curados por página.
 * 5 links variados que enriquecen el interlinking interno desde el hero.
 */
export interface QuickLink {
  href: string;
  title: string;
  sub: string;
  icon: string;
}

const QUICK_LINKS_BY_PATH: Record<string, QuickLink[]> = {
  '/': [
    { href: '/servicios/camaras-para-hogar/',         title: 'Hogar',          sub: 'Casas · Departamentos · Cocheras',   icon: 'home'    },
    { href: '/servicios/camaras-para-comercio/',      title: 'Comercio',       sub: 'Tiendas · Oficinas · Bodegas',       icon: 'store'   },
    { href: '/servicios/sistemas-cctv-industriales/', title: 'Industrial',     sub: 'Fábricas · Naves · Patios',          icon: 'factory' },
    { href: '/servicios/control-de-acceso/',          title: 'Control acceso', sub: 'Videoporteros · Biométricos · LPR',  icon: 'lock'    },
    { href: '/contacto/',                             title: 'Cotización',     sub: 'Respuesta WhatsApp < 15 min',        icon: 'phone'   },
  ],

  '/servicios/': [
    { href: '/servicios/camaras-para-hogar/',         title: 'Residencial',    sub: 'Hogares · Quintas · Departamentos',  icon: 'home'    },
    { href: '/servicios/camaras-para-comercio/',      title: 'Comercial',      sub: 'Tiendas · Restaurantes · Bodegas',   icon: 'store'   },
    { href: '/servicios/sistemas-cctv-industriales/', title: 'Industrial',     sub: 'Térmicas · PTZ · Centros monitoreo', icon: 'factory' },
    { href: '/servicios/control-de-acceso/',          title: 'Accesos',        sub: 'Biométricos · LPR · Smart locks',    icon: 'lock'    },
    { href: '/como-trabajamos/',                      title: 'Nuestro proceso', sub: '6 pasos · visita técnica gratis',   icon: 'clock'   },
  ],

  '/servicios/camaras-para-hogar/': [
    { href: '/servicios/camaras-para-hogar/camaras-ip/',    title: 'Cámaras IP',      sub: 'Full HD · 4K · ColorVu',         icon: 'camera'  },
    { href: '/servicios/camaras-para-hogar/videoporteros/', title: 'Videoporteros',   sub: 'Pantalla + audio + app',         icon: 'bell'    },
    { href: '/servicios/camaras-para-hogar/alarmas/',       title: 'Alarmas',         sub: 'PIR · Magnéticos · Pánico',      icon: 'shield'  },
    { href: '/servicios/camaras-para-hogar/monitoreo/',     title: 'App móvil',       sub: 'Hik-Connect · DMSS · 4 disp.',   icon: 'monitor' },
    { href: '/contacto/',                                   title: 'Visita gratis',   sub: 'CDMX · 24-48 h sin costo',       icon: 'phone'   },
  ],

  '/servicios/camaras-para-comercio/': [
    { href: '/servicios/camaras-para-comercio/tiendas/',         title: 'Tiendas',       sub: 'POS · entrada · exhibición',     icon: 'store'   },
    { href: '/servicios/camaras-para-comercio/oficinas/',        title: 'Oficinas',      sub: 'Áreas comunes · accesos',        icon: 'monitor' },
    { href: '/servicios/camaras-para-comercio/bodegas/',         title: 'Bodegas',       sub: 'Perímetro · carga · IK10',       icon: 'factory' },
    { href: '/servicios/camaras-para-comercio/multi-sucursal/',  title: 'Multi-sucursal', sub: 'VMS · roles · reportes',        icon: 'eye'     },
    { href: '/contacto/',                                        title: 'Sin afectar',   sub: 'Instalación fuera de horario',   icon: 'clock'   },
  ],

  '/servicios/sistemas-cctv-industriales/': [
    { href: '/servicios/sistemas-cctv-industriales/camaras-termicas/',  title: 'Térmicas',     sub: 'Detección 24/7 · IA',           icon: 'thermal' },
    { href: '/servicios/sistemas-cctv-industriales/ptz/',               title: 'PTZ',          sub: 'Zoom 25x · Auto-tracking',      icon: 'ptz'     },
    { href: '/servicios/sistemas-cctv-industriales/lpr/',               title: 'LPR vehicular', sub: 'Placas · barrera · listas',    icon: 'lpr'     },
    { href: '/servicios/sistemas-cctv-industriales/centro-monitoreo/',  title: 'Centro VMS',   sub: '32-256 cámaras · RAID',         icon: 'monitor' },
    { href: '/contacto/',                                               title: 'NOM-001-SEDE', sub: 'Proyecto ejecutivo · ISO',      icon: 'shield'  },
  ],

  '/servicios/control-de-acceso/': [
    { href: '/servicios/control-de-acceso/videoporteros/',          title: 'Videoporteros', sub: 'IP · pantalla · audio dual',    icon: 'bell'        },
    { href: '/servicios/control-de-acceso/cerraduras-inteligentes/', title: 'Smart locks',  sub: 'App · huella · NFC',            icon: 'lock'        },
    { href: '/servicios/control-de-acceso/biometricos/',            title: 'Biométricos',   sub: 'Huella · rostro · MIFARE',     icon: 'fingerprint' },
    { href: '/servicios/control-de-acceso/acceso-vehicular/',       title: 'Acceso LPR',    sub: 'Pluma + placas · auditable',   icon: 'car'         },
    { href: '/servicios/camaras-para-hogar/',                       title: 'Integración',   sub: 'CCTV + control de acceso',     icon: 'camera'      },
  ],

  '/sobre-nosotros/': [
    { href: '/servicios/',              title: 'Catálogo',       sub: '4 líneas · residencial a gobierno', icon: 'camera'  },
    { href: '/como-trabajamos/',        title: 'Proceso',        sub: '6 pasos documentados',              icon: 'clock'   },
    { href: '/cobertura-cdmx-edomex/',  title: 'Cobertura',      sub: 'Toda la República Mexicana',        icon: 'map'     },
    { href: '/preguntas-frecuentes/',   title: 'FAQ',            sub: '31 respuestas honestas',            icon: 'help'    },
    { href: '/contacto/',               title: 'Cotización',     sub: 'WhatsApp < 15 min',                  icon: 'phone'   },
  ],

  '/como-trabajamos/': [
    { href: '/servicios/',              title: 'Servicios',      sub: 'Qué instalamos',                    icon: 'camera'  },
    { href: '/cobertura-cdmx-edomex/',  title: 'Tu zona',        sub: '32+ estados con cobertura',         icon: 'map'     },
    { href: '/sobre-nosotros/',         title: 'CAMSEG',         sub: '50+ años · empresa mexicana',       icon: 'about'   },
    { href: '/preguntas-frecuentes/',   title: 'Dudas',          sub: 'Precios · garantía · marcas',       icon: 'help'    },
    { href: '/contacto/',               title: 'Agenda visita',  sub: 'Gratis · 24-48 h',                  icon: 'phone'   },
  ],

  '/cobertura-cdmx-edomex/': [
    { href: '/servicios/camaras-para-hogar/',         title: 'Residencial',     sub: 'CDMX y Edomex sin cargo',          icon: 'home'    },
    { href: '/servicios/camaras-para-comercio/',      title: 'Comercial',       sub: 'Cobertura nacional',                icon: 'store'   },
    { href: '/servicios/sistemas-cctv-industriales/', title: 'Industrial',      sub: 'Plantas · CEDIS · gobierno',        icon: 'factory' },
    { href: '/como-trabajamos/',                      title: 'Tiempos',         sub: '24-48 h para visita técnica',       icon: 'clock'   },
    { href: '/contacto/',                             title: 'Mi zona',         sub: 'Confirma cobertura por WhatsApp',   icon: 'phone'   },
  ],

  '/preguntas-frecuentes/': [
    { href: '/servicios/',              title: 'Servicios',      sub: '4 líneas profesionales',            icon: 'camera'  },
    { href: '/como-trabajamos/',        title: 'Proceso',        sub: 'Cómo instalamos paso a paso',       icon: 'clock'   },
    { href: '/cobertura-cdmx-edomex/',  title: 'Cobertura',      sub: 'Dónde operamos',                    icon: 'map'     },
    { href: '/sobre-nosotros/',         title: 'Nosotros',       sub: '50+ años de experiencia',           icon: 'about'   },
    { href: '/contacto/',               title: 'Cotizar',        sub: 'Respuesta WhatsApp inmediata',      icon: 'phone'   },
  ],

  '/contacto/': [
    { href: '/servicios/',              title: 'Servicios',      sub: 'Catálogo profesional CAMSEG',       icon: 'camera'  },
    { href: '/como-trabajamos/',        title: 'Proceso',        sub: 'Qué pasa después de cotizar',       icon: 'clock'   },
    { href: '/cobertura-cdmx-edomex/',  title: 'Cobertura',      sub: 'Mi zona',                           icon: 'map'     },
    { href: '/preguntas-frecuentes/',   title: 'Dudas comunes',  sub: 'Antes de escribir',                 icon: 'help'    },
    { href: '/sobre-nosotros/',         title: 'CAMSEG',         sub: 'Quiénes somos',                     icon: 'about'   },
  ],
};

export function getQuickLinks(currentPath: string): QuickLink[] {
  // Match exacto
  if (QUICK_LINKS_BY_PATH[currentPath]) return QUICK_LINKS_BY_PATH[currentPath];

  // L3 (sub-servicios) — derivar del parent
  const l3Match = currentPath.match(/^\/servicios\/([^/]+)\/([^/]+)\/?$/);
  if (l3Match) {
    const parentPath = `/servicios/${l3Match[1]}/`;
    return QUICK_LINKS_BY_PATH[parentPath] ?? QUICK_LINKS_BY_PATH['/'];
  }

  // Fallback global
  return QUICK_LINKS_BY_PATH['/'];
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
