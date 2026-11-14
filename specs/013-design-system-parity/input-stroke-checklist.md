# Input Stroke — Checklist

- [x] Runtime Input/OTP resting border uses semantic default token.
- [x] CSS sets runtime hover and focus strokes to yellow with no duplicate shell border, secondary outline or glow; computed resting shell border is 0px and the visible capsule stroke is a single 1px border.
- [x] Static Input/OTP gallery follows the same treatment.
- [x] Component and Figma contracts plus error log updated.
- [x] Local browser hover-only evidence: Search retained its yellow Stroke with pointer over the field while AX focus remained on the main content container; it was therefore not keyboard focus.
- [x] Live keyboard/programmatic focus review across all eight adapters at Medium: Text, Password, Phone, OTP cell, Textarea, Number, Amount and Search each showed a single yellow capsule Stroke with the pointer moved away; no dark duplicate ring was visible. Playground disabled was toggled on and restored; AX reported all eight adapters disabled and the visible fields kept neutral muted styling when hovered.
- [x] Token, catalog, Vue typecheck/build, and diff gates pass; build reports the >500KB JavaScript chunk advisory (817.03KB).
- [x] Computed-color capture is recorded for seven adapters (Text, Password, Phone, OTP, Textarea, Amount, Search) and the resting Text field.
- [ ] Number isolated hover, mobile Stroke state recheck, full state matrix, and independent screen-reader review remain unverified.

## Hover-only review across all adapters — 2026-11-15

- [x] At the live 1265×713 Input playground, pointer hover was separately applied to Text, Password, Phone, OTP, Textarea, Number, Amount, and Search while the accessibility focus stayed on the main content container.
- [x] Each visible field body showed the yellow Norato Stroke with no keyboard focus on the field. OTP was checked on one representative cell; it shares the adapter treatment across the cells.
- [ ] This visual hover-only pass does not provide computed CSS color values, the mobile state matrix, disabled/error combinations, or independent screen-reader evidence.

## Computed hover Stroke capture — 2026-11-15

- [x] Read the live `::before` border on the actual field/cell control after pointer hover, with keyboard focus remaining on the page container: Text, Password, Phone, OTP cell, Textarea, Amount, and Search each computed to `rgb(253, 193, 1)`, `1px`, and `box-shadow: none`.
- [x] Read the resting Text control after moving the pointer away: `rgb(232, 232, 232)`, `1px`, and no shadow; the input itself was neither hovered nor focused.
- [x] Confirmed the Password and Phone hover captures did not focus those inputs. No typed values were introduced; the Number value remained `1`.
- [ ] Number computed hover remains unverified in isolation because the pointer action focused the native number control. Mobile state matrix, disabled/error combinations, and independent screen-reader evidence remain open.

## Error + Disabled + Loading neutral presentation — 2026-11-15

- [x] Fresh live browser review with Error + Disabled showed neutral muted surfaces on the visible Number, Amount, and Search fields; the accessibility tree marked all eight adapters' value controls and the associated actions disabled.
- [x] With Loading added, all eight adapters retained disabled semantics and exposed their loading and error messages; no red Stroke was visible on the fields in the captured view.
- [x] Restored the shared playground toggles to Error/Disabled/Loading off.
- [ ] This is a visual and accessibility-tree spot check, not a computed-color capture for every adapter/state. Full mobile/state coverage and independent screen-reader review remain open.
