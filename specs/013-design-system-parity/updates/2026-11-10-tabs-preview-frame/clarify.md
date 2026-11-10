# Clarify — Tabs preview frame

- The current Tabs top specimen is only 136px high at a 320px viewport; its generic component frame lacks the Button-aligned frame class.
- Measured reference stage: 636×300px at 1920px, 327×300px at 390px, and 257×300px at 320px. Mobile stages start at x=24px.
- Initial local desktop measurement after restoring the shared frame was 632×300px, 4px narrow. Prior Tooltip evidence established a component-scoped `--norato-space-1` width extension after rejecting a global shell change; apply that pattern only to Tabs at desktop widths.
- An existing semantic `--norato-tabs-preview-frame-block-size` token is 300px, while the existing mobile frame cap is 328px. No new token or behavior decision is needed.
- The mobile `.sample-tabs` rule enables horizontal auto overflow but leaves the cross-axis at `auto`; the 1px bottom border creates 1px vertical overflow and a native vertical scrollbar that consumes 15px from the row.
- Keep the live adapter and its focused, keyboard-tested states unchanged.
