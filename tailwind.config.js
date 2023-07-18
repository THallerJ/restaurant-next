/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hocs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/header/Header",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#252A34",
        offwhite: "#E8F3F1",
        primary: "#FF2E63",
        second: "#C0DBEA",
        third: "#E9B9D2",
        fourth: "#EAD1D9",
      },
      screens: {
        xs: "450px",
        xsm: "500px",
        sm: "640px",
        md: "867px",
        lg: "1066px",
        xl: "1280px",
        xxl: "1633px",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        bebas: ["var(--font-bebas)"],
      },
    },
  },
  plugins: [],
};
