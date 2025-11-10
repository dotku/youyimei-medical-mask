/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#b3e8e8',
          200: '#80d9d9',
          300: '#4dcaca',
          400: '#26bcbc',
          500: '#00ada8',  // Main teal color
          600: '#009a96',
          700: '#008583',
          800: '#007070',
          900: '#005252',
        },
      },
    },
  },
  plugins: [],
}
