## 2026-03-22 - Insecure cookie setting with HttpOnly flag from JavaScript
**Vulnerability:** In `src/components/ui/sidebar.tsx`, the `HttpOnly` flag was being set via `document.cookie` in a client-side context.
**Learning:** The `HttpOnly` flag is reserved for server-side `Set-Cookie` headers and is ignored by browsers when set via `document.cookie`. Any cookie set via JavaScript is, by definition, accessible to the script that set it, making `HttpOnly` inappropriate for client-side cookies.
**Prevention:** Remove the `HttpOnly` flag from all client-side cookie assignments. Use `Secure` and `SameSite` flags to enhance security for client-side cookies instead.
