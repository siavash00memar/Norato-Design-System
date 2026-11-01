# Time Picker — acceptance specification

Source: live `https://lemonui.ir/#time-picker` page inspected 2026-11-01; repository component contract and Norato RTL/API rules.

## Acceptance contract

- One controlled Vue adapter provides a labeled time input and a bounded picker panel with five modes: Columns, Columns 12h, Wheel, Slots, and Range.
- Single mode uses `HH:mm` (24-hour, zero-padded) as the controlled string. Range mode uses `{ start, end }` with the same representation. Displayed clock digits are LTR; labels and surrounding form flow remain Persian RTL.
- Input opens an anchored picker panel 8px below when space permits; panel remains in viewport, closes on Escape/outside click, and returns focus to the trigger on close.
- Default minute step is 5; it is configurable to positive integer values. Slots are explicit available times. Range selection cannot end before its start; incomplete range remains representable without fabricating an end.
- All keyboard-operable targets are at least 48×48px. Column/wheel/slot options support keyboard selection and visible focus. Native input and selector semantics expose labels, current values, disabled/loading/error/required states and associated descriptions.
- Disabled and loading prevent opening or selecting. Error text is associated with the input and applies invalid semantics. Norato semantic tokens and visible focus tokens are required; avoid fixed-height stretching.
- Page structure matches Button: inert Lemon-shaped preview, executable Vue playground, copyable API example, and nine contract sections.

## Reference observations

- Lemon page documents a single/range time field, five picker forms, four visual sizes and five input states; its preview is a compact two-column hour/minute panel with a dark selected cell, dotted glass frame and Default marker.
- Lemon overview says the popup opens 8px below and digits always read left-to-right. Keyboard changes each column with ArrowUp/ArrowDown. Lemon uses 32/40/48/56px control sizes; Norato keeps its 48px target floor.

## Unknowns

- None blocking. Defaults and API are resolved in Clarify based on a reusable Persian scheduling control and the user's delegation to choose sound defaults.
