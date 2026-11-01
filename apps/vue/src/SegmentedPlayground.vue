<script setup lang="ts">
import { computed, ref, watch } from 'vue'
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
  if (!available.some(item => item.value === selected.value && !item.disabled)) selected.value = available.find(item => !item.disabled)?.value || ''
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
      <label class="select-playground-setting"><span>سبک</span><select v-model="style"><option value="glass">شیشه‌ای</option><option value="contrast">پرکنتراست</option></select></label>
      <label class="select-playground-setting"><span>اندازه</span><select v-model="size"><option value="small">کوچک</option><option value="medium">متوسط</option><option value="large">بزرگ</option><option value="xlarge">خیلی بزرگ</option></select></label>
      <label class="select-playground-setting"><span>تعداد گزینه</span><select v-model.number="count"><option :value="2">۲</option><option :value="3">۳</option><option :value="4">۴</option></select></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="disabledItem" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>ماهانه غیرفعال</span></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'segmented-playground', snippet)">{{ copiedKey === 'segmented-playground' ? 'کپی شد' : copiedKey === 'segmented-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
