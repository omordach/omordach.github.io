# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`mordach.com` — Oleh Mordach's personal site. A single-page marketing/portfolio site built with **TanStack Start** (React 19 + TanStack Router, SSR via Nitro), styled with Tailwind CSS v4 and shadcn/ui (Radix primitives). Deployed to Render as a Node.js server.

## Commands

Package manager is **Bun** (see `bunfig.toml`, `bun.lock`; CI uses `bun install --frozen-lockfile`).

- `bun run dev` — start dev server (vite dev)
- `bun run build` — production build (Nitro, `node-server` preset) → `.output/server/index.mjs`
- `bun run preview` — preview the production build
- `bun run lint` — ESLint
- `bun run format` — Prettier write
- `bun run test` — Vitest, run once
- `bun run test:watch` — Vitest watch mode
- Single test file: `bun run test src/hooks/use-theme.test.tsx`
- Single test by name: `bun run test -t "test name"`

CI (`.github/workflows/ci.yml`) runs lint → build → test on every push/PR to `main`, via Bun.

## Architecture

**Routing**: File-based via TanStack Router, in `src/routes/`. See `src/routes/README.md` for the naming conventions (`$id` dynamic, `{-$cat}` optional, `$` splat, `_layout`, `__root`). `routeTree.gen.ts` is auto-generated — never hand-edit it. The site is effectively a single route (`index.tsx`) that composes section components in order; `src/routes/__root.tsx` is the app shell (HTML doc, head tags/SEO meta, JSON-LD, theme FOUC-prevention script, `<Scripts />`, `QueryClientProvider`, `ThemeProvider`).

**Vite config**: `vite.config.ts` composes plugins directly: `tsconfigPaths` (path aliases), `tailwindcss`, `tanstackStart` (from `@tanstack/react-start/plugin/vite`), `nitro` (build-only, `node-server` preset so Render gets `.output/server/index.mjs`), and `react`. The `server.entry` option points to `src/server.ts`.

**`src/server.ts`**: a thin wrapper around the generated TanStack Start server entry (`@tanstack/react-start/server-entry`) that adds security headers to every response and guards against h3 swallowing in-handler throws into an opaque `{"unhandled":true,...}` 500 JSON body — it detects that shape and re-renders a proper error page (`src/lib/error-page.ts`) instead. `src/lib/error-capture.ts` records the last uncaught error/rejection out-of-band (5s TTL) so the server wrapper can recover a real stack trace even after h3 has swallowed it.

**Sections** (`src/components/sections/`): the page is a stack of self-contained, content-only components (`hero`, `metrics`, `timeline`, `expertise`, `philosophy`, `achievements`, `certifications`, `vision`, `contact`, `footer`, `nav`) rendered in fixed order by `src/routes/index.tsx`. `section.tsx` is a shared layout wrapper. There's no CMS/data layer — copy lives directly in the JSX.

**Theming**: `src/hooks/use-theme.tsx` provides a `light`/`dark` context. The actual class is applied pre-hydration by a blocking inline script in `__root.tsx`'s `<head>` (reads `localStorage`, falls back to `prefers-color-scheme`) to avoid flash-of-unstyled-content; the React provider then just reads whatever class is already on `<html>` and toggles it + persists to `localStorage` on demand.

**UI components** (`src/components/ui/`): shadcn/ui primitives (`components.json`, style "new-york", Radix-based). Regenerate/add via shadcn CLI conventions rather than hand-rolling new primitives.

**Testing**: Vitest + jsdom + Testing Library, configured in `vitest.config.ts` (separate from `vite.config.ts` — don't assume the app's Vite plugins apply to tests, only `@vitejs/plugin-react`). Setup file: `src/test/setup.ts`. Tests are colocated as `*.test.ts(x)` next to source.

## Platform notes

- `bunfig.toml` enforces a 24h supply-chain guard (`minimumReleaseAge`) on new package installs.
- Deployment target is Render (`render.yaml`): builds with `bun install && bun run build`, runs `node .output/server/index.mjs`.
