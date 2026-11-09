<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import '../popover.css'

export type NoratoPopoverVariant = 'simple' | 'actions' | 'form'
export type NoratoPopoverPlacement = 'top' | 'bottom' | 'right' | 'left'
export type NoratoPopoverAlign = 'start' | 'center' | 'end'

const props = withDefaults(defineProps<{
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

const isNarrowViewport = ref(false)
let viewportQuery: MediaQueryList | undefined
const resolvedPlacement = computed(() => {
  if (isNarrowViewport.value && (props.placement === 'left' || props.placement === 'right')) return 'bottom'
  return props.placement
})

function updateViewportPlacement() {
  if (viewportQuery) isNarrowViewport.value = viewportQuery.matches
}

function handleNonModalTabExit(event: KeyboardEvent) {
  if (props.modal || event.key !== 'Tab' || event.altKey || event.ctrlKey || event.metaKey) return
  const panel = event.currentTarget as HTMLElement | null
  if (!panel) return

  const selector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  const visible = (element: HTMLElement) => element.tabIndex >= 0
    && element.getClientRects().length > 0
    && getComputedStyle(element).visibility !== 'hidden'
    && !element.closest('[inert], [aria-hidden="true"]')
  const inside = [...panel.querySelectorAll<HTMLElement>(selector)].filter(visible)
  const active = document.activeElement
  const edge = event.shiftKey ? inside[0] : inside.at(-1)
  if (inside.length && active !== edge) return
  if (!inside.length && active !== panel) return

  const triggerId = panel.getAttribute('aria-labelledby')
  const trigger = triggerId ? document.getElementById(triggerId) : null
  if (!trigger) return
  const outside = [...document.querySelectorAll<HTMLElement>(selector)].filter(element => !panel.contains(element) && visible(element))
  const triggerIndex = outside.indexOf(trigger as HTMLElement)
  const target = event.shiftKey
    ? outside[triggerIndex > 0 ? triggerIndex - 1 : outside.length - 1]
    : outside[triggerIndex >= 0 && triggerIndex < outside.length - 1 ? triggerIndex + 1 : 0]
  if (!target) return
  event.preventDefault()
  target.focus()
}

onMounted(() => {
  viewportQuery = window.matchMedia('(max-width: 840px)')
  updateViewportPlacement()
  viewportQuery.addEventListener('change', updateViewportPlacement)
})
onBeforeUnmount(() => viewportQuery?.removeEventListener('change', updateViewportPlacement))

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
        :side="resolvedPlacement"
        :align="align"
        :side-offset="sideOffset"
        :collision-padding="collisionPadding"
        :aria-describedby="(description || $slots.description) ? `${id}-description` : undefined"
        :dir="dir"
        @keydown.capture="handleNonModalTabExit"
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
