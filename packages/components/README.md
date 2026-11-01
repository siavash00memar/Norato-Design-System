# Norato component data

Import structured component metadata and the Foundation index from `@norato/components`:

```ts
import { componentCatalog, componentById, componentByName, componentBySlug, implementedComponents, foundationChapters, foundationOverviewCards, primitiveMap, type ComponentRecord, type ComponentStatus } from '@norato/components'

const button = componentBySlug.get('button')
```

## Data map

| Data | Canonical location | Purpose |
| --- | --- | --- |
| Component identity, route, search tags, readiness, contract path, specimen key, adapter/export | `src/catalog.ts` | Typed, flat metadata used by the Vue docs and team tools |
| Field definitions and status vocabulary | `src/types.ts` | Shared contract for the metadata |
| Foundation chapter navigation and overview cards | `src/foundation-chapters.ts` | One ordered list; cards are derived from it |
| Full component guidance | `docs/component-contracts/<slug>.md` | Human-maintained, independent nine-section contracts |
| Copyable Vue API examples | `apps/vue/src/usage-examples.ts` | Snippets referenced by `usageKey`; shown only for implemented records |
| Visual presentation | `apps/vue/src/ComponentSpecimen.vue` | Specimen renderer selected by `specimenKey`; not an API or readiness signal |
| Real Vue exports | `packages/vue/src/index.ts` | Runtime package public surface |
| Primitive implementation notes | `src/primitive-map.ts` | Decision ledger keyed by catalog ID; not a second inventory or readiness source |
| Legacy inventory import | `src/inventory.ts` | Deprecated alias to the complete catalog; migrate new consumers to `componentCatalog` |

`ComponentStatus` means: `Implemented` has a verified public Vue adapter and usage example; `Adapted` is composable from existing primitives without a dedicated adapter; `Proposed` has a contract/design but no ready runtime API; `Deferred` is intentionally postponed. A file or visual sample alone never establishes implementation readiness.

Tags are searchable metadata, not instructions to group component pages. IDs, slugs and contract paths are explicit and must not be generated from labels. Keep each component's route independent.

Run `pnpm check:catalog` after editing records, contracts, adapter exports or usage examples. The check verifies record uniqueness, all 49 Markdown files, readiness references and legacy duplicate maps.

## AI coding agents

Repository users can install or include the tracked skill at [`skills/norato-design-system/SKILL.md`](../../skills/norato-design-system/SKILL.md) in their coding agent's context. It describes how to resolve a component from this catalog, read its contract, verify whether a Vue adapter is real, follow the RTL/token rules, and avoid assuming that a visual specimen is an executable API. Refer to `AGENTS.md` as well for repository contribution workflow.
