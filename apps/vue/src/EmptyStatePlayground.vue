<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoButton, NoratoEmptyState, type NoratoEmptyStateContainer, type NoratoEmptyStateLayout, type NoratoEmptyStateSize, type NoratoEmptyStateTone, type NoratoEmptyStateVisualType } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const layout = ref<NoratoEmptyStateLayout>('vertical')
const size = ref<NoratoEmptyStateSize>('medium')
const container = ref<NoratoEmptyStateContainer>('none')
const visualType = ref<NoratoEmptyStateVisualType>('icon')
const tone = ref<NoratoEmptyStateTone>('neutral')
const direction = ref<'rtl' | 'ltr'>('rtl')
const lastAction = ref('')
const snippet = computed(() => `<script setup lang="ts">\nimport { NoratoButton, NoratoEmptyState } from '@norato/vue'\n<\\/script>\n<template>\n  <NoratoEmptyState id="projects-empty" title="هنوز پروژه‌ای نساختی" description="اولین پروژه‌ات را بساز تا اینجا نمایش داده شود." layout="${layout.value}" size="${size.value}" container="${container.value}" visual-type="${visualType.value}" visual-tone="${tone.value}" dir="${direction.value}">\n    <template #primary-action><NoratoButton label="ساخت پروژه" variant="primary" /></template>\n    <template #secondary-action><NoratoButton label="راهنما" variant="secondary" /></template>\n  </NoratoEmptyState>\n</template>`)
const emit = defineEmits<{ copy: [key: string, text: string] }>()
const props = defineProps<{ copiedKey?: string }>()
</script>

<template>
  <div class="button-playground empty-state-playground" dir="rtl">
    <header><strong>آزمایش Empty State اجرایی</strong><span>چیدمان، اندازه، قاب، تصویر و لحن را تغییر بده؛ اقدام‌ها متعلق به برنامهٔ میزبان می‌مانند.</span></header>
    <div class="button-playground-preview empty-state-playground__preview">
      <NoratoEmptyState
        id="empty-state-playground"
        title="هنوز پروژه‌ای نساختی"
        description="اولین پروژه‌ات را بساز تا اینجا نمایش داده شود."
        :layout="layout"
        :size="size"
        :container="container"
        :visual-type="visualType"
        :visual-tone="tone"
        :dir="direction"
      >
        <template #primary-action><NoratoButton label="ساخت پروژه" variant="primary" @click="lastAction = 'پروژهٔ جدید'" /></template>
        <template #secondary-action><NoratoButton label="راهنما" variant="secondary" @click="lastAction = 'راهنما'" /></template>
      </NoratoEmptyState>
    </div>
    <p class="empty-state-playground__status" role="status" aria-live="polite">{{ lastAction ? `اقدام انتخاب‌شده: ${lastAction}` : 'هنوز اقدامی انجام نشده است.' }}</p>
    <div class="button-playground-controls empty-state-playground__controls">
      <PlaygroundSelect id="empty-state-layout" v-model="layout" label="چیدمان" :options="[{value:'vertical',label:'عمودی'},{value:'horizontal',label:'افقی'}]" />
      <PlaygroundSelect id="empty-state-size" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" />
      <PlaygroundSelect id="empty-state-container" v-model="container" label="قاب داخلی" :options="[{value:'none',label:'بدون قاب'},{value:'card',label:'کارت'}]" />
      <PlaygroundSelect id="empty-state-visual" v-model="visualType" label="تصویر" :options="[{value:'icon',label:'آیکن'},{value:'illustration',label:'تصویرسازی'}]" />
      <PlaygroundSelect id="empty-state-tone" v-model="tone" label="لحن تصویر" :options="[{value:'neutral',label:'خنثی'},{value:'success',label:'موفقیت'},{value:'warning',label:'هشدار'},{value:'danger',label:'خطر'}]" />
      <PlaygroundSelect id="empty-state-direction" v-model="direction" label="جهت" :options="[{value:'rtl',label:'RTL'},{value:'ltr',label:'LTR'}]" />
    </div>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','empty-state-playground',snippet)">{{ props.copiedKey==='empty-state-playground'?'کپی شد':'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.empty-state-playground__preview{display:grid;place-items:center;min-block-size:calc(var(--norato-control-target-min) + var(--norato-space-8));padding-block:var(--norato-space-4)}
.empty-state-playground__preview :deep(.norato-empty-state){max-inline-size:100%}
.empty-state-playground__controls{grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--norato-space-32)),1fr))}
.empty-state-playground__status{min-block-size:var(--norato-type-body-small-line-height);margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-doc-caption-size)}
</style>
