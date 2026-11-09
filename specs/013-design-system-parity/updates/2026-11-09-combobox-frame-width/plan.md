# Plan — Combobox preview frame width

1. Audit the existing desktop frame selector and later mobile override.
2. Add the 1px semantic token allowance only to the non-compact desktop frame.
3. Inspect the local rendered frame and confirm 300px height; retain the ledger's previous reference widths as historical evidence because a matched viewport was unavailable in this session.
4. Preserve mobile override, note that 390px/320px post-change checks need an available viewport control, and run project gates.
5. Record DoD/error-log/request-validation evidence and push the verified adjustment.
