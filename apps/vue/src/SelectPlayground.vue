<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoSelect } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const city = ref('tehran')
const disabled = ref(false)
const loading = ref(false)
const invalid = ref(false)
const required = ref(false)
const cities = [
  { value: 'tehran', label: 'تهران' },
  { value: 'shiraz', label: 'شیراز' },
  { value: 'isfahan', label: 'اصفهان' },
  { value: 'tabriz', label: 'تبریز' },
  { value: 'rasht', label: 'رشت' },
  { value: 'unavailable', label: 'به‌زودی', disabled: true },
]
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoSelect } from '@norato/vue'\nconst city = ref('tehran')\nconst cities = [\n  { value: 'tehran', label: 'تهران' },\n  { value: 'shiraz', label: 'شیراز' },\n]\n<\/script>\n\n<template>\n  <NoratoSelect id="city" v-model="city" label="شهر" :options="cities" placeholder="یک شهر انتخاب کنید"${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''}${invalid.value ? ' error-text="یک شهر انتخاب کنید"' : ' helper-text="شهر محل سکونت را انتخاب کنید"'} />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش انتخاب‌گر اجرایی</strong><span>انتخاب، وضعیت‌ها و کد Vue را بررسی کنید.</span></header>
    <div class="button-playground-preview">
      <NoratoSelect id="select-playground-city" v-model="city" label="شهر" :options="cities" placeholder="یک شهر انتخاب کنید" :required="required" :disabled="disabled" :loading="loading" :error-text="invalid ? 'یک شهر انتخاب کنید' : undefined" :helper-text="invalid ? undefined : 'شهر محل سکونت را انتخاب کنید'" />
      <span v-if="!loading" role="status" aria-live="polite">{{ disabled ? 'انتخاب‌گر غیرفعال است' : `شهر انتخاب‌شده: ${cities.find((option) => option.value === city)?.label ?? 'انتخاب نشده'}` }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>الزامی</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'select-playground', snippet)">{{ copiedKey === 'select-playground' ? 'کپی شد' : copiedKey === 'select-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
