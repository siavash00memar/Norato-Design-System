# Radio Playground Consistency — Constitution

## Authority

Follow the project Constitution, `docs/component-contracts/radio.md`, the existing `NoratoRadioGroup` API, and the design reference/Norato parity objective.

## Invariants

- The rendered playground state, accessible status text, and generated Vue snippet must describe the same controlled value and props.
- Keep `NoratoRadioGroup` public API and runtime behavior unchanged; scope the correction to the documentation playground.
- Preserve RTL, Persian content, semantic tokens, keyboard operation, required/error/disabled meanings, and 48px targets.
- When a user chooses a radio while the playground simulates an empty group, leave the simulation and apply the new selection.

## Workflow

`Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement`.
