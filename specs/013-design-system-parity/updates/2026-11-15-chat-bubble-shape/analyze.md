# Analyze — Chat bubble shape and typography

## Evidence

- At 320px, reference `.bub` computes to 12px, 21.6px line-height (1.8×), 20px main radius, and a 6px lower corner nearest the sender edge.
- Local inert `.sample-chat p` computes to 11px, 18.7px line-height, 12px card radius, and a top-side 6px corner.
- Local runtime `.norato-chat-message__bubble > p` already uses Norato body-small size (12px) but uses 1.6 line-height (19.2px); the shell uses a 12px card radius and puts its 6px corner at the top.
- The current outgoing Norato-yellow fill is intentional and must remain. The reference outgoing black fill is not adopted. Static/runtime outgoing fixture copy was longer than the visual reference, so align its concise Persian text length without copying brand wording.
- At 320px the local and reference outer preview widths differ by 16px, but local frame width follows the shared Button specimen constraint; this scoped change must not alter that shared frame geometry. Reference page scroll width is 326px against a 305px client width; local remains 305/305px.

## Root cause

The inert specimen and runtime adapter diverged from each other and from the measured message rhythm: caption type, generic card radius, and start-side logical corners produced smaller, vertically dense bubbles with the tight corner at the top.

## Decision

Use a semantic Chat message line-height token at 1.8, a Chat bubble radius token aliased to the established 20px radius, and the measured lower-side sender corner mapping. Keep the shared frame, palette, and 48px interaction targets unchanged.
