# Implement — Select disabled/error Stroke precedence

- Added a scoped `.norato-select-group.is-invalid .norato-select__trigger:disabled::before` rule using the existing neutral border and muted surface tokens; no API or shared-field rule changed.
- Live browser screenshots confirm enabled Error remains red, Error + Disabled becomes neutral, and Error + Disabled + Loading remains neutral. Error text remains visible; the accessibility tree exposes the trigger disabled and loading status. Source keeps `aria-invalid` and described-by bindings while `errorText` is set.
- Open-menu screenshot shows RTL custom grouped listbox, selected-row surface, yellow trigger/search Stroke, and no native dropdown. Escape closes it and returns focus to the trigger with the yellow Stroke.
- Restored Tehran, searchable, single select, Large, outside label, enabled, no error/loading. Selection did not change.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Full per-state screenshot comparison and independent screen-reader review remain open.
