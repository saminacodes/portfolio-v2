module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        green: {
          light: "#cbe7da",
          DEFAULT: "#96ceb4",
          dark: "#39795b",
        },
        red: {
          light: "#ffb8b5",
          DEFAULT: "#ff6f69",
          dark: "#b50600",
        },
        yellow: {
          light: "#ffe5ad",
          DEFAULT: "#ffcc5c",
          dark: "#ad7600",
        },
        purple: {
          light: "#cccbe7",
          DEFAULT: "#9896ce",
          dark: "#3b3979",
        },
        blue: {
          light: "#b3d5fc",
          DEFAULT: "#67aaf9",
          dark: "#0753a9",
        },
      },
      fontFamily: {
        sans: ["Share Tech", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
