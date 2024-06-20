import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/games/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        xbox: "#107b10",
        playstation: "#0070d1",
        nintendo: "#e60012",
        pc: "#6b7280",
        sega: "#1b3360",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
export default config;
