import type { Config } from 'tailwindcss';

const noratoPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--norato-color-brand-primary)',
        secondary: 'var(--norato-color-brand-secondary)',
        surface: 'var(--norato-color-surface-default)',
        page: 'var(--norato-color-surface-page)',
        foreground: 'var(--norato-color-text-primary)',
        muted: 'var(--norato-color-text-secondary)',
        border: 'var(--norato-color-border-default)',
        focus: 'var(--norato-color-focus)',
        success: 'var(--norato-color-success)',
        error: 'var(--norato-color-error)',
      },
      fontFamily: {
        body: ['var(--norato-font-body)'],
        heading: ['var(--norato-font-heading)'],
      },
      borderRadius: {
        card: 'var(--norato-radius-card)',
        control: 'var(--norato-radius-control)',
      },
      spacing: {
        'norato-1': 'var(--norato-space-1)',
        'norato-2': 'var(--norato-space-2)',
        'norato-3': 'var(--norato-space-3)',
        'norato-4': 'var(--norato-space-4)',
        'norato-6': 'var(--norato-space-6)',
        'norato-8': 'var(--norato-space-8)',
        'norato-12': 'var(--norato-space-12)',
        'norato-16': 'var(--norato-space-16)',
      },
    },
  },
};

export default noratoPreset;
