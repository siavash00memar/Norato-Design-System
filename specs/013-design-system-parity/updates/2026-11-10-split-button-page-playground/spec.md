# Specify — Split Button detail page playground

The Split Button detail page currently renders its generic usage snippet, while the live `SplitButtonPlayground` is placed in a sibling `v-else-if` that cannot run when the component has a usage snippet. A rendered-browser audit confirms the page has no `.button-playground` and no playground controls.

Acceptance:
- The `استفاده در Vue` section shows the adapter source, the existing runnable Split Button playground, and its live-generated code.
- The unreachable sibling section is removed; the page has one implementation/playground section and no duplicate playground.
- The preview, contract sections, catalog, public adapter, and top specimen remain unchanged.
- At 1280×720, 390×844, and 320×844, the detail page remains RTL and has no horizontal overflow; the playground controls remain usable.
