# Plan — Input preview frame parity

1. Audit the existing Input-specific frame allowance and mobile override.
2. Replace only the insufficient desktop allowance with the smallest existing semantic spacing token that produces the measured 636px frame.
3. Verify same-viewport local/reference dimensions, frame height, field geometry, RTL and 390px/320px constraints where available.
4. Update request validation, Input evidence, family ledger and error log.
5. Run required technical gates, commit and push the result.
