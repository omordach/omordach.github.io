# Weekly Dependency Update Report

## Updated Dependencies
- `@testing-library/user-event`: `14.6.7 -> 14.6.8`
- `@types/node`: `22.20.3 -> 22.20.5`
- `@vitest/ui`: `4.1.11 -> 4.1.12`
- `eslint-plugin-prettier`: `5.5.6 -> 5.5.7`
- `jsdom`: `30.1.0 -> 30.1.3`
- `prettier`: `3.9.8 -> 3.9.10`
- `typescript-eslint`: `8.70.0 -> 8.71.2`
- `vite`: `8.3.0 -> 8.3.4`
- `vitest`: `4.1.11 -> 4.1.12`
- `@sentry/tanstackstart-react`: `11.4.0 -> 11.8.0`
- `@tanstack/react-query`: `5.103.1 -> 5.104.3`
- `@tanstack/react-router`: `1.170.38 -> 1.170.44`
- `@tanstack/react-start`: `1.168.56 -> 1.169.2`
- `@tanstack/router-plugin`: `1.168.40 -> 1.168.46`
- `react`: `19.3.0 -> 19.3.1`
- `react-dom`: `19.3.0 -> 19.3.1`

## Tests & Build Stability
- Automated test suite `bun run test` executed successfully (14 tests passed, 0 failed).
- Linter `bun run lint` executed successfully with no errors.
- Checked mordach.com successfully (responsive with 0% packet loss).

## Issues Requiring Manual Review
- Several major version updates are available in development dependencies but were safely deferred per safe update policy (e.g. `@eslint/js`, `@types/node`, `@vitejs/plugin-react`, `@vitest/ui`, `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`, `typescript`). These require a manual review to consider upgrading to major versions in a dedicated effort.
