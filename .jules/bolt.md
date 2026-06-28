## 2024-07-26 - ChartStyle Re-render Optimization
**Learning:** React component configurations mapped into objects or arrays (like chart configs) being filtered directly in the render body creates a new reference on every render, causing React to potentially perform more work down the tree and slowing down local rendering updates.
**Action:** Always wrap computationally derived or filtered object references in a `useMemo` hook, ensuring that as long as the parent configuration (`config`) hasn't changed, the previously computed value is reused.
