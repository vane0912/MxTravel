/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'agency-blue': '#2B6CAE',
        'agency-white': '#EEEEEE',
        'agency-orange': '#FF6E35'
      },
      padding: {
        'padding-grid': '5.6rem',
      },
      dropShadow: {
        'custom': [
          '1px 2px rgba(0, 0, 0, 0.2)'
        ]
      },
      width: {
        'our_services': '4.3rem',
        'why_choose_us': '35rem'
      },
      height:{
        'our_services': '4.3rem',
        'screen-3/4': '75vh'
      },
      borderRadius: {
        '4xl': '1.8rem'
      }
    },
  },
  plugins: [],
}

