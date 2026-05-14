# mordach.com — Personal Website

Personal website for **Oleh Mordach, PMP** — Senior Technical Program Manager.  
Live at [mordach.com](https://mordach.com) (GitHub Pages) and optionally on [Render](#render-static-site).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript (strict) |
| Build | Vite 6 |
| Styling | Tailwind CSS v3 + Inter font |
| Routing | React Router v6 — **HashRouter** (required for GitHub Pages SPA) |
| Icons | lucide-react |
| i18n | Custom React Context — EN / UK dictionaries |
| Unit tests | Vitest 2 + @testing-library/react (jsdom) |
| E2E tests | Playwright |
| CI/CD | GitHub Actions |

---

## Project Structure

```
omordach.github.io/
├── public/
│   └── CNAME                  # Custom domain: mordach.com
├── src/
│   ├── i18n/
│   │   ├── en.ts              # English dictionary (as const)
│   │   ├── uk.ts              # Ukrainian dictionary (as const)
│   │   └── index.ts           # Widen<T> type + dictionaries export
│   ├── context/
│   │   ├── LanguageContext.tsx # LanguageProvider + useLang hook
│   ├── components/
│   │   ├── Header.tsx         # Sticky nav + language switcher + mobile menu
│   │   ├── Hero.tsx           # Dark hero band with CTAs
│   │   ├── Achievements.tsx   # 4 key achievement cards
│   │   ├── Experience.tsx     # Timeline + certifications sidebar
│   │   ├── Services.tsx       # 7 service cards → detail pages
│   │   ├── Contact.tsx        # Formspree form + WhatsApp / Signal
│   │   └── Footer.tsx         # Brand + links + rights
│   ├── pages/
│   │   ├── Home.tsx           # Assembles all sections
│   │   └── services/
│   │       └── ServicePage.tsx # Dynamic /services/:slug detail page
│   ├── test/
│   │   ├── setup.ts           # jest-dom matchers
│   │   └── App.test.tsx       # 6 unit tests
│   ├── App.tsx                # Route definitions
│   ├── main.tsx               # StrictMode > HashRouter > LanguageProvider
│   └── index.css              # Tailwind directives + global styles
├── e2e/
│   └── app.spec.ts            # Playwright end-to-end tests
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI build + GitHub Pages deploy
├── vite.config.ts             # Vite build config (React plugin)
├── vitest.config.ts           # Vitest config (no React plugin — see note)
├── playwright.config.ts       # Playwright config
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

> **Why two config files for Vite/Vitest?**  
> Vitest 2 bundles its own Vite 5 internally. The `@vitejs/plugin-react` package is built against Vite 6 and its types are incompatible at the Vite 5 level. Keeping `vitest.config.ts` separate (no React plugin) avoids a type conflict while letting `vite.config.ts` use the React plugin for production builds.

---

## Local Development

### Prerequisites

- Node.js 20+ and npm 9+

### Setup

```bash
git clone https://github.com/omordach/omordach.github.io.git
cd omordach.github.io
npm install
```

### Run dev server

```bash
npm run dev
# → http://localhost:5173
```

### Build for production

```bash
npm run build
# output in ./dist
```

### Preview production build

```bash
npm run preview
# → http://localhost:4173
```

### Lint

```bash
npm run lint
```

### Unit tests (Vitest)

```bash
npm run test
```

### End-to-end tests (Playwright)

```bash
# First install browsers (one-time):
npx playwright install --with-deps

# Run e2e tests:
npx playwright test
```

---

## Environment / Configuration

### Contact form

The contact form submits to [Formspree](https://formspree.io).  
Before going live, replace the placeholder in [src/components/Contact.tsx](src/components/Contact.tsx):

```ts
// Change this line:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
// To your real form ID from formspree.io/dashboard
```

No other environment variables are required — everything else is hardcoded or handled at build time.

---

## CI/CD — GitHub Actions

### Workflow: `.github/workflows/deploy.yml`

Triggers on every push to `main`. Steps:

1. Checkout code
2. Set up Node.js 20 (with npm cache)
3. `npm ci` — install locked dependencies
4. `npm run build` — TypeScript compile + Vite bundle → `dist/`
5. Upload `dist/` as a GitHub Pages artifact
6. Deploy to GitHub Pages

### Enable GitHub Pages (one-time setup)

1. Go to **Settings → Pages** in your GitHub repo
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow deploys automatically

The `public/CNAME` file (`mordach.com`) is copied into `dist/` by Vite during build, which tells GitHub Pages to serve the site on the custom domain.

---

## Render — Static Site Deployment

[Render](https://render.com) is a zero-config alternative to GitHub Pages.  
Because the app uses **HashRouter**, no special redirect rules are needed — the browser handles all routing client-side via the URL hash.

### One-time setup on Render

1. Sign in at [render.com](https://render.com) and click **New → Static Site**
2. Connect your GitHub repo (`omordach/omordach.github.io`)
3. Set the following:

| Setting | Value |
|---|---|
| **Branch** | `main` |
| **Build Command** | `npm ci && npm run build` |
| **Publish Directory** | `dist` |

4. Click **Create Static Site** — Render builds and deploys automatically

### Automatic deploys

Every push to `main` triggers a new Render build. No extra configuration needed.

### Custom domain on Render

1. In your Render dashboard → **Settings → Custom Domains**
2. Add `mordach.com` and follow the DNS instructions
3. Render provisions a free TLS certificate automatically

> If you deploy to both GitHub Pages and Render, point the `CNAME` DNS record to only one of them at a time.

---

## i18n

The site supports **English** (`en`) and **Ukrainian** (`uk`).  
All copy lives in `src/i18n/en.ts` and `src/i18n/uk.ts`.

The `Widen<T>` utility type in `src/i18n/index.ts` reconciles the `as const` literal types produced by each dictionary so both satisfy the shared `Dict` type:

```ts
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? readonly Widen<U>[]
  : { [K in keyof T]: Widen<T[K]> }

export type Dict = Widen<typeof en>
```

When adding new copy, keep EN and UK dictionaries in sync (same keys, same structure).

---

## Service Pages

Routes follow the pattern `/#/services/:slug` (HashRouter).  
Available slugs and their i18n keys:

| URL slug | i18n key |
|---|---|
| `mentorship` | `mentorship` |
| `scrum-master` | `scrumMaster` |
| `product-owner` | `productOwner` |
| `project-management` | `projectManagement` |
| `technical-skills` | `technicalSkills` |
| `consultation` | `consultation` |
| `interview-prep` | `interviewPrep` |

The mapping lives in [src/pages/services/ServicePage.tsx](src/pages/services/ServicePage.tsx).

---

## License

All rights reserved. Content and design © Oleh Mordach.
