# Implement — Modal specimen backdrop

## Changes

- Updated only the inert Modal specimen scene: Norato's dotted/gradient surface now sits behind a softened translucent scrim.
- Tuned the semantic scene/card layout tokens and card spacing so the inner scene and dialog proportions match the reference more closely while the shared ~300px Norato frame stays consistent with other specimens.
- Live adapter overlay CSS and global scrim token were not changed.

## Browser evidence

- Compared local and reference captures in the same browser window at 1265×713.
- Local/reference outer frames: 625×298px / 629×344px. Inner scenes: 445×252px / 446×255px. Dialogs: 297×196px / 299×198px.
- The dotted scene is visible through the softened scrim; confirmation remains centered, RTL and unclipped. Existing Modal mobile-fit evidence remains in the canonical DoD; this follow-up visual capture was desktop only.
- Drawer reference and local static specimens were also inspected at the same desktop viewport. Both keep the RTL panel on the right inside the standard dotted frame; the local preview includes an extra explanatory line and larger panel, retained for later strict visual review.

## Checks

- `pnpm check:tokens` — passed.
- `pnpm check:catalog` — passed (49 unique routes/contracts).
- `pnpm --dir apps/vue typecheck` — passed.
- `pnpm --dir apps/vue build` — passed.
- `git diff --check` — passed (only line-ending normalization warnings).
- Prohibited reference-name scan — no matches.

## Remaining Final DoD

- Modal controlled/uncontrolled `open` synchronization and independent screen-reader review remain open.
- Drawer independent screen-reader review remains open; local panel proportions differ from the reference due to the extra descriptive line and are retained for strict visual review.
