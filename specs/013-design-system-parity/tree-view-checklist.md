# Tree View — Checklist / Definition of Done

## Contract and structure
- [ ] Public Vue API, selection/expansion models, exports, catalog/checker, usage snippet and component contract agree.
- [ ] Component page has Button's section order; inert preview and interactive playground are separate.
- [ ] Figma rule, request-validation evidence, family ledger and error log reflect current implementation.

## Visual and responsive
- [ ] Same-viewport design reference/Norato captures compare frame, panel, row rhythm, indentation, icons, guides and selected state.
- [ ] Guides Off/On matches the default and only documented tree-level variant.
- [ ] RTL indentation is 20px per depth; file label offset is +16px; chevrons face down/open and left/closed; icons remain intrinsic.
- [ ] Default, hover, selected, disabled and keyboard-focus states use semantic Norato colors with no blue accent or stretched rows/icons.
- [ ] Desktop, 390px and 320px have bounded content and no document overflow; interactive rows stay at least 48px.

## Behavior and accessibility
- [ ] Reka TreeRoot/TreeItem produces a named tree and correctly nested treeitem/group roles, levels, expanded, selected and disabled states.
- [ ] Up/Down, Home/End, Left/Right, Enter/Space, typeahead and RTL direction work; disabled rows cannot select/expand.
- [ ] Pointer folder activation selects/toggles; chevron toggles without duplicate select; selection/expanded models and events match.
- [ ] Focus visibility, controlled/uncontrolled use, global disabled, reduced motion and keyboard tab entry/exit work.
- [ ] Independent screen-reader review is recorded; do not close DoD without it.

## Engineering
- [ ] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [ ] Browser review and all remaining evidence are recorded before closing the family DoD.
