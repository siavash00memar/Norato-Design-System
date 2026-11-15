# Input generated-state props — Checklist

- [x] Reproduce the disabled mismatch: all eight live adapters expose disabled controls while the SFC only marks Text Input disabled.
- [x] Confirm the adapters share `required`, `disabled`, `loading`, `readOnly`, `errorText`, and `successText`; OTP has no `labelPlacement` prop.
- [ ] Each of eight generated adapter lines mirrors every active shared state prop.
- [ ] Error and success messages match the live playground's per-adapter wording.
- [ ] Small/Medium/Large/XLarge and supported subtype settings remain synchronized.
- [ ] Default and combined states are browser-verified; all playground controls and content are restored.
- [ ] `pnpm check:tokens`, `pnpm check:catalog`, Vue TypeScript/build, and `git diff --check` pass.
- [ ] Independent screen-reader review and the full Input state/size matrix remain separate open DoD items.
