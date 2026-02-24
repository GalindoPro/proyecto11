/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C5F2D", // Example: Forest Green
        secondary: "#97BC62", // Example: Light Green
        accent: "#D4A373", // Earthy tone
      },
    },
  },
  plugins: [],
}

