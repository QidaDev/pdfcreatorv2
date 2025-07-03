import { createTw } from 'react-pdf-tailwind'

export const tw = createTw({
		content: ['../index.css'],
		theme: {
			extend: {
				colors: {
					primary: {
						DEFAULT: '#004039',
						50: '#E6ECEB',
						100: '#B0C4C2',
						200: '#8AA7A4',
						400: '#336661',
						500: '#004039',
						600: '#003A34',
					},
					secondary: '#FF8A5D',
					tertiary: '#FFEFDA',
					neutral: {
						100: '#F5F5F5',
						200: '#E5E5E5',
						300: '#CCCCCC',
						400: '#B3B3B3',
						500: '#999999',
						600: '#808080',
						700: '#666666',
						800: '#444444',
						900: '#333333',
					},
					white: '#FFFFFF',
					black: '#000000',
					informative: {
						50: '#E6FAF9',
						100: '#B0EFEC',
						700: '#00918A',
					},
					success: {
						50: '#E8F8EF',
						700: '#0e8343',
					},
					warning: {
						50: '#FEFAE9',
						100: '#FBF1BB',
						300: '#F7E06D',
						700: '#AD941A',
					},
					error: {
						50: '#FDEAEA',
						100: '#F8BFBF',
						300: '#F07474',
						700: '#A52222',
					},
					section: {
						yellow: '#FDC646',
						green: '#9ECA38',
						turquoise: '#17AA9C',
						purple: '#C763B1',
						red: '#DF3640',
						orange: '#EE5A21',
						blue: '#4BA8DF'
					},
					sectionLight: {
						yellow: '#FEE5AA',
						green: '#D2E7A3', 
						turquoise: '#94D8D1',
						purple: '#E5B7DB',
						red: '#F0A3A7',
						orange: '#F7B399',
						blue: '#ACD7F0',
					},
					sectionDark: {
						yellow: '#6A531D',
						green: '#425518', 
						turquoise: '#0A4742',
						purple: '#542A4A',
						red: '#5E171B',
						orange: '#64260E',
						blue: '#20475E',
					},
					tag: {
						red: '#960018',
						orange: '#FFBF00',
						green: '#008000',
					},
					red: '#960018',
					orange: '#FFBF00',
					green: '#008000',
				},
				fontFamily: {
					montserrat: 'Montserrat',
					aeonik: 'Aeonik',
				},
		},
	},
})
