/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ieee-teal':   '#006ea9',
        'ieee-bright': '#0099eb',
        'ieee-light':  '#76c1fc',
        'ieee-pale':   '#bce2ff',
        'ieee-royal':  '#0d1b8e',
        'ieee-navy':   '#000247',
        'ieee-dark':   '#004b86',
        'ieee-gray':   '#dddddd',
        'ieee-card':   '#f0f7ff',
        'ieee-border': '#bce2ff',
      },
      fontFamily: {
        'bitter': ['Bitter', 'Georgia', 'serif'],
        'lato':   ['Lato', '"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        'ieee-glow': '0 4px 24px rgba(0,110,169,0.18)',
        'ieee-card': '0 2px 12px rgba(0,110,169,0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
