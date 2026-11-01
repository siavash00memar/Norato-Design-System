<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoRadioGroup } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const value = ref('monthly')
const disabled = ref(false)
const required = ref(false)
const invalid = ref(false)
const size = ref<16 | 20>(20)
const options = [
  { value: 'monthly', label: 'ماهانه' },
  { value: 'quarterly', label: 'سه‌ماهه', description: 'دو ماه رایگان' },
  { value: 'yearly', label: 'سالانه' },
]
const stateText = computed(() => options.find(option => option.value === value.value)?.label ?? 'بدون انتخاب')
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoRadioGroup } from '@norato/vue'\nconst period = ref<string | undefined>(${value.value ? `'${value.value}'` : 'undefined'})\nconst options = [\n  { value: 'monthly', label: 'ماهانه' },\n  { value: 'quarterly', label: 'سه‌ماهه', description: 'دو ماه رایگان' },\n  { value: 'yearly', label: 'سالانه' },\n]\n<\\/script>\n\n<template>\n  <NoratoRadioGroup id="period" v-model="period" label="دورهٔ اشتراک" :options="options" :size="${size.value}"${required.value ? ' required' : ''}${disabled.value ? ' disabled' : ''}${invalid.value ? ' error-text="یک دوره انتخاب کنید."' : ''} />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش Radio اجرایی</strong><span>یک گزینه را انتخاب کنید؛ با کلیدهای جهت بین گزینه‌ها جابه‌جا شوید.</span></header>
    <div class="button-playground-preview radio-playground-preview">
      <NoratoRadioGroup id="radio-playground-period" v-model="value" label="دورهٔ اشتراک" :options="options" :size="size" :required="required" :disabled="disabled" :error-text="invalid ? 'یک دوره انتخاب کنید.' : undefined" />
      <span role="status" aria-live="polite">{{ disabled ? 'گروه غیرفعال است' : invalid ? 'یک دوره انتخاب کنید.' : `انتخاب‌شده: ${stateText}` }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>الزامی</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="select-playground-setting"><span>اندازه</span><select v-model="size"><option :value="16">۱۶px</option><option :value="20">۲۰px</option></select></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'radio-playground', snippet)">{{ copiedKey === 'radio-playground' ? 'کپی شد' : copiedKey === 'radio-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
