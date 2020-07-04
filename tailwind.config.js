module.exports = {
  purge: {
    content: [
      "./src/**/**/*.js", 
      "./public/index.html"],
  },
  theme: {
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
        // => @media (prefers-color-scheme: dark) { ... }
      }
    }
  },
  variants: {},
  plugins: [],
}
