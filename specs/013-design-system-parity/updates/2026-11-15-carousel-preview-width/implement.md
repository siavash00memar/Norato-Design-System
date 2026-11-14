# Implement — Carousel preview width

## Change

Changed only `.sample-carousel` in `apps/vue/src/component-specimen.css` from full-width sizing to `inline-size:min(100%, calc(var(--norato-carousel-slide-medium-max-inline-size) + var(--norato-space-2)))`. This makes the header and slide track share a centered, compact width while retaining parent contraction. The live `NoratoCarousel` adapter and all artwork/styles remain unchanged.

## Browser evidence

- Local and reference pages were captured and measured at the same 1280×720 CSS viewport.
- Norato frame: 631.984×300px. Reference frame: 636×300px.
- Norato composition after the change: 368px at x=448.516px. Reference composition: 367.2px at x=458.9px. The width difference is 0.8px; the x-position difference relative to each frame is 2.016px.
- Three local cards remain square at about 114.66px; the header title, left-side arrow pair and centered yellow active indicator remain in place. Screenshot review shows the title and arrows no longer span the full frame width.
- Fresh local renders after the change at 390×844 and 320×740 viewport overrides show document client/scroll widths of 375/375px and 305/305px. The specimen contracts to 333px and 263px respectively (x=21px in both), remaining within the viewport without horizontal document overflow. The 320px screenshot shows the RTL slide row, navigation and indicator inside the frame.

## Project gates

- `pnpm check:tokens` passed.
- `pnpm check:catalog` passed (49 unique routes/contracts).
- `pnpm --dir apps/vue typecheck` passed.
- `pnpm --dir apps/vue build` passed.
- `git diff --check` passed (only Git line-ending normalization warnings).

## Remaining DoD

- Real-device touch scrolling and independent screen-reader review.
- Full slide/state combination visual review.

The project gates pass, but these remaining DoD items keep the Carousel family open.
