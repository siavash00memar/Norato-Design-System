# Progress Sizes Gallery — Analyze

## Evidence

- At a matched 1265×713 viewport, the design reference stage is 636×134.125px.
- The local `doc-sizes` gallery is 631.984×339.984px, with three description rows and no shared dotted stage.
- The existing content correctly represents both Progress forms and all tokenized dimensions; removing those samples would weaken the contract.

## Decision and risks

- Keep both forms and every measurement, pairing them inside three Small/Medium/Large cards in a single shared stage.
- At 320px the reference wraps to a centered second row. Local reflow must preserve the 257px stage width and avoid horizontal overflow; the added Progress information may make its stage taller than the reference's purely illustrative 214.25px sample.
- Reuse semantic palette, preview background, border and spacing tokens; avoid fixed child dimensions beyond existing size tokens.
- Do not alter the live `NoratoProgress` component or its playground. Verify at desktop and exact mobile viewports before claiming parity.
