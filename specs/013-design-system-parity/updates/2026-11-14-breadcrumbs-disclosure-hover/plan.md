# Plan — Breadcrumbs disclosure hover

1. Audit the disclosure selectors and existing Norato hover/focus token patterns.
2. Add one scoped hover rule using the brand-yellow semantic token; retain the current resting fill and focus ring.
3. Browser-check all three sizes for hover/revert, focus, keyboard disclosure, RTL, and 48px target geometry.
4. Update the component contract, visual rules, DoD, validation record, and defect log.
5. Run token, catalog, TypeScript, build, and diff checks. Keep the family DoD open for remaining 42-part coverage and independent screen-reader review.
