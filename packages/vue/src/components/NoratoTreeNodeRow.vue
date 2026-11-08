<script setup lang="ts">
import { TreeItem } from 'reka-ui'
import type { NoratoTreeNode } from './NoratoTreeView.vue'

defineOptions({ name: 'NoratoTreeNodeRow' })
defineProps<{ node: NoratoTreeNode; level: number; showGuides: boolean; dir: 'rtl' | 'ltr' }>()
const rowIndent = (node: NoratoTreeNode, level: number) => {
  const parts = Array.from({ length: Math.max(0, level - 1) }, () => 'var(--norato-tree-indent)')
  if (!node.children?.length) parts.push('var(--norato-tree-file-offset)')
  return `calc(${parts.length ? parts.join(' + ') : '0px'})`
}
</script>

<template>
  <TreeItem :value="node" :level="level" :disabled="node.disabled" class="norato-tree-item">
    <template #default="{ isExpanded, isSelected, isDisabled, handleToggle }">
      <div class="norato-tree-item__row" :data-selected="isSelected || undefined" :data-disabled="isDisabled || undefined" :data-folder="Boolean(node.children?.length) || undefined" :data-expanded="isExpanded || undefined" :style="{ '--norato-tree-row-indent': rowIndent(node, level) }">
        <span v-if="node.children?.length" class="norato-tree-item__chevron" :aria-hidden="true" @click.stop="handleToggle()">
          <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </span>
        <component :is="node.icon" v-if="node.icon" class="norato-tree-item__custom-icon" aria-hidden="true" />
        <svg v-else class="norato-tree-item__icon" viewBox="0 0 24 24" aria-hidden="true">
          <template v-if="node.children?.length">
            <path v-if="isExpanded" d="M3 7.5h7l2 2h9v8.7A1.8 1.8 0 0 1 19.2 20H4.8A1.8 1.8 0 0 1 3 18.2z" />
            <path v-else d="M3 6.8A1.8 1.8 0 0 1 4.8 5h5l2 2h7.4A1.8 1.8 0 0 1 21 8.8v9.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 18.2z" />
          </template>
          <template v-else><path d="M6 3.5h8l4 4v13H6z" /><path d="M14 3.5v4h4M9 12h6M9 16h6" /></template>
        </svg>
        <span class="norato-tree-item__label">{{ node.label }}</span>
      </div>
      <ul v-if="node.children?.length && isExpanded" class="norato-tree-item__children" :data-guides="showGuides ? 'on' : 'off'" role="group">
        <NoratoTreeNodeRow v-for="child in node.children" :key="child.id" :node="child" :level="level + 1" :show-guides="showGuides" :dir="dir" />
      </ul>
    </template>
  </TreeItem>
</template>

<style scoped>
.norato-tree-item {
  display: grid;
  min-inline-size: 0;
  list-style: none;
}

:global(.norato-tree-item:focus-visible) {
  outline: none;
  box-shadow: none;
}

.norato-tree-item__row {
  display: flex;
  align-items: center;
  gap: var(--norato-tree-item-gap);
  box-sizing: border-box;
  min-block-size: var(--norato-tree-row-height);
  min-inline-size: 0;
  padding-inline-start: var(--norato-tree-row-indent);
  padding-inline-end: var(--norato-space-2);
  border-radius: var(--norato-radius-control);
  color: var(--norato-color-text-primary);
  cursor: default;
  font-size: var(--norato-tree-label-size);
  line-height: var(--norato-tree-label-line-height);
}

.norato-tree-item__row:hover:not([data-disabled]) { background: var(--norato-color-surface-subtle); }
.norato-tree-item__row[data-selected="true"] { background: var(--norato-color-warning-container); }
.norato-tree-item:focus-visible > .norato-tree-item__row { outline: var(--norato-border-focus) solid var(--norato-color-brand-yellow); outline-offset: var(--norato-tree-focus-offset); }
.norato-tree-item__row[data-disabled="true"] { color: var(--norato-color-text-disabled); cursor: not-allowed; }

.norato-tree-item__chevron {
  display: grid;
  flex: none;
  place-items: center;
  inline-size: var(--norato-tree-chevron-size);
  block-size: var(--norato-tree-chevron-size);
}

.norato-tree-item__chevron { cursor: pointer; }
.norato-tree-item__chevron svg { inline-size: var(--norato-icon-sm); block-size: var(--norato-icon-sm); fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: var(--norato-border-medium); transition: transform var(--norato-motion-duration-fast) var(--norato-motion-ease-out); }
.norato-tree-item__chevron[aria-expanded="true"] svg,
.norato-tree-item__row[data-expanded="true"] .norato-tree-item__chevron svg { transform: rotate(90deg); }
[dir="rtl"] .norato-tree-item__row:not([data-expanded="true"]) .norato-tree-item__chevron svg { transform: rotate(180deg); }
.norato-tree-item__icon,
.norato-tree-item__custom-icon { display: block; flex: none; inline-size: var(--norato-tree-icon-size); block-size: var(--norato-tree-icon-size); margin-inline-end: var(--norato-tree-icon-label-gap); color: var(--norato-color-text-secondary); fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: var(--norato-border-thin); }
.norato-tree-item__row[data-selected="true"] .norato-tree-item__icon { color: var(--norato-color-brand-yellow); }
.norato-tree-item__label { min-inline-size: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.norato-tree-item__children { display: grid; gap: var(--norato-tree-row-gap); min-inline-size: 0; margin: 0; padding: 0; list-style: none; }
.norato-tree-item__children[data-guides="on"] { border-inline-start: var(--norato-border-thin) dashed var(--norato-color-border-default); }

@media (prefers-reduced-motion: reduce) { .norato-tree-item__chevron svg { transition: none; } }
</style>
