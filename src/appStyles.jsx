import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.between('xs', 'sm')]: {
		container: {
			fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
		},
		inner: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			margin: '0 auto',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {},
	[theme.breakpoints.between('md', 'lg')]: {},
	[theme.breakpoints.between('lg', 'xl')]: {
		container: {
			height: '100vh',
			width: '100vw',
			fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
		},
		inner: {
			maxWidth: '300px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			margin: '0 auto',
			height: '100vh',
			width: '100vw',
		},
	},
}))
