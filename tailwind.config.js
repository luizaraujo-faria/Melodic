/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

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
    tailwindScrollbar,
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
        '.nav-li': {
          color: '#A3A3A3',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          cursor: 'pointer'
        },
        '.nav-li:hover': {
          color: '#fff'
        },
        '.slides': {
          width: '100%',
          height: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        },
        '.most-listened': {
          width: '100%',
          height: '120%',
          background: '#ffffff42',
          borderRadius: '5px',
          cursor: 'pointer'
        },
        '.most-listened:hover': {
          background: '#ffffff60',
        },
        '.scrollbar-body': {
          '&::-webkit-scrollbar': {
            width: '10px',
            height: '100%',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#A3A3A3',
            cursor: 'pointer',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#000000',
          },
        },
      })
    },
  ],
}

