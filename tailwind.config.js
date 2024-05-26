/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        morado: "#6d28d9",
        grisClaro: "#F4F6FB",
        grisOscuro: "#ACACAD",
        negro: '#000'
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
