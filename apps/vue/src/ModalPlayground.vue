<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import './modal-playground.css'
import { NoratoButton, NoratoDialog, NoratoModal, NoratoTextInput, type NoratoDialogTone, type NoratoModalSize } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()

const open = ref(false)
const mode = ref<'dialog' | 'form'>('dialog')
const uncontrolled = ref(false)
const size = ref<NoratoModalSize>('small')
const tone = ref<NoratoDialogTone>('danger')
const direction = ref<'rtl' | 'ltr'>('rtl')
const dismissible = ref(true)
const busy = ref(false)
const confirmDisabled = ref(false)
const longContent = ref(false)
const status = ref('')
const projectName = ref('')
const projectAttempted = ref(false)
let busyTimer: number | undefined

const dialogSnippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoDialog } from '@norato/vue'\nconst open = ref(false)\nfunction removeProject() { /* حذف پروژه */ open.value = false }\n<\\/script>\n\n<template>\n  <NoratoButton label="حذف پروژه" variant="destructive" @click="open = true" />\n  <NoratoDialog id="delete-project" v-model:open="open" title="این پروژه حذف شود؟" description="همهٔ فایل‌ها برای همیشه پاک می‌شوند." tone="${tone.value}" size="${size.value}" :confirm-disabled="${confirmDisabled.value}" :busy="${busy.value}" dir="${direction.value}" @confirm="removeProject" />\n</template>`)
const controlledFormSnippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoModal, NoratoTextInput } from '@norato/vue'\nconst open = ref(false)\nconst projectName = ref('')\nfunction createProject() { if (projectName.value.trim()) open.value = false }\n<\\/script>\n\n<template>\n  <NoratoButton label="نمایش فرم ساخت پروژه" @click="open = true" />\n  <NoratoModal id="create-project" v-model:open="open" title="ساخت پروژه" description="برای پروژهٔ جدید یک نام انتخاب کن.">\n    <NoratoTextInput id="project-name" v-model="projectName" label="نام پروژه" required />\n    <template #footer><NoratoButton label="انصراف" variant="secondary" @click="open = false" /><NoratoButton label="ساخت پروژه" @click="createProject" /></template>\n  </NoratoModal>\n</template>`)
const uncontrolledFormSnippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoModal, NoratoTextInput } from '@norato/vue'\nconst projectName = ref('')\nfunction createProject(close: () => void) { if (projectName.value.trim()) close() }\n<\\/script>\n\n<template>\n  <NoratoModal id="create-project" title="ساخت پروژه" description="برای پروژهٔ جدید یک نام انتخاب کن.">\n    <template #trigger><NoratoButton label="نمایش فرم ساخت پروژه" /></template>\n    <NoratoTextInput id="project-name" v-model="projectName" label="نام پروژه" required />\n    <template #footer="{ close }"><NoratoButton label="انصراف" variant="secondary" @click="close" /><NoratoButton label="ساخت پروژه" @click="createProject(close)" /></template>\n  </NoratoModal>\n</template>`)
const snippet = computed(() => mode.value === 'dialog' ? dialogSnippet.value : uncontrolled.value ? uncontrolledFormSnippet.value : controlledFormSnippet.value)

function confirm() { status.value = 'درخواست تأیید شد.'; open.value = false }
function cancel() { status.value = 'درخواست لغو شد.' }
function createProject(close?: () => void) {
  projectAttempted.value = true
  status.value = projectName.value.trim() ? `پروژهٔ «${projectName.value.trim()}» ساخته شد.` : 'نام پروژه را وارد کن.'
  if (projectName.value.trim()) {
    close?.()
    open.value = false
  }
}
function show() {
  open.value = true
  if (mode.value === 'dialog' && busy.value) {
    window.clearTimeout(busyTimer)
    busyTimer = window.setTimeout(() => { busy.value = false; status.value = 'عملیات آزمایشی کامل شد.' }, 1400)
  }
}
onBeforeUnmount(() => window.clearTimeout(busyTimer))
</script>

<template>
  <div class="modal-playground" dir="rtl">
    <header><strong>آزمایش Modal و Dialog</strong><span>نوع پنجره و اندازه را انتخاب کن و رفتار واقعی را ببین.</span></header>
    <div v-if="mode === 'dialog' || !uncontrolled" class="modal-playground__launch"><NoratoButton :label="mode === 'dialog' ? 'نمایش پنجرهٔ تأیید' : 'نمایش فرم ساخت پروژه'" @click="show" /></div>
    <div class="modal-playground__controls">
      <PlaygroundSelect id="modal-mode" v-model="mode" label="نوع پنجره" :options="[{value:'dialog',label:'تأیید'},{value:'form',label:'فرم ساخت پروژه'}]" />
      <PlaygroundSelect id="modal-size" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" />
      <PlaygroundSelect v-if="mode === 'dialog'" id="modal-tone" v-model="tone" label="لحن" :options="[{value:'default',label:'پیش‌فرض'},{value:'success',label:'موفقیت'},{value:'warning',label:'هشدار'},{value:'danger',label:'خطر'}]" />
      <PlaygroundSelect id="modal-direction" v-model="direction" label="جهت پنجره" :options="[{value:'rtl',label:'راست‌به‌چپ'},{value:'ltr',label:'چپ‌به‌راست'}]" />
      <label v-if="mode === 'dialog'" class="modal-playground__toggle"><input v-model="confirmDisabled" type="checkbox" /><span aria-hidden="true" />غیرفعال‌کردن تأیید</label>
      <label class="modal-playground__toggle"><input v-model="dismissible" type="checkbox" /><span aria-hidden="true" />بستن با Escape و کلیک بیرون</label>
      <label v-if="mode === 'dialog'" class="modal-playground__toggle"><input v-model="busy" type="checkbox" /><span aria-hidden="true" />در حال انجام</label>
      <label v-if="mode === 'form'" class="modal-playground__toggle"><input v-model="longContent" type="checkbox" /><span aria-hidden="true" />محتوای طولانی</label>
      <label v-if="mode === 'form'" class="modal-playground__toggle"><input v-model="uncontrolled" type="checkbox" /><span aria-hidden="true" />بازشدن و بستن داخلی</label>
    </div>
    <NoratoDialog v-if="mode === 'dialog'" id="modal-playground-dialog" v-model:open="open" title="این پروژه حذف شود؟" description="همهٔ فایل‌ها برای همیشه پاک می‌شوند و برنمی‌گردند." :tone="tone" :size="size" :dismissible="dismissible" :busy="busy" :confirm-disabled="confirmDisabled" :dir="direction" confirm-label="حذف کن" @confirm="confirm" @cancel="cancel">
    </NoratoDialog>
    <NoratoModal v-else-if="!uncontrolled" id="modal-playground-form" v-model:open="open" title="ساخت پروژه" description="برای پروژهٔ جدید یک نام انتخاب کن." :size="size" :dismissible="dismissible" :dir="direction">
      <div class="modal-playground__form">
        <NoratoTextInput id="modal-project-name" v-model="projectName" label="نام پروژه" placeholder="نام پروژه را بنویس" required :dir="direction" :error-text="projectAttempted && !projectName.trim() ? 'نام پروژه الزامی است.' : undefined" />
        <div v-if="longContent" class="modal-playground__long-content"><p v-for="paragraph in 10" :key="paragraph">این متن برای بررسی پیمایش محتوای طولانی در پنجره است. محتوای پنجره باید در محدودهٔ دید باقی بماند و بدون کشیده‌شدن صفحه پیمایش شود.</p></div>
      </div>
      <template #footer><NoratoButton label="انصراف" variant="secondary" @click="cancel(); open = false" /><NoratoButton label="ساخت پروژه" @click="createProject" /></template>
    </NoratoModal>
    <NoratoModal v-else id="modal-playground-form-uncontrolled" title="ساخت پروژه" description="برای پروژهٔ جدید یک نام انتخاب کن." :size="size" :dismissible="dismissible" :dir="direction">
      <template #trigger><NoratoButton label="نمایش فرم ساخت پروژه" /></template>
      <div class="modal-playground__form">
        <NoratoTextInput id="modal-project-name-uncontrolled" v-model="projectName" label="نام پروژه" placeholder="نام پروژه را بنویس" required :dir="direction" :error-text="projectAttempted && !projectName.trim() ? 'نام پروژه الزامی است.' : undefined" />
        <div v-if="longContent" class="modal-playground__long-content"><p v-for="paragraph in 10" :key="paragraph">این متن برای بررسی پیمایش محتوای طولانی در پنجره است. محتوای پنجره باید در محدودهٔ دید باقی بماند و بدون کشیده‌شدن صفحه پیمایش شود.</p></div>
      </div>
      <template #footer="{ close }"><NoratoButton label="انصراف" variant="secondary" @click="cancel(); close()" /><NoratoButton label="ساخت پروژه" @click="createProject(close)" /></template>
    </NoratoModal>
    <p class="modal-playground__status" role="status" aria-live="polite">{{ status || 'پنجره بسته است.' }}</p>
    <div class="modal-playground__code"><div><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'modal-playground', snippet)">{{ copiedKey === 'modal-playground' ? 'کپی شد' : copiedKey === 'modal-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
