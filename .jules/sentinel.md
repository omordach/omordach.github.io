## 2024-05-24 - Fix insecure Math.random() usage
**Vulnerability:** Use of insecure Math.random() for UI visual randomness in src/components/ui/sidebar.tsx
**Learning:** While only used for cosmetic width generation, Math.random() is predictable and often flagged by security scanners. It's an unnecessary security risk when secure alternatives are available.
**Prevention:** Always use window.crypto.getRandomValues() when random numbers are required, even for seemingly innocuous cosmetic variations. Provide a fallback if crypto is completely unavailable (e.g. testing environments).
## 2024-05-24 - Client-side HttpOnly Cookie Misconfiguration
**Vulnerability:** The application was attempting to set the `HttpOnly` flag on a cookie (`sidebar:state`) using client-side JavaScript (`document.cookie`).
**Learning:** The `HttpOnly` attribute is designed specifically to prevent client-side scripts from accessing cookies (mitigating XSS risks). Therefore, it can only be set via the `Set-Cookie` HTTP response header from a server. Setting it via `document.cookie` in the browser simply fails or is ignored, providing a false sense of security.
**Prevention:** Do not attempt to use `HttpOnly` in client-side `document.cookie` assignments. If a cookie must be `HttpOnly`, ensure it is generated and set by the backend server. If a cookie must be set and accessed by the client, accept that it cannot have the `HttpOnly` protection.
