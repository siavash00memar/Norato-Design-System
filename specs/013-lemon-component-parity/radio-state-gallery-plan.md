# Radio State Gallery — Plan

1. Inspect Lemon Radio States and the shared renderer/CSS; identify the component-specific generic pill conflict.
2. Add Radio-only title/family/description cards and a scoped grid modifier; preserve generic rendering elsewhere.
3. Keep all eight derived Radio Button/Radio Field entries, static and inert.
4. Compare Norato and Lemon at equal desktop/mobile viewport sizes; verify all entries, RTL, no overflow, and no shape distortion. Check Button/Select regressions and Radio playground behavior.
5. Run token/catalog/type/build/diff gates and update component DoD, ledger, error log, and request checklist.

## Risk

Radio state entries are derived from repeated contract sections; count and family mapping must be checked after rendering.
