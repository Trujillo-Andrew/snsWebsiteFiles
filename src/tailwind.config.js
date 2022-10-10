/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentcolor',
        white: '#ffffff',
        isabelline: '#EDEDE9',
        paleSilver: '#D6CCC2',
        linen: '#F5EBE0',
        champagnePink: '#E3D5CA',
        desertSand: '#D5BDAF',
        trujilloMediaBrandColor: '#34aeef',

        
  
      },
      fontFamily: {
        secondaryHeader: "'Ibarra Real Nova', serif",
        primaryHeader: "'Rochester', cursive",
        bodyText: "'Quicksand', sans-serif",
     
      }
    },
  },
  plugins: [],
}
