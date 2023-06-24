/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#051027',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'pink-squid-game': '#FD7293',
        'blue-squid-game': '#6CA4D5',
      },
      boxShadow: {
        card: '0px 0px 70px -15px #211e35',
        header: '0px 0px 70px -15px #FD7293',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'bounce-slow': 'ease infinite alternate 2s',
      },
    },
  },
  plugins: [require('daisyui')],
}
