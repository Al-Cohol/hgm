/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          600: '#7c3aed',
          700: '#6d28d9',
        }
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
