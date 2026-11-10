# Specify — remove legacy HTML Select helper

## Finding

The Vue Select adapter and shared Vue playground dropdown use a custom listbox, but an unexported helper in `packages/core-html/src/components.ts` still emits a browser-native `<select>` and options. Its `.norato-select` styles remain in the HTML/CSS folder. Repository search found no consumers, and `packages/core-html/src/components/index.ts` does not export it.

## Acceptance

- Remove the unused native Select markup helper, its option/config types, and its HTML-only Select styles.
- Keep Vue Select and the shared custom `PlaygroundSelect` unchanged.
- Preserve the public HTML helper exports and all Vue public APIs.
- Confirm there are no native `<select>` elements in the Vue app or reusable helper source, and verify the live Select render remains a custom listbox.
- Keep Select's remaining visual-matrix and independent screen-reader DoD open.

