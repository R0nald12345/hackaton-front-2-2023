/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        'color-fondo': '#C4F0B0',
        'color-green-oficial': '#1F9B3A',
        'color-input-fondo':'#D9D9D9'
      },
    },
  },
  plugins: [],
}

