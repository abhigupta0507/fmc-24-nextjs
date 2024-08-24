/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
        'manrope':["Manrope", "sans-serif"]
      },
      backgroundImage: {
        wrapperImg: "url(/assets/images/Frame.svg)",
        grid: "url(/assets/images/Grid.svg)",
      },
      animation: {
				fade: 'fadeIn .8s ease-in',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
    },
  },
  plugins: [
    // require("tailwindcss-animation-delay"),
    require('tailwindcss-animated'),
  ],
};
