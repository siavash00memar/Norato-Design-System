<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import NoratoImage, { type NoratoImageRatio } from './NoratoImage.vue'
import NoratoImageThumbnail from './NoratoImageThumbnail.vue'
import NoratoLightbox from './NoratoLightbox.vue'
import type { NoratoLightboxItem } from './NoratoLightbox.vue'
import '../image.css'
export type NoratoGalleryItem = NoratoLightboxItem & { id: string; ratio?: NoratoImageRatio }
export type NoratoGalleryLayout = 'grid' | 'masonry' | 'featured'
const props = withDefaults(defineProps<{ id: string; label: string; items: NoratoGalleryItem[]; layout?: NoratoGalleryLayout; columns?: 2 | 3 | 4; dir?: 'rtl' | 'ltr' }>(), { layout: 'grid', columns: 3, dir: 'rtl' })
const selected = defineModel<number>('modelValue', { default: 0 })
const lightboxOpen = ref(false)
watch(() => props.items.length, length => { if (!length) selected.value = 0; else if (selected.value >= length) selected.value = length - 1 })
const lightboxItems = computed(() => props.items)
function open(index: number) { selected.value = index; lightboxOpen.value = true }
</script>
<template>
  <section class="norato-image-gallery" :class="`norato-image-gallery--${layout}`" :style="{ '--norato-image-gallery-columns': columns }" :aria-label="label" :dir="dir">
    <div v-if="layout === 'featured' && items.length" class="norato-image-gallery__featured">
      <button class="norato-image-gallery__main" type="button" :aria-label="`نمایش ${items[selected]?.alt || 'تصویر'}`" @click="open(selected)"><NoratoImage :src="items[selected].src" :alt="items[selected].alt" :caption="items[selected].caption" :ratio="items[selected].ratio || 'landscape'" /></button>
      <div class="norato-image-gallery__strip" role="group" :aria-label="`${label}؛ تصاویر بندانگشتی`"><NoratoImageThumbnail v-for="(item, index) in items" :key="item.id" :src="item.src" :alt="item.alt" :label="`تصویر ${index + 1}`" size="medium" :selected="selected === index" :more-count="index === items.length - 1 ? 12 : 0" @select="selected = index" /></div>
    </div>
    <div v-else class="norato-image-gallery__grid">
      <button v-for="(item, index) in items" :key="item.id" class="norato-image-gallery__item" type="button" :aria-label="`نمایش ${item.alt}`" @click="open(index)"><NoratoImage :src="item.src" :alt="item.alt" :caption="item.caption" :ratio="item.ratio || 'square'" /></button>
    </div>
    <NoratoLightbox :id="`${id}-lightbox`" v-model:open="lightboxOpen" v-model:index="selected" :items="lightboxItems" :label="label" :dir="dir" />
  </section>
</template>
