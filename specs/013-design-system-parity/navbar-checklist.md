# Navbar — Definition of Done

## Follow-up: 41-state Variants gallery (2026-11-10)

- [x] Render six static groups totaling 41 examples: Navbar 9, Mobile Header 8, Nav Link 20, Brand 2, Mega Menu 1 and Mobile Menu 1.
- [x] Browser review at desktop confirms RTL, visible state names, active/hover/disabled/focus distinction, and no duplicate generic Variants gallery.
- [x] Keep examples inert and preserve the separate live Playground; token/catalog/TypeScript/build/diff checks pass.
- [ ] Verify wrapping and overflow at narrow widths; the current browser session did not allow setting a viewport.
- [ ] Keep Navbar family DoD open until remaining responsive and assistive-technology checks pass.

- [x] design reference composition and exact visible behavior recorded; Norato's own palette preserved.
- [x] All nine desktop layout/style combinations are represented and measured without overlap or viewport overflow; mobile type/style combinations are implemented but await narrow-viewport verification.
- [x] Public adapter and browser tree confirm RTL/navigation semantics, nested links, current-page semantics, disabled behavior and consumer slots.
- [x] Keyboard review: Enter opens the Products submenu; Escape closes it and restores focus to the trigger. Screenshot review after the color refinement shows one yellow focus outline.
- [ ] Measure desktop nav and action target dimensions; reduced-motion has a CSS rule. Mobile dialog behavior awaits narrow-viewport browser verification.
- [ ] App, Website and Centered align correctly; all three styles were measured as bounded, but Transparent readability still depends on host background and needs visual validation.
- [ ] Mobile drawer and all mobile header variants fit 390px and a narrow 320px viewport without horizontal overflow.
- [x] Button-style page structure confirmed in browser: inert preview, executable playground, synchronized copy control and nine contract sections.
- [x] Desktop 1280×720 comparison/measurements completed against design reference. Same-viewport mobile comparison and full component family/state matrix remain open.
- [ ] Keyboard, focus, Escape, disabled/current links, RTL and partial accessibility tree verified in browser; outside action, controlled search/Back and independent screen-reader review remain open.
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
