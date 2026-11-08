<script setup lang="ts">
import { computed } from 'vue'

export type NoratoBadgeType = 'count' | 'dot'
export type NoratoBadgeSize = 'small' | 'medium'
export type NoratoBadgeTone = 'danger' | 'inverse' | 'neutral' | 'success'

const props = withDefaults(defineProps<{
  anchorLabel: string
  type?: NoratoBadgeType
  size?: NoratoBadgeSize
  tone?: NoratoBadgeTone
  count?: number
  maxCount?: number
  dir?: 'rtl' | 'ltr'
}>(), {
  type: 'count',
  size: 'medium',
  tone: 'danger',
  count: 0,
  maxCount: 99,
  dir: 'rtl',
})

const normalizedCount = computed(() => Number.isSafeInteger(props.count) && props.count >= 0 ? props.count : 0)
const normalizedMax = computed(() => Number.isSafeInteger(props.maxCount) && props.maxCount > 0 ? props.maxCount : 99)
const displayCount = computed(() => {
  const value = normalizedCount.value
  const max = normalizedMax.value
  return new Intl.NumberFormat('fa-IR', { useGrouping: false }).format(value > max ? max : value) + (value > max ? '+' : '')
})
const accessibleName = computed(() => {
  const label = props.anchorLabel.trim() || 'عنصر'
  if (props.type === 'dot') return `${label}، مورد جدید`
  return `${label}، ${displayCount.value} مورد`
})
</script>

<template>
  <span class="norato-badge" :data-type="type" :data-size="size" :data-tone="tone" :dir="dir">
    <span class="norato-badge__anchor"><slot name="anchor" :accessible-name="accessibleName" /></span>
    <span class="norato-badge__marker" aria-hidden="true">
      <span v-if="type === 'count'">{{ displayCount }}</span>
    </span>
  </span>
</template>

<style scoped>
.norato-badge{position:relative;display:inline-grid;inline-size:max-content;max-inline-size:100%;vertical-align:middle;line-height:1}
.norato-badge__anchor{display:inline-grid;place-items:center;min-inline-size:0;min-block-size:0}
.norato-badge__marker{position:absolute;z-index:1;inset-block-start:0;inset-inline-end:0;display:grid;place-items:center;box-sizing:border-box;inline-size:max-content;min-inline-size:var(--norato-badge-count-size-medium);block-size:var(--norato-badge-count-size-medium);padding-inline:0;transform:translate(-50%,-50%);border:var(--norato-border-focus) solid var(--norato-color-surface-default);border-radius:var(--norato-radius-pill);background:var(--badge-background);color:var(--badge-foreground);font-family:var(--norato-font-body);font-size:var(--norato-type-body-min-size);font-weight:var(--norato-type-body-bold-weight);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none;user-select:none}
.norato-badge[dir="ltr"] .norato-badge__marker{transform:translate(50%,-50%)}
.norato-badge[data-tone="danger"]{--badge-background:var(--norato-color-status-error);--badge-foreground:var(--norato-color-text-on-code)}
.norato-badge[data-tone="success"]{--badge-background:var(--norato-color-status-success);--badge-foreground:var(--norato-color-text-on-code)}
.norato-badge[data-tone="neutral"]{--badge-background:var(--norato-color-status-neutral);--badge-foreground:var(--norato-color-surface-default)}
.norato-badge[data-tone="inverse"]{--badge-background:var(--norato-color-surface-code);--badge-foreground:var(--norato-color-text-on-code)}
.norato-badge[data-type="count"][data-size="small"] .norato-badge__marker{inline-size:max-content;min-inline-size:var(--norato-badge-count-size-small);block-size:var(--norato-badge-count-size-small)}
.norato-badge[data-type="count"][data-size="medium"] .norato-badge__marker{inline-size:max-content;min-inline-size:var(--norato-badge-count-size-medium);block-size:var(--norato-badge-count-size-medium)}
.norato-badge[data-type="dot"] .norato-badge__marker{inline-size:var(--norato-badge-dot-size-medium);min-inline-size:var(--norato-badge-dot-size-medium);block-size:var(--norato-badge-dot-size-medium);padding:0}
.norato-badge[data-type="dot"][data-size="small"] .norato-badge__marker{inline-size:var(--norato-badge-dot-size-small);min-inline-size:var(--norato-badge-dot-size-small);block-size:var(--norato-badge-dot-size-small)}
</style>
