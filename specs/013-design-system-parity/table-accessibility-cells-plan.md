# Plan — Table image and progress playground cells

1. Extend `TablePlayground.vue` with a false-by-default state for the optional cell sample and computed columns.
2. Add numeric progress values and a self-contained inline SVG thumbnail with accurate Persian `alt` text; leave default visible columns unchanged.
3. Keep generated usage synchronized: include optional column definitions and a representative row only when the option is enabled.
4. Validate the implementation through the running local browser at a desktop viewport and at a narrow viewport. Inspect visual containment, RTL, `progressbar` role/name/value, and the image's alternative text; then turn the option off and verify the default table/snippet.
5. Update the Table DoD and request-validation log with observed evidence and open limitations.
6. Run `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check`.

No `NoratoTable` API or styling changes are planned unless browser evidence demonstrates a defect in the renderer itself.
