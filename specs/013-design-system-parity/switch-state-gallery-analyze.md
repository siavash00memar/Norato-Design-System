# Switch State Gallery — Analyze

## Pre-change evidence

- design reference `#switch` has five `.st-c` cards in States with a bold state title and concise explanation. Preview/Variants contain the live Switch specimens.
- Norato currently renders eight derived Switch and Switch Field state entries as generic 48×24px pill graphics with abstract marks, which are not a Switch and have no state explanation.
- `ContractVisualShowcase.vue` owns the parsed gallery markup; generic styles in `apps/vue/src/styles.css` cause the pill presentation. Radio's verified design reference-style title/description cards can be shared without runtime changes.
- The Switch Preview already has a bounded 540×288px Norato glass frame and Default marker at desktop; the live root target is 48×48px with a 40×24px medium track. design reference at the same 1195×765 viewport has a 636×300px frame and a 43.2×25.92px track. The Norato column is narrower; the track proportions are close and remain token-owned.

## Decision

Share Radio's static field-state card renderer/CSS using family-neutral class names. Add Switch-specific descriptions and keep all eight Switch entries. Keep the Switch specimen and playground untouched.

## Falsification checks

- Switch renders exactly eight cards (five Switch, three Switch Field), with no `.state-shape`; Radio retains its eight entries and Select retains 18.
- Button's 11 generic states remain unchanged; Switch playground toggles and returns to its initial value.
- Equal viewport desktop/mobile comparison confirms RTL, two-column mobile layout, no overflow, semantic palette and bounded non-stretched track/card dimensions.
