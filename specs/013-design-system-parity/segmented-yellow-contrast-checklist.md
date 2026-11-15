# Segmented Control Yellow Contrast — Checklist

- [x] Existing selected Contrast hover selector is corrected in place; no duplicate override remains.
- [x] Selected Contrast uses yellow fill and dark text at rest and hover; white-on-yellow and blue selection accent are absent.
- [x] Glass selection remains raised white; disabled option and group remain disabled and muted. If the controlled selected item becomes disabled, the Playground preserves the value and the item renders with Disabled priority.
- [x] 24 group combinations (2 styles × 4 sizes × 3 option counts) preserve RTL order, horizontal non-wrapping geometry, selected state and target heights (48px; 56px XLarge).
- [x] Keyboard selection, roving focus, visible focus, Home/End, disabled skipping and non-empty controlled value behavior are verified in the live playground.
- [x] Same-viewport design reference/Norato mobile comparison at 390×844 and 320×640. Norato document widths are 375px and 305px with no overflow; specimen frames are 320×288px and 273×288px. Reference frames measure 327×300px and 257×300px; the reference document overflows at 320px (326px), which Norato does not reproduce.
- [x] All 64 item-state/style/size combinations were measured. This exposed Contrast selected+disabled precedence; the runtime adapter and inert gallery now use a neutral disabled surface, disabled text and no elevation. Browser confirmed the live selected item stays selected when its whole group becomes disabled and receives the neutral disabled styling.
- [x] Live Playground review selected Month and then disabled that item. The controlled value remained `month`, the button exposed selected and disabled state, and the neutral Disabled treatment overrode selection in both Glass and Contrast.
- [ ] Independent screen-reader review remains open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build completed with a 1,024.79KB JavaScript bundle; no separate warning was printed in this run.
- [x] Component contract, Figma rule, error log and request-validation record agree with the implementation.
- [x] 2026-11-10 Baseline visual audit: at a narrow mobile viewport, the local page and reference both show a bounded RTL segmented control, a distinct selected segment and no obvious stretch or clipping. Existing 390/320px measures and ≥48px targets are linked in the family evidence. Independent screen-reader review and the full live runtime matrix remain open for Final DoD.

## Live mobile geometry spot-check — 2026-11-15

- [x] At 390×844, the live Medium/3-item Contrast state retained 48px item targets, RTL order, Norato yellow selection, and a 30px selected pseudo-surface inset 8px from its top edge. The group (about 165px wide) stayed inside the 343px preview frame; document client/scroll widths were both 375px.
- [x] Restored the playground to Glass/Medium/3 items, Daily selected, enabled group and items.
- [x] Follow-up below expands the live base-state geometry check to every style × size × item-count combination at 390×844 and 320×720; selected/disabled/focus mobile-state comparison and independent screen-reader review remain open.

## Full mobile base-state geometry matrix — 2026-11-15

- [x] At both 390×844 (document 375px, frame 343px) and 320×720 (document 305px, frame 273px), manually selected all 2 styles × 4 sizes × 3 option counts in the live playground: 48 measured combinations total.
- [x] Every item remained 48px high for Small/Medium/Large and 56px for XLarge; selected surface color matched Glass white or Norato yellow as appropriate; labels remained RTL; each group fit its frame and document client/scroll widths matched.
- [x] Four-item XLarge at 320×720 fit the 273px frame exactly with no horizontal page overflow. The playground was restored to Glass/Medium/three options/Daily/enabled.
- [ ] This covers base selected geometry only. Mobile selected-disabled/focus/hover state comparison against the reference, saved per-cell screenshots, and independent screen-reader review remain open.
