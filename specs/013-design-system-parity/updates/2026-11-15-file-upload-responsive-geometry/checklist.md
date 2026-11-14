# Checklist — File Upload responsive geometry evidence

- [x] Before correction, local 390px: document 375/375px; frame 328×300px; inner Dropzone 310×152px.
- [x] Reference 390px: document 375/375px; frame 327×300px; inner Dropzone 320.76×153.63px.
- [x] Before correction, local 320px: document 305/305px; frame 273×300px; inner Dropzone 255×152px.
- [x] Reference 320px: document 305/326px; frame 257×300px; inner Dropzone 245.16×174.42px.
- [x] Screenshots reviewed at both widths; local RTL composition is contained without visible clipping or stretch.
- [x] Adjusted local 390px render: frame 328×300px, inner Dropzone 318×152px; document 375/375px. Inner width is within 2.76px of the reference.
- [x] Adjusted local 320px render: frame 257×300px, inner Dropzone 247×152px; document 305/305px. Frame matches the reference width and inner width is within 1.84px.
- [x] Fixed inner panel height remains 152px in both renders; screenshots show bounded RTL content with no visible clipping/stretch.
- [x] Differences and still-open Final DoD items are recorded without claiming full parity.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
