import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 80px rgba(255,255,255,0.08)',
        soft: '0 20px 80px rgba(15,23,42,0.18)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.15), transparent 28%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.16), transparent 28%)'
      }
    }
  },
  plugins: []
} satisfies Config
