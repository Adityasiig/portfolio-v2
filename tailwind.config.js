/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080D14',
        surface: '#0D1520',
        card: '#0F1A27',
        border: '#1A2840',
        'border-bright': '#1E3A5F',
        accent: '#00FF9C',
        'accent-dim': '#00CC7A',
        'accent-muted': 'rgba(0,255,156,0.1)',
        muted: '#4A6080',
        subtle: '#7890A8',
        text: '#E8F0F8',
      },
      boxShadow: {
        glow: '0 0 30px rgba(0,255,156,0.3), 0 0 80px rgba(0,255,156,0.1)',
        'glow-sm': '0 0 12px rgba(0,255,156,0.25)',
        card: '0 8px 32px rgba(0,0,0,0.5)',
        'card-hover': '0 20px 48px rgba(0,0,0,0.6), 0 0 20px rgba(0,255,156,0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

