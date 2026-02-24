/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ieee-blue': '#006699',
        'ieee-navy': '#0a0f1e',
        'ieee-dark-card': '#0d1526',
        'ieee-border': '#1a2a4a',
      },
      boxShadow: {
        'ieee-glow': '0 0 20px rgba(0,102,153,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
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
