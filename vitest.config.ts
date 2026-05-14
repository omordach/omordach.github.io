import { defineConfig } from 'vitest/config'

// React plugin not needed here — jsdom + @testing-library/react handles rendering.
// Vite build uses vite.config.ts; this file is only for `npm run test`.
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['e2e/**', 'node_modules/**'],
  },
})
