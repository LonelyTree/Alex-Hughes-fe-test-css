import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.between('xs', 'sm')]: {
		person: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: theme.palette.background.default,
			border: `2px solid ${theme.border.primary}`,
			justifyContent: 'center',
			alignItems: 'center',
			padding: `${theme.spacing(1.3)}px 0`,
			marginTop: '4px',
		},

		personCardAvatar: {
			height: '158px',
			width: '158px',
			borderRadius: '100%',
			border: `4px solid ${theme.border.primary}`,
		},

		link: {
			'color': theme.links.primary,
			'transition': ' .4s ease',

			'&:hover': {
				color: theme.links.secondary,
				cursor: 'pointer',
			},
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {},
	[theme.breakpoints.between('md', 'lg')]: {},
	[theme.breakpoints.between('lg', 'xl')]: {
		person: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: theme.palette.background.default,
			border: `2px solid ${theme.border.primary}`,
			justifyContent: 'center',
			alignItems: 'center',
			padding: `${theme.spacing(2)}px 0`,
		},

		personCardAvatar: {
			height: '158px',
			width: '158px',
			borderRadius: '100%',
			border: `4px solid ${theme.border.primary}`,
		},

		link: {
			'color': theme.links.primary,
			'transition': ' .4s ease',

			'&:hover': {
				color: theme.links.secondary,
				cursor: 'pointer',
			},
		},
	},
}))
