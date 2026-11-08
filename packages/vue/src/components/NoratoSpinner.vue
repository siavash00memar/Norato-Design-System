<script setup lang="ts">
export type NoratoSpinnerType = 'ring' | 'dots' | 'norato'
export type NoratoSpinnerTone = 'default' | 'subtle' | 'inverse'
export type NoratoSpinnerSize = 16 | 20 | 24 | 32 | 48

withDefaults(defineProps<{
  type?: NoratoSpinnerType
  tone?: NoratoSpinnerTone
  size?: NoratoSpinnerSize
}>(), {
  type: 'ring',
  tone: 'default',
  size: 24,
})
</script>

<template>
  <span class="norato-spinner" :data-type="type" :data-tone="tone" :data-size="size" aria-hidden="true">
    <svg v-if="type !== 'dots'" class="norato-spinner__ring" viewBox="0 0 40 40" focusable="false">
      <circle class="norato-spinner__track" cx="20" cy="20" r="17" pathLength="100" />
      <circle class="norato-spinner__arc" :class="{ 'is-norato': type === 'norato' }" cx="20" cy="20" r="17" pathLength="100" />
    </svg>
    <span v-else class="norato-spinner__dots"><i /><i /><i /></span>
  </span>
</template>
