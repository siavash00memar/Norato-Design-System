# Plan — Radio focus cascade

1. Inspect the global and package focus selectors and record their specificity conflict.
2. Raise specificity only for the focused input inside `.norato-radio-group`, preserving its existing 2px focus-ring token treatment.
3. Verify real keyboard focus, selected value, RTL row target and computed ring in the browser; restore the playground.
4. Run token/catalog/type/build/diff gates, update DoD evidence and error log, then push the verified checkpoint.
