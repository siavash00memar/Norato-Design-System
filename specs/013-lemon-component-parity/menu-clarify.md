# Menu — Clarify

No user question blocks the feature; the user previously authorized the agent to make implementation choices for the design-system work. Decisions below are bounded by the existing Menu contract, current Lemon page, Norato tokens and Vue package dependencies.

- **Reference evidence:** Lemon `#menu` currently describes a floating “⋯” action menu, icon/right + shortcut/left, optional descriptions and submenus, final red danger action, three sizes, and arrow-key navigation with a 2px focus ring. It advises grouping actions, separating delete and keeping the list to eight items or fewer. The current rendered page exposes four actions: Edit, Copy, Share and Delete.
- **Primitive:** `reka-ui@2.11.0` is a direct Vue package dependency; its installed public exports include DropdownMenu Root, Trigger, Portal, Content, Item, Separator, Sub, SubTrigger and SubContent. Use these instead of custom roving-focus/menu-dismissal code. Reka does not determine Norato visual tokens.
- **API choice:** A single `NoratoMenu` accepts an item tree and provides `v-model:open`, `select(value)`, configurable accessible label/trigger slot, item icon Vue components, descriptions, shortcuts, disabled/danger items, separators, nested children, size and `dir`.
- **Select behavior:** Only enabled leaf items emit `select`; a successful leaf selection closes the menu. Disabled items are inert. Parent items with children open a submenu, and selection does not run implicitly.
- **RTL behavior:** Use Reka direction propagation and logical CSS. Icon is on inline-end, shortcut on inline-start; the chevron points left in RTL. LTR reverses these relationships naturally.
- **Focus and dismissal:** Preserve Reka arrow-key, Home/End, typeahead, submenu, Escape, outside interaction and focus restoration semantics where the primitive provides them. Verify this in the browser before handoff.
- **Palette:** Replace stale contract blue with Norato yellow/neutral tokens; danger uses the semantic error token. Focus uses Norato's yellow 2px ring and required offset, with no blue accent borrowed from Lemon.
- **Sizes/targets:** Small/Medium/Large visually follow Lemon but rows retain a 48px minimum target, as required globally for Norato.
- **Sample:** Default specimen uses Edit, Copy, Share, a divider and Delete (four leaf actions); any submenu in the interactive fixture stays within eight leaves.
- **Remaining uncertainty:** Exact matched Lemon frame/content pixel dimensions and whether the live browser's viewport can be set are verified during visual QA, not assumed from this contract.
