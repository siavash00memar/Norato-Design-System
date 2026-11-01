# Select — Plan

1. Inspect the current Select specimen markup, current selector cascade, and related preview tokens; remove/rework the old Select-only plain-frame rule.
2. Add semantic preview tokens for the frame width, mobile width, height, and radius only if no equivalent existing tokens are available.
3. Add the same composition as mature sibling frames, scoped to Select, and reuse the existing `sample-checkbox-state` status marker.
4. Preserve `NoratoSelect` and playground behavior; do not edit adapter code unless browser evidence reveals a defect that can be addressed within the contract.
5. Capture equal-viewport Lemon/Norato evidence, measure frame/control/option geometry, and inspect RTL, keyboard, multi-select staging, state and accessibility semantics.
6. Run request checklist, token/catalog checks, Vue typecheck/build and diff check; update contract, parity tracker, error log and checklist evidence.

## Vercel configuration audit

- The live Vercel project already reports framework `vite`; the failed preview is from an older deployment/config snapshot (`NEXT_NO_VERSION`).
- Root has no `build` script. The app is under `apps/vue` and defines `build` as `vue-tsc --noEmit && vite build`; workspace uses pnpm and Vite emits `apps/vue/dist`.
- The update-project API could read the Vercel project, but PATCH returned `404 Project not found` despite explicit project/account scope, so remote settings were not changed. Do not set an incorrect root-level `pnpm build`. The project setting can be retried with Vercel CLI or dashboard later; latest preview and production remain ready.

## Risk controls

- A global `.component-sample:has(.sample-form-controls)` currently resets layout, so the Select rule must intentionally override only its own specimen.
- Verify large desktop content-width constraint and 390px mobile layout; do not infer frame size from CSS alone.
- Keep menu overlay geometry separate from the inert top specimen.

**Plan gate: passed.**
