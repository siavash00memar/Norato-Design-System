<script setup lang="ts">
import { NoratoSplitButton } from '@norato/vue'

defineProps<{ section: string; copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const options = [{ value: 'copy', label: 'ذخیره به‌عنوان کپی' }, { value: 'download', label: 'ذخیره و دانلود' }]
const variants = [
  { key: 'split-primary', mode: 'split', variant: 'primary', title: 'Split · Primary' },
  { key: 'split-secondary', mode: 'split', variant: 'secondary', title: 'Split · Secondary' },
  { key: 'split-destructive', mode: 'split', variant: 'destructive', title: 'Split · Danger' },
  { key: 'dropdown-primary', mode: 'dropdown', variant: 'primary', title: 'Dropdown · Primary' },
  { key: 'dropdown-secondary', mode: 'dropdown', variant: 'secondary', title: 'Dropdown · Secondary' },
  { key: 'dropdown-tertiary', mode: 'dropdown', variant: 'tertiary', title: 'Dropdown · Tertiary' },
] as const
const sizes = [
  { key: 'small', label: 'Small', height: '۳۲px' },
  { key: 'medium', label: 'Medium', height: '۴۰px' },
  { key: 'large', label: 'Large', height: '۴۸px' },
  { key: 'xlarge', label: 'XLarge', height: '۵۶px' },
] as const
const states = [
  { key: 'default', title: 'Default', detail: 'API آزمایشی' },
  { key: 'hover', title: 'Hover', detail: 'رفتار CSS' },
  { key: 'open', title: 'Open', detail: 'منوی باز در نمونهٔ اجرایی' },
  { key: 'disabled', title: 'Disabled', detail: 'API آزمایشی' },
  { key: 'focus', title: 'Focus', detail: 'حلقهٔ صفحه‌کلید' },
] as const
const snippet = (mode: string, variant: string) => `<script setup lang="ts">\nimport { NoratoSplitButton } from '@norato/vue'\nconst actions = [{ value: 'copy', label: 'ذخیره به‌عنوان کپی' }, { value: 'download', label: 'ذخیره و دانلود' }]\nfunction save() { /* اقدام پیش‌فرض */ }\nfunction choose(value: string) { /* اقدام انتخاب‌شده */ }\n<\/script>\n\n<template>\n  <NoratoSplitButton id="save-actions" label="ذخیره" :items="actions" mode="${mode}" variant="${variant}" @primary-action="save" @select="choose" />\n</template>`
</script>

<template>
  <div v-if="section === 'Variants'" class="split-gallery" dir="rtl">
    <p class="source-note">شش ترکیب پایهٔ Split و Dropdown با API اجرایی Vue؛ هر چهار اندازه نیز در بخش Sizes اجرا می‌شوند.</p>
    <div class="split-gallery-grid">
      <article v-for="item in variants" :key="item.key" class="split-gallery-card">
        <div class="split-gallery-demo" inert><NoratoSplitButton :id="`gallery-${item.key}`" label="ذخیره" :items="options" :mode="item.mode" :variant="item.variant" /></div>
        <div class="variant-caption"><span><b>{{ item.title }}</b><small>adapter آزمایشی Vue</small></span><button class="copy-action" type="button" :aria-label="`کپی نمونهٔ ${item.title}`" @click="emit('copy', `split-${item.key}`, snippet(item.mode, item.variant))">{{ copiedKey === `split-${item.key}` ? 'کپی شد' : 'کپی' }}</button></div>
      </article>
    </div>
  </div>
  <div v-else-if="section === 'Sizes'" class="split-gallery" dir="rtl">
    <p class="source-note">هر چهار اندازه در adapter آزمایشی اجرا می‌شوند؛ هدف کلیک Small و Medium با وجود ظاهر کوچک‌تر، ۴۸px باقی می‌ماند.</p>
    <div class="split-size-grid">
      <div v-for="size in sizes" :key="size.key" class="split-size-card"><div inert><NoratoSplitButton :id="`size-${size.key}`" label="ذخیره" :items="options" :size="size.key" /></div><b>{{ size.label }}</b><small dir="ltr">{{ size.height }}</small></div>
    </div>
  </div>
  <div v-else-if="section === 'States'" class="split-gallery" dir="rtl">
    <div class="split-gallery-grid">
      <article v-for="state in states" :key="state.key" class="split-gallery-card">
        <div class="split-gallery-demo" :class="`split-state--${state.key}`" inert><NoratoSplitButton :id="`state-${state.key}`" label="ذخیره" :items="options" :disabled="state.key === 'disabled'" /></div>
        <div class="variant-caption"><span><b>{{ state.title }}</b><small>{{ state.detail }}</small></span></div>
      </article>
    </div>
    <p class="source-note">Open را در نمونهٔ اجرایی بالای صفحه باز کنید؛ این کارت‌ها فقط نمایش دیداری وضعیت‌اند.</p>
  </div>
</template>
