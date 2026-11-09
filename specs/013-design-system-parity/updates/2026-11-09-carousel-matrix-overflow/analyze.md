# Analyze — Carousel mobile matrix overflow

## Root cause
The sole narrow breakpoint keeps `.carousel-playground__variants` at two columns. A five-item indicator has an intrinsic width around 272px, while the 390px page renders each card at about 155px. The indicator expands its card and its variant/matrix ancestors; measured documentation scroll width reaches 472px inside a 375px layout viewport. The carousel track itself is internally scrollable and does not cause the document overflow.

## Change boundary
Reflow only the playground's variant-card gallery at the narrow breakpoint. Extend the gallery across the matrix's existing padding with semantic spacing tokens, tighten only the indicator gap within this documentation sample, and stack dot labels/controls. Keep every 48px target and the runtime Carousel track unchanged. This avoids clipping, local scrollbars and document overflow.

## Verification result
At exact 390px/320px CSS frame widths, document client/scroll widths are 375/375px and 305/305px. Both variant grids and their cards fit; all 22 examples remain in the accessibility tree and indicator targets measure 48×48px.
