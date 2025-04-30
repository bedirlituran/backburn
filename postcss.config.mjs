const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
