/**
 * Configuración global del sitio.
 * Modifica estos valores y se reflejarán en todo el sitio.
 */
export const SITE = {
  name: 'Cámara de Seguridad',
  shortName: 'CámaraDeSeguridad',
  url: 'https://camara-de-seguridad.com',
  defaultTitle: 'Cámara de Seguridad | Venta, Instalación y Monitoreo CCTV en México',
  defaultDescription:
    'Especialistas en cámaras de seguridad CCTV en México. Venta, instalación profesional, configuración remota y monitoreo 24/7 para hogar, comercio e industria. Asesoría gratuita.',
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
    address: 'Ciudad de México, México',
    hours: 'Lun – Sáb · 9:00 a 19:00',
  },
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
  business: {
    legalName: 'Cámara de Seguridad',
    foundingYear: 2020,
    serviceArea: ['Ciudad de México', 'Estado de México', 'Guadalajara', 'Monterrey', 'México'],
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/#porque-nosotros', label: 'Por qué nosotros' },
  { href: '/proceso/', label: 'Cómo trabajamos' },
  { href: '/faq/', label: 'Preguntas frecuentes' },
  { href: '/contacto/', label: 'Contacto' },
] as const;

/** Links de servicios — usados en footer y mega-menú */
export const SERVICE_LINKS = [
  { href: '/servicios/hogar/', label: 'Cámaras para Hogar' },
  { href: '/servicios/comercio/', label: 'Cámaras para Comercio' },
  { href: '/servicios/industrial/', label: 'Sistemas Industriales' },
  { href: '/servicios/control-acceso/', label: 'Control de Acceso' },
] as const;

/** Secciones y páginas de interés — usados en footer y accesos rápidos */
export const SECTION_LINKS = [
  { href: '/nosotros/', label: 'Quiénes somos' },
  { href: '/servicios/', label: 'Todos los servicios' },
  { href: '/#equipos', label: 'Equipos Profesionales' },
  { href: '/proceso/', label: 'Cómo trabajamos' },
  { href: '/cobertura/', label: 'Cobertura CDMX' },
  { href: '/faq/', label: 'Preguntas frecuentes' },
  { href: '/contacto/', label: 'Contacto' },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
