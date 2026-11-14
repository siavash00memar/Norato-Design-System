# Empty State Sizes gallery — Analyze

## Evidence

- Live reference `#s-sizes` markup renders three `.sz i` samples, each 64×36px, inside a dotted stage. Labels are Small, Medium, Large.
- At the same 1265×713 viewport, Norato's `.size-visual` rendered 40×40, 48×48, and 64×64 circles. Their computed fill was `rgb(228, 242, 255)` (pale blue). This differs in both silhouette and palette.
- The same local render showed the generic States fallback drawing a blue pill/dot even though the component contract says Empty State has no independent interaction/data state.
- Browser inspection also found generic informational-blue axis chips, part indices, Usage/Accessibility markers, and a token-type sample on other sections of the same family page. Those shared rules are global and must be neutralized only under the Empty State page root.
- At 320×844 the reference Size stage wraps Small and Medium to the first row and centers Large on a second row; at 390×844 it stays on one row. Local should follow this wrap without compressing the bars.
- `ContractVisualShowcase.vue` routes Empty State through the generic `size-visual` fallback, shared by multiple families; changing `.size-step i` globally would risk regressions.
- `packages/vue/src/empty-state.css` already uses `--norato-empty-state-visual-large` (64px); the shared control token provides 36px visual height. The runtime playground exposes actual Empty State dimensions separately and must not change.
- `ContractVisualShowcase.vue` has component-scoped styling, so a family-specific gallery can be added without overriding legacy selectors or changing other families.

## Decision and risks

- Add Empty State-only branches before generic Size/States fallbacks and a single page-family scope for descriptive metadata. Use the existing 64px/36px semantic tokens, neutral surface, Norato-yellow stage tint, neutral dotted pattern, and existing radius/elevation tokens. Render States as an explanatory note rather than a fake control.
- Risk: a three-column gallery may become cramped inside the mobile documentation column. Keep three intrinsic samples and use tokenized gaps/padding that fit the 320px document width; measure after rendering.
- No runtime adapter or interaction changes are required.
