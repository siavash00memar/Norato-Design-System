# Empty State Sizes gallery — Clarify

- The same-viewport live reference DOM explicitly renders three `<i>` samples at 64×36px, each labeled Small, Medium, or Large. All three silhouettes are the same size.
- The reference samples sit in a dotted preview stage. They are a visual gallery, not a statement of the public component's actual icon/illustration dimensions.
- Their English labels progress Small → Medium → Large from left to right. Keep this inert documentation scale explicitly LTR while the page and live component remain RTL-first.
- The Button-structured page includes a States section, but Empty State has no independent interactive/data state. Its current generic blue pill/dot is misleading; replace that image with an explanatory note and a small Norato-yellow marker, without implying behavior.
- At 320px the reference Size stage wraps Small/Medium onto the first row and centers Large on the second; at 390px all three stay on one row. Keep intrinsic sample geometry at both widths.
- Keep the existing executable adapter scale (40/48/64px); use `--norato-empty-state-visual-large` and `--norato-control-visual-height` for the measured gallery silhouette.
- Preserve Norato styling: neutral surface, tokenized dotted border, and a restrained Norato-yellow stage glow; remove the generic pale-blue sample fill.
- Current Empty State Variants axis chips, Anatomy/Parts number badges, Usage/Accessibility markers, and the generic token-type marker inherit informational blue from page rules. Use neutral/yellow styles scoped to the Empty State page; keep success/warning/danger meaning in executable visual-tone examples intact.
- No material decision remains unresolved.
