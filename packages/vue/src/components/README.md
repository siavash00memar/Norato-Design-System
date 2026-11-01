# Vue adapters

Vue 3 adapters available through the private workspace package `@norato/vue`:

- `NoratoButton`: variant, disabled, loading and pressed states.
- `NoratoField`: labeled input; controlled with `v-model`.
- `NoratoTextarea`: labeled textarea; controlled with `v-model`.
- `NoratoSelect`: Reka-backed RTL select with search, groups, staged multi-selection and `v-model`.
- `NoratoChoiceGroup`: checkbox or radio group; controlled with `v-model:selected` (array of selected option values).
- `NoratoDatePicker`: controlled, seven-mode Jalali adapter with a keyboard-operable calendar. Lemon visual and full behavior DoD remains in progress; verify the documented contract before production use.

The workspace package is private and not published to a registry. Its entrypoint includes shared component styles. Import semantic tokens once in the application stylesheet with `@import '@norato/tokens/css';`. The workspace links resolve with `pnpm install` from the repository root.
