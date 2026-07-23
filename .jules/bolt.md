## 2023-11-20 - Memoizing High-Frequency JSX Loops

**Learning:** In reusable UI components like custom charts, complex render operations over data arrays (e.g., mapping a tooltip payload) can cause significant performance overhead if executed on every render cycle—especially when triggered by high-frequency events like hover or mouse move.
**Action:** When working on components that map over data, always consider whether the result can be cached. Wrap expensive `Array.prototype.map` and `.filter` combinations returning JSX inside `React.useMemo` if their inputs are largely stable or only change predictably.

## 2025-03-08 - Hoist Static Data Outside Components

**Learning:** Inline array and object literals inside React components cause unnecessary memory allocations on every render cycle, which can contribute to garbage collection overhead and slower render times.
**Action:** When working on React components, always hoist static arrays, objects, and functions outside the component scope to prevent re-allocation, unless they depend on component state or props.
