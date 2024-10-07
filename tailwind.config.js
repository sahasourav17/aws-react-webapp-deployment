/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6", // blue-500
          dark: "#60A5FA", // blue-400
        },
        secondary: {
          light: "#10B981", // emerald-500
          dark: "#34D399", // emerald-400
        },
        background: {
          light: "#FFFFFF",
          dark: "#1F2937", // gray-800
        },
        text: {
          light: "#1F2937", // gray-800
          dark: "#F9FAFB", // gray-50
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
