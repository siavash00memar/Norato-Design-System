# Checklist — Shared contract marker colors

- [x] Local browser screenshots show the Usage Do marker in pale green with green check on Empty State, Tag, Chip, and Split Button; Avoid is pale red/red, RTL remains yellow, and implementation remains neutral.
- [x] Accessibility symbols render on neutral tiles on Tag and Split Button; Empty State previously shared the same style in the fresh local render.
- [x] RTL marker alignment and shared marker dimensions/layout remain unchanged in these representative pages; independent link/information blue selectors were not edited.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), Vue typecheck, production build, and `git diff --check` pass.
- [x] Browser evidence recorded on local route; broader component-family DoD remains open.
