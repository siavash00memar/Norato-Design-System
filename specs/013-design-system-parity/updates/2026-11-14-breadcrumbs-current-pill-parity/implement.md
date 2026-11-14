# Implement — Breadcrumbs current-page specimen

The inert `.sample-crumbs b` capsule now uses `--norato-color-glass-surface`, `--norato-color-glass-shadow`, `--norato-radius-card`, and a `--norato-space-1` block inset. The 48px live adapter and frame tokens were not changed.

At the same 1280×720 viewport, the local capsule measures 88.27×28.80px after the change; the current reference capsule measures 88.10×29.16px. Local glass fill computes to the same `rgba(255, 255, 255, 0.78)`; radius is 12px versus 8px and local elevation is the closest existing semantic glass shadow. The local breadcrumb row remains 48px high. Runtime disclosure opened all three middle links, exposed `aria-expanded=true`, then returned to collapsed state.

The local frame measures 639.98×300px versus the reference's 636×300px. The row remains centered and RTL with a left-pointing separator; the live style selector/API, reference-side page, and sibling specimens are unchanged. Exact mobile recapture, the full hover/focus matrix, and independent screen-reader review remain open.

`pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed. The build retains the existing large-JS-chunk warning.

