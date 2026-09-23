# Implementation Plan: Vue Primary Surface

## Technical Context

- Existing workspace: pnpm monorepo with shared tokens and an existing Next.js docs app.
- Target runtime: Vue.js with a lightweight Vite entry point for the primary app surface.
- Language: TypeScript.
- Styling: existing Norato semantic tokens and RTL-first CSS.
- Validation: token check, TypeScript validation, browser render checklist.

## Architecture

1. Add a Vue app under `apps/vue` as the primary runnable surface.
2. Keep shared token packages framework-neutral.
3. Mark `apps/docs` as legacy/reference in documentation and do not add new behavior there.
4. Reuse existing semantic tokens and Persian typography contracts; do not introduce page-local values.

## File Structure

- `apps/vue/package.json`
- `apps/vue/index.html`
- `apps/vue/src/main.ts`
- `apps/vue/src/App.vue`
- `apps/vue/src/styles.css`
- `pnpm-workspace.yaml`
- `docs/architecture.md`
- `docs/getting-started.md`

## Verification Strategy

- `pnpm check:tokens`
- TypeScript validation for the Vue app.
- Start the Vue app and verify a browser render with `dir="rtl"`.
- Confirm no new feature behavior is added to `apps/docs`.
