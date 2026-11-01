# Select State Gallery — Analyze

## Pre-change evidence

- At the same 1195×765 viewport, the live Lemon Select page has a 636px content column. Its `#s-states` section contains nine `.st-c.gc` elements; each has exactly a bold state title and a short explanatory `<small>`. Examples: Default (“Normal, resting state”), Hover (“Pointer is over the element”), Open (“Menu or panel is open”), Error, Disabled, Read-only, Selected, and Focus.
- Lemon's actual field specimens are elsewhere: `.stage.solo` is 636×300px and `.vgal` has four field specimens (Default, Filled, Error, Multi · Chips). Therefore a pill-shaped control preview in States is not part of the observed Lemon States pattern.
- At the same viewport, Norato `#doc-states` is 540px wide. `ContractVisualShowcase.vue` renders each derived `stateEntries` item as a generic `.state-shape` containing two abstract marks, then labels the card with `entry.label`, `entry.detail`, and a generic “حالت مرجع”. The shape measures 48×24px and resembles an unrelated toggle; the detail is only “Select”, “Multi Select”, or “Select Option”, not a state explanation.
- Shared styles in `apps/vue/src/styles.css` use three columns and a generic 48px preview target. These rules serve other component families and should remain unchanged outside Select.
- Lemon Select currently derives 18 state entries (Select 7, Multi Select 6, Select Option 5). Keep each entry and its family caption.
- The top Select specimen and live playground are separate (`#doc-preview` / `#doc-implementation`); this correction can remain entirely in `ContractVisualShowcase.vue` and scoped app CSS.

## Decision

Introduce a Select-only modifier class and state-description mapping. Hide the abstract pill only for Select; keep the generic sample for other components. Render tokenized Norato text cards with accurate state copy and a subtle semantic state dot. No runtime control, API, or specimen change.

## Verification to falsify the change

- DOM count must remain 18 and each card must retain its family and title.
- No state card may contain a fake Select or button control; decorative state dot is hidden from assistive technology.
- Desktop and mobile cards fit without overflow, remain RTL, and reproduce the Lemon title/description hierarchy while keeping Norato color roles.
- Existing generic state cards on Button and another component must retain their previous renderer.
