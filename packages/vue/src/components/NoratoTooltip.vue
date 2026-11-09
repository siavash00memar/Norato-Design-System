<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from 'reka-ui'
import NoratoTooltipProvider from './NoratoTooltipProvider.vue'

export type NoratoTooltipSurface = 'dark' | 'glass'
export type NoratoTooltipLayout = 'simple' | 'rich'
export type NoratoTooltipPlacement = 'top' | 'bottom' | 'right' | 'left'

const props = withDefaults(defineProps<{
  id: string
  title: string
  description?: string
  actionLabel?: string
  surface?: NoratoTooltipSurface
  layout?: NoratoTooltipLayout
  placement?: NoratoTooltipPlacement
  delayDuration?: number
  defaultOpen?: boolean
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  description: '',
  actionLabel: '',
  surface: 'dark',
  layout: 'simple',
  placement: 'top',
  delayDuration: undefined,
  defaultOpen: false,
  disabled: false,
  dir: 'rtl',
})

const open = defineModel<boolean>('open')
</script>

<template>
  <NoratoTooltipProvider :delay-duration="delayDuration ?? 500" :skip-delay-duration="300">
    <TooltipRoot v-model:open="open" :default-open="defaultOpen" :delay-duration="delayDuration" :disabled="disabled" :dir="dir">
      <TooltipTrigger as-child>
        <slot name="trigger" :open="open">
          <button class="norato-tooltip__trigger" type="button" :aria-label="title" :disabled="disabled">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M12 11v5m0-8h.01" /></svg>
          </button>
        </slot>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          :id="`${id}-content`"
          class="norato-tooltip__bubble"
          :data-surface="surface"
          :data-layout="layout"
          :side="placement"
          :side-offset="6"
          :collision-padding="8"
          :aria-label="layout === 'simple' ? title : undefined"
          :dir="dir"
        >
          <template v-if="layout === 'rich'">
            <strong class="norato-tooltip__title">{{ title }}</strong>
            <span v-if="description" class="norato-tooltip__description">{{ description }}</span>
            <span v-if="actionLabel" class="norato-tooltip__action" aria-hidden="true">{{ actionLabel }}</span>
          </template>
          <span v-else>{{ title }}</span>
          <TooltipArrow class="norato-tooltip__arrow" :width="10" :height="5" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </NoratoTooltipProvider>
</template>
