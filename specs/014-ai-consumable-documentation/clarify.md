# Clarify — AI-Consumable Norato Documentation

## Decisions

- Target consumers: Codex and coding agents that accept the Agent Skills `SKILL.md` convention.
- Distribution: versioned inside the Norato repository; no remote skill service or universal installer is promised.
- Runtime/API truth: catalog locates metadata, contracts define design expectations, Vue source and public exports define executable API, and the request-validation checklist records current DoD evidence.
- Package distribution: private pnpm workspace only until separately published; clone/checkout is required.
- Component counts: resolve from catalog; avoid static counts in the AI skill.
- Scope: make the existing skill and human setup docs accurate and useful. Do not fold component completion into this subfeature.

No material questions remain for this documentation change.
