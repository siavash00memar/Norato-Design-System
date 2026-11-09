# Spec — Table static-table geometry

## Problem
The frame now matches the selected reference, but the static table inside it measures 560×274.50px against the reference's 561.60×258.39px at 1536×703.

## Acceptance
- Measure the local static table at approximately 562×258.5px at 1536×703, within 1px of the reference bounds.
- Preserve all four 48px rows, avatar placement, selection tint and RTL column order.
- Preserve mobile fit at 390×844 and 320×844 with no internal clipping or document overflow.
- Do not change the live Vue table adapter or other component specimen dimensions.
