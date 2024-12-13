import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          800: '#1F2937',
          900: '#111827',
        },
        'indigo': {
          400: '#818CF8',
          600: '#4F46E5',
        },
        'violet': {
          600: '#7C3AED',
        },
        'blue': {
          600: '#2563EB',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
