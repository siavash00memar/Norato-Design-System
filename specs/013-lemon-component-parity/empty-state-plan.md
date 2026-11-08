# Empty State — Plan

1. **Constitution:** preserve the user-approved 48-family scope, Norato palette, RTL and Button page parity.
2. **Specify:** define public APIs, Lemon's two variant matrices, semantics and acceptance before implementation.
3. **Clarify:** inspect Lemon's live Empty State, confirm Norato-vs-Lemon color and target-size boundaries, and resolve default props/slots.
4. **Checklist:** define visual, behavior, RTL, responsive, accessibility and technical DoD before source changes.
5. **Tasks:** sequence legacy audit, token audit, public visual/component APIs, catalog/specimen/playground/docs and validations.
6. **Analyze:** inspect existing specimen selectors, tokens, package exports, catalog checker, app branch wiring, contract sections and Vue patterns; record the replacement boundary and residual risks.
7. **Implement:** remove/neutralize `.sample-empty`; build `NoratoEmptyStateVisual` and `NoratoEmptyState`; export, catalog, usage, preview, playground and nine-section docs; compare actual Lemon/Norato renders and run gates before GitHub push.

## Risks to validate

- A required `id` must be unique; repeated IDs could produce invalid title/description relationships.
- Slotted actions cannot be made accessible by styling alone; the playground must demonstrate native, named buttons and enforce a 48px minimum target.
- Dotted preview geometry belongs to the page shell. Accidentally embedding it into the public component would duplicate frames in consumer layouts.
- Illustration and icon shapes must not stretch with content or be announced as redundant decoration.
- Four visual tones must use semantic Norato colors; avoid assigning brand blue as a primary accent.
- Responsive horizontal composition may become cramped at 320px; wrap to vertical layout without overflow while preserving RTL order.
