<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { NoratoSplitButton } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
type Variant = 'primary' | 'secondary' | 'destructive' | 'tertiary'
type Mode = 'split' | 'dropdown'
type Size = 'small' | 'medium' | 'large' | 'xlarge'
const label = ref('ذخیره')
const mode = ref<Mode>('split')
const variant = ref<Variant>('primary')
const size = ref<Size>('large')
const disabled = ref(false)
const loading = ref(false)
const activationCount = ref(0)
const selectedAction = ref('')
const items = [
  { value: 'copy', label: 'ذخیره به‌عنوان کپی' },
  { value: 'download', label: 'ذخیره و دانلود' },
]
const variantOptions = computed(() => mode.value === 'split'
  ? [{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }, { value: 'destructive', label: 'Destructive' }]
  : [{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }, { value: 'tertiary', label: 'Tertiary' }])
watch(mode, () => { if (!variantOptions.value.some(option => option.value === variant.value)) variant.value = 'primary' })
const displayLabel = computed(() => label.value.trim() || 'ذخیره')
const escapedLabel = computed(() => displayLabel.value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'))
const snippet = computed(() => `<script setup lang="ts">\nimport { NoratoSplitButton } from '@norato/vue'\nconst actions = [\n  { value: 'copy', label: 'ذخیره به‌عنوان کپی' },\n  { value: 'download', label: 'ذخیره و دانلود' },\n]\nfunction save() { /* اقدام پیش‌فرض */ }\nfunction choose(value: string) { /* اقدام انتخاب‌شده */ }\n<\/script>\n\n<template>\n  <NoratoSplitButton id="save-actions" label="${escapedLabel.value}" :items="actions" mode="${mode.value}" variant="${variant.value}" size="${size.value}"${disabled.value ? ' disabled' : ''}${loading.value ? ' loading' : ''} @primary-action="save" @select="choose" />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش Split Button اجرایی</strong><span>اکشن اصلی و منوی گزینه‌ها را جداگانه امتحان کنید.</span></header>
    <div class="button-playground-preview">
      <NoratoSplitButton id="split-playground" :label="displayLabel" :items="items" :mode="mode" :variant="variant" :size="size" :disabled="disabled" :loading="loading" @primary-action="activationCount++" @select="selectedAction = $event" />
      <span role="status" aria-live="polite">{{ loading ? 'در حال بارگذاری' : disabled ? 'غیرفعال' : selectedAction ? `گزینهٔ انتخاب‌شده: ${selectedAction}` : activationCount ? `اجرای اکشن اصلی: ${activationCount}` : 'اکشن اصلی یا یکی از گزینه‌ها را فعال کنید.' }}</span>
    </div>
    <div class="button-playground-controls split-playground-controls">
      <label class="button-playground-field"><span>متن دکمه</span><input v-model="label" type="text" maxlength="40" autocomplete="off" /></label>
      <PlaygroundSelect id="split-mode" v-model="mode" label="ساختار" :options="[{ value: 'split', label: 'Split Button' }, { value: 'dropdown', label: 'Dropdown Button' }]" />
      <PlaygroundSelect id="split-variant" v-model="variant" label="گونه" :options="variantOptions" />
      <PlaygroundSelect id="split-size" v-model="size" label="اندازهٔ ظاهر" :options="[{ value: 'small', label: 'Small · ۳۲px' }, { value: 'medium', label: 'Medium · ۴۰px' }, { value: 'large', label: 'Large · ۴۸px' }, { value: 'xlarge', label: 'XLarge · ۵۶px' }]" />
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="loading" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بارگذاری</span></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'split-playground', snippet)">{{ copiedKey === 'split-playground' ? 'کپی شد' : copiedKey === 'split-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
