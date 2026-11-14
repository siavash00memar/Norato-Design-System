# Checklist — Modal optional trigger and uncontrolled open

- [x] Optional `trigger` slot renders through DialogTrigger; the existing controlled path renders its single external launcher.
- [x] Without `v-model:open`, trigger opens; Cancel dismisses and focus returns to the trigger.
- [x] Direct uncontrolled Escape and close-icon dismissal return focus to the trigger; outside dismissal closes the dialog.
- [x] Uncontrolled form footer `close` callback closes after cancel or valid submit; controlled `v-model:open` playground remains available.
- [ ] RTL and minimum 48px trigger/close target remain; dismissible and busy behavior unchanged (RTL confirmed in browser; size and full state regression gates pending).
- [x] Playground switches controlled/internal-open mode and generated usage matches.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [x] Repository scan confirms no files mention the prohibited reference brand.
- [ ] Independent screen-reader review remains open unless an actual separate screen-reader session is available.
