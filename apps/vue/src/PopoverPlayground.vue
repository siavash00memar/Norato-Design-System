<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoButton, NoratoPopover, NoratoTextInput, type NoratoPopoverAlign, type NoratoPopoverPlacement, type NoratoPopoverVariant } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import './popover-playground.css'

const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const variant = ref<NoratoPopoverVariant>('simple')
const placement = ref<NoratoPopoverPlacement>('bottom')
const align = ref<NoratoPopoverAlign>('center')
const open = ref(false)
const disabled = ref(false)
const modal = ref(false)
const copied = ref(false)
const email = ref('')
const feedback = ref('')
const shareLink = 'norato.design/share/8df'
const snippet = computed(() => {
  const componentImports = variant.value === 'form' ? 'NoratoButton, NoratoPopover, NoratoTextInput' : 'NoratoButton, NoratoPopover'
  const formState = variant.value === 'form' ? "\nconst email = ref('')" : ''
  const stateProps = `${disabled.value ? ' disabled' : ''}${modal.value ? ' modal' : ''}`
  const body = variant.value === 'form'
    ? '<NoratoTextInput id="invite-email" v-model="email" label="ایمیل" placeholder="نشانی ایمیل را بنویس" />'
    : `<code class="norato-popover__link" dir="ltr">${shareLink}</code>`
  const footer = variant.value === 'simple' ? '' : variant.value === 'actions'
    ? '\n    <template #footer><NoratoButton label="کپی پیوند" variant="primary" @click="copyLink" /></template>'
    : '\n    <template #footer><NoratoButton label="ارسال دعوت" variant="primary" @click="submitInvite" /><NoratoButton label="انصراف" variant="secondary" @click="open = false" /></template>'
  const actionLogic = variant.value === 'actions' ? `\nasync function copyLink() {\n  await navigator.clipboard.writeText('${shareLink}')\n  open.value = false\n}` : variant.value === 'form' ? '\nfunction submitInvite() { /* validate email and submit to your own API */ open.value = false }' : ''
  return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { ${componentImports} } from '@norato/vue'\nconst open = ref(false)${formState}${actionLogic}\n<\/script>\n<template>\n  <NoratoPopover id="share-popover" v-model:open="open" title="لینک اشتراک" variant="${variant.value}" placement="${placement.value}" align="${align.value}"${stateProps}>\n    <template #trigger><NoratoButton label="اشتراک‌گذاری" variant="secondary" /></template>\n    ${body}${footer}\n  </NoratoPopover>\n</template>`
})

async function copyLink(close: () => void) {
  try {
    await navigator.clipboard.writeText(shareLink)
    copied.value = true
    feedback.value = 'پیوند کپی شد.'
    close()
  } catch {
    feedback.value = 'کپی پیوند در این مرورگر در دسترس نیست.'
  }
}

function submitEmail(close: () => void) {
  feedback.value = email.value ? 'فرم نمونه ثبت شد.' : 'نشانی ایمیل را وارد کن.'
  if (email.value) close()
}
</script>

<template>
  <div class="popover-playground" dir="rtl">
    <div class="popover-playground__stage">
      <NoratoPopover id="playground-popover" v-model:open="open" title="لینک اشتراک" description="این پیوند را با دیگران به اشتراک بگذار." :variant="variant" :placement="placement" :align="align" :disabled="disabled" :modal="modal">
        <template #trigger><NoratoButton label="اشتراک‌گذاری" variant="secondary" /></template>
        <template #default="{ close }">
          <code v-if="variant !== 'form'" class="norato-popover__link" dir="ltr">{{ shareLink }}</code>
          <NoratoTextInput v-else id="popover-email" v-model="email" label="ایمیل" placeholder="نشانی ایمیل را بنویس" />
        </template>
        <template v-if="variant !== 'simple'" #footer="{ close }">
          <template v-if="variant === 'actions'">
            <NoratoButton :label="copied ? 'کپی شد' : 'کپی پیوند'" variant="primary" @click="copyLink(close)" />
            <NoratoButton label="بستن" variant="secondary" @click="close" />
          </template>
          <template v-else>
            <NoratoButton label="ارسال دعوت" variant="primary" @click="submitEmail(close)" />
            <NoratoButton label="انصراف" variant="secondary" @click="close" />
          </template>
        </template>
      </NoratoPopover>
    </div>
    <div class="popover-playground__controls">
      <PlaygroundSelect id="popover-type" v-model="variant" label="نوع محتوا" :options="[{ value: 'simple', label: 'ساده' }, { value: 'actions', label: 'اقدام‌ها' }, { value: 'form', label: 'فرم' }]" />
      <PlaygroundSelect id="popover-placement" v-model="placement" label="جایگاه" :options="[{ value: 'bottom', label: 'پایین' }, { value: 'top', label: 'بالا' }, { value: 'right', label: 'راست' }, { value: 'left', label: 'چپ' }]" />
      <PlaygroundSelect id="popover-align" v-model="align" label="تراز" :options="[{ value: 'center', label: 'مرکز' }, { value: 'start', label: 'ابتدا' }, { value: 'end', label: 'انتها' }]" />
    </div>
    <div class="popover-playground__states">
      <label><input v-model="disabled" type="checkbox" /><span>محرک غیرفعال</span></label>
      <label><input v-model="modal" type="checkbox" /><span>رفتار modal</span></label>
    </div>
    <p v-if="feedback" class="popover-playground__feedback" role="status" aria-live="polite">{{ feedback }}</p>
    <div class="code-copy-row">
      <button class="copy-section-button" type="button" @click="emit('copy', 'popover', snippet)">{{ props.copiedKey === 'popover' ? 'کپی شد' : 'کپی کد' }}</button>
    </div>
    <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
  </div>
</template>
