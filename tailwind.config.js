module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.js',
    './styles/*.css',
    './components/**/*.js',
    './components/*.js',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'serif': ['Editorial New', 'Georgia', 'serif'],
      'sans': ['Favorit', 'Arial', 'sans-serif'],
      'book': ['Favorit Book', 'Arial', 'sans-serif'],
      'display': ['Plaak', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    fontSize: {
      '2xs': '.625rem', // 10px
      'xs': '.6875rem', // 11px
      'sm': '.8125rem', // 14px
      'base': '1rem', // 16px 
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5rem', // 96px
    },
    extend: {
      colors: {
        'black': '#1a1a1a',
        'white': '#FFF',
        'off-white': '#f7f7f5',
        red: {
          light: '#ffb288',
          DEFAULT: '#db4623',
          dark: '#ce8860',
        },
      },
      lineHeight: {
        'negative': '0.825'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}