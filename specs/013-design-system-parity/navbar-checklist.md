# Navbar — Definition of Done

## Follow-up: 41-state Variants gallery (2026-11-10)

- [x] Render six static groups totaling 41 examples: Navbar 9, Mobile Header 8, Nav Link 20, Brand 2, Mega Menu 1 and Mobile Menu 1.
- [x] Browser review at desktop confirms RTL, visible state names, active/hover/disabled/focus distinction, and no duplicate generic Variants gallery.
- [x] Keep examples inert and preserve the separate live Playground; token/catalog/TypeScript/build/diff checks pass.
- [x] At 390×844 and 320×844, all four mobile header types remain within the available content width; document and live Navbar playground have no horizontal overflow. Mobile header heights: Default/Back 65px, Search 130px, Large Title 154px. Back, menu and search targets are at least 48px.
- [ ] Keep Navbar family DoD open until remaining responsive and assistive-technology checks pass.

- [x] design reference composition and exact visible behavior recorded; Norato's own palette preserved.
- [x] All nine desktop layout/style combinations are represented and measured without overlap or viewport overflow; mobile type/style combinations are implemented but await narrow-viewport verification.
- [x] Public adapter and browser tree confirm RTL/navigation semantics, nested links, current-page semantics, disabled behavior and consumer slots.
- [x] Keyboard review: Enter opens the Products submenu; Escape closes it and restores focus to the trigger. Screenshot review after the color refinement shows one yellow focus outline.
- [ ] Measure desktop nav and action target dimensions; reduced-motion has a CSS rule.
- [x] Source audit confirms desktop brand link, brand mark, nav links and NoratoButton actions use the shared 48px minimum-target token; menu/back buttons use 48×48px, and the `prefers-reduced-motion` rule disables transition/animation motion.
- [ ] Exact live DOM width/height for each desktop target is not exposed by the current browser observation surface, so the rendered-box measurement remains open. A same-viewport screenshot visually confirms the controls are not compressed.
- [x] App, Website and Centered align correctly; all three styles were measured as bounded, and Transparent text/link/action contrast was visually validated on the Navbar specimen's warm neutral host surface.
- [x] At both 390×844 and 320×844, the drawer fits the viewport (at 320px: 288×844, aligned to the RTL edge); Escape closes it and returns focus to the menu trigger. All four mobile header variants fit without horizontal overflow.
- [x] Button-style page structure confirmed in browser: inert preview, executable playground, synchronized copy control and nine contract sections.
- [x] Desktop 1280×720 comparison/measurements completed against design reference. Same-viewport mobile comparison and full component family/state matrix remain open.
- [ ] Complete keyboard/focus/current/disabled-link coverage, outside action, controlled search/Back and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass. Build retains the existing Vite advisory for a JS chunk above 500KB; no Navbar-specific automated test suite exists.
- [ ] Catalog, contract, API exports, primitive map, usage, Figma rules, request checklist and error log agree; remaining work is disclosed.
- [x] Adapter checkpoint committed and pushed as `67a4885`; local `master` and `origin/master` matched. The unrun mobile DoD items remain open.

- [x] At live desktop Navbar, verified the grid/home SVG icons, open-menu upward chevron, current link's yellow container/dark text, and no document overflow.

## Accent correction — 2026-11-07

- [x] Static and live primary CTA plus brand mark use Norato yellow with dark text; no blue primary action remains.
- [x] Navbar specimen uses a warm/neutral dotted wash, bounded by its tokenized frame; blue remains only in link/informational semantics.
- [x] Current, open, and hover navigation states remain yellow across pill/underline styles; keyboard focus keeps a clear 2px indicator.
- [x] Compare design reference and Norato at matched desktop 1280×720 and mobile 390×844; mobile 320px and all four header types are checked without overflow where supported.
- [ ] Recheck the complete current/disabled/focus link matrix; mobile click-outside, RTL and target dimensions passed. Independent screen-reader review remains open.
- [ ] Run request-validation checklist and technical gates; push and verify remote parity. Keep Navbar maturity Adapted while accessibility DoD remains open.
- [x] Static Navbar inner row is ~50px at desktop/mobile, nearly fills the available frame width, Brand/current link/CTA stay on one mobile row, and runtime action/link hit targets stay >=48px.
- [x] At a 320px viewport, the documentation root fits its visible client width without a horizontal scrollbar; Navbar menu and action targets remain at least 48px.
- [x] Search input updates the controlled Vue model, Back emits its documented event, and the playground reports that interaction.

## Focus ring refinement — 2026-11-09

- [x] Browser keyboard review confirmed Enter opens the Products mega menu; Escape closes it and returns focus to its trigger.
- [x] Screenshot exposed blue focus styling on the open trigger. Replaced Navbar's blue contrast outline with the Norato yellow accent and removed the extra blue border override so focus uses one consistent outline.
- [ ] Recheck the updated yellow focus ring and mobile keyboard/focus states; independent screen-reader review remains open.

## Mobile drawer and disclosure live recheck — 2026-11-15

- [x] In the local RTL Navbar playground, opened the mobile navigation dialog; the accessibility tree exposed its named dialog, close button, navigation list, links and action buttons.
- [x] Expanded «محصولات»; its three child links and disabled item appeared in the nested list. Escape closed the dialog and restored focus to the mobile navigation trigger.
- [ ] This narrow embedded-browser check does not replace independent screen-reader review, outside-dismiss testing, desktop geometry/current-link styling, or the complete responsive state matrix.

## Transparent contrast live recheck — 2026-11-15

- [x] At 1280×720, the live Website Navbar was switched from Bar to Transparent on the specimen's warm dotted host background. Brand, navigation links, active link, and primary action remained legible without adding a local opaque fill or changing the Norato yellow accent.
- [x] The playground style was returned to Bar afterward; the generated Vue snippet reflected both selected styles during review.
- [ ] Exact desktop link/action box measurements, the full responsive combination matrix, and independent screen-reader review remain open.

## Mobile drawer disabled-state recheck — 2026-11-16

- [x] At the live local Navbar playground in its narrow embedded viewport, opened the mobile drawer. The accessibility tree exposed a named dialog, close button, navigation list, RTL links, primary action and account action; focus landed on the close button.
- [x] Escape closed the dialog and focus returned to the mobile-navigation trigger.
- [x] Enabled the playground's global Disabled setting. The mobile-navigation trigger became disabled in the accessibility tree; activating it left the dialog closed. Restored Disabled to off and confirmed the default Website / Bar / Default / Bar / Pill / Medium playground values and submenu-on state.
- [x] Fresh local screenshot shows the mobile brand/menu row remains inside the narrow viewport without visible stretching or clipping. Reference screenshot was refreshed at desktop width, so this pass does not claim a matched-viewport visual comparison.
- [ ] Outside-click dismissal, desktop geometry/current-link styling, the full responsive state matrix, and independent screen-reader review remain open.

## Mobile drawer outside-dismiss recheck — 2026-11-16

- [x] At the local narrow Navbar playground, the mobile menu opened as the named «ناوبری موبایل» dialog, with its close button focused and RTL links/actions visible.
- [x] Clicking the dimmed area outside the drawer closed the dialog and restored focus to the «ناوبری موبایل» trigger; the route remained `#component-navbar`.
- [x] The playground remained Website / Bar / Default / Bar / Pill / Medium with submenu enabled and Disabled off.
- [ ] This interaction check does not close exact outside-dismiss visual comparison, the complete responsive state matrix, desktop geometry/current-link styling, or independent screen-reader review.
