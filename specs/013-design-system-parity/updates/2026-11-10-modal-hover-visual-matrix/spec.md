# Specify — Modal hover visual matrix

## Problem

Modal's DoD confirms default, focus, disabled and busy states, but leaves the visual hover state of all actions and nested form fields open.

## Acceptance

- Inspect each enabled action in the confirmation and form dialogs under pointer hover, with no unintended layout shift, blue accent, or focus-only ring.
- Inspect each nested form field under pointer hover and focus; verify the field follows the shared 36px capsule, 1px neutral resting border and Norato-yellow hover/focus stroke contract.
- Verify RTL action order and ensure hover does not activate or submit controls.
- Record exact states, screenshots or computed geometry from the live browser. Leave independent screen-reader review open.
