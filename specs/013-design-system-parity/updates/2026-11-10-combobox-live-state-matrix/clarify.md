# Clarify — Combobox live state matrix

- No material UX/API decision remains unresolved. The public contract and prior component decisions define all axes and states.
- The adapter's native geometry maps Small/Medium/Large to 48px interaction rows and XLarge to 56px; visual capsules remain 36px.
- Error and Disabled can co-occur in the playground; Disabled stroke has priority per the existing approved contract.
- Hover is a transient pointer state and is not a substitute for keyboard focus. Typing and Filled require actual text/selection, while Disabled excludes active typing.
