# Switch Matrix — Checklist

- [x] Source defines five Switch state groups × six size/value cells (30 total); local browser shows the dedicated gallery.
- [x] Source defines three Switch Field state groups × two on/off cells (6 total); local browser shows the family section.
- [x] Track sizes come from contract tokens (32×20, 40×24 and 48×28px); knob dimensions derive from track block-size minus the shared inset token. Adapter uses the same rules.
- [x] On/off placement uses logical inline positions and rendered RTL; hover, focus, disabled and error styles reference semantic Norato tokens.
- [x] Gallery is `inert` and `aria-hidden`; the separate actual Switch playground remains interactive.
- [x] Local desktop render visibly shows proportional tracks and state cards without apparent stretching at the available browser viewport.
- [ ] Matrix-specific mobile proportions and no-overflow behavior have not been measured; browser viewport resizing was unavailable.
- [ ] Same-viewport Lemon Variants comparison has not been captured. Lemon reference confirms content hierarchy and a different dark-on state; Norato Blue remains the approved palette.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass; build reports a 646.51KB main JavaScript chunk warning (>500KB).
- [x] Contract and this checklist record evidence and remaining DoD.
- [x] Family ledger and request validation record evidence and remaining DoD.
- [x] Commit `bbb95f0` pushed to `origin/master`; local HEAD and remote `master` match.
