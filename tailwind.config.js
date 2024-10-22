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
        'agency-white': '#EEEEEE',
        'agency-orange': '#FF6E35'
      },
      padding: {
        'padding-grid': '90px',
      },
      dropShadow: {
        'custom': [
          '0 10px 8px rgb(0 0 0 / 0.1)',
          '0px 2px rgba(0, 0, 0, 0.4)'
        ]
      },
      width: {
        'our_services': '4rem',
      }
    },
  },
  plugins: [],
}

