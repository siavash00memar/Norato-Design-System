# Stepper — DoD

## Page and visual fidelity
- [x] Inert default preview is bounded and matches Lemon's composition at desktop; source marks the specimen inert and its adapter visuals have no interactive descendants.
- [x] Button-style page contains preview, live Vue playground, copyable usage and all nine contract sections.
- [x] Lemon/Norato desktop 1280×720 comparison preserves RTL and Norato yellow/neutral/error palette. Mobile 390×844 comparison remains open.
- [x] Horizontal, Vertical, Compact and Dots are visually reviewed on desktop; indicator circles/icons retain intrinsic dimensions and do not stretch.
- [ ] At 390px and 320px, no document overflow; long horizontal trails scroll internally and vertical remains bounded (mobile viewport check still open).

## Runtime, semantics and accessibility
- [x] Controlled current step, derived states, error override and live announcement tested in the desktop browser.
- [x] RTL/LTR first-step ordering and vertical indicator alignment reviewed; vertical RTL/mobile viewport pass remains open.
- [x] Optional descriptions and three Step Indicator sizes are represented; Dots Small/Medium/Large scaling and circular ring geometry were reviewed in the live playground.
- [ ] Invalid/duplicate ids and empty lists are not exhaustively runtime-tested; behavior is documented and typechecked.
- [x] Stepper has no false buttons/links; one current step in the named ordered list and polite “step N of M” status observed in the browser accessibility tree.
- [ ] Host playground controls have 48px minimum targets, keyboard operation and visible focus; error tested. Loading/disabled do not apply to this read-only adapter; exhaustive focus/target matrix remains open.
- [ ] Independent screen-reader review recorded or explicitly remains open.

## Technical gates
- [x] Token and catalog checks pass (catalog: 49 routes/contracts/exports).
- [x] Vue typecheck and production build pass; build emits the existing >500KB chunk advisory.
- [ ] `git diff --check` passes; CSS and docs diff reviewed.
- [ ] Catalog maturity/status, family ledger, checklist and GitHub checkpoint match actual evidence.
