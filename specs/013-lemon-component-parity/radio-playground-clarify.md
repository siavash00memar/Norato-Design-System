# Radio Playground Consistency — Clarify

## Evidence-based decisions

- The current playground passes `undefined` to the adapter when `showEmpty` is true, but `stateText` and `snippet` read the retained `value` ref directly.
- The `update:model-value` handler changes `value` without disabling `showEmpty`, so a user's selection cannot become visible until the simulation is manually turned off.
- The status text currently says “یک دوره انتخاب کنید.” for every error state, even with a selected option.
- The existing component contract expects a controlled single selection and a synchronized Vue example; this correction does not change that API.

## Resolution

Use `showEmpty ? undefined : value` as the single effective value for render, status and snippet. An actual radio selection updates the stored value and clears `showEmpty`. Error status names the error without claiming that selection is missing.

No material API or interaction questions remain for this scoped playground correction.
