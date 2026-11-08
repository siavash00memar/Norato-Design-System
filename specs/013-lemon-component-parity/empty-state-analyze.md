# Empty State — Analyze

## Repository evidence

- `packages/components/src/catalog.ts` currently records Empty State as Adapted with no adapter or usage key.
- `packages/vue/src/index.ts` does not export Empty State APIs; the primitive map has no Empty State entry.
- `apps/vue/src/ComponentSpecimen.vue` renders a blue striped glyph, title, description and one hard-coded button. The component sample does not use the Button dotted preview frame or its Default marker.
- `apps/vue/src/component-specimen.css` has a generic `.sample-empty` block that sets a brand-blue glyph, caption color and old button height. Replace this selector in place; avoid adding overriding rules.
- `docs/component-contracts/empty-state.md` already describes Lemon's 12 + 24 variant split and RTL visual side, but does not specify an executable API, precise semantics or a validated Norato palette. Its generic focus note and blue token list are not implementation authority for this static family.
- `apps/vue/src/App.vue` uses the generic `implementationSnippet` for catalog entries with `usageKey`; add a specific playground branch like other mature families. `ContractVisualShowcase` already renders the nine Button-like sections from the contract, so no new section framework is needed.
- `packages/tokens/src/color.css` supplies Norato yellow plus semantic success/warning/error containers; `layout.css` supplies spacing, card radius, 48px control floor and typography aliases. No Empty State geometry aliases exist.
- Lemon's live `#empty-state` page reports two components and 36 variants. Its preview is a centered icon, title, description, primary/secondary actions in a dotted glass card. The visual is decorative; horizontal layout puts it at inline-start. The primary black action is a Lemon color and must become Norato yellow with dark text.

## Implementation boundary

- Add two Vue exports: `NoratoEmptyStateVisual` (decorative icon/illustration) and `NoratoEmptyState` (semantic content with visual and action slots).
- Add only semantic tokens needed for visual size, horizontal gap, container padding and responsive layout; compose existing typography, color, focus, spacing and shape tokens.
- Use native `<section>`, heading/description associations and named action slots. Keep the visual `aria-hidden`, no automatic role=alert/status and no hidden navigation behavior.
- Replace the old specimen with the public adapter inside the standard inert Button preview. Keep the live controls in a separate playground.
- Update catalog, usage key, contract, Figma rules, error log and the family-specific checklist/ledger.

## Risks and verification targets

- Stable heading/description IDs must be unique and SSR-safe.
- The default illustration must have fixed intrinsic dimensions and not inherit sizing from the specimen flex/grid.
- Ensure horizontal RTL visual alignment and LTR mirror; at mobile width, stack without clipping.
- Named action slots cannot guarantee the consumer uses an accessible name; document this requirement and use native, named actions in examples.
- Browser AX is evidence for structure, not a substitute for the independent screen-reader DoD.
