# @norato/vue

Private pnpm workspace package for the Norato Vue 3 adapters. It is available inside this repository after `pnpm install` and is not published to a package registry.

```ts
import { NoratoButton, NoratoField, NoratoSelect, NoratoChoiceGroup } from '@norato/vue'
```

The package entrypoint includes token-backed component styles. Import the semantic token stylesheet once in your application:

```css
@import '@norato/tokens/css';
```

Controlled APIs: `NoratoField`, `NoratoTextarea`, `NoratoSelect`, and `NoratoDatePicker` use `v-model`; `NoratoChoiceGroup` uses `v-model:selected` with an array of selected option values. Date Picker includes seven Jalali modes, accessible loading/disabled/error states, and caller-supplied holidays. Its desktop/mobile browser DoD is recorded in `docs/request-validation-checklist.md`.
