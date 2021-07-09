module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGrey: "#292929",
        pastelGreen: "#96ceb4",
        pastelRed: "#ff6f69",
        pastelYellow: "#ffcc5c",
        pastelPurple: "#9896ce",
        pastelBlue: "67aaf9",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
