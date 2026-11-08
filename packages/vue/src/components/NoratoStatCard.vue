<script setup lang="ts">
export type NoratoStatTrend = 'up' | 'down' | 'neutral'

withDefaults(defineProps<{
  label: string
  value: string | number
  trend?: NoratoStatTrend
  trendLabel?: string
  dir?: 'rtl' | 'ltr'
}>(), { trend: 'neutral', dir: 'rtl' })
</script>

<template>
  <article class="norato-card norato-stat-card" :data-trend="trend" :dir="dir">
    <span class="norato-stat-card__label">{{ label }}</span>
    <strong class="norato-stat-card__value">{{ value }}</strong>
    <span v-if="trendLabel" class="norato-stat-card__trend"><span aria-hidden="true">{{ trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→' }}</span>{{ trendLabel }}</span>
  </article>
</template>
