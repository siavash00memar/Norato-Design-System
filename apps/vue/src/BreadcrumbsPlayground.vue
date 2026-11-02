<script setup lang="ts">
import { computed, ref } from 'vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { NoratoBreadcrumbs, type NoratoBreadcrumbItem } from '@norato/vue'
import { usageExamples } from './usage-examples'
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const style = ref<'plain' | 'glass'>('plain')
const size = ref<'small' | 'medium' | 'large'>('medium')
const separator = ref<'chevron' | 'slash'>('chevron')
const collapsed = ref(true)
const items = computed<NoratoBreadcrumbItem[]>(() => [
  { label: 'خانه', href: '/', home: true }, { label: 'محصولات', href: '/products' },
  { label: 'پوشاک', href: '/products/clothing' }, { label: 'کفش ورزشی', href: '/products/shoes' },
  { label: 'کفش دویدن', href: '/products/shoes/running' }, { label: 'کفش رانینگ مردانه', current: true },
])
const example = computed(() => usageExamples.breadcrumbs.replace('<NoratoBreadcrumbs id="page-path" :items="trail" />', `<NoratoBreadcrumbs id="page-path" :items="trail" style="${style.value}" size="${size.value}" separator="${separator.value}" :collapsed="${collapsed.value}" />`))
</script>

<template>
  <div class="breadcrumbs-playground" dir="rtl">
    <div class="breadcrumbs-playground__preview">
      <NoratoBreadcrumbs id="playground-breadcrumbs" label="مسیر فروشگاه" :items="items" :style="style" :size="size" :separator="separator" :collapsed="collapsed" />
    </div>
    <div class="breadcrumbs-playground__controls">
      <PlaygroundSelect id="breadcrumbsplayground-style-1" v-model="style" label="سبک" :options="[{value:'plain',label:'ساده'},{value:'glass',label:'شیشه‌ای'}]" />
      <PlaygroundSelect id="breadcrumbsplayground-size-2" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" />
      <PlaygroundSelect id="breadcrumbsplayground-separator-3" v-model="separator" label="جداکننده" :options="[{value:'chevron',label:'فلش'},{value:'slash',label:'خط مورب'}]" />
      <label class="breadcrumbs-playground__toggle"><input v-model="collapsed" type="checkbox"> جمع‌کردن مسیر بلند</label>
    </div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'breadcrumbs-code', example)">{{ props.copiedKey === 'breadcrumbs-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ example }}</code></pre>
  </div>
</template>
