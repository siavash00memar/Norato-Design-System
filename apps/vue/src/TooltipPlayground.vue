<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoTooltip, NoratoTooltipProvider, type NoratoTooltipLayout, type NoratoTooltipPlacement, type NoratoTooltipSurface } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const surface = ref<NoratoTooltipSurface>('dark')
const layout = ref<NoratoTooltipLayout>('simple')
const placement = ref<NoratoTooltipPlacement>('top')
const opened = ref(true)
const title = ref('کپی لینک')
const description = ref('نشانی صفحه را در کلیپ‌بورد کپی کن.')
const actionLabel = ref('میانبر: Ctrl + C')
const snippet = computed(() => `<script setup lang="ts">\nimport { NoratoTooltip } from '@norato/vue'\n<\/script>\n<template>\n  <NoratoTooltip id="copy-link" title="${title.value}" surface="${surface.value}" layout="${layout.value}" placement="${placement.value}" ${layout.value === 'rich' ? `description="${description.value}" action-label="${actionLabel.value}"` : ''}>\n    <template #trigger><button type="button" aria-label="کپی لینک">کپی</button></template>\n  </NoratoTooltip>\n</template>`)
const emit = defineEmits<{ copy: [key: string, text: string] }>()
const props = defineProps<{ copiedKey?: string }>()
</script>

<template>
  <div class="button-playground tooltip-playground" dir="rtl">
    <header><strong>آزمایش Tooltip اجرایی</strong><span>۱۶ ترکیب سطح، چیدمان و جایگاه را با ماوس یا صفحه‌کلید بررسی کن.</span></header>
    <div class="button-playground-preview tooltip-playground__preview">
      <NoratoTooltip id="tooltip-playground" v-model:open="opened" :title="title" :description="description" :action-label="actionLabel" :surface="surface" :layout="layout" :placement="placement" :default-open="opened">
        <template #trigger><button class="norato-tooltip__trigger" type="button" aria-label="راهنمای کپی لینک"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l2-2A5 5 0 0 0 12 4l-1.1 1.1M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20l1.1-1.1" /></svg></button></template>
      </NoratoTooltip>
    </div>
    <div class="button-playground-controls tooltip-playground__controls">
      <label class="playground-text-field"><span>متن</span><input v-model="title" type="text" aria-label="متن راهنما" /></label>
      <label v-if="layout==='rich'" class="playground-text-field"><span>توضیح</span><input v-model="description" type="text" aria-label="توضیح راهنما" /></label>
      <label v-if="layout==='rich'" class="playground-text-field"><span>متن همراه</span><input v-model="actionLabel" type="text" aria-label="متن همراه راهنما" /></label>
      <PlaygroundSelect id="tooltip-surface" v-model="surface" label="سطح" :options="[{value:'dark',label:'Dark'},{value:'glass',label:'Glass'}]" />
      <PlaygroundSelect id="tooltip-layout" v-model="layout" label="چیدمان" :options="[{value:'simple',label:'Simple'},{value:'rich',label:'Rich'}]" />
      <PlaygroundSelect id="tooltip-placement" v-model="placement" label="جایگاه" :options="[{value:'top',label:'بالا'},{value:'bottom',label:'پایین'},{value:'right',label:'راست'},{value:'left',label:'چپ'}]" />
      <label class="button-playground-switch"><input v-model="opened" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>نمایش اجباری</span></label>
    </div>
    <section class="tooltip-playground__group" aria-labelledby="tooltip-timing-title">
      <div><strong id="tooltip-timing-title">آزمون فاصلهٔ بازشدن راهنماها</strong><span>راهنمای اول را نگه دار تا باز شود، سپس نشانگر را به دکمهٔ دوم ببر.</span></div>
      <div class="tooltip-playground__group-triggers">
        <NoratoTooltipProvider>
          <NoratoTooltip id="tooltip-timing-first" title="راهنمای اول" placement="top">
            <template #trigger><button type="button" aria-label="نمایش راهنمای اول">اول</button></template>
          </NoratoTooltip>
          <NoratoTooltip id="tooltip-timing-second" title="راهنمای دوم" placement="top">
            <template #trigger><button type="button" aria-label="نمایش راهنمای دوم">دوم</button></template>
          </NoratoTooltip>
        </NoratoTooltipProvider>
      </div>
    </section>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','tooltip-playground',snippet)">{{ props.copiedKey==='tooltip-playground'?'کپی شد':'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.tooltip-playground__group{display:grid;gap:var(--norato-space-3);padding:var(--norato-space-4);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default)}
.tooltip-playground__group>div:first-child{display:grid;gap:var(--norato-space-1)}
.tooltip-playground__group>div:first-child span{color:var(--norato-color-text-secondary);font-size:var(--norato-font-size-sm)}
.tooltip-playground__group-triggers{display:flex;align-items:center;gap:var(--norato-space-2)}
.tooltip-playground__group-triggers :deep(button){min-inline-size:var(--norato-control-target-min);min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-control);background:var(--norato-color-surface-default);color:var(--norato-color-text-primary);font:inherit;cursor:pointer}
.tooltip-playground__group-triggers :deep(button:focus-visible){outline:2px solid var(--norato-color-focus-ring);outline-offset:2px}
</style>
