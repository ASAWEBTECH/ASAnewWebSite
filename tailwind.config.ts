import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        shine: 'shine 0.5s ease-in-out',
      },
      skew: {
        15: '15deg',
      },
    },
  },
  plugins: [],
} satisfies Config;