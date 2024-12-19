import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         customBlue: '#0084FF',
         customBlue2: '#2F327D',
         customBlue3: '#595B97',
         customBlue4: '#595B97',
         customBlue5: '#F8FCFF',
         customBlue6: '#423C65',
         customBlue7: '#423C65',
         customGray: '#AEAEAE',
         customGray2: '#B2B7BE',
         customBlack: '#171717',
         customWhite: '#FFFFFF',
         customRed: '#FF0000',
         customGreen: '#00FF00',
         customYellow: '#FFFF00',
         backgroundcolor1: '#EDFAFE',
         backgroundcolor2: '#F8F7FE',
         backgroundcolor3: '#F0FBF8',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        light: '0.01em',
      },
    },
  },
  plugins: [],
} satisfies Config;
