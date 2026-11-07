<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoMenu } from '@norato/vue'
import type { NoratoMenuItem } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { MenuCopyIcon, MenuDeleteIcon, MenuEditIcon, MenuFolderIcon, MenuShareIcon } from './menu-icons'
import { usageExamples } from './usage-examples'
import './menu-playground.css'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const size = ref<'small' | 'medium' | 'large'>('medium')
const direction = ref<'rtl' | 'ltr'>('rtl')
const disableRename = ref(false)
const lastAction = ref('')
const items = computed<NoratoMenuItem[]>(() => [
  { value: 'edit', label: 'ویرایش', shortcut: 'Ctrl E', icon: MenuEditIcon },
  { value: 'copy', label: 'کپی', shortcut: 'Ctrl C', icon: MenuCopyIcon },
  { value: 'share', label: 'اشتراک‌گذاری', icon: MenuShareIcon },
  { value: 'rename', label: 'تغییر نام', description: 'نام نمایشی این مورد را عوض کن', disabled: disableRename.value },
  { value: 'move', label: 'انتقال به', icon: MenuFolderIcon, children: [
    { value: 'move-project', label: 'پروژه‌ها', icon: MenuFolderIcon },
    { value: 'move-archive', label: 'بایگانی', icon: MenuFolderIcon },
  ] },
  { value: 'delete', label: 'حذف', icon: MenuDeleteIcon, danger: true, separatorBefore: true },
])
const code = computed(() => usageExamples.menu
  .replace('size="medium"', `size="${size.value}"`)
  .replace('dir="rtl"', `dir="${direction.value}"`))
const onSelect = (value: string) => {
  const labels: Record<string, string> = { edit: 'ویرایش', copy: 'کپی', share: 'اشتراک‌گذاری', rename: 'تغییر نام', 'move-project': 'انتقال به پروژه‌ها', 'move-archive': 'انتقال به بایگانی', delete: 'حذف' }
  lastAction.value = `اقدام «${labels[value] || value}» انتخاب شد.`
}
</script>

<template>
  <div class="menu-playground" dir="rtl">
    <div class="menu-playground__preview">
      <NoratoMenu id="menu-playground" label="اقدام‌های بیشتر" :items="items" :size="size" :dir="direction" @select="onSelect" />
      <span class="menu-playground__hint">برای دیدن گزینه‌ها دکمهٔ سه‌نقطه را باز کن.</span>
    </div>
    <div class="menu-playground__controls">
      <PlaygroundSelect id="menu-playground-size" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" />
      <PlaygroundSelect id="menu-playground-dir" v-model="direction" label="جهت نمایش" :options="[{value:'rtl',label:'راست‌به‌چپ'},{value:'ltr',label:'چپ‌به‌راست'}]" />
      <label class="menu-playground__toggle"><input v-model="disableRename" type="checkbox"> غیرفعال‌کردن تغییر نام</label>
      <span class="menu-playground__result" role="status" aria-live="polite">{{ lastAction || 'اقدامی انتخاب نشده است.' }}</span>
    </div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'menu-code', code)">{{ props.copiedKey === 'menu-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ code }}</code></pre>
  </div>
</template>
