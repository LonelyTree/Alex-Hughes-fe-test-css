import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.between('xs', 'sm')]: {
		personCredit: {
			'display': 'flex',
			'width': '100%',
			'justifyContent': 'space-between',
			'alignItems': 'center',
			'&:not(:last-of-type)': {
				borderBottom: `1px solid ${theme.border.primary}`,
			},
		},
		creditRight: {
			display: 'inline - flex',
			flexDirection: 'column',
			alignItems: 'flex-end',
			height: '100%',
			justifyContent: 'flex-end',
		},
		creditLeft: {},
		creditTop: {
			margin: `${theme.spacing(1)}px 0`,
		},
		topLeft: {
			fontWeight: '800',
			fontSize: '4.5vw',
		},
		topRight: {
			fontWeight: 'normal',
			textAlign: 'right',
			margin: '8px 0',
			fontSize: '4.5vw',
		},
		creditBottomLeft: {
			fontWeight: '400',
			fontSize: '4vw',
			color: theme.palette.text.secondary,
		},
		creditBottomRight: {
			textAlign: 'right',
			fontSize: '4vw',
		},
	},
	[theme.breakpoints.between('sm', 'md')]: {},
	[theme.breakpoints.between('md', 'lg')]: {},
	[theme.breakpoints.between('lg', 'xl')]: {
		personCredit: {
			'display': 'flex',
			'width': '100%',
			'justifyContent': 'space-between',
			'alignItems': 'center',
			'&:not(:last-of-type)': {
				borderBottom: `1px solid ${theme.border.primary}`,
			},
		},
		creditRight: {
			display: 'inline - flex',
			flexDirection: 'column',
			alignItems: 'flex-end',
			height: '100%',
			justifyContent: 'flex-end',
		},
		creditLeft: {},
		creditTop: {
			margin: `${theme.spacing(1)}px 0`,
		},
		topLeft: {
			fontWeight: '800',
		},
		topRight: {
			fontWeight: 'normal',
			textAlign: 'right',
			margin: '8px 0',
		},
		creditBottomLeft: {
			fontWeight: '400',
			color: theme.palette.text.secondary,
		},
		creditBottomRight: {
			textAlign: 'right',
		},
	},
}))
