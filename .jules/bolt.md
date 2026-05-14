## 2025-05-14 - Context and Hook Optimization
**Learning:** In a multi-language React application where the entire dictionary is passed through context, missing memoization of the context value causes every single component using `useLang` to re-render whenever the provider's parent re-renders, even if the language hasn't changed.
**Action:** Always wrap context values in `useMemo` and stabilize handlers with `useCallback` in high-traffic components like Header and Contact forms to minimize reconciliation overhead.
