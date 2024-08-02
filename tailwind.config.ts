import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "100": "1024px",
        "80": "800px",
        "90": "900px",
        "50": "500px",
        "60": "600px",
        "70": "700px",
      },
      scale: {
        "10": "10%",
        "20": "20%",
        "30": "30%",
        "40": "40%",
      },
    },
  },
  plugins: [],
};

export default config;
