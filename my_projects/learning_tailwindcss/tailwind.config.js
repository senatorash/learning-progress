/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      xs: "450px",
      sm: "578px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1440px",
    },
  },
  plugins: [],
}

