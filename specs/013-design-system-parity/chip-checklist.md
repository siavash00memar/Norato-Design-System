# Chip — DoD

## Acceptance contract

- Separate `filter` and `input` modes prevent selectable chips from being confused with removable values.
- Filter uses a controlled `modelValue`, native button and `aria-pressed`; input mode exposes one clearly named remove button and emits `remove(label)`.
- Default glass surface has a 1px `#E8E8E8` border; hover and selected use Norato yellow; disabled is neutral and focus is a visible 2px yellow ring. No black selected fill or blue accent.
- Four visual sizes remain intrinsic at 24/32/36/40px while interactive targets remain at least 48px.
- RTL is default; the leading icon appears on the right and remove on the left. Explicit LTR is supported.
- Long labels truncate without stretching the pill. Documentation and live playground follow the Button page structure.

## Visual and behavior review

- [x] Compared the default specimen with the selected reference at the same desktop viewport; rechecked all 20 local size × state cases for dimensions, fills, strokes, focus and semantics while retaining Norato's yellow selected state.
- [x] Filter toggles with Space and Enter; `modelValue`, `aria-pressed`, selected style and generated example stay synchronized.
- [x] Input remove emits once with the correct label; disabled prevents removal. Focus moves to Restore after removal and returns to the remove action after restoration.
- [x] Reviewed default, hover, selected, disabled and keyboard-focus visuals. CSS keeps the visual pill intrinsic and interaction target at the 48px token; removed a duplicate focus halo found in the browser screenshot.
- [x] Checked leading icon and remove placement in RTL and LTR.
- [x] A 240px semantic maximum-width token caps the Chip. In the browser, a 300+-character Persian label visibly truncates with ellipsis instead of stretching the capsule; confirmed in both Filter and removable Input modes, and generated code reflects the long label.
- [x] At 390×844 and 320×844, document widths are 375px and 305px with no horizontal overflow. A 300+ character Persian label remains capped to a 240×48px Chip in both modes. Removing it keeps the preview at 85px high, the live status text remains complete in the accessibility tree, and the 78×48px Restore action receives focus; restoring returns focus to the remove control.
- [x] Browser accessibility tree exposes the filter's pressed state and the input Chip's group label and named remove action. Removing then restoring an input Chip places focus on Restore and returns it to Remove.
- [ ] Independent screen-reader review remains unverified.

## Technical gates

- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build, and `git diff --check` pass.
- [x] Repository scan contains no prohibited reference-name strings.

## Evidence

The adapter, catalog/export/usage integration, live playground, static specimen, contract, 20-case matrix and tokens are implemented. Long-label and narrow-viewport browser checks pass. The independent screen-reader review remains open for strict Final DoD.
