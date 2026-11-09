<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ name?: string; compact?: boolean }>()
const largeFrame = computed(() => !['Tabs', 'Breadcrumbs', 'Chat'].includes(props.name ?? ''))
</script>

<template>
  <div
    class="component-specimen-loading"
    :class="{ compact, 'large-frame': largeFrame }"
    :data-component="name"
    aria-hidden="true"
    inert
  >
    <span class="specimen-loading-label"></span>
    <span class="specimen-loading-control"></span>
  </div>
</template>

<style scoped>
.component-specimen-loading {
  position: relative;
  display: grid;
  place-items: center;
  inline-size: min(100%, var(--norato-split-button-preview-frame-inline-size));
  min-block-size: calc(var(--norato-control-target-min) + var(--norato-space-16) + var(--norato-space-6));
  margin: var(--norato-space-4) auto 0;
  padding: var(--norato-space-6);
  overflow: hidden;
  border: var(--norato-border-thin) dotted var(--norato-color-border-strong);
  border-radius: var(--norato-split-button-preview-radius);
  background-color: var(--norato-color-glass-surface);
  background-image:
    radial-gradient(var(--norato-color-border-default) var(--norato-preview-dot-size), transparent var(--norato-preview-dot-size)),
    radial-gradient(ellipse at 8% 5%, var(--norato-color-warning-container), transparent 55%),
    radial-gradient(ellipse at 92% 100%, var(--norato-color-info-container), transparent 55%);
  background-size: var(--norato-preview-grid-size) var(--norato-preview-grid-size), 100% 100%, 100% 100%;
  box-shadow: var(--norato-elevation-box);
}

.component-specimen-loading.large-frame {
  min-block-size: var(--norato-split-button-preview-frame-block-size);
}

.specimen-loading-label,
.specimen-loading-control {
  position: absolute;
  border-radius: var(--norato-radius-pill);
  background: color-mix(in srgb, var(--norato-color-border-default) 44%, transparent);
  animation: specimen-loading-pulse 1.2s ease-in-out infinite alternate;
}

.specimen-loading-label {
  inset-block-start: var(--norato-space-5);
  inset-inline-end: var(--norato-space-5);
  inline-size: var(--norato-space-8);
  block-size: var(--norato-space-2);
}

.specimen-loading-control {
  inline-size: calc(var(--norato-space-16) * 2);
  block-size: var(--norato-control-visual-height);
}

.component-specimen-loading.compact {
  inline-size: 100%;
  min-block-size: var(--norato-control-target-min);
  margin-block: var(--norato-space-3);
  padding: var(--norato-space-2);
  border-style: solid;
  border-color: var(--norato-color-glass-line);
  border-radius: var(--norato-radius-card);
  background: var(--norato-color-surface-subtle);
  box-shadow: none;
}

.component-specimen-loading.compact .specimen-loading-label {
  display: none;
}

.component-specimen-loading.compact .specimen-loading-control {
  inline-size: var(--norato-space-16);
  block-size: var(--norato-space-6);
}

@keyframes specimen-loading-pulse {
  from { opacity: 0.36; }
  to { opacity: 0.72; }
}

@media (prefers-reduced-motion: reduce) {
  .specimen-loading-label,
  .specimen-loading-control {
    animation: none;
  }
}

@media (max-width: 600px) {
  .component-specimen-loading:not(.compact) {
    inline-size: min(100%, var(--norato-split-button-preview-frame-mobile-inline-size));
    min-inline-size: 0;
    padding-inline: var(--norato-space-2);
  }
}
</style>
