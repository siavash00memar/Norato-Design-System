# Input — Clarification Gate

## Confirmed from authority

- The Lemon Input route explicitly presents eight controls in one family: Text, Password, Phone, OTP, Text Area, Number, Amount and Search. Its contract enumerates their variants and states.
- Norato keeps its own semantic palette, RTL-first behavior, 48px minimum target and Vue 3 surface.
- The Lemon top specimen is one email field (field body 324×41px; frame 636×300px at the inspected desktop size). The current Norato preview is bounded to 324px maximum and keeps a 48px minimum interactive target; the exact same-viewport dimensions are recorded in `input-checklist.md`.
- The existing `NoratoField` handles controlled text, label, helper/error, required, disabled/loading and direction. Existing `NoratoTextarea` is separately exported. The other six controls are described in the visual contract but have no dedicated Input adapters in the public Vue exports.

## Material clarification requested

Should Input implement all eight Lemon subtypes as executable Vue controls, or should this family retain the generic text API and show the rest only as visual references?

**User decision (2026-11-01):** implement eight independent executable adapters for the reference subtypes. Keep `NoratoField` compatibility and the existing `NoratoTextarea` export unless separately clarified otherwise. The user means distinct public components, not visual-only mockups.

**User follow-up (2026-11-01):** no additional preference; use Lemon and the Norato contracts as guidance. Record these implementation choices:

- Phone shows a configurable country calling code prefix, default `+98`; no country picker, matching the source contract's code-prefix anatomy without inventing a country-selection workflow.
- Amount formats/group-separates the value and shows Persian words. Currency is configurable and defaults to `تومان`, consistent with the Persian product context; document this default explicitly.
- Password accepts a controlled `strength` value (`empty|weak|fair|good|strong`, default `empty`) from the consumer rather than inspecting or retaining password content to guess strength. This keeps policy/validation under the consuming application's control.
- OTP length is configurable at 4, 5 or 6 digits and supports paste, sequential typing, Backspace and directional keyboard movement without implicit auto-submit.
- Search supports clear and platform-aware `Ctrl/Cmd+K` focus. Shortcut is ignored while the user is typing in another editable control.
- All adapters share the established controlled-field semantics where applicable: `id`, `label`, `modelValue`/`v-model`, `helperText`, `errorText`, `required`, `disabled`, `readOnly`, `loading` and `size`. Special constraints remain subtype-specific. Keep `NoratoField` as a compatible generic field and preserve `NoratoTextarea` export.

## Independent acceptance constraints

- The nine-section Button page structure and Lemon's one-field preview composition are required under either choice.
- Keep the Norato control target at least 48px even though Lemon's desktop field shell is ~41px.
- Any non-runtime family representation must be explicitly marked inert/visual-only. Do not add fake APIs or infer behavior from variant labels.
- Do not plan or implement scope-dependent code until the user's choice is recorded.

**Clarify gate: passed (2026-11-01).** The eight-adapter scope and three domain choices are recorded. The detailed APIs below are the feature's implementation contract; any additional discovered ambiguity must be recorded before changing affected behavior.

## Preview-scope history

Earlier preview-only notes in `input-preview-*` recorded a temporary bounded investigation before the user expanded the family scope. They are superseded by the later explicit decision above: implement all eight adapters and a matching family playground while keeping the top reference specimen inert. No material family-level API decision remains open.

## Post-implementation gallery clarification

- No new interaction, props, or runtime API is required. The 41 States entries are inert visual references; all behavior stays in the eight adapters/playground.
- Use Lemon's compact state-card hierarchy and two-column mobile composition as the presentation reference. Keep Norato's palette, tokenized glass surfaces and descriptions of the actual family state.
