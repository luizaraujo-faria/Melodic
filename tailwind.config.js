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
          width: '50%',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px',
          border: '1px solid #fff',
          borderRadius: '50px'
        },
      })
    }
  ],
}

