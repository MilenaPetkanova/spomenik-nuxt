module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#A368FF', // lavender-indigo
        'secondary-color': '#CB68FF', // heliotrope
        'tertiary-color': '#40B0D5', // blue
        'dark-color': '#0E0E2C', // eerie-black
        'neutral-color': '#8C8CA1', // grey
        'light-color': '#FAFCFE', // ghost-white
        'success-color': '#68FFC2', // aquamarine
        'error-color': '#FF6868', // pastel-red
        // dark - #19224C
        // primary - #CD8AFC
      },
      fontFamily: {
        'montserrat': ['montserrat', 'sans-serif'],
        'nunito': ['nunito', 'sans-serif'],
      },
      fontSize: {
        'xxs': '10px',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
