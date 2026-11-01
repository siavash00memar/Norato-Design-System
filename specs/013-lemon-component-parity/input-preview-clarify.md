# Input Preview — Clarification Gate

## Scope clarified from existing authority

This subfeature changes only the inert, one-field specimen at the top of the Input page. Its composition is required under either pending runtime-API choice documented in `input-clarify.md`; no adapter API, gallery, state matrix or playground behavior is in scope.

## Acceptance contract

- Use one bounded email field with label and helper text, matching Lemon's single-field composition.
- Use a bounded Norato glass/wash/dotted frame with a visible `Default` marker.
- Cap the field width at the measured Lemon field width (324px); preserve the Norato 48px minimum field target.
- Cap frame width at 640px on wide screens and 320px on mobile; use a 288px Norato frame height so the specimen follows the existing Norato preview convention without stretching the control.
- Keep the preview inert and `aria-hidden`; the live Vue playground remains the source of executable behavior.
- Keep the existing nine-section Button-like detail page unchanged.

**Clarify gate: passed for preview-only scope.** The separate runtime API clarification remains open and does not block this bounded visual subfeature.
