<script setup lang="ts">
import NoratoEmptyStateVisual, { type NoratoEmptyStateSize, type NoratoEmptyStateTone, type NoratoEmptyStateVisualType } from './NoratoEmptyStateVisual.vue'

export type NoratoEmptyStateLayout = 'vertical' | 'horizontal'
export type NoratoEmptyStateContainer = 'none' | 'card'

withDefaults(defineProps<{
  id: string
  title: string
  description: string
  layout?: NoratoEmptyStateLayout
  size?: NoratoEmptyStateSize
  container?: NoratoEmptyStateContainer
  visualType?: NoratoEmptyStateVisualType
  visualTone?: NoratoEmptyStateTone
  dir?: 'rtl' | 'ltr'
}>(), {
  layout: 'vertical',
  size: 'medium',
  container: 'none',
  visualType: 'icon',
  visualTone: 'neutral',
  dir: 'rtl',
})
</script>

<template>
  <section
    class="norato-empty-state"
    :class="`norato-empty-state--${layout}`"
    :data-size="size"
    :data-container="container"
    :dir="dir"
    :aria-labelledby="`${id}-title`"
    :aria-describedby="`${id}-description`"
  >
    <div class="norato-empty-state__visual" aria-hidden="true">
      <slot name="visual">
        <NoratoEmptyStateVisual :type="visualType" :size="size" :tone="visualTone" :dir="dir" />
      </slot>
    </div>
    <div class="norato-empty-state__content">
      <h2 :id="`${id}-title`" class="norato-empty-state__title">{{ title }}</h2>
      <p :id="`${id}-description`" class="norato-empty-state__description">{{ description }}</p>
      <div v-if="$slots['primary-action'] || $slots['secondary-action']" class="norato-empty-state__actions">
        <slot name="primary-action" />
        <slot name="secondary-action" />
      </div>
    </div>
  </section>
</template>
