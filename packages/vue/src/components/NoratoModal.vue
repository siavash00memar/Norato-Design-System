<script setup lang="ts">
import { DialogContent, DialogDescription, DialogPortal, DialogRoot, DialogTitle } from 'reka-ui'
import '../modal.css'

export type NoratoModalSize = 'small' | 'medium' | 'large'

const props = withDefaults(defineProps<{
  id: string
  title: string
  description?: string
  size?: NoratoModalSize
  dismissible?: boolean
  showClose?: boolean
  closeLabel?: string
  role?: 'dialog' | 'alertdialog'
  variant?: 'modal' | 'dialog'
  busy?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  size: 'medium',
  dismissible: true,
  showClose: true,
  closeLabel: 'بستن پنجره',
  role: 'dialog',
  variant: 'modal',
  busy: false,
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
      <div v-if="open" class="norato-modal__overlay" />
      <DialogContent
        :id="id"
        class="norato-modal"
        :data-size="size"
        :data-variant="variant"
        :dir="dir"
        :role="role"
        :aria-busy="busy || undefined"
        @escape-key-down="preventEscape"
        @pointer-down-outside="preventOutside"
      >
        <header class="norato-modal__header">
          <div class="norato-modal__heading">
            <DialogTitle class="norato-modal__title"><slot name="title">{{ title }}</slot></DialogTitle>
            <DialogDescription v-if="description || $slots.description" class="norato-modal__description"><slot name="description">{{ description }}</slot></DialogDescription>
          </div>
          <button v-if="showClose" class="norato-modal__close" type="button" :aria-label="closeLabel" @click="open = false">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </header>
        <div class="norato-modal__body"><slot /></div>
        <footer v-if="$slots.footer" class="norato-modal__footer"><slot name="footer" /></footer>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
