# Playground Field Styling — DoD Checklist

- [x] Every in-scope playground text/number field uses the shared styling; the source inventory found 17 such controls across 10 playground pages and all are explicitly opted in.
- [x] Checkbox, range, select, file, radio and runtime adapter fields are unchanged; only text/number labels and their fields were edited.
- [x] Browser renders of Tooltip and Pagination show the capsule styling; the shared token rules specify 36px visual height, 48px label target, neutral 1px resting stroke, yellow hover/focus stroke, Estedad Bold labels and Vazirmatn 12px content.
- [x] RTL remains the default; the Input calling-code field explicitly keeps LTR direction.
- [x] Keyboard Tab from the Tooltip trigger focuses its text field; the screenshot shows a single yellow stroke without an extra outline or shadow.
- [x] `pnpm check:tokens`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [x] Request validation checklist records the browser review and remaining Input family DoD.
