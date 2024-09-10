/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: 'hsl(var(--orange))',
				gray: 'hsl(var(--gray))',
				blue: 'hsl(var(--blue))',
				dark_green: 'hsl(var(--dark-green))',
				dark: 'hsl(var(--dark))',
			},
		},
	},
	plugins: [],
}
