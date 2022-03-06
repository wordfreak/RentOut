const plugin = require("tailwindcss/plugin");
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
        footer: "#fbfbfb",
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
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("label-checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`); // escape class
          const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
          return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
        });
      });
    }),
  ],

  variants: {
    extend: {
      backgroundColor: ["label-checked"],
      border: ["label-checked"],
      appearance: ["responsive", "hover", "focus"],
    },
  },
};
