# Menu — Plan

1. **Constitution:** lock RTL, token, semantics, target-size, reference and page-structure rules in `menu-constitution.md`.
2. **Specify:** define component API and observable acceptance criteria in `menu-spec.md`.
3. **Clarify:** inspect current design reference and the installed Reka public exports; record API, palette, keyboard and open uncertainties in `menu-clarify.md`.
4. **Checklist:** make visual, behavior, accessibility, responsive and technical DoD items explicit in `menu-checklist.md`.
5. **Tasks:** order concrete source, docs, catalog and validation tasks in `menu-tasks.md`.
6. **Analyze:** inspect existing menu/split-button selectors, Reka APIs, page routing/specimen structure, tokens and catalog checker before changing source. Record conflicts and risk in `menu-analyze.md`.
7. **Implement:** add the adapter using Reka DropdownMenu; add tests only if requested by the user (project validation commands remain required); build live playground, inert specimen, copyable example and contract sections; update all authoritative docs/ledgers; compare design reference/Norato in-browser; run project validation gates; commit and push this increment as the user has asked all changes to be pushed as work proceeds.

## Scope boundaries

- The work is the Menu family only; don't broaden it into Command Palette or site-navigation menus.
- Keep the action-menu item data model JSON-friendly except for optional Vue icon components.
- Preserve Reka behavior and override only styling/layout needed for Norato.
- Do not mark DoD passed for screen-reader/mobile conditions that weren't directly examined.
