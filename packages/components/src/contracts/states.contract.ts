export type NoratoState = 'default' | 'hover' | 'pressed' | 'focus' | 'selected' | 'disabled' | 'loading' | 'error' | 'empty' | 'success';

export interface StateContract { applicable: NoratoState[]; recovery?: string; }
