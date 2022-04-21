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
        secondary: '#ffd921',
        tertiary: '#e88858',
      },
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      header: ['"Coolvetica"', 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
