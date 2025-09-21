export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './error.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#0079FF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        md: '8px',
        xl: '20px',
      },
    },
  },
  plugins: [],
}
