# Input — Analysis

## Current evidence

- The package currently exports `NoratoField` and `NoratoTextarea`; six of the eight reference subtypes have no dedicated public adapter.
- `NoratoField` already provides controlled string input, associated label/helper/error, required, disabled, loading and direction. `NoratoTextarea` is a separate native textarea with a smaller current API.
- The Input contract lists 264 visual variants across eight parts. These are not current executable coverage.
- design reference's live page confirms the eight-part family, the 6-part field anatomy, 32/40/48/56px visual sizes, error/focus semantics, LTR entry for numbers/codes/phone and Persian labels/helper copy. Its preview shows a single bounded email field with icon, helper and Default marker.
- User approved eight independent adapters and delegated domain details to design reference/Norato conventions.

## Implementation decisions

- Keep current exports backward-compatible; new subtype adapters have unique names and use one shared internal shell where that does not flatten subtype semantics.
- Use the existing native input family and evaluate installed Reka primitives only where they provide real needed behavior; do not introduce a dependency for basic text controls.
- Phone prefix has no country-selection workflow; Amount uses caller-configurable currency (Toman default); Password strength is caller-controlled.
- OTP emits only complete controlled value changes and does not auto-submit. Search shortcut acts only when focus is not already in an editable control.
- Keep specimen art inert and all live behavior in the real playground/API examples.

## Risks requiring verification

- Visual size tokens of 32px/40px cannot reduce the Norato 48px target, so density comparisons must be made separately from hit-area measurements.
- Keeping two exports (`NoratoField`, `NoratoTextInput`) may encourage parallel APIs; avoid drift by sharing a tested internal implementation while preserving the legacy name/props.
- Number and amount formatting can corrupt caret position or canonical values if parsing is implicit; use explicit input formatting and validate serialization in-browser.
- OTP's multi-cell visual representation can create confusing focus order or inaccessible names; maintain one coherent group label and predictable roving focus.
- Password toggle and Search clear/shortcut controls introduce additional focus targets and require 48px sizing, accessible names and disabled semantics.
- The large total of documented visual combinations makes full screenshot coverage impractical; prioritize full rendered state matrices plus focused live checks for every unique state/interaction.

## Post-implementation visual audit — States gallery

- design reference mobile renders descriptive State cards in two columns; this audit found Norato's 41 Input state records were one-column text cards without field boundaries.
- Error/Success were visually indistinct, Success mapped to `default`, and Search Typing also mapped to `default`.
- Decision: compact inert family-specific mini-controls, two mobile columns, Norato-token state styling, family/state descriptions; no new runtime API. The live playground remains the source of behavior.
- Browser result after correction: 41 cards, two 167.5px columns inside a 343px mobile grid, 375px document, distinct focus/error/success/disabled/loading/typing treatments, and `aria-hidden` + `inert` on all specimens.

## Readiness

The required sequence reached Analyze. Implementation may proceed against the confirmed contract. Do not mark family maturity as complete until the full DoD evidence exists.

## Number step-validation finding (2026-11-01)

- The public adapter accepts configurable `step`, but the playground hard-codes `step=1`, leaving part of the declared API difficult to verify through the actual page.
- `stepBy` adds binary floating point values directly; repeated `0.1` steps can produce a long decimal representation.
- Acceptance: adjustable playground range controls, generated example synchronized to those controls, decimal normalization, native ArrowUp/ArrowDown, and min/max clamping. No new adapter prop is needed.
