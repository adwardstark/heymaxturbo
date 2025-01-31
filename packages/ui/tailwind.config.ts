import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        tertiary: "var(--tertiary)",
        card: "var(--card)",
        tile: "var(--tile)",
        shopee: "var(--shopee-color)",
        lazada: "var(--lazada-color)",
        handm: "var(--h-and-m-color)",
        fave: "var(--fave-color)",
        uniqlo: "var(--uniqlo-color)",
        amazonsg: "var(--amazon-sg-color)",
        fairprice: "var(--fair-price-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
