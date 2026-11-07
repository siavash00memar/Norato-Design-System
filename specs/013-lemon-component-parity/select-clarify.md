# Select — Clarify

## Decisions confirmed by existing user direction

- Lemon `https://lemonui.ir/` is the visual benchmark.
- Norato retains its own palette.
- Each component page follows Button's structure.
- Avoid stretched component elements and validate against rendered browser output.
- The current user goal requires completing all 48 families; Select's visual and behavior DoD is part of that scope.

## Select specimen default-state correction (2026-11-08)

- Lemon's top specimen shows an unselected Select with its Persian placeholder. The Norato inert top specimen must likewise start unselected and show `به شهر انتخاب کن`; do not seed a selected city in this visual-only example.
- This changes only specimen content, not the public Vue API or live playground's default value.
- Evidence: equal 1280×720 Lemon/Norato browser captures showed Lemon placeholder versus Norato's preselected `تهران`.

## No unresolved decision for this correction

This change aligns the inert top specimen's content with Lemon's default-state reference. It does not change public API or Select interaction. Existing behavior already exists in the component contract and playground, so implementation can be verified without inventing behavior.

## Superseded source

The older `specs/005-norato-select/spec.md` choice of a native select without a custom listbox predates the user's explicit Lemon reference and is not controlling for the current composed glass-menu adapter.

**Clarify gate: passed for this bounded visual correction.**
