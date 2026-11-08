# Vue adapters

Vue 3 adapters available through the private workspace package `@norato/vue`:

- `NoratoButton`: variant, disabled, loading and pressed states.
- `NoratoBadge`: Count/Dot marker with tone/size variants and a scoped anchor label. It does not render an interactive anchor; bind the provided `accessibleName` to the host button or link.
- `NoratoField`: labeled input; controlled with `v-model`.
- `NoratoTextInput`, `NoratoPasswordInput`, `NoratoPhoneInput`, `NoratoOtpInput`, `NoratoNumberInput`, `NoratoAmountInput`, and `NoratoSearchInput`: independent controlled input adapters with shared Norato field semantics.
- `NoratoTextarea`: labeled textarea; controlled with `v-model`.
- `NoratoModal` and `NoratoDialog`: controlled modal surfaces with tokenized sizes, semantic tones and accessible focus management.
- `NoratoDrawer`: controlled right/left side panel or bottom sheet with size and detent options, accessible dialog behavior and RTL-first defaults.
- `NoratoAccordion`: controlled single or multiple disclosure groups with keyboard navigation and custom item content.
- `NoratoSelect`: Reka-backed RTL select with search, groups, staged multi-selection and `v-model`.
- `NoratoChoiceGroup`: checkbox or radio group; controlled with `v-model:selected` (array of selected option values).
- `NoratoDatePicker`: controlled, seven-mode Jalali adapter with a keyboard-operable calendar. design reference visual and full behavior DoD remains in progress; verify the documented contract before production use.

The workspace package is private and not published to a registry. Its entrypoint includes shared component styles. Import semantic tokens once in the application stylesheet with `@import '@norato/tokens/css';`. The workspace links resolve with `pnpm install` from the repository root.
