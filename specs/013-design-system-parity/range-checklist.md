# Range — DoD checklist

- [x] design reference and Norato exact component pages inspected at desktop (1280×720) and mobile (390×844) viewport sizes.
- [x] Preview shows one compact labeled value slider and Default marker; proportions and spacing compared with design reference. Norato desktop frame is 584×288px due to the detail column; mobile frame is 320×288px.
- [x] Single and two-thumb range values work through controlled Vue `v-model`.
- [x] RTL is explicit: minimum at physical right, fill grows right-to-left, and value labels stay with their thumbs.
- [x] Track/thumb geometry measured. At desktop and mobile, all 16 combinations of type/size/disabled passed; the slider remains 48px high and every thumb 48×48px.
- [x] ArrowLeft/Right, Home/End, pointer drag, 2px focus ring with 4px offset, disabled, error association, and non-crossing ordered range behavior verified.
- [x] Accessibility tree exposes named slider(s), min/max/current value, disabled state, and associated error description.
- [x] Button-parity page includes preview, runnable API playground, all nine contract sections, and per-section/API copy controls.
- [x] Contract, Figma rules, catalog, primitive map, usage snippet, tasks, request checklist and error log reflect verified behavior.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue build, and `git diff --check` pass; production build has an existing >500KB chunk warning (575.88KB JS).

- [x] 2026-11-02 follow-up: browser rerender shows the visible thumb centered inside its 48×48px target and keyboard focus decorates the 16px visual thumb with a 2px dark outline and yellow halo. ArrowLeft changes 60→61 and ArrowRight restores 60; RTL remains intact.

## Screenshot correction — 2026-11-02

- [x] Range CSS contains one canonical declaration per part/state; no thumb pseudo-track remains and disabled colors are scoped to disabled state.
- [x] At RTL values 0, 52 and 100, the SliderRange edge and thumb center align within 0.02 CSS px at 380px and 1920px; the inset visual rail spans exactly between the endpoint centers.
- [x] Default thumb is white with dark 2px stroke; disabled thumb and track are gray, with no yellow pseudo-track residue.
- [x] Keyboard focus remains visible on the 20px visual knob; target stays 48×48px. RTL keyboard Home/End and Arrow keys, pointer clicks at both visible rail endpoints (0/100), focus ring, disabled colors, and the two-thumb range fill were checked.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue production build and `git diff --check` pass; production build reports an 812.63KB JavaScript chunk warning.
