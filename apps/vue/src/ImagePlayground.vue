<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoImage, NoratoImageGallery, NoratoImageThumbnail, NoratoLightbox, NoratoCheckbox, type NoratoGalleryItem, type NoratoGalleryLayout, type NoratoImageRatio, type NoratoImageState } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const layout = ref<NoratoGalleryLayout>('featured')
const ratio = ref<NoratoImageRatio>('landscape')
const state = ref<NoratoImageState>('default')
const fit = ref<'cover' | 'contain'>('cover')
const thumbnailSize = ref<'small' | 'medium' | 'large'>('medium')
const thumbnailState = ref<'default' | 'selected' | 'more'>('default')
const thumbnailDisabled = ref(false)
const selected = ref(0)
const open = ref(false)
const artwork = (sky: string, hill: string) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="s" x2="0" y2="1"><stop stop-color="${sky}"/><stop offset="1" stop-color="#fff0c7"/></linearGradient></defs><rect width="800" height="600" fill="url(#s)"/><circle cx="565" cy="190" r="72" fill="#fdc101"/><path d="M0 430 215 260l180 172 142-131 263 193v106H0Z" fill="${hill}"/><path d="M0 500q170-95 328 2t472-10v108H0Z" fill="#426553"/></svg>`)}`
const items: NoratoGalleryItem[] = [
  { id: 'sunset', src: artwork('#f2a06f', '#82675b'), alt: 'غروب خورشید بر فراز تپه‌ها', caption: 'غروب در مسیر شمال', ratio: 'wide' },
  { id: 'dawn', src: artwork('#91b6bd', '#7c8e71'), alt: 'طلوع آفتاب در دشت', caption: 'صبح آرام', ratio: 'portrait' },
  { id: 'evening', src: artwork('#cf8e92', '#6a7167'), alt: 'نور عصرگاهی روی کوهستان', caption: 'آخرین نور روز', ratio: 'square' },
  { id: 'field', src: artwork('#dfa778', '#7a8053'), alt: 'تپه‌های سبز در نور گرم', caption: 'جادهٔ سبز', ratio: 'landscape' },
]
const current = computed(() => items[selected.value])
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoImage, NoratoImageGallery, NoratoImageThumbnail } from '@norato/vue'\nconst selected = ref(0)\nconst images = [\n  { id: 'sunset', src: '/images/sunset.jpg', alt: 'غروب بر فراز تپه‌ها', caption: 'غروب شمال' },\n  { id: 'dawn', src: '/images/dawn.jpg', alt: 'طلوع آفتاب در دشت' },\n]\n<\/script>\n<template>\n  <NoratoImage src="/images/cover.jpg" alt="تصویر جلد" ratio="${ratio.value}" object-fit="${fit.value}" />\n  <NoratoImageThumbnail src="/images/cover.jpg" alt="تصویر جلد" label="تصویر جلد" size="${thumbnailSize.value}" :selected="${thumbnailState.value === 'selected'}" :more-count="${thumbnailState.value === 'more' ? 12 : 0}" :disabled="${thumbnailDisabled.value}" />\n  <NoratoImageGallery id="trip-gallery" v-model="selected" label="تصاویر سفر" :items="images" layout="${layout.value}" />\n</template>`)
</script>
<template>
  <div class="image-playground" dir="rtl">
    <div class="image-playground__stage">
      <div class="image-playground__frame"><NoratoImage :src="current.src" :alt="current.alt" :caption="current.caption" :ratio="ratio" :state="state" :object-fit="fit" /></div>
      <NoratoImageGallery id="image-playground-gallery" v-model="selected" label="تصاویر سفر" :items="items" :layout="layout" />
      <div class="image-playground__thumbnail-demo"><span>پیش‌نمایش بندانگشتی</span><NoratoImageThumbnail :src="current.src" :alt="current.alt" :label="current.caption" :size="thumbnailSize" :selected="thumbnailState === 'selected'" :more-count="thumbnailState === 'more' ? 12 : 0" :disabled="thumbnailDisabled" @select="thumbnailState = 'selected'" /></div>
      <button class="image-playground__open" type="button" @click="open = true">نمایش تمام‌صفحه</button>
      <NoratoLightbox id="image-playground-lightbox" v-model:open="open" v-model:index="selected" :items="items" label="تصاویر سفر" />
    </div>
    <div class="image-playground__controls">
      <PlaygroundSelect id="image-layout" v-model="layout" label="چیدمان" :options="[{value:'featured',label:'تصویر اصلی و بندانگشتی'},{value:'grid',label:'شبکه‌ای'},{value:'masonry',label:'آزاد'}]" />
      <PlaygroundSelect id="image-ratio" v-model="ratio" label="نسبت تصویر" :options="[{value:'square',label:'۱:۱'},{value:'landscape',label:'۴:۳'},{value:'wide',label:'۱۶:۹'},{value:'portrait',label:'۳:۴'}]" />
      <PlaygroundSelect id="image-fit" v-model="fit" label="نحوهٔ نمایش" :options="[{value:'cover',label:'برش برای پرکردن'},{value:'contain',label:'نمایش کامل'}]" />
      <PlaygroundSelect id="image-state" v-model="state" label="وضعیت" :options="[{value:'default',label:'عادی'},{value:'loading',label:'بارگذاری'},{value:'error',label:'خطا'}]" />
      <PlaygroundSelect id="image-thumbnail-size" v-model="thumbnailSize" label="اندازهٔ بندانگشتی" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" />
      <PlaygroundSelect id="image-thumbnail-state" v-model="thumbnailState" label="وضعیت بندانگشتی" :options="[{value:'default',label:'عادی'},{value:'selected',label:'انتخاب‌شده'},{value:'more',label:'تصاویر بیشتر'}]" />
      <NoratoCheckbox id="image-thumbnail-disabled" v-model="thumbnailDisabled" label="بندانگشتی غیرفعال" :size="20" />
    </div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy','image',snippet)">{{ props.copiedKey === 'image' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
  </div>
</template>
<style scoped>
.image-playground{display:grid;gap:var(--norato-space-4);min-inline-size:0}.image-playground__stage{position:relative;display:grid;justify-items:center;gap:var(--norato-space-4);min-block-size:260px;padding:var(--norato-space-4);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-glass-surface);overflow:hidden}.image-playground__frame{inline-size:min(100%,420px)}.image-playground__stage>:deep(.norato-image-gallery){inline-size:min(100%,420px)}.image-playground__thumbnail-demo{display:flex;align-items:center;gap:var(--norato-space-3);inline-size:min(100%,420px);padding-block-start:var(--norato-space-2);border-block-start:var(--norato-border-thin) solid var(--norato-color-border-default);color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}.image-playground__open{position:absolute;inset-block-start:var(--norato-space-2);inset-inline-start:var(--norato-space-2);z-index:1;min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-control);background:var(--norato-color-surface-default);color:var(--norato-color-text-primary);cursor:pointer}.image-playground__open:focus-visible{outline:var(--norato-border-focus) solid var(--norato-color-focus-ring);outline-offset:2px}.image-playground__controls{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--norato-space-3)}@media(max-width:600px){.image-playground__controls{grid-template-columns:1fr}}
</style>
