<script setup lang="ts">
export type NoratoEmptyStateSize = 'small' | 'medium' | 'large'
export type NoratoEmptyStateTone = 'neutral' | 'success' | 'warning' | 'danger'
export type NoratoEmptyStateVisualType = 'icon' | 'illustration'

withDefaults(defineProps<{
  type?: NoratoEmptyStateVisualType
  size?: NoratoEmptyStateSize
  tone?: NoratoEmptyStateTone
  dir?: 'rtl' | 'ltr'
}>(), {
  type: 'icon',
  size: 'medium',
  tone: 'neutral',
  dir: 'rtl',
})
</script>

<template>
  <span class="norato-empty-visual" :data-type="type" :data-size="size" :data-tone="tone" :dir="dir" aria-hidden="true">
    <svg v-if="type === 'icon'" class="norato-empty-visual__icon" viewBox="0 0 40 40" fill="none" focusable="false">
      <path d="M7 13.5h26v18H7z" />
      <path d="m7 16 13 9 13-9M14 10.5h12" />
      <circle cx="29.5" cy="10.5" r="3.5" />
    </svg>
    <svg v-else class="norato-empty-visual__art" viewBox="0 0 64 56" fill="none" focusable="false">
      <path class="norato-empty-visual__back" d="M13 9h25l6 6h8a3 3 0 0 1 3 3v24H10V12a3 3 0 0 1 3-3Z" />
      <path class="norato-empty-visual__front" d="M8 23a3 3 0 0 1 3-3h42a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V23Z" />
      <path d="M22 31h20M26 37h12" />
      <circle cx="48" cy="12" r="5" />
    </svg>
  </span>
</template>
