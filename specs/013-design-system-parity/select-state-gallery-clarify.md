# Select State Gallery — Clarify

## Decisions

- design reference States evidence: the live `#select` page renders nine `.st-c` state cards with a bold title and short explanation. The top Preview/Variants sections contain actual field specimens; States itself does not.
- Norato scope: specialize only the Select state gallery; preserve the generic renderer for other components.
- Content: keep all entries generated from the Select contract, add concise Persian explanations by state kind, and keep component-family details (`Select`, `Multi Select`, `Select Option`) visible.
- Visual semantics: error red, disabled muted, selected/open blue, focus uses the existing Norato focus token, default uses Norato yellow. Use current semantic tokens.
- Interactivity: none; gallery remains `aria-hidden`/inert for decorative samples, with readable state title and copy as the documentation content.
- No API or visual behavior questions remain unresolved.
