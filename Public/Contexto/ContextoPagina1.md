# ContextoPagina1.md — Podomed Clinical Landing Page

> Documento completo de contexto del proyecto. Última actualización: **17 de febrero de 2026**.

---

## 1. RESUMEN DEL PROYECTO

**Nombre:** Podomed Clinical — Landing Page  
**Tipo:** Single Page Application (SPA) — Landing page profesional  
**Cliente:** Gonzalo Andrés Acevedo Salvo — Podólogo Clínico  
**Ubicación:** Concepción, Chile (servicio a domicilio)  
**Repositorio:** https://github.com/Lucas23-IECI/PaginaPodomedClinical  
**Branch:** `main`  
**Desarrollador:** Lucas Méndez Risopatrón (wa.me/56956994930)

---

## 2. STACK TECNOLÓGICO

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| Build Tool | Vite | 6.4.1 |
| Framework | React | 19.2.4 |
| Lenguaje | TypeScript | 5.8.2 |
| CSS | Tailwind CSS (CDN) | v4 |
| Animaciones | framer-motion | ^12.34.0 |
| Iconos | lucide-react | ^0.564.0 |
| Fuente | Manrope (Google Fonts) | 200-800 |

### package.json completo:
```json
{
  "name": "podomed-clinical",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.34.0",
    "lucide-react": "^0.564.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

---

## 3. CONFIGURACIÓN DE VITE

```typescript
// vite.config.ts
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  publicDir: 'Public',           // ← IMPORTANTE: carpeta es "Public" (mayúscula)
  server: { port: 3000, host: '0.0.0.0' },
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') }
  }
});
```

**Nota crítica:** La carpeta de assets estáticos se llama `Public/` (con P mayúscula). Vite por defecto busca `public/` (minúscula), por eso se configura explícitamente `publicDir: 'Public'`.

---

## 4. PALETA DE COLORES (Tailwind Config en index.html)

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#1f3d89` | Azul principal — headings, nav, botones |
| `primary-dark` | `#162c63` | Hover en primario, gradientes |
| `secondary` | `#2BB673` | Verde — CTAs, badges, acentos |
| `background-light` | `#FFFFFF` | Fondo principal |
| `background-alt` | `#F5F7FA` | Secciones alternas |
| `background-dark` | `#13161f` | Footer |

---

## 5. ESTRUCTURA DE ARCHIVOS

```
PaginaPodomedClinical/
├── index.html              # HTML principal con Tailwind CDN config
├── index.tsx               # Entry point React
├── index.css               # Custom scrollbar styles
├── App.tsx                 # Componente raíz — orquesta todas las secciones
├── types.ts                # Interfaces TypeScript (NavItem, Service, Testimonial, FaqItem, Step)
├── vite.config.ts          # Config Vite (publicDir: 'Public')
├── tsconfig.json           # Config TypeScript
├── package.json            # Dependencias
├── metadata.json           # Metadata del proyecto
├── README.md               # Documentación del proyecto
├── components/
│   ├── SectionWrapper.tsx  # HOC de animación (framer-motion fade-in + slide-up)
│   ├── Navbar.tsx          # Barra de navegación sticky
│   ├── Hero.tsx            # Sección hero con LogoOficial + CTA
│   ├── Services.tsx        # Grid de 5 servicios podológicos
│   ├── Process.tsx         # 4 pasos del flujo de atención
│   ├── About.tsx           # Perfil del profesional con FotoPerfil.png
│   ├── Testimonials.tsx    # Carrusel animado de testimonios
│   ├── FAQ.tsx             # Accordion de 5 preguntas frecuentes
│   ├── Contact.tsx         # Info contacto + form → WhatsApp
│   ├── Footer.tsx          # Footer con modales legales (Privacidad/Términos)
│   └── WhatsAppFloat.tsx   # Botones flotantes Instagram/Facebook/WhatsApp
├── Public/
│   ├── Contexto/           # Este directorio de documentación
│   └── Fotos/
│       ├── FotoPerfil.png      # Foto de perfil del profesional (usada en About)
│       ├── FotoCliente1.jpg    # Foto auxiliar del cliente
│       ├── FotoCliente2.jpg    # Foto principal del Hero
│       ├── FotoCliente3.png    # Foto adicional del cliente
│       ├── LogoOficial.png     # Logo completo (usada en Hero)
│       ├── LogoSvgOficial.png  # Logo SVG (usada en Navbar, Footer, favicon)
│       └── LogoSvgPrueba.png   # Logo con slogan (no usada actualmente)
├── ArchivosCliente/        # Archivos originales del cliente (DOCX, XLSX, etc.)
├── EjemplosLandingPage/    # Landing page de referencia (Jessica Belmar)
│   └── pagina-jessica-belmar-podologia/
└── dist/                   # Build de producción (en .gitignore)
```

---

## 6. DATOS DEL CLIENTE (REALES)

| Campo | Valor |
|-------|-------|
| **Nombre completo** | Gonzalo Andrés Acevedo Salvo |
| **Profesión** | Podólogo Clínico |
| **Institución** | Instituto Profesional AIEP |
| **Registro** | Superintendencia de Salud — Prestadores Individuales |
| **WhatsApp** | +56 9 2824 7344 → `https://wa.me/56928247344` |
| **Email** | podomedclinical@gmail.com |
| **Instagram** | @Podomed_clinical → `https://www.instagram.com/Podomed_clinical` |
| **Facebook** | podomed.clinical → `https://www.facebook.com/podomed.clinical` |
| **Ubicación** | Concepción, Chile |
| **Zonas de cobertura** | Concepción, San Pedro de la Paz, Chiguayante, Talcahuano |
| **Modalidad** | 100% a domicilio |
| **Frase destacada** | "El cuidado de los pies es el primer paso hacia el éxito" |

---

## 7. COMPONENTE POR COMPONENTE — ESTADO ACTUAL

### 7.1 `SectionWrapper.tsx`
- HOC reutilizable con framer-motion
- Animación: fade-in (`opacity: 0→1`) + slide-up (`y: 50→0`)
- Props: `className`, `id`, `delay` (stagger), `children`
- Trigger: `useInView` con `once: true`, margin `-100px`
- Duración: 0.8s, ease "easeOut"

### 7.2 `Navbar.tsx`
- **Logo**: `LogoSvgOficial.png` como `<img>` + texto "Podomed Clinical"
- **Nav items**: Inicio, Servicios, Cómo Trabajamos, Nosotros, FAQ, Contacto
- **Comportamiento**: Transparente arriba → bg-white/95 + backdrop-blur + shadow al scroll (>20px)
- **Mobile**: Overlay fullscreen con body scroll lock, botón X, links con flecha hover
- **CTA desktop**: "Agendar Cita" verde redondeado con `Calendar` icon
- **Smooth scroll**: Offset de 100px para no tapar con el header
- **Iconos**: Menu, X, Calendar, ArrowRight de lucide-react

### 7.3 `Hero.tsx`
- **Logo oficial**: `/Fotos/LogoOficial.png` — `h-16 w-auto`, centrado mobile / left desktop
- **Badge**: "Servicio a Domicilio" con ping animation verde
- **H1**: "Atención Podológica Profesional en Concepción" (secondary color en Concepción)
- **Párrafo**: `mt-2` de separación del título
- **CTAs**: "Contactar por WhatsApp" (verde) + "Ver Servicios" (gris, smooth scroll)
- **Trust badges**: Certificado, Domicilio, Estéril (con icons ShieldCheck, Home, Sparkles)
- **Imagen**: `/Fotos/FotoCliente2.jpg` — `loading="eager"`, hover scale 105%, gradient overlay
- **Floating card**: "Servicio Integral — Experiencia, vocación y empatía"
- **WhatsApp link**: `https://wa.me/56928247344`

### 7.4 `Services.tsx`
- **5 servicios**: Evaluación, Uñas Encarnadas, Micosis, Preventiva, Domiciliaria (marcada POPULAR)
- **Grid**: 1→2→3→5 columnas responsive
- **Animación**: SectionWrapper con delays staggered (0.1 cada uno)
- **Hover**: Translate-y-2 arriba, shadow-xl, barra azul top scale-x
- **Badges por debajo**: "Servicio 100% a domicilio", "Horarios a convenir", "Protocolos sanitarios estrictos"
- **Iconos**: ClipboardList, Activity, Sparkles, HeartPulse, Home

### 7.5 `Process.tsx`
- **4 pasos**: Contacto, Coordinación, Atención, Seguimiento
- **Layout**: Grid 1→2→4 columnas con línea conectora horizontal (desktop)
- **Icono + badge numérico**: Círculo con icono + bolita verde con número
- **Animations**: SectionWrapper stagger 0.15s
- **Iconos**: MessageSquare, CalendarDays, Stethoscope, ClipboardCheck

### 7.6 `About.tsx`
- **Foto**: `/Fotos/FotoPerfil.png` — circular (rounded-full), border blanca, shadow, hover scale 110%
- **Nombre**: Gonzalo Andrés Acevedo Salvo
- **Credenciales**: Titulado AIEP, Superintendencia de Salud, Atención Humanizada
- **Blockquote**: "El cuidado de los pies es el primer paso hacia el éxito" — fondo primary/5, borde izquierdo primary
- **Stats**: 100% Vocación, Integral Servicio, Exp. Años de Experiencia
- **Iconos**: GraduationCap, BadgeCheck, Heart, Quote

### 7.7 `Testimonials.tsx`
- **3 testimonios**: María Paz, Jorge Rojas, Carmen Muñoz
- **⚠️ PENDIENTE**: Confirmar con el cliente si son reales
- **Carrusel**: framer-motion AnimatePresence, auto-play cada 8 segundos
- **Navegación**: Flechas izquierda/derecha + dots
- **Visual**: 5 estrellas amarillas, comillas enormes, iniciales en círculo, fondo primary
- **Iconos**: Star, ChevronLeft, ChevronRight, Quote

### 7.8 `FAQ.tsx`
- **5 preguntas**: Comunas, niños/adultos mayores, preparación visita, boleta reembolso, agendar hora
- **Accordion**: Estado controlado por `openIndex`, framer-motion collapse/expand
- **Visual**: Ring primary/20 cuando abierto, ChevronDown rotación 180°
- **SectionWrapper**: Stagger 0.1s por pregunta

### 7.9 `Contact.tsx`
- **Info de contacto**:
  - Horarios: flexible, a convenir
  - Teléfono: +56 9 2824 7344
  - WhatsApp: wa.me/56928247344
  - Email: podomedclinical@gmail.com
  - Instagram: @Podomed_clinical
- **Formulario**: Nombre + Teléfono + Mensaje → abre WhatsApp con texto pre-armado
- **Zonas de cobertura**: Card gradiente primary→primary-dark con 4 comunas
- **CTA grande**: "Agendar Cita Ahora" azul primary
- **Iconos**: MapPin, Phone, Mail, Clock, Calendar, ArrowRight, MessageCircle, Instagram

### 7.10 `Footer.tsx`
- **Logo**: `LogoSvgOficial.png` con `brightness-0 invert` para fondo oscuro
- **Social icons**: Facebook (podomed.clinical), Instagram (Podomed_clinical), WhatsApp
- **Quick links**: Inicio, Servicios, Proceso, Testimonios, Contacto
- **Info contacto**: Teléfono, email, ubicación, horarios, nombre profesional
- **Credits**: "Hecho con ❤️ por Lucas Méndez Risopatrón" → wa.me/56956994930
- **Copyright**: Año dinámico con `new Date().getFullYear()`
- **Modales legales**: Privacidad (Ley 19.628, Ley 20.584, ARCO) + Términos (cancelación 24h, protocolo domicilio, consentimiento, pagos)
- **Visual**: `rounded-t-[3rem]`, fondo `background-dark`, decorative blur
- **Iconos**: Facebook, Instagram, MessageCircle, Heart, X, Shield, FileText

### 7.11 `WhatsAppFloat.tsx`
- **3 botones flotantes** (bottom-right):
  1. **Instagram**: Gradiente naranja→magenta, icon Instagram
  2. **Facebook**: Azul #1877F2, icon Facebook fill
  3. **WhatsApp**: Verde #25D366, SVG custom del logo
- **Comportamiento**: Se oculta al acercarse a la sección `#contacto` (50px buffer)
- **Tooltips**: Hover muestra label a la izquierda del botón
- **Animación**: translate-y-0↔translate-y-20 + opacity

---

## 8. ARCHIVOS CLAVE NO-COMPONENTE

### 8.1 `index.html`
- `<html lang="es" class="scroll-smooth scroll-pt-28">`
- Meta description SEO optimizada
- Open Graph tags (og:title, og:description, og:type, og:locale, og:image)
- Favicon: `/Fotos/LogoSvgOficial.png`
- Google Fonts: Manrope preconnect + stylesheet
- Tailwind CDN con `tailwind.config` inline (colores custom + Manrope)
- Entry point: `<script type="module" src="/index.tsx">`

### 8.2 `types.ts`
```typescript
export interface NavItem { label: string; href: string; }
export interface Service { icon: string; title: string; description: string; popular?: boolean; }
export interface Testimonial { text: string; author: string; type: string; initials: string; }
export interface FaqItem { question: string; answer: string; }
export interface Step { number: number; icon: string; title: string; description: string; }
```

### 8.3 `App.tsx`
- Orquesta todos los componentes en orden: Navbar → Hero → Services → Process → About → Testimonials → FAQ → Contact → Footer + WhatsAppFloat
- **Easter egg**: Cambia título del tab a "¡Te extrañamos! 😢" cuando el usuario sale de la pestaña

### 8.4 `index.css`
- Custom scrollbar styles (thin, primario)

---

## 9. ASSETS — USO DE CADA IMAGEN

| Archivo | Dónde se usa | Cómo |
|---------|-------------|------|
| `LogoOficial.png` | Hero.tsx | Logo grande arriba del título, `h-16 w-auto` |
| `LogoSvgOficial.png` | Navbar.tsx, Footer.tsx, index.html (favicon) | Navbar: `h-10 md:h-12`, Footer: `h-11 brightness-0 invert` |
| `LogoSvgPrueba.png` | ❌ No usada | Logo con slogan, disponible para uso futuro |
| `FotoPerfil.png` | About.tsx | Foto circular del profesional, `object-cover object-center` |
| `FotoCliente1.jpg` | ❌ Reemplazada por FotoPerfil.png | Antes era la foto de About |
| `FotoCliente2.jpg` | Hero.tsx | Imagen principal del hero, `loading="eager"` |
| `FotoCliente3.png` | ❌ No usada actualmente | Disponible para uso futuro |

---

## 10. URLs Y LINKS IMPORTANTES

| Destino | URL |
|---------|-----|
| WhatsApp negocio | `https://wa.me/56928247344` |
| WhatsApp desarrollador | `https://wa.me/56956994930` |
| Instagram | `https://www.instagram.com/Podomed_clinical` |
| Facebook | `https://www.facebook.com/podomed.clinical` |
| Email | `mailto:podomedclinical@gmail.com` |
| Teléfono | `tel:+56928247344` |
| Repositorio | `https://github.com/Lucas23-IECI/PaginaPodomedClinical` |

---

## 11. HISTORIAL DE CAMBIOS (Git Log)

```
e1a929f feat: agregar FotoPerfil.png y FotoCliente3.png
6914843 feat: cambiar foto perfil a FotoPerfil.png y agregar LogoOficial.png en Hero
5176c20 chore: untrack .gitignore y jpg suelto
49c1244 fix: facebook URL, instagram en flotante, spacing hero, favicon real
19f9877 chore: remove stray files from tracking
c5aaeea feat: assets locales, frase destacada, logos reales y fix 1px Hero
11f2ab1 chore: remove .gitignore from repo
75ed95c feat: Podomed Clinical landing page - production refactor
```

### Resumen cronológico:

1. **`75ed95c`** — Refactor completo de producción:
   - Instalación framer-motion + lucide-react
   - Creación de SectionWrapper.tsx, types.ts, index.css
   - Rewrite total de los 11 componentes
   - Eliminación de Material Symbols CDN e import maps
   - Limpieza de vite.config (removida GEMINI_API_KEY)
   - README profesional

2. **`11f2ab1`** — Limpieza: remove .gitignore del tracking

3. **`c5aaeea`** — Assets locales:
   - Fotos reales del cliente (FotoCliente1, FotoCliente2)
   - Logos locales (LogoSvgOficial.png) reemplazando URLs externas
   - Frase blockquote en About
   - Fix spacing Hero (1px)
   - `publicDir: 'Public'` en vite.config

4. **`19f9877`** — Limpieza de archivos sueltos del tracking

5. **`49c1244`** — Fixes por feedback visual (screenshot):
   - Facebook URL corregida: `podomed.clinical` (no `Podomed_clinical`)
   - Botón Instagram agregado al flotante
   - Spacing hero: `mt-[1px]` → `mt-2`
   - Favicon: emoji → `/Fotos/LogoSvgOficial.png`

6. **`5176c20`** — Limpieza: untrack .gitignore y jpg suelto (Partido_TIGRE)

7. **`6914843`** — Cambios de assets:
   - Foto de About: `FotoCliente1.jpg` → `FotoPerfil.png`
   - Logo `LogoOficial.png` agregado en Hero arriba del badge

8. **`e1a929f`** — Subida de fotos faltantes al repo: `FotoPerfil.png`, `FotoCliente3.png`

---

## 12. FASES DE DESARROLLO COMPLETADAS

### ✅ Fase 0 — Diagnóstico
- Auditoría completa del proyecto original vs ejemplo Jessica Belmar
- Extracción de datos reales del cliente desde DOCX/XLSX (Python zipfile+XML)
- Creación de ContextoInicial.md

### ✅ Fase 1 — Fixes Críticos
- Datos reales del cliente en todos los componentes
- Links WhatsApp funcionales
- Corrección `class` → `className`
- Créditos del desarrollador

### ✅ Fase 2 — Calidad UX
- framer-motion en todas las secciones (SectionWrapper pattern)
- lucide-react reemplazando Material Symbols
- Scroll suave con offset
- Mobile overlay con body scroll lock
- Carrusel de testimonios animado
- Accordion FAQ animado

### ✅ Fase 3 — Assets Locales
- Todas las imágenes sirven desde Public/Fotos/
- Logos reales del negocio
- Fotos del cliente real
- Favicon con logo real

### ✅ Fase 4 — SEO
- Meta description
- Open Graph tags
- `<html lang="es">`
- `scroll-smooth` + `scroll-pt-28`

### ✅ Fase 5 — Cleanup
- vite.config limpio
- README profesional
- Git push a GitHub

---

## 13. PENDIENTES (TODO)

| # | Tarea | Prioridad | Estado |
|---|-------|-----------|--------|
| 1 | Confirmar testimonios reales con el cliente | Alta | ⏳ Pendiente |
| 2 | `og:image` apunta a `/Public/Fotos/og-image.jpg` (no existe) | Media | ⏳ Pendiente |
| 3 | JSON-LD schema para SEO local (LocalBusiness) | Media | ⏳ Pendiente |
| 4 | `LogoSvgPrueba.png` (con slogan) no usada en ningún lado | Baja | ⏳ Evaluar |
| 5 | `FotoCliente3.png` no usada en ningún componente | Baja | ⏳ Evaluar |
| 6 | Verificar Contact.tsx no tenga URL Facebook antigua | Media | ⏳ Verificar (usa Instagram, no Facebook directo) |
| 7 | Deploy a hosting (Vercel, Netlify, etc.) | Alta | ⏳ Pendiente |
| 8 | Evitar `git add -A` que sube .gitignore y archivos sueltos | Baja | ⏳ Usar `git add` selectivo |

---

## 14. REFERENCIA — LANDING PAGE DE EJEMPLO

Se usó como referencia la landing page de **Jessica Belmar — Podología** ubicada en:
```
EjemplosLandingPage/pagina-jessica-belmar-podologia/
```
Componentes de referencia: Hero, Services, Process, About, Testimonials, FAQ, Contact, Footer, FloatingWhatsApp, HomeVisit, SectionWrapper.

La estructura y patrón de diseño se adaptó manteniendo la identidad propia de Podomed Clinical (colores, datos, fotos, textos únicos).

---

## 15. BUILD INFO

- **Último build exitoso**: 2118 modules, 388.85 KB JS (gzip: 119.44 KB), 0.19 KB CSS
- **Tiempo de build**: ~3.3s
- **0 errores, 0 warnings** (excepto LF→CRLF en Windows)
- **Output**: `dist/` (en .gitignore, no se sube al repo)

---

## 16. NOTAS TÉCNICAS IMPORTANTES

1. **Tailwind es CDN**: Se carga por `<script>` en index.html, no por PostCSS. El config está inline en el HTML.
2. **publicDir**: La carpeta es `Public/` (P mayúscula). Vite necesita `publicDir: 'Public'` explícito.
3. **Rutas de imágenes**: Todas empiezan con `/Fotos/...` (ya que `Public/` es el publicDir de Vite).
4. **Footer logo invertido**: Usa `brightness-0 invert` para convertir el logo oscuro a blanco sobre fondo dark.
5. **WhatsApp float**: Se oculta automáticamente cerca de la sección contacto para no duplicar CTAs.
6. **Easter egg**: Al salir de la pestaña, el título cambia a "¡Te extrañamos! 😢".
7. **.gitignore**: Existe localmente pero NO se trackea en git (fue removido con `git rm --cached`).

---

*Documento generado el 17/02/2026 — Proyecto Podomed Clinical Landing Page*
