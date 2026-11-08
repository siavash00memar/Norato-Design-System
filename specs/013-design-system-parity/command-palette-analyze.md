# Command Palette — Analyze

## Sources inspected

- Live design reference `#command-palette` page and screenshot at 1265×720: panel centered near x411–859, y337; about 448×245 in the rendered desktop page, inside the 628×330 dotted specimen. The written spec says 600px maximum and 15% viewport offset; actual preview is column constrained. It shows search+Esc, Suggested group, New project and Settings rows with shortcuts, separator, and keyboard hints footer.
- design reference's page text: 3 components, 15 variants; palette Default/Results/Empty/Loading; row Command/Navigation/Recent × Default/Active/Disabled; Kbd Small/Medium; max eight results per group.
- `docs/component-contracts/command-palette.md`: proposed contract is stale and names blue focus tokens and a site integration requirement.
- `packages/components/src/catalog.ts`: proposed, no adapter/export/usage key. `scripts/check-component-catalog.mjs` owns explicit usage allowlist.
- `apps/vue/src/ComponentSpecimen.vue`: legacy glyph-based specimen must be replaced with inert design and custom SVG icon components.
- `apps/vue/src/App.vue`, `usage-examples.ts`, and `ContractVisualShowcase.vue`: follow explicit component branches and Button-aligned contract sections.
- `packages/vue/node_modules/reka-ui/src/Dialog/index.ts` and `Combobox/index.ts`: Reka exports accessible Dialog and Combobox primitives; there is no dedicated command palette primitive. Use Dialog for modal lifecycle; use one purpose-built listbox inside its content rather than a nested popup.
- `NoratoCombobox.vue` and `NoratoSidebar.vue`: existing local patterns for Reka roots, controlled state and Dialog composition.

## Conflict/risk register

- Existing contract says the application itself uses the palette; no app-shell command routing or global action system exists. Keep adapter host-controlled and emit selected data; never invent site navigation side effects.
- Avoid default browser select/menu UI. Search and results are custom semantic HTML inside the Reka Dialog.
- Confirm global shortcut ignores IME composition and editable hosts; configurable false override protects conflicting applications.
- 320px/mobile and independent SR evidence must not be inferred from the desktop match.
