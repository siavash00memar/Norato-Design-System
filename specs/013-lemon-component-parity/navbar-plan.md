# Navbar — implementation plan

1. Audit `.sample-navbar` component specimen and its selectors; replace the text-only generic miniature with a dedicated inert Lemon-shaped sample and remove obsolete responsive hide rules.
2. Implement `NoratoNavbar` with the documented data contract, desktop Reka NavigationMenu, mobile Reka Dialog drawer, nested groups, Brand/action slots, four mobile header types, three desktop styles, controlled Search, current/disabled semantics and RTL defaults.
3. Keep fixed geometry intrinsic and bounded; use semantic tokens, 48px targets and established 700px mobile breakpoint. Avoid page-local raw visual values and verify no stretch/overflow.
4. Add an executable playground to the Button-style detail page and generate synchronized copyable usage for default, centered, app and submenu configurations.
5. Export the adapter/types; update component contract, catalog status/description, primitive map, usage snippet, Figma rules and navigation docs.
6. Compare the Lemon and Norato pages in the same desktop and mobile browser viewports. Exercise link tab order, current/disabled links, submenu open/close, Escape, outside action, focus restoration, mobile drawer, all mobile headers/styles, search binding, Back event, RTL, reduced motion and target sizes.
7. Run automated behavior coverage where needed, repository technical gates, inspect `git diff --check`, record every result and remaining limitation. Keep maturity truthful, commit/push and verify remote parity.

## Primitive evaluation

- Installed Reka UI NavigationMenu (2.11.0): selected for desktop web navigation and submenu keyboard support; it preserves navigation-link semantics rather than imposing an application menubar. Source reviewed: https://reka-ui.com/docs/components/navigation-menu.
- Installed Reka UI Dialog: selected for modal mobile drawer, focus trap, accessible title/description and Escape close. Source reviewed: https://reka-ui.com/docs/components/dialog.
- shadcn-vue: no shadcn package is installed. The repository already uses Reka UI as its accessible Vue primitive layer; adding a second primitive system is not justified.
