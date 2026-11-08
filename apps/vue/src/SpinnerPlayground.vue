<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoLoader, NoratoSpinner, type NoratoLoaderType, type NoratoSpinnerSize, type NoratoSpinnerTone, type NoratoSpinnerType } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const presentation = ref<'spinner' | 'loader'>('spinner')
const spinnerType = ref<NoratoSpinnerType>('ring')
const tone = ref<NoratoSpinnerTone>('default')
const size = ref<NoratoSpinnerSize>(24)
const loaderType = ref<NoratoLoaderType>('inline')
const active = ref(true)
const label = ref('در حال بارگذاری')
const direction = ref<'rtl' | 'ltr'>('rtl')
const snippet = computed(() => presentation.value === 'spinner'
  ? `<script setup lang="ts">\nimport { NoratoSpinner } from '@norato/vue'\n<\/script>\n<template><NoratoSpinner type="${spinnerType.value}" tone="${tone.value}" :size="${size.value}" /></template>`
  : `<script setup lang="ts">\nimport { NoratoLoader } from '@norato/vue'\n<\/script>\n<template><NoratoLoader type="${loaderType.value}" spinner-type="${spinnerType.value}" tone="${tone.value}" :size="${size.value}" label="${label.value}" dir="${direction.value}" :active="${active.value}" /></template>`)
const emit = defineEmits<{ copy: [key: string, text: string] }>()
const props = defineProps<{ copiedKey?: string }>()
</script>

<template>
  <div class="button-playground spinner-playground" dir="rtl">
    <header><strong>آزمایش Spinner اجرایی</strong><span>۴۵ ترکیب نشانگر و چهار الگوی Loader را بررسی کن.</span></header>
    <div class="button-playground-preview spinner-playground__preview" :dir="direction">
      <NoratoSpinner v-if="presentation === 'spinner'" :type="spinnerType" :tone="tone" :size="size" />
      <NoratoLoader v-else :type="loaderType" :active="active" :label="label" :spinner-type="spinnerType" :tone="tone" :size="size" :dir="direction" />
      <span v-if="presentation === 'loader' && !active" class="spinner-playground__inactive">بارگذاری متوقف است</span>
    </div>
    <div class="button-playground-controls spinner-playground__controls">
      <PlaygroundSelect id="spinner-presentation" v-model="presentation" label="نمایش" :options="[{value:'spinner',label:'Spinner'},{value:'loader',label:'Loader'}]" />
      <PlaygroundSelect id="spinner-type" v-model="spinnerType" label="فرم" :options="[{value:'ring',label:'Ring'},{value:'dots',label:'Dots'},{value:'norato',label:'Norato'}]" />
      <PlaygroundSelect id="spinner-tone" v-model="tone" label="لحن" :options="[{value:'default',label:'Default'},{value:'subtle',label:'Subtle'},{value:'inverse',label:'Inverse'}]" />
      <PlaygroundSelect id="spinner-size" v-model="size" label="اندازه" :options="[{value:16,label:'16px'},{value:20,label:'20px'},{value:24,label:'24px'},{value:32,label:'32px'},{value:48,label:'48px'}]" />
      <template v-if="presentation === 'loader'">
        <PlaygroundSelect id="spinner-loader-type" v-model="loaderType" label="الگوی Loader" :options="[{value:'inline',label:'Inline'},{value:'refresh',label:'Refresh'},{value:'overlay',label:'Overlay'},{value:'page',label:'Page'}]" />
        <PlaygroundSelect id="spinner-direction" v-model="direction" label="جهت" :options="[{value:'rtl',label:'RTL'},{value:'ltr',label:'LTR'}]" />
        <label class="spinner-playground__label"><span>متن وضعیت</span><input v-model="label" type="text" /></label>
        <label class="spinner-playground__active"><input v-model="active" type="checkbox" />فعال</label>
      </template>
    </div>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','spinner-playground',snippet)">{{ props.copiedKey==='spinner-playground'?'کپی شد':'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>
