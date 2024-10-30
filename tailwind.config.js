/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#26c883',
        secondary: '#61bb95'
      },
      animation: {
        fall: 'fall 0.5s ease-in-out',
        jump: 'jump 0.5s ease-in-out'
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(500px)' }
        },
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-200px)' },
          '100%': { transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
