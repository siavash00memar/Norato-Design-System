# Implement — Segmented selected surface geometry

- Audited the existing one-line Segmented CSS and replaced direct selected backgrounds with a single `::before` visual layer inset by `--norato-space-2` (8px). No legacy selected background rule remains.
- Kept each ToggleGroupItem's minimum block size, inline layout, label and keyboard target unchanged. The pseudo-layer supplies selected Glass elevation, selected Contrast yellow, and the neutral selected-disabled surface.
- Preserved the existing outer `:focus-visible` ring on the full button target; reduced-motion now disables the pseudo-layer transition as well.
- The first live post-change Contrast+Disabled screenshot exposed a specificity conflict. Added the matching Contrast disabled pseudo-surface selector; repeat screenshots confirm neutral Disabled priority in Glass and Contrast.
- Updated the Segmented contract, Figma rules, request-validation evidence, error log and the persistent component task ledger. No public API or token values changed.
- The mobile state-by-state review, independent screen-reader review and final technical gates remain open until the subsequent verify/commit stage.
