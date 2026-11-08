# Stepper — Constitution

- Persian RTL, semantic Norato tokens, Vazirmatn content and Estedad titles.
- Keep the design reference information hierarchy and four compositions: Horizontal, Vertical, Compact and Dots; use Norato yellow as the active accent.
- A Stepper communicates sequential progress. It is not free navigation; steps are status items and do not become links or buttons.
- The host controls the current step. The visual state is derived deterministically as Upcoming, Current, Completed or Error.
- Keep indicators, connector lines, labels and icons at intrinsic proportions; prevent stretched shapes and overflow at narrow widths.
- Announce the current step as “مرحلهٔ N از M” using accessible list semantics and a polite live status.
- Preserve visible 2px keyboard focus only for actual interactive playground controls; inert specimens contain no focusable descendants.
- Follow the Button page hierarchy: bounded inert preview, Vue playground, copyable usage and the full contract sections.
