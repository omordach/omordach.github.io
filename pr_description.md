🎯 What
Removed the unused `src/components/ui/chart.tsx` file and uninstalled the `recharts` package and its types.

💡 Why
The component `chart.tsx` was not used anywhere in the codebase, and `recharts` was solely imported inside that component. Removing both the file and the unused dependency reduces the repository size and removes clutter, improving the overall code health and maintainability of the project.

✅ Verification
Ran `ls src/components/ui/chart.tsx` and confirmed it's deleted. Checked `package.json` to ensure `recharts` is gone. Ran `pnpm lint`, `pnpm run format`, and `pnpm test` successfully.

✨ Result
A cleaner codebase with less dead code and reduced dependency footprint.
