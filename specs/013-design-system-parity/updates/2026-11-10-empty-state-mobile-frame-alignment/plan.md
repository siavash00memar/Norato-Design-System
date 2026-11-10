# Plan — Empty State mobile frame alignment

1. Audit the prior Empty State frame selectors and confirm the desktop-only rule does not conflict.
2. Add a mobile-only 16px total inline inset with the existing spacing token and centered margins.
3. Recheck exact 390×844 and 320×844 local/reference frames, document overflow, content bounds, and desktop bounds in the live browser.
4. Run token/catalog, TypeScript, build, request-validation, and diff gates.
5. Update the Empty State DoD, request validation, family ledger, ordered update documents, then commit and push.
