## 2024-08-27 - React Callback Hoisting

**Learning:** Extracting inline functions from JSX mappings and event handlers using `useCallback` reduces memory allocations and prevents unnecessary component re-renders when children are wrapped in `memo`.
**Action:** Always hoist static functions outside of loops and component bodies or use `useCallback` when passing functions to children to improve rendering performance.

## 2026-08-27 - Extracted static formatting from JSX render loops

**Learning:** Performing string manipulation or formatting (like `padStart`) on static array elements within a React render loop causes unnecessary CPU overhead per render.
**Action:** When mapping over static arrays, precompute and hoist the formatted data or related arrays outside of the component to perform the formatting only once at module load time.
## 2023-10-27 - Precalculate string formatting outside render loop
**Learning:** Performing string manipulations like `padStart` inside a React component's render loop (especially within an array `map`) adds unnecessary CPU overhead on every re-render.
**Action:** Always extract static derived data calculations (like zero-padding fixed indices) to constants outside the component scope to perform the work once during module evaluation.
