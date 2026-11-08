<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoCarousel, NoratoCarouselSlot, NoratoCarouselIndicator, NoratoCarouselDot, type NoratoCarouselItem, type NoratoCarouselSize } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const size = ref<NoratoCarouselSize>('medium')
const count = ref(5)
const dir = ref<'rtl' | 'ltr'>('rtl')
const active = ref(0)
const matrixActive = ref(1)
const dotStates = ref<Record<string, boolean>>({})
const variantTones = ['dark', 'light'] as const
const variantSizes = ['small', 'medium'] as const
const indicatorCounts = [3, 5] as const
const slotVariants = [{ size: 'small', label: 'کوچک' }, { size: 'medium', label: 'متوسط' }, { size: 'large', label: 'بزرگ' }] as const
const indicatorVariants = computed(() => variantTones.flatMap(tone => variantSizes.flatMap(variantSize => indicatorCounts.map(indicatorCount => ({ key: `${tone}-${variantSize}-${indicatorCount}`, tone, size: variantSize, count: indicatorCount })))) )
const dotVariants = computed(() => variantTones.flatMap(tone => variantSizes.flatMap(variantSize => [false, true].map(isActive => ({ key: `${tone}-${variantSize}-${isActive}`, tone, size: variantSize, active: isActive })))) )
function selectDot(key: string, defaultActive: boolean) { dotStates.value[key] = !(dotStates.value[key] ?? defaultActive) }
const artwork = (sky: string, land: string) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520"><defs><linearGradient id="g" x2="0" y2="1"><stop stop-color="${sky}"/><stop offset="1" stop-color="#fff6d8"/></linearGradient></defs><rect width="900" height="520" fill="url(#g)"/><circle cx="700" cy="140" r="62" fill="#fdc101"/><path d="M0 360 190 205l170 142 168-202 372 260v115H0Z" fill="${land}"/><path d="M0 430q200-90 390 0t510-28v118H0Z" fill="#627c58"/></svg>`)}`
const items: NoratoCarouselItem[] = [
  { id: 'path', title: 'مسیرهای تازه', description: 'ایده‌هایی برای تجربه‌های روزمره', image: artwork('#8ab7c5', '#829180'), alt: 'چشم‌انداز کوهستانی' },
  { id: 'craft', title: 'ساخته‌های دست', description: 'انتخاب‌هایی با جزئیات ماندگار', image: artwork('#edc1aa', '#a46e5a'), alt: 'رنگ‌های گرم و طبیعی' },
  { id: 'home', title: 'برای خانه', description: 'چیزهای کوچک برای حال بهتر', image: artwork('#ead7a9', '#a3a477'), alt: 'چشم‌انداز آرام' },
  { id: 'nature', title: 'هوای تازه', description: 'الهام از طبیعت و رنگ‌های گرم' },
  { id: 'daily', title: 'روزهای ساده', description: 'پیشنهادهایی برای هر روز' },
]
const visibleItems = computed(() => items.slice(0, count.value))
const indexOptions = computed(() => visibleItems.value.map((_, index) => ({ value: index, label: `اسلاید ${index + 1}` })))
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoCarousel, type NoratoCarouselItem } from '@norato/vue'\nconst active = ref(0)\nconst items: NoratoCarouselItem[] = [{ id: 'one', title: 'پیشنهاد امروز' }, { id: 'two', title: 'انتخاب دوم' }, { id: 'three', title: 'انتخاب سوم' }]\n<\\/script>\n<template><NoratoCarousel id="suggestions" v-model="active" label="پیشنهادها" title="پیشنهادهای امروز" :items="items" size="medium" dir="rtl" /></template>`)
</script>
<template>
  <div class="carousel-playground" dir="rtl">
    <div class="carousel-playground__stage"><NoratoCarousel id="carousel-playground" v-model="active" label="پیشنهادهای امروز" title="پیشنهادهای امروز" view-all-label="مشاهدهٔ همه" :items="visibleItems" :size="size" :dir="dir" /></div>
    <div class="carousel-playground__controls"><PlaygroundSelect id="carousel-size" v-model="size" label="اندازهٔ اسلاید" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" /><PlaygroundSelect id="carousel-count" v-model="count" label="تعداد اسلاید" :options="[{value:3,label:'۳ اسلاید'},{value:5,label:'۵ اسلاید'}]" /><PlaygroundSelect id="carousel-controlled-index" v-model="active" label="شاخص کنترل‌شده" :options="indexOptions" /><PlaygroundSelect id="carousel-direction" v-model="dir" label="جهت" :options="[{value:'rtl',label:'راست‌چین'},{value:'ltr',label:'چپ‌چین'}]" /></div>
    <section class="carousel-playground__matrix" aria-labelledby="carousel-matrix-title"><header><h3 id="carousel-matrix-title">ماتریس اندازه‌ها و حالت‌ها</h3><span>۲۲ ترکیب قرارداد</span></header>
      <div class="carousel-playground__slots"><NoratoCarouselSlot v-for="variant in slotVariants" :key="variant.size" :size="variant.size" label="نمونهٔ جای اسلاید"><div class="carousel-playground__slot-card"><b>{{ variant.label }}</b><span>جای محتوای دلخواه اسلاید</span></div></NoratoCarouselSlot></div>
      <div class="carousel-playground__variants"><article v-for="variant in indicatorVariants" :key="variant.key"><small>Indicator · {{ variant.tone }} · {{ variant.size }} · {{ variant.count }}</small><NoratoCarouselIndicator :count="variant.count" :active="matrixActive % variant.count" :tone="variant.tone" :size="variant.size" @select="matrixActive = $event" /></article></div>
      <div class="carousel-playground__variants carousel-playground__variants--dots"><article v-for="variant in dotVariants" :key="variant.key"><small>Dot · {{ variant.tone }} · {{ variant.size }} · {{ variant.active ? 'active' : 'inactive' }}</small><NoratoCarouselDot :index="0" :active="dotStates[variant.key] ?? variant.active" :tone="variant.tone" :size="variant.size" @select="selectDot(variant.key, variant.active)" /></article></div>
    </section>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy','carousel',snippet)">{{ props.copiedKey === 'carousel' ? 'کپی شد' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
  </div>
</template>
<style scoped>
.carousel-playground{display:grid;gap:var(--norato-space-4);min-inline-size:0}.carousel-playground__stage{min-inline-size:0;padding:var(--norato-space-4);overflow:hidden;border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-glass-surface)}.carousel-playground__controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3)}.carousel-playground__matrix{display:grid;gap:var(--norato-space-3);min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card)}.carousel-playground__matrix>header{display:flex;justify-content:space-between;align-items:center;gap:var(--norato-space-2)}.carousel-playground__matrix h3{margin:0;font-family:var(--norato-font-heading);font-size:var(--norato-type-heading-body-size)}.carousel-playground__matrix>header span,.carousel-playground__variants small{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-caption-size)}.carousel-playground__slots,.carousel-playground__variants{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:start;gap:var(--norato-space-2)}.carousel-playground__slot-card{display:grid;gap:var(--norato-space-2);min-block-size:var(--norato-control-target-min);padding:var(--norato-space-2);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-warning-container);font-size:var(--norato-type-body-caption-size)}.carousel-playground__slot-card span{color:var(--norato-color-text-secondary)}.carousel-playground__variants{grid-template-columns:repeat(2,minmax(0,1fr))}.carousel-playground__variants article{display:grid;justify-items:center;align-content:start;gap:var(--norato-space-1);min-inline-size:0;padding:var(--norato-space-2);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-subtle)}.carousel-playground__variants small{text-align:center}.carousel-playground__variants--dots article{grid-template-columns:1fr auto;align-items:center}.carousel-playground__variants--dots small{text-align:right}@media(max-width:600px){.carousel-playground__controls{grid-template-columns:1fr}.carousel-playground__slots{grid-template-columns:1fr}.carousel-playground__variants{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style>
