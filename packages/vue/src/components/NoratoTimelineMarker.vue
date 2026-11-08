<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { NoratoTimelineIcon, NoratoTimelineMarkerType, NoratoTimelineTone } from './timelineTypes'

const props = withDefaults(defineProps<{
  type?: NoratoTimelineMarkerType
  tone?: NoratoTimelineTone
  icon?: NoratoTimelineIcon
  avatarName?: string
  avatarSrc?: string
  label?: string
}>(), { type: 'dot', tone: 'neutral', icon: 'package' })

const imageFailed = ref(false)
watch(() => props.avatarSrc, () => { imageFailed.value = false })
const initials = computed(() => (props.avatarName ?? '').trim().split(/\s+/u).slice(0, 2).map(part => [...part][0] ?? '').join(''))
const glyph = computed(() => ({ neutral: '•', active: '•', success: '✓', warning: '!', danger: '×' })[props.tone])
const toneLabels = { neutral: 'خنثی', active: 'فعال', success: 'موفق', warning: 'هشدار', danger: 'خطا' } as const
</script>

<template>
  <span class="norato-timeline-marker" :data-type="type" :data-tone="tone" role="img" :aria-label="label ?? avatarName ?? `نشانگر ${toneLabels[tone]}`">
    <img v-if="type === 'avatar' && avatarSrc && !imageFailed" :src="avatarSrc" alt="" @error="imageFailed = true" />
    <span v-else-if="type === 'avatar'" class="norato-timeline-marker__initials" aria-hidden="true">{{ initials || '؟' }}</span>
    <svg v-else-if="type === 'icon'" viewBox="0 0 24 24" aria-hidden="true">
      <template v-if="icon === 'check' || tone === 'success'"><path d="m5 12 4 4L19 6" /></template>
      <template v-else-if="tone === 'warning'"><path d="M12 8v5m0 3h.01" /><path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z" /></template>
      <template v-else-if="tone === 'danger'"><path d="m6 6 12 12M18 6 6 18" /></template>
      <template v-else-if="icon === 'clock'"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></template>
      <template v-else-if="icon === 'user'"><circle cx="12" cy="8" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></template>
      <template v-else><path d="M3 7h18l-2 13H5L3 7Z" /><path d="M3 7 5 3h14l2 4M9 11v5m6-5v5" /></template>
    </svg>
    <span v-else class="norato-timeline-marker__dot" aria-hidden="true">{{ glyph }}</span>
  </span>
</template>

<style scoped>
.norato-timeline-marker{position:relative;z-index:1;display:grid;place-items:center;flex:none;box-sizing:border-box;inline-size:var(--norato-space-8);block-size:var(--norato-space-8);overflow:hidden;border:var(--norato-border-thin) solid transparent;border-radius:var(--norato-radius-pill);background:var(--norato-color-surface-muted);color:var(--norato-color-text-secondary);font-family:var(--norato-font-body);font-size:var(--norato-type-body-caption-size);font-weight:var(--norato-type-body-bold-weight)}
.norato-timeline-marker[data-type="dot"]{inline-size:var(--norato-space-4);block-size:var(--norato-space-4);margin:var(--norato-space-2);background:var(--norato-color-border-strong)}
.norato-timeline-marker__dot{display:grid;place-items:center;inline-size:100%;block-size:100%;border-radius:inherit;color:inherit;line-height:1}
.norato-timeline-marker[data-type="dot"][data-tone="neutral"] .norato-timeline-marker__dot,.norato-timeline-marker[data-type="dot"][data-tone="active"] .norato-timeline-marker__dot{font-size:0}
.norato-timeline-marker[data-type="dot"][data-tone="success"]{background:var(--norato-color-status-success);color:var(--norato-color-surface-default)}
.norato-timeline-marker[data-type="dot"][data-tone="warning"]{background:var(--norato-color-status-warning);color:var(--norato-color-text-primary)}
.norato-timeline-marker[data-type="dot"][data-tone="danger"]{background:var(--norato-color-status-error);color:var(--norato-color-surface-default)}
.norato-timeline-marker[data-tone="active"]{border:var(--norato-border-focus) solid var(--norato-color-brand-yellow);background:var(--norato-color-glass-surface-strong);color:var(--norato-color-text-primary);box-shadow:var(--norato-elevation-new)}
.norato-timeline-marker[data-tone="success"]{background:var(--norato-color-success-container);color:var(--norato-color-status-success)}
.norato-timeline-marker[data-tone="warning"]{background:var(--norato-color-warning-container);color:var(--norato-color-status-warning)}
.norato-timeline-marker[data-tone="danger"]{background:var(--norato-color-error-container);color:var(--norato-color-status-error)}
.norato-timeline-marker[data-type="icon"] svg{inline-size:var(--norato-space-4);block-size:var(--norato-space-4);fill:none;stroke:currentColor;stroke-width:var(--norato-border-medium);stroke-linecap:round;stroke-linejoin:round}
.norato-timeline-marker[data-type="avatar"]{background:var(--norato-color-surface-subtle);font-size:var(--norato-type-body-caption-size)}
.norato-timeline-marker[data-type="avatar"] img{inline-size:100%;block-size:100%;object-fit:cover}
.norato-timeline-marker__initials{max-inline-size:100%;overflow:hidden;text-overflow:clip;white-space:nowrap}
</style>
