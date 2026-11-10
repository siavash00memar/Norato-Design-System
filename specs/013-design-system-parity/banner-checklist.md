# Banner — Checklist / Definition of Done

## Contract and structure
- [x] Source, public API, export, catalog, usage example and contract agree.
- [x] Button section order; inert preview separated from live playground.
- [x] Legacy specimen selectors removed or neutralized; error log updated.

## Visual and responsive
- [x] Fresh matched desktop comparison at 1265×720: reference frame 636×300px and banner 583.2×52.9px; Norato frame 631.98×300px and banner 622×49px before the width correction. The initial specimen width difference is recorded below and corrected with semantic layout/spacing tokens.
- [x] Captured and visually reviewed all 12 local playground combinations at 1265×720 (six tones × Desktop/Mobile). Across the matrix, the icon stays 18×18px, action and close targets stay 48px high, RTL is preserved and no text/icon stretching or clipping appears. The reference page exposes static Info and Inverse samples only; those two tone examples were compared directly, while the other semantic tones have no corresponding reference sample.
- [x] RTL icon/message/action/close order was reviewed. Inverse uses a dark Norato surface with yellow details; semantic tones keep their own color tokens and the action remains yellow-accented.
- [x] The inert frame was compared at matched mobile widths: 342×300px at 390×844 and 272×300px at 320×844, centered with 24px inset. The local document remains 390/390px and 320/320px with no horizontal overflow; desktop scope is unchanged.
- [x] Desktop and 390/320 widths wrap correctly with no document overflow. Local Mobile matrix has no document overflow: 375/375px client/scroll at 390px and 305/305px at 320px; at 320px text wraps above the action.

## Behavior and accessibility
- [x] Action activation emits visible feedback without navigation; controlled and uncontrolled dismissal both close and can be restored. No timer or route is implicit.
- [x] Action and close activate with Space. Keyboard focus shows the yellow ring; adapter CSS defines the 2px focus outline and 48px close target, while NoratoButton retains its 48px minimum.
- [x] Browser AX confirms Danger `alert`, all other tones `status`, and the expected Persian tone label for all six tones; live DOM direction remains RTL for every tone/layout case. Independent screen-reader review remains open.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass after the final edits.
- [x] Local and design reference desktop pages were reviewed; browser matrix at 390px and 320px confirms all six Mobile tones fit their bounded specimens with no document overflow and 48px action/close targets.
- [x] Actual browser evidence is recorded; the 12-case local visual review and two available reference comparisons are complete. Independent screen-reader review remains open.

## Banner inert mobile frame comparison — 2026-11-10

- [x] Audited legacy and shared specimen selectors: Banner inherited the generic desktop frame and had no Banner-specific mobile width rule; live `NoratoBanner` is separate and remains full-width.
- [x] At 390×844, the selected reference frame and Norato both measure 342×300px at x=24px. At 320×844, both measure 272×300px at x=24px.
- [x] The local 320px document remains 320px wide with no overflow; the selected reference page scrolls 6px wider at its 320px capture, and this overflow was not copied.
- [x] Desktop CSS viewport 1265×720 remains 631.984×300px; the mobile rule is limited to widths at or below 599px.
- [x] All 12 local screenshots were reviewed; the reference comparison scope is recorded in the desktop specimen section below.

## Banner desktop specimen width correction — 2026-11-10

- [x] Same-viewport browser comparison found the reference banner at 583.2×52.9px inside a 636×300px frame; the local banner was 622×49px inside a 631.98×300px frame.
- [x] Scoped a desktop-only max width to the inert specimen using the shared frame and spacing tokens. Fresh browser measurement is 584×49px (within 1px of the reference); live Banner playground and mobile specimens are not targeted by this rule.
- [x] The reference's Variants section exposes only static Info and Inverse samples; its Tone/Layout chips do not change the specimen. All six local tones and both layouts were captured separately for the 12-case geometry/state review.
- [ ] Independent screen-reader review remains open.
