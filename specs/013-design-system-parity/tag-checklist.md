# Tag — DoD

## Acceptance contract

- Non-interactive status/category text; no click or tab stop.
- Norato semantic palette, with yellow retained as the brand accent and no blue accent introduced.
- Soft/outline appearance, neutral/success/warning/danger/info tones, four intrinsic sizes, optional decorative leading/trailing icons and dot.
- RTL by default; LTR can be set explicitly. No vertical or horizontal stretching for ordinary labels.
- Static preview uses the shared Button specimen frame; the executable playground follows the Button page structure.

## Visual and behavior review

- [x] Compared Norato and reference pages in the same 1905×951 browser window. The local dotted Button specimen is about 580×288px while the reference frame is about 630×300px; the different frame width follows the documentation column. Local Tag uses the same compact pill/label/dot hierarchy, with success tone adjusted to Norato's semantic palette.
- [x] Browser accessibility tree exposes the Tag as text with no interactive role or tab stop; the optional icon wrappers and status dot use `aria-hidden`.
- [x] Keyboard-operated tone control changed Success to Warning, and the code example updated to the selected value.
- [x] Enabled both optional icon positions and confirmed the preview and generated Vue sample update together. Selected Outline and Small; the sample reflected both choices.
- [x] All 40 tone × appearance × size combinations rendered from the public adapter and visually reviewed at 1905×951; small-to-xlarge size order, intrinsic label geometry, yellow info accent and status contrast were checked. Status text contrast on white is at least 4.51:1; outline and soft combinations are covered by the matrix.
- [ ] Optional icon/dot combinations, RTL/LTR ordering, long text and narrow container reviewed.
- [ ] 390px and 320px page geometry and overflow reviewed.
- [ ] Independent screen-reader review.

## Technical gates

- [x] `pnpm check:tokens` and `pnpm check:catalog` pass (49 routes/contracts).
- [x] Vue typecheck and production build pass.
- [x] `git diff --check` passes; repository-wide scan found no prohibited reference-name strings.
- [x] Removed Tag from the legacy specimen selector; the new adapter owns Tag styling.

## Evidence

Tag DoD remains open for LTR icon ordering, long-label and narrow-container checks, mobile widths and independent screen-reader review.
