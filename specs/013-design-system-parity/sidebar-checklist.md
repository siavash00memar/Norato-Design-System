# Sidebar Checklist

- [ ] design reference Sidebar 42 variants/6 parts represented or intentional Norato mapping documented.
- [ ] Preview inert, bounded, visually proportional and same viewport compare performed.
- [ ] Desktop expanded/collapsed, Glass/Bar, active/disabled/focus and child links.
- [ ] Keyboard group toggles; active aria-current; focus ring and accessible collapsed labels.
- [ ] Mobile modal drawer: trigger, Escape/focus restoration/outside click and no overflow.
- [ ] All interactive targets at least 48px; no stretched marks/icons.
- [ ] Usage snippet compiles against exports.
- [ ] Tokens, catalog, typecheck, build and diff checks pass.
- [ ] Independent screen-reader review documented if available.

## Sidebar — implementation checkpoint (2026-11-02)

- [x] Added public NoratoSidebar Vue adapter, Button-style Playground, copy example, inert specimen with dedicated bounded CSS, 42-part design reference contract, token/primitive/catalog/export records, and API/accessibility docs. Legacy .sample-sidebar is no longer rendered; dedicated selectors have intrinsic icon sizes and fixed panel bounds.
- [x] design reference reference inspected at 1280×720: six component parts, 42 variants, 3px right active marker, tooltip labels when collapsed, 2px focus ring, max two submenu levels. Local 1280×720: document 1265px, specimen frame 494×288 (column constrained), specimen panel 220×216; design reference frame about 628×296 and panel about 214×220. The local panel retains its proportions rather than stretching across the frame. Interactive links have 48px block size and exactly one current page in the default playground.
- [x] At local 499×932, mobile trigger opened a labeled Reka Dialog containing nav links; close button closed it. At desktop, collapsing retained 48px links with accessible labels and titles; control restored to expanded.
- [ ] Exact 390px/320px compare could not be set in available browser. Escape, outside click/focus restoration, expanded/collapsed × Glass/Bar combinations, all design reference state matrix, screen reader and host route behavior require more verification; maturity stays Adapted.
- [ ] Required technical gate commands being rerun after final geometry adjustment.

## Browser and technical record (2026-11-02)

- [x] design reference desktop parts/variants inspected and local desktop/mobile renders were previously exercised. Static specimen geometry adjusted to avoid vertical stretching.
- [x] Token checker, component catalog checker, Vue typecheck and production build passed after fixing malformed color token; build has advisory for JS chunk >500KB. `git diff --check` passed.
- [ ] This continuation's browser bridge returned `browser.user is unavailable`; no fresh post-fix screenshot was possible. Escape, outside click/focus restore, exact narrow viewports, full state matrix and screen-reader review remain open. Sidebar stays Adapted.
- [x] Fresh browser follow-up at desktop: selecting nested `بایگانی` keeps the Sidebar page open, updates the live selection status, preserves the `پروژه‌ها` parent label, and visibly distinguishes the selected child with the Norato yellow surface. The playground intercepts only anchor navigation; the reusable adapter still emits `navigate(item)` and renders normal href links.

## Sidebar — browser follow-up (2026-11-09)

- [x] Fresh desktop browser review confirmed Bar style renders as a flat sidebar with the active item marked by a pale-yellow surface and yellow edge marker; Glass style had already been reviewed at desktop.
- [x] Turning the playground's disabled control on removed navigation links from the accessibility tree, rendered labels as disabled content, and disabled the collapse button. Turning it off restored links and the enabled collapse control.
- [x] Collapsing the sidebar changed the control's accessible name/state and kept the remaining item links exposed with their Persian accessible names; expanding restored section headings, nested links, and footer content.
- [ ] Exact 390px/320px comparison, Glass/Bar × expanded/collapsed screenshots, keyboard activation of group controls, mobile Escape/outside-click/focus restoration, active `aria-current`, and independent screen-reader review remain open.

## Sidebar — icon and palette refinement

- [x] Replaced font-dependent collapse/expand, mobile menu, and close characters with intrinsic 20px SVG icons. RTL collapse points toward the rail and expand points into the content area; the button's Persian accessible name and expanded state remain unchanged.
- [x] Changed the brand mark and user avatar from blue to the Norato pale-yellow surface with primary text. Focus contrast remains on its dedicated high-contrast token.
- [x] Fresh browser render shows the static specimen and live Sidebar brand/avatar on pale yellow with dark text. The live collapse control changed from “جمع کردن نوار کناری”/expanded to “باز کردن نوار کناری”/collapsed; expanding restored section headings and child links. Both directions use the new SVG paths.
- [ ] Mobile trigger/close SVGs are present in source but are not visually exercised under the mobile breakpoint yet; exact 390px/320px, modal dismissal/focus restoration and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue TypeScript validation, Vue production build, `git diff --check`, and repository scan for the prohibited reference name passed after the icon and palette adjustments.

## Sidebar — mobile child navigation

- [x] Mobile drawer now renders nested child links, carries `aria-current="page"` onto the active child, and presents disabled children without link semantics; activating a child uses the same navigate event and closes the dialog.
- [x] Disabled top-level entries in the mobile drawer now retain `aria-current="page"` when they are the current route, matching the desktop semantics.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass after the mobile navigation changes.
- [ ] Browser test at 390px/320px, Escape/outside click/focus restoration, and screen-reader review remain open.
