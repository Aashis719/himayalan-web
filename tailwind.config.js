/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f2',
          100: '#e8e0d9', 
          200: '#d4c5b9',
          300: '#bda795',
          400: '#a68b75',
          500: '#8e7057',
          600: '#735a46',
          700: '#574536',
          800: '#3c2f26',
          900: '#231b16',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e2e8e2',
          200: '#c5d1c5',
          300: '#a3b5a3',
          400: '#809680',
          500: '#637963',
          600: '#4e604e',
          700: '#3b483b',
          800: '#283028',
          900: '#161c16',
        },
        mountain: {
          50: '#f2f4f7',
          100: '#e3e7ed',
          200: '#c6cfd9',
          300: '#a5b3c3',
          400: '#8494ab',
          500: '#667892',
          600: '#516075',
          700: '#3d4858',
          800: '#29303b',
          900: '#161c23',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
} 
