# Select state gallery mobile parity — Specification

## Goal
Correct the mobile Select state-gallery width and column behavior against a matched 390px and 320px reference render.

## Acceptance criteria
- At 390×844 CSS viewport, Select state gallery content width is 327px, centered at x=24px, and cards render in two columns with no horizontal overflow.
- At 320×844 CSS viewport, the same gallery content width is 257px, centered at x=24px, and cards reflow to one column without horizontal overflow.
- Desktop gallery width, card styles, order, text, RTL, and runtime Select behavior are unchanged.
- Only Norato semantic spacing/target tokens are used for the mobile inset and card-column threshold.
- Token, catalog, Vue typecheck, build, browser, and diff gates are recorded.

## Out of scope
No changes to Select adapter behavior/API, other components, page structure, palette, or global documentation shell.
