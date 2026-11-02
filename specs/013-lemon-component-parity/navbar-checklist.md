# Navbar — Definition of Done

- [x] Lemon composition and exact visible behavior recorded; Norato's own palette preserved.
- [x] All nine desktop layout/style combinations are represented and measured without overlap or viewport overflow; mobile type/style combinations are implemented but await narrow-viewport verification.
- [x] Public adapter and browser tree confirm RTL/navigation semantics, nested links, current-page semantics, disabled behavior and consumer slots.
- [ ] Desktop nav links measure 48px minimum; Enter opens the submenu and Escape closes it while restoring trigger focus. Focus ring appears clearly; action target dimensions remain to be measured. Reduced-motion has a CSS rule. Mobile dialog behavior awaits narrow-viewport browser verification.
- [ ] App, Website and Centered align correctly; all three styles were measured as bounded, but Transparent readability still depends on host background and needs visual validation.
- [ ] Mobile drawer and all mobile header variants fit 390px and a narrow 320px viewport without horizontal overflow.
- [x] Button-style page structure confirmed in browser: inert preview, executable playground, synchronized copy control and nine contract sections.
- [x] Desktop 1280×720 comparison/measurements completed against Lemon. Same-viewport mobile comparison and full component family/state matrix remain open.
- [ ] Keyboard, focus, Escape, disabled/current links, RTL and partial accessibility tree verified in browser; outside action, controlled search/Back and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass. Build retains the existing Vite advisory for a JS chunk above 500KB; no Navbar-specific automated test suite exists.
- [ ] Catalog, contract, API exports, primitive map, usage, Figma rules, request checklist and error log agree; remaining work is disclosed.
- [x] Adapter checkpoint committed and pushed as `67a4885`; local `master` and `origin/master` matched. The unrun mobile DoD items remain open.

- [x] At live desktop Navbar, verified the grid/home SVG icons, open-menu upward chevron, current link's yellow container/dark text, and no document overflow.
