# Specification — Pagination playground bounds

When the playground's total page count changes, its current page must remain in the inclusive range `1..totalPages`. Editing either number must keep the rendered selection and copyable Vue example synchronized. The correction is limited to playground controls; the controlled adapter contract remains unchanged.
