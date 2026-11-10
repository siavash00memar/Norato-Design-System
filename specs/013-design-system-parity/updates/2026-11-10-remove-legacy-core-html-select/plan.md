# Plan — remove legacy HTML Select helper

1. Audit public exports and repository references to the helper.
2. Remove only the unexported helper, its private types, and its orphaned HTML/CSS selectors.
3. Update Select's checklist and request-validation record to distinguish the removed dead helper from the live Vue listbox; retain remaining DoD items.
4. Inspect the actual local Select route, then run token/catalog/type/build and diff checks.

