# Input — Constitutional Review

**Governing constitution:** `.specify/memory/constitution.md` v1.2.0. This review applies its principles to the design reference Input family; it does not amend the project constitution.

## Binding constraints

- Follow the ordered feature workflow: Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement.
- Use design reference as the visual composition and variant reference, Norato semantic tokens as implementation authority, and Vue 3 as the only product surface.
- Preserve RTL, Persian copy, Vazirmatn body/input text, Estedad headings, semantic tokens and minimum 48px interactive targets.
- Keep the existing `NoratoField` public API compatible unless a clarified requirement requires an additive, backward-compatible extension.
- Do not represent inert specimens or native mockups as executable Norato adapters. Distinguish API-backed examples from visual reference examples.
- Preserve correct input semantics, labels, error association, keyboard/focus behavior, reduced motion and responsive reflow.
- Audit legacy selectors before changing family visuals; do not add stacked overrides.

## Gate

Constitution reviewed against v1.2.0. No principle conflict found. Family scope and runtime boundary are delegated to Specify and Clarify. **Gate status: passed for specification only; implementation is not authorized until later stages pass.**
