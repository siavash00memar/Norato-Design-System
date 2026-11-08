# Select — Constitution Gate

## Authority

This work is governed by `.specify/memory/constitution.md` v1.2.0, the user's active design reference reference (`design reference), the Norato semantic tokens and Vue 3 contract, and the existing `docs/component-contracts/select.md`.

## Constraints inherited

- Keep the default surface RTL and Persian; preserve semantic option/listbox relationships, keyboard access, visible focus, and a minimum 48px target.
- Use Norato semantic tokens and keep the fixed preview sample inert; the live adapter remains independently operable.
- Preserve the Button-like component page structure and design reference's preview composition while retaining Norato's palette.
- Audit and supersede legacy CSS selectors before visual edits; do not layer temporary overrides.
- Execute the required sequence explicitly: Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement.

## Gate

**Passed for preview composition and CSS-only parity correction.** Existing API/interaction behavior is in scope only for browser verification; no new API behavior is proposed. The older `specs/005-norato-select/spec.md` native-select proposal is superseded by the later design reference-led Select contract and current Reka adapter.
