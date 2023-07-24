/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    colors: {
      'black': '#18181B',
      zink: {
        100: '#F4F4F5',
        200: '#E4E4E7',
        400: '#A1A1AA',
        500: '#71717A',
        50: '#FAFAFA'
      },
      primary: {
        500: '#6366F1',
        600: '#4F46E5'
      },
      secondary: {
        200: '#BAE6FD',
        900: '#0C4A6E'
      }
    },
    fontSize: {
      xxs: '12px',
      xs: '14px',
      '2xs': '16px',
      '3xs': '18px',
      '4xs': '20px',
      '5xs': '24px',
    },
    extend: {

      boxShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
