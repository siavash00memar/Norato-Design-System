<script setup lang="ts">
import { computed } from 'vue'

export type NoratoSelectableCardControl = 'radio' | 'checkbox'

const props = withDefaults(defineProps<{
  id: string
  title: string
  description?: string
  control?: NoratoSelectableCardControl
  name?: string
  value?: string
  modelValue?: boolean | string
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), { control: 'radio', modelValue: false, disabled: false, dir: 'rtl' })

const emit = defineEmits<{ 'update:modelValue': [value: boolean | string] }>()
const controlId = computed(() => props.id + '-control')
const titleId = computed(() => props.id + '-title')
const descriptionId = computed(() => props.id + '-description')
const checked = computed(() => props.control === 'radio' && props.value !== undefined ? props.modelValue === props.value : Boolean(props.modelValue))

function update(event: Event) {
  const input = event.target as HTMLInputElement
  if (props.control === 'radio') {
    if (input.checked) emit('update:modelValue', props.value ?? true)
  } else emit('update:modelValue', input.checked)
}
</script>

<template>
  <label class="norato-card norato-selectable-card" :data-control="control" :data-selected="checked || undefined" :data-disabled="disabled || undefined" :for="controlId" :dir="dir">
    <input :id="controlId" class="norato-selectable-card__control" :type="control" :name="name" :value="value" :checked="checked" :disabled="disabled" :aria-labelledby="titleId" :aria-describedby="description ? descriptionId : undefined" @change="update" />
    <span class="norato-selectable-card__copy"><strong :id="titleId">{{ title }}</strong><span v-if="description" :id="descriptionId">{{ description }}</span></span>
    <span class="norato-selectable-card__indicator" aria-hidden="true"><span /></span>
  </label>
</template>
