<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoCombobox } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const value = ref('')
const disabled = ref(false)
const required = ref(false)
const invalid = ref(false)
const noResults = ref(false)
const options = [
  { value: 'design', label: 'طراحی محصول' },
  { value: 'research', label: 'پژوهش کاربر' },
  { value: 'interface', label: 'طراحی رابط کاربری' },
  { value: 'content', label: 'طراحی محتوا' },
  { value: 'unavailable', label: 'به‌زودی', disabled: true },
]
const visibleOptions = computed(() => noResults.value ? [] : options)
const selectedLabel = computed(() => options.find((option) => option.value === value.value)?.label)
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoCombobox } from '@norato/vue'\nconst skill = ref('${value.value}')\nconst skills = [\n  { value: 'design', label: 'طراحی محصول' },\n  { value: 'research', label: 'پژوهش کاربر' },\n  { value: 'interface', label: 'طراحی رابط کاربری' },\n]\n<\/script>\n\n<template>\n  <NoratoCombobox id="skill" v-model="skill" label="مهارت‌ها" :options="skills" placeholder="جست‌وجو یا انتخاب کنید…"${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${invalid.value ? ' error-text="یک مهارت انتخاب کنید"' : ' helper-text="برای جست‌وجو شروع به نوشتن کنید"'} />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش Combobox اجرایی</strong><span>جست‌وجوی گزینه‌ها، انتخاب با صفحه‌کلید و حالت‌های اصلی را بررسی کنید.</span></header>
    <div class="button-playground-preview">
      <NoratoCombobox id="combobox-playground-skill" v-model="value" label="مهارت‌ها" :options="visibleOptions" placeholder="جست‌وجو یا انتخاب کنید…" :required="required" :disabled="disabled" :error-text="invalid ? 'یک مهارت انتخاب کنید' : undefined" :helper-text="invalid ? undefined : 'برای جست‌وجو شروع به نوشتن کنید'" />
      <span role="status" aria-live="polite">{{ disabled ? 'ورودی غیرفعال است' : selectedLabel ? `مهارت انتخاب‌شده: ${selectedLabel}` : noResults ? 'فهرست آزمایشی خالی است' : 'هنوز مهارتی انتخاب نشده است' }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>الزامی</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="noResults" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بدون نتیجه</span></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'combobox-playground', snippet)">{{ copiedKey === 'combobox-playground' ? 'کپی شد' : copiedKey === 'combobox-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
