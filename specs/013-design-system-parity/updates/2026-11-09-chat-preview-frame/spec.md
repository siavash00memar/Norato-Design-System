# Specify — Chat preview frame

## Evidence

- The live reference Chat page shows a 636×300px dotted specimen frame with a Default status marker and two message bubbles.
- The local Chat page currently renders the static sample without the shared dotted frame or Default marker. The Chat playground is a separate, fully interactive chat layout.
- `ComponentSpecimen.vue` assigns `sample-button-specimen` to the other Button-style component previews but omits Chat. Its existing `sample-chat` card is independently styled and can remain inside the shared frame.

## Acceptance

1. The static Chat specimen uses the same shared 640×300px Button-style dotted frame and Default marker as the other component pages.
2. The existing message sample stays intrinsic and centered; no stretching or API changes are introduced.
3. The preview remains inert and the live playground remains a separate section.
4. Norato palette, RTL order, Button section order and existing Chat behavior are preserved.
5. Verify the actual browser render against the 636×300px reference, check responsive bounds, then run required project gates. Keep remaining Chat DoD items open.
6. The static frame shows the same two-bubble composition as the reference (incoming on the right, outgoing on the left, timestamp/read metadata), without embedding the full header/date/composer card. The complete chat shell remains in the live playground.
