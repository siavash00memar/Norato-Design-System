# Switch Matrix — Specification

## User need

Switch's Variants page should show all documented size/value/state combinations with recognizable, proportionate Switch geometry, matching design reference's clear state-card organization while using Norato tokens.

## Requirements

- Show 30 Switch cells: 3 sizes × 2 values × 5 states (Default, Hover, Disabled, Focus, Error).
- Show 6 Switch Field cells: 2 values × 3 states (Default, Error, Disabled), including field label/description structure.
- Use the actual documented track dimensions: 32×20, 40×24, 48×28; preserve a 48×48 visual target around the track.
- Render on/off knob placement in RTL, semantic hover/focus/error/disabled states, and no stretch.
- Keep galleries static/inert and the live adapter playground interactive and unchanged.
- Verify actual desktop/mobile browser layout, compare design reference at equal viewport, and run required project gates.

## Out of scope

Switch adapter/API redesign and independent screen-reader certification.
