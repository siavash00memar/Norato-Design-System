# Breadcrumbs — DoD

## design reference parity and composition

- [x] design reference inspected at 1280×720 and 390×844; Norato detail page inspected at matched desktop/mobile sizes. Both show an RTL path, left-pointing chevron, raised current item and a home marker; Norato keeps its yellow emphasis, semantic link colors and Button page hierarchy.
- [x] Historical pre-correction measurement: the generic Norato specimen was 584×136px on desktop and 343×136px at 390px; the 320px page had no overflow and the trail scrolled internally. The frame-height mismatch was corrected in the 2026-11-09 follow-up below.

## Runtime and accessibility

- [x] Plain/Glass, Small/Medium/Large, Chevron/Slash and expanded/collapsed controls were exercised; each sampled link/disclosure remains 48px high.
- [x] Six-step RTL path shows first, ellipsis, final parent and current page. Disclosure exposes the three middle links; pointer click and Enter toggle it. `aria-expanded`, valid `aria-controls`, one `aria-current="page"`, named `nav` and ordered list semantics were verified.
- [x] Keyboard tab reaches the disclosure and computes a 2px focus outline. Static specimen contains no interactive descendants. Browser console has no recorded errors.
- [x] Browser cycled all 24 composed configurations (Plain/Glass × Small/Medium/Large × Chevron/Slash × collapsed/expanded) and confirmed each control state. Screenshots were visually sampled at Glass/Small/Slash and Glass/Large/Slash; no direction, clipping or stretch regression was observed.
- [ ] Exhaustive 42-part visual matrix and independent screen-reader review remain open; maturity stays Adapted.

## Narrow live trail scrollbar — 2026-11-14

- [x] Root cause confirmed in the live render: the narrow Breadcrumbs list uses horizontal overflow and had no scrollbar-specific styling, so browser scrollbar chrome appeared beside the path.
- [x] Added scoped scrollbar suppression for Firefox, legacy Microsoft browsers, and WebKit without changing `overflow-x: auto` or item sizing.
- [x] Fresh narrow local screenshot shows the browser scrollbar chrome is gone while the full natural labels, RTL sequence and left-facing separators remain.
- [x] Scrolling the path left and right still moves its contents; opening the disclosure exposes its three hidden links, Space closes it, and Tab reaches the next visible link after the change.
- [x] Exact 390px/320px post-change geometry and matched-reference re-capture are now recorded below.
- [ ] Independent screen-reader review remains open; this CSS correction does not close Breadcrumbs DoD.

## Post-scrollbar matched mobile geometry — 2026-11-14

- [x] At an actual 390×844 viewport, the local and design-reference specimen frames both measure 327×300px at x=24px. The local document measures 375/375px client/scroll width.
- [x] At an actual 320×844 viewport, both specimen frames measure 257×300px at x=24px. The local document measures 305/305px with no horizontal overflow. The reference document measures 305/326px because its surrounding navigation extends 21px beyond the viewport; its specimen remains bounded.
- [x] Fresh same-viewport screenshots confirm matching dotted frame proportions, centered RTL path, and current-item emphasis. Norato preserves its 48px runtime targets and yellow brand accent; the static specimen has no visible stretch or clipping.
- [ ] This geometry comparison does not close the exhaustive 42-part hover/focus matrix or independent screen-reader review.

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
- [x] Matched mobile reference/local recapture: at 390×844 both frames are 327×300px at x=24; at 320×844 both are 257×300px at x=24. Local document widths match client widths (375px and 305px); RTL, left-pointing separators and intrinsic trail layout remain.
- [ ] Full hover/focus visual matrix and independent screen-reader review remain open.

## Live hover/focus combinations — 2026-11-14

- [x] Fresh local browser review exercised all 12 Style × Size × Separator combinations in the collapsed path: Plain/Glass × Small/Medium/Large × Chevron/Slash.
- [x] In every combination, the visible link and revealed middle link showed the Norato pale-yellow hover surface; keyboard focus reached the disclosure and a hidden link with RTL preserved. Space opened and closed the disclosure, and `aria-expanded` returned to `false`.
- [x] The disclosure focus indicator computed to a 2px dark-amber contrast outline and 2px Norato-yellow halo. Each route kept exactly one `aria-current="page"` and RTL direction.
- [ ] This interaction sample does not cover all 42 documented part/state variants or provide an independent screen-reader review; Breadcrumbs remains Adapted.

## Disclosure hover — 2026-11-14

- [x] Fresh browser comparison confirms the reference documents Hover as pointer-over; it does not prescribe the fill color. Before correction, the Norato disclosure stayed at `rgb(255, 248, 224)` both at rest and under hover in all three sizes.
- [x] The Norato adapter now changes the hovered disclosure to `#FDC101` with primary text and restores the pale-yellow resting fill when the pointer leaves. All six Style × Size combinations (Plain/Glass × Small/Medium/Large) pass; the target remains 48px.
- [x] Keyboard Space still opens/closes the route; focus-visible retains the 2px amber outline and 2px yellow halo without adopting the pointer-hover fill.
- [ ] Exhaustive 42-part state coverage and independent screen-reader review remain open; family maturity remains Adapted.

## Separator size/type matrix — 2026-11-14

- [x] Fresh local browser review covers all six Small/Medium/Large × Chevron/Slash combinations in RTL.
- [x] Each collapsed trail exposes exactly three decorative separators with `aria-hidden="true"`. Chevron stays a 16×16px left-pointing SVG (`m10 3-5 5 5 5`); Slash remains `/` at all sizes.
- [ ] This closes only the separator submatrix; remaining 42-part visual coverage and independent screen-reader review keep the family DoD open.

## Fresh specimen comparison — 2026-11-16

- [x] Opened the local Breadcrumbs page and the user-provided visual reference in separate browser tabs. Both show the same Persian trail structure: home at the right, left-facing separators, and the current page at the left; the local dotted specimen frame is visible without obvious clipping at the current narrow view.
- [ ] The two captures used different viewport sizes, so this review is structural/visual only and does not establish matched dimensions. Exact 390px/320px post-change bounds remain open in the narrow-path scrollbar checklist; full 42-part coverage and independent screen-reader review remain open.
