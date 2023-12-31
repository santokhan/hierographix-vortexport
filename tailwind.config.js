/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Santo
  theme: {
    extend: {
      colors: {
        vpurple: {
          500: "#9C85FB",
          600: "hsl(252 94% 66% / 1)",
          900: "#1E1F33",
          950: "#07081E"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        vlinear: 'linear-gradient(90deg, #886DF5 0%, #9C85FB 100%)',
        "vlinear-hover": 'linear-gradient(90deg,hsl(252 87% 57% / 1) 0%,hsl(252 94% 64% / 1) 100%)'
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class'
}
