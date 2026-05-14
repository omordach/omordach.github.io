## 2025-05-14 - Accessible Form Associations
**Learning:** Standard React form labels often lack explicit association with their inputs in small projects, which breaks screen reader navigation and click-to-focus behavior.
**Action:** Always use `htmlFor` on labels and corresponding `id` on inputs, and include `aria-required` for mandatory fields to ensure a robust accessible experience.
