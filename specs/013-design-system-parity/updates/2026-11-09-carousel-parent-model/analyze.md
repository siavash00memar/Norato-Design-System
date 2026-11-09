# Analyze — Carousel parent model verification

## Evidence

- `NoratoCarousel.vue` declares its active index with `defineModel<number>()` and watches parent changes to center the corresponding slide.
- `CarouselPlayground.vue` owns a `ref(0)` and binds it with `v-model`; existing pointer/keyboard actions update that host ref through the model contract.
- The current index selector also writes the same ref, so it cannot independently prove an application-originated update.
- A second, explicit parent action is the smallest way to exercise that path while keeping production adapter API unchanged.

## Risks

- Adding another visual control can make the configuration panel crowded. Keep it to one compact token-styled button in its own clearly labeled row and ensure it wraps on mobile.
- Scroll settling is asynchronous; verify the final selected card and active dot after the current snap completes.
