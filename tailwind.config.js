/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'fira-sans': ["Fira Sans", "sans-serif"],
        'exo-2': ["Exo 2", "system-ui"] 
       },
      backgroundImage: {
        'hero-image': "url('../src/images/bg-img.png')",
      },
    },
  },
  plugins: [],
}

