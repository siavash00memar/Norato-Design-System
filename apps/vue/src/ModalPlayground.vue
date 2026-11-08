<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import './modal-playground.css'
import { NoratoButton, NoratoDialog, NoratoModal, NoratoTextInput, type NoratoDialogTone, type NoratoModalSize } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()

const open = ref(false)
const mode = ref<'dialog' | 'form'>('dialog')
const size = ref<NoratoModalSize>('small')
const tone = ref<NoratoDialogTone>('danger')
const dismissible = ref(true)
const busy = ref(false)
const status = ref('')
const projectName = ref('')
let busyTimer: number | undefined

const snippet = computed(() => mode.value === 'dialog'
  ? `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoDialog } from '@norato/vue'\nconst open = ref(false)\nfunction removeProject() { /* حذف پروژه */ open.value = false }\n<\\/script>\n\n<template>\n  <NoratoButton label="حذف پروژه" variant="destructive" @click="open = true" />\n  <NoratoDialog id="delete-project" v-model:open="open" title="این پروژه حذف شود؟" description="همهٔ فایل‌ها برای همیشه پاک می‌شوند." tone="${tone.value}" confirm-label="حذف کن" @confirm="removeProject" />\n</template>`
  : `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoModal, NoratoTextInput } from '@norato/vue'\nconst open = ref(false)\nconst projectName = ref('')\n<\\/script>\n\n<template>\n  <NoratoButton label="ساخت پروژه" @click="open = true" />\n  <NoratoModal id="create-project" v-model:open="open" title="ساخت پروژه" description="برای پروژهٔ جدید یک نام انتخاب کن." size="${size.value}">\n    <NoratoTextInput id="project-name" v-model="projectName" label="نام پروژه" placeholder="نام پروژه را بنویس" />\n    <template #footer><NoratoButton label="انصراف" variant="secondary" @click="open = false" /><NoratoButton label="ساخت پروژه" @click="open = false" /></template>\n  </NoratoModal>\n</template>`)

function confirm() { status.value = 'درخواست تأیید شد.'; open.value = false }
function cancel() { status.value = 'درخواست لغو شد.' }
function createProject() { status.value = projectName.value.trim() ? `پروژهٔ «${projectName.value.trim()}» ساخته شد.` : 'نام پروژه را وارد کن.'; if (projectName.value.trim()) open.value = false }
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
    <div class="modal-playground__launch"><NoratoButton :label="mode === 'dialog' ? 'نمایش پنجرهٔ تأیید' : 'نمایش فرم ساخت پروژه'" @click="show" /></div>
    <div class="modal-playground__controls">
      <PlaygroundSelect id="modal-mode" v-model="mode" label="نوع پنجره" :options="[{value:'dialog',label:'تأیید'},{value:'form',label:'فرم ساخت پروژه'}]" />
      <PlaygroundSelect id="modal-size" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" />
      <PlaygroundSelect v-if="mode === 'dialog'" id="modal-tone" v-model="tone" label="لحن" :options="[{value:'default',label:'پیش‌فرض'},{value:'success',label:'موفقیت'},{value:'warning',label:'هشدار'},{value:'danger',label:'خطر'}]" />
      <label class="modal-playground__toggle"><input v-model="dismissible" type="checkbox" /><span aria-hidden="true" />بستن با Escape و کلیک بیرون</label>
      <label v-if="mode === 'dialog'" class="modal-playground__toggle"><input v-model="busy" type="checkbox" /><span aria-hidden="true" />در حال انجام</label>
    </div>
    <NoratoDialog v-if="mode === 'dialog'" id="modal-playground-dialog" v-model:open="open" title="این پروژه حذف شود؟" description="همهٔ فایل‌ها برای همیشه پاک می‌شوند و برنمی‌گردند." :tone="tone" :size="size" :dismissible="dismissible" :busy="busy" confirm-label="حذف کن" @confirm="confirm" @cancel="cancel" />
    <NoratoModal v-else id="modal-playground-form" v-model:open="open" title="ساخت پروژه" description="برای پروژهٔ جدید یک نام انتخاب کن." :size="size" :dismissible="dismissible">
      <div class="modal-playground__form"><NoratoTextInput id="modal-project-name" v-model="projectName" label="نام پروژه" placeholder="نام پروژه را بنویس" /></div>
      <template #footer><NoratoButton label="انصراف" variant="secondary" @click="cancel(); open = false" /><NoratoButton label="ساخت پروژه" @click="createProject" /></template>
    </NoratoModal>
    <p class="modal-playground__status" role="status" aria-live="polite">{{ status || 'پنجره بسته است.' }}</p>
    <div class="modal-playground__code"><div><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'modal-playground', snippet)">{{ copiedKey === 'modal-playground' ? 'کپی شد' : copiedKey === 'modal-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
