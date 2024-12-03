/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			inconsolata: ["Inconsolata", "sans-serif"],
			"dm-sans": ["DM Sans", "sans-serif"],
			lato: ["Lato", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
