<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoToast, type NoratoToastLayout, type NoratoToastSurface, type NoratoToastTone } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, text: string] }>()
const open = ref(false)
const title = ref('تغییرات ذخیره شد')
const description = ref('تغییرات پروژه با موفقیت ذخیره شدند.')
const tone = ref<NoratoToastTone>('success')
const surface = ref<NoratoToastSurface>('glass')
const layout = ref<NoratoToastLayout>('rich')
const action = ref(true)
const actionCloses = ref(true)
const dismissible = ref(true)
const duration = ref(6000)
const feedback = ref('')
const actionTriggeredClosing = ref(false)
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoToast } from '@norato/vue'\nconst open = ref(false)\n<\/script>\n<template>\n  <NoratoToast id="save-toast" v-model="open" title="تغییرات ذخیره شد" description="تغییرات پروژه با موفقیت ذخیره شدند." tone="${tone.value}" surface="${surface.value}" layout="${layout.value}" ${action.value ? 'action-label="بازگردانی"' : ''} :action-closes="${actionCloses.value}" dismissible :duration="${duration.value}" />\n</template>`)
function onAction() {
  feedback.value = 'اقدام بازگردانی اجرا شد.'
  actionTriggeredClosing.value = actionCloses.value
}
function onClose() {
  if (actionTriggeredClosing.value) {
    actionTriggeredClosing.value = false
    return
  }
  feedback.value = 'پیام بسته شد.'
}
</script>

<template>
  <div class="button-playground toast-playground" dir="rtl">
    <header><strong>آزمایش Toast اجرایی</strong><span>۲۰ ترکیب ظاهری، زمان نمایش، بازخورد اقدام و نحوهٔ بستن Toast را بررسی کن.</span></header>
    <div class="button-playground-preview toast-playground__preview">
      <NoratoToast
        id="toast-playground-message"
        v-model="open"
        :title="title"
        :description="description"
        :tone="tone"
        :surface="surface"
        :layout="layout"
        :action-label="action ? 'بازگردانی' : ''"
        :action-closes="actionCloses"
        action-alt-text="عمل انجام‌شده را بازگردان"
        :dismissible="dismissible"
        :duration="duration"
        @action="onAction"
        @close="onClose"
      />
      <span v-if="!open" class="toast-playground__empty">برای دیدن Toast، دکمهٔ نمایش را بزن.</span>
    </div>
    <div class="button-playground-controls toast-playground__controls">
      <label><span>عنوان</span><input v-model="title" type="text" aria-label="عنوان پیام" /></label>
      <label v-if="layout==='rich'"><span>توضیح</span><input v-model="description" type="text" aria-label="توضیح پیام" /></label>
      <PlaygroundSelect id="toast-tone" v-model="tone" label="لحن" :options="[{value:'neutral',label:'خنثی'},{value:'success',label:'موفقیت'},{value:'warning',label:'هشدار'},{value:'danger',label:'خطا'},{value:'loading',label:'در حال انجام'}]" />
      <PlaygroundSelect id="toast-surface" v-model="surface" label="سطح" :options="[{value:'dark',label:'Dark'},{value:'glass',label:'Glass'}]" />
      <PlaygroundSelect id="toast-layout" v-model="layout" label="چیدمان" :options="[{value:'simple',label:'Simple'},{value:'rich',label:'Rich'}]" />
      <PlaygroundSelect id="toast-duration" v-model="duration" label="زمان نمایش" :options="[{value:6000,label:'۶ ثانیه'},{value:9000,label:'۹ ثانیه'},{value:0,label:'ماندگار'}]" />
      <label class="button-playground-switch"><input v-model="action" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>اقدام</span></label>
      <label v-if="action" class="button-playground-switch"><input v-model="actionCloses" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بستن با اقدام</span></label>
      <label class="button-playground-switch"><input v-model="dismissible" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>قابل‌بستن</span></label>
      <button class="norato-button" type="button" :disabled="open" @click="open=true; feedback=''">نمایش Toast</button>
    </div>
    <p v-if="feedback" role="status" class="toast-playground__feedback">{{ feedback }}</p>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','toast-playground',snippet)">{{ props.copiedKey==='toast-playground'?'کپی شد':'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

