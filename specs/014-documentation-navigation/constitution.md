# Documentation Navigation Constitution

- The documentation shell remains mounted while users switch between component pages.
- The current component is visually prominent in the RTL component index and exposed with `aria-current="page"`.
- Selection updates the shareable URL and browser history without a document reload.
- When selection changes, reveal the current item by scrolling only the component index; do not move unrelated page regions.
- Active treatment uses Norato semantic tokens, keyboard focus remains visible, and navigation works from a direct URL and browser Back/Forward.
