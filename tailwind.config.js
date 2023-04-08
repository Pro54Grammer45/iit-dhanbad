/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        limegreen: { "100": "#34c700", "200": "#02c315" },
        black: "#f4f4f5",
        gray: {
          "100": "rgba(255, 255, 255, 0.62)",
          "200": "rgba(255, 255, 255, 0.51)",
        },
      },
      fontFamily: {
        play: "Play",
        "crete-round": "'Crete Round'",
        poppins: "Poppins",
        lusitana: "Lusitana",
      },
      borderRadius: {
        "37xl": "56px",
        "30xl": "49px",
        "195xl": "214px",
        mini: "15px",
        "3xs": "10px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "7xl": "26px",
      "91xl": "110px",
      "21xl": "40px",
      "13xl": "32px",
      "121xl": "140px",
    },
  },
  corePlugins: { preflight: false },
};
