# Combobox sample synchronization — Checklist

- [x] Single selection sample reflects a committed non-default option: «پژوهش» serializes as `ref("پژوهش")`.
- [x] Clearing single selection produces a sample model value of `''`.
- [x] Multiple selection sample reflects the exact ordered array: `ref<string[]>(["پژوهش","طراحی رابط"])`.
- [x] Clearing multiple selection produces `[]`.
- [x] Search query alone does not change the sample model before commit; it remains empty until Enter commits the option.
- [x] Keyboard commit synchronizes the field, status and sample.
- [x] Persian serialization produces valid TypeScript string text.
- [x] Existing playground flags and RTL remain intact; default single `design`, Large, outside-label fixture is restored.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Independent screen-reader review, cold-load fallback capture and exhaustive visual-state archive remain open unless separately completed.
