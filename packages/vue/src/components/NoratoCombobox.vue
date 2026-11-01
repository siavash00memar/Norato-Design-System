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

type Option = { value: string; label: string; disabled?: boolean }
const props = withDefaults(defineProps<{
  id: string
  label: string
  options: Option[]
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  errorText?: string
  helperText?: string
  dir?: 'rtl' | 'ltr'
}>(), { modelValue: '', placeholder: 'جست‌وجو یا انتخاب کنید…', dir: 'rtl' })
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const open = ref(false)
const query = ref('')
const filtered = computed(() => {
  const text = query.value.trim().normalize('NFKC').toLocaleLowerCase('fa')
  return props.options.filter((option) => !text || option.label.normalize('NFKC').toLocaleLowerCase('fa').includes(text))
    .map((option) => {
      const index = query.value ? option.label.toLocaleLowerCase('fa').indexOf(query.value.trim().toLocaleLowerCase('fa')) : -1
      return { ...option, before: index >= 0 ? option.label.slice(0, index) : option.label, match: index >= 0 ? option.label.slice(index, index + query.value.trim().length) : '', after: index >= 0 ? option.label.slice(index + query.value.trim().length) : '' }
    })
})
const displayValue = computed(() => props.options.find((option) => option.value === props.modelValue)?.label ?? '')
const describedBy = computed(() => [props.helperText && `${props.id}-helper`, props.errorText && `${props.id}-error`].filter(Boolean).join(' ') || undefined)
const selectValue = (value: string) => {
  emit('update:modelValue', value)
  query.value = ''
  open.value = false
}
watch(open, (value) => { if (!value) query.value = '' })
</script>

<template>
  <div class="norato-combobox-group" :dir="dir" :data-invalid="errorText ? '' : undefined">
    <label class="norato-combobox__label" :for="`${id}-input`">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label>
    <ComboboxRoot :model-value="modelValue" :open="open" :disabled="disabled" :dir="dir" @update:open="open = $event" @update:model-value="selectValue">
      <ComboboxAnchor as-child>
        <div class="norato-combobox__field">
          <ComboboxInput :id="`${id}-input`" class="norato-combobox__input" :display-value="() => open ? query : displayValue" :placeholder="placeholder" :aria-describedby="describedBy" :aria-invalid="errorText ? 'true' : undefined" :aria-required="required ? 'true' : undefined" @update:model-value="query = $event" />
          <ComboboxTrigger class="norato-combobox__trigger" :aria-label="`${label}، نمایش پیشنهادها`"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10 12 15 17 10" /></svg></ComboboxTrigger>
        </div>
      </ComboboxAnchor>
      <ComboboxPortal>
        <ComboboxContent class="norato-combobox__content" position="popper" align="start" :side-offset="8">
          <ComboboxViewport class="norato-combobox__viewport">
            <ComboboxItem v-for="option in filtered" :key="option.value" :value="option.value" :disabled="option.disabled" class="norato-combobox__option">
              <span>{{ option.before }}<strong v-if="option.match">{{ option.match }}</strong>{{ option.after }}</span>
              <span class="norato-combobox__selected" aria-hidden="true">✓</span>
            </ComboboxItem>
            <ComboboxEmpty class="norato-combobox__empty">موردی پیدا نشد.</ComboboxEmpty>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
    <p v-if="helperText" :id="`${id}-helper`" class="norato-combobox__message">{{ helperText }}</p>
    <p v-if="errorText" :id="`${id}-error`" role="alert" class="norato-combobox__message is-error">{{ errorText }}</p>
  </div>
</template>
