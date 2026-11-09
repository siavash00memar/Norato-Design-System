# Tree View — Checklist / Definition of Done

## Contract and structure
- [x] Public Vue API supports controlled `modelValue`/`expandedIds` and uncontrolled `defaultSelectedId`/`defaultExpandedIds`; exports, catalog/checker, generated usage and component contract agree.
- [x] Component page follows Button's section order; inert preview and interactive playground are separate.
- [x] Figma rule, request-validation evidence, family ledger and error log reflect the focus-ring fix and current implementation.

## Visual and responsive
- [x] Same-browser-viewport captures compared frame, panel, row rhythm, indentation, icons, guides and selected state. The raster frames are about 577×288px locally and 630×299px in the reference; panels are about 256×129px and 258×134px, centered within each frame. The narrower Norato frame follows its documentation column.
- [x] Guides Off is the default, On renders the only tree-level variant, and toggling guides does not alter selection or expansion.
- [x] RTL indentation is 20px per depth; file rows add the 16px alignment offset; arrows face down/open and left/closed; folder/file SVGs keep intrinsic 20px geometry.
- [x] Default, selected, disabled and keyboard-focus states use semantic Norato colors without blue accent or stretch.
- [ ] Pointer-only hover review remains open.
- [x] At desktop, 390×844 and 320×844, Tree View and its documentation content stay within the viewport. Document widths are 375px/305px; interactive rows remain 48px high, with intrinsic 18px icons and 16px chevrons. Fixed a narrow-width overflow in the shared accessibility contract cards; Tree View and Input now both measure 305px document width at 320px.

## Behavior and accessibility
- [x] Reka TreeRoot/TreeItem produces a named tree and nested treeitem/group semantics; browser AX confirms hierarchy, expanded, selected and disabled states. Reka source supplies `aria-level` and positional metadata.
- [x] Up/Down, Home/End, Left/Right, Enter/Space, typeahead and RTL direction work; disabled rows are excluded from focus and cannot select/expand.
- [x] Pointer folder activation selects and expands; chevron toggles without changing selection; controlled and uncontrolled selection/expanded models update and generated snippets match.
- [x] Focus visibility, controlled/uncontrolled use, global disabled and keyboard Tab entry/exit work.
- [ ] Reduced-motion emulation remains open.
- [ ] Independent screen-reader review is recorded; do not close DoD without it.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [ ] Pointer-only hover, reduced-motion emulation and independent screen-reader review remain before closing the family DoD. Responsive measurements are recorded; the shared accessibility card correction is verified on Tree View and Input.
