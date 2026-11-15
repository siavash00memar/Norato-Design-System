<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoCheckbox, NoratoTable, type NoratoTableColumn, type NoratoTableRow } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const size = ref<'compact' | 'default' | 'comfortable'>('default')
const selectable = ref(true)
const searchable = ref(true)
const expandable = ref(false)
const loading = ref(false)
const direction = ref<'rtl' | 'ltr'>('rtl')
const dataSet = ref<'sample' | 'empty'>('sample')
const showAccessibleCells = ref(false)
const selected = ref<Array<string | number>>(['sara'])
const sampleImageSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#fff8dc"/><circle cx="46" cy="18" r="9" fill="#fdc101"/><path d="M5 55 25 29l12 15 8-10 15 21Z" fill="#d7bd70"/><path d="m5 55 18-9 12 7 12-8 13 10v9H5Z" fill="#8b7151"/></svg>'
const sampleImageSrc = `data:image/svg+xml,${encodeURIComponent(sampleImageSvg)}`
const columns = computed<NoratoTableColumn[]>(() => {
  const currentColumns: NoratoTableColumn[] = [
    { key: 'projects', label: 'پروژه', type: 'number', align: 'start', sortable: true },
    { key: 'status', label: 'وضعیت', type: 'status', align: 'center', sortable: true },
    { key: 'name', label: 'نام', type: 'user', sortable: true },
  ]
  if (showAccessibleCells.value) currentColumns.push(
    { key: 'progress', label: 'پیشرفت پروژه (درصد)', type: 'progress', align: 'center' },
    { key: 'image', label: 'تصویر پروژه', type: 'image', align: 'center' },
  )
  return currentColumns
})
const sampleRows: NoratoTableRow[] = [
  { id: 'sara', name: { name: 'سارا محمدی', description: 'طراح محصول' }, status: 'فعال', projects: 12, progress: 72, image: { src: sampleImageSrc, alt: 'منظرهٔ نمونه با خورشید زرد و تپه‌ها' }, detail: 'عضو تیم طراحی محصول؛ آخرین فعالیت امروز.' },
  { id: 'ali', name: { name: 'علی رضایی', description: 'توسعه‌دهنده' }, status: 'مرخصی', projects: 7, progress: 46, image: { src: sampleImageSrc, alt: 'منظرهٔ نمونه با خورشید زرد و تپه‌ها' }, detail: 'عضو تیم توسعه؛ بازگشت به کار شنبه.' },
  { id: 'negar', name: { name: 'نگار کریمی', description: 'مدیر محصول' }, status: 'فعال', projects: 21, progress: 100, image: { src: sampleImageSrc, alt: 'منظرهٔ نمونه با خورشید زرد و تپه‌ها' }, detail: 'مدیر محصول پروژه‌های اصلی.' },
  { id: 'kian', name: { name: 'کیان موسوی', description: 'طراح تجربه' }, status: 'در انتظار', projects: 4, progress: 18, image: { src: sampleImageSrc, alt: 'منظرهٔ نمونه با خورشید زرد و تپه‌ها' }, detail: 'در انتظار تخصیص به پروژه.' },
  { id: 'mina', name: { name: 'مینا احمدی', description: 'پژوهشگر' }, status: 'فعال', projects: 9, progress: 85, image: { src: sampleImageSrc, alt: 'منظرهٔ نمونه با خورشید زرد و تپه‌ها' }, detail: 'پژوهشگر تیم تجربهٔ کاربری.' },
]
const rows = computed(() => dataSet.value === 'empty' ? [] : sampleRows)
const sizeOptions = [{ value: 'compact', label: 'فشرده' }, { value: 'default', label: 'معمولی' }, { value: 'comfortable', label: 'آزاد' }]
const dataSetOptions = [{ value: 'sample', label: 'دادهٔ نمونه' }, { value: 'empty', label: 'بدون داده' }]
const directionOptions = [{ value: 'rtl', label: 'راست‌به‌چپ' }, { value: 'ltr', label: 'چپ‌به‌راست' }]
const snippet = computed(() => {
  const optionalColumns = showAccessibleCells.value
    ? `\n  { key: 'progress', label: 'پیشرفت پروژه (درصد)', type: 'progress' },\n  { key: 'image', label: 'تصویر پروژه', type: 'image' },`
    : ''
  const imageExample = showAccessibleCells.value && dataSet.value === 'sample'
    ? `const sampleImage = ${JSON.stringify(sampleImageSrc)}\nconst rows: NoratoTableRow[] = [{ id: 'sara', name: { name: 'سارا محمدی', description: 'طراح محصول' }, status: 'فعال', projects: 12, progress: 72, image: { src: sampleImage, alt: 'منظرهٔ نمونه با خورشید زرد و تپه‌ها' } }]`
    : `const rows: NoratoTableRow[] = ${dataSet.value === 'empty' ? '[]' : '[/* داده‌های جدول */]'}`
  return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoTable, type NoratoTableColumn, type NoratoTableRow } from '@norato/vue'\nconst selected = ref<Array<string | number>>(['sara'])\nconst columns: NoratoTableColumn[] = [\n  { key: 'projects', label: 'پروژه', type: 'number', sortable: true },\n  { key: 'status', label: 'وضعیت', type: 'status', sortable: true },\n  { key: 'name', label: 'نام', type: 'user', sortable: true },${optionalColumns}\n]\n${imageExample}\n<\/script>\n<template>\n  <NoratoTable id="team" label="اعضای تیم" :columns="columns" :rows="rows" row-key="id" v-model="selected" size="${size.value}" dir="${direction.value}" selectable${searchable.value ? ' searchable' : ''}${expandable.value ? ' expandable' : ''}${loading.value ? ' loading' : ''} :page-size="3" />\n</template>`
})
</script>

<template>
  <div class="table-playground">
    <p class="table-playground__note">جستجو، مرتب‌سازی سرستون، انتخاب گروهی و جابه‌جایی صفحه را روی دادهٔ نمونه امتحان کن.</p>
    <div class="table-playground__controls">
      <PlaygroundSelect id="table-size" v-model="size" label="تراکم ردیف‌ها" :options="sizeOptions" />
      <PlaygroundSelect id="table-dataset" v-model="dataSet" label="دادهٔ جدول" :options="dataSetOptions" />
      <PlaygroundSelect id="table-direction" v-model="direction" label="جهت جدول" :options="directionOptions" />
      <NoratoCheckbox id="table-selectable" v-model="selectable" label="انتخاب ردیف‌ها" />
      <NoratoCheckbox id="table-searchable" v-model="searchable" label="جستجو" />
      <NoratoCheckbox id="table-expandable" v-model="expandable" label="جزئیات ردیف" />
      <NoratoCheckbox id="table-loading" v-model="loading" label="در حال بارگذاری" />
      <NoratoCheckbox id="table-accessibility-cells" v-model="showAccessibleCells" label="سلول‌های تصویر و پیشرفت" />
    </div>
    <div class="table-playground__stage"><NoratoTable id="team-table" v-model="selected" label="اعضای تیم" :columns="columns" :rows="rows" row-key="id" :size="size" :dir="direction" :selectable="selectable" :searchable="searchable" :expandable="expandable" :loading="loading" :page-size="3" /></div>
    <div class="table-playground__code"><div class="table-playground__code-head"><strong>نمونهٔ Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'table-example', snippet)">{{ props.copiedKey === 'table-example' ? 'کپی شد' : 'کپی کد' }}</button></div><pre dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>

<style scoped>
.table-playground{display:grid;gap:var(--norato-space-4);direction:rtl;min-inline-size:0}
.table-playground__note{margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.table-playground__controls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:end;gap:var(--norato-space-3)}
.table-playground__stage{min-inline-size:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-subtle)}
.table-playground__code{overflow:hidden;border-radius:var(--norato-radius-card);background:var(--norato-color-surface-code);color:var(--norato-color-text-on-code)}
.table-playground__code-head{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-3);min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-4);border-block-end:var(--norato-border-thin) solid var(--norato-color-border-strong)}
.table-playground__code pre{max-block-size:360px;overflow:auto;margin:0;padding:var(--norato-space-4);font-family:monospace;font-size:var(--norato-type-body-caption-size);line-height:1.5;white-space:pre}
@media(max-width:720px){.table-playground__controls{grid-template-columns:repeat(2,minmax(0,1fr))}.table-playground__stage{padding:var(--norato-space-2)}}
</style>
