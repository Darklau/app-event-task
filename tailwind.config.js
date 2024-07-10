/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '360px',
        '2xxs': '420px',
        xs: '520px',
        sm: '640px',

        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        lg: '16px',
        xl: '20px',
      },
      borderRadius: {
        md: '12px'
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      colors:{
        accent: {
          main: '#9370DB',
          hover: '#6A5ACD'
        },
        neutral: {
          0: '#FFF',
          100: '#DDA0DD',
          500: '#BA55D3',

        }

      }
    }
  },
  plugins: [],
}

