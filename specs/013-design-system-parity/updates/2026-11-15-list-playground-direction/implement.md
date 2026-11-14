# Implement — List playground direction control

- Added a labeled RTL/LTR selector with RTL default and applied it to the List, both Groups, and all child Items.
- Generated usage now emits the selected `dir` explicitly on parent and nested adapters; the contract warns against relying on inherited direction.
- Browser verified LTR item ordering and the checked/unchecked switch knob positions in the inline preview. LTR grouped render and its generated snippet expose matching `dir="ltr"` values on every nested adapter. Restored RTL/inset/checked defaults.
- Fixed the previously discovered RTL switch movement direction; checked/unchecked knob stays inset in both directions.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- Exact mobile LTR visual comparison and independent screen-reader review remain open. No deployment was performed.
