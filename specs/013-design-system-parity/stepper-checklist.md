# Stepper — DoD

## Page and visual fidelity
- [x] Inert default preview is bounded and matches design reference's composition at desktop; source marks the specimen inert and its adapter visuals have no interactive descendants.
- [x] Button-style page contains preview, live Vue playground, copyable usage and all nine contract sections.
- [x] design reference/Norato desktop 1280×720 comparison preserves RTL and Norato yellow/neutral/error palette; exact 390/320 mobile bounds are recorded below, while matched mobile reference comparison remains open.
- [x] Horizontal, Vertical, Compact and Dots are visually reviewed on desktop; indicator circles/icons retain intrinsic dimensions and do not stretch.
- [x] At 390px and 320px, no document overflow; the four-step horizontal list can scroll internally, and the vertical list stays bounded. Exact viewport measurements are recorded in the 2026-11-10 follow-up below.

## Runtime, semantics and accessibility
- [x] Controlled current step, derived states, error override and live announcement tested in the desktop browser.
- [x] Fresh live follow-up: selecting Payment updates the ordered status list, current-step announcement and generated snippet; marking Payment as error adds the visible red marker/explanation and includes the message in the live status. Keyboard focus on the direction control shows the yellow focus ring; the playground was restored to Address/No error.
- [x] RTL/LTR first-step ordering and vertical indicator alignment reviewed; vertical RTL/mobile viewport pass remains open.
- [x] Optional descriptions and three Step Indicator sizes are represented; Dots Small/Medium/Large scaling and circular ring geometry were reviewed in the live playground.
- [x] Runtime handling for blank/duplicate ids, invalid current id and empty lists was exercised in the 2026-11-10 follow-up below.
- [x] Stepper has no false buttons/links; one current step in the named ordered list and polite “step N of M” status observed in the browser accessibility tree.
- [x] Host playground fields preserve a 36px visual height with a 48px pointer target and visible yellow keyboard ring. ArrowDown opens the selector; ArrowDown + Enter updates the selection and snippet; Escape closes and restores focus. Loading/disabled do not apply; exhaustive focus/target matrix remains open.
- [ ] Independent screen-reader review recorded or explicitly remains open.

## Technical gates
- [x] Token and catalog checks pass (catalog: 49 routes/contracts/exports).
- [x] Vue typecheck and production build pass; initial JavaScript is 442.34KB with no chunk-size advisory.
- [x] `git diff --check` passes; shared playground-trigger CSS and evidence-document changes were reviewed.
- [x] Catalog status (`Implemented`), family maturity (`Implemented`), open family DoD (`[ ]`), checklist evidence and pushed GitHub checkpoint match. Remaining DoD items stay explicit below.

## Stepper responsive bounds and playground targets — 2026-11-10

- [x] Actual local browser at 390×844: document client/scroll width 390/390px, preview shell 358×431.1px, inert frame 328×300px, RTL preserved.
- [x] Actual local browser at 320×844: document client/scroll width 320/320px, preview shell 288px wide, inert frame 288×300px at x=16px, RTL preserved.
- [x] At both widths, the horizontal step list keeps an internal scroll area (384px scroll width vs 340px and 270px visible list width); it does not expand the document. Vertical layout at 320px measures 270×208.8px with list client/scroll width and height matching.
- [x] Playground select buttons keep the visible 36px field, while a transparent pseudo-element extends the pointer hit target to exactly 48px. A click 3px above the visible field opened its menu at 320px. Keyboard focus at 390px exposes a 2px Norato-yellow ring and the dark amber contrast outline.
- [ ] Full keyboard-operation/focus matrix, matched mobile reference comparison and independent screen-reader review remain open; this follow-up does not close Stepper DoD.

## Stepper invalid data and empty-list behavior — 2026-11-10

- [x] A mixed list with empty and whitespace-only ids plus a duplicate renders only the two unique, nonblank steps. An invalid `modelValue` falls back to the first rendered step; exactly that item has `aria-current="step"`, and the live status announces step 1 of 2.
- [x] When the first valid id is duplicated and selected, the duplicate is omitted; the retained first item is current and the final unique item remains upcoming.
- [x] An all-blank list renders no visual or semantic step rows, sets no false `aria-current`, and announces «مرحله‌ای برای نمایش وجود ندارد.»
- [x] Restored the playground to its default four-step horizontal view with Address current.
- [ ] Full keyboard-operation/focus matrix, matched mobile comparison and independent screen-reader review remain open.

## Stepper playground keyboard path — 2026-11-10

- [x] With the default Horizontal variant, ArrowDown opens the first playground selector and focuses the selected option; ArrowDown moves to Vertical, and Enter updates the visible variant and generated snippet.
- [x] Escape closes the menu and returns focus to the trigger. Home + Enter restores the Horizontal default; Address remains the current step and the menu is closed.
- [ ] Full control-by-control keyboard/focus matrix, matched mobile reference comparison and independent screen-reader review remain open.

## Catalog maturity and GitHub checkpoint audit — 2026-11-10

- [x] `packages/components/src/catalog.ts` and the family ledger both report `Implemented`; the family completion checkbox remains open because matched mobile reference comparison, exhaustive keyboard/focus coverage and independent screen-reader review are unfinished.
- [x] Stepper evidence commits `45d8764`, `0c4e92a` and `074665a` are ancestors of the verified `origin/master` revision `2c2e467d84c2d7ff850f8fe18055859ffad79315`.
- [x] The token, catalog, Vue typecheck, production build and diff gates are recorded as passing in the family checklist and request-validation history.
