# Podomed Clinical — Landing Page

Landing page profesional para **Podomed Clinical**, servicio de podología clínica a domicilio en Concepción, Chile.  
Profesional: **Gonzalo Andrés Acevedo Salvo**.

## Stack Tecnológico

| Tecnología | Versión |
|---|---|
| Vite | 6.x |
| React | 19.x |
| TypeScript | 5.8 |
| Tailwind CSS | CDN v4 |
| Framer Motion | 12.x |
| Lucide React | 0.56x |

## Instalación

```bash
npm install
npm run dev
```

El servidor de desarrollo se levanta en `http://localhost:3000`.

## Build de Producción

```bash
npm run build
npm run preview
```

## Estructura

```
├── index.html          # Punto de entrada + Tailwind + meta SEO
├── index.css           # Scrollbar personalizado
├── index.tsx           # Root React
├── App.tsx             # Layout principal + tab visibility
├── types.ts            # Interfaces TypeScript
├── components/
│   ├── SectionWrapper.tsx   # Animación fade-in en scroll (framer-motion)
│   ├── Navbar.tsx           # Navbar fija + menú mobile overlay
│   ├── Hero.tsx             # Hero section con CTA WhatsApp
│   ├── Services.tsx         # Servicios con hover effects
│   ├── Process.tsx          # Pasos del proceso
│   ├── About.tsx            # Sobre el profesional
│   ├── Testimonials.tsx     # Carrusel animado de testimonios
│   ├── FAQ.tsx              # Acordeón controlado con animación
│   ├── Contact.tsx          # Contacto + formulario → WhatsApp
│   ├── Footer.tsx           # Footer + modales legales
│   └── WhatsAppFloat.tsx    # Botón flotante que se oculta al llegar a contacto
└── Public/
    ├── Fotos/               # Imágenes del cliente (pendiente)
    └── Contexto/            # Documentación y auditoría
```

## Datos del Cliente

- **WhatsApp:** +56 9 2824 7344
- **Email:** podomedclinical@gmail.com
- **Instagram:** @Podomed_clinical
- **Facebook:** Podomed_clinical
- **Cobertura:** Concepción, San Pedro de la Paz, Chiguayante, Talcahuano

## Pendientes

- [ ] Reemplazar imágenes placeholder con fotos reales del cliente (carpeta `Public/Fotos/`)
- [ ] Confirmar testimonios con el cliente
- [ ] Agregar favicon real si el cliente provee logo
- [ ] JSON-LD schema para SEO local

## Créditos

Desarrollado por **Lucas Méndez Risopatrón** — [WhatsApp](https://wa.me/56956994930)

---

© 2025 Podomed Clinical. Todos los derechos reservados.
