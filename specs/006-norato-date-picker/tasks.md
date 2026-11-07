# Tasks: Norato Date Picker — Lemon parity

- [x] T001 Constitution gate: confirm Vue 3, RTL, tokens, primitive evaluation, validation requirements.
- [x] T002 Specify gate: reconcile active Lemon-parity goal with the historical single-date spec; define seven modes and holiday/date-time boundaries.
- [x] T003 Clarify gate: inspect Lemon's live page and the current repository; record accepted scope and explicit defaults.
- [x] T004 Plan gate: record Jalali adapter, Vue composition, token, page, and validation strategy.
- [x] T005 Checklist gate: review requirements for completeness, traceability, and verifiability.
- [x] T006 Analyze gate: resolve cross-artifact consistency before implementation.
- [x] T007 Add and verify `@internationalized/date` 3.12.4; record its PersianCalendar 33-year arithmetic cycle, full-year range, Apache-2.0 license, and the narrower Norato wheel window.
- [x] T008 Implement a typed controlled Jalali date adapter and date/time/range value contract.
- [x] T009 Implement Date Input and all seven modes: Single, Range, Range + Presets, Date & Time, Month, Year, Wheel.
- [x] T010 Implement navigation, RTL weekday order, today/outside/Friday/holiday/selected/range/disabled states, and keyboard behavior; browser-verified arrows, PageUp/Down, Home/End, Enter, Escape, and focus restoration.
- [x] T011 Replace legacy date-picker selectors/specimen with token-based bounded geometry; remove vertical stretch.
- [x] T012 Add a Vue playground for mode, size, value, disabled/error, range endpoints, and time selection; match Button page structure.
- [x] T013 Update API usage example, contract/catalog/primitive map, Figma rules, request validation checklist, and error log.
- [x] T014 Verify desktop and mobile Lemon/Norato composition, seven modes, selection behavior, RTL, keyboard, focus, disabled/loading/error, AX tree, and overflow in the real browser. Independent screen-reader software was not run.
- [x] T015 Run `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check`; address failures and update DoD.
- [x] T016 Commit the initial adapted component and push it to GitHub; subsequent verified refinements and completion evidence are recorded in T017–T019.

- [x] T017 Compare Lemon and Norato specimen at desktop 1920×863; reduce the Norato specimen calendar token to 272px and record measured geometry and remaining visual review in DoD/error log. Push this refinement to GitHub.
- [x] T018 Add and browser-verify the loading state: spinner, `aria-busy`, polite status, and disabled controls; expose it in the playground; remove stale Proposed claims from team guidance and lab.
- [x] T019 Re-audit the stale family ledger against the live Lemon page and current Vue adapter. At 1280×720 and 390×844, compare preview frames; exercise all seven modes, range ordering/preset, Date & Time, Month, Year, Wheel, keyboard, status and responsive targets; reconcile DoD evidence and rerun technical gates.
