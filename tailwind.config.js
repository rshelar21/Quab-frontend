/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        theme_color : {
          dark : "#191d28",
          gray_light : "#2e3241",
          light_blue : "#5dc7c2",
        }
      }
    },
  },
  plugins: [],
}