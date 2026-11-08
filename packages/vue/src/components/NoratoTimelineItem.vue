<script setup lang="ts">
import NoratoTimelineMarker from './NoratoTimelineMarker.vue'
import type { NoratoTimelineEvent, NoratoTimelineLayout, NoratoTimelinePosition } from './timelineTypes'
withDefaults(defineProps<{ event: NoratoTimelineEvent; layout?: NoratoTimelineLayout; position?: NoratoTimelinePosition; dir?: 'rtl' | 'ltr' }>(), { layout: 'default', position: 'middle', dir: 'rtl' })
const toneLabels = { neutral: 'خنثی', active: 'فعال', success: 'موفق', warning: 'هشدار', danger: 'خطا' } as const
</script>

<template>
  <li class="norato-timeline-item" :data-layout="layout" :data-position="position" :dir="dir">
    <NoratoTimelineMarker class="norato-timeline-item__marker" :type="event.markerType" :tone="event.tone" :icon="event.icon" :avatar-name="event.avatarName" :avatar-src="event.avatarSrc" :label="`${event.title}، ${toneLabels[event.tone ?? 'neutral']}`" />
    <article class="norato-timeline-item__content">
      <div class="norato-timeline-item__heading"><strong>{{ event.title }}</strong><time :datetime="event.datetime">{{ event.time }}</time></div>
      <p v-if="event.description">{{ event.description }}</p>
    </article>
  </li>
</template>

<style scoped>
.norato-timeline-item{position:relative;display:grid;grid-template-columns:minmax(0,1fr);min-inline-size:0;padding-block-end:var(--norato-space-4);padding-inline-start:var(--norato-space-12)}
.norato-timeline-item::before{position:absolute;inset-block-start:var(--norato-space-4);inset-block-end:calc(-1 * var(--norato-space-4));inline-size:var(--norato-border-thin);background:var(--norato-color-border-default);content:""}
.norato-timeline-item::before{inset-inline-start:calc(var(--norato-space-4) - var(--norato-border-thin))}
.norato-timeline-item[data-position="last"]{padding-block-end:0}
.norato-timeline-item[data-position="last"]::before{inset-block-end:calc(100% - var(--norato-space-4))}
.norato-timeline-item[data-position="only"]::before{display:none}
.norato-timeline-item__marker{position:absolute;inset-block-start:0}
.norato-timeline-item .norato-timeline-item__marker{inset-inline-start:0}
.norato-timeline-item__content{min-inline-size:0;padding-block-start:var(--norato-space-1)}
.norato-timeline-item__heading{display:flex;align-items:baseline;justify-content:space-between;gap:var(--norato-space-3);min-inline-size:0}
.norato-timeline-item__heading strong{min-inline-size:0;color:var(--norato-color-text-primary);font-family:var(--norato-font-heading);font-size:var(--norato-type-body-small-size);font-weight:var(--norato-type-body-bold-weight)}
.norato-timeline-item__heading time{flex:none;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-caption-size);font-variant-numeric:tabular-nums;white-space:nowrap}
.norato-timeline-item__content p{margin:var(--norato-space-1) 0 0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size);line-height:var(--norato-type-body-small-line-height)}
.norato-timeline-item[data-layout="card"] .norato-timeline-item__content{padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-glass-surface-strong);box-shadow:var(--norato-elevation-new)}
.norato-timeline-item[data-layout="compact"]{padding-block-end:var(--norato-space-2)}
.norato-timeline-item[data-layout="compact"] .norato-timeline-item__content{padding-block-start:var(--norato-space-1)}
.norato-timeline-item[data-layout="compact"] .norato-timeline-item__content p{display:none}
@media(max-width:420px){.norato-timeline-item{padding-inline-start:var(--norato-space-10)}.norato-timeline-item__heading{align-items:flex-start;flex-direction:column;gap:0}.norato-timeline-item__heading time{font-size:var(--norato-type-body-min-size)}}
</style>
