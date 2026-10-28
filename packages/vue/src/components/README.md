# Vue adapters

Vue 3 adapters available through the private workspace package `@norato/vue`:

- `NoratoButton`: variant, disabled, loading and pressed states.
- `NoratoField`: labeled input; controlled with `v-model`.
- `NoratoTextarea`: labeled textarea; controlled with `v-model`.
- `NoratoSelect`: native select with options; controlled with `v-model`.
- `NoratoChoiceGroup`: checkbox or radio group; controlled with `v-model:selected` (array of selected option values).
- `NoratoDatePicker`: **Proposed only**. The current trigger does not open a calendar; do not use as a production date picker.

The workspace package is private and not published to a registry. Its entrypoint includes shared component styles. Import semantic tokens once in the application stylesheet with `@import '@norato/tokens/css';`. The workspace links resolve with `pnpm install` from the repository root.