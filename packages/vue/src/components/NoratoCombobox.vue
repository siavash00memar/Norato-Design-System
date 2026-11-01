<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from 'reka-ui'

export type NoratoComboboxOption = { value: string; label: string; disabled?: boolean; recent?: boolean }
type Size = 'small' | 'medium' | 'large' | 'xlarge'
const props = withDefaults(defineProps<{
  id: string
  label: string
  options: NoratoComboboxOption[]
  modelValue?: string | string[]
  recentOptions?: NoratoComboboxOption[]
  placeholder?: string
  disabled?: boolean
  required?: boolean
  multiple?: boolean
  loading?: boolean
  creatable?: boolean
  size?: Size
  labelPlacement?: 'outside' | 'inside'
  errorText?: string
  helperText?: string
  dir?: 'rtl' | 'ltr'
}>(), {
  modelValue: '',
  recentOptions: () => [],
  placeholder: 'جست‌وجو یا انتخاب کنید…',
  size: 'large',
  labelPlacement: 'outside',
  dir: 'rtl',
})
const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
  create: [value: string]
}>()
const open = ref(false)
const query = ref('')
const foldForSearch = (value: string) => value.toLocaleLowerCase('fa').replace(/[يى]/g, 'ی').replace(/ك/g, 'ک')
const selectedValues = computed(() => Array.isArray(props.modelValue) ? props.modelValue : props.modelValue ? [props.modelValue] : [])
const selectedLabels = computed(() => selectedValues.value.map((value) => props.options.find((option) => option.value === value)?.label ?? value))
const singleDisplayValue = computed(() => selectedLabels.value[0] ?? '')
const isCreating = computed(() => {
  const text = foldForSearch(query.value.trim())
  return props.creatable && !!text && !props.options.some((option) => foldForSearch(option.label) === text)
})
const filtered = computed(() => {
  const search = foldForSearch(query.value.trim())
  const source = !search && props.recentOptions.length ? props.recentOptions : props.options
  return source.filter((option) => !search || foldForSearch(option.label).includes(search))
    .map((option) => {
      const needle = foldForSearch(query.value.trim())
      const index = needle ? foldForSearch(option.label).indexOf(needle) : -1
      const end = index >= 0 ? index + query.value.trim().length : index
      return { ...option, before: index >= 0 ? option.label.slice(0, index) : option.label, match: index >= 0 ? option.label.slice(index, end) : '', after: index >= 0 ? option.label.slice(end) : '' }
    })
})
const describedBy = computed(() => [props.helperText && `${props.id}-helper`, props.errorText && `${props.id}-error`, props.multiple && selectedLabels.value.length && `${props.id}-selected`].filter(Boolean).join(' ') || undefined)
const selectValue = (value: string | string[]) => {
  const incoming = Array.isArray(value) ? value : [value]
  if (isCreating.value && incoming.some((item) => !selectedValues.value.includes(item) && item === query.value.trim())) emit('create', query.value.trim())
  emit('update:modelValue', props.multiple ? (Array.isArray(value) ? value : [...selectedValues.value, value]) : (Array.isArray(value) ? value[0] ?? '' : value))
  if (!props.multiple) {
    query.value = ''
    open.value = false
  } else query.value = ''
}
const clear = () => {
  emit('update:modelValue', props.multiple ? [] : '')
  query.value = ''
  open.value = false
}
watch(open, (value) => { if (!value) query.value = '' })
watch(() => props.multiple, () => { query.value = ''; open.value = false })
</script>

<template>
  <div class="norato-combobox-group" :dir="dir" :data-invalid="errorText ? '' : undefined" :data-disabled="disabled ? '' : undefined" :data-size="size" :data-label-placement="labelPlacement" :data-multiple="multiple ? '' : undefined" :aria-busy="loading ? 'true' : undefined">
    <span v-if="loading" class="sr-only" role="status" aria-live="polite">در حال بارگذاری پیشنهادها</span>
    <span v-if="multiple && selectedLabels.length" :id="`${id}-selected`" class="sr-only">انتخاب‌ها: {{ selectedLabels.join('، ') }}</span>
    <label v-if="labelPlacement === 'outside'" class="norato-combobox__label" :for="`${id}-input`">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label>
    <ComboboxRoot :model-value="multiple ? selectedValues : (selectedValues[0] ?? '')" :open="open" :multiple="multiple" :disabled="disabled" :dir="dir" :ignore-filter="true" open-on-focus open-on-click @update:open="open = $event" @update:model-value="selectValue">
      <ComboboxAnchor as-child>
        <div class="norato-combobox__field">
          <label v-if="labelPlacement === 'inside'" class="norato-combobox__inside-label" :for="`${id}-input`">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label>
          <div class="norato-combobox__control-row">
            <div v-if="multiple && selectedLabels.length" class="norato-combobox__chips" aria-hidden="true"><span class="norato-combobox__chip">{{ selectedLabels[0] }}</span><span v-if="selectedLabels.length > 1" class="norato-combobox__chip">+{{ (selectedLabels.length - 1).toLocaleString('fa-IR') }}</span></div>
            <span v-if="!query && !selectedValues.length" class="norato-combobox__search-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 4 4" /></svg></span>
            <ComboboxInput :id="`${id}-input`" class="norato-combobox__input" :model-value="multiple ? query : undefined" :display-value="() => open ? query : singleDisplayValue" :placeholder="placeholder" :aria-describedby="describedBy" :aria-invalid="errorText ? 'true' : undefined" :aria-required="required ? 'true' : undefined" :required="required" :aria-busy="loading ? 'true' : undefined" @update:model-value="query = $event" />
            <button v-if="query || selectedValues.length" class="norato-combobox__clear" type="button" aria-label="پاک کردن انتخاب و جست‌وجو" :disabled="disabled" @pointerdown.prevent @click="clear"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" /></svg></button>
            <ComboboxTrigger class="norato-combobox__trigger" :aria-label="`${label}، نمایش پیشنهادها`"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10 12 15 17 10" /></svg></ComboboxTrigger>
          </div>
        </div>
      </ComboboxAnchor>
      <ComboboxPortal>
        <ComboboxContent class="norato-combobox__content" position="popper" align="start" :side-offset="8">
          <div v-if="!query && recentOptions.length && !loading" class="norato-combobox__menu-label">موارد اخیر</div>
          <div v-if="loading" class="norato-combobox__loading" aria-hidden="true"><span /><span /><span /></div>
          <ComboboxViewport v-else class="norato-combobox__viewport">
            <ComboboxItem v-for="option in filtered" :key="option.value" :value="option.value" :disabled="option.disabled" class="norato-combobox__option">
              <span>{{ option.before }}<strong v-if="option.match">{{ option.match }}</strong>{{ option.after }}</span>
              <span class="norato-combobox__selected" aria-hidden="true">✓</span>
            </ComboboxItem>
            <ComboboxItem v-if="isCreating" :value="query.trim()" class="norato-combobox__option norato-combobox__create">ایجاد «{{ query.trim() }}»</ComboboxItem>
            <ComboboxEmpty v-if="!isCreating" class="norato-combobox__empty">موردی پیدا نشد؛ عبارت دیگری را امتحان کنید.</ComboboxEmpty>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
    <p v-if="helperText" :id="`${id}-helper`" class="norato-combobox__message">{{ helperText }}</p>
    <p v-if="errorText" :id="`${id}-error`" role="alert" class="norato-combobox__message is-error">{{ errorText }}</p>
  </div>
</template>
