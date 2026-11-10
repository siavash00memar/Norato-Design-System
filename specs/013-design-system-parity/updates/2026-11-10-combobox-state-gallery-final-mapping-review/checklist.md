# Checklist — Combobox state gallery final mapping review

- [x] Six expected state mappings and value/placeholder text render exactly once each: Default, Hover, Typing (`پژوهش`), Filled (`طراحی محصول`), Error (`مهارت نامعتبر`) and Disabled.
- [x] At 1536×703 all six targets are 48px, fields 36px, with correct neutral/yellow/error strokes and RTL; the live gallery is two-column with no vertical stretch.
- [x] At 390×844 and 320×844 all six cards remain bounded with no local horizontal overflow; final mapper measurements are 343px/273px card widths, 36px fields, 48px targets, with 375px/305px documents.
- [x] Reference content lists the same six named states. Local post-mapper layout and geometry were reviewed in-browser; comparison is limited to this inert gallery, not the exhaustive live matrix.
- [ ] Keep exhaustive live state matrix and independent screen-reader review open.
- [x] Token/catalog/typecheck/build/diff gates pass.
- [ ] Commit, push and verify remote parity.
