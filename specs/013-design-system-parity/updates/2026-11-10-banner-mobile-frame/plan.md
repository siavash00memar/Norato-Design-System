# Plan — Banner mobile preview frame

1. Audit the existing Banner specimen and shared frame selectors; confirm the discrepancy is isolated to the inert preview.
2. Add a Banner-specific semantic mobile maximum-width token and a narrow, centered specimen rule based on existing spacing tokens.
3. Update Banner contract, Figma rule, error log, DoD, and request validation evidence.
4. Measure reference and local frame geometry at 390×844, 320×844, and desktop; verify no overflow and no change to live Banner geometry.
5. Run token, catalog, Vue typecheck/build, and diff gates; push the checkpoint.
