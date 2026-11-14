# Analyze — Popover static preview composition

- Evidence: browser screenshots of the reference and local pages show the reference static frame contains a floating share panel with an arrow at its top; local Norato shows the same panel above a visible «اشتراک‌گذاری» trigger and attaches its arrow at the panel bottom.
- Root cause: the inert static specimen reused an anchor wrapper and bottom-side positioning intended to depict the trigger relationship. The actual live playground is separately rendered by `PopoverPlayground`.
- Decision: remove the static button/anchor wrapper, center the panel as inert art, and draw its pointer at the top. Do not change `NoratoPopover.vue`, the page playground, or the public API.
- Risk: the shared frame is short and mobile-capped, so the centered panel and arrow must remain bounded and avoid clipping at narrow widths.
