# Checklist — Combobox preview frame width

- [x] Matched desktop browser render at 1536×703 shows reference 636×300px and local 635.98×300px.
- [x] Adjustment targets only the frame selector; field remains governed by its existing 324px preview token.
- [ ] Mobile override remains unchanged and fresh 390px/320px post-change browser checks show no overflow.
- [x] Token/catalog/typecheck/build/diff gates pass.
- [x] DoD, request validation and error log record results and remaining checks.
