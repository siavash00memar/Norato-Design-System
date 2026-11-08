# Radio Playground Consistency — Specification

## Need

The live Radio playground can render an empty group, but its status text and generated Vue snippet continue to report the retained monthly value. Selecting an option while the empty simulation is active also leaves the rendered group empty.

## Acceptance contract

1. A single effective value drives the rendered group, selected-status text, and generated Vue `ref` value.
2. While “بدون انتخاب” is enabled, the effective value is `undefined`, and the generated example says so.
3. Selecting any radio exits the empty simulation, updates the controlled value, status, and snippet together.
4. Error status does not falsely tell users to choose an option when a value is already selected; the actual error message remains available through the adapter's error semantics.
5. Required, error, disabled, size, RTL, keyboard and 48px target behavior remain intact; no public adapter API changes.

## Out of scope

Changing the Radio adapter API, component styles, design reference composition, or other component families.
