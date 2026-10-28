<script setup lang="ts">
import { NoratoButton } from '@norato/vue'
defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const states = [
  { key: 'default', title: 'Default', detail: 'حالت عادی', kind: 'actual' },
  { key: 'hover', title: 'Hover', detail: 'با :hover · بدون prop جدا', kind: 'hover' },
  { key: 'pressed', title: 'Pressed', detail: 'با :active · بدون prop دیداری', kind: 'pressed' },
  { key: 'loading', title: 'Loading', detail: 'API اجرایی', kind: 'loading' },
  { key: 'disabled', title: 'Disabled', detail: 'API اجرایی', kind: 'disabled' },
  { key: 'focus', title: 'Focus', detail: 'با :focus-visible', kind: 'focus' },
]
const snippet = (key: string) => key === 'loading'
  ? '<NoratoButton label="در حال ذخیره" variant="primary" :loading="true" />'
  : key === 'disabled'
    ? '<NoratoButton label="ذخیرهٔ تغییرات" variant="primary" :disabled="true" />'
    : '<NoratoButton label="ذخیرهٔ تغییرات" variant="primary" />'
const visualGuidance: Record<string, string> = {
  hover: 'Hover از CSS :hover برای دستگاه اشاره‌گر پشتیبانی می‌کند؛ prop جداگانه‌ای در NoratoButton ندارد.',
  pressed: 'Pressed دیداری هنگام فشردن با CSS :active رخ می‌دهد. prop pressed فقط aria-pressed را برای toggle تنظیم می‌کند.',
  focus: 'Focus با :focus-visible و حلقهٔ فوکوس نوراتو هنگام پیمایش صفحه‌کلیدی دیده می‌شود؛ prop جداگانه‌ای ندارد.',
}
const isCodeState = (key: string) => !visualGuidance[key]
const copyValue = (key: string) => visualGuidance[key] || snippet(key)
</script>

<template>
  <div class="button-state-grid" dir="rtl">
    <article v-for="state in states" :key="state.key" class="button-state-card">
      <div class="state-demo" inert>
        <NoratoButton v-if="state.kind === 'actual'" label="ذخیرهٔ تغییرات" variant="primary" />
        <NoratoButton v-else-if="state.kind === 'loading'" label="در حال ذخیره" variant="primary" :loading="true" />
        <NoratoButton v-else-if="state.kind === 'disabled'" label="ذخیرهٔ تغییرات" variant="primary" :disabled="true" />
        <span v-else class="state-visual" :class="`state-visual--${state.kind}`" aria-hidden="true">ذخیرهٔ تغییرات</span>
      </div>
      <div class="state-caption"><span><b>{{ state.title }}</b><small>{{ state.detail }}</small></span><button type="button" class="copy-action" :aria-label="`کپی ${isCodeState(state.key) ? 'کد' : 'راهنمای'} حالت ${state.title}`" @click="emit('copy', `state-${state.key}`, copyValue(state.key))">{{ copiedKey === `state-${state.key}` ? 'کپی شد' : copiedKey === `state-${state.key}-error` ? 'ناموفق' : 'کپی' }}</button></div>
    </article>
  </div>
</template>
