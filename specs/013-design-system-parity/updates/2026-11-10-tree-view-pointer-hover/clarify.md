# Clarify — Tree View pointer hover

- The existing Tree View contract defines a neutral hover surface, a yellow selected surface, and an independent yellow focus outline.
- Gate the existing hover rule with `(hover: hover) and (pointer: fine)` so it applies to mouse/trackpad-like input and not coarse touch pointers.
- No API, color, motion, or design decision is unresolved; the change is limited to the existing selector.
