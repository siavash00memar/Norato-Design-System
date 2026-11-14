# Checklist — OTP required completion

- [x] Every configured cell is natively required when `required` is enabled.
- [x] Incomplete required value fails browser validity for lengths 4, 5 and 6.
- [x] Complete required value passes browser validity for lengths 4, 5 and 6.
- [x] Empty optional value passes browser validity for lengths 4, 5 and 6.
- [x] Existing paste, sequential entry, Backspace and directional navigation remain intact; sequential entry is covered by the existing Input DoD browser record and the other paths were rechecked after this change.
- [x] RTL label, LTR digit sequence, accessible names and visual capsule remain correct in the live render.
- [x] Shared Request Validation, Input DoD, component contract and Norato component rules reflect the verified behavior.
- [x] Token, catalog, Vue TypeScript, Vue production build and `git diff --check` gates pass.
