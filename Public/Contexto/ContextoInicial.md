# ContextoInicial.md — Podomed Clinical

> **Fecha:** 16 de Febrero, 2026  
> **Autor de la Revisión:** Asistente de Desarrollo  
> **Proyecto:** Podomed Clinical — Landing Page para Gonzalo Andrés Acevedo Salvo (Podólogo Clínico)  
> **Ejemplo de Referencia (Estándar de Calidad):** `EjemplosLandingPage/pagina-jessica-belmar-podologia`

---

## 📋 ÍNDICE

1. [Resumen General del Proyecto](#1-resumen-general-del-proyecto)
2. [Estructura de Archivos](#2-estructura-de-archivos)
3. [Stack Tecnológico](#3-stack-tecnológico)
4. [Análisis Componente por Componente](#4-análisis-componente-por-componente)
5. [Falencias Críticas vs. Ejemplo de Referencia](#5-falencias-críticas-vs-ejemplo-de-referencia)
6. [Falencias de Calidad y UX](#6-falencias-de-calidad-y-ux)
7. [Falencias Técnicas / Bugs](#7-falencias-técnicas--bugs)
8. [Falencias de SEO y Accesibilidad](#8-falencias-de-seo-y-accesibilidad)
9. [Falencias de Contenido / Datos Placeholder](#9-falencias-de-contenido--datos-placeholder)
10. [Comparativa Directa: Podomed vs. Jessica Belmar (Ejemplo)](#10-comparativa-directa-podomed-vs-jessica-belmar-ejemplo)
11. [Archivos del Cliente (ArchivosCliente)](#11-archivos-del-cliente-archivoscliente)
12. [Plan de Acción Recomendado (Priorizado)](#12-plan-de-acción-recomendado-priorizado)

---

## 1. Resumen General del Proyecto

**Podomed Clinical** es una landing page para **Gonzalo Andrés Acevedo Salvo**, podólogo clínico que ofrece servicio a domicilio en la zona de Concepción, Chile. La página fue generada mediante **Google AI Studio** (se nota por el README que apunta a `ai.studio/apps` y la dependencia de `GEMINI_API_KEY` en la configuración).

El proyecto actual es **funcional a nivel básico**, pero está significativamente por debajo del estándar de calidad establecido por el ejemplo de referencia (Jessica Belmar). Se detectan múltiples falencias en:
- Animaciones y transiciones
- Comportamiento del flotante de WhatsApp
- Créditos del desarrollador
- Calidad de imágenes (URLs externas de Google AI)
- Interactividad y polish general
- Falta de datos reales del cliente
- Errores de código (JSX vs HTML)
- Ausencia de funcionalidades legales

---

## 2. Estructura de Archivos

### Proyecto Actual (Podomed Clinical)
```
PaginaPodomedClinical/
├── .env.local                  # GEMINI_API_KEY (placeholder)
├── .gitignore
├── App.tsx                     # Componente raíz
├── index.html                  # HTML base con Tailwind CDN
├── index.tsx                   # Entry point React
├── metadata.json               # Metadata del proyecto
├── package.json                # Dependencias (React 19, Vite)
├── README.md                   # README de AI Studio (NO personalizado)
├── tsconfig.json               # Config TypeScript
├── vite.config.ts              # Config Vite
├── ArchivosCliente/
│   ├── briefing-podomed-clinical.docx
│   └── briefing-podomed-clinical.xlsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Process.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   └── WhatsAppFloat.tsx
├── EjemplosLandingPage/        # Ejemplo de referencia
│   └── pagina-jessica-belmar-podologia/
├── Public/
│   ├── Contexto/               # (vacío → aquí va este archivo)
│   └── Fotos/                  # (vacío → faltan fotos del cliente)
```

### Diferencias Estructurales con el Ejemplo
| Aspecto | Ejemplo (Jessica Belmar) | Podomed Clinical |
|---------|------------------------|------------------|
| Archivo `types.ts` | ✅ Tiene (interfaces tipadas) | ❌ No existe |
| `SectionWrapper.tsx` | ✅ Componente de animación | ❌ No existe |
| `framer-motion` | ✅ Animaciones profesionales | ❌ Sin animaciones |
| `lucide-react` | ✅ Iconos SVG de calidad | ❌ Usa Material Symbols (Google Fonts CDN) |
| Fotos locales | ✅ `/public/Fotos/` con fotos reales | ❌ URLs externas de Google (lh3.googleusercontent.com) |
| `scroll-smooth` en HTML | ✅ `class="scroll-smooth scroll-pt-28"` | ❌ Solo en `<body>` como clase |
| Custom scrollbar | ✅ Personalizada con color primario | ❌ No tiene |
| CSS personalizado (`index.css`) | ✅ Referenciado | ❌ No existe el archivo |

---

## 3. Stack Tecnológico

| Tecnología | Podomed | Ejemplo |
|-----------|---------|---------|
| React | 19.2.4 | 19.2.3 |
| Vite | 6.2.0 | 6.2.0 |
| TypeScript | ~5.8.2 | ~5.8.2 |
| Tailwind CSS | CDN (script) | CDN (script) |
| Framer Motion | ❌ **NO** | ✅ ^12.29.0 |
| Lucide React | ❌ **NO** | ✅ ^0.563.0 |
| Iconos | Material Symbols (CDN) | Lucide (bundle local) |
| Fuente | Manrope | Inter |

**Observación clave:** La falta de `framer-motion` y `lucide-react` es el principal motivo de que Podomed se sienta "plano" y sin vida comparado con el ejemplo.

---

## 4. Análisis Componente por Componente

### 4.1 `App.tsx`

**Podomed:**
```tsx
const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>...</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
```

**Ejemplo:**
```tsx
const App: React.FC = () => {
  useEffect(() => {
    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "¡Te extrañamos! 😢";
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);
  // ...
};
```

**Falencias:**
- ❌ **Falta el "visibility change"**: En el ejemplo, cuando el usuario cambia de pestaña, el título cambia a "¡Te extrañamos! 😢". Esto es un detalle de engagement que falta completamente.
- ❌ Clase del contenedor es `relative` en Podomed vs `min-h-screen relative` en el ejemplo.

---

### 4.2 `Navbar.tsx`

**Falencias respecto al ejemplo:**
- ❌ **Sin efecto de scroll**: El ejemplo detecta el scroll (`isScrolled`) y cambia de `bg-transparent` a `bg-white/95 backdrop-blur-md shadow-md`. En Podomed el navbar es **siempre** `bg-white/95 backdrop-blur-md`, nunca transparente.
- ❌ **Menú móvil inferior**: El menú móvil de Podomed es un dropdown simple que aparece debajo del navbar. En el ejemplo es un **overlay fullscreen** con animación de slide desde la derecha, botón de cerrar (X), y links con arrows interactivos.
- ❌ **Sin bloqueo de scroll del body**: Cuando el menú móvil se abre en el ejemplo, `document.body.style.overflow = 'hidden'` previene el scroll. Podomed no hace esto.
- ❌ **Sin scroll suave programático**: El ejemplo tiene `handleNavClick()` con cálculo de `headerOffset` y `setTimeout` para scroll suave. Podomed solo usa `href="#sección"` nativos.
- ❌ **Sin underline hover en links**: El ejemplo tiene un `<span>` con efecto underline animado bajo cada link de navegación.
- ❌ **CTA es "Contactar WhatsApp" genérico**: El ejemplo tiene "Agendar Cita" con icono de calendario, más profesional.
- ❌ **El link de WhatsApp es `https://wa.me/`** (vacío, sin número). No funciona.
- ❌ **Falta `target="_blank"` y `rel="noopener noreferrer"`** en el link de WhatsApp del navbar.

---

### 4.3 `Hero.tsx`

**Falencias:**
- ❌ **Sin animaciones de entrada**: Todo el contenido del Hero aparece de golpe. En el ejemplo usa `SectionWrapper` (framer-motion) para fade-in + slide-up.
- ❌ **Imagen de Hero es una URL externa de Google**: `lh3.googleusercontent.com/aida-public/...` — Esta URL puede caducar, no es profesional y no se puede cachear/optimizar.
- ❌ **Sin hover en imagen**: El ejemplo tiene un `group-hover:scale-105` con overlay degradado en la imagen.
- ❌ **El badge "Servicio a Domicilio" es estático**: En el ejemplo hay un ping animado (doble circulo pulsante), más vistoso.
- ❌ **Botón WhatsApp con href vacío**: `href="https://wa.me/"` — SIN número de teléfono.
- ❌ **Sin `target="_blank"` en CTAs externos**.
- ❌ **Floating card estática**: La tarjeta "Excelente Servicio / 500 pacientes" está bien pero no tiene animación de entrada.

---

### 4.4 `Services.tsx`

**Aspectos positivos:**
- ✅ Buena estructura de cards con interface tipada (`ServiceCardProps`).
- ✅ Badge "POPULAR" en la card domiciliaria.
- ✅ Hover effects en iconos.
- ✅ Trust badges al fondo.

**Falencias:**
- ❌ **Sin animaciones de entrada escalonadas**: En el ejemplo cada card aparece con un `delay` progresivo.
- ❌ **Sin la barra de color superior en hover**: El ejemplo tiene `<div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100">`.
- ❌ **Sin hover `-translate-y-2`**: Las cards no se elevan al hacer hover.
- ❌ **Grid de 5 columnas (xl:grid-cols-5)**: Puede verse muy apretado en pantallas grandes; el ejemplo usa 4 columnas.
- ❌ **Sin subtítulo/etiqueta "Tratamientos" encima del título**: El ejemplo usa etiquetas uppercase como categorías.

---

### 4.5 `Process.tsx`

**Aspectos positivos:**
- ✅ Componente único que el ejemplo no tiene (buen diferenciador).
- ✅ Buena estructura visual con pasos numerados.

**Falencias:**
- ❌ **Sin animaciones**.
- ❌ **La línea conectora es muy básica**: Un simple `h-0.5 bg-slate-100`. Podría ser animada o punteada.
- ❌ **Sin id** para navegación: La sección no tiene `id` para poder enlazarla desde el navbar.

---

### 4.6 `About.tsx`

⚠️ **BUG CRÍTICO DETECTADO:**
```tsx
<h4 class="font-bold text-slate-900">Titulado en Podología Clínica</h4>
```
Se usa **`class`** en lugar de **`className`**. Esto es HTML nativo, no JSX válido. React mostrará un warning en consola y el atributo no se aplicará correctamente.

**Otras falencias:**
- ❌ **Imagen es URL externa de Google**: `lh3.googleusercontent.com/aida-public/...`.
- ❌ **Sin animaciones de entrada**.
- ❌ **Sin estadísticas numéricas**: El ejemplo tiene "10+ Años", "500+ Pacientes", "100% Compromiso" con efecto hover.
- ❌ **Sin cita personal/eslogan del profesional**: El ejemplo tiene `"Amo educar, sanar y cuidar los pies."` como statement de marca. Muy poderoso para conectar con el paciente.
- ❌ **La imagen circular es decorativa pero no tiene hover**: En el ejemplo la foto tiene `group-hover:scale-110`.
- ❌ **El nombre del profesional no está destacado tipográficamente** como en el ejemplo (`text-xl`, `strong`).

---

### 4.7 `Testimonials.tsx`

**Falencias importantes:**
- ❌ **Grid estático de 3 cards**: En el ejemplo se implementa un **carrusel animado** con `framer-motion` (`AnimatePresence`), flechas de navegación, auto-play de 8 segundos, e indicadores de paginación (dots).
- ❌ **Sin transiciones entre testimonios**: Todo es visible a la vez, menos impactante.
- ❌ **Los testimonios podrían no ser reales**: Parecen genéricos/placeholders.
- ❌ **Los fondos de las cards son `bg-slate-50`**: Funcionales pero poco llamativos. El ejemplo pone los testimonios sobre fondo `bg-primary` (turquesa) con cards blancas, mucho más visual.

---

### 4.8 `FAQ.tsx`

**Aspectos positivos:**
- ✅ Usa `<details>` nativo — funcional sin JS.
- ✅ Animación de rotación del chevron nativa.

**Falencias:**
- ❌ **Sin animaciones de contenido**: El ejemplo usa `framer-motion` con `AnimatePresence` para animar la apertura/cierre con transiciones suaves de height y opacity.
- ❌ **Solo uno abierto a la vez** no está implementado: Con `<details>` nativo, múltiples FAQ pueden estar abiertas. En el ejemplo, solo una FAQ está abierta (accordion pattern con state).
- ❌ **Sin efecto visual en la pregunta activa**: El ejemplo muestra un `ring-1 ring-primary/20` y `shadow-lg` en la pregunta abierta.
- ❌ **Sin wave dividers entre secciones**.

---

### 4.9 `Contact.tsx`

**Falencias:**
- ❌ **El formulario no funciona**: El `<button type="button">` no envía nada. No hay `onSubmit`, no hay integración con ningún servicio (ni mailto, ni API, ni WhatsApp redirect).
- ❌ **Teléfono placeholder**: `+56 9 1234 5678` — no es el número real del cliente.
- ❌ **Email placeholder**: `contacto@podomed.cl` — probablemente no existe.
- ❌ **Sin zonas de cobertura detalladas**: El ejemplo tiene un card visual con las comunas de atención en grid.
- ❌ **Sin horarios de atención**: El ejemplo los muestra prominentemente.
- ❌ **Sin link clickeable en el teléfono**: No es un `<a href="tel:...">`.
- ❌ **Sin link clickeable en el email**: No es un `<a href="mailto:...">`.
- ❌ **Sin animaciones de entrada**.

---

### 4.10 `Footer.tsx`

**Falencias CRÍTICAS:**
- ❌ **FALTA "Hecho con ❤️ por Lucas Méndez"**: El ejemplo tiene explícitamente:
  ```tsx
  <p className="text-sm text-gray-400 flex items-center gap-1.5">
    Hecho con <Heart size={14} className="fill-red-500 text-red-500 animate-pulse" /> 
    por <a href="https://wa.me/56956994930">Lucas Méndez</a>
  </p>
  ```
  **Esto es obligatorio** y no está en el Footer de Podomed. Solo dice `© 2024 Podomed Clinical. Todos los derechos reservados.`

- ❌ **Año desactualizado**: Dice `© 2024`, debería ser `© 2026`.
- ❌ **Sin rounded-top**: El ejemplo tiene `rounded-t-[3rem]` en el footer para un look más moderno.
- ❌ **Sin modales de Privacidad y Términos**: El ejemplo tiene un sistema completo de modales para Política de Privacidad (con leyes chilenas) y Términos y Condiciones. Podomed no tiene nada de esto.
- ❌ **Sin newsletter/suscripción**: El ejemplo tiene un input de email para boletín.
- ❌ **Sin decorative background elements**.
- ❌ **Links de redes sociales van a `#`**: No apuntan a ningún perfil real.
- ❌ **Teléfono y email en el footer son placeholders**.
- ❌ **El horario "Lun - Sab: 09:00 - 19:00"** podría no ser correcto según el cliente.

---

### 4.11 `WhatsAppFloat.tsx`

**Falencias CRÍTICAS:**
- ❌ **NO DESAPARECE ANTES DEL FOOTER**: En el ejemplo, `FloatingWhatsApp.tsx` tiene un `useEffect` que escucha el scroll y oculta el flotante cuando la sección de contacto entra en viewport:
  ```tsx
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('contacto');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight - 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  ```
  En Podomed, el botón flotante **siempre está visible**, incluso encima del footer, lo cual es feo e interfiere con la UI.

- ❌ **Usa Material Symbols en lugar de SVG de WhatsApp**: El ejemplo usa el SVG real de WhatsApp. Podomed usa `<span className="material-symbols-outlined">chat</span>` que es un ícono genérico de chat, no el ícono reconocible de WhatsApp.
- ❌ **Href vacío**: `href="https://wa.me/"` — sin número.
- ❌ **Sin botón de Facebook**: El ejemplo añade un botón flotante de Facebook encima del de WhatsApp.
- ❌ **Sin `target="_blank"` ni `rel="noopener noreferrer"`**.

---

## 5. Falencias Críticas vs. Ejemplo de Referencia

### 🔴 Prioridad ALTA (Bloquean aprobación)

| # | Falencia | Impacto |
|---|---------|---------|
| 1 | **Falta "Hecho con ❤️ por Lucas Méndez"** en Footer | Es un requisito del estándar. OBLIGATORIO. |
| 2 | **WhatsApp flotante NO se oculta al llegar al footer/contacto** | Mala UX, se superpone con contenido |
| 3 | **Todos los links de WhatsApp tienen `href="https://wa.me/"` sin número** | NADA funciona. No se puede contactar al cliente. |
| 4 | **Bug JSX: `class` en vez de `className`** en About.tsx línea ~43 | Error de React, styles no se aplican |
| 5 | **Sin animaciones (framer-motion)** | La página se siente plana y amateur comparada con el ejemplo |
| 6 | **Imágenes son URLs externas de Google AI Studio** | Pueden caducar, no optimizadas, no profesionales |
| 7 | **Sin Política de Privacidad ni Términos y Condiciones** | Requisito legal para prestadores de salud en Chile |
| 8 | **Formulario de contacto no funciona** | No envía nada, no redirige, engaña al usuario |
| 9 | **Datos placeholder (teléfono, email, redes)** | Contenido falso/inútil |
| 10 | **Año copyright `© 2024`** | Desactualizado |

---

## 6. Falencias de Calidad y UX

### 🟠 Prioridad MEDIA

| # | Falencia | Dónde |
|---|---------|-------|
| 1 | Sin `SectionWrapper` con animaciones de scroll (fade-in/slide-up) | Todos los componentes |
| 2 | Navbar siempre opaco, no tiene estado transparente inicial | Navbar.tsx |
| 3 | Menú móvil es un dropdown básico, no overlay fullscreen | Navbar.tsx |
| 4 | Sin bloqueo de scroll al abrir menú móvil | Navbar.tsx |
| 5 | Sin carrusel en testimonios (solo grid estático) | Testimonials.tsx |
| 6 | Sin wave dividers entre secciones | Global |
| 7 | Sin custom scrollbar | index.html (styles) |
| 8 | Sin efecto de cambio de título al dejar la pestaña | App.tsx |
| 9 | Sin estadísticas numéricas en About (años, pacientes, etc.) | About.tsx |
| 10 | Sin cita personal del profesional | About.tsx |
| 11 | Sin zonas de cobertura visuales | Contact.tsx |
| 12 | Sin horarios de atención visibles | Contact.tsx |
| 13 | Sin accordion pattern en FAQ (múltiples pueden estar abiertas) | FAQ.tsx |
| 14 | Teléfono y email no son clickeables (sin `<a href>`) | Contact.tsx |
| 15 | Cards de servicios sin hover de elevación (`-translate-y-2`) | Services.tsx |
| 16 | Sin barra de color animada en hover de cards | Services.tsx |
| 17 | Sin `loading="lazy"` ni `decoding="async"` en imágenes | Hero.tsx, About.tsx |

---

## 7. Falencias Técnicas / Bugs

| # | Bug/Issue | Archivo | Línea aprox. |
|---|----------|---------|-------------|
| 1 | `class=` en lugar de `className=` | About.tsx | ~43 (primera credential) |
| 2 | `index.css` referenciado en `index.html` pero **no existe** | index.html | L57 |
| 3 | `GEMINI_API_KEY` en vite.config.ts: innecesario para una landing page | vite.config.ts | L14-15 |
| 4 | README.md es el default de Google AI Studio, no personalizado | README.md | Todo |
| 5 | `metadata.json` tiene `requestFramePermissions: []` (residuo de AI Studio) | metadata.json | L4 |
| 6 | Import maps en index.html para react/react-dom via esm.sh — conflicto potencial con Vite bundling | index.html | L51-56 |
| 7 | No hay `<link rel="icon">` (favicon) | index.html | - |
| 8 | No hay meta description ni OG tags | index.html | - |
| 9 | El `<html>` no tiene `class="scroll-smooth scroll-pt-28"` como el ejemplo | index.html | L2 |
| 10 | Carpeta `Public/Fotos` está vacía — no hay fotos reales del profesional | Public/Fotos/ | - |

---

## 8. Falencias de SEO y Accesibilidad

| # | Problema | Impacto |
|---|---------|---------|
| 1 | Sin `<meta name="description">` | SEO básico roto |
| 2 | Sin Open Graph tags (`og:title`, `og:description`, `og:image`) | Preview en redes sociales no funciona |
| 3 | Sin `<link rel="canonical">` | SEO |
| 4 | Sin favicon | Se ve el ícono genérico del navegador |
| 5 | Sin `aria-label` en varios botones interactivos | Accesibilidad |
| 6 | Sin `title` attributes en links y botones | Accesibilidad/tooltip |
| 7 | Sin `alt` descriptivos adecuados en imágenes generadas | SEO de imágenes |
| 8 | Sin structured data (JSON-LD) para negocio local | SEO avanzado |
| 9 | Sin `lang="es"` en el `<html>` — **sí lo tiene**, pero falta `scroll-smooth` | UX de scroll |
| 10 | Sin `scroll-mt-*` en secciones para compensar header fijo | Navegación por anchors |

---

## 9. Falencias de Contenido / Datos Placeholder

Estos elementos **DEBEN** reemplazarse con datos reales del briefing del cliente:

| Dato Placeholder | Valor Actual | Estado |
|-----------------|--------------|--------|
| Teléfono/WhatsApp | `+56 9 1234 5678` | ❌ FALSO |
| Link WhatsApp | `https://wa.me/` (sin número) | ❌ ROTO |
| Email | `contacto@podomed.cl` | ❓ Sin confirmar |
| Facebook link | `#` | ❌ ROTO |
| Instagram link | `#` | ❌ ROTO |
| Foto Hero | URL de Google AI Studio | ❌ Temporal |
| Foto About | URL de Google AI Studio | ❌ Temporal |
| Testimonios | Posiblemente inventados | ❓ Sin confirmar |
| Comunas de cobertura | Solo text, sin detallar | ⚠️ Incompleto |
| Horario de atención | `Lun - Sab: 09:00 - 19:00` | ❓ Sin confirmar |
| "Más de 500 pacientes" | No confirmado | ❓ Sin confirmar |
| Descripción de servicios | Genérica | ⚠️ Necesita ajuste con briefing |

---

## 10. Comparativa Directa: Podomed vs. Jessica Belmar (Ejemplo)

### Funcionalidades Implementadas

| Feature | Jessica Belmar (Ejemplo) | Podomed Clinical |
|---------|------------------------|------------------|
| Navbar transparente → opaca al scroll | ✅ | ❌ |
| Menú móvil fullscreen con overlay | ✅ | ❌ (dropdown simple) |
| Bloqueo de scroll en menú móvil | ✅ | ❌ |
| Scroll suave programático con offset | ✅ | ❌ |
| Cambio de título al salir de pestaña | ✅ | ❌ |
| Animaciones de entrada (fade/slide) | ✅ (framer-motion) | ❌ |
| SVG Wave dividers entre secciones | ✅ | ❌ |
| Carrusel de testimonios con auto-play | ✅ | ❌ (grid estático) |
| Flotante WhatsApp se oculta al footer | ✅ | ❌ |
| Botón flotante Facebook | ✅ | ❌ |
| Ícono real de WhatsApp (SVG) | ✅ | ❌ (Material Symbol genérico) |
| Modales legales (Privacidad/Términos) | ✅ | ❌ |
| "Hecho con ❤️ por Lucas Méndez" | ✅ | ❌ |
| Newsletter input en footer | ✅ | ❌ |
| Fotos locales optimizadas | ✅ | ❌ (URLs externas) |
| Custom scrollbar | ✅ | ❌ |
| Tipado con `types.ts` | ✅ | ❌ |
| Estadísticas numéricas (About) | ✅ | ❌ |
| Cita personal del profesional | ✅ | ❌ |
| Zonas de cobertura visual | ✅ | ❌ |
| Horarios de atención prominentes | ✅ | ❌ |
| Sección HomeVisit/Domicilio dedicada | ✅ | ❌ (mezclado en Services) |
| Hover effects en cards (elevación) | ✅ | Parcial |
| Loading lazy + decoding async en imgs | ✅ | ❌ |
| Favicon | ✅ | ❌ |
| Open Graph meta tags | Parcial | ❌ |
| Links con target/rel para externos | ✅ | ❌ |
| Sección Process/Cómo trabajamos | ❌ | ✅ (buen diferenciador) |
| Badge "POPULAR" en service card | ❌ | ✅ (buen detalle) |

### Balance Final
- **Podomed implementa:** ~30% de las features del ejemplo
- **Features únicas de Podomed:** Process (pasos), badges de confianza en services, badge "POPULAR"
- **Gap crítico:** Animaciones, flotante, créditos, datos reales, legal

---

## 11. Archivos del Cliente (ArchivosCliente)

La carpeta contiene:
- `briefing-podomed-clinical.docx` — Documento Word con el briefing completo
- `briefing-podomed-clinical.xlsx` — Hoja de cálculo con datos del briefing

**⚠️ IMPORTANTE:** Estos archivos provienen del formulario de preguntas al cliente y contienen TODA la información que se necesita para personalizar la página:
- Datos de contacto reales (teléfono, email, redes sociales)
- Servicios específicos que ofrece
- Zonas de cobertura
- Horarios
- Información profesional
- Testimonios reales (si los hay)
- Preferencias de diseño y colores

**Acción requerida:** Extraer manualmente el contenido de estos archivos y usarlo para reemplazar TODOS los datos placeholder del proyecto.

---

## 12. Plan de Acción Recomendado (Priorizado)

### 🔴 Fase 1 — Fixes Críticos (Bloquean deploy)
1. **Extraer datos reales del briefing** (docx/xlsx) y reemplazar todos los placeholders
2. **Corregir bug `class` → `className`** en About.tsx
3. **Agregar número de WhatsApp real** en TODOS los enlaces `wa.me/`
4. **Agregar créditos** "Hecho con ❤️ por Lucas Méndez" en Footer
5. **Implementar ocultamiento del flotante** antes de llegar al footer/contacto
6. **Reemplazar imágenes** de Google AI Studio por fotos reales del profesional (Public/Fotos/)
7. **Actualizar año copyright** a 2026
8. **Crear o vaciar el archivo `index.css`** referenciado en index.html

### 🟠 Fase 2 — Calidad UX (Nivelar con el ejemplo)
9. **Instalar framer-motion y lucide-react**
10. **Crear `SectionWrapper.tsx`** con animaciones de entrada
11. **Crear `types.ts`** con interfaces tipadas
12. **Implementar navbar con efecto scroll** (transparente → opaco)
13. **Implementar menú móvil fullscreen** con overlay
14. **Implementar carrusel de testimonios** con auto-play
15. **Agregar wave dividers** entre secciones
16. **Agregar efecto de cambio de título** al dejar la pestaña
17. **Mejorar FAQ** con accordion controlado (solo uno abierto)
18. **Agregar custom scrollbar**

### 🟡 Fase 3 — Polish y Features
19. **Agregar sección de Atención Domiciliaria** dedicada (como HomeVisit del ejemplo)
20. **Agregar estadísticas numéricas** en About
21. **Agregar cita personal** del profesional en About
22. **Agregar zonas de cobertura** visual en Contact
23. **Agregar horarios de atención** prominentes
24. **Agregar modales de Privacidad y Términos** (con legislación chilena)
25. **Reemplazar Material Symbols** por lucide-react icons
26. **Agregar SVG real de WhatsApp** en el flotante
27. **Agregar botón flotante de Facebook**
28. **Hacer formulario funcional** (al menos redirect a WhatsApp)
29. **Agregar `loading="lazy"` y `decoding="async"`** en imágenes

### 🔵 Fase 4 — SEO y Optimización
30. **Agregar meta description** y OG tags
31. **Agregar favicon**
32. **Agregar structured data JSON-LD** para negocio local
33. **Agregar `scroll-smooth scroll-pt-28`** al HTML
34. **Agregar `scroll-mt-*`** en cada sección
35. **Limpiar config de Gemini API Key** (innecesaria para landing)
36. **Personalizar README.md**
37. **Agregar `target="_blank"` y `rel="noopener noreferrer"`** en todos los links externos

---

> **Nota final:** El proyecto actual es un punto de partida generado por IA (Google AI Studio), pero requiere una refactorización significativa para alcanzar el estándar de calidad establecido por el ejemplo de Jessica Belmar. Las falencias no son solo cosméticas — hay bugs reales, datos faltantes y funcionalidades rotas que impiden el uso en producción. Se recomienda seguir el plan de acción fase por fase.
