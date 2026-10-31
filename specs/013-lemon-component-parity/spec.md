# Lemon visual parity with Norato identity

**Source:** User's latest instruction, 2026-10-31. Visual reference: https://lemonui.ir/ . Implementation authority: Norato tokens and Vue 3 contracts. Shared page structure reference: existing Button page.

## Acceptance contract

1. Every catalog component has a page with the same section order and completeness as Button: preview, implementation or truthful maturity note, Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility, and Tokens.
2. Each visual specimen follows the composition, proportions, RTL order, and presentation treatment of its matching Lemon page. Norato semantic colors replace Lemon colors; Estedad/Vazirmatn policy remains active.
3. No specimen or control is accidentally stretched vertically by its documentation card or layout grid. Height follows the component contract; a minimum 48px interaction target applies to real controls.
4. Runtime examples use only Vue props/events that exist. Inert examples are labeled as visual references.
5. Per-component DoD: compare desktop and mobile browser renders to Lemon, inspect geometry and RTL, exercise keyboard/focus and all supported states, run token/catalog/type/build checks, update contracts, task checklist and error log, and record any unavailable verification honestly.

## Source observations

- Lemon's Input page uses a single-column editorial layout, a contained preview, and nine numbered sections. The preview has a compact email field with a label and helper text; its Size section shows 32/40/48/56px silhouettes. These are source observations, not Norato implementation requirements where they conflict with Norato's 48px minimum target.
- The current Norato Input adapter implements a labeled text input with controlled value, helper/error, disabled, loading, required and direction. Password, phone, OTP, amount, search and the four size variants are documented visual families, not supported by this one adapter.

## Unknowns

- User clarified “Persuading goal” as a persistent objective to complete all 48 component families other than Button without stopping mid-project. The objective remains active until every family's DoD passes.
- Input was compared in the actual desktop browser render. Its top preview was reduced from two vertically stacked examples to one Lemon-aligned field; the rendered input is 48px and the preview frame is about 147px. Mobile parity and the other 47 families remain unverified.

## Select implementation refinement

- Acceptance contract from Lemon's Select page: a single-choice dropdown, glass menu with optional search and groups, and multiple choice shown as chips or a summary with explicit cancel/confirm controls.
- Norato keeps semantic palette/tokens, RTL, a minimum 48px target for triggers and option rows, four size variants, error/disabled/loading/required/read-only states, and Vue controlled `modelValue` semantics.
- Single selection updates immediately. Multi-selection is staged while the menu is open; Confirm emits the selected array, while Cancel/Escape restore the committed value.
- Search filters options in-place and preserves the selected value when the query is cleared. Disabled items are skipped by keyboard navigation.
- Reka UI is the evaluated Vue primitive candidate for focus management, RTL and keyboard behavior. No new behavior is accepted until the primitive version, public API and browser interactions are verified.
