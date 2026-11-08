# Menu — Analyze

## Sources inspected before implementation

- `docs/component-contracts/menu.md`: proposed action-menu contract; it still names the old blue focus tokens.
- `packages/components/src/catalog.ts`: Menu is Proposed and has no adapter or usage key; Stepper is the last completed family before Menu in this ledger.
- `packages/components/src/primitive-map.ts`: no Menu primitive decision exists yet.
- `packages/vue/package.json` and installed Reka declarations: `reka-ui@2.11.0` is already a direct dependency and exports the required DropdownMenu primitives; no dependency addition is needed.
- `packages/vue/src/components/NoratoSplitButton.vue`: custom menu keyboard code is local to Split Button and should not be copied into Menu; Menu supports submenus and richer row metadata.
- `apps/vue/src/ComponentSpecimen.vue`: Menu is still an inert legacy `sample-menu` with Unicode glyphs and a static `<hr>`; replace it with the actual adapter in an inert context, removing this obsolete specimen rule.
- `apps/vue/src/App.vue`: routes implementation playgrounds through explicit component-name branches; add a Menu branch and import.
- `apps/vue/src/usage-examples.ts`, `scripts/check-component-catalog.mjs`: usage snippets are keyed by catalog `usageKey` and the checker maintains an allowlist; both need the new stable key.
- `apps/vue/src/ContractVisualShowcase.vue`: generic navigation visual fallback exists, but Menu needs real adapter examples and an explicit Menu contract showcase.
- design reference live `#menu` render at desktop: dotted glass frame approximately 636×300px; open panel about 235×160px; panel centered with four leaf actions, shortcuts shown to the logical left, icons to the right, divider before a red final Delete action. design reference section text reports three sizes, four states, 27 variants total, 2px/2px focus and left-pointing RTL submenu arrow.

## Conflict and risk register

- **Pointer/keyboard highlight overlap (found in DoD review):** Reka's active descendant styling follows keyboard focus and was not guaranteed to highlight a separately hovered row. A distinct non-disabled `:hover` style is required; verify it while focus is elsewhere, including danger and disabled behavior.

- **Old sample code:** decorative Unicode glyphs are inconsistent with the adapter contract and user expectation for proper icons; remove the legacy sample and provide intrinsic SVG specimen icons through Vue components.
- **Primitive focus ownership:** Reka DropdownMenu owns keyboard navigation, typeahead, submenu and dismissal behavior. Avoid adding an overlapping custom key handler.
- **Teleport/preview containment:** a portal can escape the inert preview wrapper; render preview menu static/open without activating controls, and test that its DOM remains inert. Keep runtime playground portal behavior enabled for collision handling.
- **Small-screen fit:** a multi-column documentation shell may constrain popup width. Use collision-aware placement and bounded `max-inline-size`; test an open submenu at 390px and 320px if viewport control permits.
- **Icon payload:** Vue component icons keep package dependencies neutral, but component consumers need their own icon package. Ensure missing icons do not break row alignment and decorative icons are aria-hidden.
- **Maturity:** catalog implementation status must not be confused with DoD closure; any unrun mobile/screen-reader comparison stays open in the family ledger.
