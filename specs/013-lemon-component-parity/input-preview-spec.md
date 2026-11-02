# Input email specimen — Specification

## Goal
Match the user-provided email Input specimen: place an envelope icon beside the Email title, use a bold Estedad title, show a Persian placeholder in the field in light Vazirmatn 12px `#A1A1A1`, remove `name@example.com`, and render the inert preview control at 36px high.

## Acceptance criteria
- Email label remains an actual `<label>` associated with the field and contains the decorative envelope icon.
- Label text uses Estedad, weight 700.
- Placeholder reads `ایمیل خود را وارد کنید`, is inside the field and uses Vazirmatn 12px, weight 300, and semantic token `#A1A1A1`.
- Email control in the inert top specimen measures 36px high; controls in the interactive Input playground retain 48px minimum target and current behavior.
- Keep RTL, 324px field cap, Default specimen marker, and helper text. Remove the email icon from the control.
- No `name@example.com` remains in this specimen.

## Out of scope
No public interaction behavior, input adapter states, or other component previews change.
