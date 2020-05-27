import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.between('xs', 'sm')]: {
		personContainer: {
			display: 'inline-flex',
			width: '100%',
			justifyContent: 'center',
		},
		person: {
			width: '100%',
			display: 'inline-flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},

		personCardContainer: {
			width: '300px',
		},

		personDetailsContainer: {
			width: '95vw',
			padding: `${theme.spacing(1)}px`,
			border: `2px solid ${theme.border.primary}`,
			borderLeft: 'none',
			display: 'inline-flex',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {},
	[theme.breakpoints.between('md', 'lg')]: {},
	[theme.breakpoints.between('lg', 'xl')]: {
		personContainer: {
			display: 'inline-flex',
			width: '100%',
			justifyContent: 'center',
		},
		person: {
			width: ' 850px',
			display: 'inline-flex',
			justifyContent: 'center',
		},

		personCardContainer: {
			width: '300px',
		},

		personDetailsContainer: {
			width: '518px',
			padding: `${theme.spacing(1)}px`,
			border: `2px solid ${theme.border.primary}`,
			borderLeft: 'none',
		},
	},
}))
