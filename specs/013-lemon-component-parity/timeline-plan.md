# Timeline — Plan

1. Read existing timeline selectors, inventory rendering, token names, export/catalog conventions, and component page contracts.
2. Implement marker, item, timeline list, and activity feed adapters using semantic Norato tokens and intrinsic geometry.
3. Add Button-style specimen/playground, 26-variant matrix, usage snippet, contract, Figma rule, and catalog entry.
4. Compare the actual local render with Lemon at matched viewport; inspect RTL/LTR, marker tones/types, all layouts/positions/densities, keyboard/AX, and responsive behavior.
5. Run token/catalog checks, Vue typecheck/build, whitespace validation; log unresolved external screen-reader limitations truthfully.
6. Push a verified checkpoint to `origin/master`.

## Risks
- CSS logical properties and list position can create a left-side RTL rail if `dir` is applied only to text.
- Card and compact layouts must not change event marker size or distort avatar assets.
- Day group labels are host-provided; timezone/date grouping must not be inferred in the component.
