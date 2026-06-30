import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        norato: ['Vazirmatn', 'Tahoma', 'Arial', 'sans-serif'],
        'norato-body': ['Vazirmatn', 'Tahoma', 'Arial', 'sans-serif'],
        'norato-display': ['Estedad', 'Vazirmatn', 'Tahoma', 'Arial', 'sans-serif'],
      },
      colors: {
        norato: {
          primary: '#FDC101',
          focus: '#FDC101',
          interactive: '#356AE6',
          'text-primary': '#1A1A1A',
          'text-secondary': '#7D7D7D',
          placeholder: '#A1A1A1',
          border: '#E8E8E8',
          surface: '#FFFFFF',
          background: '#F7F7F7',
          success: '#2EAD6B',
          error: '#EF5A5A',
          ink: '#1A1A1A',
          muted: '#7D7D7D',
          subtle: '#A1A1A1',
          line: '#E8E8E8',
          soft: '#F7F7F7',
          panel: '#FFFFFF',
          field: '#FFFFFF',
          primaryDark: '#FDC101',
          danger: '#EF5A5A',
        },
      },
      spacing: {
        'component-compact': '6px',
        'component-xs': '8px',
        'component-sm': '12px',
        'component-md': '16px',
        'mobile-gutter': '18px',
        'layout-22': '22px',
        icon: '24px',
        'layout-md': '24px',
        'layout-lg': '32px',
        control: '36px',
        'layout-46': '46px',
        'layout-56': '56px',
        tag: '22px',
        'icon-sm': '18px',
      },
      boxShadow: {
        norato: '0 8px 22px rgba(48, 48, 48, 0.08)',
        'norato-sm': '0 3px 10px rgba(48, 48, 48, 0.06)',
      },
      borderRadius: {
        norato: '12px',
        section: '12px',
        pill: '25px',
      },
      fontSize: {
        placeholder: '12px',
        control: '13px',
      },
    },
  },
  plugins: [],
} satisfies Config
