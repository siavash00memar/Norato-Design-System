# Chip — DoD

## Acceptance contract

- Separate `filter` and `input` modes prevent selectable chips from being confused with removable values.
- Filter uses a controlled `modelValue`, native button and `aria-pressed`; input mode exposes one clearly named remove button and emits `remove(label)`.
- Default glass surface has a 1px `#E8E8E8` border; hover and selected use Norato yellow; disabled is neutral and focus is a visible 2px yellow ring. No black selected fill or blue accent.
- Four visual sizes remain intrinsic at 24/28/32/36px while interactive targets remain at least 48px.
- RTL is default; the leading icon appears on the right and remove on the left. Explicit LTR is supported.
- Long labels truncate without stretching the pill. Documentation and live playground follow the Button page structure.

## Visual and behavior review

- [ ] Compare the Button-style specimen and all 20 size × state cases against the selected component reference in the same desktop viewport.
- [ ] Filter toggles with Space and Enter; `modelValue`, `aria-pressed`, selected style and generated example stay synchronized.
- [ ] Input remove fires once with the correct label; disabled prevents removal; focus returns/continues in the expected order.
- [ ] Verify default, hover, selected, disabled, and focus visually; confirm visible size and 48px hit targets.
- [ ] Check leading icon and remove placement in RTL and LTR, long-label truncation, and 390/320px overflow.
- [ ] Independently inspect screen-reader naming and role.

## Technical gates

- [ ] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build, and `git diff --check` pass.
- [ ] Repository scan contains no prohibited reference-name strings.

## Evidence

The adapter, catalog/export/usage integration, live playground, static specimen, contract, 20-case matrix and tokens are implemented. DoD remains open until browser comparison and interactive/responsive/accessibility checks are recorded.
