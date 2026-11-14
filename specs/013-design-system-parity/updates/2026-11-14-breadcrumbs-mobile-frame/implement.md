# Breadcrumbs mobile specimen — Implement

- The existing mobile rule now subtracts the semantic `space-4` token from the specimen parent, caps the result at the shared 328px mobile maximum, and centers it.
- Matched reference/local frames are exact at 390×844 (327×300px at x=24) and 320×844 (257×300px at x=24). Local document widths match the client (375/375px and 305/305px); the RTL trail retains left-pointing separators. The reference page itself is 326px wide at 320px, but local overflow remains absent.
- `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Remaining Breadcrumbs DoD includes hover/focus visual coverage and independent screen-reader review.
