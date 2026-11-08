<script setup lang="ts">
import { computed, ref, watch, onBeforeUnmount } from 'vue'
import '../carousel.css'
export type NoratoCarouselSize = 'small' | 'medium' | 'large'
export interface NoratoCarouselItem { id: string; title: string; description?: string; image?: string; alt?: string }
const props = withDefaults(defineProps<{ id: string; label: string; title?: string; items: NoratoCarouselItem[]; size?: NoratoCarouselSize; dir?: 'rtl' | 'ltr'; viewAllLabel?: string; viewAllHref?: string }>(), { title: '', size: 'medium', dir: 'rtl', viewAllLabel: '', viewAllHref: '' })
const active = defineModel<number>({ default: 0 })
const track = ref<HTMLElement>()
const total = computed(() => props.items.length)
let scrollTimer: ReturnType<typeof setTimeout> | undefined
const bounded = (value: number) => Math.max(0, Math.min(total.value - 1, value))
function scrollTo(index: number) { const target = track.value?.children.item(index) as HTMLElement | null; if (!target) return; target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }) }
function go(index: number) { active.value = bounded(index) }
function onScroll() { clearTimeout(scrollTimer); scrollTimer = setTimeout(() => { const el = track.value; if (!el) return; const slides = [...el.children] as HTMLElement[]; if (!slides.length) return; const center = el.getBoundingClientRect().left + el.clientWidth / 2; let best = 0; let distance = Infinity; slides.forEach((slide, i) => { const r = slide.getBoundingClientRect(); const d = Math.abs((r.left + r.right) / 2 - center); if (d < distance) { best = i; distance = d } }); active.value = best }, 140) }
onBeforeUnmount(() => clearTimeout(scrollTimer))
function onKeydown(event: KeyboardEvent) { if (event.key === 'ArrowLeft') { event.preventDefault(); go(active.value + (props.dir === 'rtl' ? 1 : -1)) } else if (event.key === 'ArrowRight') { event.preventDefault(); go(active.value + (props.dir === 'rtl' ? -1 : 1)) } }
watch(total, () => { active.value = bounded(active.value) })
watch(active, value => { const next = bounded(value); if (next !== value) { active.value = next; return } scrollTo(next) })
</script>
<template>
  <section :id="id" class="norato-carousel" :data-size="size" :dir="dir" role="region" aria-roledescription="کاروسل" :aria-label="label">
    <header class="norato-carousel__header"><div><h2 v-if="title">{{ title }}</h2><a v-if="viewAllHref && viewAllLabel" :href="viewAllHref">{{ viewAllLabel }}</a></div><div class="norato-carousel__controls"><button type="button" :aria-label="dir === 'rtl' ? 'بعدی' : 'قبلی'" :disabled="active >= total - 1" @click="go(active + 1)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg></button><button type="button" :aria-label="dir === 'rtl' ? 'قبلی' : 'بعدی'" :disabled="active <= 0" @click="go(active - 1)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg></button></div></header>
    <div ref="track" class="norato-carousel__track" tabindex="0" @keydown="onKeydown" @scroll.passive="onScroll"><article v-for="(item,index) in items" :key="item.id" class="norato-carousel__slide" role="group" aria-roledescription="اسلاید" :aria-label="`${index+1} از ${total}`"><img v-if="item.image" :src="item.image" :alt="item.alt || ''" /><div class="norato-carousel__copy"><h3>{{ item.title }}</h3><p v-if="item.description">{{ item.description }}</p><slot name="slide" :item="item" :index="index" /></div></article></div>
    <div class="norato-carousel__dots" role="group" aria-label="انتخاب اسلاید"><button v-for="(_,index) in items" :key="index" type="button" :class="{ 'is-active': index === active }" :aria-label="`رفتن به اسلاید ${index+1}`" :aria-current="index === active ? 'true' : undefined" @click="go(index)" /></div>
  </section>
</template>
