# Tree View — Analyze

## Evidence inspected

- design reference `#tree-view`: two guide-line variants; rows combine folder-open/folder-closed/file × levels 1–3 × default/hover/selected/disabled/focus. RTL folder chevron points left when closed. Each tree depth advances 20px from the right; files add 16px alignment offset. Focus ring is a 2px outline with 2px offset. design reference advises a practical depth of 3–4.
- Current Norato contract `docs/component-contracts/tree-view.md` is Proposed, describes the same two variants and 45 row states, but has no executable API, calls out brand-blue tokens, and does not define control sizes.
- Current catalog maps Tree View to a glyph-only specimen, has no Vue adapter or usage example, and the primitive map still says a custom implementation is needed.
- Installed Reka UI is 2.11.0 and exports `TreeRoot` and `TreeItem`. Its root provides roving focus, Up/Down/Home/End navigation and typeahead; items provide direction-aware Left/Right expansion/parent navigation, Enter/Space selection, `aria-level`, `aria-expanded`, `aria-selected`, `aria-disabled`, and exclude disabled items from roving focus. The root emits controlled expanded state. No multi-select is needed for the agreed design reference single-selection design.
- Reka determines folder-ness from truthiness of `getChildren(item)`. The Norato adapter must return `undefined` for empty child arrays so empty folders render as files.
- Reka `TreeItem` row activation selects and toggles in one event. The contract therefore keeps the folder row behavior and provides a separate chevron activation that only toggles and stops row propagation.
- Existing `docs/error-log.md` entries ERR-016–023 concern a retired checkbox-tree experiment with child selection and depth-specific CSS overrides; those rules conflict with the current design reference single-select Tree View and must not be carried over. Their reusable warning is to keep indentation and row geometry depth-aware and avoid stacking old selectors.
- The current app has shared Button-ordered contract sections, but its built-in showcase has no Tree View renderer or playground branch. New visuals should be scoped, tokenized, compact in the inert specimen, and interactive only in the dedicated playground.

## Decision and implementation boundary

- Use Reka `TreeRoot`/`TreeItem` for tree semantics and keyboard/focus management; keep stable string IDs, selected ID, expanded ID list, icon API, visuals and tokens in Norato.
- Keep the component single-select. Do not import Checkbox, bubble/propagate selection, add drag/reorder, or expose multiselect.
- Use recursive rows with a 48px minimum interactive target; render a bounded compact preview separately from the runtime control.
- Supersede the contract's obsolete blue focus token with Norato yellow and document explicit RTL, default guide-lines off, and single selection.

## Risks to verify

- The accessibility tree must contain one tree root and nested treeitem/group semantics without duplicate list roles.
- Controlled selected/expanded values must round-trip by stable ID, including nested nodes and disabled nodes.
- Empty children must remain leaves; the chevron must not select; row click must not double-toggle.
- Runtime rows need 48px hit targets while preview rows remain compact; verify at desktop and 390/320px without horizontal overflow or stretched icons.
- Reka maps Home/End to first/last focus intent in its shared roving-focus utility; validate the actual tree navigation in browser instead of duplicating it.

## DoD gate

No implementation is declared complete until design reference/Norato visual comparison, RTL, keyboard/focus/disabled/selection behavior, responsive widths, accessibility tree, project gates, and GitHub checkpoint are recorded in the request checklist.

## Follow-up audit — 2026-11-09

- Matched local and reference browser screenshots at the same window size. The preview structure and default tree contents match; the Norato documentation column constrains its frame to about 577×288 screenshot pixels while the reference frame is about 630×299. Tree panels remain similarly centered and sized (about 256×129 vs 258×134).
- Keyboard focus revealed a browser-default dark outline on the outer TreeItem in addition to the intended yellow row ring. Cleared the outer root outline/shadow; the fresh screenshot now shows only the tokenized yellow ring.
- Found that `expandedIds` defaulted to an empty array and forced controlled expansion. Removed that default and added `defaultSelectedId`/`defaultExpandedIds`, matching the Reka TreeRoot API. Browser Playground now covers both controlled and uncontrolled models and keeps generated usage in sync.
- Browser review confirms RTL parent/child movement, Up/Down/Home/End, Enter/Space, typeahead, disabled-item skip, pointer folder select+expand, chevron-only expansion, global disabled and Tab entry/exit. Exact mobile widths, pointer-only hover, reduced-motion emulation and independent screen-reader review remain open.
