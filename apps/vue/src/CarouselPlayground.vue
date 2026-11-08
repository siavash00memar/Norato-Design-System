<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoCarousel, type NoratoCarouselItem, type NoratoCarouselSize } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const size = ref<NoratoCarouselSize>('medium')
const count = ref(5)
const active = ref(0)
const artwork = (sky: string, land: string) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520"><defs><linearGradient id="g" x2="0" y2="1"><stop stop-color="${sky}"/><stop offset="1" stop-color="#fff6d8"/></linearGradient></defs><rect width="900" height="520" fill="url(#g)"/><circle cx="700" cy="140" r="62" fill="#fdc101"/><path d="M0 360 190 205l170 142 168-202 372 260v115H0Z" fill="${land}"/><path d="M0 430q200-90 390 0t510-28v118H0Z" fill="#627c58"/></svg>`)}`
const items: NoratoCarouselItem[] = [
  { id: 'path', title: 'مسیرهای تازه', description: 'ایده‌هایی برای تجربه‌های روزمره', image: artwork('#8ab7c5', '#829180'), alt: 'چشم‌انداز کوهستانی' },
  { id: 'craft', title: 'ساخته‌های دست', description: 'انتخاب‌هایی با جزئیات ماندگار', image: artwork('#edc1aa', '#a46e5a'), alt: 'رنگ‌های گرم و طبیعی' },
  { id: 'home', title: 'برای خانه', description: 'چیزهای کوچک برای حال بهتر', image: artwork('#ead7a9', '#a3a477'), alt: 'چشم‌انداز آرام' },
  { id: 'nature', title: 'هوای تازه', description: 'الهام از طبیعت و رنگ‌های گرم' },
  { id: 'daily', title: 'روزهای ساده', description: 'پیشنهادهایی برای هر روز' },
]
const visibleItems = computed(() => items.slice(0, count.value))
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoCarousel, type NoratoCarouselItem } from '@norato/vue'\nconst active = ref(0)\nconst items: NoratoCarouselItem[] = [{ id: 'one', title: 'پیشنهاد امروز' }, { id: 'two', title: 'انتخاب دوم' }, { id: 'three', title: 'انتخاب سوم' }]\n<\\/script>\n<template><NoratoCarousel id="suggestions" v-model="active" label="پیشنهادها" title="پیشنهادهای امروز" :items="items" size="medium" dir="rtl" /></template>`)
</script>
<template>
  <div class="carousel-playground" dir="rtl">
    <div class="carousel-playground__stage"><NoratoCarousel id="carousel-playground" v-model="active" label="پیشنهادهای امروز" title="پیشنهادهای امروز" view-all-label="مشاهدهٔ همه" :items="visibleItems" :size="size" /></div>
    <div class="carousel-playground__controls"><PlaygroundSelect id="carousel-size" v-model="size" label="اندازهٔ اسلاید" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" /><PlaygroundSelect id="carousel-count" v-model="count" label="تعداد اسلاید" :options="[{value:3,label:'۳ اسلاید'},{value:5,label:'۵ اسلاید'}]" /></div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy','carousel',snippet)">{{ props.copiedKey === 'carousel' ? 'کپی شد' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
  </div>
</template>
<style scoped>
.carousel-playground{display:grid;gap:var(--norato-space-4);min-inline-size:0}.carousel-playground__stage{min-inline-size:0;padding:var(--norato-space-4);overflow:hidden;border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-glass-surface)}.carousel-playground__controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3)}@media(max-width:600px){.carousel-playground__controls{grid-template-columns:1fr}}
</style>
