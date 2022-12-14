/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          900: "#3BA55D"
        },
        gray: {
          1000: "#111827"
        }
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
