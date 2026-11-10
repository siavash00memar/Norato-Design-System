# Plan — Split Button detail page playground

1. Audit the implementation-snippet conditional chain and the sibling Split Button fallback; confirm the live playground is unreachable in the actual rendered route.
2. Add Split Button to the existing per-component playground branch and remove its unreachable sibling section.
3. Keep the source line and single canonical nine-section structure intact.
4. In a real browser, verify page structure and controls at desktop/390/320, exercise variant/size/mode, disabled/loading, primary action and dropdown selection, and confirm RTL/keyboard/focus/overflow.
5. Run token/catalog/TypeScript/build/diff gates; update the contract, rules, error log, request checklist and family DoD, then push.
