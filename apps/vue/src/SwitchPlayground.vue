<script setup lang="ts">
import { computed, ref } from 'vue'
import PlaygroundSelect from './PlaygroundSelect.vue'
import { NoratoSwitch } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const enabled = ref(false)
const disabled = ref(false)
const invalid = ref(false)
const size = ref<'small' | 'medium' | 'large'>('medium')
const snippet = computed(() => `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoSwitch } from '@norato/vue'\nconst notifications = ref(${enabled.value})\n<\\/script>\n\n<template>\n  <NoratoSwitch id="notifications" v-model="notifications" label="اعلان‌ها" description="پیام‌های جدید را خبر بده" size="${size.value}"${disabled.value ? ' disabled' : ''}${invalid.value ? ' error-text="این تنظیم در دسترس نیست."' : ''} />\n</template>`)
</script>

<template>
  <div class="button-playground" dir="rtl">
    <header><strong>آزمایش Switch اجرایی</strong><span>تغییر فوراً اعمال می‌شود؛ با Space وضعیت را عوض کنید.</span></header>
    <div class="button-playground-preview switch-playground-preview">
      <NoratoSwitch id="switch-playground-notifications" v-model="enabled" label="اعلان‌ها" description="پیام‌های جدید را خبر بده" :size="size" :disabled="disabled" :error-text="invalid ? 'این تنظیم در دسترس نیست.' : undefined" />
      <span role="status" aria-live="polite">{{ disabled ? 'غیرفعال' : invalid ? 'خطای تنظیم' : enabled ? 'روشن' : 'خاموش' }}</span>
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="enabled" type="checkbox" :disabled="disabled" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>روشن</span></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
      <div class="select-playground-setting"><PlaygroundSelect id="switchplayground-size-1" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'}]" /></div>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'switch-playground', snippet)">{{ copiedKey === 'switch-playground' ? 'کپی شد' : copiedKey === 'switch-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
