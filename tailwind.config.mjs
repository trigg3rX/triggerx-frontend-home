/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px", // Extra small devices (phones)
      sm: "640px", // Small devices (tablets)
      md: "768px", // Medium devices (landscape tablets)
      lg: "1024px", // Large devices (laptops/desktops)
      xl: "1280px", // Extra large devices
      "2xl": "1536px", // 2X large devices
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sharpGrotesk: ["var(--font-sharp-grotesk)", "sans-serif"],
        actayWide: ["var(--font-actay-wide-bold)", "sans-serif"],
        actay: ["var(--font-actay-regular)", "sans-serif"],
      },
    },
  },

  plugins: [],
};
