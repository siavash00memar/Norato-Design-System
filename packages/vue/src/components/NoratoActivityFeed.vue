<script setup lang="ts">
import { useId } from 'vue'
import NoratoTimeline from './NoratoTimeline.vue'
import type { NoratoActivityGroup } from './timelineTypes'
const props = withDefaults(defineProps<{ id?: string; groups: readonly NoratoActivityGroup[]; label?: string; density?: 'default' | 'compact'; dir?: 'rtl' | 'ltr' }>(), { label: 'فعالیت‌ها', density: 'default', dir: 'rtl' })
const generatedId = useId()
const groupHeadingId = (groupId: string) => `${props.id ?? generatedId}-${groupId}`
</script>

<template>
  <section :id="id" class="norato-activity-feed" :data-density="density" :dir="dir" :aria-label="label">
    <section v-for="group in groups" :key="group.id" class="norato-activity-feed__group" :aria-labelledby="groupHeadingId(group.id)">
      <h3 :id="groupHeadingId(group.id)">{{ group.label }}</h3>
      <NoratoTimeline :events="group.events" :label="`${label}، ${group.label}`" layout="compact" :dir="dir" />
    </section>
  </section>
</template>

<style scoped>
.norato-activity-feed{display:grid;gap:var(--norato-space-5);min-inline-size:0}
.norato-activity-feed__group{display:grid;gap:var(--norato-space-3);min-inline-size:0}
.norato-activity-feed__group h3{margin:0;padding-block-end:var(--norato-space-2);border-block-end:var(--norato-border-thin) solid var(--norato-color-border-default);color:var(--norato-color-text-secondary);font-family:var(--norato-font-heading);font-size:var(--norato-type-body-small-size);font-weight:var(--norato-type-body-bold-weight)}
.norato-activity-feed[data-density="compact"]{gap:var(--norato-space-3)}
.norato-activity-feed[data-density="compact"] .norato-activity-feed__group{gap:var(--norato-space-2)}
</style>
