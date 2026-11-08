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
const selected = ref<Array<string | number>>(['sara'])
const columns: NoratoTableColumn[] = [
  { key: 'projects', label: 'پروژه', type: 'number', align: 'start', sortable: true },
  { key: 'status', label: 'وضعیت', type: 'status', align: 'center', sortable: true },
  { key: 'name', label: 'نام', type: 'user', sortable: true },
]
const rows: NoratoTableRow[] = [
  { id: 'sara', name: { name: 'سارا محمدی', description: 'طراح محصول' }, status: 'فعال', projects: 12, detail: 'عضو تیم طراحی محصول؛ آخرین فعالیت امروز.' },
  { id: 'ali', name: { name: 'علی رضایی', description: 'توسعه‌دهنده' }, status: 'مرخصی', projects: 7, detail: 'عضو تیم توسعه؛ بازگشت به کار شنبه.' },
  { id: 'negar', name: { name: 'نگار کریمی', description: 'مدیر محصول' }, status: 'فعال', projects: 21, detail: 'مدیر محصول پروژه‌های اصلی.' },
  { id: 'kian', name: { name: 'کیان موسوی', description: 'طراح تجربه' }, status: 'در انتظار', projects: 4, detail: 'در انتظار تخصیص به پروژه.' },
  { id: 'mina', name: { name: 'مینا احمدی', description: 'پژوهشگر' }, status: 'فعال', projects: 9, detail: 'پژوهشگر تیم تجربهٔ کاربری.' },
]
const sizeOptions = [{ value: 'compact', label: 'فشرده' }, { value: 'default', label: 'معمولی' }, { value: 'comfortable', label: 'آزاد' }]
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoTable, type NoratoTableColumn, type NoratoTableRow } from '@norato/vue'\nconst selected = ref<Array<string | number>>(['sara'])\nconst columns: NoratoTableColumn[] = [\n  { key: 'projects', label: 'پروژه', type: 'number', sortable: true },\n  { key: 'status', label: 'وضعیت', type: 'status', sortable: true },\n  { key: 'name', label: 'نام', type: 'user', sortable: true },\n]\nconst rows: NoratoTableRow[] = [/* داده‌های جدول */]\n<\\/script>\n<template>\n  <NoratoTable id="team" label="اعضای تیم" :columns="columns" :rows="rows" row-key="id" v-model="selected" size="${size.value}" selectable${searchable.value ? ' searchable' : ''}${expandable.value ? ' expandable' : ''}${loading.value ? ' loading' : ''} :page-size="3" />\n</template>`)
</script>

<template>
  <div class="table-playground">
    <p class="table-playground__note">جستجو، مرتب‌سازی سرستون، انتخاب گروهی و جابه‌جایی صفحه را روی دادهٔ نمونه امتحان کن.</p>
    <div class="table-playground__controls">
      <PlaygroundSelect id="table-size" v-model="size" label="تراکم ردیف‌ها" :options="sizeOptions" />
      <NoratoCheckbox id="table-selectable" v-model="selectable" label="انتخاب ردیف‌ها" />
      <NoratoCheckbox id="table-searchable" v-model="searchable" label="جستجو" />
      <NoratoCheckbox id="table-expandable" v-model="expandable" label="جزئیات ردیف" />
      <NoratoCheckbox id="table-loading" v-model="loading" label="در حال بارگذاری" />
    </div>
    <div class="table-playground__stage"><NoratoTable id="team-table" v-model="selected" label="اعضای تیم" :columns="columns" :rows="rows" row-key="id" :size="size" :selectable="selectable" :searchable="searchable" :expandable="expandable" :loading="loading" :page-size="3" /></div>
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
