import type { InjectionKey } from 'vue'

export const noratoTooltipProviderKey: InjectionKey<boolean> = Symbol.for('norato.tooltip.provider') as InjectionKey<boolean>
