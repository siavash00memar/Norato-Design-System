# Specification — Switch live toggle recheck

## Goal

Refresh the evidence for the real Switch adapter in the running Vue documentation page.

## Acceptance

- The playground exposes a named `role="switch"` control with a 48×48px target and medium 40×24px track.
- Pointer activation changes `aria-checked` from false to true.
- Keyboard Space changes `aria-checked` from true back to false.
- Preserve the default unchecked, enabled state after the check.
- Do not claim family completion: the independent screen-reader review remains open.
