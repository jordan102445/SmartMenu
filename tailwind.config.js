/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#070807",
        charcoal: "#111312",
        ember: "#ff8a3d",
        saffron: "#ffd166",
        herb: "#63d297",
        coral: "#ff5f6d",
      },
      boxShadow: {
        glow: "0 24px 90px rgba(255, 138, 61, 0.26)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
    },
  },
  plugins: [],
};
