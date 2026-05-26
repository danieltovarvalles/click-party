/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Roboto'],
      //   decimal: ['Decimal'],
      //   'decimal-medium': ['Decimal Medium', 'Decimal', 'sans-serif'],
      // },
      colors: {
        'primary': "#f43f5e",
        'secondary': "#0DA8A8",
        'black-brand': "#2E2F2F",
        'white-brand': "#F7F7F7",

        'primary-light': "#ffe4e6",
        'secondary-light': "#dcfffa",

        'yellow-brand': "#FBBF24",
        'blue-brand': "#38BDF8",
        'orange-brand': "#FB923C",
        'pink-brand': "#F472B6",
        'purple-brand': "#C084FC",
    },
  },  
  },
  plugins: [],
};
