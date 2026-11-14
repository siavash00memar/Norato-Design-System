# Specification — OTP balanced mobile wrap

## Problem

At 320px viewport width, the medium six-cell OTP group wraps into rows of four and two, both aligned to the LTR start edge. This leaves the final row visibly unbalanced. At 390px, all six cells fit on one row.

## Requirement

When OTP cells wrap, center each flex row within the available group width. Preserve the existing order, cell size, gap, and target size. At widths where all cells fit, retain one row. Do not introduce horizontal page overflow.

## Acceptance

- At 390px, six medium cells remain on one LTR row and remain within the document.
- At 320px, the six medium cells remain in two rows (four then two), and both rows are centered.
- No field/cell dimensions or keyboard/accessibility behavior change.
- Reference parity remains judged against the OTP's compact capsule anatomy; the local page must remain bounded even if the reference page overflows horizontally.
