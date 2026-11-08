# Banner — Checklist / Definition of Done

## Contract and structure
- [x] Source, public API, export, catalog, usage example and contract agree.
- [x] Button section order; inert preview separated from live playground.
- [x] Legacy specimen selectors removed or neutralized; error log updated.

## Visual and responsive
- [ ] Matched Lemon/Norato browser captures compare frame, full-width stripe, icon, message, action, close, color and stroke.
- [ ] All six tones × both layouts render without stretched text/icons.
- [ ] RTL order and Inverse contrast use semantic Norato tokens; brand interaction remains yellow.
- [ ] Desktop and 390/320 widths wrap correctly with no document overflow.

## Behavior and accessibility
- [ ] Action event and controlled/uncontrolled dismissal work; no navigation/timer is implicit.
- [ ] Button/close keyboard activation, visible 2px focus and minimum 48px targets verified.
- [ ] Danger alert and non-danger status roles, screen-reader tone text and content order verified; independent screen-reader review recorded.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass.
- [ ] Actual visual/browser review pending: local app responds HTTP 200, but browser automation service returned a connection error; no visual verification is claimed.
- [ ] Actual browser evidence and residuals recorded before closing DoD.
