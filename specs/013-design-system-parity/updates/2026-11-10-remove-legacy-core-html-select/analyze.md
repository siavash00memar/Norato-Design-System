# Analyze — remove legacy HTML Select helper

- `noratoSelectMarkup`, `NoratoSelectOption`, and `NoratoSelectOptions` are declared only in `packages/core-html/src/components.ts`.
- The package component index exports only the Button and Field helpers; no project reference imports the Select helper.
- `.norato-select*` HTML-only selectors are confined to `packages/core-html/src/norato.css` and do not style the Vue implementation.
- Removing this dead path reduces the chance of accidentally rendering a browser-native dropdown while preserving the supported Vue adapter and public exports.

