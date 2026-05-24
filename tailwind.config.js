/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        ember: '#C8503A',
        carbon: '#0F0F0F',
        chalk: '#F6F5F3',
        linen: '#E8E6E2',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
