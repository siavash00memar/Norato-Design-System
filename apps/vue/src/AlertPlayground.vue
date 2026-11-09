<script setup lang="ts">
import { computed, nextTick, ref, type ComponentPublicInstance } from 'vue'
import { NoratoAlert, NoratoButton, type NoratoAlertLayout, type NoratoAlertTone, type NoratoAlertVariant } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const tone = ref<NoratoAlertTone>('info')
const variant = ref<NoratoAlertVariant>('glass')
const layout = ref<NoratoAlertLayout>('expanded')
const visible = ref(true)
const dismissible = ref(true)
const restoreButton = ref<ComponentPublicInstance | null>(null)
const alertPreview = ref<ComponentPublicInstance | null>(null)
async function focusRestoreButton() {
  await nextTick()
  const target = restoreButton.value?.$el
  if (target instanceof HTMLButtonElement) target.focus()
}
async function restoreAlert() {
  visible.value = true
  await nextTick()
  const target = alertPreview.value?.$el
  if (target instanceof HTMLElement) target.querySelector<HTMLButtonElement>('.norato-alert__close')?.focus()
}
const tones: { value: NoratoAlertTone; label: string }[] = [
  { value: 'info', label: 'اطلاعات' }, { value: 'success', label: 'موفقیت' }, { value: 'warning', label: 'هشدار' }, { value: 'danger', label: 'خطا' }, { value: 'neutral', label: 'خنثی' },
]
const variants: { value: NoratoAlertVariant; label: string }[] = [{ value: 'soft', label: 'Soft' }, { value: 'glass', label: 'Glass' }]
const layouts: { value: NoratoAlertLayout; label: string }[] = [{ value: 'inline', label: 'Inline' }, { value: 'expanded', label: 'Expanded' }]
const code = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoAlert, NoratoButton } from '@norato/vue'\nconst open = ref(true)\n<\/script>\n<template>\n  <NoratoAlert id="project-alert" v-model="open" tone="${tone.value}" variant="${variant.value}" layout="${layout.value}" message="تغییرات ذخیره شد" title="نسخهٔ جدید آماده است" description="نوراتو با قابلیت‌های تازه منتشر شد." dismissible>\n    <template #actions><NoratoButton label="مشاهدهٔ تغییرات" variant="secondary" /></template>\n  </NoratoAlert>\n<\/template>`)
</script>

<template>
  <div class="alert-playground" dir="rtl">
    <div class="alert-playground__controls">
      <PlaygroundSelect id="alert-tone" v-model="tone" label="لحن پیام" :options="tones" />
      <PlaygroundSelect id="alert-variant" v-model="variant" label="سبک" :options="variants" />
      <PlaygroundSelect id="alert-layout" v-model="layout" label="چیدمان" :options="layouts" />
      <label class="alert-playground__dismissible"><input v-model="dismissible" type="checkbox" /> قابل‌بستن</label>
    </div>
    <NoratoAlert
      ref="alertPreview"
      v-if="visible"
      id="alert-playground-preview"
      v-model="visible"
      :tone="tone"
      :variant="variant"
      :layout="layout"
      :dismissible="dismissible"
      title="نسخهٔ جدید آماده است"
      message="تغییرات ذخیره شد"
      description="نوراتو با قابلیت‌های تازه منتشر شد."
      @dismiss="focusRestoreButton"
    >
      <template #actions><NoratoButton label="مشاهدهٔ تغییرات" variant="secondary" /></template>
    </NoratoAlert>
    <div v-else class="alert-playground__restore"><span role="status">پیام بسته شد.</span><NoratoButton ref="restoreButton" label="نمایش دوباره" variant="secondary" @click="restoreAlert" /></div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'alert-code', code)">{{ props.copiedKey === 'alert-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.alert-playground{display:grid;gap:var(--norato-space-4);min-inline-size:0}.alert-playground__controls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--norato-space-3);align-items:end}.alert-playground__dismissible{display:flex;align-items:center;gap:var(--norato-space-2);min-block-size:var(--norato-control-target-min);font-size:var(--norato-type-body-small-size)}.alert-playground__dismissible input{inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);accent-color:var(--norato-color-brand-yellow)}.alert-playground__restore{display:flex;align-items:center;gap:var(--norato-space-3);flex-wrap:wrap}.alert-playground__restore [role=status]{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}@media(max-width:600px){.alert-playground__controls{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style>
