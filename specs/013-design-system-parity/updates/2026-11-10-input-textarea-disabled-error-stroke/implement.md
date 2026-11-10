# Implement — Input Textarea disabled/error Stroke

Added the scoped selector `.norato-textarea-group.is-invalid .norato-textarea:disabled` after the validation Stroke rule in `packages/vue/src/components.css`. It uses the existing `--norato-color-border-default` token; no new raw visual value or broad override was introduced.

## Live verification

At the rendered Input route, three medium RTL states were checked:

- Error only: 1px `rgb(199, 32, 56)` Stroke, `aria-invalid=true`, enabled. The error ID resolves to the visible text «توضیحات را بررسی کنید».
- Disabled only: 1px `rgb(232, 232, 232)` Stroke, native disabled, no invalid flag, 108px height.
- Error + Disabled: 1px `rgb(232, 232, 232)` Stroke, native disabled and `aria-invalid=true`; `aria-describedby` includes both the visible error and counter IDs, and both resolve.

RTL and existing height were retained. Both playground switches were returned to off. Independent screen-reader review and full Input visual-state matching remain open.

## Gates

- `pnpm check:tokens` — pass.
- `pnpm check:catalog` — pass (49 routes/contracts).
- `pnpm --dir apps/vue typecheck` — pass.
- `pnpm --dir apps/vue build` — pass; JS entry bundle 444.56KB.
- `git diff --check` — pass (line-ending normalization warnings only).

## Delivery

- Commit `ea2f26d` pushed to `origin/master`.
- `git ls-remote origin refs/heads/master` returned `ea2f26dff95539d9711add655772f761f8e8dc81`, matching local HEAD; worktree was clean after push.
