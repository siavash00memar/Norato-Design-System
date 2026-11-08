<script setup lang="ts">
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'reka-ui'
import '../drawer.css'

export type NoratoDrawerSide = 'right' | 'left' | 'bottom'
export type NoratoDrawerSize = 'small' | 'medium' | 'large'
export type NoratoDrawerDetent = 'auto' | 'half' | 'full'

const props = withDefaults(defineProps<{
  id: string
  title: string
  description?: string
  side?: NoratoDrawerSide
  size?: NoratoDrawerSize
  detent?: NoratoDrawerDetent
  dismissible?: boolean
  showClose?: boolean
  closeLabel?: string
  dir?: 'rtl' | 'ltr'
}>(), {
  side: 'right',
  size: 'medium',
  detent: 'auto',
  dismissible: true,
  showClose: true,
  closeLabel: 'بستن پنل',
  dir: 'rtl',
})

const open = defineModel<boolean>('open', { default: false })

function preventEscape(event: Event) {
  if (!props.dismissible) event.preventDefault()
}

function preventOutside(event: Event) {
  if (!props.dismissible) event.preventDefault()
}
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="norato-drawer__overlay" />
      <DialogContent class="norato-drawer" :id="id" :data-side="side" :data-size="size" :data-detent="detent" :dir="dir" role="dialog" aria-modal="true" @escape-key-down="preventEscape" @pointer-down-outside="preventOutside">
        <span v-if="side === 'bottom'" class="norato-drawer__handle" aria-hidden="true" />
        <header class="norato-drawer__header">
          <div class="norato-drawer__heading">
            <DialogTitle class="norato-drawer__title"><slot name="title">{{ title }}</slot></DialogTitle>
            <DialogDescription v-if="description || $slots.description" class="norato-drawer__description"><slot name="description">{{ description }}</slot></DialogDescription>
          </div>
          <DialogClose v-if="showClose" as-child>
            <button class="norato-drawer__close" type="button" :aria-label="closeLabel">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </DialogClose>
        </header>
        <div class="norato-drawer__body"><slot /></div>
        <footer v-if="$slots.footer" class="norato-drawer__footer"><slot name="footer" /></footer>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
