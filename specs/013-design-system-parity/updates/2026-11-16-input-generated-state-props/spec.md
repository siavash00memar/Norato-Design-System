# Input generated-state props — Specification

## Problem

The live playground applies Required, Error, Disabled, Loading, Success, and Read-only to all eight Input adapters, but the generated Vue SFC includes shared state props only on `NoratoTextInput`. The copied example therefore does not reproduce the state visible in the playground.

## Acceptance contract

1. For each of the eight adapters, generated Vue usage reflects the shared Required, Error, Disabled, Loading, Success, and Read-only toggles supported by that adapter.
2. Error and success text remains adapter-specific and uses the same Persian wording as the live playground. If both states are on, both props appear so the adapter's documented priority behavior remains testable.
3. Existing size, label-placement, strength, calling-code, OTP length, number presentation/bounds, and search-shortcut settings remain reflected where supported.
4. The correction does not expose typed field values in generated code, change adapter behavior, alter visual styles, or add a public prop.
5. The playground is restored to its original default state after browser verification, and token/catalog/typecheck/build/diff gates pass.

## Out of scope

Changing the adapters, their APIs, form values, styling, or independent screen-reader certification.
