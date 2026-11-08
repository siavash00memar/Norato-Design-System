<script setup lang="ts">
import type { CSSProperties } from 'vue'

export type NoratoSkeletonShape = 'line' | 'circle' | 'rectangle' | 'pill'
export type NoratoSkeletonEffect = 'pulse' | 'shimmer'

const props = withDefaults(defineProps<{
  id?: string
  shape?: NoratoSkeletonShape
  effect?: NoratoSkeletonEffect
  label?: string
  width?: string | number
  height?: string | number
  dir?: 'rtl' | 'ltr'
}>(), {
  shape: 'line',
  effect: 'pulse',
  label: 'در حال بارگذاری محتوا',
  dir: 'rtl',
})

const cssSize = (value: string | number | undefined) => typeof value === 'number' ? `${value}px` : value
const style = (): CSSProperties => ({
  '--norato-skeleton-width': cssSize(props.width),
  '--norato-skeleton-height': cssSize(props.height),
}) as CSSProperties
</script>

<template>
  <span :id="id" class="norato-skeleton" :class="`norato-skeleton--${shape}`" :data-effect="effect" :dir="dir" role="region" aria-busy="true" :aria-label="label" :style="style()" />
</template>
