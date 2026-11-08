# design reference visual parity with Norato identity

**Source:** User's latest instruction, 2026-10-31. Visual reference: design reference . Implementation authority: Norato tokens and Vue 3 contracts. Shared page structure reference: existing Button page.

## Acceptance contract

1. Every catalog component has a page with the same section order and completeness as Button: preview, implementation or truthful maturity note, Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility, and Tokens.
2. Each visual specimen follows the composition, proportions, RTL order, and presentation treatment of its matching design reference page. Norato semantic colors replace design reference colors; Estedad/Vazirmatn policy remains active.
3. No specimen or control is accidentally stretched vertically by its documentation card or layout grid. Height follows the component contract; a minimum 48px interaction target applies to real controls.
4. Runtime examples use only Vue props/events that exist. Inert examples are labeled as visual references.
5. Per-component DoD: compare desktop and mobile browser renders to design reference, inspect geometry and RTL, exercise keyboard/focus and all supported states, run token/catalog/type/build checks, update contracts, task checklist and error log, and record any unavailable verification honestly.

## Source observations

- design reference's Input page uses a single-column editorial layout, a contained preview, and nine numbered sections. The preview has a compact email field with a label and helper text; its Size section shows 32/40/48/56px silhouettes. These are source observations, not Norato implementation requirements where they conflict with Norato's 48px minimum target.
- The current Norato Input adapter implements a labeled text input with controlled value, helper/error, disabled, loading, required and direction. Password, phone, OTP, amount, search and the four size variants are documented visual families, not supported by this one adapter.

## Unknowns

- User clarified “Persuading goal” as a persistent objective to complete all 48 component families other than Button without stopping mid-project. The objective remains active until every family's DoD passes.
- Input was compared in the actual desktop browser render. Its top preview was reduced from two vertically stacked examples to one design reference-aligned field; the rendered input is 48px and the preview frame is about 147px. Mobile parity and the other 47 families remain unverified.

## Select implementation refinement

- Acceptance contract from design reference's Select page: a single-choice dropdown, glass menu with optional search and groups, and multiple choice shown as chips or a summary with explicit cancel/confirm controls.
- Norato keeps semantic palette/tokens, RTL, a minimum 48px target for triggers and option rows, four size variants, error/disabled/loading/required/read-only states, and Vue controlled `modelValue` semantics.
- Single selection updates immediately. Multi-selection is staged while the menu is open; Confirm emits the selected array, while Cancel/Escape restore the committed value.
- Search filters options in-place and preserves the selected value when the query is cleared. Disabled items are skipped by keyboard navigation.
- Reka UI is the evaluated Vue primitive candidate for focus management, RTL and keyboard behavior. No new behavior is accepted until the primitive version, public API and browser interactions are verified.

## Switch refinement

- design reference Switch has a single-field top preview (label, description and Default marker), 30 switch combinations and 6 field combinations, with soft-glass off state and a black on state. Norato preserves this composition while using its own semantic blue palette.
- Norato's controlled adapter uses Reka `SwitchRoot`/`SwitchThumb`, exposes label/description/error, retains a 48×48 target at all three track sizes, and moves the knob right-to-left when on.
- Browser evidence confirms the current target/track geometry, RTL, AX switch role/name, and Space/Enter toggling. DoD remains open until hover, the complete design reference state matrix and an independent screenreader pass are checked.

## Segmented Control refinement

- design reference documents two visual styles, four sizes, a single selected view, 2–4 choices, RTL first-item placement, and 88 combinations across group/item axes.
- Norato uses Reka ToggleGroup with controlled single selection and Norato semantic colors. Preserve 48px minimum hit areas despite design reference's 32/40px Small/Medium visual sizes; XLarge remains 56px.
- API supports optional item disabled state and icon component. The specimen remains inert, while live state, style, size, choice count and group disabled controls live in the Vue playground.
- DoD requires desktop/mobile reference comparison, keyboard/pressed/focus behavior, RTL, disabled and per-size/state geometry, and project gates.
