/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_brand_01: "#B6F2EC",
        color_brand_02: "#F2E5D5",
        color_brand_03: "#40200E",
        color_brand_03_tr1: "#40200eb8",
        color_brand_03_tr2: "#40200e75",
        color_brand_04: "#BF0404",
        color_brand_05: "#A69C9C",
        color_bg: "#F3F2F2",
      },
    },
  },
  plugins: [],
};
