# Button Preview — DoD Checklist

- [x] Button-only dotted glass and corner wash render as requested.
- [x] Button frame equals Split Button at the same 1280px browser viewport: 583.98px wide, 288px high, 24px radius.
- [x] Only Primary and Secondary are shown; both measure 48px high and retain content-based widths (63.73px and 81.78px).
- [x] Direct same-browser comparison confirms Button and Split Button frames have identical dimensions; RTL remains intact and document width (1265px) is 15px below viewport width (1280px), with no horizontal overflow.
- [x] Primary/Secondary and no Cancel confirmed visually in the live browser screenshot.
- [x] Same-browser responsive review at 390×844 confirms the local Button frame is 343×288px, Split Button is 343×288px, and the document stays 375px wide within the viewport. At 320×844, both frames are 273×288px and the document stays 305px wide; RTL remains intact with no horizontal overflow.
- [x] At 390×844, the design-reference Button frame measures 327×300px while Norato measures 343×288px. This geometry difference is intentional: the approved Norato rule makes the Button specimen match Split Button, while preserving the fixed 288px specimen height and responsive content inset. Button displays only Primary and Secondary.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass; build retains the existing >500KB JS advisory.
