/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"halo": "#9f999",
			},
			gridTemplateColumns: {
				"card": 'repeat(auto-fit, minmax(24ch, 1.5fr));',
			}
		},
	},
	plugins: [],
}
