# Tree View — Clarify

## Decisions

- The user delegated component-level choices. No interaction/API question is pending.
- The live design reference page was inspected at `design reference 2 components, 47 item variants; Guides Off/On with Off as the selected default; 20px right-side nesting, open chevron down, closed chevron left and an extra 16px file offset; recommended depth 3–4.
- The installed Reka UI package exports `TreeRoot` and `TreeItem`. Use them for tree semantics, roving focus, selection, expansion, RTL-aware Left/Right behavior, typeahead, disabled handling and expanded state. Norato owns presentation, icons, 48px row targets, preview and the single-select ID-facing API.
- Expose selected node ID and expanded ID array rather than leaking whole node objects from the public model. Internally map the selected ID to the Reka item object.
- Support uncontrolled use with `defaultSelectedId` and `defaultExpandedIds`; explicit `modelValue`/`expandedIds` are controlled and override the respective initial defaults.
- Folder rows select and toggle on pointer activation per Reka's TreeItem behavior; the chevron is also a separate pointer target that toggles without selecting. Enter/Space select; Left/Right expand/collapse/move into parent-child; Up/Down and Home/End move focus; typeahead is supplied by Reka.
- Disabled items remain visible with `aria-disabled`, but Reka excludes them from keyboard roving focus and prevents selection/expansion. This consistent library behavior is chosen over a custom alternative.
- No multi-select or drag/reorder is added; design reference documents a single selected row and does not list either behavior.
