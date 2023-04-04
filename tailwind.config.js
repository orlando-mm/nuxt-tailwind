/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {},
    fontFamily: {
      manrope: ['Manrope', 'sans-serif']
    },
    colors: {
      primary: '#349898',
      secondary: '#9BDAD6',
      yellow: '#FDBD31',
      'yellow-light': '#F6F5F1',
      'gray-dark': '#363D47',
      gray: '#ADAFA6',
      white: '#ffffff',
      black: '#000000'
    }
  }
};
