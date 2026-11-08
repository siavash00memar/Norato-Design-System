# Avatar — Analyze

## Repository evidence

- `packages/components/src/catalog.ts` marks Avatar as `Proposed`; it has no adapter or usage key. `packages/vue/src/index.ts` exports `NoratoAvatarUpload` only; that file-input control is unrelated to a display Avatar.
- `apps/vue/src/ComponentSpecimen.vue` contains a single static `.sample-avatar` with initials and label. The legacy selector lives in `apps/vue/src/component-specimen.css` and must be replaced before adding adapters.
- `apps/vue/src/App.vue` chooses `implementationSnippet` from catalog `usageKey` and `usageExamples`; it has explicit branches for families with playgrounds. `ContractVisualShowcase` supplies the nine section skeleton for Avatar.
- `docs/component-contracts/avatar.md` describes the four component families and broad size range but provides no executable API and identifies brand blue as a token; replace that obsolete palette guidance with neutral surfaces, yellow brand accents and semantic statuses.
- Existing palette provides yellow, surface, success, warning, error and neutral status tokens. Typography provides Vazirmatn/Estedad; layout has no Avatar-specific dimensions yet. Add only component-scoped semantic size/ring/overlap tokens.
- design reference's live page provides the four family matrices, 2px surface ring, bottom-left dot and RTL group order. It lists six sizes spanning 24–64px without exact intermediate sizes; the 8px progression in Clarify is an explicit implementation assumption.

## Implementation boundary

- Add four display adapters and shared types. `NoratoAvatarUpload` stays untouched.
- Keep image failure local to rendered fallback; no fetching or upload state.
- Group uses native list semantics, visually overlaps avatars with logical margins, and exposes an accessible group label and overflow summary.
- Replace the static `.sample-avatar` CSS in place. Keep the top sample inert and instantiate executable variants only in a dedicated playground.
- Update catalog, usage, contract, Figma rules, request checklist, error log and family ledger as evidence permits.

## Risks to verify

- Browser support and TS library type for `Intl.Segmenter`; use a safe fallback.
- Status text must be exposed without duplicating name announcements in Avatar Label and Group.
- Square radius and group overlap are informed design choices because design reference gives names/endpoints rather than numeric geometry.
- Full screen-reader DoD requires an independent screen-reader session; browser accessibility-tree inspection alone cannot close it.
