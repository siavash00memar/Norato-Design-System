<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { NoratoPagination } from '@norato/vue'
import { usageExamples } from './usage-examples'
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const media = window.matchMedia('(max-width: 480px)')
const type = ref<'numbers' | 'simple'>(media.matches ? 'simple' : 'numbers')
const manualType = ref(false)
const size = ref<'small' | 'medium'>('medium')
const current = ref(3)
const total = ref(12)
const currentInput = computed({
  get: () => current.value,
  set: (value: string | number) => {
    const parsed = Number(value)
    if (!Number.isFinite(parsed)) return
    current.value = Math.min(total.value, Math.max(1, Math.floor(parsed) || 1))
  },
})
const totalInput = computed({
  get: () => total.value,
  set: (value: string | number) => {
    const parsed = Number(value)
    if (!Number.isFinite(parsed)) return
    total.value = Math.max(1, Math.floor(parsed) || 1)
    current.value = Math.min(current.value, total.value)
  },
})
const syncResponsiveType = () => { if (!manualType.value) type.value = media.matches ? 'simple' : 'numbers' }
onMounted(() => media.addEventListener('change', syncResponsiveType))
onBeforeUnmount(() => media.removeEventListener('change', syncResponsiveType))
const example = computed(() => usageExamples.pagination
  .replace('const currentPage = ref(3)', `const currentPage = ref(${current.value})`)
  .replace('const totalPages = ref(12)', `const totalPages = ref(${total.value})`)
  .replace('<NoratoPagination id="results-pagination" v-model="currentPage" :total-pages="totalPages" />', `<NoratoPagination id="results-pagination" v-model="currentPage" :total-pages="totalPages" type="${type.value}" size="${size.value}" />`))
</script>

<template>
  <div class="pagination-playground" dir="rtl">
    <div class="pagination-playground__preview">
      <NoratoPagination id="playground-pagination" v-model="current" :total-pages="total" :type="type" :size="size" />
    </div>
    <div class="pagination-playground__controls">
      <PlaygroundSelect id="paginationplayground-type-1" v-model="type" label="نوع نمایش" :options="[{value:'numbers',label:'شماره‌دار'},{value:'simple',label:'ساده'}]" @update:model-value="manualType = true" />
      <PlaygroundSelect id="paginationplayground-size-2" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'}]" />
      <label class="playground-text-field">صفحهٔ جاری<input v-model.number="currentInput" type="number" min="1" :max="total"></label>
      <label class="playground-text-field">تعداد صفحه‌ها<input v-model.number="totalInput" type="number" min="1"></label>
    </div>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy', 'pagination-code', example)">{{ props.copiedKey === 'pagination-code' ? 'کپی شد' : 'کپی کد' }}</button></div>
    <pre class="usage-code" dir="ltr"><code>{{ example }}</code></pre>
  </div>
</template>
