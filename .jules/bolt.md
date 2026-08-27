## 2024-08-27 - React Callback Hoisting
**Learning:** Extracting inline functions from JSX mappings and event handlers using `useCallback` reduces memory allocations and prevents unnecessary component re-renders when children are wrapped in `memo`.
**Action:** Always hoist static functions outside of loops and component bodies or use `useCallback` when passing functions to children to improve rendering performance.
