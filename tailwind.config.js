/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#000066',
          mustard: '#BF9903',
        }
      },
      keyframes: {
        'spin-once': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-once': 'spin-once 0.6s ease-in-out',
      }
    },
  },
  plugins: [],
}
