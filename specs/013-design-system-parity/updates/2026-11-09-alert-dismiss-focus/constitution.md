# Constitution — Alert playground dismissal focus

- Preserve the public `NoratoAlert` API and controlled/uncontrolled model semantics.
- Keep RTL, existing interaction targets, tokens, and yellow keyboard focus treatment.
- When the live documentation playground removes a focused alert, move focus to the replacement action so keyboard users do not lose their place.
- Scope this change to the playground; do not force focus from the reusable adapter or add a focus trap.
