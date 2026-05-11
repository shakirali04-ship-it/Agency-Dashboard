/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          500: '#4361ee',
          600: '#3451d1',
          700: '#2741b4',
          900: '#1a2a7a',
        },
        surface: {
          0: '#ffffff',
          1: '#f8f9fc',
          2: '#f0f2f8',
          3: '#e4e8f0',
        },
        ink: {
          primary: '#0d1117',
          secondary: '#3d4556',
          tertiary: '#6b7592',
          muted: '#9ba3be',
        }
      }
    }
  },
  plugins: [],
}
