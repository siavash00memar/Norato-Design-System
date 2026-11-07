# Menu — Specify

Implement a public Vue 3 `NoratoMenu` action-menu adapter and a Button-structured documentation page. The preview contains a small number of grouped actions, with an optional description, icon and shortcut per item, nested submenus, disabled items, separators and a final destructive action.

## Proposed runtime contract

- `id: string`, `label: string`, `items: NoratoMenuItem[]`.
- `size?: 'small' | 'medium' | 'large'`, `dir?: 'rtl' | 'ltr'`, and `open?: boolean` with `update:open` support for controlled use.
- Each item has a stable `value`, `label`, optional `description`, `shortcut`, Vue component `icon`, `disabled`, `danger`, `separatorBefore`, and optional `children`.
- The component emits `select(value)` for leaf actions only. Parent items with children open a submenu and do not emit selection.
- The default trigger is a 48px accessible overflow button; a trigger slot may replace its visual content without removing the accessible name.
- Submenu items use nested menu semantics and their arrow points left for RTL, right for LTR.

## Acceptance

- Lemon's panel/item hierarchy remains recognizable; default/hover/focus/disabled/danger states are differentiated with Norato semantic tokens. Pointer hover is rendered independently from the keyboard-focused/highlighted row; disabled items do not acquire hover styling.
- The host can control menu visibility. Escape and selection close the menu and return focus to its trigger; outside interaction and Tab dismiss it without trapping focus.
- Arrow keys, Home/End, typeahead where supported, and nested submenu keyboard behavior are delegated to the installed Reka DropdownMenu primitive.
- Items remain in DOM and accessible order matching their visual order in RTL. Icons are on logical inline-end (right in RTL); shortcut metadata is on inline-start (left in RTL).
- The page exposes bounded inert specimen, interactive playground, copyable usage and Overview/Anatomy/Variants/Sizes/States/Parts/Usage/Accessibility/Tokens.
- The implementation has no more than eight visible leaf actions in the specimen, separates destructive Delete with a divider, and does not hide its main page action.
- At desktop and mobile, menu panel stays in viewport, has no stretched icons/rows, and no horizontal document overflow.
