/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{md,html}",
    "./layouts/**/*.{html,js}",
    "./themes/pehtheme-hugo-main/layouts/**/*.{html,js}",
    "./themes/pehtheme-hugo-main/assets/js/**/*.{js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
