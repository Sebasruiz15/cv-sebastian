export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        ink: { 950: "#050A14", 900: "#0A1628", 800: "#0F2040", 700: "#1A3158" },
        electric: { 400: "#60A5FA", 500: "#3B82F6", 600: "#2563EB", 700: "#1D4ED8" },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
      },
    },
  },
  plugins: [],
};
