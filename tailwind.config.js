/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Choose one or multiple themes:
    themes: ["synthwave", "pastel", "dracula"],
    // Uncomment and set to a theme to override OS dark-mode default:
    // darkTheme: "dracula",
  },
};
