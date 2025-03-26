import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eeff',
          200: '#baddff',
          300: '#84c5ff',
          400: '#48a6ff',
          500: '#1a85ff',
          600: '#0066ff',
          700: '#0052d6',
          800: '#0042ab',
          900: '#003c8f',
          DEFAULT: '#1a85ff',
        },
        secondary: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c3',
          300: '#ff9f95',
          400: '#ff6b5b',
          500: '#ff3d2e',
          600: '#ff1f0d',
          700: '#e51400',
          800: '#c11300',
          900: '#a31200',
          DEFAULT: '#ff3d2e',
        },
        accent: {
          50: '#f4f8fb',
          100: '#e9f1f7',
          200: '#d3e3ef',
          300: '#b1cde2',
          400: '#88afd1',
          500: '#6992c0',
          600: '#5478b0',
          700: '#476399',
          800: '#3d527d',
          900: '#364666',
          DEFAULT: '#6992c0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elegant': '0 0 50px 0 rgba(0, 0, 0, 0.1)',
        'card': '0 0 20px 0 rgba(0, 0, 0, 0.05), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'hover': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 60px -20px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'button-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config