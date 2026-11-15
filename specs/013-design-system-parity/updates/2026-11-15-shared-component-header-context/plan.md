# Plan — Shared Component Header Context

1. Add the missing category metadata to Chip and Tag contracts.
2. Derive the selected contract once in `App.vue`; expose its `حوزه` and first Overview paragraph as computed header values.
3. Render the area as a small category eyebrow and use the extracted summary in the existing shared header, retaining the readiness badge.
4. Strip inline Markdown safely and clamp the visible summary to two lines with tokenized type, color, and spacing styles.
5. Verify all 49 pages through the catalog contract and a same-viewport Button/Input browser comparison; check RTL and narrow layout.
6. Run token, catalog, Vue typecheck, production build, and diff gates; record evidence and remaining DoD in the checklist, request validation, and error log.
