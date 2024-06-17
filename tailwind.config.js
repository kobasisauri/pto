/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#9D71FD",
      title: "#1A0745",
      init: "#5F517D",
      white: "#fff",
      "btn-secondary": "#543E81",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      0.5: "6px",
      1: "8px",
      1.5: "10px",
      2: "12px",
      2.5: "15px",
      3: "16px",
      3.5: "20px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      xl: ["1.125rem", "28.8px"],
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.25rem",
      "5xl": "4rem",
    },
  },
  plugins: [],
};
