# Combobox — Checklist

- [x] Constitution, Specify, Clarify and Plan gates recorded in sequence.
- [x] Existing contract, implementation, playground, CSS and prior evidence inspected.
- [x] Lemon/Norato desktop screenshot and frame/field/menu measurements recorded at matching 1195×765; post-fix mobile screenshots were captured at 390×844 in the active browser window.
- [x] Single/multiple selection, all four sizes, inside/outside labels, clear, recent/loading/empty/create and error/disabled/required states were exercised in browser; the exhaustive combined visual gallery remains open.
- [x] RTL, keyboard traversal, Enter/Escape, field/option focus behavior and ARIA state/description were checked in browser; independent screen-reader verification remains open.
- [x] After reload, keyboard focus was rechecked: input focus outline is suppressed; the focused RTL field has a 2px Norato blue outline, 4px offset and 2px yellow halo; ArrowDown sets the active option ID. No duplicate 3px global input outline remains.
- [x] Existing frame token bounds preview to 288px high and 320px mobile width; current local desktop render is 540×288px with a 310×50px field (viewport 1195×765).
- [x] Button-like Preview + Vue playground + nine contract sections and semantic token usage re-confirmed in the rendered page.
- [x] Request checklist, contract, error log and family ledger updated with only observed results.
- [x] Token/catalog checks, Vue typecheck, production build and `git diff --check` pass for the correction batch.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass for the visual correction; build warns for a 635.58KB JS chunk.
- [x] Post-correction mobile render verified at 390×844: frame 320×288px, field 212×48px, marker visible, RTL layout, document width 375px with no horizontal overflow.
- [ ] Final DoD evidence is complete; the 96-variant visual matrix, all focus paths and independent screen-reader check remain open.
- [x] Lemon at 390×844 measures 327×300px for its preview frame and 375px document width; Norato at the same viewport measures 320×288px with 375px document width, visible marker, and 310×50px field shell. Neither page overflows horizontally; Norato is slightly smaller and bounded rather than stretched.
- [x] Keyboard Tab reaches the visible Clear action, which receives a 2px blue outline, 4px offset and 2px yellow halo. Combobox input remains the composite keyboard entry point; ArrowDown opens the menu and sets `aria-activedescendant`. The trigger is intentionally removed from sequential Tab order by Reka (`tabindex=-1`).
- [ ] Cross-component Input visual correction: 36px capsule inside the 48px target, Estedad Bold label, RTL/Vazirmatn Light 12px `#a1a1a1` placeholder, neutral `#e8e8e8` 1px rest stroke, yellow 1px hover/focus stroke, no field halo/outline. Keep focus indication on independent buttons.
- [x] Desktop follow-up: 48px row and 36px capsule measured; neutral 1px resting stroke, label/placeholder tokens and no outline/shadow verified. Keyboard focus sets the yellow 1px stroke, and Escape closes the menu. Mobile and matched Lemon comparison remain open.
