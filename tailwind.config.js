module.exports = {
  purge: {enabled: true, content: ['./src/index.html', './src/app/**/**/*.{js,ts,jsx,tsx,html}']},
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
