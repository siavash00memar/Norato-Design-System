# Alert — Plan

1. Audit legacy `.sample-alert` selectors and existing contract, token, catalog and page patterns.
2. Implement typed `NoratoAlert` with tone/style/layout, optional dismissibility, accessible close action and caller action slot.
3. Replace the static specimen with one inert default example and add a separate interactive playground for all axes and close behavior.
4. Export adapter/types, add usage snippet, primitive decision, catalog readiness and the shared Button-style contract sections.
5. Compare design reference and Norato in the browser; verify RTL, responsive, keyboard/focus and ARIA behavior, then run required technical gates and record remaining DoD items.

## Scoped visual correction — specimen close affordance

- Evidence: a fresh matched desktop render showed the reference specimen with a close glyph at inline-start while Norato's inert specimen omitted it.
- Acceptance: enable only the existing dismiss affordance on the inert static example; preserve its `aria-hidden`/`inert` wrapper and do not change the live adapter API or playground behavior.
