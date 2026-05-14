# Sentinel Journal
## 2025-05-14 - [Remove Hardcoded Formspree ID]
**Vulnerability:** A placeholder/hardcoded Formspree ID was found in `src/components/Contact.tsx`.
**Learning:** Hardcoding identifiers like form IDs (or API keys) in the source code can expose sensitive endpoints and reduce flexibility across environments (e.g. development vs production). Even placeholder values should ideally be managed via environment configurations.
**Prevention:** Use environment variables (e.g., `import.meta.env.VITE_FORMSPREE_ID`) for external service identifiers to ensure secrets and configs remain separate from the codebase.
