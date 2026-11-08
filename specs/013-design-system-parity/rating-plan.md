# Rating — implementation plan

1. Audit `.sample-rating` and global star/button selectors; remove/neutralize conflicting rules before the visual refactor.
2. Implement `NoratoRating` with read-only, input and summary modes. Compose the input from installed Reka RadioGroupRoot/Item, style visible star art with Norato tokens, and expose 48px targets.
3. Render half stars with a direction-aware gradient/clip; keep the filled half on the physical right. Use Persian digits and accessible textual scores.
4. Add inert top preview and executable Vue playground with mode/value/count/size/disabled controls and distribution examples; integrate export, catalog, usage, primitive map and contract.
5. Compare actual design reference/Norato screenshots at desktop and 390px mobile; measure preview, stars, target, frame and overflow. Exercise read-only values, all input radio choices, keyboard/focus/disabled, count, summary bars, RTL and AX.
6. Complete rating-checklist, update request/error docs, run token/catalog/type/build/diff gates, then mark maturity only if all required checks pass.

Primitive decision: use Reka RadioGroup for five mutually exclusive keyboard choices. Read-only rating/summary are display compositions and should not be forced into a selection primitive.
