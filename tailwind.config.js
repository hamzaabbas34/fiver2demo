/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // For React files
		"./public/index.html", // For static HTML files
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['montserrat', 'serif'],
				secular: ['Secular One', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
