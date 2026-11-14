# Checklist — Input yellow Stroke recheck

- [x] Existing matched local/reference evidence and current top-specimen browser evidence show the 36px capsule, RTL title/placeholder, and neutral resting Stroke.
- [x] Hover-only evidence: all eight adapters (Text, Password, Phone, OTP, Textarea, Number, Amount, Search) showed yellow Stroke while pointer-hovered; AX focus stayed on the Disabled showcase checkbox throughout, so hover was distinguished from focus. No duplicate outer ring was visible.
- [x] Focus evidence: all eight adapters at Medium (Text, Password, Phone, OTP, Textarea, Number, Amount, Search) remained visibly yellow with pointer moved away; no dark outer ring or second Stroke appeared.
- [x] Playground size sweep: Small, Large, and XLarge were each selected; all eight rendered adapter examples and the generated Vue snippet followed the selected size. The narrow local render retained capsule geometry with no obvious vertical stretch or clipping. Medium was restored and verified in the generated snippet.
- [x] Disabled toggle made all eight adapters disabled in AX; the visible fields retained muted neutral styling while the pointer hovered Amount. The toggle was restored afterward.
- [x] Existing docs record matched local/reference and responsive geometry. Current source gates were previously green and `git diff --check` is rerun for this record.
- [ ] Exact per-adapter pixel measurements and same-viewport reference comparison for each size, computed-color capture, matched 390px/320px state recapture, independent screen-reader review and exhaustive adapter/state DoD remain open.
