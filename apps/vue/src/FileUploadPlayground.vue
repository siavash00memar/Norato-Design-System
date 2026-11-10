<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { NoratoAvatarUpload, NoratoFileItem, NoratoFileUpload, NoratoUploadTile, type NoratoUploadItem } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const items = ref<NoratoUploadItem[]>([])
const maxFiles = ref('5')
const selectionMode = ref<'multiple' | 'single'>('multiple')
const allowsMultiple = computed(() => selectionMode.value === 'multiple')
const size = ref<'large' | 'compact'>('large')
const disabled = ref(false)
const required = ref(false)
const tileState = ref<'add' | 'uploading' | 'complete' | 'error'>('add')
const tileProgress = ref(42)
const tileError = ref(false)
const tileFile = ref<File | null>(null)
const avatarFile = ref<File | null>(null)
const tileUrl = ref('')
const avatarUrl = ref('')
const selectedCount = computed(() => items.value.length)
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoFileUpload, type NoratoUploadItem } from '@norato/vue'\nconst files = ref<NoratoUploadItem[]>([])\nfunction uploadSelected(selected: File[]) { /* send files to your own API */ }\n<\\/script>\n<template>\n  <NoratoFileUpload id="attachments" v-model="files" label="پیوست‌ها" accept=".png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf" :multiple="${allowsMultiple.value}" :max-files="${maxFiles.value}" :max-size="10000000" size="${size.value}"${disabled.value ? ' disabled' : ''}${required.value ? ' required' : ''} @files-selected="uploadSelected" />\n</template>`)
function updateTile(file: File | null) { tileFile.value = file; if (tileUrl.value) URL.revokeObjectURL(tileUrl.value); tileUrl.value = file?.type.startsWith('image/') ? URL.createObjectURL(file) : '' }
function updateAvatar(file: File | null) { avatarFile.value = file; if (avatarUrl.value) URL.revokeObjectURL(avatarUrl.value); avatarUrl.value = file ? URL.createObjectURL(file) : '' }
onBeforeUnmount(() => { if (tileUrl.value) URL.revokeObjectURL(tileUrl.value); if (avatarUrl.value) URL.revokeObjectURL(avatarUrl.value) })
function setStatus(id: string, status: NoratoUploadItem['status']) { items.value = items.value.map(item => item.id === id ? { ...item, status, progress: status === 'uploading' ? 42 : status === 'complete' ? 100 : undefined, errorText: status === 'error' ? 'ارتباط برقرار نشد؛ دوباره تلاش کنید.' : undefined } : item) }
function removeItem(id: string) { items.value = items.value.filter(item => item.id !== id) }
function addExampleItem() { const limit = allowsMultiple.value ? Number(maxFiles.value) : 1; if (items.value.length < limit) items.value = [...items.value, { id: `sample-${Date.now()}`, name: `sample-${items.value.length + 1}.pdf`, size: 284_000, type: 'application/pdf', status: 'selected' }] }
</script>

<template>
  <div class="button-playground file-upload-playground" dir="rtl">
    <header><strong>آزمایش File Upload اجرایی</strong><span>انتخاب محلی فایل واقعی است؛ انتقال شبکه در اختیار برنامهٔ مصرف‌کننده می‌ماند.</span></header>
    <div class="button-playground-preview file-upload-playground-preview">
      <NoratoFileUpload id="file-upload-playground" v-model="items" label="پیوست‌ها" :multiple="allowsMultiple" :max-files="Number(maxFiles)" :size="size" :disabled="disabled" :required="required" helper-text="PNG یا PDF · حداکثر ۱۰ مگابایت برای هر فایل" @files-selected="() => undefined" @rejected="() => undefined" @remove="item => removeItem(item.id)" @retry="item => setStatus(item.id, 'uploading')" />
      <div class="file-upload-playground-status" aria-live="polite"><span>{{ selectedCount }} فایل در صف انتخاب است.</span><button type="button" :disabled="items.length>=(allowsMultiple ? Number(maxFiles) : 1)" @click="addExampleItem">افزودن آیتم نمونه برای بررسی وضعیت‌ها</button><div v-for="item in items" :key="item.id"><span dir="ltr">{{ item.name }}</span><span class="file-upload-playground-actions"><button type="button" @click="setStatus(item.id, 'uploading')">نمایش انتقال</button><button type="button" @click="setStatus(item.id, 'complete')">تکمیل</button><button type="button" @click="setStatus(item.id, 'error')">خطا</button></span></div></div>
      <div class="file-upload-playground-parts"><div><strong>Upload Tile</strong><NoratoUploadTile id="upload-tile-playground" :model-value="tileFile" :preview-url="tileUrl" :state="tileState" :progress="tileProgress" :error-text="tileError ? 'بارگذاری ناموفق؛ دوباره تلاش کنید.' : undefined" @update:model-value="updateTile" @cancel="tileState='add'" @retry="tileState='uploading'" /><div class="file-upload-state-controls"><button v-for="state in ['add','uploading','complete','error'] as const" :key="state" type="button" @click="tileState=state;tileError=state==='error'">{{ ({add:'افزودن',uploading:'در حال بارگذاری',complete:'کامل',error:'خطا'})[state] }}</button></div><button v-if="tileFile" type="button" @click="updateTile(null);tileState='add';tileError=false">پاک کردن</button></div><div><strong>Avatar Upload</strong><NoratoAvatarUpload id="avatar-upload-playground" :model-value="avatarFile" :preview-url="avatarUrl" @update:model-value="updateAvatar" /><button v-if="avatarFile" type="button" @click="updateAvatar(null)">پاک کردن</button></div><div><strong>File Item · وضعیت‌های نمونه</strong><NoratoFileItem v-for="state in ['selected','uploading','complete','error'] as const" :key="state" :item="{id:state,name:'report.pdf',size:284000,type:'application/pdf',status:state,progress:state==='uploading'?68:undefined,errorText:state==='error'?'بارگذاری ناموفق؛ دوباره تلاش کنید.':undefined}" /></div></div>
    </div>
    <div class="button-playground-toggles file-upload-playground-toggles"><PlaygroundSelect id="file-upload-size" v-model="size" label="اندازهٔ Dropzone" :options="[{value:'large',label:'Large'},{value:'compact',label:'Compact'}]" /><PlaygroundSelect id="file-upload-mode" v-model="selectionMode" label="انتخاب فایل" :options="[{value:'multiple',label:'چند فایل'},{value:'single',label:'یک فایل'}]" /><div class="select-playground-setting"><PlaygroundSelect id="fileuploadplayground-maxfiles-1" v-model="maxFiles" label="حداکثر فایل" :options="[{value:'1',label:'یک فایل'},{value:'3',label:'۳ فایل'},{value:'5',label:'۵ فایل'}]" /></div><label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label><label class="button-playground-switch"><input v-model="required" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>اجباری</span></label><label class="select-playground-setting"><span>پیشرفت Tile · {{ tileProgress }}٪</span><input v-model.number="tileProgress" type="range" min="0" max="100" /></label><button class="copy-section-button" type="button" @click="items=[];updateTile(null);updateAvatar(null);tileState='add';tileError=false">پاک‌سازی نمونه</button></div>
    <p class="button-playground-note"><code dir="ltr">selected</code> یعنی فایل محلی پذیرفته شده است. پیشرفت و نتیجهٔ واقعی فقط با به‌روزرسانی وضعیت <code dir="ltr">v-model</code> توسط برنامهٔ شما نمایش داده می‌شود.</p>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'file-upload-playground', snippet)">{{ copiedKey === 'file-upload-playground' ? 'کپی شد' : copiedKey === 'file-upload-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>

<style scoped>
.file-upload-playground-toggles input[type="range"] {
  inline-size: 100%;
  min-inline-size: var(--norato-control-target-min);
  block-size: var(--norato-control-target-min);
  accent-color: var(--norato-color-brand-yellow);
}
</style>
