# Analyze — Component page section order

- The UI already renders a dedicated top Preview section, and `App.vue` filters a `Preview` heading from contract-derived secondary sections. Adding this heading to contracts without changing the renderer will not duplicate the visible section.
- Contract markdown order directly controls the detail page body and side navigation. The deviations therefore create real page-structure inconsistency even when the top Preview exists.
- Several differences are straightforward order defects. Sidebar contains duplicate Sizes and a custom combined Sizes and states section; Toast contains unique API/RTL/DoD evidence among the canonical headings. A stable reordering pass must preserve every body and make supplemental material follow Tokens.
- The repair is documentation-only; runtime logic and component presentation should not change. The key risk is dropping or duplicating contract content while splitting/reordering headings, so audit heading sequence and retained text after editing.
