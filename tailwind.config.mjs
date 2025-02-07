/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Define custom breakpoints
    screens: {
      xs: "375px", // Extra small devices (phones)
      sm: "640px", // Small devices (tablets)
      md: "768px", // Medium devices (landscape tablets)
      lg: "1024px", // Large devices (laptops/desktops)
      xl: "1280px", // Extra large devices
      "2xl": "1536px", // 2X large devices

      // You can also add custom breakpoints like this:
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        actayRegular: ["Actay"],
        Grotest15: ["Grotest"],
        actayWide: ["ActayWide"],
      },
    },
  },

  plugins: [],
};
