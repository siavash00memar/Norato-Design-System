<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoButton } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()

type Variant = 'primary' | 'secondary' | 'inverse' | 'destructive'
type ButtonType = 'button' | 'submit' | 'reset'
const label = ref('ذخیرهٔ تغییرات')
const variant = ref<Variant>('primary')
const buttonType = ref<ButtonType>('button')
const disabled = ref(false)
const loading = ref(false)
const pressed = ref(false)
const activationCount = ref(0)

const displayLabel = computed(() => label.value.trim() || 'ذخیرهٔ تغییرات')
const escapedLabel = computed(() => displayLabel.value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'))
const snippet = computed(() => {
  const attributes = [`label="${escapedLabel.value}"`, `variant="${variant.value}"`]
  if (buttonType.value !== 'button') attributes.push(`type="${buttonType.value}"`)
  if (disabled.value) attributes.push(':disabled="true"')
  if (loading.value) attributes.push(':loading="true"')
  if (pressed.value) attributes.push(':pressed="true"')
  return `<script setup lang="ts">\nimport { NoratoButton } from '@norato/vue'\n<\/script>\n\n<template>\n  <NoratoButton ${attributes.join(' ')} />\n<\/template>`
})
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش دکمهٔ اجرایی</strong><span>همین adapter در بستهٔ Vue؛ نمونه‌های بالای صفحه فقط نمای بصری‌اند.</span></header>
    <div class="button-playground-preview">
      <NoratoButton :label="displayLabel" :variant="variant" :type="buttonType" :disabled="disabled" :loading="loading" :pressed="pressed ? true : undefined" @click="activationCount++" />
      <span role="status" aria-live="polite">{{ loading ? 'در حال بارگذاری · اجرا غیرفعال است' : disabled ? 'غیرفعال · اجرا ممکن نیست' : activationCount ? `تعداد فعال‌سازی: ${activationCount}` : 'دکمه را برای بررسی رفتار فعال کنید.' }}</span>
    </div>
    <div class="button-playground-controls">
      <label class="button-playground-field"><span>متن دکمه</span><input v-model="label" type="text" maxlength="64" autocomplete="off" /></label>
      <PlaygroundSelect id="button-variant" v-model="variant" label="گونهٔ اجرایی" :options="[{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }, { value: 'inverse', label: 'Inverse' }, { value: 'destructive', label: 'Destructive' }]" />
      <PlaygroundSelect id="button-html-type" v-model="buttonType" label="نوع HTML" :options="[{ value: 'button', label: 'button' }, { value: 'submit', label: 'submit' }, { value: 'reset', label: 'reset' }]" />
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
      <label class="button-playground-switch"><input v-model="pressed" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span dir="ltr">aria-pressed</span></label>
    </div>
    <p class="button-playground-note"><code dir="ltr">pressed</code> فقط وضعیت معنایی دکمهٔ toggle را تعیین می‌کند. برای دکمهٔ فقط‌آیکن هنوز نمونهٔ آمادهٔ استفاده نداریم.</p>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'button-playground', snippet)">{{ copiedKey === 'button-playground' ? 'کپی شد' : copiedKey === 'button-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
