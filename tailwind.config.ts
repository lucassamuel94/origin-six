import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem'
      },
      screens: {
        DEFAULT: '1120px'
      }
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
      heading: ['var(--font-heading)', 'serif']
    },
    colors: {
      white: colors.white,
      black: colors.black,
      primary: '#69B99D',
      secondary: '#CCF4E6',
      dark: '#0F241D',
      gray: '#767676',
      'light-gray': '#E4E4E4',
      background: '#F9F9F9',
      neutral: colors.neutral
    },
    extend: {
      spacing: {
        18: '72px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      boxShadow: {
        carousel: '0px 0px 12px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
