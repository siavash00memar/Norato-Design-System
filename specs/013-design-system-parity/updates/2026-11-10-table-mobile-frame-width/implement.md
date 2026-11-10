# Implement — Table mobile frame width

- Added a mobile-only CSS rule scoped to the inert Table specimen. It applies `inline-size: calc(100% - var(--norato-space-4))`, border-box sizing and auto centering at widths up to 600px.
- Kept the desktop rule and the live `NoratoTable` adapter unchanged.
- Live browser at 1920×903 confirms RTL, document client/scroll width 1905px, frame 635.984×345px and inner table 562×258.5px.
- Exact 390×844 and 320×844 browser rechecks could not be performed in this CUA session because it exposed no viewport control. The checklist remains open for those measurements; the rule's expected geometry is not recorded as observed evidence.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed.
- Change was pushed as `802555d`; `HEAD` and `origin/master` matched at verification. The follow-up checklist commit records that remote parity check.
