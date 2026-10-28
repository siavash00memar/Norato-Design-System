# Norato Design System — agent instructions

These instructions govern this design-system directory. They do not automatically govern sibling app source code. When adopting the package, merge relevant instructions into the target app's existing root AGENTS.md; preserve its other instructions.

## Terminator (project-wide reasoning)

- For substantive work in this directory, apply `C:\Users\s.memar\.agents\skills\terminator\SKILL.md` using evidence-first reasoning, source inspection, verification, and calibrated reporting.
- If the skill file is unavailable, keep those core behaviors and disclose that the full skill reference was unavailable; do not claim it was loaded.

## Authority and scope

- Read README.md, provenance.md, foundations.md, and the relevant sections of components.md/patterns.md before implementation.
- Baseline v0.1.0 is the **currently edited** sibling `../site/`, identified by `evidence/source-manifest.json`. Never replace it with the original ZIP, an audits backup, Elementor output, an old specification, or an external design-system repository.
- The whole package is draft. `extracted` means observed in edited source, not company-wide approval. `proposed` means a new normalization/extension. Do not present proposals as historical requirements.
- Preserve existing product functionality and use the app's current framework, theme and accessible controls unless the feature authorizes changes. App source and APIs are not supplied in this package.

## Implementation

- Use tokens.json as the token authority; tokens.css is generated. Run `python tools/build.py` after token edits. The flat JSON format is package-specific, not a claimed DTCG export.
- Consume `--norato-*` variables or map them into the app's theme. Avoid repeating visual literals that already have tokens. Content-specific geometry may remain local and should be justified.
- Use Vazirmatn for UI/body and Estedad 800 for display headings. Keep local font licenses; do not synthesize unprovided Estedad weights or reintroduce old Lalezar/remote Google Fonts defaults.
- Blue standard actions and yellow highlighted actions have different documented roles. Preserve dark text on yellow and accessible focus; do not infer a universal primary color from an old token name.
- Cover relevant default, hover, keyboard focus, disabled, loading, error, empty and success states. Do not invent working API calls or claim persistence for a visual demo.
- Keep semantic HTML, native keyboard behavior, explicit labels, logical CSS properties, mixed-text isolation and reduced motion.
- Reuse existing components before adding new ones. Prepare needed extensions as explicitly proposed with rationale, states and acceptance criteria; do not silently publish a global contract change. Routine reversible implementation choices can proceed within the authorized feature scope.
- Per-feature user needs, API behavior, permissions, sensitive data handling, calendar/currency and persistence are defined by that feature, not this design-system draft.

## Verification and handoff

- Run `python tools/verify.py` for package changes. Baseline source-hash failures require investigation; do not overwrite baseline evidence to make a check pass.
- Check relevant keyboard paths, RTL, long labels, error recovery and agreed widths. Report actual tests and limits, not an unperformed WCAG/user-research audit.
- Keep the existing landing files unchanged when working only on this package.
- Deliver changed files, rationale, verification evidence, and any deviations or proposals. See delivery.md and templates/feature-brief.md.
