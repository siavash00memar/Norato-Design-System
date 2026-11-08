# Tree View — Specify

Build `NoratoTreeView` for a single-select, hierarchical Vue 3 tree and a Button-structured documentation page.

## Public API

- `NoratoTreeNode`: stable `id`, Persian label, optional child nodes, optional disabled state, and optional Vue icon component. Nodes with children are folders; leaf nodes are files.
- `NoratoTreeView` props: stable `id`, accessible `label`, `items`, `modelValue` for the selected node, `expandedIds`, `showGuides` (default false), `disabled`, and `dir` (default rtl).
- Support `v-model` selection and `v-model:expanded-ids`; emit selection only for enabled nodes. Expose `aria-selected` for the selected node and `aria-expanded` for folders.
- Compose the installed Reka `TreeRoot`/`TreeItem` primitives for roving focus, RTL-aware Left/Right, Up/Down, Home/End, typeahead, selection and expansion. Pointer activation on a folder row selects and toggles; the chevron also toggles without selecting.
- Disabled nodes remain visible with `aria-disabled` but are excluded from Reka keyboard roving focus and cannot be selected or expanded. Global disabled disables the full tree.

## Visual contract

- Inert Default specimen: Lemon-like three-level project tree, 20px indentation per level, 16px file alignment offset, optional guide lines, folder/file SVGs and direction-correct chevrons.
- Active Norato row uses a soft yellow surface; hover uses a neutral Norato surface; focus uses a 2px Norato-yellow outline with 2px offset; disabled items use muted semantic tokens.
- Interactive rows stay at least 48px high. Static specimen rows may be compact to fit the bounded 288px Button frame.
- Use the project token system for tree indentation, icon geometry and preview layout. Do not add raw page-local styling values.
