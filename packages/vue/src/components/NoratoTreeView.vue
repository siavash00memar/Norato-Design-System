<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'
import { TreeItem, TreeRoot } from 'reka-ui'
import NoratoTreeNodeRow from './NoratoTreeNodeRow.vue'

export type NoratoTreeNode = {
  id: string
  label: string
  children?: NoratoTreeNode[]
  disabled?: boolean
  icon?: Component
}

const props = withDefaults(defineProps<{
  id: string
  label: string
  items: NoratoTreeNode[]
  modelValue?: string
  expandedIds?: string[]
  defaultSelectedId?: string
  defaultExpandedIds?: string[]
  showGuides?: boolean
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), { defaultExpandedIds: () => [], showGuides: false, disabled: false, dir: 'rtl' })

const emit = defineEmits<{ 'update:modelValue': [id: string | undefined]; 'update:expandedIds': [ids: string[]] }>()
const nodeModel = computed(() => findNode(props.items, props.modelValue))
const defaultNode = computed(() => findNode(props.items, props.defaultSelectedId))
const childrenFor = (node: NoratoTreeNode) => node.children?.length ? node.children : undefined
const getKey = (node: NoratoTreeNode) => node.id

function findNode(nodes: NoratoTreeNode[], id?: string): NoratoTreeNode | undefined {
  if (!id) return undefined
  for (const node of nodes) {
    if (node.id === id) return node
    const match = node.children && findNode(node.children, id)
    if (match) return match
  }
  return undefined
}

function selectNode(node: NoratoTreeNode | undefined) {
  emit('update:modelValue', node && !node.disabled ? node.id : undefined)
}
</script>

<template>
  <TreeRoot
    :id="id"
    class="norato-tree-view"
    :data-guides="showGuides ? 'on' : 'off'"
    :items="items"
    :model-value="nodeModel"
    :default-value="defaultNode"
    :expanded="expandedIds"
    :default-expanded="defaultExpandedIds"
    :get-key="getKey"
    :get-children="childrenFor"
    :disabled="disabled"
    :dir="dir"
    :aria-label="label"
    selection-behavior="replace"
    as="ul"
    @update:model-value="selectNode"
    @update:expanded="emit('update:expandedIds', $event)"
  >
    <NoratoTreeNodeRow v-for="node in items" :key="node.id" :node="node" :level="1" :show-guides="showGuides" :dir="dir" />
  </TreeRoot>
</template>

<style scoped>
.norato-tree-view {
  display: grid;
  gap: var(--norato-tree-row-gap);
  min-inline-size: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--norato-color-text-primary);
  font-family: var(--norato-font-body);
}

:global(.norato-tree-view.is-compact) {
  --norato-tree-row-height: var(--norato-tree-preview-row-height);
}
</style>
