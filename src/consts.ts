/**
 * Configuración global del sitio.
 * Modifica estos valores y se reflejarán en todo el sitio.
 */
export const SITE = {
  name: 'CAMSEG',
  shortName: 'CAMSEG',
  url: 'https://camara-de-seguridad.com',
  defaultTitle: 'CAMSEG | Cámaras de Seguridad CCTV en México · 50+ Años de Experiencia',
  defaultDescription:
    'CAMSEG · empresa mexicana líder en venta e instalación de cámaras de seguridad CCTV con más de 50 años de experiencia. Cobertura nacional para hogar, comercio, industria y gobierno. Marcas Hikvision, Dahua y Axis con garantía por escrito.',
  defaultImage: '/og-default.jpg',
  locale: 'es-MX',
  lang: 'es',
  country: 'MX',
  themeColor: '#0A2540',
  contact: {
    whatsapp: '525555555555',
    whatsappDisplay: '+52 55 5555 5555',
    phone: '+52 55 5555 5555',
    email: 'contacto@camara-de-seguridad.com',
    address: 'Ciudad de México, México · Cobertura nacional',
    hours: 'Lun – Sáb · 9:00 a 19:00',
  },
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
  business: {
    legalName: 'CAMSEG',
    foundingYear: 1976,
    serviceArea: [
      'Ciudad de México',
      'Estado de México',
      'Guadalajara',
      'Monterrey',
      'Querétaro',
      'Puebla',
      'León',
      'Tijuana',
      'Mérida',
      'Cancún',
      'Veracruz',
      'México',
    ],
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/#porque-nosotros', label: 'Por qué nosotros' },
  { href: '/como-trabajamos/', label: 'Cómo trabajamos' },
  { href: '/preguntas-frecuentes/', label: 'Preguntas frecuentes' },
  { href: '/contacto/', label: 'Contacto' },
] as const;

/** Links de servicios — usados en footer y mega-menú */
export const SERVICE_LINKS = [
  { href: '/servicios/camaras-para-hogar/', label: 'Cámaras para Hogar' },
  { href: '/servicios/camaras-para-comercio/', label: 'Cámaras para Comercio' },
  { href: '/servicios/sistemas-cctv-industriales/', label: 'Sistemas Industriales' },
  { href: '/servicios/control-de-acceso/', label: 'Control de Acceso' },
] as const;

/** Secciones y páginas de interés — usados en footer y accesos rápidos */
export const SECTION_LINKS = [
  { href: '/sobre-nosotros/', label: 'Quiénes somos' },
  { href: '/servicios/', label: 'Todos los servicios' },
  { href: '/#equipos', label: 'Equipos Profesionales' },
  { href: '/como-trabajamos/', label: 'Cómo trabajamos' },
  { href: '/cobertura-cdmx-edomex/', label: 'Cobertura CDMX' },
  { href: '/preguntas-frecuentes/', label: 'Preguntas frecuentes' },
  { href: '/contacto/', label: 'Contacto' },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
