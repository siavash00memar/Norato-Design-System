<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoSkeleton, NoratoSkeletonPattern, type NoratoSkeletonEffect, type NoratoSkeletonPatternType, type NoratoSkeletonShape } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const mode = ref<'pattern' | 'shape'>('pattern')
const pattern = ref<NoratoSkeletonPatternType>('avatar-text')
const shape = ref<NoratoSkeletonShape>('line')
const effect = ref<NoratoSkeletonEffect>('pulse')
const direction = ref<'rtl' | 'ltr'>('rtl')
const snippet = computed(() => mode.value === 'pattern'
  ? '<script setup lang="ts">\nimport { NoratoSkeletonPattern } from \'@norato/vue\'\n<\\/script>\n<template><NoratoSkeletonPattern type="' + pattern.value + '" effect="' + effect.value + '" label="در حال بارگذاری محتوا" dir="' + direction.value + '" /></template>'
  : '<script setup lang="ts">\nimport { NoratoSkeleton } from \'@norato/vue\'\n<\\/script>\n<template><NoratoSkeleton shape="' + shape.value + '" effect="' + effect.value + '" label="در حال بارگذاری محتوا" dir="' + direction.value + '" /></template>')
const emit = defineEmits<{ copy: [key: string, text: string] }>()
const props = defineProps<{ copiedKey?: string }>()
</script>

<template>
  <div class="button-playground skeleton-playground" dir="rtl">
    <header><strong>آزمایش Skeleton اجرایی</strong><span>چهار شکل، هشت الگو و دو افکت در دسترس‌اند.</span></header>
    <div class="button-playground-preview skeleton-playground__preview">
      <NoratoSkeletonPattern v-if="mode === 'pattern'" :type="pattern" :effect="effect" :dir="direction" />
      <NoratoSkeleton v-else :shape="shape" :effect="effect" :dir="direction" />
    </div>
    <div class="button-playground-controls skeleton-playground__controls">
      <PlaygroundSelect id="skeleton-mode" v-model="mode" label="نوع نمایش" :options="[{value:'pattern',label:'الگوی آماده'},{value:'shape',label:'شکل پایه'}]" />
      <PlaygroundSelect v-if="mode === 'pattern'" id="skeleton-pattern" v-model="pattern" label="الگو" :options="[{value:'text',label:'متن'},{value:'avatar-text',label:'آواتار و متن'},{value:'list-item',label:'ردیف فهرست'},{value:'card',label:'کارت'},{value:'card-horizontal',label:'کارت افقی'},{value:'input',label:'ورودی'},{value:'table-row',label:'ردیف جدول'},{value:'stat',label:'آمار'}]" />
      <PlaygroundSelect v-else id="skeleton-shape" v-model="shape" label="شکل" :options="[{value:'line',label:'خط'},{value:'circle',label:'دایره'},{value:'rectangle',label:'مستطیل'},{value:'pill',label:'کپسولی'}]" />
      <PlaygroundSelect id="skeleton-effect" v-model="effect" label="افکت" :options="[{value:'pulse',label:'Pulse'},{value:'shimmer',label:'Shimmer'}]" />
      <PlaygroundSelect id="skeleton-direction" v-model="direction" label="جهت" :options="[{value:'rtl',label:'RTL'},{value:'ltr',label:'LTR'}]" />
    </div>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','skeleton-playground',snippet)">{{ props.copiedKey==='skeleton-playground'?'کپی شد':'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.skeleton-playground__preview{min-block-size:var(--norato-control-target-min);display:grid;place-items:center}
.skeleton-playground__controls{grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--norato-space-32)),1fr))}
.skeleton-playground__preview :deep(.norato-skeleton-pattern){inline-size:min(100%,var(--norato-skeleton-pattern-inline-size))}
</style>
