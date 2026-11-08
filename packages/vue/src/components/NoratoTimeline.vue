<script setup lang="ts">
import NoratoTimelineItem from './NoratoTimelineItem.vue'
import type { NoratoTimelineEvent, NoratoTimelineLayout } from './timelineTypes'
withDefaults(defineProps<{ id?: string; events: readonly NoratoTimelineEvent[]; label?: string; layout?: NoratoTimelineLayout; dir?: 'rtl' | 'ltr' }>(), { label: 'رویدادها', layout: 'default', dir: 'rtl' })
</script>

<template>
  <ol :id="id" class="norato-timeline" :aria-label="label" :data-layout="layout" :dir="dir">
    <NoratoTimelineItem v-for="(event,index) in events" :key="event.id" :event="event" :layout="layout" :dir="dir" :position="events.length === 1 ? 'only' : index === 0 ? 'first' : index === events.length - 1 ? 'last' : 'middle'" />
  </ol>
</template>

<style scoped>
.norato-timeline{display:grid;gap:0;min-inline-size:0;margin:0;padding:0;list-style:none}
</style>
