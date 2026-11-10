<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoProgress, type NoratoProgressSize, type NoratoProgressTone, type NoratoProgressVariant } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const variant = ref<NoratoProgressVariant>('linear')
const size = ref<NoratoProgressSize>('medium')
const tone = ref<NoratoProgressTone>('default')
const value = ref(50)
const label = ref('در حال آپلود')
const direction = ref<'rtl' | 'ltr'>('rtl')
const snippet = computed(() => `<script setup lang="ts">\nimport { NoratoProgress } from '@norato/vue'\n<\/script>\n<template>\n  <NoratoProgress id="upload-progress" :value="${value.value}" label="${label.value}" variant="${variant.value}" size="${size.value}" tone="${tone.value}" dir="${direction.value}" show-value />\n</template>`)
const emit = defineEmits<{ copy: [key: string, text: string] }>()
const props = defineProps<{ copiedKey?: string }>()
</script>

<template>
  <div class="button-playground progress-playground" dir="rtl">
    <header><strong>آزمایش Progress اجرایی</strong><span>۱۲۰ حالت Linear و Circular را با مقدار واقعی بررسی کن.</span></header>
    <div class="button-playground-preview progress-playground__preview">
      <NoratoProgress id="progress-playground" :value="value" :label="label" :variant="variant" :size="size" :tone="tone" :dir="direction" show-value />
    </div>
    <div class="button-playground-controls progress-playground__controls">
      <label class="playground-text-field"><span>عنوان</span><input v-model="label" type="text" aria-label="عنوان پیشرفت" /></label>
      <label class="playground-text-field"><span>مقدار</span><input v-model.number="value" type="number" min="0" max="100" aria-label="درصد پیشرفت" /></label>
      <PlaygroundSelect id="progress-variant" v-model="variant" label="نوع" :options="[{value:'linear',label:'خطی'},{value:'circular',label:'دایره‌ای'}]" />
      <PlaygroundSelect id="progress-size" v-model="size" label="اندازه" :options="[{value:'small',label:'Small'},{value:'medium',label:'Medium'},{value:'large',label:'Large'}]" />
      <PlaygroundSelect id="progress-tone" v-model="tone" label="رنگ وضعیت" :options="[{value:'default',label:'Default'},{value:'success',label:'Success'},{value:'warning',label:'Warning'},{value:'danger',label:'Danger'}]" />
      <PlaygroundSelect id="progress-direction" v-model="direction" label="جهت" :options="[{value:'rtl',label:'RTL'},{value:'ltr',label:'LTR'}]" />
    </div>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','progress-playground',snippet)">{{ props.copiedKey==='progress-playground'?'کپی شد':'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>
