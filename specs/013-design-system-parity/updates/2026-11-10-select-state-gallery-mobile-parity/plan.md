# Plan — Select state gallery mobile parity

1. Audit the existing Select gallery base and mobile selectors; replace the forced two-column mobile rule rather than layering an override.
2. At widths up to 599px, inset the Select gallery by one semantic space-4 unit on each side and use an auto-fit minimum based on the 48px target token so 390px uses two columns and 320px uses one.
3. Re-measure the local gallery and representative cards at 390px and 320px; check RTL and document overflow. Confirm the desktop rule is unaffected.
4. Record final evidence and remaining limits in the component and request-validation checklists; update the error log if applicable.
5. Run token, catalog, TypeScript, production-build, and diff checks; commit and push the completed correction.
