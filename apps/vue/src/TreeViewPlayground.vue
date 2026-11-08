<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoTreeView, type NoratoTreeNode } from '@norato/vue'

const props = defineProps<{ copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const selected = ref('readme')
const expanded = ref(['projects', 'norato'])
const showGuides = ref(false)
const nodes: NoratoTreeNode[] = [
  { id: 'projects', label: 'پروژه‌ها', children: [
    { id: 'norato', label: 'نوراتـو', children: [
      { id: 'readme', label: 'README.md' },
      { id: 'package', label: 'package.json' },
    ] },
    { id: 'lemon', label: 'لمون', children: [{ id: 'guide', label: 'راهنما.md' }] },
  ] },
  { id: 'archive', label: 'بایگانی', disabled: true, children: [{ id: 'old-project', label: 'پروژهٔ قدیمی' }] },
]
const code = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoTreeView, type NoratoTreeNode } from '@norato/vue'\nconst selected = ref('readme')\nconst expanded = ref(['projects', 'norato'])\nconst items: NoratoTreeNode[] = [\n  { id: 'projects', label: 'پروژه‌ها', children: [\n    { id: 'norato', label: 'نوراتـو', children: [{ id: 'readme', label: 'README.md' }] },\n  ] },\n]\n<\/script>\n<template><NoratoTreeView id="projects" v-model="selected" v-model:expanded-ids="expanded" label="پروژه‌ها" :items="items" /></template>`)
</script>

<template>
  <div class="tree-view-playground" dir="rtl">
    <div class="tree-view-playground__controls">
      <label><input v-model="showGuides" type="checkbox" /> نمایش خطوط راهنما</label>
    </div>
    <NoratoTreeView id="tree-playground" v-model="selected" v-model:expanded-ids="expanded" label="پروژه‌ها" :items="nodes" :show-guides="showGuides" />
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
