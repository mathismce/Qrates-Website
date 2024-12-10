import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#FFF804",
        green: "#81836C",
        purple: "#E280FF",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#E4E5DE"
      },
      fontFamily: {
        'noto-sans': ['Noto Sans'],
        'noto-extra-bold': ['Noto Sans ExtraBold'],
        'noto-bold': ['Noto Sans Bold'],

      },
    },
  },
  plugins: [],
} satisfies Config;
