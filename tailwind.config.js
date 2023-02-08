module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      h1: "36px",
      h2: "32px",
      h3: "24px",
      h4: "20px",
      h5: "16px",
      h6: "14px",
      caption: "12px",
    },
    screens: {
      mobile: "320px",
      tablet: "786px",
      laptop: "1024px",
    },
    fontFamily: {
      clash: ["Clash Display", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#88CFF9",
        dark_primary: "#43B6FB",
        light_grey: "#88CFF9",
        border_grey: "#88CFF9",
        border_dark: "#88CFF9",
        invisible_rgba: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
