# Clarification

- NoratoField remains backward compatible; this update changes only the published visual presentation.
- The 36px value describes the visible capsule, not the DOM hit target. The input remains at least 48px tall.
- Hover/focus Stroke uses the existing approved yellow; disabled overrides invalid to keep a neutral disabled appearance.
- The package exported stylesheet is the source of truth; the docs app must not supply the only implementation.
