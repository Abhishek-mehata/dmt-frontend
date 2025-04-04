/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9d63df",
        "light-primary": "#9C59DF9E",
        "fade-purple": "#f4eff6",
        "dark-purple": "#3F3D56",
        "dark-blue": "#172B4D",
        midnight: "#121721",
        "light-gray": "#C1C7D0",
        "dark-gray": "#434859",
        gray: "#8B9199",
        white: "#ffffff",
        "fade-white": "#E5E5E5",
        success: "#4DDA63",
        warning: "#F4DE19",
        danger: "#E2445C",
      },
      screens: {
        'xsss': '370px',
        'xss': '450px',
        'xs': '480px',   // Extra small devices
        'sm': '640px',   // Small devices (default)
        'md': '768px',   // Medium devices (default)
        'sc': '992px',
        'lg': '1024px',  // Large devices (default)
        'xl': '1280px',  // Extra large devices (default)
        '2xl': '1536px', // 2x large devices (default)
        '3xl': '1800px', // Custom extra large breakpoint
      },
    },
  },
  plugins: [],
};
