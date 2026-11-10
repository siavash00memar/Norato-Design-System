# Plan — Table mobile frame width

1. Add a Table-only mobile width rule using the existing semantic `space-4` token, centered inside its current specimen column.
2. Capture exact 390×844, 320×844 and 1536×703 local browser geometry after the change; inspect RTL and page bounds.
3. Update the Table DoD follow-up and request-validation record with observed results and remaining limits.
4. Run required token/catalog, Vue typecheck/build, and diff checks; commit and push the verified change.
