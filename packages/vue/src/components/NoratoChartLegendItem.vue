<script setup lang="ts">
withDefaults(defineProps<{ label: string; series: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; shape?: 'square' | 'line' }>(), { shape: 'square' })
</script>

<template>
  <span class="norato-chart-legend-item" :data-series="series" :data-shape="shape" dir="rtl"><i aria-hidden="true" /><span>{{ label }}</span></span>
</template>
