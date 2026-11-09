# Specification — Switch live combined-state audit

## Acceptance

Review all 24 live combinations across Small/Medium/Large, on/off, error/no error and enabled/disabled.

- Every switch remains a 48×48px target with its contracted track geometry and RTL semantics.
- Enabled states reflect the controlled value; disabled states cannot be changed.
- Error exposes `aria-invalid` and the associated error message; Error+Disabled remains semantically invalid but uses the neutral disabled treatment.
- No unexpected stretching, overflow, or console errors are introduced.
