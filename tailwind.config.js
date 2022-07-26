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
        'light-color': '#FAFCFE', // ghost-white
        'neutral-color': '#8C8CA1', // grey
        'success-color': '#68FFC2', // aquamarine
        'error-color': '#FF6868', // pastel-red
        // fairy theme -> https://www.pinterest.com/pin/787848528578038259/visual-search/?x=16&y=16&w=530&h=530&cropSource=6&imageSignature=16a15b1e6bf28f2c2ed9f63f8a4e07c5 
        // 'primary-color': '#6f88fc',
        // 'secondary-color': '#a163f7',
        // 'tertiary-color': '#45e3ff',
        // 'dark-color': '#2A3950',
        // 'light-color': '#FEFFF1',
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
