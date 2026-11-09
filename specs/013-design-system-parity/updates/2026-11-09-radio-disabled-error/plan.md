# Plan — Radio disabled/error precedence

1. Audit the existing Radio invalid and disabled selectors and preserve the confirmed 2px focus correction.
2. Add a Radio-scoped disabled+invalid visual-priority rule using existing disabled tokens.
3. Verify Error-only, Disabled-only and Error+Disabled live states, native disabled behavior, selection retention, RTL/48px geometry and keyboard focus.
4. Update the Radio contract, request checklist, family evidence and error log.
5. Run token, catalog, TypeScript, production build and diff gates; commit and push the verified correction.
