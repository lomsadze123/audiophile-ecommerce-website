/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skinColor: "#FBAF85",
        skinColorBold: "#D87D4A",
        lightBlack: "#101010",
        mediumBlack: "#000",
        almostGrey: "#F1F1F1",
        almostWhite: "#FAFAFA",
        borderGrey: "#CFCFCF",
        red: "#CD2C2C",
      },
      backgroundImage: {
        mobileHomeHeader: "url('assets/home/mobile/image-header.jpg')",
        mobileZX7: "url('assets/home/mobile/image-speaker-zx7.jpg')",
        tabletZX7: "url('assets/home/tablet/image-speaker-zx7.jpg')",
        desktopZX7: "url('assets/home/desktop/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [],
};
