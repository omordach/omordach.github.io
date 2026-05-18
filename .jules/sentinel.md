# Sentinel Journal
## 2025-05-14 - [Remove Hardcoded Formspree ID]
**Vulnerability:** A placeholder/hardcoded Formspree ID was found in `src/components/Contact.tsx`.
**Learning:** Hardcoding identifiers like form IDs (or API keys) in the source code can expose sensitive endpoints and reduce flexibility across environments (e.g. development vs production). Even placeholder values should ideally be managed via environment configurations.
**Prevention:** Use environment variables (e.g., `import.meta.env.VITE_FORMSPREE_ID`) for external service identifiers to ensure secrets and configs remain separate from the codebase.

## 2025-05-15 - [Add Input Length Limits and API Timeout]
**Vulnerability:** Unrestricted input field lengths in contact form and no timeout for external API call.
**Learning:** External API dependencies can hang indefinitely, causing poor UX or potential resource exhaustion. Unbounded input lengths can lead to large payloads and potential DoS.
**Prevention:** Use `AbortController` to enforce timeouts on `fetch` requests, and always specify `maxLength` attributes on user-facing input fields.
