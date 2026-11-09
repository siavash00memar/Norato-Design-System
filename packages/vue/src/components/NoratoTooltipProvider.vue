<script setup lang="ts">
import { TooltipProvider as RekaTooltipProvider, injectTooltipProviderContext } from 'reka-ui'

export type NoratoTooltipProviderProps = {
  delayDuration?: number
  skipDelayDuration?: number
}

withDefaults(defineProps<NoratoTooltipProviderProps>(), {
  delayDuration: 500,
  skipDelayDuration: 300,
})

// Reuse an ancestor provider so sibling NoratoTooltips share the skip-delay window.
const hasAncestorProvider = injectTooltipProviderContext(null) !== null
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
