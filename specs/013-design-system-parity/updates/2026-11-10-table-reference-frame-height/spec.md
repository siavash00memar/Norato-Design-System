# Spec — Table reference frame height

## Problem
Same-viewport measurement showed the Table preview frame is 44.75px shorter than the selected reference because it inherited the generic 300px specimen height.

## Acceptance
- At 1536×703, make the Table specimen frame approximately 345.25px tall, matching the measured reference stage; a 345px semantic token may measure within 1px after border sizing.
- Keep the Button-style page sections and all non-Table specimen frame dimensions unchanged.
- Keep current specimen width, table geometry, RTL content, mobile column fitting and 48px row height unchanged.
- Verify 1536×703 plus 390×844 and 320×844 browser renders; record exact frame/table dimensions and document overflow.
- Do not introduce the reference brand name into project text.
