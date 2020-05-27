import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createMuiTheme' {
	interface Theme {
		palette: Palette
		links: {
			primary: string
			secondary: string
		}
		border: {
			primary: string
			secondary: string
		}
	}
	// allow configuration using `createMuiTheme`
	interface ThemeOptions {
		palette?: PaletteOptions
		links?: {
			primary: string
			secondary: string
		}
		border?: {
			primary: string
			secondary: string
		}
	}
}
export const theme = createMuiTheme({
	border: {
		primary: '#E1E3EA',
		secondary: '#E1E3EA',
	},
	links: {
		primary: '#0072BC',
		secondary: '#5AB4EF',
	},
	palette: {
		text: {
			primary: '#000000',
			secondary: '#808080',
		},
		primary: {
			main: '#49A078',
		},
		secondary: {
			main: '#216869',
		},
		background: {
			paper: '#FFFFFF',
			default: '#FBFBFD',
		},
	},
})
