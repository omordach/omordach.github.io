## 2024-05-24 - Fix insecure Math.random() usage
**Vulnerability:** Use of insecure Math.random() for UI visual randomness in src/components/ui/sidebar.tsx
**Learning:** While only used for cosmetic width generation, Math.random() is predictable and often flagged by security scanners. It's an unnecessary security risk when secure alternatives are available.
**Prevention:** Always use window.crypto.getRandomValues() when random numbers are required, even for seemingly innocuous cosmetic variations. Provide a fallback if crypto is completely unavailable (e.g. testing environments).
