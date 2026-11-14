# Divider — Baseline visual correction

## Acceptance contract

- At the same 375px mobile viewport as the selected design reference, the inert top specimen shows one continuous, subtle horizontal 1px rule across the frame, centered vertically in the same 288px dotted glass card. On desktop, the rule is 360px wide; on mobile it is capped at 320px to keep the same centered proportions without overflow.
- The rule is visibly a line, not a filled capsule; it has no vertical stretch and uses Norato border tokens.
- Do not alter the public `NoratoDivider` API or the other orientation/type/tone combinations.
- RTL remains the default. A horizontal plain line has no keyboard interaction.

## Scope

Correct the Divider specimen/runtime geometry only. Keep the adapter's semantic/decorative behavior and existing playground controls intact.
