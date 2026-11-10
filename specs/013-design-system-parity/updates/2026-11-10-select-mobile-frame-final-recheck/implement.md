# Implementation and verification — Select mobile frame final recheck

## Outcome

No source change was needed. The desktop frame adjustment did not introduce mobile overflow or meaningful responsive drift, so no competing CSS override was added.

## Browser evidence

- At exact 390×844 CSS viewport, the reference frame measured 327×300px at x=24px; local measured 326×300px at x=24.5px. Both pages have 375px document client/scroll widths. Local trigger remains RTL and 48px high.
- At exact 320×844 CSS viewport, the reference frame measured 257×300px at x=24px; local measured 256×300px at x=24.5px. The local document is 305/305px; the reference page scroll width is 326px.
- Local static Select trigger at 320px measured 246×48px and stayed within the 256px specimen frame.
- At 320px, opening the live Select showed a 273×384.1px listbox at x=16px with six options. It stayed within the 320px viewport and did not widen the document. Escape closed it, returned focus to the trigger, and preserved the default Tehran selection.
- The frame selector is scoped to the inert preview; live trigger and menu selectors remain unchanged.

## Remaining DoD

This closes only the exact mobile frame recheck after the desktop correction. Select's full live-state pixel comparison and independent screen-reader review remain open.
