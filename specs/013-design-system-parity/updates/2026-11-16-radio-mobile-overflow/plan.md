# Radio mobile overflow — Plan

1. Inspect the rendered Radio page at the reported 320×720 viewport and identify the exact element extending beyond its parent/document; measure the radio glyph and target separately.
2. Audit the existing wrapper and component CSS cascade around that element.
3. Apply the smallest token-aligned width/wrapping correction to the offending wrapper; leave the 16px/20px ring and minimum 48px target intact.
4. Recheck 320×720 and 390×844, with both 16px and 20px sizes where the playground permits; inspect RTL and screenshot geometry.
5. Verify ArrowDown selection synchronization, restore the default fixture, and record exact measured evidence.
6. Run `pnpm check:tokens`, TypeScript validation, catalog/build checks, and `git diff --check`; keep results and remaining DoD explicit.
