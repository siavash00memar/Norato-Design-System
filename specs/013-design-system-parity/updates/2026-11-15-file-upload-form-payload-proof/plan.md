# Plan — File Upload native form payload proof

1. Inspect the existing controlled playground form, native input names, required/disabled wiring, and current submit styles.
2. Add a typed local submit handler that serializes the existing form with browser `FormData` and formats only names/file metadata.
3. Add a 48px-target submit action and accessible RTL status output, using existing tokens and no extra behavior in the package adapters.
4. In the browser, select a real fixture, inspect serialized fields, remove it and recheck; verify required-empty blocking and no network request.
5. Update the File Upload DoD, native-form tasks, request-validation checklist, and this update record.
6. Run `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check`. Do not deploy.
