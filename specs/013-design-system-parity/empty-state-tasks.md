# Empty State — Tasks

- [x] Constitution: record design reference composition, Norato palette, RTL, 48px action floor, accessibility and DoD boundaries.
- [x] Specify: define both public APIs, separate 12/24 variant matrices, slots, semantics and acceptance criteria.
- [x] Clarify: inspect the live design reference page and settle defaults, visual treatment, action ownership and color differences.
- [x] Plan: sequence the seven required stages, legacy cleanup, implementation and validation.
- [x] Checklist: define DoD before implementation.
- [x] Analyze: inspect exact selectors, semantic tokens, exports/catalog wiring, page renderer and contract/usage patterns; evidence is recorded in `empty-state-analyze.md`.
- [x] Implement `NoratoEmptyStateVisual` and `NoratoEmptyState` with tokenized responsive RTL/LTR geometry.
- [x] Export adapters, update catalog, usage and Button-style page; replace static legacy specimen and add an interactive playground.
- [x] Update contract and Figma rules; record a matched 1280×720 design reference/Norato desktop preview. Frame sizes differ by the content columns: Norato 584×288px, design reference 636×300px.
- [x] Finish desktop horizontal RTL/LTR geometry checks; mirrored visual/content placement measured in both directions.
- [x] Exercise all 24 visual type × size × tone combinations; icon/art geometry fits its 40/48/64px container with no overflow.
- [x] Verify action click, keyboard focus, 48px targets and browser AX name/description/decorative hiding.
- [x] Record 390/320 viewport evidence with Chromium device emulation; both widths have zero document overflow and horizontal layout stacks cleanly.
- [x] Verify a consumer-sized custom SVG visual and raw anchor/button slot minimums (40×40px visual, 48px actions).
- [ ] Independent screen-reader review remains open.
- [x] Run final engineering gates: token/catalog checks, Vue typecheck/build and `git diff --check` pass.
- [x] Record the delivered APIs, page integration, and verification evidence in `empty-state-implement.md`; mark the initial source inventory in `empty-state-analyze.md` as historical.
- [x] Push verified checkpoint `580ba73` to GitHub; local and remote were synchronized before this checklist update.
