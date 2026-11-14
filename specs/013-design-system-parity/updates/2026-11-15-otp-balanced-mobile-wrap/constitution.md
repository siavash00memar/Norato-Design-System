# Constitution — OTP balanced mobile wrap

## Scope

Correct the narrow-viewport wrapping alignment of the existing OTP adapter only. Preserve the current cell dimensions, 48px-or-larger interaction targets, LTR digit order, keyboard behavior, validation semantics, and no-horizontal-overflow behavior.

## Invariants

- RTL-first page; OTP digits remain entered/read in LTR order.
- Use existing semantic spacing and sizing tokens; add no raw design values.
- Do not reduce any interactive target below 48px.
- Audit and supersede conflicting selectors before editing visual CSS.
- Browser-check the actual 390px and 320px renders, then run token, Vue TypeScript, and diff checks.
- This is local work only; no external deployment.
