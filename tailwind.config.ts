import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  lib: ["es2016"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    listStyleType: {
      emptyCircle: "circle",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // pciWhite: "#f0ede0",
        // pciEbony: "#0a0a00",
        // pciRed: "#970c10",
        // pciGray: "#918e80",

        pciWhite: "#f0ede0",
        pciEbony: "#433f30",
        pciRed: "#970c10",
        pciGray: "#918e80",
        pciDark: "#181611"
      },
    },
  },
  plugins: [],
});
export default config;
