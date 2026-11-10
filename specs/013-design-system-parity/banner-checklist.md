# Banner — Checklist / Definition of Done

## Contract and structure
- [x] Source, public API, export, catalog, usage example and contract agree.
- [x] Button section order; inert preview separated from live playground.
- [x] Legacy specimen selectors removed or neutralized; error log updated.

## Visual and responsive
- [x] Matched design reference/Norato desktop review at 1265×720: design reference frame is about 628×298px with a 576×41px default stripe; Norato is about 578×288px with a 568×50px stripe. Norato's first specimen was two-line/taller; it now follows design reference's one-line announcement anatomy and trims excess vertical padding while preserving the 48px control target.
- [ ] All six tones × both layouts render without stretched text/icons. All six desktop tones were visually inspected. All six Mobile tones now render in 390px and 320px frames; role, RTL, intrinsic icon geometry and minimum targets were inspected in the browser. The inert frame now matches reference widths at 390/320; full 12-case visual comparison remains open.
- [x] RTL icon/message/action/close order was reviewed. Inverse uses a dark Norato surface with yellow details; semantic tones keep their own color tokens and the action remains yellow-accented.
- [x] The inert frame was compared at matched mobile widths: 342×300px at 390×844 and 272×300px at 320×844, centered with 24px inset. The local document remains 390/390px and 320/320px with no horizontal overflow; desktop scope is unchanged.
- [x] Desktop and 390/320 widths wrap correctly with no document overflow. Local Mobile matrix has no document overflow: 375/375px client/scroll at 390px and 305/305px at 320px; at 320px text wraps above the action.

## Behavior and accessibility
- [x] Action activation emits visible feedback without navigation; controlled and uncontrolled dismissal both close and can be restored. No timer or route is implicit.
- [x] Action and close activate with Space. Keyboard focus shows the yellow ring; adapter CSS defines the 2px focus outline and 48px close target, while NoratoButton retains its 48px minimum.
- [ ] Browser AX confirms Danger `alert`, all other tones `status`, tone labels and RTL content order. Independent screen-reader review remains open.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass.
- [x] Local and design reference desktop pages were reviewed; browser matrix at 390px and 320px confirms all six Mobile tones fit their bounded specimens with no document overflow and 48px action/close targets.
- [ ] Actual browser evidence and residuals recorded before closing DoD; the inert mobile frame geometry is now matched, while 12-case visual screenshot review and independent screen-reader review remain open.

## Banner inert mobile frame comparison — 2026-11-10

- [x] Audited legacy and shared specimen selectors: Banner inherited the generic desktop frame and had no Banner-specific mobile width rule; live `NoratoBanner` is separate and remains full-width.
- [x] At 390×844, the selected reference frame and Norato both measure 342×300px at x=24px. At 320×844, both measure 272×300px at x=24px.
- [x] The local 320px document remains 320px wide with no overflow; the selected reference page scrolls 6px wider at its 320px capture, and this overflow was not copied.
- [x] Desktop CSS viewport 1265×720 remains 631.984×300px; the mobile rule is limited to widths at or below 599px.
- [ ] Full 12-case visual screenshot comparison and independent screen-reader review remain open; keep Banner DoD open.
