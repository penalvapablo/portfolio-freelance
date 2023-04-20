/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      black: '#1D1D20',
      white: '#F0F0F0',
      secondary: '#EDC139',
      body: '#2F2F34',
    },
    extend: {
      dropShadow: {
        '3xl': '0px 0px 10px rgba(237, 193, 57, 1)',
      },
      screens: {
        xsm: '475px',
        ...defaultTheme.screens,
        wide: '1980px',
      },
      fontFamily: {
        title: [
          'Marcellus',
          ...defaultTheme.fontFamily.sans,
        ],
        text: [
          'Work Sans',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
