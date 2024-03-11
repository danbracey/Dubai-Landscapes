/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/package-name/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/src/assets/uk_flag.webp")',
      },
    }
  },
  plugins: [require("@tailwindcss/forms")],
}
