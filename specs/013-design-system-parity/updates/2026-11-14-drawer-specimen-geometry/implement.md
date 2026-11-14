# Implement — Drawer specimen geometry

## Changes

- Capped the static panel width with the existing Drawer specimen token at 234px.
- Added the existing 32px semantic spacing token at the panel's block end, leaving the live Drawer component untouched.

## Browser evidence

- Same-window 1265×713 local/reference comparison: outer frames are 628×324px and 629×322px; right panels are 234×234px and 234×232px.
- The panel retains its aligned RTL right edge and top inset. The title, description, filters and action are visible without clipping; Norato's yellow checkbox/action palette is preserved.
- Existing mobile fit checks cover 390px and 320px. This narrowly scoped static cap/inset adjustment was freshly reviewed at desktop only; mobile screen-reader review remains open under Final DoD.

## Checks

- `pnpm check:tokens` — passed.
- `pnpm check:catalog` — passed (49 unique routes/contracts).
- `pnpm --dir apps/vue typecheck` — passed.
- `pnpm --dir apps/vue build` — passed.
- `git diff --check` — passed.
- Prohibited reference-name scan — no matches.

## Remaining Final DoD

- Independent screen-reader review remains open.
- Fresh 390/320px visual measurement after this static geometry adjustment remains open; previous responsive interaction/fit evidence is retained.
