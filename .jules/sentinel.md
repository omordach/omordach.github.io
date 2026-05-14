## 2025-05-15 - Security Enhancements: Referrer-Policy and Input Validation

**Vulnerability:** Information leakage via Referrer header and potential DoS/Buffer overflow through unsanitized large form inputs.
**Learning:** Default browser behavior might send full URLs in Referrer headers to third-party sites. Public-facing forms without length limits are susceptible to automated abuse and excessively large payloads.
**Prevention:**
- Always set a restrictive Referrer-Policy (e.g., `strict-origin-when-cross-origin`).
- Implement both client-side and server-side length limits and sanitization (trimming) for all user inputs.
