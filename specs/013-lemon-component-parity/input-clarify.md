# Input — Clarification Gate

## Confirmed from authority

- The Lemon Input route explicitly presents eight controls in one family: Text, Password, Phone, OTP, Text Area, Number, Amount and Search. Its contract enumerates their variants and states.
- Norato keeps its own semantic palette, RTL-first behavior, 48px minimum target and Vue 3 surface.
- The Lemon top specimen is one email field (field body 324×41px; frame 636×300px at the inspected desktop size). The Norato specimen at a 1280px local browser viewport measured 512×48px within a 584×147px frame. Current local top sample therefore does not match the reference frame or field width; the larger Norato hit target is intentional.
- The existing `NoratoField` handles controlled text, label, helper/error, required, disabled/loading and direction. Existing `NoratoTextarea` is separately exported. The other six controls are described in the visual contract but have no dedicated Input adapters in the public Vue exports.

## Material clarification requested

Should Input implement all eight Lemon subtypes as executable Vue controls, or should this family retain the generic text API and show the rest only as visual references?

The user was offered two clear choices: (A) all eight executable Vue adapters (recommended for functional fidelity); (B) visual galleries while preserving the current text-only runtime API. **Answer pending.**

## Independent acceptance constraints

- The nine-section Button page structure and Lemon's one-field preview composition are required under either choice.
- Keep the Norato control target at least 48px even though Lemon's desktop field shell is ~41px.
- Any non-runtime family representation must be explicitly marked inert/visual-only. Do not add fake APIs or infer behavior from variant labels.
- Do not plan or implement scope-dependent code until the user's choice is recorded.

**Clarify gate: open; dependent Plan/Checklist/Tasks/Analyze/Implement gates must wait.**
