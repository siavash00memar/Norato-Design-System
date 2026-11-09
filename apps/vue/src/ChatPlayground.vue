<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoChat, type NoratoChatComposerState, type NoratoChatMessageData, type NoratoChatMessageType, type NoratoChatSender } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const sender = ref<NoratoChatSender>('incoming')
const type = ref<NoratoChatMessageType>('text')
const composerState = ref<NoratoChatComposerState>('default')
const direction = ref<'rtl' | 'ltr'>('rtl')
const draft = ref('')
const showTyping = ref(true)
const showSampleMessages = ref(true)
const disabled = ref(false)
const sent = ref<NoratoChatMessageData[]>([])
const playNotice = ref('')
const artwork = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="a" x2="0" y2="1"><stop stop-color="#8ab7c5"/><stop offset="1" stop-color="#fff4d1"/></linearGradient></defs><rect width="640" height="360" fill="url(#a)"/><circle cx="500" cy="92" r="40" fill="#fdc101"/><path d="M0 260 130 120l126 140 120-170 264 205v65H0Z" fill="#879580"/><path d="M0 300q160-70 318 0t322-22v82H0Z" fill="#637c5e"/></svg>')}`
const variantMessage = computed<NoratoChatMessageData>(() => ({
  id: 'variant-preview', sender: sender.value, type: type.value, text: type.value === 'reply' ? 'باشه، بررسیش می‌کنم.' : 'این بخش تازه آماده شده.', time: '۱۰:۳۱', dateTime: '2026-11-08T10:31:00+03:30', senderName: sender.value === 'incoming' ? 'سارا' : 'شما', replyTo: { sender: 'شما', text: 'فایل رو دیدی؟' }, imageSrc: type.value === 'image' ? artwork : type.value === 'file' ? undefined : undefined, imageAlt: 'چشم‌انداز کوهستانی', fileName: 'راهنمای نوراتو.pdf', fileSize: 'PDF · ۲٫۴ مگابایت', voiceDuration: '۰۰:۱۲', read: sender.value === 'outgoing',
}))
const messages = computed(() => showSampleMessages.value ? [
  { id: 'incoming-one', sender: 'incoming', type: 'text', text: 'سلام! فایل راهنما رو دیدی؟', time: '۱۰:۳۰', dateTime: '2026-11-08T10:30:00+03:30', senderName: 'سارا' },
  { id: 'outgoing-one', sender: 'outgoing', type: 'text', text: 'بله، ساختارش خیلی روشنه.', time: '۱۰:۳۰', dateTime: '2026-11-08T10:30:30+03:30', read: true },
  variantMessage.value,
  ...sent.value,
] as NoratoChatMessageData[] : [])
function append(text: string) { sent.value.push({ id: `sent-${Date.now()}`, sender: 'outgoing', type: 'text', text, time: 'اکنون', read: false }) }
function attach(file: File) { sent.value.push({ id: `file-${Date.now()}`, sender: 'outgoing', type: 'file', fileName: file.name, fileSize: `${Math.max(1, Math.round(file.size / 1024))} کیلوبایت`, time: 'اکنون', read: false }) }
function playVoice() { playNotice.value = 'برای پخش واقعی، منبع صوت را در برنامهٔ میزبان متصل کن.' }
const snippet = computed(() => `<script setup lang="ts">\nimport { NoratoChat, type NoratoChatMessageData } from '@norato/vue'\nconst messages: NoratoChatMessageData[] = [\n  { id: '1', sender: 'incoming', type: 'text', senderName: 'سارا', text: 'سلام، حالت چطوره؟', time: '۱۰:۳۰' },\n  { id: '2', sender: 'outgoing', type: 'reply', text: 'خوبم، ممنون.', time: '۱۰:۳۱', read: true, replyTo: { sender: 'سارا', text: 'حالت چطوره؟' } },\n]\nfunction sendMessage(text: string) { /* update application state */ }\n<\\/script>\n<template><NoratoChat id="support-chat" label="گفتگو با سارا" title="سارا محمدی" initials="سم" online date-label="امروز" :messages="messages" @send="sendMessage" /></template>`)
</script>
<template>
  <div class="chat-playground" dir="rtl">
    <div class="chat-playground__stage"><NoratoChat id="chat-playground" v-model="draft" v-model:composer-state="composerState" label="گفتگو با سارا" title="سارا محمدی" initials="سم" subtitle="پشتیبانی نوراتو" :online="true" :date-label="showSampleMessages ? 'امروز' : ''" date-time="2026-11-08" :messages="messages" :show-typing="showSampleMessages && showTyping" :disabled="disabled" :dir="direction" @send="append" @attach="attach" @play="playVoice" /></div>
    <div class="chat-playground__controls"><PlaygroundSelect id="chat-direction" v-model="direction" label="جهت گفتگو" :options="[{value:'rtl',label:'راست‌چین (RTL)'},{value:'ltr',label:'چپ‌چین (LTR)'}]" /><PlaygroundSelect id="chat-sender" v-model="sender" label="فرستندهٔ نمونه" :options="[{value:'incoming',label:'دریافتی'},{value:'outgoing',label:'ارسالی'}]" /><PlaygroundSelect id="chat-type" v-model="type" label="نوع پیام" :options="[{value:'text',label:'متن'},{value:'reply',label:'پاسخ'},{value:'image',label:'تصویر'},{value:'file',label:'فایل'},{value:'voice',label:'صوتی'}]" /><PlaygroundSelect id="chat-composer-state" v-model="composerState" label="حالت کادر نوشتن" :options="[{value:'default',label:'عادی'},{value:'typing',label:'نوشتن'},{value:'recording',label:'ضبط نمایشی'}]" /><label class="chat-playground__switch"><input v-model="showSampleMessages" type="checkbox" /> نمایش پیام‌های نمونه</label><label class="chat-playground__switch"><input v-model="showTyping" type="checkbox" /> نمایش نشانگر نوشتن</label><label class="chat-playground__switch"><input v-model="disabled" type="checkbox" /> غیرفعال کردن گفتگو</label></div>
    <p v-if="playNotice" class="chat-playground__note" role="status">{{ playNotice }}</p>
    <p v-if="composerState === 'recording'" class="chat-playground__note" role="status">این حالت فقط پیش‌نمایش رابط ضبط است؛ برای ضبط واقعی باید سرویس صوتی برنامه متصل شود.</p>
    <div class="code-copy-row"><button class="copy-section-button" type="button" @click="emit('copy','chat',snippet)">{{ props.copiedKey === 'chat' ? 'کپی شد' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
  </div>
</template>
<style scoped>
.chat-playground{display:grid;gap:var(--norato-space-4);min-inline-size:0}.chat-playground__stage{inline-size:min(100%,640px);margin-inline:auto}.chat-playground__controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--norato-space-3)}.chat-playground__switch{display:flex;align-items:center;gap:var(--norato-space-2);min-block-size:var(--norato-control-target-min);font-size:var(--norato-type-body-small-size)}.chat-playground__switch input{accent-color:var(--norato-color-brand-yellow)}.chat-playground__note{margin:0;padding:var(--norato-space-2) var(--norato-space-3);border-radius:var(--norato-radius-card);background:var(--norato-color-warning-container);font-size:var(--norato-type-body-caption-size)}@media(max-width:600px){.chat-playground__controls{grid-template-columns:1fr}}
</style>
