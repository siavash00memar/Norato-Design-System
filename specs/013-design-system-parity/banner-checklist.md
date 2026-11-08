# Banner — Checklist / Definition of Done

## Contract and structure
- [x] Source, public API, export, catalog, usage example and contract agree.
- [x] Button section order; inert preview separated from live playground.
- [x] Legacy specimen selectors removed or neutralized; error log updated.

## Visual and responsive
- [x] Matched design reference/Norato desktop review at 1265×720: design reference frame is about 628×298px with a 576×41px default stripe; Norato is about 578×288px with a 568×50px stripe. Norato's first specimen was two-line/taller; it now follows design reference's one-line announcement anatomy and trims excess vertical padding while preserving the 48px control target.
- [ ] All six tones × both layouts render without stretched text/icons. All six desktop tones were visually inspected; Mobile was visually inspected in Neutral only, so the remaining five mobile tone combinations are open.
- [x] RTL icon/message/action/close order was reviewed. Inverse uses a dark Norato surface with yellow details; semantic tones keep their own color tokens and the action remains yellow-accented.
- [ ] Desktop and 390/320 widths wrap correctly with no document overflow. Mobile Neutral fits at the 390px and 320px browser settings; at 320px text wraps above the action. Exact design reference mobile viewport comparison and document-width measurement remain open.

## Behavior and accessibility
- [x] Action activation emits visible feedback without navigation; controlled and uncontrolled dismissal both close and can be restored. No timer or route is implicit.
- [x] Action and close activate with Space. Keyboard focus shows the yellow ring; adapter CSS defines the 2px focus outline and 48px close target, while NoratoButton retains its 48px minimum.
- [ ] Danger alert and non-danger status roles, screen-reader tone text and content order verified; independent screen-reader review recorded. Source defines roles and hidden tone labels, but AX role announcement and independent screen-reader review remain open.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass.
- [x] Local and design reference desktop pages were reviewed; local 320px and 390px screenshots show the Mobile Neutral layout fitting its bounded specimen.
- [ ] Actual browser evidence and residuals recorded before closing DoD; five mobile tone combinations, exact mobile no-overflow measurement, 12-case screenshot review and independent screen-reader review remain open.
