# Analyze — List playground direction control

- Evidence: `NoratoList`, `NoratoListGroup`, and `NoratoListItem` each expose a `dir` prop. `NoratoListItem` defaults to RTL and writes its own `dir` attribute, so setting direction only on the outer list does not change child switch selectors or row direction.
- Root cause: the playground hardcodes RTL at the List and preview-stage level and omits a direction control; generated child usage also relies on the Item RTL default.
- Decision: expose one playground direction value and pass it to every Group and Item as well as the outer List. Keep RTL as default and ensure snippets contain explicit nested direction.
- Risk: a partial binding could leave children in RTL while the parent is LTR. Verify all nested `li[dir]` values and interaction geometry for both values.
