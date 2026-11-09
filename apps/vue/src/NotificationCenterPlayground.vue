<script setup lang="ts">
import { computed, ref } from 'vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import type { NoratoNotification, NoratoNotificationPresentation } from '@norato/vue'
import { NoratoNotificationCenter } from '@norato/vue'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const presentation = ref<NoratoNotificationPresentation>('popover')
const stateMode = ref<'controlled' | 'uncontrolled'>('controlled')
const direction = ref<'rtl' | 'ltr'>('rtl')
const open = ref(false)
const empty = ref(false)
const disabled = ref(false)
const feedback = ref('اعلان‌ها آمادهٔ بررسی هستند.')
const initialNotifications = (): NoratoNotification[] => [
  { id: 'design-comment', title: 'سارا روی طراحی‌ت نظر داد', description: 'نسخهٔ تازهٔ طرح آمادهٔ بازبینی است.', time: '۲ دقیقه پیش', group: 'امروز', type: 'user', avatarName: 'سارا محمدی', mention: true, read: false },
  { id: 'update-installed', title: 'آپدیت ۱.۱ نصب شد', description: 'نسخهٔ برنامه به‌روز شد.', time: 'دیروز', group: 'دیروز', type: 'system', read: true },
  { id: 'workspace-invite', title: 'دعوت به فضای کاری', description: 'به پروژهٔ تیم طراحی دعوت شدی.', time: 'دیروز', group: 'دیروز', type: 'action', mention: true, read: false, actions: [{ id: 'accept', label: 'پذیرفتن' }, { id: 'decline', label: 'رد کردن' }] },
]
const notifications = ref<NoratoNotification[]>(initialNotifications())
const visibleNotifications = computed(() => empty.value ? [] : notifications.value)
function updateNotifications(next: NoratoNotification[] | undefined) { notifications.value = next ?? [] }
function resetSample() {
  notifications.value = initialNotifications()
  presentation.value = 'popover'
  stateMode.value = 'controlled'
  direction.value = 'rtl'
  open.value = false
  empty.value = false
  disabled.value = false
  feedback.value = 'اعلان‌ها آمادهٔ بررسی هستند.'
}
const snippet = computed(() => `<script setup lang="ts">
import { ref } from 'vue'
import { NoratoNotificationCenter, type NoratoNotification } from '@norato/vue'
const open = ref(false)
const notifications = ref<NoratoNotification[]>([
  { id: 'design-comment', title: 'سارا روی طراحی‌ت نظر داد', time: '۲ دقیقه پیش', group: 'امروز', type: 'user', mention: true, read: false, avatarName: 'سارا محمدی' },
  { id: 'update-installed', title: 'آپدیت ۱.۱ نصب شد', time: 'دیروز', group: 'دیروز', type: 'system', read: true },
])
function openNotification(notification: NoratoNotification) { console.info(notification.id) }
function syncReadState() { /* persist the updated notification state */ }
<\/script>
<template>
  <NoratoNotificationCenter id="notifications" v-model:open="open" v-model="notifications" presentation="${presentation.value}" dir="${direction.value}" label="اعلان‌ها" @select="openNotification" @mark-all-read="syncReadState" />
</template>`)
</script>

<template>
  <div class="button-playground notification-center-playground" dir="rtl">
    <header><strong>آزمایش Notification Center اجرایی</strong><span>نمایش Popover و پنل کناری، وضعیت کنترل‌شده، فیلتر منشن، خواندن همه و حالت خالی را بررسی کن.</span></header>
    <div class="button-playground-preview notification-center-playground__preview">
      <NoratoNotificationCenter
        v-if="stateMode === 'controlled'"
        :key="`controlled-${presentation}-${empty}`"
        id="notification-center-playground"
        v-model:open="open"
        :model-value="visibleNotifications"
        @update:model-value="updateNotifications"
        :presentation="presentation"
        :dir="direction"
        :disabled="disabled"
        label="اعلان‌ها"
        @select="notification => feedback = `انتخاب شد: ${notification.title}`"
        @action="(notification, action) => feedback = `${action.label}: ${notification.title}`"
      />
      <NoratoNotificationCenter
        v-else
        :key="`uncontrolled-${presentation}-${empty}`"
        id="notification-center-playground-uncontrolled"
        v-model:open="open"
        :default-notifications="visibleNotifications"
        :presentation="presentation"
        :dir="direction"
        :disabled="disabled"
        label="اعلان‌ها"
        @select="notification => feedback = `انتخاب شد: ${notification.title}`"
        @action="(notification, action) => feedback = `${action.label}: ${notification.title}`"
        @mark-all-read="feedback = 'همهٔ اعلان‌ها خوانده شدند.'"
      />
      <p role="status" aria-live="polite">{{ empty ? 'حالت خالی' : stateMode === 'controlled' ? `اعلان خوانده‌نشده: ${notifications.filter(item => !item.read).length}` : 'وضعیت اعلان‌ها درون کامپوننت مدیریت می‌شود' }} · {{ feedback }}</p>
    </div>
    <div class="button-playground-controls notification-center-playground__controls">
      <PlaygroundSelect id="notification-presentation" v-model="presentation" label="نمایش" :options="[{value:'popover',label:'Popover'},{value:'panel',label:'Panel'}]" />
      <PlaygroundSelect id="notification-state-mode" v-model="stateMode" label="مدل وضعیت" :options="[{value:'controlled',label:'کنترل‌شده'},{value:'uncontrolled',label:'داخلی'}]" />
      <PlaygroundSelect id="notification-direction" v-model="direction" label="جهت" :options="[{value:'rtl',label:'راست‌به‌چپ'},{value:'ltr',label:'چپ‌به‌راست'}]" />
      <label class="button-playground-switch"><input v-model="empty" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>نمایش حالت خالی</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال‌کردن زنگوله</span></label>
      <button class="notification-center-playground__reset" type="button" @click="resetSample">بازنشانی نمونه</button>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'notification-center-playground', snippet)">{{ props.copiedKey === 'notification-center-playground' ? 'کپی شد' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>

<style scoped>
.notification-center-playground__preview{justify-content:center;min-block-size:calc(var(--norato-control-target-min) + var(--norato-space-8));}
.notification-center-playground__preview>p{margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.notification-center-playground__controls{grid-template-columns:repeat(4,minmax(0,1fr))}
.notification-center-playground__reset{min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-pill);background:var(--norato-color-surface-default);color:var(--norato-color-text-primary);font:inherit;font-size:var(--norato-type-body-small-size);cursor:pointer}
.notification-center-playground__reset:hover{border-color:var(--norato-color-brand-yellow)}
@media(max-width:599px){.notification-center-playground__controls{grid-template-columns:minmax(0,1fr)}}
</style>
