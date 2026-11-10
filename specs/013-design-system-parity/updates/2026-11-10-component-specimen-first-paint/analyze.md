# Analyze — Component specimen first paint

- **Finding:** The first-load route screenshot shows a reserved dotted frame and centered skeleton, but no Default marker; a second screenshot shows the expected real specimen.
- **Source:** `App.vue` lazy-loads `ComponentSpecimen` with a zero-delay `ComponentSpecimenLoading` fallback. The fallback already has an inert/hidden shell and reduced-motion handling.
- **Risk:** Eagerly importing all specimen code would undo route-level loading and increase the initial payload. Replacing only the placeholder label with a semantic Default marker retains the existing performance strategy.
- **Decision:** Make the fallback status match the canonical preview shell while leaving the control itself a neutral skeleton.

