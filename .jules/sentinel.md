# Sentinel's Journal

## 2024-03-19 - [Adding Essential Security Headers to Static Vite App]
**Vulnerability:** Missing security headers like Content-Security-Policy (CSP) and X-Content-Type-Options in a statically built React application.
**Learning:** For serverless or purely static SPAs served from CDNs, traditional backend configurations for HTTP security headers aren't always directly accessible or straightforward to set up without additional infrastructure as code. However, adding them as `<meta>` tags inside `index.html` provides a necessary defense-in-depth layer against XSS, MIME-type sniffing, and other injection attacks directly at the browser level, regardless of the hosting provider.
**Prevention:** Implement a secure baseline of `meta http-equiv` tags in `index.html` for all static projects as part of the initial boilerplate, specifically enforcing a strict CSP to reduce the attack surface.
