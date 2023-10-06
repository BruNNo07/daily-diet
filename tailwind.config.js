/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-dark': '#BF3B44',
        'red-mid': '#F3BABD',
        'red-light': '#F4E6E7',
        'green-dark': '#639339',
        'green-mid': '#CBE4B4',
        'green-light': '#E5F0DB',
        'gray-1': '#1B1D1E',
        'gray-2': '#333638',
        'gray-3': '#5C6265',
        'gray-4': '#B9BBBC',
        'gray-5': '#EFF0F0',
        'gray-6': '#FAFAFA',
        'white': '#FFFFFF',

      },
    },
  },
  plugins: [],
}

