<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoCommandPalette } from '@norato/vue'
import type { NoratoCommandGroup, NoratoCommandItem } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { CommandPaletteNewIcon, CommandPaletteProjectsIcon, CommandPaletteSettingsIcon } from './command-palette-icons'
import { usageExamples } from './usage-examples'
import './command-palette-playground.css'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const open = ref(false)
const query = ref('')
const state = ref<'default' | 'loading' | 'empty'>('default')
const disableSettings = ref(false)
const lastCommand = ref('')

const baseGroups: NoratoCommandGroup[] = [
  { id: 'suggested', label: 'پیشنهادی', items: [
    { id: 'new-project', label: 'پروژهٔ جدید', description: 'ساخت یک پروژهٔ تازه', keywords: ['ساخت', 'ایجاد', 'project'], shortcut: '⌘ N', icon: CommandPaletteNewIcon },
    { id: 'settings', label: 'تنظیمات', description: 'مدیریت تنظیمات فضای کاری', keywords: ['پیکربندی', 'settings'], shortcut: '⌘ ,', icon: CommandPaletteSettingsIcon, disabled: disableSettings.value },
    { id: 'projects', label: 'پروژه‌ها', description: 'مشاهدهٔ همهٔ پروژه‌ها', keywords: ['فهرست', 'navigation'], kind: 'navigation', icon: CommandPaletteProjectsIcon },
  ] },
  { id: 'recent', label: 'اخیراً استفاده‌شده', items: [
    { id: 'recent-docs', label: 'مستندات طراحی', keywords: ['راهنما'], kind: 'recent', icon: CommandPaletteProjectsIcon },
  ] },
]
const groups = computed(() => state.value === 'empty' ? [] : baseGroups.map(group => ({ ...group, items: group.items.map(item => item.id === 'settings' ? { ...item, disabled: disableSettings.value } : item) })))
const code = usageExamples['command-palette']
const onSelect = (item: NoratoCommandItem) => { lastCommand.value = `فرمان «${item.label}» انتخاب شد.` }
</script>

<template>
  <div class="command-palette-playground" dir="rtl">
    <div class="command-palette-playground__preview">
      <button class="command-palette-playground__trigger" type="button" aria-haspopup="dialog" :aria-expanded="open" @click="open = true">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4" /><path d="m16 16 4 4" /></svg>
        <span>باز کردن Command Palette</span><kbd dir="ltr">Ctrl K</kbd>
      </button>
      <span class="command-palette-playground__hint">یا از میانبر Ctrl/⌘ + K استفاده کن</span>
    </div>
    <NoratoCommandPalette id="command-palette-playground" v-model:open="open" v-model:query="query" :groups="groups" :loading="state === 'loading'" shortcut="k" @select="onSelect" />
    <div class="command-palette-playground__controls">
      <PlaygroundSelect id="command-palette-state" v-model="state" label="وضعیت نتایج" :options="[{value:'default',label:'نتایج پیشنهادی'},{value:'loading',label:'در حال جست‌وجو'},{value:'empty',label:'بدون نتیجه'}]" />
      <label class="command-palette-playground__toggle"><input v-model="disableSettings" type="checkbox"> غیرفعال‌کردن تنظیمات</label>
      <span class="command-palette-playground__result" role="status" aria-live="polite">{{ lastCommand || 'هنوز فرمانی انتخاب نشده است.' }}</span>
    </div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'command-palette-code', code)">{{ props.copiedKey === 'command-palette-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ code }}</code></pre>
  </div>
</template>
