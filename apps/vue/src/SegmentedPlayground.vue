<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { NoratoSegmentedControl, type NoratoSegmentedItem } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const selected = ref('day')
const style = ref<'glass' | 'contrast'>('glass')
const size = ref<'small' | 'medium' | 'large' | 'xlarge'>('medium')
const count = ref<2 | 3 | 4>(3)
const disabled = ref(false)
const disabledItem = ref(false)
const allItems: NoratoSegmentedItem[] = [
  { value: 'day', label: 'روزانه' },
  { value: 'week', label: 'هفتگی' },
  { value: 'month', label: 'ماهانه' },
  { value: 'year', label: 'سالانه' },
]
const items = computed(() => allItems.slice(0, count.value).map(item => ({ ...item, disabled: item.value === 'month' && disabledItem.value })))
watch(items, available => {
  // A controlled parent may keep the current value when its item becomes disabled.
  // Only reset when the selected value is removed by changing the option count.
  if (!available.some(item => item.value === selected.value)) selected.value = available.find(item => !item.disabled)?.value || ''
})
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoSegmentedControl } from '@norato/vue'\nconst period = ref('${selected.value}')\nconst views = ${JSON.stringify(items.value)}\n<\\/script>\n\n<template>\n  <NoratoSegmentedControl id="period" v-model="period" label="دورهٔ نمایش" :items="views" style="${style.value}" size="${size.value}"${disabled.value ? ' disabled' : ''} />\n</template>`)
</script>

<template>
  <div class="button-playground segmented-playground" dir="rtl">
    <header><strong>آزمایش Segmented Control اجرایی</strong><span>نمای یک محتوای مشترک را عوض می‌کند؛ با کلیدهای جهت بین گزینه‌ها حرکت کن.</span></header>
    <div class="button-playground-preview segmented-playground-preview">
      <NoratoSegmentedControl id="segmented-playground-period" v-model="selected" label="دورهٔ نمایش" :items="items" :style="style" :size="size" :disabled="disabled" />
      <span role="status" aria-live="polite">نمای انتخاب‌شده: {{ items.find(item => item.value === selected)?.label || 'بدون انتخاب' }}</span>
    </div>
    <div class="button-playground-toggles">
      <div class="select-playground-setting"><PlaygroundSelect id="segmentedplayground-style-1" v-model="style" label="سبک" :options="[{value:'glass',label:'شیشه‌ای'},{value:'contrast',label:'پرکنتراست'}]" /></div>
      <div class="select-playground-setting"><PlaygroundSelect id="segmentedplayground-size-2" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'},{value:'xlarge',label:'خیلی بزرگ'}]" /></div>
      <div class="select-playground-setting"><PlaygroundSelect id="segmentedplayground-count-3" v-model="count" label="تعداد گزینه" :options="[{value:2,label:'۲'},{value:3,label:'۳'},{value:4,label:'۴'}]" /></div>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="disabledItem" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>ماهانه غیرفعال</span></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'segmented-playground', snippet)">{{ copiedKey === 'segmented-playground' ? 'کپی شد' : copiedKey === 'segmented-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
