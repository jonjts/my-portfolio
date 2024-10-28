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
        background: "var(--gray-900)",
        foreground: "var(--white)",
        'gray-900': 'var(--gray-900)',
        'gray-800': 'var(--gray-800)',
        'gray-700': 'var(--gray-700)',
        'gray-500': 'var(--gray-500)',
        'gray-400': 'var(--gray-400)',
        'gray-300': 'var(--gray-300)',
        'purple-100': 'var(--purple-100)',
        'purple-300': 'var(--purple-300)',
        'purple-400': 'var(--purple-400)',
        'purple-500': 'var(--purple-500)',
      },
    },
  },
  plugins: [],
};
export default config;
