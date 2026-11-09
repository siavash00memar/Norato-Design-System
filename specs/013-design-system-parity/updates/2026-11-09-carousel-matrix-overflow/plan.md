# Plan — Carousel mobile matrix overflow

1. Audit existing CarouselPlayground selectors and identify the narrow-screen grid rule.
2. Reflow the variant samples to one column, extend only the sample rail across the matrix's existing padding with semantic tokens, and stack dot labels above controls.
3. Reproduce the page in exact 390px and 320px same-origin frames; measure document widths and confirm all examples remain intact.
4. Update Carousel DoD, request validation and error log; run token/catalog/TypeScript/build/diff gates and push the verified result.
