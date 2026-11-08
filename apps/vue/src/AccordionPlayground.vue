<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import './accordion-playground.css'
import { NoratoAccordion, NoratoButton, type NoratoAccordionItem, type NoratoAccordionItemStyle, type NoratoAccordionLayout, type NoratoAccordionSize } from '@norato/vue'
import PlaygroundSelect from './PlaygroundSelect.vue'

defineProps<{ copiedKey: string }>()
const emit = defineEmits<{ copy: [key: string, value: string] }>()

const multiple = ref(false)
const expandedValue = ref<string | string[] | undefined>('free')
const layout = ref<NoratoAccordionLayout>('grouped')
const itemStyle = ref<NoratoAccordionItemStyle>('plain')
const size = ref<NoratoAccordionSize>('medium')
const disabled = ref(false)
const secondItemDisabled = ref(false)
const customContent = ref(false)
const items = computed<NoratoAccordionItem[]>(() => [
  { value: 'free', title: 'نوراتو رایگانه؟', content: 'بله؛ استفاده از نوراتو برای پروژه‌های شخصی و کاری رایگان است.' },
  { value: 'theme', title: 'حالت تیره هم دارد؟', content: 'می‌توانی حالت نمایش را از تنظیمات برنامه تغییر بدهی.', disabled: secondItemDisabled.value },
  { value: 'customize', title: 'می‌توانم ظاهرش را تغییر بدهم؟', content: 'رنگ‌ها و فاصله‌ها را می‌توانی با توکن‌های Norato هماهنگ کنی.' },
])
const expandedCount = computed(() => Array.isArray(expandedValue.value) ? expandedValue.value.length : expandedValue.value ? 1 : 0)

watch(multiple, value => { expandedValue.value = value ? ['free'] : 'free' })

const snippet = computed(() => {
  const value = multiple.value ? "['free']" : "'free'"
  const contentSlot = customContent.value ? `\n    <template #content="{ item }">\n      <p>{{ item.content }}</p>\n      <NoratoButton label="بیشتر بدانید" variant="secondary" />\n    </template>` : ''
  return `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoAccordion${customContent.value ? ', NoratoButton' : ''}, type NoratoAccordionItem } from '@norato/vue'\nconst expanded = ref<string | string[] | undefined>(${value})\nconst items: NoratoAccordionItem[] = [\n  { value: 'free', title: 'نوراتو رایگانه؟', content: 'اطلاعات بیشتر' },\n  { value: 'theme', title: 'حالت تیره هم دارد؟', content: 'تنظیمات نمایش' },\n]\n<\\/script>\n\n<template>\n  <NoratoAccordion id="faq" v-model="expanded" :items="items"${multiple.value ? ' multiple' : ''} layout="${layout.value}" item-style="${itemStyle.value}" size="${size.value}"${disabled.value ? ' disabled' : ''}>${contentSlot}\n  </NoratoAccordion>\n</template>`
})
</script>

<template>
  <div class="accordion-playground" dir="rtl">
    <header><strong>آزمایش آکاردئون اجرایی</strong><span>با ردیف‌ها و حالت‌های مختلف کار کن و خروجی واقعی Vue را ببین.</span></header>
    <div class="accordion-playground__preview">
      <NoratoAccordion id="accordion-playground" v-model="expandedValue" :items="items" :multiple="multiple" :layout="layout" :item-style="itemStyle" :size="size" :disabled="disabled">
        <template v-if="customContent" #content="{ item }">
          <p>{{ item.content }}</p>
          <NoratoButton label="بیشتر بدانید" variant="secondary" />
        </template>
      </NoratoAccordion>
    </div>
    <div class="accordion-playground__controls">
      <PlaygroundSelect id="accordion-layout" v-model="layout" label="چیدمان" :options="[{value:'grouped',label:'گروهی'},{value:'separated',label:'جدا'}]" />
      <PlaygroundSelect id="accordion-item-style" v-model="itemStyle" label="سبک ردیف" :options="[{value:'plain',label:'ساده'},{value:'card',label:'کارت'}]" />
      <PlaygroundSelect id="accordion-size" v-model="size" label="اندازه" :options="[{value:'small',label:'کوچک'},{value:'medium',label:'متوسط'},{value:'large',label:'بزرگ'},{value:'xlarge',label:'خیلی بزرگ'}]" />
      <label class="accordion-playground__toggle"><input v-model="multiple" type="checkbox" /><span aria-hidden="true" />بازشدن چند ردیف</label>
      <label class="accordion-playground__toggle"><input v-model="secondItemDisabled" type="checkbox" /><span aria-hidden="true" />غیرفعال‌کردن ردیف دوم</label>
      <label class="accordion-playground__toggle"><input v-model="disabled" type="checkbox" /><span aria-hidden="true" />غیرفعال‌کردن گروه</label>
      <label class="accordion-playground__toggle"><input v-model="customContent" type="checkbox" /><span aria-hidden="true" />محتوای سفارشی</label>
    </div>
    <p class="accordion-playground__status" role="status" aria-live="polite">{{ disabled ? 'آکاردئون غیرفعال است.' : multiple ? `${expandedCount} ردیف باز است.` : expandedValue ? 'یک ردیف باز است.' : 'همهٔ ردیف‌ها بسته‌اند.' }}</p>
    <div class="accordion-playground__code"><div><strong>کد Vue</strong><button class="copy-section-button" type="button" @click="emit('copy', 'accordion-playground', snippet)">{{ copiedKey === 'accordion-playground' ? 'کپی شد' : copiedKey === 'accordion-playground-error' ? 'ناموفق' : 'کپی کد' }}</button></div><pre class="usage-code" dir="ltr"><code>{{ snippet }}</code></pre></div>
  </div>
</template>
