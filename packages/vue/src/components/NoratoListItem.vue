<script setup lang="ts">
import { computed } from 'vue'

export type NoratoListItemAction = 'none' | 'link' | 'button' | 'checkbox' | 'switch'
export type NoratoListItemLeading = 'none' | 'icon' | 'avatar'

const props = withDefaults(defineProps<{
  id: string
  title: string
  description?: string
  action?: NoratoListItemAction
  leading?: NoratoListItemLeading
  href?: string
  value?: string
  badge?: string
  chevron?: boolean
  modelValue?: boolean
  selected?: boolean
  selectable?: boolean
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  action: 'none',
  leading: 'icon',
  modelValue: false,
  selected: false,
  selectable: false,
  chevron: false,
  disabled: false,
  dir: 'rtl',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  activate: [event: MouseEvent]
}>()

const canNavigate = computed(() => props.action === 'link' && !!props.href && !props.disabled)
const isButton = computed(() => props.action === 'button')
const isDisabled = computed(() => props.disabled || (props.action === 'link' && !props.href))
const initial = computed(() => Array.from(props.title.trim())[0] ?? '')

function activate(event: MouseEvent) {
  if (isDisabled.value) return
  emit('activate', event)
}

function toggle() {
  if (!props.disabled) emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <li class="norato-list-item" :data-selected="selected || undefined" :data-disabled="isDisabled || undefined" :dir="dir">
    <label v-if="action === 'checkbox'" class="norato-list-item__row norato-list-item__row--choice" :for="`${id}-control`">
      <input
        :id="`${id}-control`"
        class="norato-list-item__checkbox"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :aria-labelledby="`${id}-title`"
        :aria-describedby="description ? `${id}-description` : undefined"
        @change="toggle"
      />
      <span v-if="leading !== 'none'" class="norato-list-item__leading" :data-leading="leading" aria-hidden="true">
        <slot name="leading">
          <span v-if="leading === 'avatar'" class="norato-list-item__initial">{{ initial }}</span>
          <svg v-else viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M12 8v8m-4-4h8" /></svg>
        </slot>
      </span>
      <span class="norato-list-item__copy">
        <span class="norato-list-item__title" :id="`${id}-title`">{{ title }}</span>
        <span v-if="description" class="norato-list-item__description" :id="`${id}-description`">{{ description }}</span>
      </span>
      <span class="norato-list-item__trailing">
        <span v-if="value" class="norato-list-item__value">{{ value }}</span>
        <span v-if="badge" class="norato-list-item__badge">{{ badge }}</span>
        <slot name="trailing" />
      </span>
    </label>

    <div v-else-if="action === 'switch'" class="norato-list-item__row norato-list-item__row--switch">
      <span v-if="leading !== 'none'" class="norato-list-item__leading" :data-leading="leading" aria-hidden="true">
        <slot name="leading">
          <span v-if="leading === 'avatar'" class="norato-list-item__initial">{{ initial }}</span>
          <svg v-else viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M12 8v8m-4-4h8" /></svg>
        </slot>
      </span>
      <span class="norato-list-item__copy">
        <span class="norato-list-item__title" :id="`${id}-title`">{{ title }}</span>
        <span v-if="description" class="norato-list-item__description" :id="`${id}-description`">{{ description }}</span>
      </span>
      <span class="norato-list-item__trailing">
        <span v-if="value" class="norato-list-item__value">{{ value }}</span>
        <span v-if="badge" class="norato-list-item__badge">{{ badge }}</span>
        <slot name="trailing" />
        <button class="norato-list-item__switch" type="button" role="switch" :aria-checked="modelValue" :aria-labelledby="`${id}-title`" :aria-describedby="description ? `${id}-description` : undefined" :disabled="disabled" @click="toggle">
          <span aria-hidden="true" />
        </button>
      </span>
    </div>

    <component
      :is="canNavigate ? 'a' : isButton ? 'button' : 'div'"
      v-else
      class="norato-list-item__row"
      :class="{ 'norato-list-item__row--interactive': canNavigate || isButton }"
      :href="canNavigate ? href : undefined"
      :type="isButton ? 'button' : undefined"
      :disabled="isButton ? isDisabled : undefined"
      :aria-disabled="!isButton && isDisabled ? 'true' : undefined"
      :aria-labelledby="canNavigate || isButton ? `${id}-title` : undefined"
      :aria-describedby="description && (canNavigate || isButton) ? `${id}-description` : undefined"
      :aria-current="canNavigate && selected ? 'page' : undefined"
      :aria-pressed="isButton && selectable ? selected : undefined"
      @click="canNavigate || isButton ? activate($event) : undefined"
    >
      <span v-if="leading !== 'none'" class="norato-list-item__leading" :data-leading="leading" aria-hidden="true">
        <slot name="leading">
          <span v-if="leading === 'avatar'" class="norato-list-item__initial">{{ initial }}</span>
          <svg v-else viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M12 8v8m-4-4h8" /></svg>
        </slot>
      </span>
      <span class="norato-list-item__copy">
        <span class="norato-list-item__title" :id="`${id}-title`">{{ title }}</span>
        <span v-if="description" class="norato-list-item__description" :id="`${id}-description`">{{ description }}</span>
      </span>
      <span class="norato-list-item__trailing">
        <span v-if="value" class="norato-list-item__value">{{ value }}</span>
        <span v-if="badge" class="norato-list-item__badge">{{ badge }}</span>
        <slot name="trailing" />
        <svg v-if="canNavigate || chevron" class="norato-list-item__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m14 5-7 7 7 7" /></svg>
      </span>
    </component>
  </li>
</template>
