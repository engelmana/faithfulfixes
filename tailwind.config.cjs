/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Rubik'],
				header: ['Inter']
			},
			width: {
				header: '1710px'
			},
			height: {
				header: '475px'
			},
			colors: {
				btn: '#00AAFF',
				background: '#B4B4B4'
			}
		}
	},
	plugins: []
};
