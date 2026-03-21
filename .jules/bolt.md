## 2024-05-18 - Vite Build Warning on @import
**Learning:** Vite 7's CSS pipeline natively flags `@import` statements for fonts inside main CSS files as warnings because they block parallel downloading and create sequential request chains, directly impacting FCP (First Contentful Paint).
**Action:** Always move external font loading from CSS `@import` statements to HTML `<link rel="preconnect">` and `<link rel="stylesheet">` tags in the document `<head>` for Vite projects to resolve the build warning and improve FCP.
## 2026-03-21 - React Router Lazy Loading Strategy
**Learning:** By dynamically importing main application routes (`/`, `/blog`, `/tpm-journey`, and `NotFound`) via `React.lazy` and wrapping them with `Suspense` in Vite + React stacks, the initial bundle footprint is significantly reduced. Users only download code essential to the page they currently view.
**Action:** Always implement code splitting using `React.lazy` for primary application routes in the main `App.tsx` router configuration to ensure minimal initial load times.
