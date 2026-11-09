<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { NoratoChip, type NoratoChipMode, type NoratoChipSize } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const mode = ref<NoratoChipMode>('filter')
const size = ref<NoratoChipSize>('medium')
const direction = ref<'rtl' | 'ltr'>('rtl')
const selected = ref(false)
const disabled = ref(false)
const removedLabel = ref('')
const previewRef = ref<HTMLDivElement | null>(null)
const restoreButtonRef = ref<HTMLButtonElement | null>(null)
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const handleRemove = (label: string) => {
  removedLabel.value = label
  nextTick(() => restoreButtonRef.value?.focus())
}
const restoreChip = () => {
  removedLabel.value = ''
  nextTick(() => previewRef.value?.querySelector<HTMLButtonElement>('.norato-chip__remove')?.focus())
}
const snippet = computed(() => mode.value === 'filter'
  ? `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoChip } from '@norato/vue'\nconst selected = ref(false)\n<\/script>\n\n<template>\n  <NoratoChip label="طراحی" mode="filter" v-model="selected" size="${size.value}"${disabled.value ? ' disabled' : ''} dir="${direction.value}" />\n<\/template>`
  : `<script setup lang="ts">\nimport { NoratoChip } from '@norato/vue'\nfunction removeChip(label: string) { /* update application state */ }\n<\/script>\n\n<template>\n  <NoratoChip label="طراحی" mode="input" size="${size.value}"${disabled.value ? ' disabled' : ''} dir="${direction.value}" @remove="removeChip" />\n<\/template>`)
</script>

<template>
  <div class="button-playground chip-playground" dir="rtl">
    <header><strong>آزمایش Chip اجرایی</strong><span>فیلتر انتخاب‌پذیر و برچسب ورودیِ قابل‌حذف را جداگانه بررسی کن.</span></header>
    <div ref="previewRef" class="button-playground-preview chip-playground__preview">
      <NoratoChip v-if="mode === 'filter'" label="طراحی" mode="filter" v-model="selected" :disabled="disabled" :size="size" :dir="direction" />
      <template v-else>
        <NoratoChip v-if="!removedLabel" label="طراحی" mode="input" :disabled="disabled" :size="size" :dir="direction" @remove="handleRemove" />
        <div v-else class="chip-playground__removed" role="status">برچسب «{{ removedLabel }}» حذف شد <button ref="restoreButtonRef" type="button" @click="restoreChip">بازگردانی</button></div>
      </template>
    </div>
    <div class="button-playground-controls chip-playground__controls">
      <PlaygroundSelect id="chip-mode" v-model="mode" label="کاربرد" :options="[{value:'filter',label:'فیلتر انتخاب‌پذیر'},{value:'input',label:'ورودی قابل‌حذف'}]" />
      <PlaygroundSelect id="chip-size" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'},{value:'xlarge',label:'خیلی بزرگ'}]" />
      <PlaygroundSelect id="chip-direction" v-model="direction" label="جهت" :options="[{value:'rtl',label:'RTL'},{value:'ltr',label:'LTR'}]" />
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="selected" type="checkbox" :disabled="mode !== 'filter'" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>انتخاب‌شده</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
    </div>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','chip-playground',snippet)">{{ props.copiedKey === 'chip-playground' ? 'کپی شد' : 'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.chip-playground__preview{display:flex;align-items:center;justify-content:center;gap:var(--norato-space-3);min-block-size:calc(var(--norato-control-target-min) + var(--norato-space-8));padding:var(--norato-space-4)}
.chip-playground__controls{grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--norato-space-32)),1fr))}
.chip-playground__removed{display:flex;align-items:center;gap:var(--norato-space-2);color:var(--norato-color-text-secondary)}
.chip-playground__removed button{min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-pill);background:var(--norato-color-surface-default);color:var(--norato-color-text-primary);font:inherit;cursor:pointer}
.chip-playground__removed button:hover{border-color:var(--norato-color-brand-yellow);background:var(--norato-color-warning-container)}
</style>
