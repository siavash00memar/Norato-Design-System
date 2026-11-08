<script setup lang="ts">
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'reka-ui'
import '../image.css'
export type NoratoLightboxItem = { src: string; alt: string; caption?: string }
const props = withDefaults(defineProps<{ id: string; items: NoratoLightboxItem[]; index?: number; label?: string; dir?: 'rtl' | 'ltr' }>(), { index: 0, label: 'نمایش تصویر', dir: 'rtl' })
const emit = defineEmits<{ 'update:index': [value: number] }>()
const open = defineModel<boolean>('open', { default: false })
function move(delta: number) { if (!props.items.length) return; emit('update:index', (props.index + delta + props.items.length) % props.items.length) }
</script>
<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="norato-lightbox__overlay" />
      <DialogContent class="norato-lightbox" :dir="dir" :aria-labelledby="`${id}-title`" :aria-describedby="undefined" @keydown.left.prevent="move(1)" @keydown.right.prevent="move(-1)">
        <DialogTitle :id="`${id}-title`" class="norato-lightbox__sr-only">{{ items[index]?.caption || items[index]?.alt || label }}</DialogTitle>
        <DialogClose class="norato-lightbox__close" type="button" aria-label="بستن نمایشگر تصویر">×</DialogClose>
        <button v-if="items.length > 1" class="norato-lightbox__previous" type="button" aria-label="تصویر قبلی" @click="move(1)">›</button>
        <img v-if="items[index]" class="norato-lightbox__image" :src="items[index].src" :alt="items[index].alt" />
        <button v-if="items.length > 1" class="norato-lightbox__next" type="button" aria-label="تصویر بعدی" @click="move(-1)">‹</button>
        <p v-if="items[index]?.caption" class="norato-lightbox__caption">{{ items[index].caption }}</p>
        <span v-if="items.length > 1" class="norato-lightbox__count" aria-live="polite">{{ index + 1 }} / {{ items.length }}</span>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
