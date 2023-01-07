/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1280px',
    //   '2xl': '1440px',
    //   'sm-only': { min: '480px', max: '767px' },
    // },
    extend: {
      colors: {
        primary: {
          main: 'hsl(217, 91%, 60%)',
          light: 'hsl(207, 90%, 61%)',
          dark: 'hsl(217, 91%, 40%)',
        },
        secondary: {
          main: 'hsl(12, 76%, 61%)',
          light: 'hsl(27, 87%, 67%)',
          dark: 'hsl(12, 88%, 59%)',
        },
        success: { main: '#66bb6a', light: '#81c784', dark: '#388e3c' },
        warning: { main: '#ffa726', light: '#ffb74d', dark: '#f57c00' },
        danger: { main: '#f44336', light: '#e57373', dark: '#d32f2f' },
        info: { main: '#29b6f6', light: '#90caf9', dark: '#0288d1' },

        light: {
          primary: 'rgba(255, 255, 255)',
          secondary: 'rgba(255, 255, 255, 0.7)',
          off: 'rgba(255, 255, 255, 0.5)',
        },
        dark: {
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.6)',
          off: 'rgba(0, 0, 0, 0.38)',
        },

        background: { light: '#fff', dark: '#121212' },
        divider: {
          light: 'rgba(0, 0, 0, 0.12)',
          dark: 'rgba(255, 255, 255, 0.12)',
        },

        // accent: {
        //   main: '#274754',
        //   light: '#1FB2A6',
        //   dark: 'hsl(204, 100%, 5%)',
        // },
        // neutral: { main: '#', light: '#', dark: '#' },
        // base: { main: '#', light: '#', dark: '#' },
      },
    },
  },
  plugins: [],
};
