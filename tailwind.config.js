module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mon: 'Montserrat',
      },
      backgroundImage: {
        // 'signup01': "url('./images/signup01.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
