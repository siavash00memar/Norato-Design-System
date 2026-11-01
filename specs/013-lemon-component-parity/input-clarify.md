# Input — Clarification Gate

## Confirmed from authority

- The Lemon Input route explicitly presents eight controls in one family: Text, Password, Phone, OTP, Text Area, Number, Amount and Search. Its contract enumerates their variants and states.
- Norato keeps its own semantic palette, RTL-first behavior, 48px minimum target and Vue 3 surface.
- The Lemon top specimen is one email field (field body 324×41px; frame 636×300px at the inspected desktop size). The Norato specimen at a 1280px local browser viewport measured 512×48px within a 584×147px frame. Current local top sample therefore does not match the reference frame or field width; the larger Norato hit target is intentional.
- The existing `NoratoField` handles controlled text, label, helper/error, required, disabled/loading and direction. Existing `NoratoTextarea` is separately exported. The other six controls are described in the visual contract but have no dedicated Input adapters in the public Vue exports.

## Material clarification requested

Should Input implement all eight Lemon subtypes as executable Vue controls, or should this family retain the generic text API and show the rest only as visual references?

**User decision (2026-11-01):** implement eight independent executable adapters for the reference subtypes. Keep `NoratoField` compatibility and the existing `NoratoTextarea` export unless separately clarified otherwise. The user means distinct public components, not visual-only mockups.

**Still requiring clarification before the affected adapters are implemented:** whether Phone exposes a country selector or only a configurable `+98` prefix; whether Amount defaults to Toman or has no implicit currency; whether Password strength is controlled by the consumer or calculated by the adapter. These choices change UI and public API. A focused question is pending.

## Independent acceptance constraints

- The nine-section Button page structure and Lemon's one-field preview composition are required under either choice.
- Keep the Norato control target at least 48px even though Lemon's desktop field shell is ~41px.
- Any non-runtime family representation must be explicitly marked inert/visual-only. Do not add fake APIs or infer behavior from variant labels.
- Do not plan or implement scope-dependent code until the user's choice is recorded.

**Clarify gate: partially passed.** Runtime family scope is confirmed as eight adapters; the three control-specific behavior/API decisions above remain open. Do not implement Phone, Amount or Password until those answers are recorded. Other controls can be planned independently after their contracts and dependencies are audited.

## Independent preview-only subfeature

The family-level API decision remains unresolved. It does not change the inert single-field top composition, so `input-preview-clarify.md` records a narrower clarification for frame geometry and marker only. Its Constitution/Specify source is the already-passed family review/specification; its own Clarify → Plan → Checklist → Tasks → Analyze → Implement sequence is recorded in the `input-preview-*` files. No API-dependent surface was implemented under that bounded scope.
