<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { NoratoDatePicker, type NoratoDatePickerType, type NoratoDatePickerValue } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const type = ref<NoratoDatePickerType>('single')
const size = ref<'small' | 'medium'>('medium')
const value = ref<NoratoDatePickerValue>('1405-08-01')
const disabled = ref(false)
const loading = ref(false)
const invalid = ref(false)
const typeOptions: { value: NoratoDatePickerType; label: string; sample: NoratoDatePickerValue }[] = [
  { value: 'single', label: 'تک‌تاریخ', sample: '1405-08-01' },
  { value: 'range', label: 'بازه', sample: { start: '1405-08-01', end: '1405-08-07' } },
  { value: 'range-presets', label: 'بازه با میان‌بر', sample: { start: '1405-08-01', end: '1405-08-07' } },
  { value: 'date-time', label: 'تاریخ و ساعت', sample: { date: '1405-08-01', time: '14:30' } },
  { value: 'month', label: 'ماه', sample: '1405-08' },
  { value: 'year', label: 'سال', sample: '1405' },
  { value: 'wheel', label: 'چرخشی', sample: '1405-08-01' },
]
watch(type, (next) => { value.value = typeOptions.find((option) => option.value === next)!.sample })
const snippet = computed(() => {
  const initial = typeof value.value === 'string' ? `'${value.value}'` : JSON.stringify(value.value)
  return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoDatePicker, type NoratoDatePickerValue } from '@norato/vue'\nconst value = ref<NoratoDatePickerValue>(${initial})\n<\\/script>\n<template><NoratoDatePicker id="delivery-date" v-model="value" label="تاریخ تحویل" type="${type.value}" size="${size.value}"${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''}${invalid.value ? ' error-text="تاریخ انتخاب‌شده در دسترس نیست"' : ''} /></template>`
})
</script>

<template>
  <div class="button-playground date-picker-playground" dir="rtl">
    <header><strong>آزمایش Date Picker اجرایی</strong><span>هفت حالت انتخاب تاریخ شمسی، با صفحه‌کلید و نشانگرهای قابل دسترس.</span></header>
    <div class="button-playground-preview date-picker-playground-preview">
      <NoratoDatePicker id="date-picker-playground" v-model="value" label="تاریخ تحویل" :type="type" :size="size" :disabled="disabled" :loading="loading" :error-text="invalid ? 'تاریخ انتخاب‌شده در دسترس نیست' : undefined" :holidays="['1405-08-03']" :disabled-dates="['1405-08-04']" />
    </div>
    <div class="button-playground-toggles date-picker-playground-toggles">
      <div class="select-playground-setting"><PlaygroundSelect id="date-picker-playground-type" v-model="type" label="حالت" :options="typeOptions" /></div>
      <div class="select-playground-setting"><PlaygroundSelect id="datepickerplayground-size-1" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'}]" /></div>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>نامعتبر</span></label>
      <button class="copy-section-button" type="button" @click="value = typeOptions.find((option) => option.value === type)!.sample">بازنشانی مقدار</button>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'date-picker-playground', snippet)">{{ copiedKey === 'date-picker-playground' ? 'کپی شد' : copiedKey === 'date-picker-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
