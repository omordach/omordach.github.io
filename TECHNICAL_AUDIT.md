# Technical GEO Audit - mordach.com

## 1. Crawlability for AI Bots
**Findings:**
- The site is built as a Single Page Application (SPA) using React and Vite. By default, SPAs deliver empty shells and require JavaScript execution to render content. AI bots (GPTBot, PerplexityBot, etc.) struggle or fail to render JS, making critical content invisible to them.
- `robots.txt` is missing specific bot allowances.
- `sitemap.xml` is missing entirely.

**Recommendations & Fixes Implemented:**
- **Robots.txt:** Updated `public/robots.txt` to explicitly allow GPTBot, PerplexityBot, ClaudeBot, and Google-Extended. Added a link to the sitemap.
- **Sitemap:** Created `public/sitemap.xml` with canonical URLs for all existing and new pages (e.g., `/tpm-journey`, `/blog`).
- **Rendering:** Vite creates a traditional SPA. For true Server-Side Rendering (SSR) or Static Site Generation (SSG), migrating to a framework like Next.js or Astro is the long-term industry standard. However, to mitigate this in the current setup, we must rely on excellent structured data and meta tags (which AI bots *do* parse before JS execution).

## 2. Structured Data (JSON-LD Schema)
**Findings:**
- Missing `Person` and `WebSite` JSON-LD schemas in `index.html`. This is the single highest-impact GEO action.

**Recommendations & Fixes Implemented:**
- Injected robust `Person` schema containing Oleh's role, achievements, specific skills, certifications, and `sameAs` links (LinkedIn, GitHub) into the `<head>` of `index.html`.
- Added the `WebSite` schema into `index.html`.

## 3. Meta Tags Optimization
**Findings:**
- The existing `<title>` and `<meta description>` were generic ("Senior Project Manager | Product Delivery Lead"). They lacked GEO signals like location ("Warsaw"), specific expertise ("CI/CD automation", "Agile SaaS delivery"), and the target role ("TPM").

**Recommendations & Fixes Implemented:**
- Rewrote `<title>` to: `Oleh Mordach — Technical Program Manager & Senior Delivery Lead | Warsaw`
- Rewrote `<meta description>` with keyword-dense, AI-citation optimized copy highlighting specific tools and career goals.
- Added a rich `<meta name="keywords">` array.
- Updated Open Graph (`og:`) tags for better social sharing and entity extraction.
