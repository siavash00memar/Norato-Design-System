<script setup lang="ts">
import type { Component } from 'vue'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'

export type NoratoTab = { value: string; label: string; disabled?: boolean; count?: string | number; icon?: Component; content?: string }
const props = withDefaults(defineProps<{ id: string; modelValue: string; label: string; tabs: NoratoTab[]; style?: 'line' | 'soft'; size?: 'small' | 'medium' | 'large'; orientation?: 'horizontal' | 'vertical'; activationMode?: 'automatic' | 'manual'; disabled?: boolean; dir?: 'rtl' | 'ltr' }>(), { style: 'line', size: 'medium', orientation: 'horizontal', activationMode: 'automatic', disabled: false, dir: 'rtl' })
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const update = (value: string | number) => emit('update:modelValue', String(value))
</script>

<template>
  <TabsRoot :id="id" class="norato-tabs" :data-style="style" :data-size="size" :data-orientation="orientation" :model-value="modelValue" :orientation="orientation" :activation-mode="activationMode" :dir="dir" :unmount-on-hide="false" @update:model-value="update">
    <TabsList class="norato-tabs__list" :aria-label="label" :loop="true">
      <TabsTrigger v-for="tab in tabs" :key="tab.value" class="norato-tabs__trigger" :value="tab.value" :disabled="disabled || tab.disabled">
        <component :is="tab.icon" v-if="tab.icon" class="norato-tabs__icon" aria-hidden="true" />
        <span>{{ tab.label }}</span><b v-if="tab.count !== undefined" class="norato-tabs__count">{{ tab.count }}</b>
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="tab in tabs" :key="`${id}-${tab.value}`" class="norato-tabs__panel" :value="tab.value" :aria-label="`${tab.label} — ${label}`">
      <slot :name="`panel-${tab.value}`" :tab="tab">{{ tab.content }}</slot>
    </TabsContent>
  </TabsRoot>
</template>
