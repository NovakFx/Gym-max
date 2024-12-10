const { animations } = require("framer-motion");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        slideOut: 'slideOut 1s ease-in backwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      
      colors: {
        customGrey: 'rgba(198, 198, 199, 1)',
        customYellow: 'rgba(254, 207, 99, 1)',
        customBlack: 'rgba(34, 34, 34, 1)',
        customOrage: 'rgba(255, 118, 5, 1)',
        customWhite:'rgba(217, 217, 217, 0.2)',
        customdarkBlue:'rgba(0, 7, 21, 1)',

        google: {
          blue: 'rgba(66, 133, 244, 1)',
          red: 'rgba(234, 67, 53, 1)',
          yellow: 'rgba(251, 188, 5, 1)',
          green: 'rgba(52, 168, 83, 1)',
        },

      },
      fontFamily: {
        oswald: ['oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

