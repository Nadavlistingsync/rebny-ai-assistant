/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Blue-600
          dark: '#1d4ed8',    // Blue-700
          light: '#3b82f6',   // Blue-500
          '200': '#bfdbfe',   // Blue-200 for hover states
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 