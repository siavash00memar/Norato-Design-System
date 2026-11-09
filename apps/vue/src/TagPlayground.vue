<script setup lang="ts">
import { computed, ref } from 'vue'
import { NoratoTag, type NoratoTagAppearance, type NoratoTagSize, type NoratoTagTone } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

const tone = ref<NoratoTagTone>('success')
const appearance = ref<NoratoTagAppearance>('soft')
const size = ref<NoratoTagSize>('medium')
const dot = ref(true)
const leadingIcon = ref(false)
const trailingIcon = ref(false)
const dir = ref<'rtl' | 'ltr'>('rtl')
const textLength = ref<'short' | 'long'>('short')
const labelText = computed(() => textLength.value === 'short'
  ? 'منتشر شده'
  : 'نسخهٔ تازهٔ سیستم طراحی نوراتو منتشر شد؛ شامل بهبود دسترس‌پذیری و اصلاح جزئیات رابط کاربری')
const props = defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()
const iconSlot = (slot: 'leadingIcon' | 'trailingIcon') => `  <template #${slot}><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 8 3 3 7-7" /></svg></template>`
const snippet = computed(() => {
  const attrs = ` tone="${tone.value}" appearance="${appearance.value}" size="${size.value}"${dot.value ? ' dot' : ''} dir="${dir.value}"`
  const slots = [leadingIcon.value ? iconSlot('leadingIcon') : '', trailingIcon.value ? iconSlot('trailingIcon') : ''].filter(Boolean)
  return slots.length
    ? `<NoratoTag${attrs}>\n${slots.join('\n')}\n  ${labelText.value}\n</NoratoTag>`
    : `<NoratoTag${attrs}>${labelText.value}</NoratoTag>`
})
</script>

<template>
  <div class="button-playground tag-playground" dir="rtl">
    <header><strong>آزمایش Tag اجرایی</strong><span>رنگ، سبک، اندازه و اجزای تزئینی را بررسی کن.</span></header>
    <div class="button-playground-preview tag-playground__preview">
      <NoratoTag class="tag-playground__tag" :tone="tone" :appearance="appearance" :size="size" :dot="dot" :dir="dir">
        <template v-if="leadingIcon" #leadingIcon><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 8 3 3 7-7" /></svg></template>
        <template v-if="trailingIcon" #trailingIcon><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 8 3 3 7-7" /></svg></template>
        {{ labelText }}
      </NoratoTag>
      <p class="tag-playground__note">Tag فقط برای نمایش وضعیت است و خودش تعاملی نیست.</p>
    </div>
    <div class="button-playground-controls tag-playground__controls">
      <PlaygroundSelect id="tag-tone" v-model="tone" label="لحن" :options="[{value:'neutral',label:'خنثی'},{value:'success',label:'موفقیت'},{value:'warning',label:'هشدار'},{value:'danger',label:'خطر'},{value:'info',label:'اطلاعات'}]" />
      <PlaygroundSelect id="tag-appearance" v-model="appearance" label="سبک" :options="[{value:'soft',label:'نرم'},{value:'outline',label:'خط‌دار'}]" />
      <PlaygroundSelect id="tag-size" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'},{value:'xlarge',label:'خیلی بزرگ'}]" />
      <PlaygroundSelect id="tag-direction" v-model="dir" label="جهت" :options="[{value:'rtl',label:'RTL'},{value:'ltr',label:'LTR'}]" />
      <PlaygroundSelect id="tag-text-length" v-model="textLength" label="طول متن" :options="[{value:'short',label:'کوتاه'},{value:'long',label:'بلند'}]" />
    </div>
    <div class="button-playground-toggles">
      <label class="button-playground-switch"><input v-model="dot" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>نقطهٔ وضعیت</span></label>
      <label class="button-playground-switch"><input v-model="leadingIcon" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>آیکن ابتدایی</span></label>
      <label class="button-playground-switch"><input v-model="trailingIcon" type="checkbox" /><span class="button-playground-track" aria-hidden="true"><span /></span><span>آیکن انتهایی</span></label>
    </div>
    <div class="button-playground-code">
      <div class="button-playground-codebar"><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy','tag-playground',snippet)">{{ props.copiedKey === 'tag-playground' ? 'کپی شد' : 'کپی کد' }}</button></div>
      <pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.tag-playground__preview{display:grid;place-items:center;gap:var(--norato-space-3);min-block-size:calc(var(--norato-control-target-min) + var(--norato-space-8));padding:var(--norato-space-4)}
.tag-playground__note{margin:0;color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-min-size);text-align:center}
.tag-playground__tag{max-inline-size:100%}
.tag-playground__controls{grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--norato-space-32)),1fr))}
</style>
