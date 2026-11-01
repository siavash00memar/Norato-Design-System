# Rating — acceptance specification

Source: `https://lemonui.ir/#rating`, inspected 2026-11-01; Norato contract: `docs/component-contracts/rating.md`.

## Acceptance contract

- Preserve Lemon's compact top preview: dotted-glass frame, Default marker, four full stars plus one empty star, Persian mean `۴٫۰`, and `۱۲۸ نظر`; Norato uses semantic yellow and blue tokens.
- Expose three modes: read-only rating, controlled selectable input, and full summary with mean, stars, count, and 5-to-1 distribution bars.
- Read-only rating supports 0/1/2/3/3.5/4/4.5/5 and Small/Medium/Large. Input supports integer 1–5, Medium/Large, helper meaning, and Default/Hover/Selected/Disabled/Focus. A star is full/half/empty at tokenized 16/20/24/32 visual sizes.
- Input uses Reka RadioGroup with visible star labels, proper accessible names/value, keyboard selection, disabled state and a 48px minimum target per choice. Add visually hidden text announcing `<value> از ۵`.
- Stars fill from physical right to left in RTL; any half star fills its right half. Empty stars remain visibly distinct.
- Keep count beside every displayed average. Summary bars use explicit non-negative counts and label each row with its star count.
- Page includes inert Lemon-shaped preview, executable Vue playground/API snippet, all nine contract sections and copy controls.

## Source observations

- Lemon page lists 4 parts and 47 variants: Rating (24), Rating Input (10), Rating Star (12), Rating Summary (1).
- Input is integer choice; read-only star display includes half increments. Summary includes five-to-one distribution bars.
- Accessibility requires text score and 2px external focus ring. The top preview is a compact inline row, not a vertical stack.

## Unknowns

- None requiring user input. Input values are whole stars per contract; half-stars are read-only/display-only. Summary distribution accepts per-rating counts; percentages are derived from counts.
