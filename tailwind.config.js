const dafaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      sans: ['"Roboto Slab"', ...dafaultTheme.fontFamily.sans],
      helveticaNeue: ['"Helvetica Neue"'],
      helveticaLTStd: ['"Helvetica LT Std"'],
    },
    extend: {},
  },
  plugins: [],
}
