<script setup lang="ts">
import { computed, ref } from 'vue'
import './drawer-playground.css'
import { NoratoButton, NoratoCheckbox, NoratoDrawer, type NoratoDrawerDetent, type NoratoDrawerSide, type NoratoDrawerSize } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const open = ref(false)
const side = ref<NoratoDrawerSide>('right')
const size = ref<NoratoDrawerSize>('medium')
const detent = ref<NoratoDrawerDetent>('auto')
const dismissible = ref(true)
const direction = ref<'rtl' | 'ltr'>('rtl')
const filterAvailable = ref(true)
const filterShipping = ref(false)
const longContent = ref(false)
const status = ref('')
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoDrawer } from '@norato/vue'\nconst open = ref(false)\n<\\/script>\n<template>\n  <NoratoButton label="نمایش فیلترها" @click="open = true" />\n  <NoratoDrawer id="filters" v-model:open="open" title="فیلترها" description="نتایج را محدود کن." side="${side.value}" size="${size.value}" detent="${detent.value}" :dismissible="${dismissible.value}" dir="${direction.value}">\n    <p>فیلترهای دلخواه را اینجا قرار بده.</p>\n  </NoratoDrawer>\n</template>`)

function clearFilters() {
  filterAvailable.value = false
  filterShipping.value = false
  status.value = 'همهٔ فیلترها پاک شدند.'
}

function applyFilters() {
  status.value = 'فیلترها اعمال شدند.'
  open.value = false
}
</script>

<template>
  <div class="drawer-playground" dir="rtl">
    <div class="drawer-playground__stage">
      <NoratoButton label="نمایش فیلترها" @click="open = true" />
    </div>
    <div class="drawer-playground__controls">
      <PlaygroundSelect id="drawer-side" v-model="side" label="جهت پنل" :options="[{ value: 'right', label: 'راست (پیش‌فرض)' }, { value: 'left', label: 'چپ' }, { value: 'bottom', label: 'پایین' }]" />
      <PlaygroundSelect id="drawer-size" v-model="size" label="اندازه" :options="[{ value: 'small', label: 'کوچک' }, { value: 'medium', label: 'متوسط' }, { value: 'large', label: 'بزرگ' }]" />
      <PlaygroundSelect id="drawer-detent" v-model="detent" label="ارتفاع برگهٔ پایین" :options="[{ value: 'auto', label: 'خودکار' }, { value: 'half', label: 'نصف صفحه' }, { value: 'full', label: 'تمام صفحه' }]" />
      <PlaygroundSelect id="drawer-direction" v-model="direction" label="جهت محتوا" :options="[{ value: 'rtl', label: 'راست‌به‌چپ' }, { value: 'ltr', label: 'چپ‌به‌راست' }]" />
      <NoratoCheckbox id="drawer-dismissible" v-model="dismissible" label="بستن با Escape و کلیک بیرون" />
      <NoratoCheckbox id="drawer-long-content" v-model="longContent" label="محتوای طولانی" />
    </div>
    <NoratoDrawer id="playground-drawer" v-model:open="open" title="فیلترها" description="نتایج را مطابق نیازت محدود کن." :side="side" :size="size" :detent="detent" :dismissible="dismissible" :dir="direction">
      <fieldset class="drawer-playground__filters">
        <legend>موجودی و ارسال</legend>
        <NoratoCheckbox id="filter-available" v-model="filterAvailable" label="فقط کالاهای موجود" :dir="direction" />
        <NoratoCheckbox id="filter-shipping" v-model="filterShipping" label="ارسال رایگان" :dir="direction" />
        <div v-if="longContent" class="drawer-playground__long-content"><p v-for="paragraph in 14" :key="paragraph">این محتوای نمونه برای بررسی پیمایش داخل پنل است؛ ارتفاع پنل باید در محدودهٔ viewport بماند و متن در بدنهٔ خودش پیمایش شود.</p></div>
      </fieldset>
      <template #footer>
        <NoratoButton label="پاک‌کردن فیلترها" variant="secondary" @click="clearFilters" />
        <NoratoButton label="اعمال فیلتر" @click="applyFilters" />
      </template>
    </NoratoDrawer>
    <p class="drawer-playground__status" role="status" aria-live="polite">{{ status }}</p>
    <div class="code-copy-row">
      <button class="copy-section-button" type="button" @click="emit('copy', 'drawer', snippet)">{{ props.copiedKey === 'drawer' ? 'کپی شد' : 'کپی کد' }}</button>
    </div>
    <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
  </div>
</template>

