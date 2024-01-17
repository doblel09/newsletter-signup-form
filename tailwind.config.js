/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(4, 100%, 67%)',
        dsgrey: 'hsl(234, 29%, 20%)',
        grey: 'hsl(231, 7%, 60%)',
        activo: 'linear-gradient(90deg, rgba(203,85,150,1) 0%, rgba(255,52,38,1) 36%, rgba(255,57,43,1) 100%)'
      }
    },
    fontFamily: {
      Roboto: ['Roboto']
    },
    backgroundSize: {
      'full': '100%',
      'desk': '100% 540px'
    }
  },
  plugins: [],
}

