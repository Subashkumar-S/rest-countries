import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'darkBlue': 'hsl(209, 23%, 22%)',
        'veryDarkBlue' : "hsl(207, 26%, 17%)",
        'veryDarkBlueText': "hsl(200, 15%, 8%)",
        'veryLightGray': "hsl(0, 0%, 98%)",
        'White': "hsl(0, 0%, 100%)",
      },
      fontFamily:{
        'nunito': "Nunito Sans, sans-serif",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
