# Select — Clarify

## Decisions confirmed by existing user direction

- Lemon `https://lemonui.ir/` is the visual benchmark.
- Norato retains its own palette.
- Each component page follows Button's structure.
- Avoid stretched component elements and validate against rendered browser output.
- The current user goal requires completing all 48 families; Select's visual and behavior DoD is part of that scope.

## No unresolved decision for this correction

This change only aligns the inert top specimen frame and marker with the established preview contract. It does not change public API or Select interaction. Existing behavior already exists in the component contract and playground, so implementation can be verified without inventing behavior.

## Superseded source

The older `specs/005-norato-select/spec.md` choice of a native select without a custom listbox predates the user's explicit Lemon reference and is not controlling for the current composed glass-menu adapter.

**Clarify gate: passed for this bounded visual correction.**
