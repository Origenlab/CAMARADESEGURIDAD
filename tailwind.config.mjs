import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    // Container deshabilitado de Tailwind. Lo redefinimos abajo en global.css
    // para que sea SIEMPRE 100% del ancho del navegador, sin max-width.
    container: false,
    extend: {
      colors: {
        // ── PRIMARIO: Azul Marino (Navy) ──────────────────────────
        // Autoridad, confianza, seguridad. Color de policía, ADT, fuerzas de seguridad.
        brand: {
          50: '#eef3f9',
          100: '#d4dfeb',
          200: '#a8bfd7',
          300: '#7298bb',
          400: '#3a6ba0',
          500: '#0A2540', // BASE — navy profundo
          600: '#081e34',
          700: '#061828',
          800: '#04111d',
          900: '#030c14',
          950: '#01060a',
        },
        // ── ACENTO: Rojo Alerta ───────────────────────────────────
        // CTAs, indicador de grabación (REC), llamada de atención.
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#DC2626', // BASE — rojo alerta
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#651616',
          950: '#410e0e',
        },
        // ── BASE: Slate claro (sustituye el cream warm anterior) ──
        // Fondo principal del sitio — cool gray, no warm cream.
        cream: {
          50: '#f8fafc',
          100: '#f1f5f9', // BASE — fondo principal
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
        // ── TINTA: Texto y elementos secundarios ──────────────────
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1E293B', // BASE — texto body
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Montserrat', '"Open Sans"', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        black: '900',
      },
      boxShadow: {
        soft: '0 6px 24px -10px rgba(10, 37, 64, 0.22)',
        ring: '0 0 0 4px rgba(220, 38, 38, 0.22)',
        card: '0 14px 36px -18px rgba(10, 37, 64, 0.32)',
        cta: '0 10px 24px -10px rgba(220, 38, 38, 0.55)',
      },
      borderRadius: {
        md: '0.5rem',
        lg: '0.625rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'rec-blink': 'recBlink 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        recBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [forms, typography],
};
