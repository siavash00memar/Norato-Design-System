<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { NoratoSelect } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const value = ref<string | string[]>('tehran')
const disabled = ref(false)
const loading = ref(false)
const invalid = ref(false)
const required = ref(false)
const multiple = ref(false)
const searchable = ref(true)
const display = ref<'chips' | 'summary'>('chips')
const size = ref<'small' | 'medium' | 'large' | 'xlarge'>('large')
const labelPlacement = ref<'inside' | 'outside'>('outside')
const cities = [
  { value: 'tehran', label: 'تهران', group: 'مرکز' },
  { value: 'isfahan', label: 'اصفهان', group: 'مرکز' },
  { value: 'shiraz', label: 'شیراز', group: 'جنوب' },
  { value: 'tabriz', label: 'تبریز', group: 'شمال‌غرب' },
  { value: 'rasht', label: 'رشت', group: 'شمال' },
  { value: 'unavailable', label: 'به‌زودی', group: 'شمال', disabled: true },
]
const selectedNames = computed(() => {
  const values = Array.isArray(value.value) ? value.value : [value.value]
  return cities.filter((city) => values.includes(city.value)).map((city) => city.label)
})
const generatedValue = computed(() => multiple.value ? "ref<string[]>(['tehran'])" : "ref('tehran')")
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoSelect } from '@norato/vue'\nconst city = ${generatedValue.value}\nconst cities = [\n  { value: 'tehran', label: 'تهران', group: 'مرکز' },\n  { value: 'isfahan', label: 'اصفهان', group: 'مرکز' },\n  { value: 'shiraz', label: 'شیراز', group: 'جنوب' },\n]\n<\/script>\n\n<template>\n  <NoratoSelect id="city" v-model="city" label="شهر" :options="cities" placeholder="یک شهر انتخاب کنید"${multiple.value ? ' multiple' : ''}${searchable.value ? ' searchable' : ''}${multiple.value ? ` display="${display.value}"` : ''}${size.value !== 'large' ? ` size="${size.value}"` : ''}${labelPlacement.value !== 'outside' ? ` label-placement="${labelPlacement.value}"` : ''}${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''}${invalid.value ? ' error-text="یک شهر انتخاب کنید"' : ' helper-text="شهر محل سکونت را انتخاب کنید"'} />\n</template>`)
watch(multiple, (enabled) => {
  const current = Array.isArray(value.value) ? value.value : [value.value]
  value.value = enabled ? current : current[0] ?? ''
})
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش انتخاب‌گر اجرایی</strong><span>انتخاب تکی/چندتایی، جست‌وجو، وضعیت‌ها و کد Vue را بررسی کنید.</span></header>
    <div class="button-playground-preview">
      <NoratoSelect id="select-playground-city" v-model="value" label="شهر" :options="cities" placeholder="یک شهر انتخاب کنید" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'یک شهر انتخاب کنید' : undefined" :helper-text="invalid ? undefined : 'شهر محل سکونت را انتخاب کنید'" :multiple="multiple" :searchable="searchable" :display="display" :size="size" :label-placement="labelPlacement" />
      <span v-if="!loading" role="status" aria-live="polite">{{ disabled ? 'انتخاب‌گر غیرفعال است' : selectedNames.length ? `شهر انتخاب‌شده: ${selectedNames.join('، ')}` : 'هنوز شهری انتخاب نشده است' }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="multiple" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>چندانتخابی</span></label>
      <label class="button-playground-switch"><input v-model="searchable" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>جست‌وجو</span></label>
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>الزامی</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
      <label class="select-playground-setting"><span>نمای چندانتخابی</span><select v-model="display"><option value="chips">برچسب‌ها</option><option value="summary">خلاصه</option></select></label>
      <label class="select-playground-setting"><span>اندازه</span><select v-model="size"><option value="small">کوچک</option><option value="medium">متوسط</option><option value="large">بزرگ</option><option value="xlarge">خیلی بزرگ</option></select></label>
      <label class="select-playground-setting"><span>جای برچسب</span><select v-model="labelPlacement"><option value="outside">بیرون</option><option value="inside">داخل</option></select></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'select-playground', snippet)">{{ copiedKey === 'select-playground' ? 'کپی شد' : copiedKey === 'select-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
