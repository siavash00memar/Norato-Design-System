# Button Preview — DoD Checklist

- [x] Button-only dotted glass and corner wash render as requested.
- [x] Button frame equals Split Button at the same 1280px browser viewport: 583.98px wide, 288px high, 24px radius.
- [x] Only Primary and Secondary are shown; both measure 48px high and retain content-based widths (63.73px and 81.78px).
- [x] Direct same-browser comparison confirms Button and Split Button frames have identical dimensions; RTL remains intact and document width (1265px) is 15px below viewport width (1280px), with no horizontal overflow.
- [x] Primary/Secondary and no Cancel confirmed visually in the live browser screenshot.
- [ ] 390px mobile viewport comparison remains unverified: available browser API did not expose viewport resizing.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass; build retains the existing >500KB JS advisory.
