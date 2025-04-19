import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        text: "var(--text)",
        "text-light": "var(--text-light)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  safelist: [
    'bg-blue-500/20', 
    'bg-blue-400/30', 
    'text-blue-200',
    'text-blue-800',
    'text-blue-600',
    'bg-blue-600',
    'bg-blue-700',
    'bg-gradient-to-r',
    'from-blue-600',
    'to-blue-700',
    'to-blue-800',
    'hover:bg-blue-700',
    'hover:shadow-blue-500/30',
  ],
  plugins: [],
};
export default config;
