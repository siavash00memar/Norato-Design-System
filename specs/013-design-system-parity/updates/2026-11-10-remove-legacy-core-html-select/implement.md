# Implementation — remove legacy core-html Select helper

- Removed the unexported `noratoSelectMarkup` helper and its private types from `packages/core-html/src/components.ts`.
- Removed the helper-only `.norato-select*` CSS from `packages/core-html/src/norato.css`.
- Kept the public Vue Select implementation and its custom listbox unchanged.
- Browser evidence: 1280px viewport; document width 1265px; zero native `<select>` elements; both Select triggers are RTL comboboxes with 48px height. Opening the playground trigger exposes a custom listbox; Escape closes it and restores focus.
- Gates passed: `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue production build, and `git diff --check`.
- The full Select visual-state screenshot matrix and independent screen-reader review remain open; this cleanup does not close Select DoD.
