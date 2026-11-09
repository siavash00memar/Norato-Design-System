<script setup lang="ts">
export type NoratoTagTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info'
export type NoratoTagAppearance = 'soft' | 'outline'
export type NoratoTagSize = 'small' | 'medium' | 'large' | 'xlarge'

withDefaults(defineProps<{
  tone?: NoratoTagTone
  appearance?: NoratoTagAppearance
  size?: NoratoTagSize
  dot?: boolean
  dir?: 'rtl' | 'ltr'
}>(), { tone: 'neutral', appearance: 'soft', size: 'medium', dot: false, dir: 'rtl' })
</script>

<template>
  <span class="norato-tag" :data-tone="tone" :data-appearance="appearance" :data-size="size" :dir="dir">
    <span v-if="$slots.leadingIcon || $slots.icon" class="norato-tag__icon" aria-hidden="true"><slot name="leadingIcon"><slot name="icon" /></slot></span>
    <span class="norato-tag__label"><slot /></span>
    <span v-if="$slots.trailingIcon" class="norato-tag__icon" aria-hidden="true"><slot name="trailingIcon" /></span>
    <span v-if="dot" class="norato-tag__dot" aria-hidden="true" />
  </span>
</template>
