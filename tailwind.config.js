module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'offwhite': '#FBF8F1',
        'darkp': '#5C88CE',
        'lightp': '#A3B9D8',
      },
      textColor: {
        'offwhite': '#FBF8F1',
        'darkp': '#5C88CE',
        'lightp': '#A3B9D8',
      },
      fontFamily: {
        'serif': ['Butler']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
