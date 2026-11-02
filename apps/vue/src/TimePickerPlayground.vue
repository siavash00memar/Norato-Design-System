<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { NoratoTimePicker, type NoratoTimePickerType, type NoratoTimePickerValue, type NoratoTimePickerVariant } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const type = ref<NoratoTimePickerType>('single')
const variant = ref<NoratoTimePickerVariant>('columns')
const size = ref<'small' | 'medium' | 'large' | 'xlarge'>('medium')
const value = ref<NoratoTimePickerValue>('14:30')
const minuteStep = ref('5')
const disabled = ref(false)
const loading = ref(false)
const invalid = ref(false)
const required = ref(false)
const rangeMode = computed(() => type.value === 'range' || variant.value === 'range')
watch([type, variant], () => { value.value = rangeMode.value ? { start: '09:00', end: '10:30' } : '14:30' })
const variants: { value: NoratoTimePickerVariant; label: string }[] = [
  { value: 'columns', label: 'ستونی' }, { value: 'columns-12h', label: 'ستونی ۱۲ ساعته' },
  { value: 'wheel', label: 'چرخ' }, { value: 'slots', label: 'اسلات‌های رزرو' }, { value: 'range', label: 'بازه' },
]
const snippet = computed(() => {
  const initial = typeof value.value === 'string' ? `'${value.value}'` : JSON.stringify(value.value)
  return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoTimePicker, type NoratoTimePickerValue } from '@norato/vue'\nconst time = ref<NoratoTimePickerValue>(${initial})\n<\\/script>\n<template><NoratoTimePicker id="appointment-time" v-model="time" label="ساعت نوبت" type="${type.value}" variant="${variant.value}" :minute-step="${minuteStep.value}" size="${size.value}"${variant.value === 'slots' ? ' :slots="[\'09:00\', \'09:30\', \'10:00\']"' : ''}${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''}${invalid.value ? ' error-text="این زمان در دسترس نیست"' : ''} /></template>`
})
</script>

<template>
  <div class="button-playground time-picker-playground" dir="rtl">
    <header><strong>آزمایش Time Picker اجرایی</strong><span>پنج حالت انتخاب ساعت، مقدار کنترل‌شده، و صفحه‌کلید.</span></header>
    <div class="button-playground-preview time-picker-playground-preview">
      <NoratoTimePicker id="time-picker-playground" v-model="value" label="ساعت نوبت" :type="type" :variant="variant" :size="size" :minute-step="Number(minuteStep)" :slots="[{value:'09:00'},{value:'09:30'},{value:'10:00'},{value:'10:30',disabled:true},{value:'11:00'}]" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'این زمان در دسترس نیست' : undefined" helper-text="زمان‌ها با منطقهٔ زمانی محلی نمایش داده می‌شوند." />
    </div>
    <div class="button-playground-toggles time-picker-playground-toggles">
      <PlaygroundSelect id="time-picker-type" v-model="type" label="نوع مقدار" :options="[{value:'single',label:'یک ساعت'},{value:'range',label:'بازهٔ ساعت'}]" />
      <PlaygroundSelect id="time-picker-variant" v-model="variant" label="حالت پنل" :options="variants" />
      <div class="select-playground-setting"><PlaygroundSelect id="timepickerplayground-size-1" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'},{value:'xlarge',label:'خیلی بزرگ'}]" /></div>
      <div class="select-playground-setting"><PlaygroundSelect id="timepickerplayground-minutestep-2" v-model="minuteStep" label="گام دقیقه" :options="[{value:'5',label:'۵ دقیقه'},{value:'10',label:'۱۰ دقیقه'},{value:'15',label:'۱۵ دقیقه'},{value:'30',label:'۳۰ دقیقه'}]" /></div>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>نامعتبر</span></label>
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>اجباری</span></label>
      <button class="copy-section-button" type="button" @click="value = rangeMode ? {start:'09:00',end:'10:30'} : '14:30'">بازنشانی مقدار</button>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'time-picker-playground', snippet)">{{ copiedKey === 'time-picker-playground' ? 'کپی شد' : copiedKey === 'time-picker-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
