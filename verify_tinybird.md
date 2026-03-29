# Tinybird verification report

## Check 1 — Infrastructure
- 1a Data Source schema: FAIL
- 1b Test event ingestion: FAIL
- 1c Pipe endpoint response: FAIL
- 1d Read token scope: FAIL

## Check 2 — Environment variables
- 2a VITE_TINYBIRD_TOKEN in .env.example: PASS
- 2b .env in .gitignore: FAIL
- 2c Token not hardcoded in src/: PASS

## Check 3 — Hook
- 3a File exists at src/hooks/useTinybirdTracking.ts: PASS
- 3b Hook is called in src/pages/Index.tsx: PASS
- 3c Uses sendBeacon with fetch fallback: PASS
- 3d Catches/suppresses errors: PASS

## Check 4 — LiveStats component
- 4a File exists at src/components/LiveStats.tsx: PASS
- 4b Rendered in footer: PASS
- 4c Fails gracefully without rendering error element: PASS

## Check 5 — Build
- 5a Build succeeds with no TS errors: PASS
- 5b Token does not appear as literal string in dist/: PASS

## Summary
10 / 14 checks passed.
Issues to fix:
- 1a: Data Source `page_events` does not exist
- 1b: Test event ingestion fails because `page_events` Data Source does not exist
- 1c: Pipe `live_stats` does not exist
- 1d: Read token scope cannot be verified since `live_stats` pipe is missing
- 2b: `.env` is missing from `.gitignore`

## Notes
The `page_events` Data Source and the `live_stats` Pipe are missing in the workspace `omordach_workspace`. This results in the API returning 404/not found errors when trying to hit the endpoint or querying the stats.
