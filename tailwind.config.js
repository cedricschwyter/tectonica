/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#007B84'
      }
    },
  },
  daisyui: {
    themes: [
      {
        tectonica: {
          "primary": "#007B84",
          "secondary": "#512DA8",
          "accent": "#009688",
          "neutral": "#E5E5E5",
          "base-100": "#FFFFFF",
          "info": "#03A9F4",
          "success": "#4CAF50",
          "warning": "#FFC107",
          "error": "#F44336"
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}