/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },

      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      spacing: {
        4: "0.25rem",
        8: "0.5rem",
        12: "0.75rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        32: "2rem",
        40: "2.5rem",
        60: "3.75rem",
        80: "5rem",
        100: "6.25rem",
        120: "7.5rem",
      },
      colors: {
        primary: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
          950: "#042F2E",
        },
        secondary: {
          50: "#FDF2E5",
          100: "#F4DFC8",
          200: "#ECCDAC",
          300: "#DFB88E",
          400: "#C99A68",
          500: "#BF8546",
          600: "#AC6F2E",
          700: "#9A5E1F",
          800: "#77430D",
          900: "#573006",
          950: "#381E03",
          999: "#282521",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        warning: {},
        error: {},
        success: {},

        container: {
          center: true, // Центровка контейнера
          padding: "2.5rem", // Внутренний отступ (40px)
        },
      },
    },
  },
  plugins: [],
};
