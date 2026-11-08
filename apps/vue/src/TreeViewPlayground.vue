<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { NoratoTreeView, type NoratoTreeNode } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const selected = ref('readme')
const expanded = ref(['projects', 'norato'])
const showGuides = ref(false)
const disabled = ref(false)
const stateMode = ref<'controlled' | 'uncontrolled'>('controlled')
const treeKey = ref(0)
const nodes: NoratoTreeNode[] = [
  { id: 'projects', label: 'پروژه‌ها', children: [
    { id: 'norato', label: 'نوراتـو', children: [
      { id: 'readme', label: 'README.md' },
      { id: 'package', label: 'package.json' },
    ] },
    { id: 'guides', label: 'راهنماها', children: [{ id: 'guide', label: 'راهنما.md' }] },
  ] },
  { id: 'archive', label: 'بایگانی', disabled: true, children: [{ id: 'old-project', label: 'پروژهٔ قدیمی' }] },
]
const code = computed(() => {
  const controlled = stateMode.value === 'controlled'
  const model = controlled
    ? 'v-model="selected" v-model:expanded-ids="expanded"'
    : "default-selected-id=\"readme\" :default-expanded-ids=\"['projects', 'norato']\""
  const lines = [
    '<script setup lang="ts">',
    ...(controlled ? ["import { ref } from 'vue'"] : []),
    "import { NoratoTreeView, type NoratoTreeNode } from '@norato/vue'",
    ...(controlled ? ["const selected = ref('readme')", "const expanded = ref(['projects', 'norato'])"] : []),
    'const items: NoratoTreeNode[] = [',
    "  { id: 'projects', label: 'پروژه‌ها', children: [",
    "    { id: 'norato', label: 'نوراتـو', children: [{ id: 'readme', label: 'README.md' }] },",
    '  ] },',
    ']',
    '<\/script>',
    '<template>',
    '  <NoratoTreeView id="projects" ' + model + (disabled.value ? ' disabled' : '') + ' label="پروژه‌ها" :items="items" />',
    '</template>',
  ]
  return lines.join(String.fromCharCode(10))
})
watch(stateMode, () => {
  selected.value = 'readme'
  expanded.value = ['projects', 'norato']
  treeKey.value += 1
})
</script>

<template>
  <div class="tree-view-playground" dir="rtl">
    <div class="tree-view-playground__controls">
      <PlaygroundSelect id="tree-state-mode" v-model="stateMode" label="مدل وضعیت" :options="[{value:'controlled',label:'کنترل‌شده'},{value:'uncontrolled',label:'کنترل‌نشده'}]" />
      <label><input v-model="showGuides" type="checkbox" /> نمایش خطوط راهنما</label>
      <label><input v-model="disabled" type="checkbox" /> غیرفعال‌کردن درخت</label>
    </div>
    <NoratoTreeView :key="treeKey" id="tree-playground" :model-value="stateMode === 'controlled' ? selected : undefined" :expanded-ids="stateMode === 'controlled' ? expanded : undefined" :default-selected-id="stateMode === 'uncontrolled' ? 'readme' : undefined" :default-expanded-ids="stateMode === 'uncontrolled' ? ['projects', 'norato'] : []" label="پروژه‌ها" :items="nodes" :show-guides="showGuides" :disabled="disabled" @update:model-value="selected = $event ?? ''" @update:expanded-ids="expanded = $event" />
    <p class="tree-view-playground__selection" role="status">شناسهٔ انتخاب‌شده: <code dir="ltr">{{ selected || '—' }}</code></p>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'tree-view-code', code)">{{ props.copiedKey === 'tree-view-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.tree-view-playground { display: grid; gap: var(--norato-space-3); min-inline-size: 0; }
.tree-view-playground__controls { display: flex; flex-wrap: wrap; gap: var(--norato-space-2); }
.tree-view-playground__controls label { display: inline-flex; align-items: center; gap: var(--norato-space-2); min-block-size: var(--norato-control-target-min); color: var(--norato-color-text-secondary); }
.tree-view-playground__controls input { inline-size: var(--norato-icon-sm); block-size: var(--norato-icon-sm); accent-color: var(--norato-color-brand-yellow); }
.tree-view-playground__selection { margin: 0; color: var(--norato-color-text-secondary); font-size: var(--norato-type-body-small-size); }
.tree-view-playground__selection code { color: var(--norato-color-text-primary); }
</style>
