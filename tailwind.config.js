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
	  container: {
		center: true, // Center the container by default
		padding: "1rem", // Add horizontal padding
	  },
	},
	plugins: [],
  };
  