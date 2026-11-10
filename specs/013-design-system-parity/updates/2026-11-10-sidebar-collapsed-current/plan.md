# Plan — collapsed Sidebar current location

1. Add recursive current-descendant detection to the existing adapter.
2. Apply an ancestor-current visual class and `aria-current="location"` only in collapsed desktop navigation.
3. Add demo-only capture handling for links inside the portaled mobile dialog; leave adapter navigation unchanged.
4. Reuse the existing semantic yellow surface/indicator; do not alter the live mobile drawer.
5. Update accessibility contract and Sidebar DoD evidence.
6. Verify expanded/collapsed direct and nested routes, one-current invariant, keyboard focus, responsive bounds, mobile playground routing and technical gates in the browser.
