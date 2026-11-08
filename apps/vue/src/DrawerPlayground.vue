<script setup lang="ts">
import { ref } from 'vue'
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
const snippet = `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoDrawer } from '@norato/vue'\nconst open = ref(false)\n<\\/script>\n<template>\n  <NoratoButton label="نمایش فیلترها" @click="open = true" />\n  <NoratoDrawer id="filters" v-model:open="open" title="فیلترها" description="نتایج را محدود کن." side="right" size="medium">\n    <p>فیلترهای دلخواه را اینجا قرار بده.</p>\n  </NoratoDrawer>\n</template>`
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
      <NoratoCheckbox id="drawer-dismissible" v-model="dismissible" label="بستن با Escape و کلیک بیرون" />
    </div>
    <NoratoDrawer id="playground-drawer" v-model:open="open" title="فیلترها" description="نتایج را مطابق نیازت محدود کن." :side="side" :size="size" :detent="detent" :dismissible="dismissible">
      <fieldset class="drawer-playground__filters">
        <legend>موجودی و ارسال</legend>
        <NoratoCheckbox id="filter-available" label="فقط کالاهای موجود" :model-value="true" />
        <NoratoCheckbox id="filter-shipping" label="ارسال رایگان" />
      </fieldset>
      <template #footer>
        <NoratoButton label="پاک‌کردن فیلترها" variant="secondary" @click="open = false" />
        <NoratoButton label="اعمال فیلتر" @click="open = false" />
      </template>
    </NoratoDrawer>
    <div class="code-copy-row">
      <button class="copy-section-button" type="button" @click="emit('copy', 'drawer', snippet)">{{ props.copiedKey === 'drawer' ? 'کپی شد' : 'کپی کد' }}</button>
    </div>
    <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
  </div>
</template>

