<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { NoratoRange } from '@norato/vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const type = ref<'single' | 'range'>('single')
const size = ref<'small' | 'medium'>('medium')
const disabled = ref(false)
const invalid = ref(false)
const single = ref<number>(60)
const range = ref<[number, number]>([25, 75])
watch(type, value => { if (value === 'single') single.value = 60 })
const snippet = computed(() => type.value === 'single'
  ? `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoRange } from '@norato/vue'\nconst value = ref(${single.value})\n<\\/script>\n<template><NoratoRange id="value" v-model="value" label="میزان صدا" :min="0" :max="100" /></template>`
  : `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoRange } from '@norato/vue'\nconst value = ref<[number, number]>([${range.value.join(', ')}])\n<\\/script>\n<template><NoratoRange id="value" v-model="value" type="range" label="بازهٔ بودجه" :min="0" :max="100" /></template>`)
</script>

<template>
  <div class="button-playground range-playground" dir="rtl">
    <header><strong>آزمایش Range اجرایی</strong><span>مقدار را با کشیدن یا کلیدهای جهت تغییر بده؛ حداقل سمت راست است.</span></header>
    <div class="button-playground-preview range-playground-preview">
      <NoratoRange v-if="type === 'single'" id="range-playground-single" v-model="single" label="میزان صدا" :min="0" :max="100" :step="1" :size="size" :disabled="disabled" :error="invalid ? 'مقدار خارج از محدودهٔ مجاز است.' : undefined" />
      <NoratoRange v-else id="range-playground-pair" v-model="range" type="range" label="بازهٔ بودجه" :min="0" :max="100" :step="1" :size="size" :disabled="disabled" :error="invalid ? 'مقدار خارج از محدودهٔ مجاز است.' : undefined" />
    </div>
    <div class="button-playground-toggles">
      <label class="select-playground-setting"><span>نوع</span><select v-model="type"><option value="single">تکی</option><option value="range">بازه</option></select></label>
      <label class="select-playground-setting"><span>اندازه</span><select v-model="size"><option value="small">کوچک</option><option value="medium">متوسط</option></select></label>
      <label class="button-playground-switch"><input v-model="disabled" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>غیرفعال</span></label>
      <label class="button-playground-switch"><input v-model="invalid" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>خطا</span></label>
    </div>
    <div class="button-playground-code"><div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'range-playground', snippet)">{{ copiedKey === 'range-playground' ? 'کپی شد' : copiedKey === 'range-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
