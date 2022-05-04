module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#1b0a26',
        darkTxt: '#f0f0f0',
        lightTxt: '#242424',
        primary: '#3e1858',
        primaryLight: '#8535bf',
        secondary: '#ffd921',
        tertiary: '#e88858',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
    fontFamily: {
      header: ['"Coolvetica"', 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tw-elements/dist/plugin')],
}
