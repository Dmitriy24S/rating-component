/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        // white: '#ffffff',
        purple: '#3f3cbb',
        orange: '#fb7413',
        'orange-light': '#fc7d23',
        gray: '#7c8798',
        'gray-dark': '#959eacbe'
      },
      // fontWeight: {
      //   header: '700'
      // },
      // fontSize: {
      //   header: '2rem'
      // },
      fontWeight: {
        header: '700'
      },
      fontSize: {
        header: 'font-size: 1.5rem;line-height: 2rem;'
      }
    }
  },
  plugins: []
}
