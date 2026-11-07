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

## Accent/parity follow-up — 2026-11-07

1. Change the inert Navbar CTA and brand mark to Norato yellow/dark, and change its blue-dominant dotted wash to a warm/neutral semantic gradient.
2. Align runtime brand mark and active/open/hover states with the same rule while keeping blue for informational counts and link semantics.
3. Verify the Lemon/Norato sample at matched desktop and mobile viewports, then test a primary link's pointer/keyboard focus and the submenu's Enter/Escape restoration. Continue through all mobile header types and widths 390/320 where browser control permits.
4. Record actual passed/open items in checklist, request validation and error log; run repository gates and push each completed checkpoint.
5. Reduce vertical padding/minimum height on the inert sample row only and retain a three-column mobile composition so its CTA stays on the same row; keep Brand/current link/CTA at the 48px Norato visual target, then recapture desktop and mobile.
6. Widen the inert row to the available specimen width and reduce only the outer mobile frame inset, then confirm the row remains bounded at 390px and 320px.
7. Remove the documentation app's fixed 320px body minimum that creates horizontal overflow at a 320px viewport; validate root width and Navbar targets at that breakpoint.
8. Expose the existing Back event in the playground's status counter and exercise it alongside the controlled Search input so both mobile contracts have direct browser evidence.
