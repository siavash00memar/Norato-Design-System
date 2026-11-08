<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoBadge, NoratoCheckbox, NoratoNumberInput, type NoratoBadgeSize, type NoratoBadgeTone, type NoratoBadgeType } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const type = ref<NoratoBadgeType>('count')
const size = ref<NoratoBadgeSize>('medium')
const tone = ref<NoratoBadgeTone>('danger')
const direction = ref<'rtl' | 'ltr'>('rtl')
const anchorDisabled = ref(false)
const count = ref('3')
const numberValue = computed(() => Number(count.value) || 0)
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoBadge } from '@norato/vue'\nconst count = ref(${numberValue.value})\nconst anchorDisabled = ref(${anchorDisabled.value})\n<\\/script>\n\n<template>\n  <NoratoBadge anchor-label="اعلان‌ها" type="${type.value}" size="${size.value}" tone="${tone.value}" dir="${direction.value}" :count="count">\n    <template #anchor="{ accessibleName }">\n      <button type="button" :aria-label="accessibleName" :disabled="anchorDisabled">…</button>\n    </template>\n  </NoratoBadge>\n</template>`)

const typeOptions = [{ value: 'count', label: 'شمارش' }, { value: 'dot', label: 'نقطه' }]
const sizeOptions = [{ value: 'small', label: 'کوچک' }, { value: 'medium', label: 'متوسط' }]
const toneOptions = [{ value: 'danger', label: 'خطا' }, { value: 'inverse', label: 'معکوس' }, { value: 'neutral', label: 'خنثی' }, { value: 'success', label: 'موفق' }]
const directionOptions = [{ value: 'rtl', label: 'راست‌به‌چپ' }, { value: 'ltr', label: 'چپ‌به‌راست' }]
</script>

<template>
  <div class="badge-playground">
    <p class="badge-playground-note">نشانگر تزیینی است؛ نام دسترس‌پذیر روی دکمهٔ لنگر اعمال می‌شود.</p>
    <div class="badge-playground-controls">
      <PlaygroundSelect id="badge-type" v-model="type" label="نوع نشانگر" :options="typeOptions" />
      <PlaygroundSelect id="badge-size" v-model="size" label="اندازه" :options="sizeOptions" />
      <PlaygroundSelect id="badge-tone" v-model="tone" label="رنگ معنایی" :options="toneOptions" />
      <PlaygroundSelect id="badge-direction" v-model="direction" label="جهت" :options="directionOptions" />
      <NoratoCheckbox id="badge-anchor-disabled" v-model="anchorDisabled" label="لنگر غیرفعال (رفتار میزبان)" />
      <NoratoNumberInput v-if="type === 'count'" id="badge-count" v-model="count" label="تعداد" :min="0" :max="999" :step="1" presentation="stacked" />
    </div>
    <div class="badge-playground-stage">
      <NoratoBadge anchor-label="اعلان‌ها" :type="type" :size="size" :tone="tone" :dir="direction" :count="numberValue">
        <template #anchor="{ accessibleName }">
          <button class="badge-playground-anchor" type="button" :aria-label="accessibleName" :disabled="anchorDisabled">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
          </button>
        </template>
      </NoratoBadge>
    </div>
    <div class="badge-playground-code">
      <div class="badge-playground-code-head"><strong>نمونهٔ Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'badge-example', snippet)">{{ props.copiedKey === 'badge-example' ? 'کپی شد' : 'کپی کد' }}</button></div>
      <pre dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.badge-playground{display:grid;gap:var(--norato-space-4);direction:rtl}
.badge-playground-note{margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.badge-playground-controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3)}
.badge-playground-stage{position:relative;display:grid;place-items:center;min-block-size:var(--norato-badge-preview-stage-block-size);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-subtle)}
.badge-playground-anchor{display:grid;place-items:center;box-sizing:border-box;inline-size:var(--norato-control-target-min);block-size:var(--norato-control-target-min);border:0;border-radius:var(--norato-radius-control);background:var(--norato-color-surface-default);color:var(--norato-color-text-primary);cursor:pointer}
.badge-playground-anchor svg{inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);fill:none;stroke:currentColor;stroke-width:var(--norato-border-medium);stroke-linecap:round;stroke-linejoin:round}
.badge-playground-anchor:disabled{background:var(--norato-color-surface-muted);color:var(--norato-color-text-disabled);cursor:not-allowed}
.badge-playground-anchor:focus-visible{outline:var(--norato-border-focus) solid var(--norato-color-focus-ring);outline-offset:var(--norato-space-1)}
.badge-playground-code{display:grid;gap:var(--norato-space-2);min-inline-size:0}
.badge-playground-code-head{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-2)}
.badge-playground-code pre{box-sizing:border-box;max-inline-size:100%;overflow:auto;margin:0;padding:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-subtle);text-align:left;line-height:var(--norato-type-doc-body-line-height)}
.badge-playground-code code{font-family:Consolas,monospace;font-size:var(--norato-type-doc-caption-size);white-space:pre}
@media(max-width:520px){.badge-playground-controls{grid-template-columns:minmax(0,1fr)}}
</style>
