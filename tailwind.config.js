/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'agency-blue': '#1E3A8A',
        'agency-white': '#F0F4EF',
        'agency-orange': '#ED7445'
      },
      padding: {
        'padding-grid': '90px',
      }
    },
  },
  plugins: [],
}

