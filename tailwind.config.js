/// ** @type {import('tailwindcss').Config} **/

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        verydarkcyan: " hsl(183, 100%, 15%)",
        Darkgrayishcyan: "hsl(186, 14%, 43%)",
        Grayishcyan: "hsl(184, 14%, 56%)",
        Lightgrayishcyan: "hsl(185, 41%, 84%)",
        Verylightgrayishcyan: "hsl(189, 41%, 97%)",
        White: " hsl(0, 0%, 100%)",
        Strongcyan: "hsl(172, 67%, 45%)",
      },
    },
  },
  plugins: [],
};
