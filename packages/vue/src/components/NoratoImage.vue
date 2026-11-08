<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import '../image.css'

export type NoratoImageRatio = 'square' | 'landscape' | 'wide' | 'portrait'
export type NoratoImageState = 'default' | 'loading' | 'error'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  caption?: string
  ratio?: NoratoImageRatio
  state?: NoratoImageState
  objectFit?: 'cover' | 'contain'
  dir?: 'rtl' | 'ltr'
}>(), { caption: '', ratio: 'landscape', state: 'default', objectFit: 'cover', dir: 'rtl' })
const failed = ref(false)
watch(() => props.src, () => { failed.value = false })
const isError = computed(() => props.state === 'error' || failed.value)
</script>

<template>
  <figure class="norato-image" :data-ratio="ratio" :data-fit="objectFit" :data-state="isError ? 'error' : state" :dir="dir">
    <img v-if="!isError && state !== 'loading'" class="norato-image__media" :src="src" :alt="alt" @error="failed = true" />
    <div v-else-if="state === 'loading' && !isError" class="norato-image__placeholder" role="status" :aria-label="alt ? `در حال بارگذاری ${alt}` : 'در حال بارگذاری تصویر'"><span class="norato-image__spinner" aria-hidden="true" /></div>
    <div v-else class="norato-image__fallback" role="img" :aria-label="alt ? `${alt}؛ تصویر در دسترس نیست` : 'تصویر در دسترس نیست'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v13H4zM4 16l4.5-4.5 3.2 3.2 2.5-2.5L20 18M8 9h.01" /></svg><span>تصویر در دسترس نیست</span></div>
    <figcaption v-if="caption && !isError && state === 'default'" class="norato-image__caption">{{ caption }}</figcaption>
  </figure>
</template>
