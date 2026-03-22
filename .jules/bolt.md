## 2024-05-18 - Vite Build Warning on @import
**Learning:** Vite 7's CSS pipeline natively flags `@import` statements for fonts inside main CSS files as warnings because they block parallel downloading and create sequential request chains, directly impacting FCP (First Contentful Paint).
**Action:** Always move external font loading from CSS `@import` statements to HTML `<link rel="preconnect">` and `<link rel="stylesheet">` tags in the document `<head>` for Vite projects to resolve the build warning and improve FCP.
## 2026-03-21 - React Router Lazy Loading Strategy
**Learning:** By dynamically importing main application routes (`/`, `/blog`, `/tpm-journey`, and `NotFound`) via `React.lazy` and wrapping them with `Suspense` in Vite + React stacks, the initial bundle footprint is significantly reduced. Users only download code essential to the page they currently view.
**Action:** Always implement code splitting using `React.lazy` for primary application routes in the main `App.tsx` router configuration to ensure minimal initial load times.
## 2025-05-20 - React Router Link vs Standard Anchor Tags for Internal Routing
**Learning:** Using standard `<a>` tags for internal navigation within a React Router-based Single Page Application (SPA) causes full page reloads. This forces the browser to re-download HTML, re-parse JavaScript, and completely reset the React DOM state, eliminating the performance benefits of client-side routing. This can be especially harmful in apps with large initial bundles.
**Action:** Always use React Router's `<Link>` or `<NavLink>` components for internal routing to ensure instantaneous, client-side transitions. To maintain hash anchor functionality (e.g., `#about`), implement a lightweight `ScrollToHash` side effect using `useLocation()` to manually scroll the DOM element into view when the route changes.
## 2024-03-22 - Avoid blind linting fixes when performing micro-optimizations
**Learning:** Attempting to fix pre-existing linting warnings (like replacing `any` with `unknown` in tests) while performing unrelated performance optimizations can easily introduce breaking type errors and CI pipeline failures, significantly complicating a simple PR.
**Action:** Strictly scope PR changes to the requested performance task. Do not touch or modify test files or address unrelated warnings unless explicitly part of the goal.
