# Analyze — AI-Consumable Norato Documentation

## Pre-implementation evidence

- Existing general-purpose skill at `skills/norato-design-system/SKILL.md` had concise retrieval instructions but referenced a static 49-component index, did not define the exact repository feature workflow or browser DoD gates, and only briefly addressed private package availability.
- `packages/components/src/catalog.ts` currently defines 49 records with distinct readiness states; the repository's current objective to finish remaining components does not change the catalog count or imply every record has a runtime adapter.
- `docs/component-contracts/README.md` and 49 contract files are present. Catalog integrity currently cross-checks unique routes, contracts, readiness and exports.
- `packages/vue/README.md`, `packages/vue/src/index.ts`, `apps/vue/src/usage-examples.ts` and the Vue sources are stronger evidence for runtime availability and API than preview specimens.
- Root `.gitignore` ignored all of `.agents/`, so a Codex-discoverable skill in the project directory would not have reached GitHub by default.
- `apps/vue/src/TeamGuide.vue` is the visible guide for workspace setup, current examples, readiness and source locations; it had no AI-skill entry.
- `docs/request-validation-checklist.md` is the current ledger for visual/behavioral component DoD and contains open items; catalog status must not be described as proof every DoD has passed.

## Design decision

Maintain a general Agent Skills copy under `skills/` and a byte-identical Codex project-discovery copy under `.agents/skills/`. Add a narrow `.gitignore` exception only for the Norato skill path. Document private workspace requirements, dynamically look up the catalog and current DoD, and make the skill discoverable from the human docs and in-app team guide.

## Risks and checks

- Duplicated files may drift; compare hashes during validation and document that they must stay synchronized.
- Agent Skills discovery differs by tool; promise only the Codex project path and manual addition for other compatible agents.
- Browser validation can prove the app guide content and layout, not the behavior of every external agent runtime.
