# Combobox sample synchronization — Specification

## Goal

Keep the visible and copied Vue sample synchronized with the live Combobox playground state.

## Acceptance contract

1. In single mode, the generated `v-model` declaration reflects the currently selected option; clear produces an empty string consistent with `NoratoCombobox` behavior.
2. In multiple mode, the generated declaration reflects the exact selected `string[]`, including an empty array after clear.
3. Existing size, label placement, required, disabled, loading, creatable, error/helper settings remain represented as before.
4. Selecting an option by keyboard updates the field, status, and generated sample consistently.
5. Persian and other user-entered values are serialized as valid TypeScript string literals without code injection or escaping errors.
6. RTL, field geometry, menu behavior, and adapter API do not change.
7. Browser evidence and required technical gates are recorded before handoff.

## Out of scope

- Changing option selection, recent-results, loading, or creation behavior.
- Redesigning the playground layout or its accessibility semantics.
- Closing the independent screen-reader or full state-matrix DoD items.
