# Breadcrumbs mobile specimen — Checklist

- [x] Inspect the actual component page and reference at both requested mobile widths.
- [x] Record the pre-change frame mismatch: local 328×300px at 390px and 273×300px at 320px; 320px reference frame is 257×300px.
- [x] Scope the correction to the inert Breadcrumbs preview.
- [x] Confirm exact post-change frame geometry and local document bounds at 390px and 320px.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass.
