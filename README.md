# Oleh Mordach — TPM Professional Website

Professional single-page portfolio website for Oleh Mordach, Senior IT Manager & Technical Program Manager.

**Live site**: [mordach.com](https://mordach.com)

## Overview

The site establishes authority, showcases measurable career achievements, presents consulting and training services, and provides a clear path for visitors to make contact. It supports bilingual content (English / Ukrainian) with no page reload.

## Tech Stack

- React 18 + TypeScript
- Vite 7
- Tailwind CSS
- Framer Motion
- shadcn/ui (Radix UI primitives)
- React Hook Form + Zod
- Recharts
- Tinybird (analytics & live stats)
- Vitest + Playwright (unit & e2e tests)

## Local Development

```bash
npm install
npm run dev        # start dev server
npm run build      # production build → dist/
npm run preview    # preview production build
npm run test       # run unit tests (vitest)
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── CertificationsSection.tsx
│   ├── ImpactSection.tsx
│   ├── LiveStats.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── ui/                  # shadcn/ui components
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-seo.ts
│   └── useTinybirdTracking.ts
├── lib/
│   ├── tinybird.ts
│   └── utils.ts
├── pages/
│   ├── Index.tsx
│   ├── NotFound.tsx
│   ├── blog/
│   └── tpm-journey/
├── index.css
└── main.tsx
```

## Features

- Sticky navigation with smooth scroll
- Bilingual support — EN / UK, persisted in `localStorage`
- Key achievements with animated metrics
- Services grid (Mentorship, Scrum Master, Product Owner, PM, TPM/TPO, Consultation, Interview Prep)
- Contact form with inline validation + WhatsApp / Signal links
- Live visitor stats via Tinybird
- Fully responsive (320px → 1920px)

## Analytics (Tinybird)

Page view tracking and live stats are powered by Tinybird. Configure your token in `.env.local`:

```
VITE_TINYBIRD_TOKEN=your_token_here
```

```bash
npm run tinybird:dev      # local dev
npm run tinybird:deploy   # deploy pipes & datasources
```

## Deployment

The site deploys to GitHub Pages via GitHub Actions on every push to `main`. The workflow builds the project and publishes the `dist/` folder to the `gh-pages` branch.

To set up manually:
1. Go to **Settings → Pages**
2. Set source to the `gh-pages` branch, `/ (root)` folder

## Design System

Colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --background: 0 0% 7%;     /* dark charcoal */
  --foreground: 0 0% 98%;    /* near white */
  --accent: 210 14% 40%;     /* slate blue */
}
```

Fonts: **Playfair Display** (headings) + **Inter** (body) via Google Fonts.

## License

© 2026 Oleh Mordach. All rights reserved.
