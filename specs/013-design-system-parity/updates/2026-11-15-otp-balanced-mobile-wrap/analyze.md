# Analyze — OTP balanced mobile wrap

## Evidence

- 390px browser render: group width 343px; six medium cells are 52×52px with a 4px gap and fit in one row.
- 320px browser render: group width 273px; the same cells wrap as 4+2, with both rows currently aligned to the start edge.
- At 320px the local document is 305/305px (client/scroll width); the reference page is 305/326px and visibly exposes a horizontal scrollbar. Norato should keep its bounded page.
- Runtime owner is `.norato-otp` in `packages/vue/src/otp.css`, imported after `components.css`; `components.css` also defines the base `.norato-otp` rule. No app-level `.norato-otp` selector was found.

## Chosen change

Add `justify-content: center` to the later component stylesheet rule. This changes only row alignment; flex wrapping, source order, 52px target, and semantic 4px gap remain unchanged.
