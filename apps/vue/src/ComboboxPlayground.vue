<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { NoratoCombobox, type NoratoComboboxOption } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const value = ref<string | string[]>('design')
const disabled = ref(false)
const required = ref(false)
const invalid = ref(false)
const loading = ref(false)
const creatable = ref(true)
const multiple = ref(false)
const noResults = ref(false)
const size = ref<'small' | 'medium' | 'large' | 'xlarge'>('large')
const labelPlacement = ref<'outside' | 'inside'>('outside')
const skills = ref<NoratoComboboxOption[]>([
  { value: 'design', label: 'طراحی محصول', recent: true },
  { value: 'research', label: 'پژوهش کاربر', recent: true },
  { value: 'interface', label: 'طراحی رابط کاربری' },
  { value: 'content', label: 'طراحی محتوا' },
  { value: 'unavailable', label: 'به‌زودی', disabled: true },
])
const visibleOptions = computed(() => noResults.value ? [] : skills.value)
const recentOptions = computed(() => noResults.value ? [] : skills.value.filter((option) => 'recent' in option && option.recent))
const selectedLabels = computed(() => {
  const values = Array.isArray(value.value) ? value.value : [value.value]
  return skills.value.filter((option) => values.includes(option.value)).map((option) => option.label)
})
const selectedText = computed(() => selectedLabels.value.join('، '))
const addCreatedOption = (text: string) => {
  const newOption = { value: text, label: text }
  skills.value = [...skills.value, newOption]
}
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoCombobox } from '@norato/vue'\nconst skill = ref(${multiple.value ? "['design']" : "'design'"})\nconst skills = [\n  { value: 'design', label: 'طراحی محصول' },\n  { value: 'research', label: 'پژوهش کاربر' },\n  { value: 'interface', label: 'طراحی رابط کاربری' },\n]\n<\/script>\n\n<template>\n  <NoratoCombobox id="skill" v-model="skill" label="مهارت‌ها" :options="skills" placeholder="جست‌وجو یا انتخاب کنید…"${multiple.value ? ' multiple' : ''}${size.value !== 'large' ? ` size="${size.value}"` : ''}${labelPlacement.value !== 'outside' ? ' label-placement="inside"' : ''}${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''}${creatable.value ? ' creatable' : ''}${invalid.value ? ' error-text="یک مهارت انتخاب کنید"' : ' helper-text="برای جست‌وجو شروع به نوشتن کنید"'} />\n</template>`)
watch(multiple, (enabled) => {
  const current = Array.isArray(value.value) ? value.value : [value.value]
  value.value = enabled ? current : current[0] ?? ''
})
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش Combobox اجرایی</strong><span>جست‌وجو، انتخاب تکی/چندتایی، حالت‌ها و اندازه را بررسی کنید.</span></header>
    <div class="button-playground-preview">
      <NoratoCombobox id="combobox-playground-skill" v-model="value" label="مهارت‌ها" :options="visibleOptions" :recent-options="recentOptions" placeholder="جست‌وجو یا انتخاب کنید…" :required="required" :disabled="disabled" :loading="loading" :multiple="multiple" :creatable="creatable" :size="size" :label-placement="labelPlacement" :error-text="invalid ? 'یک مهارت انتخاب کنید' : undefined" :helper-text="invalid ? undefined : 'برای جست‌وجو شروع به نوشتن کنید'" @create="addCreatedOption" />
      <span role="status" aria-live="polite">{{ disabled ? 'ورودی غیرفعال است' : selectedText ? `مهارت‌های انتخاب‌شده: ${selectedText}` : noResults ? 'فهرست آزمایشی خالی است' : 'هنوز مهارتی انتخاب نشده است' }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="multiple" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>چندانتخابی</span></label>
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>الزامی</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
      <label class="button-playground-switch"><input v-model="creatable" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>ساخت گزینه</span></label>
      <label class="button-playground-switch"><input v-model="noResults" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بدون نتیجه</span></label>
      <div class="select-playground-setting"><PlaygroundSelect id="comboboxplayground-size-1" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'},{value:'xlarge',label:'خیلی بزرگ'}]" /></div>
      <div class="select-playground-setting"><PlaygroundSelect id="comboboxplayground-labelplacement-2" v-model="labelPlacement" label="جای برچسب" :options="[{value:'outside',label:'بیرون'},{value:'inside',label:'داخل'}]" /></div>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'combobox-playground', snippet)">{{ copiedKey === 'combobox-playground' ? 'کپی شد' : copiedKey === 'combobox-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
