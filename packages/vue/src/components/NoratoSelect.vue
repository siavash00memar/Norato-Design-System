<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectViewport,
} from 'reka-ui'

type SelectOption = { value: string; label: string; disabled?: boolean; group?: string }
type SelectGroupOption = { label: string | null; options: SelectOption[] }
type SelectValue = string | string[] | undefined

const props = withDefaults(defineProps<{
  id: string
  label: string
  options: SelectOption[]
  modelValue?: string | string[]
  placeholder?: string
  helperText?: string
  errorText?: string
  disabled?: boolean
  loading?: boolean
  required?: boolean
  readOnly?: boolean
  multiple?: boolean
  searchable?: boolean
  display?: 'chips' | 'summary'
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  labelPlacement?: 'inside' | 'outside'
  name?: string
  searchPlaceholder?: string
  dir?: 'rtl' | 'ltr' | 'auto'
}>(), {
  placeholder: 'انتخاب کنید',
  display: 'chips',
  size: 'large',
  labelPlacement: 'outside',
  searchPlaceholder: 'جست‌وجو کنید…',
  dir: 'rtl',
})

const emit = defineEmits<{ 'update:modelValue': [value: string | string[]] }>()
const isOpen = ref(false)
const draftValues = ref<string[]>([])
const searchQuery = ref('')
const searchInput = ref<HTMLInputElement>()
const effectiveDir = computed(() => props.dir === 'ltr' ? 'ltr' : 'rtl')
const isUnavailable = computed(() => props.disabled || props.loading)
const selectedValues = computed(() => Array.isArray(props.modelValue) ? props.modelValue : props.modelValue ? [props.modelValue] : [])
const activeValue = computed<SelectValue>(() => props.multiple ? draftValues.value : (Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue))
const describedBy = computed(() => [
  props.helperText && `${props.id}-helper`,
  props.errorText && `${props.id}-error`,
  props.loading && `${props.id}-loading`,
].filter(Boolean).join(' ') || undefined)
const selectedLabels = computed(() => selectedValues.value
  .map((value) => props.options.find((option) => option.value === value)?.label)
  .filter((label): label is string => Boolean(label)))
const valueLabel = computed(() => {
  if (!selectedLabels.value.length) return ''
  if (props.multiple && props.display === 'summary') return `${selectedLabels.value.length.toLocaleString('fa-IR')} مورد انتخاب شد`
  return selectedLabels.value[0]
})
const groupedOptions = computed<SelectGroupOption[]>(() => {
  const groups: SelectGroupOption[] = []
  for (const option of props.options) {
    const label = option.group?.trim() || null
    let group = groups.at(-1)
    if (!group || group.label !== label) {
      group = { label, options: [] }
      groups.push(group)
    }
    group.options.push(option)
  }
  return groups
})
const normalizedQuery = computed(() => searchQuery.value.trim().normalize('NFKC').replace(/[\u200c\s]+/g, ' ').toLocaleLowerCase('fa'))
const visibleGroups = computed(() => groupedOptions.value
  .map((group) => ({
    ...group,
    options: group.options.filter((option) => !normalizedQuery.value || option.label.normalize('NFKC').replace(/[\u200c\s]+/g, ' ').toLocaleLowerCase('fa').includes(normalizedQuery.value)),
  }))
  .filter((group) => group.options.length))
const hasVisibleOptions = computed(() => visibleGroups.value.some((group) => group.options.length))

const focusSearch = async () => {
  if (!props.searchable) return
  await nextTick()
  searchInput.value?.focus()
}
const updateOpen = (next: boolean) => {
  if (next && (isUnavailable.value || props.readOnly)) return
  isOpen.value = next
  if (next) {
    draftValues.value = [...selectedValues.value]
    searchQuery.value = ''
    void focusSearch()
  } else {
    draftValues.value = [...selectedValues.value]
    searchQuery.value = ''
  }
}
const updateValue = (next: SelectValue) => {
  if (props.multiple) {
    draftValues.value = Array.isArray(next) ? next : next ? [next] : []
    return
  }
  if (typeof next === 'string') emit('update:modelValue', next)
}
const commitMultiple = () => {
  emit('update:modelValue', [...draftValues.value])
  isOpen.value = false
}
const cancelMultiple = () => {
  draftValues.value = [...selectedValues.value]
  isOpen.value = false
}
const handleSearchKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    if (props.multiple) cancelMultiple()
    else isOpen.value = false
    return
  }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    const enabledItems = [...document.querySelectorAll<HTMLElement>(`#${CSS.escape(props.id)}-content [data-norato-select-option]:not([data-disabled])`)]
    const target = event.key === 'ArrowDown' ? enabledItems[0] : enabledItems.at(-1)
    target?.focus()
  }
}

watch(() => props.multiple, (multiple) => {
  if (!multiple && Array.isArray(props.modelValue)) emit('update:modelValue', props.modelValue[0] ?? '')
})
</script>

<template>
  <div
    class="norato-select-group"
    :class="{ 'is-invalid': errorText, 'is-loading': loading, 'is-multiple': multiple }"
    :aria-busy="loading ? 'true' : undefined"
    :data-size="size"
    :data-label-placement="labelPlacement"
    :dir="effectiveDir"
  >
    <label v-if="labelPlacement === 'outside'" class="norato-select__label" :for="`${id}-trigger`">
      {{ label }}<span v-if="required" aria-hidden="true"> *</span>
    </label>
    <SelectRoot
      :model-value="activeValue"
      :open="isOpen"
      :multiple="multiple"
      :dir="effectiveDir"
      :name="name"
      :required="required"
      :disabled="isUnavailable"
      @update:model-value="updateValue"
      @update:open="updateOpen"
    >
      <SelectTrigger
        :id="`${id}-trigger`"
        class="norato-select__trigger"
        :aria-describedby="describedBy"
        :aria-invalid="errorText ? 'true' : undefined"
        :aria-readonly="readOnly ? 'true' : undefined"
        :aria-required="required ? 'true' : undefined"
        :disabled="isUnavailable"
      >
        <span v-if="labelPlacement === 'inside'" class="norato-select__inside-value">
          <span class="norato-select__inside-label">{{ label }}<span v-if="required" aria-hidden="true"> *</span></span>
          <span v-if="multiple && display === 'chips' && selectedLabels.length" class="norato-select__chips">
            <span v-for="selectedLabel in selectedLabels" :key="selectedLabel" class="norato-select__chip">{{ selectedLabel }}</span>
          </span>
          <span v-else class="norato-select__value" :data-placeholder="!valueLabel || undefined">{{ valueLabel || placeholder }}</span>
        </span>
        <template v-else>
          <span v-if="multiple && display === 'chips' && selectedLabels.length" class="norato-select__chips">
            <span v-for="selectedLabel in selectedLabels" :key="selectedLabel" class="norato-select__chip">{{ selectedLabel }}</span>
          </span>
          <span v-else class="norato-select__value" :data-placeholder="!valueLabel || undefined">{{ valueLabel || placeholder }}</span>
        </template>
        <span class="norato-select__chevron" aria-hidden="true" />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          :id="`${id}-content`"
          class="norato-select__content"
          position="popper"
          align="start"
          :side-offset="4"
          :loop="true"
          @escape-key-down="multiple ? cancelMultiple() : (isOpen = false)"
        >
          <div v-if="searchable" class="norato-select__search-wrap" @pointerdown.stop>
            <input
              :id="`${id}-search`"
              ref="searchInput"
              v-model="searchQuery"
              class="norato-select__search"
              type="search"
              :dir="effectiveDir"
              :placeholder="searchPlaceholder"
              :aria-label="`جست‌وجوی ${label}`"
              autocomplete="off"
              @keydown="handleSearchKeydown"
            />
          </div>
          <SelectViewport class="norato-select__viewport">
            <SelectGroup v-for="(group, groupIndex) in visibleGroups" :key="`${group.label ?? 'ungrouped'}-${groupIndex}`" class="norato-select__group">
              <SelectLabel v-if="group.label" class="norato-select__group-label">{{ group.label }}</SelectLabel>
              <SelectItem
                v-for="option in group.options"
                :key="option.value"
                :value="option.value"
                :disabled="option.disabled"
                class="norato-select__option"
                data-norato-select-option
              >
                <SelectItemText>{{ option.label }}</SelectItemText>
                <SelectItemIndicator class="norato-select__indicator" aria-hidden="true">✓</SelectItemIndicator>
              </SelectItem>
              <SelectSeparator v-if="groupIndex < visibleGroups.length - 1" class="norato-select__separator" />
            </SelectGroup>
            <p v-if="!hasVisibleOptions" class="norato-select__empty" role="status">موردی پیدا نشد.</p>
          </SelectViewport>
          <footer v-if="multiple" class="norato-select__footer" :dir="effectiveDir">
            <button class="norato-select__footer-button is-cancel" type="button" @click="cancelMultiple">انصراف</button>
            <button class="norato-select__footer-button is-confirm" type="button" @click="commitMultiple">تأیید انتخاب</button>
          </footer>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
    <p v-if="helperText" :id="`${id}-helper`" class="norato-select__message">{{ helperText }}</p>
    <p v-if="errorText" :id="`${id}-error`" class="norato-select__message norato-select__error" role="alert">{{ errorText }}</p>
    <p v-if="loading" :id="`${id}-loading`" class="norato-select__message" role="status" aria-live="polite">در حال بارگذاری گزینه‌ها</p>
  </div>
</template>
