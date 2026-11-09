<script setup lang="ts">
import { computed, getCurrentInstance, ref } from 'vue'
import { AccordionHeader, AccordionItem, AccordionRoot } from 'reka-ui'

export type NoratoAccordionItem = {
  value: string
  title: string
  content?: string
  disabled?: boolean
}

export type NoratoAccordionLayout = 'grouped' | 'separated'
export type NoratoAccordionItemStyle = 'card' | 'plain'
export type NoratoAccordionSize = 'small' | 'medium' | 'large' | 'xlarge'
export type NoratoAccordionValue = string | string[] | undefined

const props = withDefaults(defineProps<{
  id: string
  items: NoratoAccordionItem[]
  modelValue?: NoratoAccordionValue
  defaultValue?: NoratoAccordionValue
  multiple?: boolean
  collapsible?: boolean
  layout?: NoratoAccordionLayout
  itemStyle?: NoratoAccordionItemStyle
  size?: NoratoAccordionSize
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  multiple: false,
  collapsible: true,
  layout: 'grouped',
  itemStyle: 'plain',
  size: 'medium',
  disabled: false,
  dir: 'rtl',
})

const emit = defineEmits<{ 'update:modelValue': [value: NoratoAccordionValue] }>()
const localValue = ref<NoratoAccordionValue>(props.defaultValue ?? (props.multiple ? [] : undefined))
const vnodeProps = getCurrentInstance()?.vnode.props ?? {}
const isControlled = Object.hasOwn(vnodeProps, 'modelValue') || Object.hasOwn(vnodeProps, 'model-value')
const currentValue = computed(() => isControlled ? props.modelValue : localValue.value)
const triggerId = (value: string) => `${props.id}-trigger-${encodeURIComponent(value)}`
const panelId = (value: string) => `${props.id}-panel-${encodeURIComponent(value)}`
const toggleItem = (value: string, itemDisabled = false) => {
  if (props.disabled || itemDisabled) return
  let nextValue: NoratoAccordionValue
  if (props.multiple) {
    const openItems = Array.isArray(currentValue.value) ? [...currentValue.value] : []
    const index = openItems.indexOf(value)
    if (index >= 0) openItems.splice(index, 1)
    else openItems.push(value)
    nextValue = openItems
  } else if (currentValue.value === value) {
    nextValue = props.collapsible ? undefined : value
  } else {
    nextValue = value
  }
  localValue.value = nextValue
  emit('update:modelValue', nextValue)
}
</script>

<template>
  <div class="norato-accordion-direction" :dir="dir">
    <AccordionRoot
    :id="id"
    class="norato-accordion"
    :data-layout="layout"
    :data-item-style="itemStyle"
    :data-size="size"
    :type="multiple ? 'multiple' : 'single'"
    :model-value="currentValue"
    :collapsible="collapsible"
    :disabled="disabled"
    :dir="dir"
    :unmount-on-hide="false"
    >
    <AccordionItem
      v-for="item in items"
      :key="item.value"
      v-slot="{ open }"
      :value="item.value"
      :disabled="item.disabled"
      class="norato-accordion__item"
      :data-item-style="itemStyle"
    >
      <AccordionHeader as="h3" class="norato-accordion__heading">
        <button
          :id="triggerId(item.value)"
          type="button"
          class="norato-accordion__trigger"
          :aria-controls="panelId(item.value)"
          :aria-expanded="open"
          :aria-disabled="open && !collapsible && !multiple ? 'true' : undefined"
          :disabled="disabled || item.disabled"
          :data-state="open ? 'open' : 'closed'"
          data-reka-collection-item
          @click="toggleItem(item.value, item.disabled)"
        >
          <span class="norato-accordion__title">{{ item.title }}</span>
          <svg class="norato-accordion__chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </AccordionHeader>
      <div
        :id="panelId(item.value)"
        class="norato-accordion__panel"
        role="region"
        :aria-labelledby="triggerId(item.value)"
        :data-state="open ? 'open' : 'closed'"
        :hidden="!open"
      >
        <div class="norato-accordion__content">
          <slot name="content" :item="item">{{ item.content }}</slot>
        </div>
      </div>
    </AccordionItem>
    </AccordionRoot>
  </div>
</template>
