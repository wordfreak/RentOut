module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252B42",
        orange: "#FF6E41",
        yellow: "#FDB839",
        text: "#737373 ",
        pink: " #FAB8C5",
        dim: "#D8D8D8;",
        very_dim: "#9A9999",
      },
      fontSize: {
        "1xl": "2.50rem",
      },

      letterSpacing: {
        tighter: "0.2px",
      },

      screens: {
        sm: { min: "432px" },
      },
      borderRadius: {
        ten: "10px",
      },
    },
  },
  plugins: [],

  variants: {
    appearance: ["responsive", "hover", "focus"],
  },
};
