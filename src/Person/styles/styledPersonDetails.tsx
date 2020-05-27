import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.between('xs', 'sm')]: {
		personDetails: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100%',
			flex: '1',
		},
		contact: {
			color: theme.links.primary,
			marginTop: '15px',
			border: `1px solid ${theme.links.primary}`,
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {},
	[theme.breakpoints.between('md', 'lg')]: {},
	[theme.breakpoints.between('lg', 'xl')]: {
		personDetails: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100%',
			flex: '1',
		},
		contact: {
			color: theme.links.primary,
		},
	},
}))
