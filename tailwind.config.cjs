/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          900: "#3BA55D"
        }
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
