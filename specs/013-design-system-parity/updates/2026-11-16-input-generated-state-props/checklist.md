# Input generated-state props — Checklist

- [x] Reproduce the disabled mismatch: all eight live adapters expose disabled controls while the SFC only marks Text Input disabled.
- [x] Confirm the adapters share `required`, `disabled`, `loading`, `readOnly`, `errorText`, and `successText`; OTP has no `labelPlacement` prop.
- [x] Each of eight generated adapter lines mirrors every active shared state prop. Disabled, Required, Read-only, Error, Success and Loading were exercised in the live browser; each state appeared on all eight generated lines.
- [x] Error and success messages match the live playground's per-adapter wording; with both enabled, only the error messages appeared in the accessible UI, matching error precedence.
- [x] All four sizes synchronized across eight lines. Label placement synchronized on all seven supporting adapters and was correctly omitted on OTP. OTP length and Number presentation changes also synchronized.
- [x] Default and combined states are browser-verified; all playground controls and content were restored to Medium, outside labels, RTL textarea, six OTP cells, stepper Number, enabled, optional, no error/loading/success/read-only, +98 and shortcut on.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue TypeScript/build, and `git diff --check` pass.
- [ ] Independent screen-reader review and the full Input state/size matrix remain separate open DoD items.
