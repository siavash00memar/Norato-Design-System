# Implement — Tree View pointer hover

- Replaced the unconditional row hover selector with the same selector inside `@media (hover: hover) and (pointer: fine)`.
- The existing `--norato-color-surface-subtle` hover token, selected yellow surface, disabled treatment, focus ring, RTL and row dimensions are unchanged.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` all pass. The built main JavaScript chunk is 443.80KB (120.37KB gzip); this build produced no >500KB chunk warning.
- The browser automation connection timed out during local-page retrieval. Mouse/touch visual confirmation is still open; no browser result is claimed.
