# Specification — Tooltip preview frame allowance

## Context

The Tooltip contract records that the frame was corrected with a 4px semantic allowance, but its post-correction matched-viewport result and frame regressions remain unverified.

## Acceptance contract

- At a matched 1265×720 viewport, the Tooltip specimen frame matches the current reference width and 300px height within 1px measurement tolerance.
- The scoped 4px allowance uses a Norato spacing token and remains capped by the shared desktop frame maximum.
- Button, Input and Select specimen frame widths remain unchanged by the Tooltip-only rule.
- RTL content, specimen bounds and document width have no clipping or unintended overflow.
- Record measured browser evidence; change source only if actual output contradicts the contract.
