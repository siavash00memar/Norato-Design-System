# Plan — Tree View selected/hover priority

1. Reproduce the selected row becoming neutral gray when the pointer rests on it.
2. Inspect the CSS specificity and existing component contract; keep selected and disabled state styling authoritative over hover.
3. Narrow the hover selector to enabled, unselected rows only.
4. In Chrome, verify unselected hover, selected hover, disabled hover, selected value preservation and keyboard focus; restore the playground's default state.
5. Run token, catalog, Vue typecheck, production build and diff gates; update DoD/request/error/contract evidence and push.
