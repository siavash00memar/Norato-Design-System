# Chip default preview — Plan

1. Change the inert specimen to the real unselected default.
2. Scope the 328px mobile frame rule to Chip only, using the existing preview size and spacing tokens.
3. Compare local and reference at matched desktop and mobile viewports; verify the static state, border, direction and frame bounds.
4. Match the reference's 60×32px capsule and 1.08 specimen scale while leaving the 48px interaction target intact.
5. Run token/catalog, Vue typecheck/build, diff, and prohibited-string checks before updating the ledger and pushing.
