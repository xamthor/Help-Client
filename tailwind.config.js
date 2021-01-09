module.exports = {
  purge: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern':"url('../src/assets/background-2.png')",
      })
    },
    fontFamily:{
      'login-logo':['Nunito']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
