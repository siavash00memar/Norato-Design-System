# Input page visual rule — Specification

## Goal
Make every rendered Norato Input field follow the user's latest visual rule wherever it appears across component documentation pages, not only the top email example.

## Acceptance criteria
- Placeholder text is RTL-aligned throughout the Input family; explicit LTR value direction for phone/amount remains intact.
- Titles/field labels use Estedad Bold.
- All visible single-line Input shells measure 36px wherever they appear: Input family variant/state cards, top email preview and live adapter playgrounds across component documentation pages. Interactive hit areas remain at least 48px.
- OTP cells retain 48px interactive boxes while their visible capsule is 36px in the playground and static gallery.
- Textarea remains multiline with the existing row-based height.
- Remove «ایمیل کاری‌ات را وارد کن.» and the helper line from the top email preview; keep its Persian placeholder and Email label/icon.
- Keep RTL, capsule radii, existing colors/states, and page order. LTR values (phone and amount) stay LTR while their placeholders remain RTL.

## Out of scope
No public behavior, API or contract readiness state changes. Checkbox, radio, range and other non-text controls are excluded.
