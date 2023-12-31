/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        macherie: ["Macherie", "fallback-font-name"],
      },
      colors: {
        "custom-orange": "#FF5722",
        "custom-black": "#1A1A1A",
      },
    },
  },
  plugins: [],
};
