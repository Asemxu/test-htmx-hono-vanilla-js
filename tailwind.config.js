/** @type {import('tailwindcss').Config} */
module.exports = {
  // safelist: [
  //   {
  //     pattern: /./,
  //     variants: ['sm','md', 'lg', 'xl','2xl'], // you can add your variants here
  //   },
  // ],
  content: ['./src/**/*.{js,css}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

