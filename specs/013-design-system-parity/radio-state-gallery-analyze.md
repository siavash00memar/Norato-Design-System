# Radio State Gallery — Analyze

## Pre-change evidence

- design reference `#radio` presents five `.st-c` state cards in the States section, with a bold title and concise description. Radio specimens are in Preview and Variants.
- Norato currently renders eight derived state entries as generic 48×24px pill graphics, including Radio Button and Radio Field families. This depicts an unrelated elongated control and has no explanation beyond the family label.
- The shared renderer is `apps/vue/src/ContractVisualShowcase.vue`; generic layout/styles live in `apps/vue/src/styles.css`. Select already has a deliberate scoped text-card modifier, which provides an established local pattern.
- The existing Radio specimen and playground are separate from the static States gallery and must remain unchanged.

## Decision

Add a Radio-only renderer branch and scoped modifier using Norato token-based text cards. Keep all eight entries and descriptions; retain the generic renderer for all other component families.

## Falsification checks

- Rendered count is exactly eight with five Radio Button and three Radio Field entries.
- The Radio states contain no `.state-shape` and remain inert; the live playground still exposes real radio controls.
- design reference comparison supports the same title/description hierarchy, while Norato remains RTL, bounded, token-colored and distortion-free at desktop/mobile sizes.
- Button and Select galleries remain unchanged.
