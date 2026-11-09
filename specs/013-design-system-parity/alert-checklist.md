# Alert — Checklist / Definition of Done

## Contract and structure
- [x] Public API, source, export, catalog, usage and contract agree.
- [x] Page has Button's section order; preview is inert and playground is interactive.
- [x] Legacy Alert selectors audited and removed from generic specimen rules.

## Visual
- [x] Same-viewport design reference/Norato comparison at 499×932: design reference frame/alert 436×300 / 410×74px; Norato frame/alert 452×288 / 420×69px. Inline layout, hierarchy and icon placement compared; page columns differ slightly.
- [x] All 20 tone/style/layout combinations rendered in browser; dimensions, roles and representative semantic background colors recorded. Full visual screenshot review of every combination remains open.
- [x] RTL direction, right-side 24×24 intrinsic icon, action wrapping and no horizontal overflow at 499px verified.
- [x] At 390×844 and 320×844, both Inline and Expanded playground layouts remain within the viewport. Document widths are 375px/305px; the implementation frame and Alert measure 343px/273px. Expanded grows naturally to 117px high and Inline to 62px. The icon remains 24×24px and the close target remains 48×48px.

## Behavior/accessibility
- [x] Inline and Expanded render correct content; caller action slot renders only for Expanded.
- [x] Controlled dismiss updates `v-model`; Space closes; focus outline is 2px yellow with 4px offset; close target is 48×48px.
- [x] Danger exposes alert role; other tones expose status role; decorative icons are `aria-hidden`.
- [x] Tone is included as screen-reader-only text alongside the status message; visual icons differ by severity, so color is not the only cue.
- [ ] Independent screen-reader review is recorded; automated accessibility tree/role inspection is not a substitute.
- [ ] Uncontrolled dismiss button behavior and focus-visible by keyboard in an assistive-technology review remain to be independently checked.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass; build emits a 925.88KB JS chunk advisory above 500KB.
- [x] Browser evidence and remaining limitations are recorded. The 20-state pixel screenshot review, independent screen-reader review, and assistive-technology review of uncontrolled dismissal/focus remain open; do not close DoD while these required items remain open.
