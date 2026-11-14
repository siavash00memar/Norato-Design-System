# Constitution — File Upload native form payload proof

## Scope

Close the browser evidence gap for named native file inputs by adding a local-only form inspection action to the Vue File Upload playground.

## Invariants

- Keep all four public adapters and their API unchanged.
- Use the real native `FormData` constructor on the local form; never send the selected files to a network endpoint.
- Preserve required/disabled semantics, RTL, keyboard access, and minimum 48px interactive targets.
- Clear stale payload output when the selected controlled values change.
- Audit the current form and playground selectors before editing; use existing semantic styles/tokens.
- Validate in the actual browser and run project-required gates. No Vercel deployment.
