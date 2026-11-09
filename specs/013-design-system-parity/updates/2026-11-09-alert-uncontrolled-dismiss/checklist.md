# Checklist — Alert uncontrolled dismissal

- [x] Controlled example remains unchanged and functional.
- [x] Uncontrolled example has no model binding and dismisses using adapter-owned state.
- [x] Restore remounts the alert and returns focus to the close control.
- [x] RTL is preserved; the adapter close control uses the existing 48px minimum target token.
- [x] Code sample matches the selected mode.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass.
- [x] Browser evidence and remaining gaps are recorded.
