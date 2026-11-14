# Progress Sizes Gallery — Checklist

- [x] Desktop stage is 631.984×134.125px locally and 636×134.125px in the reference; three size cards pair both forms and all six intrinsic markers without visible stretch.
- [x] 4/8/12px bars and 24/32/40px circles compute to their semantic tokens; yellow, RTL and per-size labels are preserved.
- [x] At 390×844, local/reference frames both measure 327×134.125px. At 320×844, both are 257px wide; local height is 216.375px vs reference 214.25px and the final card is centered on row two. Local documents measure 375/375px and 305/305px.
- [x] Gallery remains inert/hidden from the accessibility tree; live adapter/playground and other sections are unchanged.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass.
- [x] Progress's independent screen-reader review remains open in the parent DoD. No push or deployment was performed.
