# Radio Playground Consistency — Analyze

## Reproduction evidence

- Actual `#component-radio` playground: the “بدون انتخاب” control made all three native radio inputs unchecked (`Value: 0`).
- The generated snippet still used `ref<string | undefined>('monthly')`, and the live status still said “انتخاب‌شده: ماهانه”.
- `RadioPlayground.vue` passes `showEmpty ? undefined : value` to `NoratoRadioGroup`, while its `stateText` and `snippet` read only `value`; its selection handler does not clear `showEmpty`.
- In selected + error state, status text said “یک دوره انتخاب کنید.” although “ماهانه” remained checked. The actual error message was separately exposed by the adapter.

## Root cause

The playground maintains two competing value sources: its persisted `value` ref and the derived effective model sent to the adapter. Status and snippet do not use the effective model. The empty-state checkbox also remains authoritative after a user makes a selection.

## Falsification checks

- After correction, empty UI + status + generated code all show no selected value.
- Selecting an item exits empty mode and the AX state, visible status, and snippet all show the chosen value.
- Error-only state with a selected item does not claim the value is missing; required-empty state still has the required message.
- Disabled/keyboard/size/RTL and the adapter's semantics remain unchanged.
