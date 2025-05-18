/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ini penting untuk mendeteksi class Tailwind
  ],
  theme: {
    extend: {
      // Colors used in the project
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E"
      }
    },
  },
  plugins: [],
}