# Analyze — Table static avatar parity

- The selected reference's static data table shows a 24px avatar beside every user name.
- The local static Table specimen only shows the user's name and description, even though the live adapter already supports the user-row visual.
- `NoratoAvatar` is already imported in `ComponentSpecimen.vue`, and the `xs` size maps to the 24px Norato avatar token.
- The static sample container is already `aria-hidden` and inert, so a decorative avatar prevents duplicate announcements.
- Keep the shared frame height unchanged; the user previously requested consistent component preview card sizes.
- A real 390×844/320×844 browser viewport exposed an independent static-specimen defect: its table retains a 440px minimum width inside 348px/278px specimens, clipping columns although the document itself does not overflow.
- Fix the specimen with a tokenized fixed-layout table and constrained RTL column proportions at mobile widths; keep the live adapter's responsive stack behavior unchanged.
- Same-viewport desktop measurement (1536×703): reference stage 636×345.25px and table 561.60×258.39px; Norato specimen frame 631.98×300.50px and static table 560×274.50px. The shared 300px-class frame is retained; exact frame-height parity remains an explicit visual gap.
- After the fix, 390px specimen/table widths are 358/322px and 320px widths are 288/252px; table `scrollWidth` equals `clientWidth`, all rows remain 48px high, and document width equals viewport width.
