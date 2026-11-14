# Empty State Sizes gallery — Implement

## Delivered

- Added an inert Sizes gallery with three equal 64×36px rounded bars, Small/Medium/Large labels, dotted glass stage, neutral fills, and restrained Norato-yellow light.
- Replaced the generic simulated States control with an explanatory note because Empty State has no independent interactive/data state.
- Added one Empty State family scope for neutral/yellow metadata in Variants, Anatomy/Parts, Usage, Accessibility, and Tokens. Shared styles and other component families are unchanged.
- Corrected the contract: `size` changes icon/illustration dimensions, not title/description rhythm. The public adapter, its 40/48/64px visual scale, playground, actions, and generated snippet are unchanged.
- Added semantic frame tokens for the desktop/mobile gallery bounds. No page-local raw design values were introduced.

## Browser evidence

| Viewport | Norato gallery | Reference gallery | Result |
| --- | --- | --- | --- |
| 1265×713 | 635.98×134.20px | 636×134.125px | Three centered 64×36px samples in one row |
| 390×844 | 327×134.20px | 327×134.125px | Three centered 64×36px samples in one row; document 375/375px |
| 320×844 | 257×214.41px | 257×214.25px | Small/Medium first row; Large centered below; document 305/305px |

Computed Empty State section colors contain neutral, yellow, and semantic error/success/warning colors; generic blue metadata colors are absent. Browser accessibility inspection exposes the States explanation and hides the inert Size markers. This does not replace independent screen-reader review.

## Engineering checks

- `pnpm check:tokens` — passed.
- `pnpm check:catalog` — passed (49 unique routes/contracts/exports).
- `pnpm --dir apps/vue typecheck` — passed.
- `pnpm --dir apps/vue build` — passed.
- `git diff --check` — passed; Git reported existing working-copy LF→CRLF normalization warnings only.

## Remaining

- Empty State's independent screen-reader review and exhaustive runtime behavior cross-product remain open; family DoD is not closed.
- GitHub push is held because the connected repository currently triggers Vercel deployment on push. No Vercel deployment was requested or initiated for this change.
