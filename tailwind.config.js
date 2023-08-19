/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3F3CFF' ,
        secondary: '#64748b' ,
        dark: '#0f172a' ,
        new: '#0B0B1F' ,
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

