# Component delivery DoD

Two gates make delivery progress visible without lowering the final bar. All 48 families must pass the Baseline stage first; then all continue through the existing strict Final DoD in `checklist.md`.

## Stage 1 — Baseline delivery

For each family:

- [ ] Button-like page structure is present: preview, Vue usage or a clear maturity note, and the nine contract sections with family-specific content.
- [ ] One representative desktop and one mobile render have been compared with the matching reference page.
- [ ] No obvious stretch, clipping, or horizontal overflow remains in those renders.
- [ ] Persian RTL reading order and Norato semantic palette are preserved; interactive targets meet the 48px minimum.
- [ ] For interactive families, one primary pointer flow and one keyboard path work; for static families, record N/A.
- [ ] Family evidence is recorded in its checklist and linked from `families.md`.

Global gate for Stage 1:

- [ ] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass on the delivered revision.

Do not close a Baseline row when any required evidence is absent. The Baseline stage intentionally omits exhaustive variant/state cross-products, full edge-case matrices, independent screen-reader review, and archived comparison captures where those are already required by Final DoD.

## Stage 2 — Final quality

Continue to satisfy every applicable item in `checklist.md`, the component-specific behavior checklist, `docs/request-validation-checklist.md`, and the applicable accessibility and responsive requirements. Do not call the project flawless or complete until every family passes its strict Final DoD and all required global gates pass.

## Evidence inventory

The current family ledger and its component-specific checklists have responsive visual and interaction/RTL evidence for all 48 families. Pagination's same-viewport mobile comparison has now been recorded. The global technical gate must still pass on the delivered revision before Stage 1 can be closed.
