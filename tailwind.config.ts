import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // pciWhite: "#f0ede0",
        // pciEbony: "#0a0a00",
        // pciRed: "#970c10",
        // pciGray: "#918e80",

        pciWhite: "#a8bbb0",
        pciEbony: "#0a0a00",
        pciRed: "#e63921",
        pciGray: "#ebe8e0",

      },
    },
  },
  plugins: [],
});
export default config;
