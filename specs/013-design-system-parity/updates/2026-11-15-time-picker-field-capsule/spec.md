# Specify — Time Picker field capsule

## User outcome

The Time Picker value field follows the approved Norato input appearance without shrinking its usable pointer or keyboard target.

## Acceptance criteria

- The visible value-field capsule is exactly 36px high, pill-shaped, and uses the semantic neutral border token at rest (`#e8e8e8`).
- The editable/readonly input target remains at least 48px high; the clock action remains at least 48×48px.
- Hover and keyboard focus change one 1px capsule stroke to Norato yellow without a browser-black outline or duplicate ring.
- Error retains its semantic error stroke; disabled/loading retain neutral disabled treatment and do not acquire hover/focus yellow.
- Time digits remain LTR and centered; the field label and component flow remain RTL.
- Small, Medium, Large, and XLarge typography remain intact; no input artwork stretches vertically.
- Controlled values, popup opening, Escape/focus return, native required state, and the five picker modes remain unchanged.
- The Button-style page structure and documented component contract remain unchanged except for the approved field rule.
