import { defineComponent, h } from 'vue'

const icon = (name: string, paths: string[]) => defineComponent({
  name,
  setup: () => () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' }, paths.map((d, index) => h('path', { key: index, d }))),
})

export const MenuEditIcon = icon('MenuEditIcon', ['m14 5 5 5', 'M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z'])
export const MenuCopyIcon = icon('MenuCopyIcon', ['M8 8h12v13H8z', 'M16 8V4H4v13h4'])
export const MenuShareIcon = icon('MenuShareIcon', ['M18 8a3 3 0 1 0-2.8-4', 'M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z', 'm8.7 15.8 6.6-4', 'm8.7 8.2 6.6 4', 'M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'])
export const MenuDeleteIcon = icon('MenuDeleteIcon', ['M4 7h16', 'M10 11v6', 'M14 11v6', 'm5 7 1 14h12l1-14', 'M9 7V4h6v3'])
export const MenuFolderIcon = icon('MenuFolderIcon', ['M3 6h7l2 2h9v11H3z', 'M3 8h18'])
