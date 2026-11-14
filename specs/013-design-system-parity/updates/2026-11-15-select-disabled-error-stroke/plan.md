# Plan — Select disabled/error Stroke precedence

1. Keep the change scoped to `select-field.css`; add a disabled+invalid pseudo-element rule using the existing semantic border and muted-surface tokens.
2. In the live Vue playground, compare enabled Error, Error + Disabled, and Error + Disabled + Loading. Confirm red only remains for enabled Error; disabled variants use neutral Stroke while error semantics and loading status persist.
3. Confirm the 48px target, RTL, default value, focus/hover yellow styling, and custom listbox behavior are unchanged; restore default playground state.
4. Record the contract rule, defect cause/correction, acceptance evidence, and remaining broader Select DoD in the request log and ERR log.
5. Run token, catalog, Vue TypeScript, production build, and diff checks. Do not close the Select family DoD; full state screenshots and independent screen-reader review remain open.

**Gate:** One token-only CSS precedence correction; no package/API or runtime behavior redesign.
