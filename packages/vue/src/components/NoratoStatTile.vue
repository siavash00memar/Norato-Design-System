<script setup lang="ts">
import { computed, useId } from 'vue'
import type { NoratoChartTrend } from './chartTypes'
const props = withDefaults(defineProps<{ label: string; value: string | number; trend?: NoratoChartTrend; change?: string; accessibleLabel?: string; dir?: 'rtl' | 'ltr' }>(), { trend: 'neutral', dir: 'rtl' })
const trendLabel = computed(() => ({ up: 'افزایش', down: 'کاهش', neutral: 'بدون تغییر' })[props.trend])
const titleId = `norato-stat-${useId()}`
const spark = computed(() => props.trend === 'up' ? '4,30 20,24 36,26 52,12 68,6' : props.trend === 'down' ? '4,6 20,12 36,10 52,24 68,30' : '4,18 20,16 36,20 52,16 68,18')
</script>

<template>
  <article class="norato-stat-tile" :data-trend="trend" :dir="dir" :aria-labelledby="accessibleLabel ? undefined : titleId" :aria-label="accessibleLabel">
    <div class="norato-stat-tile__copy"><p :id="titleId">{{ label }}</p><strong dir="ltr">{{ value }}</strong><span v-if="change" class="norato-stat-tile__change"><b aria-hidden="true">{{ trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→' }}</b>{{ change }} <span class="sr-only">{{ trendLabel }}</span></span></div>
    <svg class="norato-stat-tile__spark" viewBox="0 0 72 36" aria-hidden="true"><polyline :points="spark" /></svg>
  </article>
</template>
