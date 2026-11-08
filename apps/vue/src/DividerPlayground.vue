<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoDivider, type NoratoDividerOrientation, type NoratoDividerSpacing, type NoratoDividerTone, type NoratoDividerType } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()

const orientation = ref<NoratoDividerOrientation>('horizontal')
const type = ref<NoratoDividerType>('line')
const spacing = ref<NoratoDividerSpacing>(8)
const tone = ref<NoratoDividerTone>('subtle')
const label = ref('یا')
const decorative = ref(true)
const direction = ref<'rtl' | 'ltr'>('rtl')

const snippet = computed(() => {
  const props = [`orientation="${orientation.value}"`, `type="${type.value}"`, `:spacing="${spacing.value}"`, `tone="${tone.value}"`]
  if (type.value !== 'line') props.push(`label="${label.value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}"`)
  if (!decorative.value) props.push(':decorative="false"')
  return `<script setup lang="ts">\nimport { NoratoDivider } from '@norato/vue'\n<\\/script>\n\n<template>\n  <NoratoDivider ${props.join(' ')} />\n<\\/template>`
})
</script>

<template>
  <div class="divider-playground" dir="rtl">
    <header><strong>آزمایش جداکنندهٔ اجرایی</strong><span>نمونهٔ بالا نمایشی و ثابت است؛ این نمونه از adapter واقعی Vue استفاده می‌کند.</span></header>
    <div class="divider-playground__preview" :dir="direction">
      <span v-if="orientation === 'vertical'" class="divider-playground__context">محتوای راست <NoratoDivider :orientation="orientation" :type="type" :spacing="spacing" :tone="tone" :label="label" :decorative="decorative" /> محتوای چپ</span>
      <template v-else>
        <span>بخش اول</span>
        <NoratoDivider :orientation="orientation" :type="type" :spacing="spacing" :tone="tone" :label="label" :decorative="decorative" />
        <span>بخش دوم</span>
      </template>
      <small role="status" aria-live="polite">{{ decorative ? 'جداکنندهٔ تزئینی' : `جداکنندهٔ معنایی · ${orientation === 'horizontal' ? 'افقی' : 'عمودی'}` }}</small>
    </div>
    <div class="divider-playground__controls">
      <PlaygroundSelect id="divider-orientation" v-model="orientation" label="جهت" :options="[{value:'horizontal',label:'افقی'},{value:'vertical',label:'عمودی'}]" />
      <PlaygroundSelect id="divider-type" v-model="type" label="نوع" :options="[{value:'line',label:'خط ساده'},{value:'label-center',label:'برچسب وسط'},{value:'label-start',label:'برچسب ابتدا'}]" />
      <PlaygroundSelect id="divider-tone" v-model="tone" label="لحن" :options="[{value:'subtle',label:'ملایم'},{value:'strong',label:'پررنگ'}]" />
      <PlaygroundSelect id="divider-spacing" v-model="spacing" label="فاصله" :options="[{value:0,label:'۰ پیکسل'},{value:4,label:'۴ پیکسل'},{value:8,label:'۸ پیکسل'}]" />
      <label v-if="type !== 'line'" class="divider-playground__field"><span>برچسب</span><input v-model="label" maxlength="40" /></label>
      <label class="divider-playground__toggle"><input v-model="decorative" type="checkbox" /><span aria-hidden="true" />تزئینی</label>
      <PlaygroundSelect id="divider-direction" v-model="direction" label="جهت نوشتار" :options="[{value:'rtl',label:'راست‌به‌چپ'},{value:'ltr',label:'چپ‌به‌راست'}]" />
    </div>
    <div class="divider-playground__code"><div><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'divider-playground', snippet)">{{ copiedKey === 'divider-playground' ? 'کپی شد' : copiedKey === 'divider-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>

