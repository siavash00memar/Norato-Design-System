<script setup lang="ts">
import NoratoSpinner, { type NoratoSpinnerSize, type NoratoSpinnerTone, type NoratoSpinnerType } from './NoratoSpinner.vue'

export type NoratoLoaderType = 'inline' | 'refresh' | 'overlay' | 'page'

withDefaults(defineProps<{
  type?: NoratoLoaderType
  active?: boolean
  label?: string
  spinnerType?: NoratoSpinnerType
  tone?: NoratoSpinnerTone
  size?: NoratoSpinnerSize
  dir?: 'rtl' | 'ltr' | 'auto'
}>(), {
  type: 'inline',
  active: true,
  label: 'در حال بارگذاری',
  spinnerType: 'ring',
  tone: 'default',
  size: 24,
  dir: 'rtl',
})
</script>

<template>
  <div
    v-if="active"
    class="norato-loader"
    :class="`norato-loader--${type}`"
    :data-type="type"
    role="status"
    aria-live="polite"
    :dir="dir"
  >
    <NoratoSpinner :type="spinnerType" :tone="tone" :size="size" />
    <span v-if="label" class="norato-loader__label">{{ label }}</span>
  </div>
</template>
