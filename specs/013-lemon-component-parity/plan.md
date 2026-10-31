# Implementation plan

1. Keep the existing Vue 3 route and nine-section document shell as the Button structural baseline. Compare each page with its exact `https://lemonui.ir/#<slug>` reference, then refine page-specific specimens and sections without fabricating runtime APIs.
2. For each family in catalog order after Button, inspect its contract, Vue adapter status, Lemon page, source selectors, and actual rendered geometry. Record observed differences before editing.
3. Edit only the relevant Vue specimen, documentation renderer, tokens, contract, and CSS. Remove or neutralize conflicting legacy selectors before adding new rules. Keep Norato colors and typography, RTL, 48px real targets and supported API boundaries.
4. Validate the page at desktop and mobile widths. Exercise supported behavior and keyboard/focus/disabled/loading/invalid states. Compare screenshots and measured element boxes with Lemon, distinguishing intentional Norato policy differences.
5. Complete the per-family checklist, update request validation and error log, run token/catalog/type/build checks, and only then mark that family done. Repeat until all 48 families pass.

## Current evidence

- Input reference page inspected at Lemon: single editorial column, compact email specimen, nine numbered sections, sizes shown as 32/40/48/56px.
- Input Norato browser render inspected at 127.0.0.1:5173: the live input box is 48px high and the top specimen contains two 48px fields in a 260px frame. This is not proof that other families do not stretch.
- The current generic `.component-sample` CSS uses a shared minimum-height frame. Its descendants need per-family geometry checks; a global height override would risk harming larger examples.

## Risks

- Several families are Proposed, so their visual specimen must stay labeled inert until supported Vue behavior exists.
- Lemon's 32/40px controls conflict with Norato's 48px minimum target for interactive controls; preserve the Norato rule and document the visual difference.
