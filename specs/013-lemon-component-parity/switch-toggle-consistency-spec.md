# Switch Toggle Consistency — Specification

## User need

The small playground toggles currently look different from the Switch specimen: in the checked RTL state their knob touches the track edge. The user requires a visible inset like the specimen, a white knob, and no knob stroke.

## Requirements

- Keep playground tracks/knobs at the medium Switch specimen proportions: 40×24px track and 16px knob.
- In RTL, the unchecked knob sits 4px from the physical right edge; checked sits 4px from the physical left edge. No state may place the knob flush against the track.
- Knob background is white in checked and unchecked states; knob border, outline and shadow are absent.
- Preserve the yellow checked track, neutral unchecked track, labels, accessible checkbox semantics, keyboard focus indicator on the whole track, and existing control target.
- Make the runtime adapter and static galleries follow the same white-knob, no-stroke visual contract.
- Confirm checked/unchecked rendering, geometry, RTL, keyboard operation, responsive layout, token/catalog checks, TypeScript, build, and diff cleanliness in the actual browser.

## Out of scope

Public API changes and unrelated Switch matrix/accessibility certification work.
