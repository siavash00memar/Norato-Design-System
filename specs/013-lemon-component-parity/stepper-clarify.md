# Stepper — Clarify

No blocking question remains. The user has authorized choosing implementation details for the ongoing component completion goal. Use this Vue 3 controlled contract:

- `id: string`, `steps: NoratoStep[]`, `modelValue: string` (step id), `variant?: horizontal|vertical|compact|dots`, `size?: small|medium|large`, `errorStep?: string`, `errorText?: string`, `dir?: rtl|ltr`.
- `NoratoStep` has stable `id`, short `label`, optional `description`. Lemon's 3–6 steps is a content recommendation, not a hard runtime limit; accept longer flows without truncation.
- Derive status from index relative to current id; `errorStep` overrides the visual status while current id remains the single `aria-current` step. Invalid current ids clamp to the first step; invalid/duplicate step ids are ignored after the first.
- `errorStep` without `errorText` uses a generic Persian explanation in the visual and accessible status text.
- Never emit model updates from interaction; consumers control advancement. No clickable step, no step navigation, no optional/completion API beyond controlled current id.
- Vertical uses optional descriptions. Compact is a labeled current/total summary with a single progress track. Dots keeps per-step labels in the accessibility tree and uses labels visually on medium/large only where space allows.
- Keep min 48px item target only in the playground controls; the Stepper itself is non-interactive and should not add fake hit areas.
- Error color uses semantic error token, completed/current accent uses Norato yellow, and text/connector use Norato neutral tokens.

These choices prioritize Lemon's progress semantics and the Norato rule against using a stepper for free navigation. No undocumented design source is assumed beyond Lemon's rendered page and the existing Norato contract.
