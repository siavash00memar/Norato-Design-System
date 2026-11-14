# Specification — Select state gallery parity

## Goal

Match the Select documentation's static States gallery to the reference composition while preserving Norato color tokens and RTL.

## Acceptance

- Show exactly nine unique states: Default, Hover, Open, Filled, Error, Disabled, Read-only, Selected, and Focus.
- Each card presents one state name and its description without a repeated subcomponent-family label.
- Desktop state cards keep an even minimum height based on existing Norato spacing/control tokens; the responsive grid follows the reference's four-column desktop composition while remaining contained at narrow widths.
- Keep live Multi Select and Select Option behavior and their Parts contracts intact.
- Preserve responsive sizing and existing Norato palette semantics.
- Verify the rendered local gallery and matched reference in the browser; keep broader DoD open.
