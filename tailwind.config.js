/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e5a04c',
        secondary: '#65a30c'
      }
    }
  },
  plugins: []
}
