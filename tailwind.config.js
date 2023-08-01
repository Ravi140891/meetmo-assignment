/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      man: ["Manrope", "sans-serif"],
    },
    boxShadow: {
      xl: ["-2px -2px 7px 0px grey", "1px -4px 7px -1px lightgrey"],
    },
    backgroundImage: {
      custom: [
        "linear-gradient(#1E2021,#202124), radial-gradient(#37383D,#1F2023), linear-gradient(#D9D9D9,#FFFFFF)",
      ],
      button: [
        "linear-gradient(#000000,#FFFFFF), radial-gradient(#545659,#232629)",
      ],
      borderColor: "linear-gradient(#30E5D3,#6B48FF)",
    },
  },
  plugins: [],
};
