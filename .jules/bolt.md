## 2023-11-20 - Memoizing High-Frequency JSX Loops

**Learning:** In reusable UI components like custom charts, complex render operations over data arrays (e.g., mapping a tooltip payload) can cause significant performance overhead if executed on every render cycle—especially when triggered by high-frequency events like hover or mouse move.
**Action:** When working on components that map over data, always consider whether the result can be cached. Wrap expensive `Array.prototype.map` and `.filter` combinations returning JSX inside `React.useMemo` if their inputs are largely stable or only change predictably.
