<script setup lang="ts">
export type NoratoSkeletonPatternType = 'text' | 'avatar-text' | 'list-item' | 'card' | 'card-horizontal' | 'input' | 'table-row' | 'stat'
export type NoratoSkeletonPatternEffect = 'pulse' | 'shimmer'

withDefaults(defineProps<{
  id?: string
  type?: NoratoSkeletonPatternType
  effect?: NoratoSkeletonPatternEffect
  label?: string
  dir?: 'rtl' | 'ltr'
}>(), {
  type: 'text',
  effect: 'pulse',
  label: 'در حال بارگذاری محتوا',
  dir: 'rtl',
})
</script>

<template>
  <div :id="id" class="norato-skeleton-pattern" :class="`norato-skeleton-pattern--${type}`" :data-effect="effect" :dir="dir" role="region" aria-busy="true" :aria-label="label">
    <div class="norato-skeleton-pattern__content" aria-hidden="true">
      <template v-if="type === 'text'"><i /><i /><i /></template>
      <template v-else-if="type === 'avatar-text' || type === 'list-item'"><i class="norato-skeleton-pattern__avatar" /><span class="norato-skeleton-pattern__lines"><i /><i /><i v-if="type === 'avatar-text'" /></span></template>
      <template v-else-if="type === 'card'"><i class="norato-skeleton-pattern__media" /><span class="norato-skeleton-pattern__lines"><i /><i /><i /></span></template>
      <template v-else-if="type === 'card-horizontal'"><i class="norato-skeleton-pattern__media" /><span class="norato-skeleton-pattern__lines"><i /><i /></span></template>
      <template v-else-if="type === 'input'"><span class="norato-skeleton-pattern__input" /></template>
      <template v-else-if="type === 'table-row'"><i /><i /><i /><i /></template>
      <template v-else><i class="norato-skeleton-pattern__stat-value" /><i class="norato-skeleton-pattern__stat-label" /></template>
    </div>
  </div>
</template>
