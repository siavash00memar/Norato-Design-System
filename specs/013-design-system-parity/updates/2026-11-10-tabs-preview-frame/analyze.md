# Analyze — Tabs preview frame

- `ComponentSpecimen.vue` does not give Tabs the shared `sample-button-specimen` class. Tabs therefore inherits the generic frame minimum of 136px, despite the existing Tabs frame-height token being 300px.
- The reference top stage measures 636×300px at desktop, 327×300px at 390px, and 257×300px at 320px. The current Norato top specimen is only 136px at 320px.
- Reusing the existing dotted frame class preserves established page composition; a Tabs-only block-size token and mobile inset rule avoid changing unrelated specimens or the live adapter.
- `sample-tabs` itself already uses 48px minimum rows, flex alignment, RTL flow, and internal narrow-screen scrolling; those styles should not be changed.
- Browser inspection at 320px found a second defect: the narrow rule sets `overflow-x:auto` but not `overflow-y`; the 49px content box is 1px taller than its 48px client box, so the browser exposes vertical scroll arrows and reduces row content width by 15px. Set the existing cross-axis to hidden while retaining horizontal scrolling.
- After adding the shared 300px frame, local desktop bounds were 632×300px against the 636×300px reference. A global shell width change would affect unrelated pages, so use the already documented component-scoped 4px token extension at desktop widths only.
