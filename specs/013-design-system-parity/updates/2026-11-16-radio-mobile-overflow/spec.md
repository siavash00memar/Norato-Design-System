# Radio mobile overflow — Specification

## Goal

Correct the reported narrow-viewport overflow in the live Radio playground without changing its selection behavior or visual control size.

## Acceptance contract

1. At 320×720 and 390×844, the live Radio page and three-option group do not cause horizontal document overflow.
2. RTL order, labels, descriptions, error text, and the generated Vue sample remain readable and inside their parent.
3. The visible radio remains circular at its configured 16px or 20px diameter; its 48px-or-larger interaction target is not reduced.
4. The fix is scoped to the actual overflowing wrapper/selector and does not change unrelated component layouts.
5. Arrow-key selection still updates exactly one checked radio, the status, and the generated `v-model` value.
6. The component remains aligned with the documented specimen and its Button-style page structure.
7. Browser evidence is recorded at both widths and the required token, TypeScript, catalog/build, and diff checks pass.

## Out of scope

- Radio API or state semantics changes.
- Reducing the actual interactive target below 48px.
- Reshaping legitimate radio controls into a square or pill.
- Independent screen-reader certification, which remains a separate open DoD item.
