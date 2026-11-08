# Empty State — Clarify Gate

## Source evidence

- The Lemon `#empty-state` page loaded in the browser. It reports two components and 36 variants: Empty State has 12 layout × size × container combinations; Empty State Visual has 24 type × size × tone combinations.
- Lemon's live preview has a centered icon, short Persian title, explanatory sentence, and primary/secondary actions inside a dotted glass frame. The preview is 636×300px at the observed 1265px browser window.
- Lemon's Anatomy has four parts: Visual, Title, Description, Actions. The horizontal layout places the visual at the right in RTL. Its action buttons are black by default; Norato brand-primary controls remain yellow with dark text.
- Lemon identifies the visual as decorative, and states that the title must carry the full meaning. Its Focus state is a 2px ring with 2px offset; Norato uses the semantic Norato focus token and 48px minimum action target.
- The local Empty State page currently has only a static sample, a blue striped placeholder icon, one action, and no preview frame or playground; no public adapter is exported.

## Decisions

- Use the exact 36 documented variants as two separate matrices; expose visual tone through `NoratoEmptyStateVisual` and pass it through the integrated Empty State without treating it as another Empty State variant dimension.
- Default to vertical, Medium, no inner card, Icon, Neutral. The outer Lemon-like dotted frame belongs to the page specimen, not the component itself.
- Keep primary action Norato-yellow with dark text and secondary action quiet/neutral. Preserve the Lemon action hierarchy while following Norato palette rules.
- Use a small original inline SVG illustration built from two stacked glass cards; no external image dependency. Keep it decorative and retain intrinsic width/height.
- Require a stable `id` for deterministic heading/description associations. Keep action content in named slots; do not create navigation or status announcements.
- Use semantic Section/Heading/Description markup and native button/link slots. Hosts are responsible for supplying valid accessible names and behavior for their actions.

**Clarify gate: passed.** No unresolved API or visual decision remains for this scoped implementation.
