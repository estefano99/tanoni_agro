/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        "clamp-xs": ["clamp(1rem, 2vw, 1.5rem)", "1.2"],
        "clamp-sm": ["clamp(1.5rem, 3vw, 2.5rem)", "1.4"],
        "clamp-md": ["clamp(2rem, 4vw, 3rem)", "1.6"],
        "clamp-lg": ["clamp(2.5rem, 5vw, 4rem)", "1.8"],
        "clamp-xl": ["clamp(3rem, 6vw, 5rem)", "2"],
      },
      backgroundImage: {
        "negociaciones-image": "url('/src/images/negociaciones.jpg')",
      },
      colors: {
        textDarkGray: "#212A37",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
