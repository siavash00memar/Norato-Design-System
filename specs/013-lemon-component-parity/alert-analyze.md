# Alert — Analyze

- Lemon page currently defines one in-page message and 20 combinations (five tones × two styles × two layouts). Anatomy is status icon, title, description, action and close control. Inline is a single concise line; Expanded allows title, detail and actions.
- Norato already has the same 20 variants in `docs/component-contracts/alert.md`, but catalog marks it Adapted and the page only displays a hand-authored static sample.
- Existing `.sample-alert` selector is bundled with other generic samples in `apps/vue/src/component-specimen.css`; it uses a hard-coded info edge and lacks the full tone/layout/style model. It must be replaced with scoped Alert selectors, not layered.
- No dedicated alert primitive is listed in `packages/components/src/primitive-map.ts`. A native Vue adapter is appropriate because alerts are persistent in-page status content, not dialogs.
- Existing semantic Norato status container/text/icon and geometry tokens are available; use them instead of raw colors/spacing. Lemon's blue default cannot be copied because Norato's brand accent is yellow.
- Product interaction is resolved by component scope: persistent by default, optional caller-controlled dismissal, never timed dismissal; action content is caller-owned.
- Risks to verify: assertive announcements should be limited to danger; focus remains visible on dismiss; narrow widths should wrap rather than force the preview or page wide.
