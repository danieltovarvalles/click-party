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
        'primary': "#E6546B",
        'secondary': "#0DA8A8",
        'black-brand': "#323232",

        'white-brand': "#F4F4F5",
        // 'blue': "#086EC2",
        // 'yellow': "#ECBE5C",
        'primary-light': "#F3AAB5",
        'secondary-light': "#C5E6E6",
    },
  },  
  },
  plugins: [],
};
