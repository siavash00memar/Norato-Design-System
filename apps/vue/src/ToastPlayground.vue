<script setup lang="ts">
import { computed, ref, watch } from 'vue'
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
const stateMode = ref<'controlled' | 'uncontrolled'>('controlled')
const toastKey = ref(0)
const feedback = ref('')
const timerState = ref('')
const actionTriggeredClosing = ref(false)
const snippet = computed(() => {
  const controlled = stateMode.value === 'controlled'
  const visibility = controlled ? 'v-model="open"' : ':default-open="true"'
  const imports = `${controlled ? "import { ref } from 'vue'\n" : ''}import { NoratoToast } from '@norato/vue'\n`
  const state = controlled ? 'const open = ref(false)\n' : ''
  return `<script setup lang="ts">\n${imports}${state}<\/script>\n<template>\n  <NoratoToast id="save-toast" ${visibility} title="تغییرات ذخیره شد" description="تغییرات پروژه با موفقیت ذخیره شدند." tone="${tone.value}" surface="${surface.value}" layout="${layout.value}" ${action.value ? 'action-label="بازگردانی"' : ''} :action-closes="${actionCloses.value}" dismissible :duration="${duration.value}" />\n</template>`
})
watch(stateMode, () => {
  open.value = false
  feedback.value = ''
  timerState.value = ''
  toastKey.value += 1
})
function onAction() {
  feedback.value = 'اقدام بازگردانی اجرا شد.'
  actionTriggeredClosing.value = actionCloses.value
}
function onClose() {
  timerState.value = ''
  if (actionTriggeredClosing.value) {
    actionTriggeredClosing.value = false
    return
  }
  feedback.value = 'پیام بسته شد.'
}
function onPause() {
  timerState.value = 'متوقف'
}
function onResume() {
  timerState.value = 'ادامه دارد'
}
function onModelUpdate(value: boolean) {
  open.value = value
}
function showToast() {
  feedback.value = ''
  timerState.value = ''
  open.value = true
  if (stateMode.value === 'uncontrolled') toastKey.value += 1
}
</script>

<template>
  <div class="button-playground toast-playground" dir="rtl">
    <header><strong>آزمایش Toast اجرایی</strong><span>۲۰ ترکیب ظاهری، زمان نمایش، بازخورد اقدام و نحوهٔ بستن Toast را بررسی کن.</span></header>
    <div class="button-playground-preview toast-playground__preview">
      <NoratoToast
        :key="toastKey"
        id="toast-playground-message"
        :model-value="stateMode === 'controlled' ? open : undefined"
        :default-open="stateMode === 'uncontrolled' && open"
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
        @update:model-value="onModelUpdate"
        @close="onClose"
        @pause="onPause"
        @resume="onResume"
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
      <PlaygroundSelect id="toast-mode" v-model="stateMode" label="مدل وضعیت" :options="[{value:'controlled',label:'کنترل‌شده'},{value:'uncontrolled',label:'کنترل‌نشده'}]" />
      <label class="button-playground-switch"><input v-model="action" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>اقدام</span></label>
      <label v-if="action" class="button-playground-switch"><input v-model="actionCloses" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>بستن با اقدام</span></label>
      <label class="button-playground-switch"><input v-model="dismissible" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>قابل‌بستن</span></label>
      <button class="norato-button" type="button" :disabled="open" @click="showToast">نمایش Toast</button>
    </div>
    <p v-if="feedback" role="status" class="toast-playground__feedback">{{ feedback }}</p>
    <p v-if="timerState" class="toast-playground__timer-state" aria-hidden="true">وضعیت زمان‌سنج: {{ timerState }}</p>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','toast-playground',snippet)">{{ props.copiedKey==='toast-playground'?'کپی شد':'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.toast-playground__timer-state{margin:0;min-block-size:var(--norato-control-target-min);display:flex;align-items:center;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
</style>

