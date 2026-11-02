<script setup lang="ts">
import { computed, ref } from 'vue'
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
      <label>سبک<select v-model="style"><option value="plain">ساده</option><option value="glass">شیشه‌ای</option></select></label>
      <label>اندازه<select v-model="size"><option value="small">کوچک</option><option value="medium">متوسط</option><option value="large">بزرگ</option></select></label>
      <label>جداکننده<select v-model="separator"><option value="chevron">فلش</option><option value="slash">خط مورب</option></select></label>
      <label class="breadcrumbs-playground__toggle"><input v-model="collapsed" type="checkbox"> جمع‌کردن مسیر بلند</label>
    </div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'breadcrumbs-code', example)">{{ props.copiedKey === 'breadcrumbs-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ example }}</code></pre>
  </div>
</template>
