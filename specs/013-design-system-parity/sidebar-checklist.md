# Sidebar Checklist

- [ ] design reference Sidebar 42 variants/6 parts represented or intentional Norato mapping documented.
- [x] Preview is inert and bounded; fresh same-viewport desktop and mobile geometry comparison recorded in the 2026-11-10 specimen parity follow-up.
- [x] Desktop expanded/collapsed, Glass/Bar, active/disabled/focus and child links verified in the live playground.
- [x] Keyboard collapse/expand, direct and nested `aria-current`, 2px focus ring and accessible collapsed labels verified.
- [x] Mobile modal drawer trigger, Escape/focus restoration, outside dismissal, child selection and no-overflow checks verified at 390px/320px.
- [x] All sampled interactive targets are at least 48px; icons and marks retain intrinsic geometry.
- [ ] Usage snippet compiles against exports.
- [x] Tokens, catalog, typecheck, build and diff checks pass (fresh recheck 2026-11-10; see technical recheck below).
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
- [ ] The static preview frame and composition are now matched and recorded; Glass/Bar × expanded/collapsed live screenshots, keyboard activation of group controls, active `aria-current`, and independent screen-reader review remain open.

## Sidebar — icon and palette refinement

- [x] Replaced font-dependent collapse/expand, mobile menu, and close characters with intrinsic 20px SVG icons. RTL collapse points toward the rail and expand points into the content area; the button's Persian accessible name and expanded state remain unchanged.
- [x] Changed the brand mark and user avatar from blue to the Norato pale-yellow surface with primary text. Focus contrast remains on its dedicated high-contrast token.
- [x] Fresh browser render shows the static specimen and live Sidebar brand/avatar on pale yellow with dark text. The live collapse control changed from “جمع کردن نوار کناری”/expanded to “باز کردن نوار کناری”/collapsed; expanding restored section headings and child links. Both directions use the new SVG paths.
- [ ] Mobile trigger/close SVGs are present in source but are not visually exercised under the mobile breakpoint yet; same-size reference screenshots and independent screen-reader review remain open.

## Sidebar — isolated mobile Dialog behavior (2026-11-10)

- [x] At CSS viewport 390×844, the live mobile trigger is visible and measures 48×48px. Activating it opens the Reka Dialog named “نوراتو”; the page remains 390/390px wide. Escape closes the dialog and restores focus to the trigger (“باز کردن ناوبری”).
- [x] At CSS viewport 320×844, the trigger remains 48×48px and the named dialog opens with a 202×844px panel. Clicking outside the panel closes it and restores focus to the trigger; the document remains 320/320px wide.
- [ ] Same-size visual comparison against the selected design reference, Glass/Bar × expanded/collapsed screenshot matrix, keyboard activation of group controls, active `aria-current`, and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue TypeScript validation, Vue production build, `git diff --check`, and repository scan for the prohibited reference name passed after the icon and palette adjustments.

## Sidebar — mobile child navigation

- [x] Mobile drawer now renders nested child links, carries `aria-current="page"` onto the active child, and presents disabled children without link semantics; activating a child uses the same navigate event and closes the dialog.
- [x] Disabled top-level entries in the mobile drawer now retain `aria-current="page"` when they are the current route, matching the desktop semantics.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass after the mobile navigation changes.
- [ ] Browser test at 390px/320px, Escape/outside click/focus restoration, and screen-reader review remain open.

## Sidebar — static specimen parity (2026-11-10)

- [x] The inert specimen now shares the Button frame class and dotted Norato background; the duplicate inset stage was removed.
- [x] At 1280×720, local frame is 635.98×300px and panel is 216×222px; the reference frame is 636×311.5px and panel is 216×221.94px. Frame height follows the project's Button 300px standard.
- [x] At 390×844, frame is 327×300px; at 320×844 it is 257×300px with document width 305/305px. The compact panel remains 216×222px at both widths.
- [x] Inert contents now show the brand, one section title, and four fixed-size SVG icon rows; no workspace or footer is added to this default sample. Active treatment uses Norato yellow.
- [ ] Live Sidebar state matrix, keyboard group activation, active `aria-current` evidence, and independent screen-reader review remain open.

## Sidebar — collapsed descendant current location (2026-11-10)

- [x] In the live desktop playground, selecting `/projects/active` and collapsing shows exactly one visible parent with `aria-current="location"`, the Norato-yellow surface and indicator; no hidden child is exposed.
- [x] Expanding restores exactly one `aria-current="page"` to the `فعال` child. Direct `/overview` remains `page` in Glass/Bar expanded/collapsed combinations.
- [x] Space toggles collapse and expansion; focus remains visible with a 2px ring. All visible item/subitem rows are 48px.
- [x] With the current child route and the Sidebar globally disabled, the collapsed parent span remains the only `location` item; anchors are absent and collapse is disabled.
- [x] Mobile dialog child selection updates status, closes the dialog, and stays on `#component-sidebar`; Escape restores trigger focus. At 390/320px, frames are 327/257×300px, triggers 48×48px, and the document does not overflow.
- [ ] Full 42-part visual state gallery and independent screen-reader review remain open.

## Sidebar — technical recheck (2026-11-10)

- [x] `pnpm check:tokens` passed (3 token files present).
- [x] `pnpm check:catalog` passed (49 unique routes, contracts, readiness records and Vue exports).
- [x] `pnpm --filter @norato/vue-app typecheck` passed.
- [x] `pnpm --filter @norato/vue-app build` passed (Vite production build completed).
- [x] `git diff --check` passed before this checklist update.
- [ ] The usage example is visible in the browser and matches the public export names; compiling the rendered documentation snippet as a standalone consumer project is not yet verified.
- [x] Six static gallery groups render the contract axes for Sidebar (4), Item (20), Sub Item (8), Section Title (2), Header (4), and Footer (4), totaling 42; samples are inert and do not add undersized interactive targets.
- [ ] Exact desktop and 390px/320px visual comparison, complete group-keyboard matrix, standalone consumer compilation, and independent screen-reader review remain open.
