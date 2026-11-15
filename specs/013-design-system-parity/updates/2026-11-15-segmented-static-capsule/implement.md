# Implement — Segmented static specimen surface

Implementation and browser evidence are pending.

- Replaced the broad specimen selected-fill selector with a dedicated pseudo-surface; wrapped inert labels so they render above the visual layer.
- Added `--norato-radius-observed-9` and aligned the specimen and live adapter to 28px selected surfaces at 48px target size (36px surface at the 56px XLarge target). No public API or selection/keyboard behavior changed.
- Browser checks confirmed matched 390px reference geometry and local 320px overflow, RTL and target invariants. Direct matched reference capture at 320px, exhaustive mobile state combinations and independent screen-reader review remain open.
- `pnpm check:tokens`, `pnpm check:catalog` (49 routes), Vue TypeScript, Vue production build and `git diff --check` pass.
