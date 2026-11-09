# Specify — Carousel parent model verification

## Need

Carousel DoD still lacks a browser observation of the parent application changing `v-model` independently of the playground's index selector. The adapter already uses Vue `defineModel`; this follow-up makes the existing controlled behavior reviewable from a separate parent-owned action.

## Acceptance contract

- Add a clearly named host-side control to the live playground that updates the parent's `active` ref directly.
- Keep the selected slide, active dot and controlled-index selector synchronized after that parent-originated update.
- Do not change the reusable adapter API, keyboard behavior or RTL default.
- Keep the additional control keyboard reachable, named, token styled and at least 48px high.
- Do not report the external-model DoD closed unless the exact rendered state is verified in browser.
