import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        norato: ['Vazirmatn', 'IRANSans', 'Tahoma', 'Arial', 'sans-serif'],
      },
      colors: {
        norato: {
          ink: '#303030',
          muted: '#7D7D7D',
          subtle: '#A1A1A1',
          line: '#D9D9D9',
          soft: '#F3F3F3',
          panel: '#FFFFFF',
          field: '#FAFAFA',
          primary: '#2F80ED',
          primaryDark: '#1D5FB8',
          success: '#2EAD6B',
          danger: '#EF5A5A',
          warning: '#F2B84B',
        },
      },
      boxShadow: {
        norato: '0 8px 22px rgba(48, 48, 48, 0.08)',
        'norato-sm': '0 3px 10px rgba(48, 48, 48, 0.06)',
      },
      borderRadius: {
        norato: '6px',
      },
    },
  },
  plugins: [],
} satisfies Config
