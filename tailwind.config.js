/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#4f4f4f",
        "custom-dark": "#272c41",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #4f4f4f, #272c41)",
      },
    },
  },
  plugins: [],
};
