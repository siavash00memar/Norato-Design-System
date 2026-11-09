# Breadcrumbs — DoD

## design reference parity and composition

- [x] design reference inspected at 1280×720 and 390×844; Norato detail page inspected at matched desktop/mobile sizes. Both show an RTL path, left-pointing chevron, raised current item and a home marker; Norato keeps its yellow emphasis, semantic link colors and Button page hierarchy.
- [x] Historical pre-correction measurement: the generic Norato specimen was 584×136px on desktop and 343×136px at 390px; the 320px page had no overflow and the trail scrolled internally. The frame-height mismatch was corrected in the 2026-11-09 follow-up below.

## Runtime and accessibility

- [x] Plain/Glass, Small/Medium/Large, Chevron/Slash and expanded/collapsed controls were exercised; each sampled link/disclosure remains 48px high.
- [x] Six-step RTL path shows first, ellipsis, final parent and current page. Disclosure exposes the three middle links; pointer click and Enter toggle it. `aria-expanded`, valid `aria-controls`, one `aria-current="page"`, named `nav` and ordered list semantics were verified.
- [x] Keyboard tab reaches the disclosure and computes a 2px focus outline. Static specimen contains no interactive descendants. Browser console has no recorded errors.
- [x] Browser cycled all 24 composed configurations (Plain/Glass × Small/Medium/Large × Chevron/Slash × collapsed/expanded) and confirmed each control state. Screenshots were visually sampled at Glass/Small/Slash and Glass/Large/Slash; no direction, clipping or stretch regression was observed.
- [ ] Hover/focus visual combinations from the 42-part matrix and independent screen-reader review remain open; maturity stays Adapted.

## Repository gates

- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), Vue typecheck, production build and `git diff --check` passed. Vite reports a JS chunk above 500KB.

## Screenshot correction — 2026-11-02

- [x] Runtime Chevron uses a direction-stable left-pointing SVG in RTL; Slash stays `/`.
- [x] Inert top specimen uses the same left-pointing separator and a consistent house SVG.
- [x] Local 1280×720 browser render shows left-pointing separators in the collapsed runtime trail and in the inert specimen; separators are intrinsic 16×16px SVGs and RTL layout is preserved.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass; production build retains its >500KB JavaScript chunk advisory.

## Glass current item surface — 2026-11-09

- [x] Browser review of Glass + Small + Slash found the current-page pill using the blue information container; replaced it with the raised neutral glass surface and Norato elevation.
- [x] Fresh browser capture confirms the current item is a neutral raised surface while the disclosure remains yellow. The complete style/size/separator/state matrix and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build, and `git diff --check` pass after the surface correction; Vite retains the existing >500KB JS chunk advisory.

## Keyboard-focus follow-up — 2026-11-09

- [x] Fresh local browser review: with the disclosure expanded, Shift+Tab focused the Home link; the accessibility tree named the focused link and the screenshot showed the Norato yellow ring with its dark-amber contrast outline. Clicking the inert specimen did not navigate away from Breadcrumbs.
- [x] A second live sample on Glass/Medium/Chevron/collapsed focused the «کفش دویدن» link; AX named it as a link and the screenshot showed the yellow focus ring. The playground remained on Breadcrumbs.
- [ ] This single focus sample does not close the full 42-part hover/focus visual matrix or the independent screen-reader review.

## Preview frame parity — 2026-11-09

- [x] Live desktop screenshot confirms a 636×300px dotted shared frame, top-right Default marker, and centered RTL crumb row with intrinsic height.
- [ ] Matched 390px and 320px browser recapture remains open; the new mobile width rule has not yet been directly rendered at those viewport sizes.
