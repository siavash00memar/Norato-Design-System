# Plan — Input Textarea disabled/error Stroke

1. Inspect all existing Textarea invalid and disabled selectors and preserve the current size/layout rules.
2. Add one narrowly scoped invalid+disabled selector using the existing neutral border token.
3. Verify enabled error, disabled only, and disabled+error states in the live Vue Input playground, including native/ARIA semantics and the error message.
4. Run token/catalog/typecheck/build and diff checks; update Input DoD, request validation, and error log with observed results; commit and push.
