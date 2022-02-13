module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        base: "#333333",
        nav: "#292929",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
