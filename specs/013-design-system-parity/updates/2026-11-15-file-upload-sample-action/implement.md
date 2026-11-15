# Implementation — File Upload sample action

- Added `class="button secondary"` to the sample queue action. No handler, state, API, token, or component CSS was changed.
- Live 375px browser review confirms the secondary pill treatment in the RTL playground. Five sample rows can be added; at the configured limit, the accessibility tree exposes the action as disabled. Clearing restores zero rows and the enabled action.
- Keyboard Tab from the sample action moves focus to the first row's “نمایش انتقال” action. The focus traversal and user-visible button were observed, but no computed DOM geometry was available in this pass; 48px is inherited from the shared `.button` contract.
- `pnpm check:tokens`, `pnpm check:catalog` (49), `pnpm test:file-upload` (8/8), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` all pass.
- File Upload's full DoD remains open for OS drag/drop, independent screen-reader review, and remaining combined keyboard/state paths.
