import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  jsxFramework: "react",
  include: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { 100: { value: "#EA8433" } },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  hash: process.env.NODE_ENV === "production",
});
