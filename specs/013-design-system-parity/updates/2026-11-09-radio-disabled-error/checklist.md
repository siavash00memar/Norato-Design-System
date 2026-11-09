# Checklist — Radio disabled/error precedence

- [x] Error-only preserves the semantic red stroke.
- [x] Disabled-only preserves neutral disabled stroke and muted state.
- [x] Disabled+Error uses neutral disabled visuals while `disabled`, `aria-invalid`, and the linked message remain exposed.
- [x] Controlled selection is retained and cannot be changed while disabled; RTL and 48px target remain intact.
- [x] Existing keyboard focus ring remains visible and exactly 2px.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass.
- [ ] The verified checkpoint is pushed to `origin/master`.
