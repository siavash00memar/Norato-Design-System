<script setup lang="ts">
import { Separator } from 'reka-ui'

export type NoratoDividerOrientation = 'horizontal' | 'vertical'
export type NoratoDividerType = 'line' | 'label-center' | 'label-start'
export type NoratoDividerSpacing = 0 | 4 | 8
export type NoratoDividerTone = 'subtle' | 'strong'

const props = withDefaults(defineProps<{
  orientation?: NoratoDividerOrientation
  type?: NoratoDividerType
  spacing?: NoratoDividerSpacing
  tone?: NoratoDividerTone
  label?: string
  decorative?: boolean
}>(), {
  orientation: 'horizontal',
  type: 'line',
  spacing: 8,
  tone: 'subtle',
  label: 'یا',
  decorative: true,
})

const hasLabel = () => props.type !== 'line' && props.label.trim().length > 0
</script>

<template>
  <Separator
    class="norato-divider"
    :class="[
      `norato-divider--${orientation}`,
      `norato-divider--${type}`,
      `norato-divider--${tone}`,
    ]"
    :orientation="orientation"
    :decorative="decorative"
    :aria-hidden="decorative ? 'true' : undefined"
    :aria-label="!decorative && hasLabel() ? label : undefined"
    :data-spacing="spacing"
    :data-tone="tone"
    :data-type="type"
  >
    <template v-if="orientation === 'horizontal'">
      <span v-if="type === 'line' || !hasLabel()" class="norato-divider__rule" aria-hidden="true" />
      <template v-else-if="type === 'label-center'">
        <span class="norato-divider__rule" aria-hidden="true" />
        <span class="norato-divider__label" aria-hidden="true">{{ label }}</span>
        <span class="norato-divider__rule" aria-hidden="true" />
      </template>
      <template v-else>
        <span class="norato-divider__label" aria-hidden="true">{{ label }}</span>
        <span class="norato-divider__rule" aria-hidden="true" />
      </template>
    </template>
    <template v-else>
      <span v-if="type === 'line' || !hasLabel()" class="norato-divider__rule" aria-hidden="true" />
      <template v-else-if="type === 'label-center'">
        <span class="norato-divider__rule" aria-hidden="true" />
        <span class="norato-divider__label" aria-hidden="true">{{ label }}</span>
        <span class="norato-divider__rule" aria-hidden="true" />
      </template>
      <template v-else>
        <span class="norato-divider__label" aria-hidden="true">{{ label }}</span>
        <span class="norato-divider__rule" aria-hidden="true" />
      </template>
    </template>
  </Separator>
</template>
