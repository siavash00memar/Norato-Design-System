<script setup lang="ts">
import { inject, provide } from 'vue'
import { TooltipProvider as RekaTooltipProvider } from 'reka-ui'
import { noratoTooltipProviderKey } from './tooltip-context'

export type NoratoTooltipProviderProps = {
  delayDuration?: number
  skipDelayDuration?: number
}

withDefaults(defineProps<NoratoTooltipProviderProps>(), {
  delayDuration: 500,
  skipDelayDuration: 300,
})

// Reuse this explicit Norato scope so sibling adapters share the Reka skip-delay window.
const hasAncestorProvider = inject(noratoTooltipProviderKey, false)
provide(noratoTooltipProviderKey, true)
</script>

<template>
  <slot v-if="hasAncestorProvider" />
  <RekaTooltipProvider
    v-else
    :delay-duration="delayDuration"
    :skip-delay-duration="skipDelayDuration"
    :ignore-non-keyboard-focus="true"
  >
    <slot />
  </RekaTooltipProvider>
</template>
