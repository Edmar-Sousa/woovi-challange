/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',

        gray: {
          100: '#AFAFAF',
          200: '#E5E5E5',
          300: '#4D4D4D',
        },

        green: {
          100: '#F4FBF9',
          300: '#03D69D',
        },

        blue: {
          300: '#133A6F',
        }
      }
    },
  },
  plugins: [],
}

