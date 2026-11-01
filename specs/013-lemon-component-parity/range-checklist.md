# Range — DoD checklist

- [x] Lemon and Norato exact component pages inspected at desktop (1280×720) and mobile (390×844) viewport sizes.
- [x] Preview shows one compact labeled value slider and Default marker; proportions and spacing compared with Lemon. Norato desktop frame is 584×288px due to the detail column; mobile frame is 320×288px.
- [x] Single and two-thumb range values work through controlled Vue `v-model`.
- [x] RTL is explicit: minimum at physical right, fill grows right-to-left, and value labels stay with their thumbs.
- [x] Track/thumb geometry measured. At desktop and mobile, all 16 combinations of type/size/disabled passed; the slider remains 48px high and every thumb 48×48px.
- [x] ArrowLeft/Right, Home/End, pointer drag, 2px focus ring with 4px offset, disabled, error association, and non-crossing ordered range behavior verified.
- [x] Accessibility tree exposes named slider(s), min/max/current value, disabled state, and associated error description.
- [x] Button-parity page includes preview, runnable API playground, all nine contract sections, and per-section/API copy controls.
- [x] Contract, Figma rules, catalog, primitive map, usage snippet, tasks, request checklist and error log reflect verified behavior.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue build, and `git diff --check` pass; production build has an existing >500KB chunk warning (575.88KB JS).
