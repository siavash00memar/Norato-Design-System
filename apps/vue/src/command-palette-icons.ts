import { defineComponent, h } from 'vue'

const icon = (name: string, paths: Array<{ d: string; fill?: string }>) => defineComponent({
  name,
  setup: () => () => h('svg', { viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' }, paths.map((path, index) => h('path', { key: index, d: path.d, fill: path.fill }))),
})

export const CommandPaletteSearchIcon = icon('CommandPaletteSearchIcon', [
  { d: 'M10.8 3.5a7.3 7.3 0 1 0 0 14.6 7.3 7.3 0 0 0 0-14.6Z' },
  { d: 'm16.2 16.2 4.3 4.3' },
])

export const CommandPaletteNewIcon = icon('CommandPaletteNewIcon', [
  { d: 'M12 5v14M5 12h14' },
])

export const CommandPaletteSettingsIcon = icon('CommandPaletteSettingsIcon', [
  { d: 'M12 3.5 14 4l1 2 2.2.3 1.5 1.6-.6 2.1 1.2 1.9-.5 2.2-2 1-.5 2.2-2 1.1-2-.9-2 1-2.1-1-.7-2.1-2-.9-.7-2.2 1.2-1.9-.7-2.1 1.4-1.7 2.2-.4 1-2Z' },
  { d: 'M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' },
])

export const CommandPaletteProjectsIcon = icon('CommandPaletteProjectsIcon', [
  { d: 'M3.5 7.5h7l2 2h8v9h-17v-11Z' },
  { d: 'M3.5 7.5v-2h7l2 2' },
])
