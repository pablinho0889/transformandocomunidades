# Transformando Comunidades

Plataforma integral de educación financiera, liderazgo, comunidad y transformación real para la comunidad latina.

## Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — estilos
- **shadcn/ui** — componentes base
- **Framer Motion** — animaciones
- **React Router DOM** — enrutamiento

## Inicio rápido

```sh
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura del proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes reutilizables
│   ├── ui/          # Componentes base (shadcn/ui)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── FeatureBlock.tsx
│   ├── PricingSection.tsx
│   ├── CTASection.tsx
│   ├── ScrollReveal.tsx
│   └── Footer.tsx
├── hooks/           # Custom hooks
├── lib/             # Utilidades
├── pages/           # Páginas (Index, NotFound)
└── index.css        # Estilos globales y design tokens
```

## Secciones

| Sección    | ID           | Descripción                          |
|------------|--------------|--------------------------------------|
| Academy    | `#academy`   | LMS con cursos y certificaciones     |
| Comunidad  | `#comunidad` | Red social interna con gamificación  |
| Programas  | `#programas` | Retos de 7 y 21 días                 |
| Fundación  | `#fundacion` | Impacto social y becas               |
| Planes     | `#planes`    | Basic · Pro · Elite                  |
