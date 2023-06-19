/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-1": "radial-gradient()",
      },
      colors: {
        c1: "#141519",
        c2: "#262f38",
        c3: "#959ca6",
        c4: "#ce824e",
      },
      fontSize: {
        sm: "15px",
      },
      fontFamily: {
        overpass: "Overpass,sans,serif",
      },
    },
    screens: {
      xs: { max: "359px" },
      sm: { max: "767px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        default: {
          primary: "#fb7413",
          // "primary-content": "#fff",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          // "--border-btn": 0,
        },
      },
      {
        dark: {
          primary: "#641ae6",
          secondary: "##d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#1d232a",
          info: "#006ead",
          success: "#00ff19",
          warning: "#fed103",
          error: "#f87272",
          // "--border-btn": 0,
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "default",
  },
};
