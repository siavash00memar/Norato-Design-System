<script setup lang="ts">
withDefaults(defineProps<{ label: string; value: string | number; date?: string; id?: string; series?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; dir?: 'rtl' | 'ltr' }>(), { series: 2, dir: 'rtl' })
</script>

<template>
  <div class="norato-chart-tooltip" :data-series="series" :role="id ? 'tooltip' : undefined" :id="id" :dir="dir">
    <span v-if="date" class="norato-chart-tooltip__date">{{ date }}</span>
    <span class="norato-chart-tooltip__row"><i aria-hidden="true" /><b>{{ label }}</b><strong dir="ltr">{{ value }}</strong></span>
  </div>
</template>
