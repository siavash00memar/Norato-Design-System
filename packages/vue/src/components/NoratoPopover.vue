<script setup lang="ts">
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import '../popover.css'

export type NoratoPopoverVariant = 'simple' | 'actions' | 'form'
export type NoratoPopoverPlacement = 'top' | 'bottom' | 'right' | 'left'
export type NoratoPopoverAlign = 'start' | 'center' | 'end'

withDefaults(defineProps<{
  id: string
  title: string
  description?: string
  variant?: NoratoPopoverVariant
  placement?: NoratoPopoverPlacement
  align?: NoratoPopoverAlign
  sideOffset?: number
  collisionPadding?: number
  modal?: boolean
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  description: '',
  variant: 'simple',
  placement: 'bottom',
  align: 'center',
  sideOffset: 8,
  collisionPadding: 8,
  modal: false,
  disabled: false,
  dir: 'rtl',
})

const open = defineModel<boolean>('open', { default: false })
const emit = defineEmits<{ 'close-auto-focus': [event: Event]; 'open-auto-focus': [event: Event] }>()

function close() {
  open.value = false
}
</script>

<template>
  <PopoverRoot v-model:open="open" :modal="modal" :dir="dir">
    <PopoverTrigger as-child :disabled="disabled">
      <slot name="trigger" :open="open" :disabled="disabled" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        class="norato-popover"
        :data-variant="variant"
        :side="placement"
        :align="align"
        :side-offset="sideOffset"
        :collision-padding="collisionPadding"
        :aria-describedby="(description || $slots.description) ? `${id}-description` : undefined"
        :dir="dir"
        @close-auto-focus="emit('close-auto-focus', $event)"
        @open-auto-focus="emit('open-auto-focus', $event)"
      >
        <header class="norato-popover__header">
          <h2 :id="`${id}-title`" class="norato-popover__title"><slot name="title">{{ title }}</slot></h2>
          <p v-if="description || $slots.description" :id="`${id}-description`" class="norato-popover__description"><slot name="description">{{ description }}</slot></p>
        </header>
        <div class="norato-popover__body"><slot :open="open" :close="close" /></div>
        <footer v-if="$slots.footer" class="norato-popover__footer"><slot name="footer" :close="close" /></footer>
        <PopoverArrow class="norato-popover__arrow" :width="12" :height="6" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
