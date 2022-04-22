
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "Montserrat",
        'display': 'Fredoka One'
      },
      boxShadow: {
        'nooffset': '0 0 4px 0 rgb(0 0 0 / 0.1), 0 0 8px -3px rgb(0 0 0  / 0.1)'
      }
    },

    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
