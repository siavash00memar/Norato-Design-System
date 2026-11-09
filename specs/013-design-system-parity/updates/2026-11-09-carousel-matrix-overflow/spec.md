# Specify — Carousel mobile matrix overflow

## Problem
At a 390px CSS viewport, the documentation page's horizontal scroll width is 472px. The live track is internally scrollable, but the 5-dot examples inside the two-column variant grid exceed their cards and expand the documentation column.

## Acceptance contract
- Keep every carousel variant example visible and operable at 390px and 320px.
- Keep interaction targets at least 48px and retain intrinsic indicator geometry.
- Fit intrinsic examples inside a one-column mobile sample rail using semantic spacing; avoid local and document scrollbars.
- Preserve desktop layout and RTL.
