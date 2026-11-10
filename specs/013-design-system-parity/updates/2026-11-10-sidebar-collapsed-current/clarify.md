# Clarify — collapsed Sidebar current location

- No user decision is needed. Choose the WAI-ARIA `location` token for the visible ancestor only while its current descendant is hidden. The exact destination retains `page` semantics whenever it is visible. This matches the [W3C WAI-ARIA 1.2 definition](https://www.w3.org/TR/wai-aria-1.2/#aria-current) of these two values.
- This follows the ARIA definition of `location` as the current location within an environment or context. Only one item is current at a time.
