/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateAreas: {
				layout: [
					'header header header',
					'sidebar content content',
					'footer footer footer',
				],
				col1: ['col1'],
				col1_col2: ['col1 col2'],
				col2_col1: ['col2 col1'],
				col1_col1_col2_col2: ['col1 col1', 'col2 col2'],
			},
			colors: {
				white: '#f7f8fa',
				black: '#010606',
				cyan: '#00BCD4',
			},
			backgroundImage: () => ({
				hero: "url('/src/assets/images/herobgdark3.png')",
				'hero-mobile': "url('/src/assets/images/herobgdark4.png')",
			}),
			zIndex: {
				1: '1',
				3: '3',
			},
			boxShadow: {
				md: '0px 5px 11px 2px rgba(0,0,0,0.7)',
			},
		},
		screens: {
			xs: '375px',
			sm: '480px',
			md: '768px',
			lg: '1000px',
			xl: '1400px',
		},
	},
	plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
