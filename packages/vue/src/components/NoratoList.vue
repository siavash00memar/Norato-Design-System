<script setup lang="ts">
import './list.css'

export type NoratoListVariant = 'plain' | 'inset' | 'grouped'

withDefaults(defineProps<{
  label: string
  variant?: NoratoListVariant
  dir?: 'rtl' | 'ltr'
}>(), {
  variant: 'plain',
  dir: 'rtl',
})
</script>

<template>
  <ul class="norato-list" :data-variant="variant" :dir="dir" :aria-label="label">
    <slot />
  </ul>
</template>
