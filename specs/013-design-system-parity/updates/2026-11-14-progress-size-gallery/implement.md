# Progress Sizes Gallery — Implement

## Changes

- Replaced the three full-width explanatory rows with three inert Small/Medium/Large cards. Each card pairs a Linear thickness sample and a Circular diameter sample.
- Added the token `--norato-progress-size-gallery-block-size` at the measured 134.125px reference stage height.
- Kept existing semantic geometry/color tokens, RTL ordering, accessibility hiding, live adapter, playground and all other page sections unchanged.
- At mobile widths, the stage uses the shared 16px frame inset. Below 360px it wraps to two cards and a centered third card.

## Browser verification

- At 1265×713: local stage 631.984×134.125px vs reference 636×134.125px. All six marker dimensions match: 48×4/8/12px and 24/32/40px circles.
- At 390×844: local/reference stage 327×134.125px; local document width 375/375px.
- At 320×844: local stage 257×216.375px vs reference 257×214.25px. The last card wraps to a centered row; all markers remain intrinsic and the local document is 305/305px.
- Browser DOM confirms `aria-hidden`, no focusable descendants, RTL direction and no console errors.

## Engineering checks and residuals

- `pnpm check:tokens` passed.
- `pnpm check:catalog` passed with 49 unique routes/contracts/exports.
- `pnpm --dir apps/vue typecheck` passed.
- `pnpm --dir apps/vue build` passed.
- `git diff --check` passed; only line-ending normalization notices were emitted.
- Progress's independent screen-reader review remains open. No Git push or Vercel deployment was performed.
