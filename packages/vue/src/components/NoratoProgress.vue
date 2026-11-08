<script setup lang="ts">
import { computed } from 'vue'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'

export type NoratoProgressVariant = 'linear' | 'circular'
export type NoratoProgressSize = 'small' | 'medium' | 'large'
export type NoratoProgressTone = 'default' | 'success' | 'warning' | 'danger'

const props = withDefaults(defineProps<{
  id: string
  value: number
  label: string
  variant?: NoratoProgressVariant
  size?: NoratoProgressSize
  tone?: NoratoProgressTone
  showValue?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  variant: 'linear',
  size: 'medium',
  tone: 'default',
  showValue: true,
  dir: 'rtl',
})

const value = computed(() => Number.isFinite(props.value) ? Math.max(0, Math.min(100, Math.round(props.value))) : 0)
const valueText = computed(() => `${new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 0 }).format(value.value)}٪`)
const getAccessibleLabel = () => props.label
const getAccessibleValue = () => valueText.value
</script>

<template>
  <ProgressRoot
    :id="id"
    class="norato-progress"
    :class="`norato-progress--${variant}`"
    :data-variant="variant"
    :data-size="size"
    :data-tone="tone"
    :dir="dir"
    :model-value="value"
    :get-value-label="getAccessibleLabel"
    :get-value-text="getAccessibleValue"
  >
    <template v-if="variant === 'linear'">
      <span v-if="label" class="norato-progress__label">{{ label }}</span>
      <div class="norato-progress__track" aria-hidden="true">
        <ProgressIndicator class="norato-progress__fill" :style="{ inlineSize: `${value}%` }" />
      </div>
      <span v-if="showValue" class="norato-progress__value">{{ valueText }}</span>
    </template>
    <template v-else>
      <svg class="norato-progress__ring" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <circle class="norato-progress__ring-track" cx="20" cy="20" r="17" pathLength="100" />
        <circle class="norato-progress__ring-fill" cx="20" cy="20" r="17" pathLength="100" stroke-dasharray="100 100" :stroke-dashoffset="100 - value" />
      </svg>
      <span v-if="size !== 'small' && showValue" class="norato-progress__center-value">{{ valueText }}</span>
      <span v-if="label" class="norato-progress__sr-only">{{ label }}</span>
    </template>
  </ProgressRoot>
</template>
