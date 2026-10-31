# Definition of Done per component

- [ ] Matching Lemon page and current Norato page inspected at desktop and mobile widths.
- [ ] Preview composition, hierarchy, spacing, radius, icon order, and proportions compared; intentional Norato color/type/target deviations documented.
- [ ] No accidental vertical or horizontal stretch; component box geometry checked independently of its preview frame.
- [ ] Same page structure as Button: preview, runtime snippet or maturity note, and all nine contract sections with meaningful family-specific content.
- [ ] RTL reading order, Persian labels, and 48px minimum interaction targets verified.
- [ ] Supported interactions, keyboard, focus, disabled, loading, invalid, and responsive states checked; unsupported states labeled visual-only.
- [ ] Contract, Figma component rules, tasks, request-validation checklist, and error log updated when behavior or visual rules change.
- [ ] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, and `pnpm --dir apps/vue build` pass after the change.

Only check a line when the corresponding evidence was observed for that component. Record unavailable checks explicitly; do not mark the family complete while a required check is open.

## Select behavior acceptance checklist

- [ ] Reka UI version and Vue peer compatibility verified; existing Vue package primitive search recorded.
- [ ] Controlled single-select opens a Norato-token glass popover; selection commits immediately.
- [ ] Optional search filters choices, preserves groups, and reports an empty result.
- [ ] Multi-select supports chips/summary, option check state, pending selection, Confirm and Cancel.
- [ ] Escape cancels an uncommitted multi-selection; keyboard navigation reaches enabled choices and skips disabled choices.
- [ ] Four size variants, inside/outside label, RTL, required, error, disabled, loading and read-only are implemented with 48px minimum interactive targets.
- [ ] Desktop/mobile browser DoD and technical gates pass; per-family status may be checked only after all rows above pass.
