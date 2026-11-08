# Banner — Clarify

No material product decision remains open. design reference's live reference and the existing Norato contract define six tones, two layouts, right-side icon and left-side action/close; global Norato rules define RTL, tokens and 48px targets.

## Resolved details
- Native Vue adapter: Banner is non-modal announcement content; no dialog primitive applies.
- `title`, `description` and optional `actionLabel` are caller content; action emits an event and never navigates implicitly.
- Dismissible defaults on to match design reference's close affordance; controlled and uncontrolled visibility are both supported.
- `layout="desktop"` remains responsive and stacks controls at narrow widths; `layout="mobile"` requests stacked composition at all widths.
- Danger uses assertive alert semantics; other tones use polite status semantics. The consumer mounts Banner before primary navigation.
