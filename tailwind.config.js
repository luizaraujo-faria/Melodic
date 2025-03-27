/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  mode: 'jit',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001f49',
      },
      fontFamily: {
        afacad: ['"Afacad Flux"', 'sans-serif']
      },
      backgroundImage: {
        banner: 'url(./src/assets/img/banner.webp)'
      }
    },
  },
  plugins: [
    function({addComponents}){
      addComponents({
        '.flex-box': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.sections': {
          width: '100%',
          height: '100vh'
        },
        '.pages': {
          width: '100%',
          height: '50px',
          background: '#fff'
        },
        '.login-option': {
          width: '60%',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #a0a0a0',
          borderRadius: '50px',
          position: 'relative',
          cursor: 'pointer'
        },
        '.login-option:hover': {
          border: '1px solid #fff'
        },
      })
    }
  ],
}

