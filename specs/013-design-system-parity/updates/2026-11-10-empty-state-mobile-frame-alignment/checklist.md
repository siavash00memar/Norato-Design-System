# Checklist — Empty State mobile frame alignment

- [x] Existing Empty State mobile selectors audited; no conflicting frame width rule.
- [x] 390×844 reference/local frame widths match at 327×300px; local document is 375px.
- [x] 320×844 reference/local frame widths match at 257×300px; local document is 305px with no overflow.
- [x] Inner RTL content remains centered and does not stretch; desktop stays 635.98×300px.
- [x] Token/catalog, TypeScript, build, request-validation evidence, and `git diff --check` pass.
- [ ] Push the verified change to origin/master.
