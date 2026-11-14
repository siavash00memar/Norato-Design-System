# Analyze — Input size gallery

- The shared `.size-scale` currently renders measurements as squares and circles, so it is the wrong visual for an Input family. Replacing it globally would affect unrelated families and is out of scope.
- The live adapter already composes an Input shell with a separately drawn capsule; the documented visible-height token is 36px and the global minimum target token is 48px.
- A family-specific branch and CSS are needed, while keeping `.size-scale` for other components. Samples must be inert and must not be presented as executable adapters.
- The reference has four variable-height fields. Norato's approved fixed 36px height takes precedence; the gallery must disclose the visual difference rather than emulate variable heights.
