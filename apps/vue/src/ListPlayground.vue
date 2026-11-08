<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoList, NoratoListGroup, NoratoListItem, type NoratoListVariant } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const props = defineProps<{ copiedKey?: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const variant = ref<NoratoListVariant>('inset')
const notifications = ref(true)
const weeklySummary = ref(false)
const currentItem = ref('language')
const variantOptions = [
  { value: 'plain', label: 'ساده' },
  { value: 'inset', label: 'کارت تو‌رفته' },
  { value: 'grouped', label: 'گروه‌بندی‌شده' },
]
const scriptEnd = '</scr' + 'ipt>'
const notificationRow = `<NoratoListItem id="notifications" title="اعلان‌ها" description="پیام‌ها و یادآورها" action="switch" v-model="notifications" />`
const languageRow = `<NoratoListItem id="language" title="زبان" action="button" value="فارسی" chevron selectable :selected="currentItem === 'language'" @activate="currentItem = 'language'" />`
const weeklyRow = `<NoratoListItem id="weekly-summary" title="گزارش هفتگی" description="خلاصهٔ فعالیت‌های هفته" action="checkbox" v-model="weeklySummary" />`
const profileRow = `<NoratoListItem id="profile" title="حساب کاربری" action="button" leading="avatar" value="مدیریت" chevron selectable :selected="currentItem === 'profile'" @activate="currentItem = 'profile'" />`
const snippet = computed(() => {
  const rows = variant.value === 'grouped'
    ? `    <NoratoListGroup id="account" label="حساب کاربری">\n      ${notificationRow}\n      ${languageRow}\n    </NoratoListGroup>\n    <NoratoListGroup id="preferences" label="ترجیحات">\n      ${weeklyRow}\n      ${profileRow}\n    </NoratoListGroup>`
    : `    ${notificationRow}\n    ${languageRow}\n    ${weeklyRow}\n    ${profileRow}`
  return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoList, NoratoListGroup, NoratoListItem } from '@norato/vue'\nconst notifications = ref(true)\nconst weeklySummary = ref(false)\nconst currentItem = ref('language')\n${scriptEnd}\n<template>\n  <NoratoList label="تنظیمات حساب" variant="${variant.value}" dir="rtl">\n${rows}\n  </NoratoList>\n</template>`
})
</script>

<template>
  <div class="list-playground">
    <p class="list-playground__note">سه چیدمان، سوییچ و انتخاب ردیف را همین‌جا امتحان کن.</p>
    <div class="list-playground__controls">
      <PlaygroundSelect id="list-variant" v-model="variant" label="چیدمان فهرست" :options="variantOptions" />
      <span class="list-playground__state" role="status" aria-live="polite">{{ currentItem === 'language' ? 'زبان فارسی انتخاب شده' : 'حساب کاربری انتخاب شده' }}</span>
    </div>
    <div class="list-playground__stage" dir="rtl">
      <NoratoList label="تنظیمات حساب" :variant="variant" dir="rtl">
        <template v-if="variant === 'grouped'">
          <NoratoListGroup id="account-settings" label="حساب کاربری">
            <NoratoListItem id="list-notifications" title="اعلان‌ها" description="پیام‌ها و یادآورها" action="switch" leading="icon" v-model="notifications">
              <template #leading><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg></template>
            </NoratoListItem>
            <NoratoListItem id="list-language" title="زبان" action="button" leading="icon" value="فارسی" chevron selectable :selected="currentItem === 'language'" @activate="currentItem = 'language'">
              <template #leading><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg></template>
            </NoratoListItem>
          </NoratoListGroup>
          <NoratoListGroup id="preferences" label="ترجیحات">
            <NoratoListItem id="list-summary" title="گزارش هفتگی" description="خلاصهٔ فعالیت‌های هفته" action="checkbox" leading="none" v-model="weeklySummary" />
            <NoratoListItem id="list-profile" title="حساب کاربری" action="button" leading="avatar" value="مدیریت" chevron selectable :selected="currentItem === 'profile'" @activate="currentItem = 'profile'">
              <template #leading><span class="list-playground__avatar" aria-hidden="true">ن‌م</span></template>
            </NoratoListItem>
          </NoratoListGroup>
        </template>
        <template v-else>
          <NoratoListItem id="list-notifications" title="اعلان‌ها" description="پیام‌ها و یادآورها" action="switch" leading="icon" v-model="notifications">
            <template #leading><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg></template>
          </NoratoListItem>
          <NoratoListItem id="list-language" title="زبان" action="button" leading="icon" value="فارسی" chevron selectable :selected="currentItem === 'language'" @activate="currentItem = 'language'">
            <template #leading><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg></template>
          </NoratoListItem>
          <NoratoListItem id="list-summary" title="گزارش هفتگی" description="خلاصهٔ فعالیت‌های هفته" action="checkbox" leading="none" v-model="weeklySummary" />
          <NoratoListItem id="list-profile" title="حساب کاربری" action="button" leading="avatar" value="مدیریت" chevron selectable :selected="currentItem === 'profile'" @activate="currentItem = 'profile'">
            <template #leading><span class="list-playground__avatar" aria-hidden="true">ن‌م</span></template>
          </NoratoListItem>
        </template>
      </NoratoList>
    </div>
    <div class="list-playground__code">
      <div class="list-playground__code-head"><strong>نمونهٔ Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'list-example', snippet)">{{ props.copiedKey === 'list-example' ? 'کپی شد' : 'کپی کد' }}</button></div>
      <pre dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.list-playground{display:grid;gap:var(--norato-space-4);direction:rtl;min-inline-size:0}
.list-playground__note{margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.list-playground__controls{display:flex;align-items:end;justify-content:space-between;gap:var(--norato-space-3);min-inline-size:0}
.list-playground__state{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.list-playground__stage{inline-size:min(100%,var(--norato-list-playground-inline-size));min-inline-size:0;margin-inline:auto;padding:var(--norato-space-4);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-subtle)}
.list-playground__avatar{display:grid;place-items:center;inline-size:100%;block-size:100%;border-radius:inherit;background:color-mix(in srgb,var(--norato-color-brand-yellow) 20%,var(--norato-color-surface-default));font-size:var(--norato-type-body-caption-size)}
.list-playground__code{overflow:hidden;border-radius:var(--norato-radius-card);background:var(--norato-color-surface-code);color:var(--norato-color-text-on-code)}
.list-playground__code-head{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-3);min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-4);border-block-end:var(--norato-border-thin) solid var(--norato-color-border-strong)}
.list-playground__code pre{max-block-size:360px;overflow:auto;margin:0;padding:var(--norato-space-4);font-family:monospace;font-size:var(--norato-type-body-caption-size);line-height:1.5;white-space:pre}
@media(max-width:600px){.list-playground__controls{align-items:stretch;flex-direction:column}.list-playground__stage{padding:var(--norato-space-2)}}
</style>
