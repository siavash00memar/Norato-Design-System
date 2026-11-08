# Avatar — Tasks

- [x] Constitution: define RTL, Norato palette, accessible identity, status and 48-family scope.
- [x] Specify: define four adapter APIs and 55 total variants.
- [x] Clarify: inspect design reference and settle defaults, overlap, fallback, and declared 8px size inference.
- [x] Plan: order feature work and record material risks.
- [x] Checklist: define visual/behavior/accessibility/technical DoD before implementation.
- [x] Analyze existing selectors, tokens, exports, usage, page wiring, catalog and contracts; record findings in `avatar-analyze.md`.
- [x] Implement `NoratoAvatar`, `NoratoAvatarGroup`, `NoratoAvatarLabel`, and `NoratoAvatarStatus`.
- [x] Export component/type APIs and token CSS; add catalog and Button-style page preview/playground.
- [x] Update component contract and Figma rules; add usage snippet and error log notes.
- [ ] Exercise all 55 variants' rendered geometry, image fallback, group overflow/RTL, accessible names, and responsive widths in a real browser; compare with design reference.
- [ ] Run required engineering gates, record remaining screen-reader limits and push.

## Browser evidence — 2026-11-08

- [x] Local Avatar route is live and follows Button-style structure: bounded inert dotted specimen, separate live playground, copyable Vue usage, and contract sections.
- [x] Browser accessibility tree exposes the expected 36 Avatar combinations, 12 Group combinations, three Label sizes, four status states, and accessible image-fallback output. Group labels and hidden-person counts appear in the tree.
- [x] RTL group sample exposes member order followed by overflow count; design reference's written reference specifies first person right and +N left. Norato palette is retained.
- [x] Playground direction and size menus open/close; no native browser dropdown presentation is used.
- [x] Keyboard opened the direction menu, Home + Enter selected RTL, and the generated Vue snippet updated from LTR to RTL. Screenshots at the available narrow browser view show status dots at physical bottom-left in both directions.
- [ ] Do not close Avatar DoD yet: exact 390px/320px overflow, measured geometry for all 55 variants, matched responsive screenshot comparison, full playground focus audit, independent screen-reader review, and final gates remain.
